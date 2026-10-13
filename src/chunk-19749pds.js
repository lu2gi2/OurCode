import { jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
async function u(appleTerminalBackupPath, a) {
    await Ae((r)=>({
            ...r,
            appleTerminalSetupInProgress: true,
            appleTerminalBackupPath
        }), a);
}
async function tUt(e) {
    await Ae((a)=>({
            ...a,
            appleTerminalSetupInProgress: false
        }), e);
}
function p() {
    let e = ce();
    return {
        inProgress: e.appleTerminalSetupInProgress ?? false,
        backupPath: e.appleTerminalBackupPath || null
    };
}
function nUt() {
    return join(homedir(), "Library", "Preferences", "com.apple.Terminal.plist");
}
async function mBo(e) {
    let a = nUt();
    let r = `${a}.bak`;
    try {
        let { code } = await it("defaults", [
            "export",
            "com.apple.Terminal",
            a
        ]);
        if (code !== 0) {
            return null;
        }
        try {
            await stat(a);
        } catch  {
            return null;
        }
        await it("defaults", [
            "export",
            "com.apple.Terminal",
            r
        ]);
        await u(r, e);
        return r;
    } catch (error) {
        if (jt(error)) {
            t(`backupTerminalPreferences: fs inaccessible: ${error}`);
            return null;
        }
        c(error);
        return null;
    }
}
async function Bpn(e) {
    let { inProgress, backupPath } = p();
    if (!inProgress) {
        return {
            status: "no_backup"
        };
    }
    if (!backupPath) {
        await tUt(e);
        return {
            status: "no_backup"
        };
    }
    try {
        await stat(backupPath);
    } catch  {
        await tUt(e);
        return {
            status: "no_backup"
        };
    }
    let n = false;
    try {
        let { code } = await it("defaults", [
            "import",
            "com.apple.Terminal",
            backupPath
        ]);
        if (code !== 0) {
            return {
                status: "failed",
                backupPath
            };
        }
        n = true;
        await it("killall", [
            "cfprefsd"
        ]);
        await tUt(e);
        return {
            status: "restored"
        };
    } catch (error) {
        if (jt(error)) {
            t(`checkAndRestoreTerminalBackup: fs inaccessible: ${error}`);
        } else {
            c(error);
        }
        await tUt(e);
        if (n) {
            return {
                status: "restored"
            };
        }
        return {
            status: "failed",
            backupPath
        };
    }
}
export { tUt, nUt, mBo, Bpn };
