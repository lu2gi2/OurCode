function qat(t) {
    let hasAgentsPositional = false;
    let cwdFilter;
    let config = {
        addDir: [],
        pluginDir: [],
        pluginDirNoMcp: [],
        settings: undefined,
        managedSettings: undefined,
        mcpConfig: [],
        strictMcpConfig: false,
        restricted: false
    };
    let rest = [];
    let d = {
        "--cwd": (e)=>{
            cwdFilter = e;
        },
        "--settings": (e)=>{
            config.settings = e;
        },
        "--managed-settings": (e)=>{
            config.managedSettings = e;
        },
        "--setting-sources": ()=>{},
        "--add-dir": (e)=>config.addDir.push(e),
        "--plugin-dir": (e)=>config.pluginDir.push(e),
        "--plugin-dir-no-mcp": (e)=>config.pluginDirNoMcp.push(e),
        "--mcp-config": (e)=>config.mcpConfig.push(e)
    };
    for(let e = 0; e < t.length; e++){
        let s = t[e];
        if (s === "agents" && !hasAgentsPositional) {
            hasAgentsPositional = true;
            continue;
        }
        if (s === "--strict-mcp-config") {
            config.strictMcpConfig = true;
            continue;
        }
        if (s === "--restricted") {
            config.restricted = true;
            continue;
        }
        let o = s.indexOf("=");
        let l = o === -1 ? s : s.slice(0, o);
        let a = Object.hasOwn(d, l) ? d[l] : undefined;
        if (a) {
            if (o !== -1) {
                a(s.slice(o + 1));
            } else if (e + 1 < t.length) {
                a(t[++e]);
            } else {
                rest.push(s);
            }
            continue;
        }
        rest.push(s);
    }
    return {
        hasAgentsPositional,
        cwdFilter,
        config,
        rest
    };
}
function Bmo(t) {
    let i = t.trim();
    return i === "~" || i.startsWith("~/");
}
function Kat(t, i) {
    let r = (n, g)=>{
        if (n === "" || g && n.trimStart().startsWith("{")) {
            return n;
        }
        return i(n);
    };
    return {
        settings: t.settings === undefined ? undefined : r(t.settings, true),
        managedSettings: t.managedSettings,
        pluginDir: t.pluginDir.map((n)=>r(n, false)),
        pluginDirNoMcp: t.pluginDirNoMcp.map((n)=>r(n, false)),
        addDir: t.addDir.map((n)=>{
            if (Bmo(n)) {
                return n;
            }
            return r(n, false);
        }),
        mcpConfig: t.mcpConfig.map((n)=>r(n, true)),
        strictMcpConfig: t.strictMcpConfig,
        restricted: t.restricted,
        settingSources: t.settingSources
    };
}
function koe(t) {
    return [
        ...t.settings ? [
            "--settings",
            t.settings
        ] : [],
        ...t.managedSettings ? [
            "--managed-settings",
            t.managedSettings
        ] : [],
        ...t.pluginDir.flatMap((i)=>[
                "--plugin-dir",
                i
            ]),
        ...t.pluginDirNoMcp.flatMap((i)=>[
                "--plugin-dir-no-mcp",
                i
            ]),
        ...t.addDir.flatMap((i)=>[
                "--add-dir",
                i
            ]),
        ...t.mcpConfig.flatMap((i)=>[
                "--mcp-config",
                i
            ]),
        ...t.settingSources !== undefined ? [
            `--setting-sources=${t.settingSources}`
        ] : [],
        ...t.strictMcpConfig ? [
            "--strict-mcp-config"
        ] : [],
        ...t.restricted ? [
            "--restricted"
        ] : []
    ];
}
function MSs(t) {
    let i = 0;
    while(t[i] === "--dangerously-skip-permissions" || t[i] === "--allow-dangerously-skip-permissions"){
        i++;
    }
    if (t[i] === "daemon") {
        return t.slice(i + 1);
    }
    return null;
}
function YB(t = {
    ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
    PACKAGE_URL: "@anthropic-ai/claude-code",
    README_URL: "https://code.claude.com/docs/en/overview",
    VERSION: "2.1.296",
    FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
    BUILD_TIME: "2026-10-09T01:31:52Z",
    GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
    HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
    DD_SOURCEMAP_GROUP: "default"
}.BUILD_REF_NAME) {
    return "";
}
export { qat, Bmo, Kat, koe, MSs, YB };
