import { ao } from "/$bunfs/root/chunk-8yak0fbv.js";
import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Fa } from "/$bunfs/root/chunk-bmzhpr9h.js";
const hosts = [
    "microsoft365.mcp.claude.com",
    "gmail.mcp.claude.com",
    "gcal.mcp.claude.com"
];
function i(e) {
    return e.toLowerCase().replace(/\.$/, "");
}
function u() {
    let e = k("tengu_mcp_local_oauth_blocked_hosts", {
        hosts
    });
    let t = hosts;
    if (e !== null && typeof e === "object" && "hosts" in e && Array.isArray(e.hosts)) {
        let o = e.hosts.filter((n)=>typeof n === "string");
        if (o.length > 0) {
            t = o;
        }
    }
    return new Set(t.map(i));
}
function c(url) {
    if (!url) {
        return false;
    }
    try {
        let t = i(new URL(url).hostname);
        return u().has(t);
    } catch  {
        return false;
    }
}
function a(e, t = {}) {
    let o = `${`"${ao(e)}" is Anthropic-hosted and doesn't support local OAuth. `}Connect it via Settings → Connectors on claude.ai (requires \`claude login\`), then it'll be available here automatically.`;
    let r = t.scope === "local" || t.scope === "project" || t.scope === "user" ? Fa("mcp remove", e) : null;
    let s = r ? `${o} Remove the stale entry with: \`${r}\`` : o;
    if (r && [
        ...s
    ].length <= 1024) {
        return s;
    }
    return o;
}
function MG(e, config) {
    if (config.type === "claudeai-proxy") {
        return {
            kind: "claudeai-proxy",
            config
        };
    }
    if (config.type !== "sse" && config.type !== "http") {
        return {
            kind: "unsupported-transport",
            transport: config.type ?? "stdio"
        };
    }
    if (c(config.url)) {
        return {
            kind: "anthropic-hosted",
            config,
            message: a(e, {
                scope: config.scope
            })
        };
    }
    return {
        kind: "oauth",
        config
    };
}
export { MG };
