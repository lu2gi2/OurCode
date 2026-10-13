import { as, pho, LRe, IZt, xd } from "/$bunfs/root/chunk-0ycjphb5.js";
import { kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Oi } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
class O {
    firstPartyPlugins = new Map;
    loggableMcpServers = new Set;
    anthropicMetricAttribution = new Map;
    emittedUnredacted = false;
}
const k = new q(()=>new O);
function l() {
    return k.of(B().host);
}
function mls(t, i) {
    l().firstPartyPlugins.set(t, i);
}
function _(attributionPlugin) {
    return l().firstPartyPlugins.get(attributionPlugin);
}
function AOn(t) {
    l().loggableMcpServers.add(t);
}
const T = "custom";
const hw = "third-party";
const f = "custom";
function qne(t, i, n, e, r) {
    try {
        let o = E(t, i, n);
        if (e) {
            let s = as(t);
            if (s === "main" || s === "subagent") {
                o.attributionMcpServer = e;
                if (r) {
                    o.attributionMcpTool = r;
                }
            }
        }
        return o;
    } catch (error) {
        c(error);
        return {};
    }
}
function E(t, i, n) {
    if (!t) {
        return {};
    }
    if (t.startsWith("agent:builtin:")) {
        return {
            attributionAgent: t.slice(14),
            ...A(i)
        };
    }
    if (t.startsWith("agent:custom:")) {
        let attributionAgent = t.slice(13);
        return {
            attributionAgent,
            ...A(i, pho(attributionAgent))
        };
    }
    if (t.startsWith("agent:")) {
        return A(i);
    }
    if (as(t) === "main" && n) {
        return A(n);
    }
    return {};
}
function A(attributionSkill, i) {
    if (!attributionSkill) {
        if (i) {
            return {
                attributionPlugin: i
            };
        }
        return {};
    }
    let n = pho(attributionSkill) ?? i;
    return {
        attributionSkill,
        ...n && {
            attributionPlugin: n
        }
    };
}
function COn(t, i) {
    let n = H(t, i);
    let e = {};
    if (n.attributionAgent !== undefined) {
        e.attributionAgent = g(n.attributionAgent);
        let r = b(i.attributionAgent, n.attributionAgent, T);
        if (r !== undefined) {
            e.attributionAgentHash = r;
        }
    }
    if (n.attributionSkill !== undefined) {
        e.attributionSkill = g(n.attributionSkill);
        let r = b(i.attributionSkill, n.attributionSkill, hw);
        if (r !== undefined) {
            e.attributionSkillHash = r;
        }
    }
    if (n.attributionPlugin !== undefined) {
        e.attributionPlugin = g(n.attributionPlugin);
        let r = b(i.attributionPlugin, n.attributionPlugin, hw);
        if (r !== undefined) {
            e.attributionPluginHash = r;
        }
    }
    if (n.attributionMcpServer !== undefined) {
        e.attributionMcpServer = g(n.attributionMcpServer);
        let r = b(i.attributionMcpServer, n.attributionMcpServer, f);
        if (r !== undefined) {
            e.attributionMcpServerHash = r;
        }
    }
    if (n.attributionMcpTool !== undefined) {
        e.attributionMcpTool = g(n.attributionMcpTool);
        let r = b(i.attributionMcpTool, n.attributionMcpTool, f);
        if (r !== undefined) {
            e.attributionMcpToolHash = r;
        }
    }
    return e;
}
function b(t, i, n) {
    if (i !== n || t === undefined || t === n) {
        return;
    }
    return g(LRe(t));
}
const m = [
    "agent.name",
    "skill.name",
    "plugin.name",
    "marketplace.name",
    "mcp_server.name",
    "mcp_tool.name"
];
const x = {
    "agent.name": T,
    "skill.name": hw,
    "plugin.name": hw,
    "marketplace.name": undefined,
    "mcp_server.name": f,
    "mcp_tool.name": f
};
function Wpr(t, i) {
    return P(t, i, false);
}
function gls(t, i) {
    return P(t, i, true);
}
function P(t, i, n) {
    try {
        let e = y(v(t, i));
        let { attributionMcpServer, attributionMcpTool } = i;
        let s = xd() ? y({
            ...i,
            attributionMcpServer: attributionMcpServer && In(attributionMcpServer),
            attributionMcpTool: attributionMcpServer && attributionMcpTool && In(attributionMcpTool)
        }) : e;
        if (!n) {
            return s;
        }
        let d = l();
        let p = d.anthropicMetricAttribution;
        let u = M(s);
        if (u !== M(e)) {
            d.emittedUnredacted = true;
        }
        let a = p.get(u);
        p.set(u, a === undefined ? e : S(a, e));
        return s;
    } catch (error) {
        c(error);
        return {};
    }
}
function hls(t) {
    let i = {};
    for (let o of m){
        let s = t[o];
        if (s !== undefined) {
            i[o] = String(s);
        }
    }
    if (Object.keys(i).length === 0) {
        return t;
    }
    let n = M(i);
    let e;
    try {
        let o = l();
        if (!o.emittedUnredacted && !xd()) {
            return t;
        }
        e = o.anthropicMetricAttribution.get(n) ?? S(i, {});
    } catch (error) {
        c(error);
        e = S(i, {});
    }
    if (M(e) === n) {
        return t;
    }
    let r = {
        ...t
    };
    for (let o of m){
        if (e[o] === undefined) {
            delete r[o];
        } else {
            r[o] = e[o];
        }
    }
    return r;
}
function y({ attributionAgent, attributionSkill, attributionPlugin, attributionMcpServer, attributionMcpTool }) {
    let o = attributionPlugin ? _(attributionPlugin) : undefined;
    return {
        ...attributionAgent && {
            "agent.name": attributionAgent
        },
        ...attributionSkill && {
            "skill.name": attributionSkill
        },
        ...attributionPlugin && {
            "plugin.name": attributionPlugin
        },
        ...o && {
            "marketplace.name": o
        },
        ...attributionMcpServer && {
            "mcp_server.name": attributionMcpServer
        },
        ...attributionMcpTool && {
            "mcp_tool.name": attributionMcpTool
        }
    };
}
function S(t, i) {
    let n = {};
    for (let e of m){
        let r = t[e] === i[e] ? t[e] : x[e];
        if (r !== undefined) {
            n[e] = r;
        }
    }
    return n;
}
function M(t) {
    return Oi(m.map((i)=>t[i]));
}
function H(t, i) {
    try {
        return v(t, i);
    } catch (error) {
        c(error);
        return {};
    }
}
function v(t, { attributionAgent, attributionSkill, attributionPlugin, attributionMcpServer, attributionMcpTool }) {
    let { firstPartyPlugins, loggableMcpServers } = l();
    let u = {};
    if (attributionMcpServer !== undefined) {
        let a = loggableMcpServers.has(attributionMcpServer);
        u.attributionMcpServer = a ? In(attributionMcpServer) : f;
        if (attributionMcpTool !== undefined) {
            let h = a ? IZt(attributionMcpServer) : undefined;
            let F = a && (h === undefined || h.has(In(attributionMcpTool)));
            u.attributionMcpTool = F ? In(attributionMcpTool) : f;
        }
    }
    if (attributionAgent !== undefined) {
        if (t?.startsWith("agent:builtin:")) {
            u.attributionAgent = attributionAgent;
        } else {
            let a = attributionPlugin !== undefined && firstPartyPlugins.has(attributionPlugin);
            u.attributionAgent = a ? attributionAgent : T;
        }
    }
    if (attributionPlugin !== undefined) {
        if (firstPartyPlugins.has(attributionPlugin)) {
            u.attributionPlugin = attributionPlugin;
            if (attributionSkill !== undefined) {
                u.attributionSkill = attributionSkill;
            }
        } else {
            u.attributionPlugin = hw;
            if (attributionSkill !== undefined) {
                u.attributionSkill = hw;
            }
        }
    } else if (attributionSkill !== undefined) {
        u.attributionSkill = attributionSkill;
    }
    return u;
}
function g(t) {
    return kn(t);
}
export { mls, AOn, hw, qne, COn, Wpr, gls, hls };
