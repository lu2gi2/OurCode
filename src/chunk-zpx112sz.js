import { k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { a, Yn } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { wCs, da, jjn } from "/$bunfs/root/chunk-xb9cceab.js";
import { Ns } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { BNn } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { Ab } from "/$bunfs/root/chunk-0xz61zj0.js";
import { go } from "/$bunfs/root/chunk-2dp0fzyb.js";
import { o, oe, ue } from "/$bunfs/root/chunk-smx21d0k.js";
function swn(i) {
    let t = [];
    for (let e of i){
        if (!Ns(e)) {
            continue;
        }
        let { config } = e;
        let r = config && typeof config === "object" && "url" in config && typeof config.url === "string" ? config.url : null;
        if (r !== null && jjn(r)) {
            t.push(e);
        }
    }
    if (t.length === 1) {
        return t[0];
    }
    return null;
}
function ZYo() {
    return Yn.CLAUDE_CODE_ARTIFACT_MCP ?? true;
}
function e6o() {
    return ue(o().min(1).max(64), oe()).optional().describe(`Runtime capabilities this page declares, as {name: config}. The control plane is the authority on valid names and config shapes. An empty object clears any previously stored declaration; omit the field on a redeploy to carry the stored declaration forward unchanged. Before declaring any capability, load the \`${Ab}\` skill for the current contract and per-capability guidance.`);
}
function Rqr(i) {
    let t = new Map;
    for (let e of i){
        if (e.mcpInfo?.scope !== "claudeai") {
            continue;
        }
        let n = e.mcpInfo.serverName;
        let r = t.get(n);
        if (r !== undefined) {
            r.toolNames.push(e.mcpInfo.toolName);
            continue;
        }
        let s = e.mcpInfo.displayName ?? n;
        t.set(n, {
            server: s,
            toolPrefix: go(e.name)?.serverName ?? n,
            toolNames: [
                e.mcpInfo.toolName
            ],
            ...BNn(s) ? {} : {
                declarable: false
            }
        });
    }
    return [
        ...t.values()
    ];
}
function xqr(i) {
    let t = `mcp__${da}__`;
    let e = new Set;
    for (let n of i){
        if (!n.name.startsWith(t)) {
            continue;
        }
        let r = n.name.slice(t.length);
        let s = r.indexOf("__");
        if (s > 0) {
            e.add(r.slice(0, s));
        }
    }
    return [
        ...e
    ];
}
function Pqr() {
    return ou();
}
function p(i) {
    let t = new Map;
    let e = new Set;
    for (let r of i){
        let s = r.mcpInfo;
        if (s?.serverType !== "sdk" || Jt(s.serverName) === null) {
            continue;
        }
        let l = t.get(s.serverName);
        if (l !== undefined) {
            l.toolNames.push(s.toolName);
            continue;
        }
        if (e.has(s.serverName)) {
            continue;
        }
        let c = s.serverInfoName ?? "";
        if (c.trim() === "" || Jt(c.trim()) !== null) {
            e.add(s.serverName);
            continue;
        }
        t.set(s.serverName, {
            server: c,
            toolPrefix: s.serverName,
            toolNames: [
                s.toolName
            ],
            ...BNn(c) ? {} : {
                declarable: false
            }
        });
    }
    let n = [
        ...t.values()
    ];
    return {
        named: n.filter((r)=>r.declarable !== false),
        unnamedIds: [
            ...e
        ],
        undeclarable: n.filter((r)=>r.declarable === false)
    };
}
function u() {
    return k("tengu_cobalt_plinth_yew", false);
}
function Iqr(i, t) {
    let hosted = Pqr() ? p(i) : null;
    let n = swn(t ?? []);
    if (!n) {
        return {
            ccrHosted: false,
            metaConnector: null,
            hosted
        };
    }
    let ccrHosted = a.CLAUDE_CODE_REMOTE === true;
    let n_name = n.name;
    let l = i.find((f)=>f.mcpInfo?.serverName === n_name);
    let toolPrefix = l && go(l.name)?.serverName;
    let metaConnector = toolPrefix && u() ? {
        server: wCs,
        toolPrefix
    } : null;
    return {
        ccrHosted,
        metaConnector,
        hosted
    };
}
function t6o(i, t) {
    let { metaConnector, hosted } = Iqr(i, t);
    let r = [
        ...Rqr(i),
        ...hosted === null ? [] : [
            ...hosted.named,
            ...hosted.undeclarable
        ]
    ];
    if (metaConnector) {
        return [
            ...r,
            metaConnector
        ];
    }
    return r;
}
export { swn, ZYo, e6o, Rqr, xqr, Pqr, Iqr, t6o };
