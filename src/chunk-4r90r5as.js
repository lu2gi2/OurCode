import { v, Vr } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { yc } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { zqe } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Dee } from "/$bunfs/root/chunk-wqqh08z5.js";
import { XNe } from "/$bunfs/root/chunk-4n16n64p.js";
import { promises } from "fs";
import * as w from "os";
import * as o from "path";
const P = "com.anthropic.claude-code-url-handler";
const p = "Claude Code URL Handler";
const h = "claude-code-url-handler.desktop";
const D = "Claude Code URL Handler.app";
const c = o.join(w.homedir(), "Applications", D);
const l = o.join(c, "Contents", "MacOS", "claude");
function d() {
    return o.join(XNe(), "applications", h);
}
const u = `HKEY_CURRENT_USER\\Software\\Classes\\${Dee}`;
const k = `${u}\\shell\\open\\command`;
const f = 86400000;
function y(e) {
    return `Exec="${e}" --handle-uri %u`;
}
function C(e) {
    return `"${e}" --handle-uri "%1"`;
}
async function _(e) {
    let r = o.join(c, "Contents");
    try {
        await promises.rm(c, {
            recursive: true
        });
    } catch (error) {
        if (v(error) !== "ENOENT") {
            throw error;
        }
    }
    await promises.mkdir(o.dirname(l), {
        recursive: true
    });
    let i = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>CFBundleIdentifier</key>
  <string>${P}</string>
  <key>CFBundleName</key>
  <string>${p}</string>
  <key>CFBundleExecutable</key>
  <string>claude</string>
  <key>CFBundleVersion</key>
  <string>1.0</string>
  <key>CFBundlePackageType</key>
  <string>APPL</string>
  <key>LSBackgroundOnly</key>
  <true/>
  <key>CFBundleURLTypes</key>
  <array>
    <dict>
      <key>CFBundleURLName</key>
      <string>Claude Code Deep Link</string>
      <key>CFBundleURLSchemes</key>
      <array>
        <string>${Dee}</string>
      </array>
    </dict>
  </array>
</dict>
</plist>`;
    await promises.writeFile(o.join(r, "Info.plist"), i);
    await promises.symlink(e, l);
    await it("/System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister", [
        "-R",
        c
    ], {
        useCwd: false
    });
    t(`Registered ${Dee}:// protocol handler at ${c}`);
}
async function F(e) {
    await promises.mkdir(o.dirname(d()), {
        recursive: true
    });
    let r = `[Desktop Entry]
Name=${p}
Comment=Handle ${Dee}:// deep links for Claude Code
${y(e)}
Type=Application
NoDisplay=true
MimeType=x-scheme-handler/${Dee};
`;
    await promises.writeFile(d(), r);
    let i = await yc("xdg-mime");
    if (i) {
        let { code } = await it(i, [
            "default",
            h,
            `x-scheme-handler/${Dee}`
        ], {
            useCwd: false
        });
        if (code !== 0) {
            throw Object.assign(Error(`xdg-mime exited with code ${code}`), {
                code: "XDG_MIME_FAILED"
            });
        }
    }
    t(`Registered ${Dee}:// protocol handler at ${d()}`);
}
async function L(e) {
    for (let r of [
        [
            "add",
            u,
            "/ve",
            "/d",
            `URL:${p}`,
            "/f"
        ],
        [
            "add",
            u,
            "/v",
            "URL Protocol",
            "/d",
            "",
            "/f"
        ],
        [
            "add",
            k,
            "/ve",
            "/d",
            C(e),
            "/f"
        ]
    ]){
        let { code } = await it("reg", r, {
            useCwd: false
        });
        if (code !== 0) {
            throw Object.assign(Error(`reg add exited with code ${code}`), {
                code: "REG_FAILED"
            });
        }
    }
    t(`Registered ${Dee}:// protocol handler in Windows registry`);
}
async function S(e) {
    let r = e ?? await E();
    switch("linux"){
        case "darwin":
            await _(r);
            break;
        case "linux":
            await F(r);
            break;
        case "win32":
            await L(r);
            break;
        default:
            throw Error("Unsupported platform: linux");
    }
}
async function E() {
    let e = zqe();
    try {
        await promises.realpath(e);
        return e;
    } catch  {
        return process.execPath;
    }
}
async function x(e) {
    try {
        switch("linux"){
            case "darwin":
                return await promises.readlink(l) === e;
            case "linux":
                return (await promises.readFile(d(), "utf8")).includes(y(e));
            case "win32":
                {
                    let { stdout, code } = await it("reg", [
                        "query",
                        k,
                        "/ve"
                    ], {
                        useCwd: false
                    });
                    return code === 0 && stdout.includes(C(e));
                }
            default:
                return false;
        }
    } catch  {
        return false;
    }
}
async function NHo(e) {
    if (ft().disableDeepLinkRegistration === "disable") {
        return;
    }
    if (![
        "darwin",
        "linux",
        "win32"
    ].includes("linux")) {
        return;
    }
    let r = await E();
    if (await x(r)) {
        return;
    }
    let i = o.join(ve(), ".deep-link-register-failed");
    if (j() && e !== undefined) {
        let a = await e.stat($e.state("deep-link-register-failed"));
        if (a.ok && Date.now() - a.value.mtimeMs < f) {
            return;
        }
    } else {
        try {
            let a = await promises.stat(i);
            if (Date.now() - a.mtimeMs < f) {
                return;
            }
        } catch  {}
    }
    try {
        await S(r);
        g("deep_link_register");
        t("Auto-registered claude-cli:// deep link protocol handler");
        if (j() && e !== undefined) {
            await e.delete($e.state("deep-link-register-failed"));
        } else {
            await promises.rm(i, {
                force: true
            }).catch(()=>{});
        }
    } catch (error) {
        let s = Vr(error);
        m("deep_link_register", s ?? "register_failed");
        t(`Failed to auto-register deep link protocol handler: ${error instanceof Error ? error.message : String(error)}`, {
            level: "warn"
        });
        if (s === "EACCES" || s === "ENOSPC") {
            if (j() && e !== undefined) {
                await e.write($e.state("deep-link-register-failed"), "", {
                    publishDiscipline: "inPlace"
                });
            } else {
                await promises.writeFile(i, "").catch(()=>{});
            }
        }
    }
}
export { NHo };
