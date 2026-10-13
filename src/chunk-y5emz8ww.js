import { Jt } from "/$bunfs/root/chunk-dn762950.js";
import { kMt, $jn, hdt } from "/$bunfs/root/chunk-xb9cceab.js";
import { xxe } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { bte } from "/$bunfs/root/chunk-axp6y0zg.js";
import { Pqr } from "/$bunfs/root/chunk-zpx112sz.js";
import { esr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { In } from "/$bunfs/root/chunk-xwkmkvm4.js";
const y1r = [
    "Docs"
];
const m = new Set([
    "claudedocs",
    "claudepages"
]);
function d9n(e) {
    return e.tier === "core" && y1r.some((o)=>bte(e.title) === bte(o));
}
const Tzo = "The Docs type is filled only through the first-party Claude Docs connector, which is not attached in this session: for a document, make a page instead of starting from that type.";
function ZBt(e) {
    return e.config.type === "claudeai-proxy" && xxe(e.config) && esr(e.config) || Pqr() && e.config.type === "sdk" && Jt(e.name) !== null && m.has(hdt(e.serverInfo?.name ?? "")) || a.CLAUDE_CODE_REMOTE === true && e.config.type === "http" && e.config.scope === "dynamic" && ($jn(e.config) || kMt.has(e.name));
}
function u9n(e) {
    return e.some((o)=>(o.type === "connected" || o.type === "pending" || o.type === "cached") && ZBt(o));
}
const u = "Claude Preview";
const p = "Claude Browser";
const d = In(u);
const C = In(p);
const f = new Set([
    d,
    C
]);
function kWe(e) {
    return f.has(In(e));
}
const E = new Set([
    "description",
    "activeForm"
]);
function hgn(e, o, t, i) {
    let r = `mcp__${In(e)}__${o}`;
    return {
        async checkPermissions () {
            return {
                behavior: "ask",
                message: `${e} requires permission.`,
                suggestions: [
                    {
                        type: "addRules",
                        rules: [
                            {
                                toolName: r,
                                ruleContent: undefined
                            }
                        ],
                        behavior: "allow",
                        destination: "session"
                    }
                ],
                metadata: {
                    command: {
                        name: r,
                        chrome: {
                            hostHandlesOriginConsent: true
                        }
                    }
                }
            };
        },
        ...t !== undefined && Object.hasOwn(t, "code") && {
            toAutoClassifierInput (s) {
                let c = Object.keys(s).filter((n)=>!E.has(n));
                return i(Object.fromEntries(c.map((n)=>[
                        n,
                        s[n]
                    ])), o);
            }
        }
    };
}
export { y1r, d9n, Tzo, ZBt, u9n, kWe, hgn };
