import { mZ } from "/$bunfs/root/chunk-2d9a83dh.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { qg, xst } from "/$bunfs/root/chunk-cwfjj64b.js";
import { wB, QKe, u9t } from "/$bunfs/root/chunk-6fb685xp.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Ih, DP } from "/$bunfs/root/chunk-z0brrd3r.js";
import { Mt } from "/$bunfs/root/chunk-7mawjt4q.js";
import { tc } from "/$bunfs/root/chunk-zwxj12s4.js";
import { NKe } from "/$bunfs/root/chunk-ewtyd038.js";
import { so } from "/$bunfs/root/chunk-dyspjvns.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { randomBytes } from "crypto";
import { basename, dirname, isAbsolute, join } from "path";
const xK = 800;
const h = {
    darwin: "osascript -e 'get POSIX path of (the clipboard as «class furl»)'",
    linux: "xclip -selection clipboard -t text/plain -o 2>/dev/null || wl-paste 2>/dev/null",
    win32: [
        "powershell",
        "-NoProfile",
        "-Command",
        "Get-Clipboard"
    ]
};
function B() {
    let o = tc();
    let r = "claude_cli_latest_screenshot.png";
    let n = {
        darwin: join(o, "claude_cli_latest_screenshot.png"),
        linux: join(o, "claude_cli_latest_screenshot.png"),
        win32: join(o, "claude_cli_latest_screenshot.png")
    };
    let screenshotPath = n.linux || n.linux;
    let i = so([
        screenshotPath
    ]);
    let f = `set fp to open for access POSIX file ${`"${screenshotPath.replace(/\\/g, "\\\\").replace(/"/g, "\\\"")}"`} with write permission`;
    let d = "";
    let u = O() === "wsl";
    let p = '"$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)"';
    let y = u ? ` || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }' 2>/dev/null` : "";
    let F = u ? ` 2>/dev/null || "$(command -v powershell.exe 2>/dev/null || echo /mnt/c/Windows/System32/WindowsPowerShell/v1.0/powershell.exe)" -NoProfile -NonInteractive -Sta -Command 'Add-Type -AssemblyName System.Windows.Forms; $i = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $i) { exit 1 }; $ms = New-Object System.IO.MemoryStream; $i.Save($ms, [System.Drawing.Imaging.ImageFormat]::Png); [Convert]::ToBase64String($ms.ToArray())' 2>/dev/null | tr -d '\\r' | base64 -d > ${i}` : "";
    let I = {
        darwin: {
            checkImage: "osascript -e 'the clipboard as «class PNGf»'",
            saveImage: `osascript -e 'set png_data to (the clipboard as \xABclass PNGf\xBB)' -e ${so([
                f
            ])} -e 'write png_data to fp' -e 'close access fp'`,
            getPath: h.darwin,
            deleteFile: `rm -f -- ${i}`
        },
        linux: {
            checkImage: `xclip -selection clipboard -t TARGETS -o 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)" || wl-paste -l 2>/dev/null | grep -E "image/(png|jpeg|jpg|gif|webp|bmp)"${y}`,
            saveImage: `xclip -selection clipboard -t image/png -o > ${i} 2>/dev/null || wl-paste --type image/png > ${i} 2>/dev/null || xclip -selection clipboard -t image/bmp -o > ${i} 2>/dev/null || wl-paste --type image/bmp > ${i}${F}`,
            getPath: h.linux,
            deleteFile: `rm -f -- ${i}`
        },
        win32: {
            checkImage: [
                "powershell",
                "-NoProfile",
                "-NonInteractive",
                "-Sta",
                "-Command",
                "Add-Type -AssemblyName System.Windows.Forms; if (-not [System.Windows.Forms.Clipboard]::ContainsImage()) { exit 1 }"
            ],
            saveImage: [
                "powershell",
                "-NoProfile",
                "-NonInteractive",
                "-Sta",
                "-Command",
                "Add-Type -AssemblyName System.Windows.Forms; $img = [System.Windows.Forms.Clipboard]::GetImage(); if ($null -eq $img) { exit 1 }; $img.Save(, [System.Drawing.Imaging.ImageFormat]::Png)"
            ],
            getPath: h.win32,
            deleteFile: [
                "powershell",
                "-NoProfile",
                "-Command",
                "Remove-Item -Force -LiteralPath "
            ]
        }
    };
    return {
        commands: I.linux || I.linux,
        screenshotPath
    };
}
async function b(e) {
    if (typeof e === "string") {
        return DP(e, {
            reject: false
        });
    }
    let [o, ...r] = e;
    return Ih(o, r, {
        reject: false
    });
}
async function g3o() {
    return false;
}
async function _ae(e) {
    let o;
    try {
        o = B();
    } catch (error) {
        c(error);
        m("clipboard_read", "construct_failed");
        return null;
    }
    let { commands, screenshotPath } = o;
    try {
        if ((await b(commands.checkImage)).exitCode !== 0) {
            return null;
        }
        await ie().mkdir(dirname(screenshotPath), {
            mode: 448
        });
        if ((await b(commands.saveImage)).exitCode !== 0) {
            m("clipboard_read", "save_failed");
            return null;
        }
        let l = await ie().readFileBytes(screenshotPath);
        if (l.length >= 2 && l[0] === 66 && l[1] === 77) {
            l = await (await wB())(l).png().toBuffer();
        }
        let f = await QKe(l, l.length, "png", e, {
            directWebpMaxBytes: C()
        });
        let base64 = f.buffer.toString("base64");
        let mediaType = xst(base64);
        b(commands.deleteFile);
        g("clipboard_read");
        return {
            base64,
            mediaType,
            dimensions: f.dimensions
        };
    } catch  {
        m("clipboard_read", "read_failed");
        return null;
    }
}
async function D() {
    try {
        let o = h.linux || h.linux;
        let r = await b(o);
        if (r.exitCode !== 0 || !r.stdout) {
            return null;
        }
        return r.stdout.trim();
    } catch (error) {
        t(`Failed to read image path from clipboard: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return null;
    }
}
const Gbt = /\.(png|jpe?g|gif|webp)$/i;
function P(e) {
    if (e.startsWith('"') && e.endsWith('"') || e.startsWith("'") && e.endsWith("'")) {
        return e.slice(1, -1);
    }
    return e;
}
const S = /^(?:[A-Za-z]:\\|\\\\)/;
function x(e) {
    if (O() === "wsl" && S.test(e)) {
        return e;
    }
    let n = `__DOUBLE_BACKSLASH_${randomBytes(8).toString("hex")}__`;
    return e.replaceAll("\\\\", n).replace(/\\(.)/g, "$1").replace(new RegExp(n, "g"), "\\");
}
function h3o(e) {
    let o = P(e.trim());
    let r = x(o);
    return Gbt.test(r);
}
function $4r(e) {
    let o = P(e.trim());
    let r = x(o);
    if (Gbt.test(r)) {
        return r;
    }
    return null;
}
async function y3o(e, o, r) {
    let n = $4r(e);
    if (!n) {
        return null;
    }
    let path = n;
    if (O() === "wsl" && S.test(path)) {
        path = await new NKe(a.WSL_DISTRO_NAME).toLocalPath(path);
    }
    let i;
    try {
        if (isAbsolute(path)) {
            i = await r(path);
        } else {
            let p = await D();
            if (p && path === basename(p)) {
                i = await r(p);
            }
        }
    } catch (error) {
        t(`Failed to read pasted image file ${path}: ${error instanceof Error ? error.message : String(error)}`, {
            level: "error"
        });
        return null;
    }
    if (i === "refused") {
        return "refused";
    }
    if (!i || i === "absent") {
        return null;
    }
    if (i.length === 0) {
        t(`Image file is empty: ${path}`, {
            level: "warn"
        });
        return null;
    }
    if (i.length >= 2 && i[0] === 66 && i[1] === 77) {
        i = await (await wB())(i).png().toBuffer();
    }
    let l = qg(i);
    if (l === null) {
        t(`Pasted path has image extension but content is not a supported image: ${path}`, {
            level: "warn"
        });
        return null;
    }
    let f = l.split("/")[1] || "png";
    let d = await QKe(i, i.length, f, o, {
        directWebpMaxBytes: C()
    });
    let base64 = d.buffer.toString("base64");
    return {
        path,
        base64,
        mediaType: `image/${d.mediaType}`,
        dimensions: d.dimensions
    };
}
function F4r(e) {
    if (e.includes("\x00")) {
        return true;
    }
    let o = e.slice(0, 4096);
    if (o.length < 32) {
        return false;
    }
    let r = 0;
    for (let n of o){
        if (n === "\uFFFD") {
            r++;
        }
    }
    return r / o.length > 0.05;
}
function C() {
    if (Mt()) {
        return undefined;
    }
    return u9t(mZ);
}
export { xK, g3o, _ae, Gbt, h3o, $4r, y3o, F4r };
