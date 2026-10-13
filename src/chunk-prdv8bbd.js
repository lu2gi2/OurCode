import "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-6gk7mpsm.js";
import { Y3e } from "/$bunfs/root/chunk-qk3m4n8a.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import { mt } from "/$bunfs/root/chunk-63xa24b4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import { aCo, O } from "/$bunfs/root/chunk-79wfew46.js";
import { readdir, readFile, stat } from "fs/promises";
import { homedir } from "os";
import { join } from "path";
async function g() {
    let o = O();
    if (!aCo.includes(o)) {
        throw Error(`Unsupported platform: ${o} - Claude Desktop integration only works on macOS and WSL.`);
    }
    if (o === "macos") {
        return join(homedir(), "Library", "Application Support", "Claude", "claude_desktop_config.json");
    }
    let i = a.USERPROFILE ? a.USERPROFILE.replace(/\\/g, "/") : null;
    if (i) {
        let e = `/mnt/c${i.replace(/^[A-Z]:/, "")}/AppData/Roaming/Claude/claude_desktop_config.json`;
        try {
            await stat(e);
            return e;
        } catch  {}
    }
    try {
        try {
            let e = await readdir("/mnt/c/Users", {
                withFileTypes: true
            });
            for (let r of e){
                if (r.name === "Public" || r.name === "Default" || r.name === "Default User" || r.name === "All Users") {
                    continue;
                }
                let s = join("/mnt/c/Users", r.name, "AppData", "Roaming", "Claude", "claude_desktop_config.json");
                try {
                    await stat(s);
                    return s;
                } catch  {}
            }
        } catch  {}
    } catch (error) {
        t(`Failed scanning /mnt/c/Users for Claude Desktop config: ${error}`, {
            level: "error"
        });
    }
    throw Error("Could not find Claude Desktop config file in Windows. Make sure Claude Desktop is installed on Windows.");
}
export async function readClaudeDesktopMcpServers() {
    if (!aCo.includes(O())) {
        throw Error("Unsupported platform - Claude Desktop integration only works on macOS and WSL.");
    }
    try {
        let o = await g();
        let i;
        try {
            i = await readFile(o, {
                encoding: "utf8"
            });
        } catch (error) {
            if (v(error) === "ENOENT") {
                return {};
            }
            throw error;
        }
        let n = mt(i);
        if (!n || typeof n !== "object") {
            return {};
        }
        let e = n.mcpServers;
        if (!e || typeof e !== "object") {
            return {};
        }
        let r = {};
        for (let [s, c] of Object.entries(e)){
            if (!c || typeof c !== "object") {
                continue;
            }
            let f = Y3e().safeParse(c);
            if (f.success) {
                r[s] = f.data;
            }
        }
        return r;
    } catch (error) {
        t(`Failed to read Claude Desktop MCP servers: ${error}`, {
            level: "error"
        });
        return {};
    }
}
