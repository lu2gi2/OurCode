import { me, hn, Uo, ir, mc, mH, hg, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
const m = mc({
    command: me(),
    args: ir(me()).optional(),
    env: hg(me(), me()).optional()
});
const author = mc({
    name: me(),
    email: me().email().optional(),
    url: me().url().optional()
});
const y = mc({
    type: me(),
    url: me().url()
});
const h = m.partial();
const mcp_config = m.extend({
    platform_overrides: hg(me(), h).optional()
});
const server = mc({
    type: Vc([
        "python",
        "node",
        "binary"
    ]),
    entry_point: me(),
    mcp_config
});
const M = mc({
    claude_desktop: me().optional(),
    platforms: ir(Vc([
        "darwin",
        "win32",
        "linux"
    ])).optional(),
    runtimes: mc({
        python: me().optional(),
        node: me().optional()
    }).optional()
}).passthrough();
const O = mc({
    name: me(),
    description: me().optional()
});
const S = mc({
    name: me(),
    description: me().optional(),
    arguments: ir(me()).optional(),
    text: me()
});
const v = mc({
    type: Vc([
        "string",
        "number",
        "boolean",
        "directory",
        "file"
    ]),
    title: me(),
    description: me(),
    required: Uo().optional(),
    default: mH([
        me(),
        hn(),
        Uo(),
        ir(me())
    ]).optional(),
    multiple: Uo().optional(),
    sensitive: Uo().optional(),
    min: hn().optional(),
    max: hn().optional()
});
const A = hg(me(), mH([
    me(),
    hn(),
    Uo(),
    ir(me())
]));
export const McpbManifestSchema = mc({
    $schema: me().optional(),
    dxt_version: me().optional().describe("@deprecated Use manifest_version instead"),
    manifest_version: me().optional(),
    name: me(),
    display_name: me().optional(),
    version: me(),
    description: me(),
    long_description: me().optional(),
    author,
    repository: y.optional(),
    homepage: me().url().optional(),
    documentation: me().url().optional(),
    support: me().url().optional(),
    icon: me().optional(),
    screenshots: ir(me()).optional(),
    server,
    tools: ir(O).optional(),
    tools_generated: Uo().optional(),
    prompts: ir(S).optional(),
    prompts_generated: Uo().optional(),
    keywords: ir(me()).optional(),
    license: me().optional(),
    privacy_policies: ir(me()).optional(),
    compatibility: M.optional(),
    user_config: hg(me(), v).optional()
}).refine((t)=>!!(t.dxt_version || t.manifest_version), {
    message: "Either 'dxt_version' (deprecated) or 'manifest_version' must be provided"
});
const w = mc({
    status: Vc([
        "signed",
        "unsigned",
        "self-signed"
    ]),
    publisher: me().optional(),
    issuer: me().optional(),
    valid_from: me().optional(),
    valid_to: me().optional(),
    fingerprint: me().optional()
});
function z(t, i) {
    if (typeof t === "string") {
        let n = t;
        for (let [e, r] of Object.entries(i)){
            let o = new RegExp(`\\$\\{${e}\\}`, "g");
            if (n.match(o)) {
                if (Array.isArray(r)) {
                    console.warn(`Cannot replace ${e} with array value in string context: "${t}"`, {
                        key: e,
                        replacement: r
                    });
                } else {
                    n = n.replace(o, r);
                }
            }
        }
        return n;
    } else if (Array.isArray(t)) {
        let n = [];
        for (let e of t){
            if (typeof e === "string" && e.match(/^\$\{user_config\.[^}]+\}$/)) {
                let r = e.match(/^\$\{([^}]+)\}$/)?.[1];
                if (r && i[r]) {
                    let o = i[r];
                    if (Array.isArray(o)) {
                        n.push(...o);
                    } else {
                        n.push(o);
                    }
                } else {
                    n.push(e);
                }
            } else {
                n.push(z(e, i));
            }
        }
        return n;
    } else if (t && typeof t === "object") {
        let n = {};
        for (let [e, r] of Object.entries(t)){
            n[e] = z(r, i);
        }
        return n;
    }
    return t;
}
export async function getMcpConfigForManifest({ manifest, extensionPath, systemDirs, userConfig, pathSeparator, logger }) {
    let c = manifest.server?.mcp_config;
    if (!c) {
        return;
    }
    let s = {
        ...c
    };
    if (c.platform_overrides) {
        if ("linux" in c.platform_overrides) {
            let p = c.platform_overrides.linux;
            s.command = p.command || s.command;
            s.args = p.args || s.args;
            s.env = p.env || s.env;
        }
    }
    if (j({
        manifest,
        userConfig
    })) {
        logger?.warn(`Extension ${manifest.name} has missing required configuration, skipping MCP config`);
        return;
    }
    let l = {
        __dirname: extensionPath,
        pathSeparator,
        "/": pathSeparator,
        ...systemDirs
    };
    let f = {};
    if (manifest.user_config) {
        for (let [p, a] of Object.entries(manifest.user_config)){
            if (a.default !== undefined) {
                f[p] = a.default;
            }
        }
    }
    if (userConfig) {
        Object.assign(f, userConfig);
    }
    for (let [p, a] of Object.entries(f)){
        let g = `user_config.${p}`;
        if (Array.isArray(a)) {
            l[g] = a.map(String);
        } else if (typeof a === "boolean") {
            l[g] = a ? "true" : "false";
        } else {
            l[g] = String(a);
        }
    }
    s = z(s, l);
    return s;
}
function u(t) {
    return t === undefined || t === null || t === "";
}
function j({ manifest, userConfig }) {
    if (!manifest.user_config) {
        return false;
    }
    let n = userConfig || {};
    for (let [e, r] of Object.entries(manifest.user_config)){
        if (r.required) {
            let o = n[e];
            if (u(o) || Array.isArray(o) && (o.length === 0 || o.some(u))) {
                return true;
            }
        }
    }
    return false;
}
