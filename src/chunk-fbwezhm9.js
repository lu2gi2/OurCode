import { LR, ss } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { $u, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Shn } from "/$bunfs/root/chunk-s6h2c1pa.js";
import { XNe } from "/$bunfs/root/chunk-4n16n64p.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { link, mkdir, stat, unlink, writeFile } from "fs/promises";
import { join, sep } from "path";
async function m() {
    let o = join(XNe(), "claude");
    if (!oLr()) {
        return null;
    }
    let e = join(o, "ClaudeCode.app", "Contents", "MacOS");
    let n = join(e, "claude");
    try {
        let i = (await stat(process.execPath)).ino;
        await mkdir(e, {
            recursive: true
        });
        await writeFile(join(e, "..", "Info.plist"), `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict><key>CFBundleIdentifier</key><string>com.anthropic.claude-code</string><key>CFBundleName</key><string>Claude Code</string><key>CFBundleDisplayName</key><string>Claude Code</string><key>CFBundleExecutable</key><string>claude</string><key>CFBundlePackageType</key><string>APPL</string><key>LSUIElement</key><true/><key>NSMicrophoneUsageDescription</key><string>Claude Code uses the microphone for voice dictation.</string><key>NSAppleEventsUsageDescription</key><string>Claude Code needs to send Apple Events to open URLs and control applications you authorize.</string><key>NSLocalNetworkUsageDescription</key><string>Claude Code connects to servers and devices on your local network when commands you run need to reach them.</string></dict></plist>
`);
        try {
            if ((await stat(n)).ino === i) {
                return n;
            }
        } catch  {}
        let t = LR(n);
        await link(process.execPath, t);
        try {
            await ss(t, n);
        } finally{
            await unlink(t).catch(()=>{});
        }
        return n;
    } catch  {
        return null;
    }
}
async function zNo() {
    if (O() !== "macos") {
        return;
    }
    if (a.CLAUDE_BG_TCC_DISCLAIMED) {
        delete process.env.CLAUDE_BG_TCC_DISCLAIMED;
        return;
    }
    let e = (a.CLAUDE_PTY_HOST_NO_STABLE_PATH === "1" || a.CLAUDE_CODE_DISABLE_BG_STABLE_PATH ? null : await m()) ?? process.execPath;
    let i = [
        ...$u() ? [
            e
        ] : [
            e,
            process.argv[1]
        ],
        ...process.argv.slice(2)
    ];
    let t = Shn(process.env);
    t.CLAUDE_BG_TCC_DISCLAIMED = "1";
    delete t.CLAUDE_PTY_HOST_NO_STABLE_PATH;
    try {
        process.execve(e, i, t, {
            macDisclaimResponsibility: true
        });
    } catch  {}
}
function oLr() {
    return process.execPath.startsWith(join(XNe(), "claude", "versions") + sep);
}
export { zNo, oLr };
