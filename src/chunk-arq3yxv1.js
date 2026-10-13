import { ID, rS } from "/$bunfs/root/chunk-ahdcxwvk.js";
function xOe(a) {
    if (!a) {
        return {
            type: "menu"
        };
    }
    let t = a.trim().split(/\s+/);
    switch(t[0]?.toLowerCase()){
        case "help":
        case "--help":
        case "-h":
            return {
                type: "help"
            };
        case "list":
        case "ls":
            {
                let r = t.slice(1).find((e)=>e === "--enabled" || e === "--disabled");
                if (r) {
                    return {
                        type: "list",
                        filter: r === "--enabled" ? "enabled" : "disabled"
                    };
                }
                return {
                    type: "list"
                };
            }
        case "install":
        case "i":
            {
                let r = o(t.slice(1));
                if (r) {
                    return r;
                }
                let e = t[1];
                if (!e) {
                    return {
                        type: "install"
                    };
                }
                let n = e.lastIndexOf("@");
                if (n > 0) {
                    let plugin = e.slice(0, n);
                    let marketplace = e.slice(n + 1);
                    return {
                        type: "install",
                        plugin,
                        marketplace
                    };
                }
                if (!e.startsWith("@") && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("file://") || e.includes("/") || e.includes("\\"))) {
                    return {
                        type: "install",
                        marketplace: e
                    };
                }
                return {
                    type: "install",
                    plugin: e
                };
            }
        case "manage":
            return {
                type: "manage"
            };
        case "stats":
            {
                if (ID()) {
                    return {
                        type: "stats"
                    };
                }
                return {
                    type: "menu"
                };
            }
        case "directory":
        case "search":
            {
                if (rS()) {
                    return {
                        type: "directory",
                        query: t.slice(1).join(" ").trim() || undefined
                    };
                }
                return {
                    type: "menu"
                };
            }
        case "uninstall":
            return {
                type: "uninstall",
                plugin: t[1]
            };
        case "enable":
            return {
                type: "enable",
                plugin: t[1]
            };
        case "disable":
            return {
                type: "disable",
                plugin: t[1]
            };
        case "configure":
        case "config":
            return {
                type: "configure",
                plugin: t[1]
            };
        case "validate":
            return {
                type: "validate",
                path: t.slice(1).join(" ").trim() || undefined
            };
        case "eval":
            return {
                type: "menu"
            };
        case "tag":
            {
                let r = new Set([
                    "--push",
                    "--dry-run",
                    "--force",
                    "-f"
                ]);
                let e = t.slice(1);
                let n = e.filter((i)=>i.startsWith("-"));
                let l = e.filter((i)=>!i.startsWith("-"));
                let unknownFlag = n.find((i)=>!r.has(i)) ?? l[1];
                return {
                    type: "tag",
                    path: l[0],
                    push: n.includes("--push"),
                    dryRun: n.includes("--dry-run"),
                    force: n.includes("--force") || n.includes("-f"),
                    ...unknownFlag !== undefined && {
                        unknownFlag
                    }
                };
            }
        case "marketplace":
        case "market":
            {
                let r = t[1]?.toLowerCase();
                let target = t.slice(2).join(" ");
                switch(r){
                    case "add":
                        return {
                            type: "marketplace",
                            action: "add",
                            target
                        };
                    case "remove":
                    case "rm":
                        return {
                            type: "marketplace",
                            action: "remove",
                            target
                        };
                    case "update":
                        return {
                            type: "marketplace",
                            action: "update",
                            target
                        };
                    case "list":
                        return {
                            type: "marketplace",
                            action: "list"
                        };
                    default:
                        return {
                            type: "marketplace"
                        };
                }
            }
        default:
            return {
                type: "menu"
            };
    }
}
const commandLine = "/plugin install <plugin> --marketplace <source>";
function o(a) {
    let t = a.findIndex((n)=>n === "--marketplace" || n.startsWith("--marketplace="));
    if (t === -1) {
        return;
    }
    let s = a[t];
    let r = s !== "--marketplace";
    let e = wjr({
        plugins: a.filter((n, l)=>l !== t && (r || l !== t + 1)),
        marketplaceSource: r ? s.slice(14) : a[t + 1],
        commandLine
    });
    if ("usageError" in e) {
        return {
            type: "usage-error",
            message: e.usageError
        };
    }
    return {
        type: "install-from-source",
        ...e
    };
}
function wjr({ plugins, marketplaceSource, commandLine }) {
    if (!marketplaceSource || marketplaceSource.startsWith("-")) {
        return {
            usageError: `--marketplace needs a marketplace source (owner/repo or a URL). Usage: ${commandLine}`
        };
    }
    let plugin = plugins[0];
    if (plugins.length !== 1 || !plugin || plugin.startsWith("-")) {
        return {
            usageError: `--marketplace needs exactly one plugin name. Usage: ${commandLine}`
        };
    }
    if (plugin.lastIndexOf("@") > 0) {
        return {
            usageError: `Name the marketplace once: <plugin>@<marketplace>, or ${commandLine}`
        };
    }
    return {
        plugin,
        marketplaceSource
    };
}
function Thn({ plugin, marketplaceSource }) {
    return `/plugin install ${plugin} --marketplace ${marketplaceSource}`;
}
export { xOe, wjr, Thn };
