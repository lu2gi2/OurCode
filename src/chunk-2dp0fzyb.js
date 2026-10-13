import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { VE, Mzn } from "/$bunfs/root/chunk-6bjtvbt8.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
const g = "mcp__";
function go(e) {
    let n = e.split("__");
    let [r, t, ...s] = n;
    if (r !== "mcp" || !t) {
        return null;
    }
    let toolName = s.length > 0 ? s.join("__") : undefined;
    return {
        serverName: t,
        toolName
    };
}
function Bo(e) {
    return `${g}${In(e)}__`;
}
function rd(e, n, r) {
    if (e.mcpInfo?.serverName !== undefined) {
        return e.mcpInfo.serverName === n;
    }
    return e.name.startsWith(r ?? Bo(n));
}
function I1(e) {
    return go(`${Bo(e)}x`)?.serverName ?? In(e);
}
function rPs(e, { listedServer, parsedServer }) {
    if (listedServer !== undefined) {
        return e === listedServer;
    }
    return parsedServer !== undefined && SHt(parsedServer, e);
}
function ii(e, n) {
    return `${Bo(e)}${In(n)}`;
}
function Qnn(e) {
    let n = {
        always_allow: 0,
        always_ask: 1,
        always_deny: 2
    };
    let r = new Map;
    for (let [i, l] of Object.entries(e)){
        if (l.type !== "http" && l.type !== "sse") {
            continue;
        }
        for (let u of l.tools ?? []){
            let a = u.permission_policy;
            if (a === undefined) {
                continue;
            }
            let p = n[a];
            if (p === undefined) {
                continue;
            }
            let m = ii(i, u.name);
            let f = r.get(m);
            if (f === undefined || p > (n[f] ?? -1)) {
                r.set(m, a);
            }
        }
    }
    let allow = [];
    let deny = [];
    let ask = [];
    for (let [i, l] of r){
        if (l === "always_allow") {
            allow.push(i);
        } else if (l === "always_deny") {
            deny.push(i);
        } else {
            ask.push(i);
        }
    }
    return {
        allow,
        deny,
        ask
    };
}
function oPs(e, n) {
    let r = Object.fromEntries(Object.entries(n).filter(([, i])=>i.scope === "dynamic"));
    let { allow, deny, ask } = Qnn(r);
    if (allow.length === 0 && deny.length === 0 && ask.length === 0) {
        return e;
    }
    return {
        ...e,
        alwaysAllowRules: {
            ...e.alwaysAllowRules,
            ...allow.length > 0 && {
                mcpServerPolicy: allow
            }
        },
        alwaysDenyRules: {
            ...e.alwaysDenyRules,
            ...deny.length > 0 && {
                mcpServerPolicy: deny
            }
        },
        alwaysAskRules: {
            ...e.alwaysAskRules,
            ...ask.length > 0 && {
                mcpServerPolicy: ask
            }
        }
    };
}
function zp(e) {
    if (e.mcpInfo) {
        return ii(e.mcpInfo.serverName, e.mcpInfo.toolName);
    }
    return e.name;
}
function Znn(e, n) {
    let r = `mcp__${In(n)}__`;
    return e.replace(r, "");
}
function ern(e) {
    let n = e.replace(/\s*\(MCP\)\s*$/, "");
    n = n.trim();
    let r = n.indexOf(" - ");
    if (r !== -1) {
        return n.substring(r + 3).trim();
    }
    return n;
}
function w5e(e, n) {
    if (!n) {
        return Et(e, c);
    }
    let r = lpe(e);
    if (r) {
        return `${Et(r.serverName, c)} (from plugin ${Et(r.pluginName, c)})`;
    }
    return Et(e, c);
}
var c = 80;
function lpe(e) {
    if (!e.startsWith("plugin:")) {
        return;
    }
    let n = e.split(":");
    if (n.length < 3) {
        return;
    }
    return {
        pluginName: n[1],
        serverName: n.slice(2).join(":")
    };
}
function SHt(e, n) {
    if (e.startsWith("plugin:") || n.startsWith("plugin:")) {
        return e === n;
    }
    return In(e) === In(n);
}
function kut(e, n) {
    return zko(e)(go(n));
}
function zko(e) {
    let n = go(e);
    if (n === null) {
        return ()=>false;
    }
    let r = n.toolName === undefined || n.toolName === "*";
    let t = n.toolName !== undefined && VE(n.toolName) ? n.toolName : undefined;
    let s;
    return (o)=>o !== null && n.serverName === o.serverName && (r || o.toolName !== undefined && t !== undefined && (s ??= Mzn(t))(o.toolName));
}
export { go, Bo, rd, I1, rPs, ii, Qnn, oPs, zp, Znn, ern, w5e, lpe, SHt, kut, zko };
