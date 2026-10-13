import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Ise, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { Io, kUe, Jnn, Pzn, Gxe, Wko, nPs } from "/$bunfs/root/chunk-63xa24b4.js";
import { Ug } from "/$bunfs/root/chunk-ezr23nse.js";
import { tt, k, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Pe } from "/$bunfs/root/chunk-rkw8s9xd.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Md } from "/$bunfs/root/chunk-3yz9zdww.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ae, YSe, Nu } from "/$bunfs/root/chunk-223dyewd.js";
import { ea } from "/$bunfs/root/chunk-75wzvwyz.js";
import { mm, zV } from "/$bunfs/root/chunk-peahjaep.js";
import { KXe, $dn, gje } from "/$bunfs/root/chunk-vqyxznfw.js";
import { Hi, on, ia, EG } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, Te, P, Co, Z, R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { nx, V$t } from "/$bunfs/root/chunk-4nfvaqps.js";
import { Xje, pUt } from "/$bunfs/root/chunk-jyn472pw.js";
import { tx, V } from "/$bunfs/root/chunk-zby5bms5.js";
import { Eo } from "/$bunfs/root/chunk-4b1qzs5x.js";
import { Zle } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { Jq } from "/$bunfs/root/chunk-z47a2vff.js";
import { L$t, N$t } from "/$bunfs/root/chunk-9qns2dz5.js";
import { C0r, vy } from "/$bunfs/root/chunk-gq8z4r72.js";
import { Tc, n0s, r0s, yCn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Sg } from "/$bunfs/root/chunk-0v20st7x.js";
import { tUt, nUt, mBo, Bpn } from "/$bunfs/root/chunk-19749pds.js";
import { Lve, R_, Kgt } from "/$bunfs/root/chunk-nbbfega5.js";
import { lOe } from "/$bunfs/root/chunk-s35892ey.js";
import { Wn } from "/$bunfs/root/chunk-4j5kjctm.js";
import { xK, _ae, h3o, $4r, y3o } from "/$bunfs/root/chunk-t1d2nw6r.js";
import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
import { ra, KSe, uAo } from "/$bunfs/root/chunk-98pm569t.js";
import { vo } from "/$bunfs/root/chunk-6cee9jwv.js";
import { O, yOs } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { copyFile, mkdir, readFile, writeFile } from "fs/promises";
import { homedir, platform } from "os";
import { dirname, join, basename, isAbsolute } from "path";
const p = `
`;
const ve = {
    ghostty: "Ghostty",
    kitty: "Kitty",
    "iTerm.app": "iTerm2",
    WezTerm: "WezTerm",
    WarpTerminal: "Warp",
    "windows-terminal": "Windows Terminal"
};
function Ve() {
    let e = a.VSCODE_GIT_ASKPASS_MAIN ?? "";
    let r = a.PATH ?? "";
    return e.includes(".vscode-server") || e.includes(".cursor-server") || e.includes(".windsurf-server") || e.includes(".devin-server") || r.includes(".vscode-server") || r.includes(".cursor-server") || r.includes(".windsurf-server") || r.includes(".devin-server");
}
function MYn() {
    if (!a.terminal || !(a.terminal in ve)) {
        return null;
    }
    return ve[a.terminal] ?? null;
}
function He() {
    return "";
}
async function HYn(e, r, n) {
    let s = "";
    let o = true;
    switch(a.terminal){
        case "Apple_Terminal":
            s = await er(r, n);
            break;
        case "vscode":
            s = await rt(e, "VSCode", r);
            s += await et(e, "VSCode", r);
            s += await k0r(e, "VSCode", r);
            break;
        case "cursor":
            s = await rt(e, "Cursor", r);
            s += await et(e, "Cursor", r);
            s += await k0r(e, "Cursor", r);
            break;
        case "windsurf":
            s = await rt(e, "Devin Desktop", r);
            s += await et(e, "Devin Desktop", r);
            s += await k0r(e, "Devin Desktop", r);
            break;
        case "alacritty":
            s = await tr(r);
            break;
        case "zed":
            {
                let l = await rr(r);
                s = l.message;
                o = l.installed;
                break;
            }
        case null:
            break;
    }
    await Ae((l)=>{
        if (o && yt.includes(a.terminal ?? "")) {
            if (l.shiftEnterKeyBindingInstalled === true) {
                return l;
            }
            return {
                ...l,
                shiftEnterKeyBindingInstalled: true
            };
        } else if (a.terminal === "Apple_Terminal") {
            if (l.optionAsMetaKeyInstalled === true) {
                return l;
            }
            return {
                ...l,
                optionAsMetaKeyInstalled: true
            };
        }
        return l;
    }, n);
    return s;
}
const wt = 'iTerm2 → Settings → General → Selection → check "Applications in terminal may access clipboard"';
async function EHs(e) {
    let r = ge.dim(wt);
    try {
        let { stdout, code } = await it("defaults", [
            "read",
            "com.googlecode.iterm2",
            "AllowClipboardAccess"
        ]);
        if (code === 0 && stdout.trim() === "1") {
            return `${Wn("success", e)("iTerm2 clipboard access already enabled")}${p}${p}`;
        }
        let { code: code_1 } = await it("defaults", [
            "write",
            "com.googlecode.iterm2",
            "AllowClipboardAccess",
            "-bool",
            "true"
        ]);
        if (code_1 !== 0) {
            return `${Wn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
        }
        return `${Wn("success", e)('Enabled "Applications in terminal may access clipboard" in iTerm2')}${p}${ge.dim("Restart iTerm2 for this to take effect. Undo: defaults write com.googlecode.iterm2 AllowClipboardAccess -bool false")}${p}${p}`;
    } catch (error) {
        c(error);
        return `${Wn("warning", e)("Couldn't update iTerm2 clipboard setting.")}${p}${r}${p}${p}`;
    }
}
function kHs() {
    return ce().shiftEnterKeyBindingInstalled === true;
}
var yt = [
    "vscode",
    "cursor",
    "windsurf",
    "alacritty",
    "zed"
];
function EIe() {
    if (a.terminal === "Apple_Terminal" && platform() === "darwin") {
        return true;
    }
    if (a.terminal && a.terminal in ve) {
        return true;
    }
    return yt.includes(a.terminal ?? "") && kHs();
}
function v0r() {
    return ce().hasUsedBackslashReturn === true;
}
function cNo(e) {
    if (!ce().hasUsedBackslashReturn) {
        Ae((n)=>({
                ...n,
                hasUsedBackslashReturn: true
            }), e);
    }
}
async function vBs(e, r, n) {
    if (platform() === "darwin" && a.__CFBundleIdentifier === "com.googlecode.iterm2" && (a.terminal === "iTerm.app" || a.terminal === "tmux" || a.terminal === "screen" || a.terminal === null)) {
        let l = `${await EHs(r.options.theme)}Shift+Enter is natively supported in iTerm2.

No configuration needed. Just use Shift+Enter to add newlines.${He()}`;
        e(l);
        return null;
    }
    if (a.terminal && a.terminal in ve) {
        let o = `Shift+Enter is natively supported in ${ve[a.terminal]}.

No configuration needed. Just use Shift+Enter to add newlines.${He()}`;
        e(o);
        return null;
    }
    if (!lOe()) {
        let o = a.terminal || "your current terminal";
        let l = O();
        let d = "";
        if (l === "macos") {
            d = `   \u2022 macOS: Apple Terminal
`;
        }
        let h = a.LC_TERMINAL === "iTerm2" ? `${p}${p}You appear to be connected from iTerm2 on another machine. For /copy to reach your local clipboard, on that machine open:${p}${ge.dim(wt)}` : "";
        let S = `Terminal setup cannot be run from ${o}.

This command configures a convenient Shift+Enter shortcut for multi-line prompts.
${ge.dim("Note: You can already use backslash (\\\\) + return to add newlines.")}

To set up the shortcut (optional):
1. Exit tmux/screen temporarily
2. Run /terminal-setup directly in one of these terminals:
${d}   \u2022 IDE: VSCode, Cursor, Devin Desktop, Zed
   \u2022 Other: Alacritty
3. Return to tmux/screen - settings will persist

${ge.dim("Note: iTerm2, WezTerm, Ghostty, Kitty, Warp, and Windows Terminal support Shift+Enter natively.")}${h}${He()}`;
        e(S);
        return null;
    }
    let s = await HYn(r.session.host, r.options.theme, r.storageV5);
    e(s + He());
    return null;
}
const Oe = "terminal.integrated.mouseWheelScrollSensitivity";
const recommended = 3;
const Ke = "terminal.integrated.gpuAcceleration";
const Xe = "off";
async function E0r(e) {
    let editor = Xt();
    if (!editor || Ve()) {
        return null;
    }
    try {
        let n = await readFile(join(await DYn.of(e).pathFor(editor), "settings.json"), {
            encoding: "utf-8"
        });
        let s = Gxe(n);
        let o = L(s) ? s[Oe] : undefined;
        return {
            editor,
            sensitivity: typeof o === "number" ? o : null,
            recommended
        };
    } catch (error) {
        if (!jt(error)) {
            c(error);
        }
        return {
            editor,
            sensitivity: null,
            recommended
        };
    }
}
function Xt() {
    switch(a.terminal){
        case "vscode":
            return "VSCode";
        case "cursor":
            return "Cursor";
        case "windsurf":
            return "Devin Desktop";
        default:
            return null;
    }
}
class xt {
    pathFor = po(async (e)=>{
        let r = (n)=>join(homedir(), platform() === "win32" ? join("AppData", "Roaming", n, "User") : platform() === "darwin" ? join("Library", "Application Support", n, "User") : join(".config", n, "User"));
        if (e === "VSCode") {
            return r("Code");
        }
        if (e === "Devin Desktop") {
            let n = r("Devin");
            if (await Md(n)) {
                return n;
            }
            return r("Windsurf");
        }
        return r(e);
    }, (e)=>`${e}:${homedir()}`);
}
var DYn = new q(()=>new xt);
async function et(e, r, n) {
    let s = ge.dim(`For smoother scrolling, set "${Oe}": ${recommended} in ${r} settings.`);
    if (Ve()) {
        return `${s}${p}`;
    }
    let o = join(await DYn.of(e).pathFor(r), "settings.json");
    try {
        let l = "{}";
        let d = false;
        try {
            l = await readFile(o, {
                encoding: "utf-8"
            });
            d = true;
        } catch (error) {
            if (!jt(error)) {
                throw error;
            }
        }
        let h = Gxe(l);
        if (!L(h)) {
            return `${Wn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
        }
        if (Oe in h) {
            return `${Wn("success", n)(`${r} ${Oe} already set; leaving as-is`)}${p}${ge.dim(`See ${o}`)}${p}`;
        }
        let S = Wko(l, Oe, recommended);
        if (S === l) {
            return `${Wn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
        }
        if (d) {
            let T = `${o}.${randomBytes(4).toString("hex")}.bak`;
            try {
                await copyFile(o, T);
            } catch  {
                return `${Wn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`;
            }
        }
        await writeFile(o, S, {
            encoding: "utf-8"
        });
        return `${Wn("success", n)(`Set ${r} terminal scroll sensitivity to ${recommended}`)}${p}${ge.dim(`See ${o}`)}${p}`;
    } catch (error) {
        t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return `${Wn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    }
}
async function k0r(e, r, n) {
    let s = ge.dim(`To fix garbled text, set "${Ke}": "${Xe}" in ${r} settings (undo: set it back to "auto").`);
    if (Ve()) {
        f("terminal_setup_gpu_accel", "remote_ssh");
        return `${s}${p}`;
    }
    let o = join(await DYn.of(e).pathFor(r), "settings.json");
    try {
        let l = "{}";
        let d = false;
        try {
            l = await readFile(o, {
                encoding: "utf-8"
            });
            d = true;
        } catch (error) {
            if (!jt(error)) {
                throw error;
            }
        }
        let h = Gxe(l);
        if (!L(h)) {
            f("terminal_setup_gpu_accel", "not_json_object");
            return `${Wn("warning", n)(`${r} settings.json isn't a JSON object; not modifying it.`)}${p}${s}${p}`;
        }
        if (h[Ke] === Xe) {
            g("terminal_setup_gpu_accel");
            return `${Wn("success", n)(`${r} GPU acceleration already off; leaving as-is`)}${p}${ge.dim(`See ${o}`)}${p}`;
        }
        let S = Wko(l, Ke, Xe);
        if (S === l) {
            f("terminal_setup_gpu_accel", "write_failed");
            return `${Wn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
        }
        if (d) {
            let T = `${o}.${randomBytes(4).toString("hex")}.bak`;
            try {
                await copyFile(o, T);
            } catch  {
                f("terminal_setup_gpu_accel", "backup_failed");
                return `${Wn("warning", n)(`Couldn't back up ${r} settings.json; not modifying it.`)}${p}${s}${p}`;
            }
        }
        await writeFile(o, S, {
            encoding: "utf-8"
        });
        g("terminal_setup_gpu_accel");
        return `${Wn("success", n)(`Turned off ${r} GPU acceleration to fix garbled text`)}${p}${ge.dim(`Reload the ${r} window to apply. Undo: set "${Ke}" back to "auto".`)}${p}${ge.dim(`See ${o}`)}${p}`;
    } catch (error) {
        f("terminal_setup_gpu_accel", "write_failed");
        t(`Couldn't update ${r} settings.json at ${o}: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return `${Wn("warning", n)(`Couldn't update ${r} settings.json.`)}${p}${s}${p}`;
    }
}
async function rt(e, r = "VSCode", n) {
    if (Ve()) {
        return `${Wn("warning", n)(`Cannot install keybindings from a remote ${r} session.`)}${p}${p}${r} keybindings must be installed on your local machine, not the remote server.${p}${p}To install the Shift+Enter keybinding:${p}1. Open ${r} on your local machine (not connected to remote)${p}2. Open the Command Palette (Cmd/Ctrl+Shift+P) \u2192 "Preferences: Open Keyboard Shortcuts (JSON)"${p}3. Add this keybinding (the file must be a JSON array):${p}${p}${ge.dim(`[
  {
    "key": "shift+enter",
    "command": "workbench.action.terminal.sendSequence",
    "args": { "text": "\\u001b\\r" },
    "when": "terminalFocus"
  }
]`)}${p}`;
    }
    let s = await DYn.of(e).pathFor(r);
    let o = join(s, "keybindings.json");
    try {
        await mkdir(s, {
            recursive: true
        });
        let l = "[]";
        let d = [];
        let h = false;
        try {
            l = await readFile(o, {
                encoding: "utf-8"
            });
            h = true;
            d = Gxe(l) ?? [];
        } catch (error) {
            if (!jt(error)) {
                throw error;
            }
        }
        if (h) {
            let M = randomBytes(4).toString("hex");
            let H = `${o}.${M}.bak`;
            try {
                await copyFile(o, H);
            } catch  {
                return `${Wn("warning", n)(`Error backing up existing ${r} terminal keybindings. Bailing out.`)}${p}${ge.dim(`See ${o}`)}${p}${ge.dim(`Backup path: ${H}`)}${p}`;
            }
        }
        let S = {
            key: "shift+enter",
            command: "workbench.action.terminal.sendSequence",
            args: {
                text: "\x1B\r"
            },
            when: "terminalFocus"
        };
        let T = d.find((M)=>M.key === S.key && M.command === S.command && M.when === S.when);
        if (T) {
            let M = ge.dim(`See ${o}`);
            if (T.args?.text === S.args.text) {
                return `${Wn("success", n)(`${r} terminal Shift+Enter key binding already configured`)}${p}${M}${p}`;
            }
            return `${Wn("warning", n)(`${r} already has a Shift+Enter terminal binding with different args; leaving it as-is.`)}${p}${M}${p}`;
        }
        let C = nPs(l, S);
        await writeFile(o, C, {
            encoding: "utf-8"
        });
        return `${Wn("success", n)(`Installed ${r} terminal Shift+Enter key binding`)}${p}${ge.dim(`See ${o}`)}${p}`;
    } catch (error) {
        t(`Failed to install ${r} terminal Shift+Enter keybinding: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        throw Error(`Failed to install ${r} terminal Shift+Enter key binding`);
    }
}
async function pt(e) {
    let { code } = await it("/usr/libexec/PlistBuddy", [
        "-c",
        `Add :'Window Settings':'${e}':useOptionAsMetaKey bool true`,
        nUt()
    ]);
    if (code !== 0) {
        let { code: code_1 } = await it("/usr/libexec/PlistBuddy", [
            "-c",
            `Set :'Window Settings':'${e}':useOptionAsMetaKey true`,
            nUt()
        ]);
        if (code_1 !== 0) {
            t(`Failed to enable Option as Meta key for Terminal.app profile: ${e}`, {
                level: "error"
            });
            return false;
        }
    }
    return true;
}
async function gt(e) {
    let { code } = await it("/usr/libexec/PlistBuddy", [
        "-c",
        `Add :'Window Settings':'${e}':Bell bool false`,
        nUt()
    ]);
    if (code !== 0) {
        let { code: code_1 } = await it("/usr/libexec/PlistBuddy", [
            "-c",
            `Set :'Window Settings':'${e}':Bell false`,
            nUt()
        ]);
        if (code_1 !== 0) {
            t(`Failed to disable audio bell for Terminal.app profile: ${e}`, {
                level: "error"
            });
            return false;
        }
    }
    return true;
}
async function er(e, r) {
    let n = (yOs() ?? 0) >= 27;
    let s = mm();
    if (n && s) {
        return `${Wn("success", e)("No Terminal.app changes needed.")}${p}${ge.dim("Shift+Return already enters a newline on this macOS version, and screen-reader mode leaves the audible bell setting unchanged.")}${p}`;
    }
    try {
        if (!await mBo(r)) {
            throw Error("Failed to create backup of Terminal.app preferences, bailing out");
        }
        let { stdout, code } = await it("defaults", [
            "read",
            "com.apple.Terminal",
            "Default Window Settings"
        ]);
        if (code !== 0 || !stdout.trim()) {
            throw Error("Failed to read default Terminal.app profile");
        }
        let { stdout: stdout_1, code: code_1 } = await it("defaults", [
            "read",
            "com.apple.Terminal",
            "Startup Window Settings"
        ]);
        if (code_1 !== 0 || !stdout_1.trim()) {
            throw Error("Failed to read startup Terminal.app profile");
        }
        let T = false;
        let C = stdout.trim();
        let M = n ? false : await pt(C);
        let H = s ? false : await gt(C);
        if (M || H) {
            T = true;
        }
        let G = stdout_1.trim();
        if (G !== C) {
            let Y = n ? false : await pt(G);
            let I = s ? false : await gt(G);
            if (Y || I) {
                T = true;
            }
        }
        if (!T) {
            if (n) {
                throw Error("Failed to disable audio bell for any Terminal.app profile");
            }
            if (s) {
                throw Error("Failed to enable Option as Meta key for any Terminal.app profile");
            }
            throw Error("Failed to enable Option as Meta key or disable audio bell for any Terminal.app profile");
        }
        await it("killall", [
            "cfprefsd"
        ]);
        await tUt(r);
        let te = [
            Wn("success", e)("Configured Terminal.app settings:")
        ];
        if (!n) {
            te.push(Wn("success", e)('- Enabled "Use Option as Meta key"'));
        }
        if (!s) {
            te.push(Wn("success", e)("- Disabled the audible bell"));
        } else {
            te.push(ge.dim("- Left the audible bell setting unchanged (screen-reader mode uses it)"));
        }
        let j = n ? ge.dim("Shift+Return will now enter a newline.") : ge.dim("Option+Enter will now enter a newline.");
        return `${te.join(p)}${p}${j}${p}${ge.dim("You must restart Terminal.app for changes to take effect.")}${p}`;
    } catch (error) {
        t(`Terminal.app setup failed: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        let l = await Bpn(r);
        let d = n ? "Failed to disable the audio bell for Terminal.app." : "Failed to enable Option as Meta key for Terminal.app.";
        if (l.status === "restored") {
            throw Error(`${d} Your settings have been restored from backup.`);
        } else if (l.status === "failed") {
            throw Error(`${d} Restoring from backup failed, try manually with: defaults import com.apple.Terminal ${l.backupPath}`);
        } else {
            throw Error(`${d} No backup was available to restore from.`);
        }
    }
}
async function tr(e) {
    let n = [];
    let a_XDG_CONFIG_HOME = a.XDG_CONFIG_HOME;
    if (a_XDG_CONFIG_HOME) {
        n.push(join(a_XDG_CONFIG_HOME, "alacritty", "alacritty.toml"));
    } else {
        n.push(join(homedir(), ".config", "alacritty", "alacritty.toml"));
    }
    if (platform() === "win32") {
        let h = a.APPDATA;
        if (h) {
            n.push(join(h, "alacritty", "alacritty.toml"));
        }
    }
    let o = null;
    let l = "";
    let d = false;
    for (let h of n){
        try {
            l = await readFile(h, {
                encoding: "utf-8"
            });
            o = h;
            d = true;
            break;
        } catch (error) {
            if (!jt(error)) {
                throw error;
            }
        }
    }
    if (!o) {
        o = n[0] ?? null;
    }
    if (!o) {
        throw Error("No valid config path found for Alacritty");
    }
    try {
        if (d) {
            if (l.includes('mods = "Shift"') && l.includes('key = "Return"')) {
                return `${Wn("success", e)("Alacritty Shift+Enter key binding already configured")}${p}${ge.dim(`See ${o}`)}${p}`;
            }
            let S = randomBytes(4).toString("hex");
            let T = `${o}.${S}.bak`;
            try {
                await copyFile(o, T);
            } catch  {
                return `${Wn("warning", e)("Error backing up existing Alacritty config. Bailing out.")}${p}${ge.dim(`See ${o}`)}${p}${ge.dim(`Backup path: ${T}`)}${p}`;
            }
        } else {
            await mkdir(dirname(o), {
                recursive: true
            });
        }
        let h = l;
        if (l && !l.endsWith(`
`)) {
            h += `
`;
        }
        h += `
[[keyboard.bindings]]
key = "Return"
mods = "Shift"
chars = "\\u001B\\r"
`;
        await writeFile(o, h, {
            encoding: "utf-8"
        });
        return `${Wn("success", e)("Installed Alacritty Shift+Enter key binding")}${p}${Wn("success", e)("You may need to restart Alacritty for changes to take effect")}${p}${ge.dim(`See ${o}`)}${p}`;
    } catch (error) {
        t(`Failed to install Alacritty keybinding: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        throw Error("Failed to install Alacritty Shift+Enter key binding");
    }
}
const nt = [
    "terminal::SendText",
    "\x1B\r"
];
function bt(e) {
    return L(e) && e.context === "Terminal" && L(e.bindings) && "shift-enter" in e.bindings;
}
async function rr(e) {
    let r = O() === "linux" ? a.XDG_CONFIG_HOME : undefined;
    let n = r ? join(r, "zed") : join(homedir(), ".config", "zed");
    let s = join(n, "keymap.json");
    let o = ge.dim(`See ${s}`);
    let l = ge.dim(`To add the binding yourself, add this block to the keymap array in ${s}:${p}{ "context": "Terminal", "bindings": { "shift-enter": ["terminal::SendText", "\\u001b\\r"] } }`);
    let d = `${Wn("success", e)("Installed Zed Shift+Enter key binding")}${p}${o}${p}`;
    let h = `${Wn("warning", e)("Couldn't read your Zed keymap, so it was left unchanged.")}${p}${l}${p}`;
    let S = `${Wn("warning", e)("Your Zed keymap isn't a readable list of keybindings, so it was left unchanged.")}${p}${l}${p}`;
    try {
        await mkdir(n, {
            recursive: true
        });
        let T = null;
        try {
            T = await readFile(s, {
                encoding: "utf-8"
            });
        } catch (error) {
            if (!jt(error)) {
                throw error;
            }
            if (!z(error)) {
                return {
                    message: h,
                    installed: false
                };
            }
        }
        if (T === null || Io(T).trim() === "") {
            await En(s, _([
                {
                    context: "Terminal",
                    bindings: {
                        "shift-enter": nt
                    }
                }
            ], null, 2) + `
`);
            return {
                message: d,
                installed: true
            };
        }
        let C = [];
        let M = Io(T);
        let H = kUe(M, C, {
            allowTrailingComma: true
        });
        if (C.length > 0 || !Array.isArray(H)) {
            return {
                message: S,
                installed: false
            };
        }
        if (H.some(bt)) {
            return {
                message: `${Wn("success", e)("Zed Shift+Enter key binding already configured")}${p}${o}${p}`,
                installed: true
            };
        }
        let G = randomBytes(4).toString("hex");
        let te = `${s}.${G}.bak`;
        try {
            await copyFile(s, te);
        } catch (error) {
            t(`Failed to back up Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
                level: "error"
            });
            return {
                message: `${Wn("warning", e)("Couldn't back up your Zed keymap; not modifying it.")}${p}${l}${p}`,
                installed: false
            };
        }
        let j = H.findIndex((v)=>L(v) && v.context === "Terminal" && L(v.bindings));
        let formattingOptions = {
            insertSpaces: true,
            tabSize: 2
        };
        let I = null;
        try {
            let v = j >= 0 ? Jnn(M, [
                j,
                "bindings",
                "shift-enter"
            ], nt, {
                formattingOptions
            }) : Jnn(M, [
                H.length
            ], {
                context: "Terminal",
                bindings: {
                    "shift-enter": nt
                }
            }, {
                formattingOptions,
                isArrayInsertion: true
            });
            I = v.length > 0 ? Pzn(M, v) : null;
        } catch (error) {
            t(`Failed to edit Zed keymap: ${error instanceof Error ? error.message : String(error)}`, {
                level: "error"
            });
        }
        let B = [];
        let J = I === null ? null : kUe(I, B, {
            allowTrailingComma: true
        });
        if (I === null || B.length > 0 || !Array.isArray(J) || !J.some(bt)) {
            return {
                message: `${Wn("warning", e)("Couldn't update your Zed keymap, so it was left unchanged.")}${p}${l}${p}`,
                installed: false
            };
        }
        await En(s, I);
        return {
            message: d,
            installed: true
        };
    } catch (error) {
        t(`Failed to install Zed Shift+Enter key binding: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        throw Error("Failed to install Zed Shift+Enter key binding");
    }
}
const Cdn = 3000;
const Rdn = "Press ← again to go back to agents";
const LYn = "Ambiguous ←, press again to detach";
const Tt = 1000;
const NYn = 150;
const nr = 150;
function $Yn() {
    return {
        editedEmptyAtMs: 0,
        armedAtMs: 0,
        absorbAnchorMs: 0,
        lastQualifiedLeftPressMs: 0,
        attachConfirmArmedAtMs: 0,
        absorbLogged: false
    };
}
function FYn(e, r, n, s = k("tengu_left_arrow_editing_guard", true), o = pUt(r), l = Xje()) {
    if (n !== true) {
        return "reject";
    }
    let d = (S)=>S !== 0 && S >= l;
    if (o) {
        if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < Tt) {
            return "attach-absorb";
        }
        if (d(e.attachConfirmArmedAtMs) && r - e.attachConfirmArmedAtMs <= 3000) {
            if (r - e.attachConfirmArmedAtMs >= nr) {
                return "fire";
            }
            return "attach-absorb";
        }
        return "attach-arm";
    }
    if (!s) {
        return "fire";
    }
    if (d(e.lastQualifiedLeftPressMs) && r - e.lastQualifiedLeftPressMs < NYn) {
        return "absorb";
    }
    if (d(e.armedAtMs) && r - e.armedAtMs <= 3000) {
        return "fire";
    }
    if (d(e.absorbAnchorMs) && r - e.absorbAnchorMs < Tt) {
        return "absorb";
    }
    if (d(e.editedEmptyAtMs) && r - e.editedEmptyAtMs < 2000) {
        return "arm";
    }
    return "fire";
}
function UYn(e, r, n) {
    switch(r){
        case "fire":
            if (e.armedAtMs !== 0) {
                e.editedEmptyAtMs = 0;
            }
            e.armedAtMs = 0;
            e.attachConfirmArmedAtMs = 0;
            e.absorbAnchorMs = n;
            e.lastQualifiedLeftPressMs = n;
            e.absorbLogged = false;
            return;
        case "arm":
            e.armedAtMs = n;
            e.absorbAnchorMs = n;
            e.lastQualifiedLeftPressMs = n;
            e.absorbLogged = false;
            return;
        case "absorb":
            if (n - e.lastQualifiedLeftPressMs < NYn) {
                e.absorbAnchorMs = n;
            }
            e.lastQualifiedLeftPressMs = n;
            return;
        case "reject":
            return;
        case "attach-arm":
            e.attachConfirmArmedAtMs = n;
            return;
        case "attach-absorb":
            return;
    }
}
function BYn(e, r, n) {
    let ms_since_stamp = r - Xje();
    switch(e){
        case "fire":
            return;
        case "arm":
            i("tengu_left_arrow_blocked", {
                reason: b("editing-quiet")
            });
            return;
        case "attach-arm":
            i("tengu_left_arrow_blocked", {
                reason: b("attach-quiet-hint"),
                ms_since_stamp
            });
            t(`leftArrowGesture: attach-quiet hint armed (ms_since_stamp=${ms_since_stamp})`, {
                level: "debug"
            });
            return;
        case "attach-absorb":
            i("tengu_left_arrow_blocked", {
                reason: b("attach-quiet"),
                ms_since_stamp
            });
            t(`leftArrowGesture: attach-quiet silent absorb (ms_since_stamp=${ms_since_stamp})`, {
                level: "debug"
            });
            return;
        case "reject":
            if (ea().claim("left_arrow_not_solo_reject")) {
                i("tengu_left_arrow_blocked", {
                    reason: b("not-solo")
                });
            }
            return;
        case "absorb":
            if (n.absorbAnchorMs === r || n.absorbLogged) {
                return;
            }
            n.absorbLogged = true;
            let ms_since_press = r - n.absorbAnchorMs;
            i("tengu_left_arrow_blocked", {
                reason: b("absorb"),
                ms_since_press
            });
            t(`leftArrowGesture: human-cadence press absorbed, too soon after the last \u2190 that fired or showed the hint (ms_since_press=${ms_since_press})`, {
                level: "debug"
            });
            return;
    }
}
N();
function $h(e, r, n = false) {
    P(()=>{
        let e_current = e.current;
        if (!e_current) {
            return;
        }
        let o = nx(e_current);
        if (!r) {
            if (n && o.activeElement === e_current) {
                o.blur();
            }
            return;
        }
        o.focus(e_current);
        return o.subscribe(()=>{
            let e_current = e.current;
            if (!e_current || o.activeElement === e_current) {
                return;
            }
            if (!o.activeElement) {
                o.focus(e_current);
                return;
            }
            let l_parentNode = e_current.parentNode;
            while(l_parentNode){
                if (l_parentNode === o.activeElement) {
                    o.focus(e_current);
                    return;
                }
                l_parentNode = l_parentNode.parentNode;
            }
        });
    }, [
        r,
        e,
        n
    ]);
}
const Ue = /[\u001b\u0080-\u009f]/g;
const St = "\u2060";
function At(text, columns, n = Nu) {
    let s = text.search(Ue) === -1 ? text : ir(text);
    let o = n(s, columns, {
        hard: true,
        trim: false
    }).split(`
`);
    let rows = [];
    let startOffset = 0;
    let isPrecededByNewline = true;
    for (let S of o){
        if (!s.startsWith(S, startOffset)) {
            return {
                rows: Et(text, columns),
                degraded: true
            };
        }
        let T = startOffset + S.length;
        let C = s.startsWith(`\r
`, T) ? 2 : s[T] === `
` || s[T] === "\r" ? 1 : 0;
        rows.push({
            text: text.slice(startOffset, T),
            startOffset,
            isPrecededByNewline,
            endsWithNewline: C > 0
        });
        isPrecededByNewline = C > 0;
        startOffset = T + C;
    }
    if (startOffset === text.length) {
        return {
            rows,
            degraded: false
        };
    }
    return {
        rows: Et(text, columns),
        degraded: true
    };
}
function ir(text) {
    let r = YSe();
    return text.split(`
`).map((n)=>{
        if (n.search(Ue) === -1) {
            return n;
        }
        return n.split("\r").map((s)=>{
            if (s.search(Ue) === -1) {
                return s;
            }
            return [
                ...r.feed(s),
                ...r.flush()
            ].map((o)=>{
                if (o.type === "sequence") {
                    return St.repeat(o.value.length);
                }
                return o.value.replace(Ue, St);
            }).join("");
        }).join("\r");
    }).join(`
`);
}
function Et(text, columns) {
    let n = [];
    let s = 0;
    for (let o of text.split(/\r\n|[\n\r]/)){
        let l = 0;
        let d = 0;
        for (let { segment, index } of ra().segment(o)){
            let M = ae(segment);
            if (d + M > columns && index > l) {
                n.push({
                    text: o.slice(l, index),
                    startOffset: s + l,
                    isPrecededByNewline: l === 0,
                    endsWithNewline: false
                });
                l = index;
                d = 0;
            }
            d += M;
        }
        let h = s + o.length;
        let S = text.startsWith(`\r
`, h) ? 2 : h < text.length ? 1 : 0;
        n.push({
            text: o.slice(l),
            startOffset: s + l,
            isPrecededByNewline: l === 0,
            endsWithNewline: S > 0
        });
        s = h + S;
    }
    return n;
}
const sr = /^[\p{L}\p{N}\p{M}_]+$/u;
const or = /[\p{L}\p{N}][\p{L}\p{N}\p{M}]*/gu;
const Ee = /\s/;
const ot = "(?:\\[(?:Pasted text|Image|\\.\\.\\.Truncated text|✦ Team setup guide) #\\d+(?: \\+\\d+ lines)?\\.*\\]|\\[⧉ [^\\]\\n]+\\])";
const ar = new RegExp(`${ot}\$`);
const $t = new RegExp(`^${ot}`);
const dNo = (e, r)=>e[r] === "[" && $t.test(e.slice(r));
const lr = new RegExp(ot, "g");
const fje = (e)=>sr.test(e);
const BXe = (e)=>Ee.test(e);
const jXe = (e)=>e.length > 0 && !BXe(e) && !fje(e);
class bi {
    measuredText;
    selection;
    offset;
    constructor(e, r = 0, n = 0){
        this.measuredText = e;
        this.selection = n;
        this.offset = Math.max(0, Math.min(this.text.length, r));
    }
    static fromText(e, r, n = 0, s = 0) {
        return new bi(new Lt(e, r - 1), n, s);
    }
    getViewportStartLine(e) {
        if (e === undefined || e <= 0) {
            return 0;
        }
        let { line } = this.getPosition();
        let n = this.measuredText.getWrappedText();
        if (n.length <= e) {
            return 0;
        }
        let s = Math.floor(e / 2);
        let o = Math.max(0, line - s);
        let l = Math.min(n.length, o + e);
        if (l - o < e) {
            o = Math.max(0, l - e);
        }
        return o;
    }
    getRenderedRowStartOffsets(e) {
        let { startLine, endLine } = this.getViewportLineRange(e);
        return this.measuredText.getWrappedLines().slice(startLine, endLine).map((s)=>s.displayStartOffset);
    }
    getViewportLineRange(e) {
        let length = this.measuredText.getWrappedLines().length;
        let startLine = this.getViewportStartLine(e);
        let endLine = e !== undefined && e > 0 ? Math.min(length, startLine + e) : length;
        return {
            startLine,
            endLine
        };
    }
    render(e, r, n, s, o, l, d, h) {
        let S = this.measuredText.getWrappedLines();
        let { startLine, endLine } = this.getViewportLineRange(o);
        if (l !== undefined) {
            let j = Math.min(l, this.offset);
            let Y = Math.max(l, this.offset);
            let I = d ? this.findLogicalLineStart(j) : j;
            let B = d ? this.findLogicalLineEnd(Y) : this.measuredText.nextOffset(Y);
            return S.slice(startLine, endLine).map((J, v)=>{
                let de = (h ?? false) && (J.endsWithNewline || v + startLine === S.length - 1);
                let { displayText, displayStartOffset } = J;
                let se = displayStartOffset + displayText.length;
                if (B <= displayStartOffset || I >= se) {
                    if (displayStartOffset === se && I <= displayStartOffset && (d ? B >= se : B > se)) {
                        if (h ?? false) {
                            return "";
                        }
                        return n(" ");
                    }
                    if (de) {
                        return displayText;
                    }
                    return displayText.trimEnd();
                }
                if (displayStartOffset === se) {
                    if (h ?? false) {
                        return "";
                    }
                    return n(" ");
                }
                let re = Math.max(0, I - displayStartOffset);
                let Q = Math.min(displayText.length, B - displayStartOffset);
                if (h ?? false) {
                    let F = de ? displayText : displayText.trimEnd();
                    let K = Math.min(re, F.length);
                    let oe = Math.min(Q, F.length);
                    return F.slice(0, K) + n(F.slice(K, oe)) + F.slice(oe);
                }
                return displayText.slice(0, re) + n(displayText.slice(re, Q)) + displayText.slice(Q).trimEnd();
            }).join(`
`);
        }
        let { line, column } = this.getPosition();
        let G = this.measuredText.getWrappedText();
        let te = this.measuredText.getWrappedLines();
        return G.slice(startLine, endLine).map((j, Y)=>{
            let I = Y + startLine;
            let B = (h ?? false) && ((te[I]?.endsWithNewline ?? false) || I === G.length - 1);
            let J = j;
            if (r) {
                let F = Array.from(ra().segment(j));
                if (I === G.length - 1) {
                    let K = Math.min(6, F.length);
                    let oe = F.length - K;
                    let X = F.length > K ? F[oe].index : 0;
                    J = r.repeat(oe) + j.slice(X);
                } else {
                    J = r.repeat(F.length);
                }
            }
            if (line !== I) {
                if (B) {
                    return J;
                }
                return J.trimEnd();
            }
            let v = "";
            let de = e;
            let U = "";
            let E = 0;
            let se = false;
            for (let { segment } of ra().segment(J)){
                if (se) {
                    U += segment;
                    continue;
                }
                let K = E + ae(segment);
                if (K > column) {
                    de = segment;
                    se = true;
                } else {
                    E = K;
                    v += segment;
                }
            }
            let re;
            let Q = "";
            if (s && I === G.length - 1 && this.isAtEnd() && s.text.length > 0) {
                let F = KSe(s.text) || s.text[0];
                re = e ? n(F) : F;
                let K = s.text.slice(F.length);
                if (K.length > 0) {
                    Q = s.dim(K);
                }
            } else {
                re = e ? n(de) : de;
            }
            if (h && !B && e === "") {
                return (v + re + Q + U).trimEnd();
            }
            return v + re + Q + (B ? U : U.trimEnd());
        }).join(`
`);
    }
    left() {
        if (this.offset === 0) {
            return this;
        }
        let e = this.placeholderEndingAt(this.offset);
        if (e) {
            return new bi(this.measuredText, e.start);
        }
        let r = this.measuredText.prevOffset(this.offset);
        return new bi(this.measuredText, r);
    }
    right() {
        if (this.offset >= this.text.length) {
            return this;
        }
        let e = this.placeholderStartingAt(this.offset);
        if (e) {
            return new bi(this.measuredText, e.end);
        }
        let r = this.measuredText.nextOffset(this.offset);
        return new bi(this.measuredText, Math.min(r, this.text.length));
    }
    placeholderEndingAt(e) {
        if (this.text[e - 1] !== "]") {
            return null;
        }
        let r = this.text.slice(0, e).match(ar);
        if (r) {
            return {
                start: e - r[0].length,
                end: e
            };
        }
        return null;
    }
    placeholderStartingAt(e) {
        if (this.text[e] !== "[") {
            return null;
        }
        let r = this.text.slice(e).match($t);
        if (r) {
            return {
                start: e,
                end: e + r[0].length
            };
        }
        return null;
    }
    placeholderContaining(e) {
        for (let r of this.text.matchAll(lr)){
            let n = r.index;
            let s = n + r[0].length;
            if (e > n && e < s) {
                return {
                    start: n,
                    end: s
                };
            }
            if (n >= e) {
                break;
            }
        }
        return null;
    }
    snapOutOfPlaceholder(e, r) {
        let n = this.placeholderContaining(e);
        if (!n) {
            return e;
        }
        if (r === "start") {
            return n.start;
        }
        return n.end;
    }
    up() {
        let { line, column } = this.getPosition();
        if (line === 0) {
            return this;
        }
        let n = this.measuredText.getWrappedText()[line - 1];
        if (n === undefined) {
            return this;
        }
        let s = ae(n);
        if (column > s) {
            let l = this.getOffset({
                line: line - 1,
                column: s
            });
            return new bi(this.measuredText, l, 0);
        }
        let o = this.getOffset({
            line: line - 1,
            column
        });
        return new bi(this.measuredText, o, 0);
    }
    down() {
        let { line, column } = this.getPosition();
        if (line >= this.measuredText.lineCount - 1) {
            return this;
        }
        let n = this.measuredText.getWrappedText()[line + 1];
        if (n === undefined) {
            return this;
        }
        let s = ae(n);
        if (column > s) {
            let l = this.getOffset({
                line: line + 1,
                column: s
            });
            return new bi(this.measuredText, l, 0);
        }
        let o = this.getOffset({
            line: line + 1,
            column
        });
        return new bi(this.measuredText, o, 0);
    }
    startOfCurrentLine() {
        let { line } = this.getPosition();
        return new bi(this.measuredText, this.getOffset({
            line,
            column: 0
        }), 0);
    }
    startOfLine() {
        let { line, column } = this.getPosition();
        if (column === 0 && line > 0) {
            return new bi(this.measuredText, this.getOffset({
                line: line - 1,
                column: 0
            }), 0);
        }
        return this.startOfCurrentLine();
    }
    firstNonBlankInLine() {
        let { line } = this.getPosition();
        let n = (this.measuredText.getWrappedText()[line] || "").match(/^\s*\S/);
        let s = n?.index ? n.index + n[0].length - 1 : 0;
        let o = this.getOffset({
            line,
            column: s
        });
        return new bi(this.measuredText, o, 0);
    }
    endOfLine() {
        let { line, column } = this.getPosition();
        let n = this.measuredText.getLineLength(line);
        if (column >= n && line < this.measuredText.lineCount - 1) {
            let o = this.measuredText.getLineLength(line + 1);
            let l = this.getOffset({
                line: line + 1,
                column: o
            });
            return new bi(this.measuredText, l, 0);
        }
        let s = this.getOffset({
            line,
            column: n
        });
        return new bi(this.measuredText, s, 0);
    }
    findLogicalLineStart(e = this.offset) {
        if (e === 0) {
            return 0;
        }
        let r = this.text.lastIndexOf(`
`, e - 1);
        if (r === -1) {
            return 0;
        }
        return r + 1;
    }
    findLogicalLineEnd(e = this.offset) {
        let r = this.text.indexOf(`
`, e);
        if (r === -1) {
            return this.text.length;
        }
        return r;
    }
    getLogicalLineBounds() {
        return {
            start: this.findLogicalLineStart(),
            end: this.findLogicalLineEnd()
        };
    }
    createCursorWithColumn(e, r, n) {
        let s = r - e;
        let o = Math.min(n, s);
        let l = e + o;
        let d = this.measuredText.snapToGraphemeBoundary(l);
        return new bi(this.measuredText, d, 0);
    }
    endOfLogicalLine() {
        return new bi(this.measuredText, this.findLogicalLineEnd(), 0);
    }
    lastCharInLogicalLine() {
        let e = this.findLogicalLineStart();
        let r = this.findLogicalLineEnd();
        let n = r > e ? this.measuredText.prevOffset(r) : e;
        return new bi(this.measuredText, n, 0);
    }
    startOfLogicalLine() {
        return new bi(this.measuredText, this.findLogicalLineStart(), 0);
    }
    firstNonBlankInLogicalLine() {
        let { start, end } = this.getLogicalLineBounds();
        let s = this.text.slice(start, end).match(/\S/);
        let o = start + (s?.index ?? 0);
        return new bi(this.measuredText, o, 0);
    }
    upLogicalLine() {
        let { start } = this.getLogicalLineBounds();
        if (start === 0) {
            return new bi(this.measuredText, 0, 0);
        }
        let r = this.offset - start;
        let n = start - 1;
        let s = this.findLogicalLineStart(n);
        return this.createCursorWithColumn(s, n, r);
    }
    downLogicalLine() {
        let { start, end } = this.getLogicalLineBounds();
        if (end >= this.text.length) {
            return new bi(this.measuredText, this.text.length, 0);
        }
        let n = this.offset - start;
        let s = end + 1;
        let o = this.findLogicalLineEnd(s);
        return this.createCursorWithColumn(s, o, n);
    }
    forwardWord() {
        if (this.isAtEnd()) {
            return this;
        }
        let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
        if (e) {
            return new bi(this.measuredText, e.end);
        }
        for (let r of this.measuredText.getReadlineWordBoundaries()){
            if (r.end > this.offset) {
                let n = this.snapOutOfPlaceholder(r.end, "end");
                return new bi(this.measuredText, n);
            }
        }
        return new bi(this.measuredText, this.text.length);
    }
    backwardWord() {
        if (this.isAtStart()) {
            return this;
        }
        let e = this.placeholderEndingAt(this.offset) ?? this.placeholderContaining(this.offset);
        if (e) {
            return new bi(this.measuredText, e.start);
        }
        let r = this.measuredText.getReadlineWordBoundaries();
        for(let n = r.length - 1; n >= 0; n--){
            let s = r[n];
            if (s.start < this.offset) {
                let o = this.snapOutOfPlaceholder(s.start, "start");
                return new bi(this.measuredText, o);
            }
        }
        return new bi(this.measuredText, 0);
    }
    killWord() {
        let e = this.forwardWord();
        if (e.offset === this.offset) {
            return {
                cursor: this,
                killed: ""
            };
        }
        return this.killRange(this.offset, e.offset);
    }
    backwardKillWord() {
        let e = this.backwardWord();
        if (e.offset === this.offset) {
            return {
                cursor: this,
                killed: ""
            };
        }
        return this.killRange(e.offset, this.offset);
    }
    nextVimWord() {
        if (this.isAtEnd()) {
            return this;
        }
        let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
        if (e) {
            let o = e.end;
            while(o < this.text.length && Ee.test(this.graphemeAt(o))){
                o = this.measuredText.nextOffset(o);
            }
            return new bi(this.measuredText, o);
        }
        let offset = this.offset;
        let n = (offset)=>this.measuredText.nextOffset(offset);
        let s = this.graphemeAt(offset);
        if (!s) {
            return this;
        }
        if (fje(s)) {
            while(offset < this.text.length && fje(this.graphemeAt(offset))){
                offset = n(offset);
            }
        } else if (jXe(s)) {
            while(offset < this.text.length && jXe(this.graphemeAt(offset))){
                offset = n(offset);
            }
        }
        while(offset < this.text.length && Ee.test(this.graphemeAt(offset))){
            offset = n(offset);
        }
        return new bi(this.measuredText, this.snapOutOfPlaceholder(offset, "end"));
    }
    endOfVimWord() {
        if (this.isAtEnd()) {
            return this;
        }
        let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
        if (e && this.offset < e.end - 1) {
            return new bi(this.measuredText, e.end - 1);
        }
        let text = this.text;
        let offset = this.offset;
        let s = (offset)=>this.measuredText.nextOffset(offset);
        if (this.graphemeAt(offset) === "") {
            return this;
        }
        offset = s(offset);
        while(offset < text.length && Ee.test(this.graphemeAt(offset))){
            offset = s(offset);
        }
        if (offset >= text.length) {
            return new bi(this.measuredText, text.length);
        }
        let o = this.graphemeAt(offset);
        if (fje(o)) {
            while(offset < text.length){
                let d = s(offset);
                if (d >= text.length || !fje(this.graphemeAt(d))) {
                    break;
                }
                offset = d;
            }
        } else if (jXe(o)) {
            while(offset < text.length){
                let d = s(offset);
                if (d >= text.length || !jXe(this.graphemeAt(d))) {
                    break;
                }
                offset = d;
            }
        }
        let l = this.placeholderStartingAt(offset) ?? this.placeholderContaining(offset);
        if (l) {
            offset = l.end - 1;
        }
        return new bi(this.measuredText, offset);
    }
    prevVimWord() {
        if (this.isAtStart()) {
            return this;
        }
        let e = this.placeholderEndingAt(this.offset);
        if (e) {
            return new bi(this.measuredText, e.start);
        }
        let r = this.placeholderContaining(this.offset);
        if (r) {
            return new bi(this.measuredText, r.start);
        }
        let offset = this.offset;
        let s = (offset)=>this.measuredText.prevOffset(offset);
        offset = s(offset);
        while(offset > 0 && Ee.test(this.graphemeAt(offset))){
            offset = s(offset);
        }
        if (offset === 0 && Ee.test(this.graphemeAt(0))) {
            return new bi(this.measuredText, 0);
        }
        let o = this.graphemeAt(offset);
        if (fje(o)) {
            while(offset > 0){
                let l = s(offset);
                if (!fje(this.graphemeAt(l))) {
                    break;
                }
                offset = l;
            }
        } else if (jXe(o)) {
            while(offset > 0){
                let l = s(offset);
                if (!jXe(this.graphemeAt(l))) {
                    break;
                }
                offset = l;
            }
        }
        return new bi(this.measuredText, this.snapOutOfPlaceholder(offset, "start"));
    }
    nextWORD() {
        let e = this;
        while(!e.isOverWhitespace() && !e.isAtEnd()){
            e = e.right();
        }
        while(e.isOverWhitespace() && !e.isAtEnd()){
            e = e.right();
        }
        return e;
    }
    endOfWORD() {
        if (this.isAtEnd()) {
            return this;
        }
        let e = this.placeholderStartingAt(this.offset) ?? this.placeholderContaining(this.offset);
        if (e && this.offset < e.end - 1) {
            return new bi(this.measuredText, e.end - 1);
        }
        let r = this;
        if (!r.isOverWhitespace() && (r.right().isOverWhitespace() || r.right().isAtEnd())) {
            r = r.right();
            return r.endOfWORD();
        }
        if (r.isOverWhitespace()) {
            r = r.nextWORD();
            let s = r.placeholderStartingAt(r.offset);
            if (s) {
                return new bi(this.measuredText, s.end - 1);
            }
        }
        while(!r.right().isOverWhitespace() && !r.isAtEnd()){
            r = r.right();
        }
        return r;
    }
    prevWORD() {
        let e = this;
        if (e.left().isOverWhitespace()) {
            e = e.left();
        }
        while(e.isOverWhitespace() && !e.isAtStart()){
            e = e.left();
        }
        if (!e.isOverWhitespace()) {
            while(!e.left().isOverWhitespace() && !e.isAtStart()){
                e = e.left();
            }
        }
        return e;
    }
    modifyText(e, r = "") {
        let offset_1 = this.offset;
        let e_offset = e.offset;
        let o = this.text.slice(0, offset_1) + r;
        let l = o + this.text.slice(e_offset);
        let length = o.normalize("NFC").length;
        let h = bi.fromText(l, this.columns, length);
        let S = length !== offset_1 + r.normalize("NFC").length;
        let { measuredText, offset } = h;
        if (S && measuredText.snapToGraphemeBoundary(offset) !== offset) {
            return new bi(measuredText, measuredText.nextOffset(offset));
        }
        return h;
    }
    insert(e) {
        return this.modifyText(this, e);
    }
    del() {
        if (this.isAtEnd()) {
            return this;
        }
        return this.modifyText(this.right());
    }
    backspace() {
        if (this.isAtStart()) {
            return this;
        }
        return this.left().modifyText(this);
    }
    deleteToLineStart() {
        if (this.offset > 0 && this.text[this.offset - 1] === `
`) {
            return {
                cursor: this.left().modifyText(this),
                killed: `
`
            };
        }
        let e = this.startOfLine();
        return this.killRange(e.offset, this.offset);
    }
    deleteToLineEnd() {
        if (this.text[this.offset] === `
`) {
            return {
                cursor: this.modifyText(this.right()),
                killed: `
`
            };
        }
        return this.killRange(this.offset, this.endOfLine().offset);
    }
    deleteToLogicalLineEnd() {
        if (this.text[this.offset] === `
`) {
            return this.modifyText(this.right());
        }
        return this.killRange(this.offset, this.endOfLogicalLine().offset).cursor;
    }
    deleteWORDBefore() {
        if (this.isAtStart()) {
            return {
                cursor: this,
                killed: ""
            };
        }
        return this.killRange(this.prevWORD().offset, this.offset);
    }
    killRange(e, r) {
        let n = this.snapOutOfPlaceholder(e, "start");
        let s = this.snapOutOfPlaceholder(r, "end");
        let o = new bi(this.measuredText, n);
        let l = new bi(this.measuredText, s);
        return {
            cursor: o.modifyText(l),
            killed: this.text.slice(n, s)
        };
    }
    graphemeAt(e) {
        if (e >= this.text.length) {
            return "";
        }
        let r = this.measuredText.nextOffset(e);
        return this.text.slice(e, r);
    }
    isOverWhitespace() {
        let e = this.text[this.offset] ?? "";
        return /\s/.test(e);
    }
    equals(e) {
        return this.offset === e.offset && this.measuredText === e.measuredText;
    }
    isAtStart() {
        return this.offset === 0;
    }
    isAtEnd() {
        return this.offset >= this.text.length;
    }
    startOfFirstLine() {
        return new bi(this.measuredText, 0, 0);
    }
    startOfLastLine() {
        let e = this.text.lastIndexOf(`
`);
        if (e === -1) {
            return this.startOfLine();
        }
        return new bi(this.measuredText, e + 1, 0);
    }
    goToLine(e) {
        let r = this.text.split(`
`);
        let n = Math.min(Math.max(0, e - 1), r.length - 1);
        let s = 0;
        for(let o = 0; o < n; o++){
            s += (r[o]?.length ?? 0) + 1;
        }
        return new bi(this.measuredText, s, 0);
    }
    endOfFile() {
        return new bi(this.measuredText, this.text.length, 0);
    }
    get text() {
        return this.measuredText.text;
    }
    get columns() {
        return this.measuredText.columns + 1;
    }
    getPosition() {
        return this.measuredText.getPositionFromOffset(this.offset);
    }
    getOffset(e) {
        return this.measuredText.getOffsetFromPosition(e);
    }
    findCharacter(e, r, n = 1) {
        let s = r === "f" || r === "t";
        let o = r === "t" || r === "T";
        let l = 0;
        if (s) {
            let d = this.findLogicalLineEnd();
            let h = this.measuredText.nextOffset(this.offset);
            while(h < d){
                if (this.graphemeAt(h) === e) {
                    l++;
                    if (l === n) {
                        if (o) {
                            return Math.max(this.offset, this.measuredText.prevOffset(h));
                        }
                        return h;
                    }
                }
                h = this.measuredText.nextOffset(h);
            }
        } else {
            let d = this.findLogicalLineStart();
            if (this.offset <= d) {
                return null;
            }
            let h = this.measuredText.prevOffset(this.offset);
            while(h >= d){
                if (this.graphemeAt(h) === e) {
                    l++;
                    if (l === n) {
                        if (o) {
                            return Math.min(this.offset, this.measuredText.nextOffset(h));
                        }
                        return h;
                    }
                }
                if (h === d) {
                    break;
                }
                h = this.measuredText.prevOffset(h);
            }
        }
        return null;
    }
}
class Ct {
    text;
    startOffset;
    isPrecededByNewline;
    endsWithNewline;
    displayText;
    displayStartOffset;
    constructor(e, r, n, s){
        this.text = e;
        this.startOffset = r;
        this.isPrecededByNewline = n;
        this.endsWithNewline = s;
        this.displayText = n ? e : e.trimStart();
        this.displayStartOffset = r + (e.length - this.displayText.length);
    }
    equals(e) {
        return this.text === e.text && this.startOffset === e.startOffset;
    }
}
class Lt {
    columns;
    _wrappedLines;
    text;
    navigationCache;
    graphemeBoundaries;
    constructor(e, r){
        this.columns = r;
        this.text = e.normalize("NFC");
        this.navigationCache = new Map;
    }
    get wrappedLines() {
        if (!this._wrappedLines) {
            let { rows, degraded } = At(this.text, this.columns);
            if (degraded) {
                ur(this.columns, this.text.length);
            }
            this._wrappedLines = rows.map((n)=>new Ct(n.text, n.startOffset, n.isPrecededByNewline, n.endsWithNewline));
        }
        return this._wrappedLines;
    }
    getGraphemeBoundaries() {
        if (!this.graphemeBoundaries) {
            this.graphemeBoundaries = [];
            for (let { index } of ra().segment(this.text)){
                this.graphemeBoundaries.push(index);
            }
            this.graphemeBoundaries.push(this.text.length);
        }
        return this.graphemeBoundaries;
    }
    wordBoundariesCache;
    getWordBoundaries() {
        if (!this.wordBoundariesCache) {
            this.wordBoundariesCache = [];
            for (let e of uAo().segment(this.text)){
                this.wordBoundariesCache.push({
                    start: e.index,
                    end: e.index + e.segment.length
                });
            }
        }
        return this.wordBoundariesCache;
    }
    readlineWordBoundariesCache;
    getReadlineWordBoundaries() {
        if (!this.readlineWordBoundariesCache) {
            let e = [];
            let r = false;
            for (let n of this.getWordBoundaries()){
                let s = this.text.slice(n.start, n.end);
                for (let o of s.matchAll(or)){
                    let l = this.snapToGraphemeBoundary(n.start + o.index);
                    let d = n.start + o.index + o[0].length;
                    let h = this.snapToGraphemeBoundary(d);
                    let S = h === d ? d : this.nextOffset(h);
                    let T = e.at(-1);
                    if (T && (l < T.end || l === T.end && r)) {
                        T.end = Math.max(T.end, S);
                    } else {
                        e.push({
                            start: l,
                            end: S
                        });
                    }
                    r = S !== d;
                }
            }
            this.readlineWordBoundariesCache = e;
        }
        return this.readlineWordBoundariesCache;
    }
    binarySearchBoundary(e, r, n) {
        let s = 0;
        let o = e.length - 1;
        let l = n ? this.text.length : 0;
        while(s <= o){
            let d = Math.floor((s + o) / 2);
            let h = e[d];
            if (h === undefined) {
                break;
            }
            if (n) {
                if (h > r) {
                    l = h;
                    o = d - 1;
                } else {
                    s = d + 1;
                }
            } else if (h < r) {
                l = h;
                s = d + 1;
            } else {
                o = d - 1;
            }
        }
        return l;
    }
    stringIndexToDisplayWidth(e, r) {
        if (r <= 0) {
            return 0;
        }
        if (r >= e.length) {
            return ae(e);
        }
        return ae(e.substring(0, r));
    }
    displayWidthToStringIndex(e, r) {
        if (r <= 0) {
            return 0;
        }
        if (!e) {
            return 0;
        }
        if (e === this.text) {
            return this.offsetAtDisplayWidth(r);
        }
        let n = 0;
        let s = 0;
        for (let { segment, index } of ra().segment(e)){
            let d = ae(segment);
            if (n + d > r) {
                break;
            }
            n += d;
            s = index + segment.length;
        }
        return s;
    }
    offsetAtDisplayWidth(e) {
        if (e <= 0) {
            return 0;
        }
        let r = 0;
        let n = this.getGraphemeBoundaries();
        for(let s = 0; s < n.length - 1; s++){
            let o = n[s];
            let l = n[s + 1];
            if (o === undefined || l === undefined) {
                continue;
            }
            let d = this.text.substring(o, l);
            let h = ae(d);
            if (r + h > e) {
                return o;
            }
            r += h;
        }
        return this.text.length;
    }
    getWrappedText() {
        return this.wrappedLines.map((e)=>e.displayText);
    }
    getWrappedLines() {
        return this.wrappedLines;
    }
    getLine(e) {
        let wrappedLines = this.wrappedLines;
        return wrappedLines[Math.max(0, Math.min(e, wrappedLines.length - 1))];
    }
    getOffsetFromPosition(e) {
        let r = this.getLine(e.line);
        if (r.text.length === 0 && r.endsWithNewline) {
            return r.startOffset;
        }
        let n = r.displayStartOffset - r.startOffset;
        let s = e.column + n;
        let o = this.displayWidthToStringIndex(r.text, s);
        let l = r.startOffset + o;
        return this.snapToGraphemeBoundary(l);
    }
    getLineLength(e) {
        let r = this.getLine(e);
        return ae(r.text);
    }
    getPositionFromOffset(e) {
        let wrappedLines = this.wrappedLines;
        for(let o = 0; o < wrappedLines.length; o++){
            let wrappedLine = wrappedLines[o];
            let d = wrappedLines[o + 1];
            if (e >= wrappedLine.startOffset && (!d || e < d.startOffset)) {
                let h = e - wrappedLine.startOffset;
                let S;
                if (wrappedLine.isPrecededByNewline) {
                    S = this.stringIndexToDisplayWidth(wrappedLine.text, h);
                } else {
                    let T = wrappedLine.displayStartOffset - wrappedLine.startOffset;
                    if (h < T) {
                        S = 0;
                    } else {
                        let C = wrappedLine.displayText;
                        let M = h - T;
                        S = this.stringIndexToDisplayWidth(C, M);
                    }
                }
                return {
                    line: o,
                    column: Math.max(0, S)
                };
            }
        }
        let n = wrappedLines.length - 1;
        let s = this.wrappedLines[n];
        return {
            line: n,
            column: ae(s.text)
        };
    }
    get lineCount() {
        return this.wrappedLines.length;
    }
    withCache(e, r) {
        let n = this.navigationCache.get(e);
        if (n !== undefined) {
            return n;
        }
        let s = r();
        this.navigationCache.set(e, s);
        return s;
    }
    nextOffset(e) {
        return this.withCache(`next:${e}`, ()=>{
            let r = this.getGraphemeBoundaries();
            return this.binarySearchBoundary(r, e, true);
        });
    }
    prevOffset(e) {
        if (e <= 0) {
            return 0;
        }
        return this.withCache(`prev:${e}`, ()=>{
            let r = this.getGraphemeBoundaries();
            return this.binarySearchBoundary(r, e, false);
        });
    }
    snapToGraphemeBoundary(e) {
        if (e <= 0) {
            return 0;
        }
        if (e >= this.text.length) {
            return this.text.length;
        }
        let r = this.getGraphemeBoundaries();
        let n = 0;
        let s = r.length - 1;
        while(n < s){
            let o = n + s + 1 >> 1;
            if (r[o] <= e) {
                n = o;
            } else {
                s = o - 1;
            }
        }
        return r[n];
    }
}
function ur(columns, r) {
    if (!ea().claim("measured_text_wrap_fallback")) {
        return;
    }
    c(new x(`Wrapped rows do not tile the text (columns=${columns}, length=${r}); fell back to plain hard wrapping`, "Wrapped rows do not tile the text; fell back to plain hard wrapping"));
}
N();
class Ot {
    prewarmed = false;
    claim() {
        if (this.prewarmed) {
            return false;
        }
        this.prewarmed = true;
        return true;
    }
    reset() {
        this.prewarmed = false;
    }
}
const Cn = new q(()=>new Ot);
function kt() {}
function _t(e) {
    return false;
}
const cr = ()=>{};
function dr(e, mask) {
    if (e === "") {
        return;
    }
    if (mask !== "") {
        zV("deleted");
        return;
    }
    let n = e.trim() === "" ? e.includes(`
`) ? "new line" : e.includes("\t") ? "tab" : "space" : e.replaceAll(`
`, " ").trim();
    zV(n);
}
const fr = new Set([
    "insert",
    "clear",
    "enter",
    "center",
    "undefined",
    "mouse",
    "f1",
    "f2",
    "f3",
    "f4",
    "f5",
    "f6",
    "f7",
    "f8",
    "f9",
    "f10",
    "f11",
    "f12"
]);
function T0r() {
    return a.terminal === "Apple_Terminal" && _t("shift");
}
function vt(e) {
    let r = new Map(e);
    return function(n) {
        return (r.get(n) ?? cr)(n);
    };
}
function H$t({ value, onChange, onSubmit, onExit, onExitMessage, onEscapeMessage, historyOnClear = true, onLeftArrowOnEmpty, leftArrowConfirmHint, onHistoryUp, onHistoryDown, onHistoryReset, mask = "", multiline = false, disableBackslashReturn = false, clearOnSubmit = true, disableCtrlCClear = false, cursorChar, preserveTrailingWhitespace = false, invert, columns, leadingPill, onImagePaste, disableCursorMovementForUpDownKeys = false, disableEscapeDoublePress = false, maxVisibleLines, externalOffset, onOffsetChange, inputFilter, getPastedContents, getInputMode, inlineGhostText, dim, editRelay, selectionAnchor, selectionLinewise = false }) {
    let pe = Hi();
    let ie = gje();
    if (a.terminal === "Apple_Terminal") {
        kt();
    }
    let offset = externalOffset;
    let setOffset = onOffsetChange;
    let D = leadingPill?.text ?? "";
    let w = bi.fromText(D + value, columns, D.length + offset);
    let Ye = false;
    let ze;
    let qe = false;
    function we(u) {
        if (inputFilter && ze) {
            return inputFilter(u, ze);
        }
        return u;
    }
    let { addNotification, removeNotification } = Eo();
    let { storageV5 } = Pe();
    let [he] = y($Yn);
    let De = "left-arrow-again-for-agents";
    let Ne = R({
        key: "Ctrl-C",
        pending: false
    });
    let Rt = Jq((u)=>{
        Ne.current.pending = u;
        onExitMessage?.(u, Ne.current.key);
    }, ()=>onExit?.(), ()=>{
        if (!disableCtrlCClear && value) {
            onChange("");
            setOffset(0);
            onHistoryReset?.();
        }
    });
    function lt(u) {
        if (!Ne.current.pending) {
            Ne.current.key = u;
        }
        Rt();
    }
    let Mt = Jq((u)=>{
        if (!value) {
            return;
        }
        if (onEscapeMessage) {
            onEscapeMessage(u);
            return;
        }
        if (!u) {
            return;
        }
        addNotification({
            key: "escape-again-to-clear",
            kind: "feedback",
            text: "Esc again to clear",
            priority: "immediate",
            timeoutMs: 1000
        });
    }, ()=>{
        onEscapeMessage?.(false);
        removeNotification("escape-again-to-clear");
        if (value) {
            if (historyOnClear && mask === "" && value.trim() !== "") {
                let pastedContents = getPastedContents ? vo(getPastedContents(), (ue)=>ue.type === "text" && ue.unavailable === true) : undefined;
                let submitMode = getInputMode?.();
                let display = submitMode !== undefined ? Lve(value, submitMode) : value;
                let ee = pastedContents ? {
                    display,
                    pastedContents
                } : display;
                if (submitMode !== undefined) {
                    Zle(ee, storageV5, {
                        submitMode
                    });
                } else {
                    Zle(ee, storageV5);
                }
            }
            onChange("");
            setOffset(0);
            onHistoryReset?.();
        }
    });
    function Wt() {
        if (w.text === D && value === "") {
            lt("Ctrl-D");
            return w;
        }
        return w.del();
    }
    function ut() {
        if (D !== "" && w.offset === D.length) {
            return bi.fromText(w.text.slice(D.length), columns);
        }
        return w.backspace();
    }
    function Le(killed, direction) {
        let W = killed.startsWith(D) ? killed.slice(D.length) : killed;
        ie.dispatch(mask === "" ? {
            type: "kill",
            text: W,
            direction
        } : {
            type: "interrupt"
        });
        dr(W, mask);
        return W;
    }
    function Qe() {
        let { cursor, killed } = w.deleteToLineEnd();
        Le(killed, "append");
        return cursor;
    }
    function ct() {
        let { cursor, killed } = w.deleteToLineStart();
        let W = Le(killed, "prepend");
        if (mask === "" && W.length >= 3) {
            addNotification({
                key: "kill-paste-hint",
                kind: "hint",
                text: "Ctrl+Y to paste deleted text",
                priority: "immediate",
                timeoutMs: 5000
            });
        }
        return cursor;
    }
    function It() {
        let { cursor, killed } = w.killWord();
        Le(killed, "append");
        return cursor;
    }
    function Dt() {
        let { cursor, killed } = w.backwardKillWord();
        Le(killed, "prepend");
        return cursor;
    }
    function Nt() {
        let { cursor, killed } = w.deleteWORDBefore();
        Le(killed, "prepend");
        return cursor;
    }
    function Bt() {
        let u = we(KXe(ie.state));
        if (u.length > 0) {
            let start = w.offset - D.length;
            let W = w.insert(u);
            ie.dispatch({
                type: "yank",
                start,
                length: u.length
            });
            return W;
        }
        return w;
    }
    function Ft() {
        let u = $dn(ie.state);
        if (!u) {
            return w;
        }
        let { text, length } = u;
        let ee = D.length + u.start;
        let ue = we(text);
        ie.dispatch({
            type: "yankPop"
        });
        let xe = w.text.slice(0, ee);
        let Fe = w.text.slice(ee + length);
        let Jt = xe + ue + Fe;
        let Zt = ee + ue.length;
        ie.dispatch({
            type: "updateYankLength",
            length: ue.length
        });
        return bi.fromText(Jt, columns, Zt);
    }
    let Ht = vt([
        [
            "a",
            ()=>w.startOfLogicalLine()
        ],
        [
            "b",
            ()=>w.left()
        ],
        [
            "c",
            ()=>{
                lt("Ctrl-C");
                return w;
            }
        ],
        [
            "d",
            Wt
        ],
        [
            "e",
            ()=>w.endOfLogicalLine()
        ],
        [
            "f",
            ()=>w.right()
        ],
        [
            "h",
            ut
        ],
        [
            "k",
            Qe
        ],
        [
            "n",
            ()=>mt()
        ],
        [
            "p",
            ()=>ft()
        ],
        [
            "u",
            ct
        ],
        [
            "w",
            Nt
        ],
        [
            "y",
            Bt
        ]
    ]);
    let Kt = vt([
        [
            "b",
            ()=>w.backwardWord()
        ],
        [
            "f",
            ()=>w.forwardWord()
        ],
        [
            "d",
            It
        ],
        [
            "y",
            Ft
        ]
    ]);
    function Gt({ meta, shift }) {
        if (multiline && !disableBackslashReturn && w.offset > 0 && w.text[w.offset - 1] === "\\") {
            cNo(storageV5);
            return w.backspace().insert(we(`
`));
        }
        if (meta || shift) {
            return w.insert(we(`
`));
        }
        if (T0r()) {
            return w.insert(we(`
`));
        }
        if (onSubmit) {
            onSubmit(w.text.slice(D.length));
            Ye = true;
        }
        return w;
    }
    function Be() {
        he.editedEmptyAtMs = Date.now();
    }
    function disarmLeftArrowConfirm() {
        if (he.armedAtMs === 0) {
            return;
        }
        he.armedAtMs = 0;
        removeNotification(De);
    }
    function ft() {
        if (disableCursorMovementForUpDownKeys) {
            Be();
            onHistoryUp?.();
            return w;
        }
        if (onHistoryUp && w.getPosition().line <= w.measuredText.getPositionFromOffset(D.length).line) {
            Be();
            onHistoryUp();
            return w;
        }
        let u = w.up();
        if (!u.equals(w)) {
            return u;
        }
        if (multiline) {
            let A = w.upLogicalLine();
            if (!A.equals(w)) {
                return A;
            }
        }
        return w;
    }
    function mt() {
        if (disableCursorMovementForUpDownKeys) {
            Be();
            onHistoryDown?.();
            return w;
        }
        if (onHistoryDown && w.getPosition().line >= w.measuredText.lineCount - 1) {
            Be();
            onHistoryDown();
            return w;
        }
        let u = w.down();
        if (!u.equals(w)) {
            return u;
        }
        if (multiline) {
            let A = w.downLogicalLine();
            if (!A.equals(w)) {
                return A;
            }
        }
        return w;
    }
    function Vt(u) {
        if (u.ctrl && (u.key === "k" || u.key === "u" || u.key === "w")) {
            return true;
        }
        if (u.meta && !u.ctrl && u.key === "d") {
            return true;
        }
        if (u.key === "backspace" && (u.meta || u.superKey || u.ctrl)) {
            return true;
        }
        if (u.key === "delete" && (u.meta || u.superKey)) {
            return true;
        }
        return false;
    }
    function Ut(u) {
        return (u.ctrl || u.meta) && u.key === "y";
    }
    function Yt(u, A) {
        switch(u.name){
            case "escape":
                if (disableEscapeDoublePress) {
                    return;
                }
                Mt();
                return w;
            case "left":
                if (u.superKey) {
                    return w.startOfLine();
                }
                if (u.ctrl || u.meta || u.fn) {
                    return w.backwardWord();
                }
                if (onLeftArrowOnEmpty && !u.shift && w.text === D) {
                    let W = Date.now();
                    let ee = FYn(he, W, u.soloKeypress);
                    let ue = he.armedAtMs === 0 ? undefined : W - he.absorbAnchorMs;
                    UYn(he, ee, W);
                    BYn(ee, W, he);
                    switch(ee){
                        case "fire":
                            removeNotification(De);
                            onLeftArrowOnEmpty(ue);
                            return w;
                        case "arm":
                            addNotification({
                                key: De,
                                kind: "feedback",
                                text: leftArrowConfirmHint ?? "Press ← again",
                                priority: "immediate",
                                timeoutMs: Cdn
                            });
                            return w;
                        case "absorb":
                            return w;
                        case "attach-arm":
                            addNotification({
                                key: De,
                                kind: "feedback",
                                text: LYn,
                                priority: "immediate",
                                timeoutMs: Cdn
                            });
                            return w;
                        case "attach-absorb":
                            return w;
                        case "reject":
                            return w.left();
                    }
                }
                return w.left();
            case "right":
                if (u.superKey) {
                    return w.endOfLine();
                }
                if (u.ctrl || u.meta || u.fn) {
                    return w.forwardWord();
                }
                return w.right();
            case "up":
                if (u.shift || u.ctrl || u.meta) {
                    return;
                }
                return ft();
            case "down":
                if (u.shift || u.ctrl || u.meta) {
                    return;
                }
                return mt();
            case "backspace":
                if (u.superKey) {
                    return ct();
                }
                if (u.meta || u.ctrl) {
                    return Dt();
                }
                return ut();
            case "delete":
                if (u.superKey) {
                    return Qe();
                }
                if (u.meta) {
                    return Qe();
                }
                return w.del();
            case "home":
                if (u.ctrl) {
                    return;
                }
                return w.startOfLine();
            case "end":
                if (u.ctrl) {
                    return;
                }
                return w.endOfLine();
            case "pagedown":
                if (pe || u.ctrl) {
                    return;
                }
                return w.endOfLine();
            case "pageup":
                if (pe || u.ctrl) {
                    return;
                }
                return w.startOfLine();
            case "return":
                if (u.ctrl) {
                    return;
                }
                return Gt(u);
            case "enter":
                return w.insert(we(`
`));
            case "tab":
                return;
        }
        if (multiline && u.ctrl && !u.shift && !u.meta && u.name === "j") {
            return w.insert(we(`
`));
        }
        if (u.ctrl) {
            return Ht(u.key);
        }
        if (u.meta) {
            return Kt(u.key);
        }
        if (fr.has(u.name)) {
            return;
        }
        if (A.length === 0) {
            return;
        }
        if (getInputMode !== undefined && w.offset === D.length && Kgt(A) && getInputMode() !== R_(A)) {
            qe = true;
            return w.insert(A).left();
        }
        return w.insert(A);
    }
    function zt(u) {
        ze = u;
        qe = false;
        let A = inputFilter ? inputFilter(u.key, u) : u.key;
        if (A === "" && u.key !== "") {
            u.preventDefault();
            return;
        }
        if (!Vt(u) && !Ut(u)) {
            ie.dispatch({
                type: "interrupt"
            });
        }
        if (!(u.name === "left" && !u.ctrl && !u.meta && !u.fn && !u.superKey && !u.shift)) {
            disarmLeftArrowConfirm();
        }
        let W = Yt(u, A);
        if (W === undefined) {
            return;
        }
        u.preventDefault();
        if (!w.equals(W)) {
            let ee = W.text.startsWith(D);
            if (ee && W.offset < D.length) {
                W = new bi(W.measuredText, D.length);
            }
            let ue = w.text.slice(D.length);
            let xe = ee ? W.text.slice(D.length) : W.text;
            let cursor = W.offset - (ee ? D.length : 0);
            if (ue !== "" && xe === "") {
                he.editedEmptyAtMs = Date.now();
            }
            if (ue !== xe) {
                onChange(xe);
            }
            setOffset(cursor);
            if (editRelay?.isRecording() === true && !qe) {
                editRelay.record({
                    before: {
                        text: ue,
                        cursor: Math.max(0, w.offset - D.length)
                    },
                    after: {
                        text: xe,
                        cursor
                    },
                    key: u
                });
            }
            w = W;
            if (!ee) {
                D = "";
                leadingPill?.onDelete();
            }
        }
        if (Ye) {
            Ye = false;
            if (clearOnSubmit) {
                w = bi.fromText(D, columns, D.length);
            }
        }
    }
    let qt = inlineGhostText && dim && inlineGhostText.insertPosition === offset ? {
        text: inlineGhostText.text,
        dim
    } : undefined;
    let ht = w.getPosition();
    return {
        handleKeyDown: zt,
        renderedValue: w.render(cursorChar, mask, invert, qt, maxVisibleLines, selectionAnchor === undefined || selectionAnchor === null ? undefined : D.length + selectionAnchor, selectionLinewise, preserveTrailingWhitespace),
        offset,
        setOffset,
        cursorLine: ht.line - w.getViewportStartLine(maxVisibleLines),
        cursorColumn: ht.column,
        renderedRowStartOffsets: w.getRenderedRowStartOffsets(maxVisibleLines),
        noteKeystrokeEmptied: ()=>{
            he.editedEmptyAtMs = Date.now();
        },
        disarmLeftArrowConfirm
    };
}
const at = " ▁▂▃▄▅▆▇█";
const mr = 0.7;
const hr = 1.8;
const pr = 0.15;
function jmt() {
    let e = V((B)=>Sg(B.settings.prefersReducedMotion));
    let r = C0r();
    let n = vy((B)=>B.voiceState) === "recording";
    let s = vy((B)=>B.voiceAudioLevels);
    let o = n && !e;
    let [l, d] = ia(o ? 50 : null);
    if (!o) {
        return [
            l,
            null
        ];
    }
    let h = s.at(-1) ?? 0;
    let S = Math.min(h * hr, 1);
    let T = r.next(S, mr);
    let C = Math.max(1, Math.min(Math.round(T * (at.length - 1)), at.length - 1));
    let M = h < pr;
    let H = d / 1000 * 90 % 360;
    let G = Ug() ? L$t(H) : H;
    let { r: r_1, g, b } = M ? {
        r: 128,
        g: 128,
        b: 128
    } : N$t(G);
    let hex = `#${(r_1 << 16 | g << 8 | b).toString(16).padStart(6, "0")}`;
    return [
        l,
        {
            char: at[C],
            hex
        }
    ];
}
N();
const wr = 50;
function Pt() {
    return Tc(tt());
}
function WXe({ onPaste, handleKeyDown, onImagePaste }) {
    let s = on();
    let o = Te(tx);
    let [isPasting, d] = y(false);
    let h = R(true);
    let S = R(false);
    let T = R(false);
    let [C, M] = y(0);
    let H = Z(()=>O() === "macos", []);
    let G = Z(()=>O() === "wsl", []);
    P(()=>()=>{
            h.current = false;
        }, []);
    let te = Co(()=>{
        handleKeyDown(new V$t({
            kind: "key",
            name: "return",
            fn: false,
            ctrl: false,
            meta: false,
            shift: false,
            option: false,
            super: false,
            sequence: "\r",
            raw: "\r",
            code: undefined,
            col: undefined,
            row: undefined
        }));
    });
    P(()=>{
        if (C === 0) {
            return;
        }
        return s.setTimeout(()=>{
            S.current = false;
            if (T.current) {
                T.current = false;
                te();
            }
        }, 0);
    }, [
        C,
        s
    ]);
    let j = le(()=>{
        if (!onImagePaste || !h.current) {
            return;
        }
        _ae(Pt()).then((E)=>{
            if (E && h.current) {
                onImagePaste(E.base64, {
                    mediaType: E.mediaType,
                    dimensions: E.dimensions
                });
            }
        }).catch((E)=>{
            if (h.current) {
                m("input_image_paste", "clipboard_read_failed");
                c(E);
            }
        }).finally(()=>{
            B();
        });
    }, [
        onImagePaste
    ]);
    let Y = EG(j, wr);
    function I(E) {
        if (onPaste) {
            onPaste(E);
            return;
        }
        handleKeyDown(new V$t({
            kind: "key",
            name: undefined,
            fn: false,
            ctrl: false,
            meta: false,
            shift: false,
            option: false,
            super: false,
            sequence: E,
            raw: E,
            code: undefined,
            col: undefined,
            row: undefined
        }));
    }
    function B() {
        if (!h.current) {
            return;
        }
        S.current = false;
        T.current = false;
        d(false);
    }
    function J() {
        d(false);
        M((E)=>E + 1);
    }
    function v(E, se = E.length === 0, re = E.endsWith("[I") || E.endsWith("[O")) {
        S.current = true;
        let Q = re ? E.replace(/\[[IO]$/, "") : E;
        if (se && (H || G) && onImagePaste) {
            Y();
            return;
        }
        let F = Q.split(/ (?=\/|[A-Za-z]:\\)/).flatMap((X)=>X.split(`
`)).filter((X)=>X.trim());
        let K = [];
        let oe = [];
        for (let X of F){
            if (h3o(X)) {
                K.push(X);
            } else {
                oe.push(X);
            }
        }
        if (onImagePaste && K.length > 0) {
            let X = /\/TemporaryItems\/.*screencaptureui.*\/Screenshot/i.test(Q);
            let $e = Pt();
            Promise.all(K.map((fe)=>y3o(fe, $e, (be)=>n0s(be, ()=>{
                        let me = o?.getState().toolPermissionContext;
                        if (me) {
                            return [
                                me,
                                r0s(me)
                            ];
                        }
                        return [];
                    }, (me, ye)=>yCn(me, ye, "person"))))).then((fe)=>{
                if (!h.current) {
                    return;
                }
                let be = fe.includes("refused");
                let me = K.every((pe)=>isAbsolute($4r(pe) ?? ""));
                let ye = fe.filter((pe)=>pe !== null && pe !== "refused");
                if (ye.length > 0) {
                    for (let [pe, ie] of ye.entries()){
                        let filename = basename(ie.path);
                        onImagePaste(ie.base64, {
                            mediaType: ie.mediaType,
                            filename,
                            dimensions: ie.dimensions,
                            sourcePath: ie.path,
                            continuesGesture: pe > 0
                        });
                    }
                    if (oe.length > 0) {
                        I(oe.join(`
`));
                    }
                    B();
                } else if (X && H && !be && me) {
                    Y();
                } else {
                    f("input_image_drag", be ? "read_withheld" : "read_failed");
                    I(Q);
                    B();
                }
            }).catch((fe)=>{
                if (!h.current) {
                    return;
                }
                m("input_image_drag", "read_threw");
                t(`Image paste read failed: ${fe instanceof Error ? fe.message : String(fe)}`, {
                    level: "error"
                });
                I(Q);
                B();
            });
            return;
        }
        I(Q);
        J();
    }
    function handlePaste(E) {
        E.preventDefault();
        d(true);
        v(E.text, E.rawEmpty, E.rawEndedWithFocusTail);
    }
    function U(E) {
        if (S.current && E.key === "return") {
            E.preventDefault();
            T.current = true;
            return;
        }
        if ((onPaste || onImagePaste) && !E.ctrl && !E.meta && E.key.length > xK && !E.defaultPrevented) {
            E.preventDefault();
            d(true);
            v(E.key);
            return;
        }
        handleKeyDown(E);
    }
    return {
        handleKeyDown: U,
        handlePaste,
        isPasting
    };
}
export { $h, MYn, HYn, EHs, kHs, EIe, v0r, cNo, vBs, E0r, DYn, k0r, dNo, fje, BXe, jXe, bi, Cdn, Rdn, LYn, NYn, $Yn, FYn, UYn, BYn, T0r, H$t, jmt, WXe };
