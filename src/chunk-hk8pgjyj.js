import { fy } from "/$bunfs/root/chunk-ctt36bn8.js";
import { C0 } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Et } from "/$bunfs/root/chunk-r3z1chqx.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { wt, kr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Os, x3e } from "/$bunfs/root/chunk-1ej05ybf.js";
import { Vct } from "/$bunfs/root/chunk-tw5t5h13.js";
import { oUn, Pi, XS, ZM, zc, lm } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { nXn, wyt } from "/$bunfs/root/chunk-fczwhgk3.js";
import { WQe } from "/$bunfs/root/chunk-2zfnqw9p.js";
import { o, u, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const _yt = p(()=>u({
        method: A("notifications/claude/channel"),
        params: u({
            content: o(),
            meta: ue(o(), o()).optional()
        })
    }));
const eXn = "notifications/claude/channel/permission";
const kjr = p(()=>u({
        method: A(eXn),
        params: u({
            request_id: o(),
            behavior: U([
                "allow",
                "deny"
            ])
        })
    }));
const Tjr = "notifications/claude/channel/permission_request";
const f = /^[a-zA-Z_][a-zA-Z0-9_]*$/;
function byt(e, i, n) {
    let r = Object.entries(n ?? {});
    let [c, a] = g(r, ([d])=>f.test(d));
    if (a.length > 0) {
        t(`[channel] ${e}: dropped ${a.length} meta key(s) that don't match ${f.source}: ${a.map(([d])=>d).join(", ")}`, {
            level: "warn"
        });
    }
    let s = c.map(([d, l])=>` ${d}="${Os(l)}"`).join("");
    let m = x3e(C0, Vct(i));
    return `<${C0} source="${Os(e)}"${s}>
${m}
</${C0}>`;
}
function g(e, i) {
    let n = [];
    let r = [];
    for (let c of e){
        (i(c) ? n : r).push(c);
    }
    return [
        n,
        r
    ];
}
function Ahn(entries) {
    if (entries) {
        return {
            entries,
            source: "org"
        };
    }
    return {
        entries: nXn(),
        source: "ledger"
    };
}
function Ajr(e) {
    return e === "provider" || e === "disabled" || e === "capability" || e === "era";
}
function jQe(e) {
    if (wt()) {
        let i = kr();
        return (i === "team" || i === "enterprise") && e?.channelsEnabled !== true;
    }
    return e !== null && e.channelsEnabled !== true;
}
function Wie(e, i) {
    let n = e.split(":");
    return i.find((r)=>{
        if (r.kind === "server") {
            return e === r.name;
        }
        return n[0] === "plugin" && (n[1] === r.name || n[1] === ZM(r.name, `${r.name}@${r.marketplace}`));
    });
}
function tXn(e, i) {
    let n = e ? zc(e) : undefined;
    let name = zc(XS(`${i.name}@${i.marketplace}`)).name;
    return n?.marketplace !== undefined && n.marketplace === i.marketplace && (i.dev ? n.name === name : lm(n.name, name));
}
function Syt(e, i, n, r) {
    if (!WQe(i)) {
        return {
            action: "skip",
            kind: "capability",
            reason: "server did not declare claude/channel capability"
        };
    }
    if (r === "modern") {
        return {
            action: "skip",
            kind: "era",
            reason: "connection negotiated a modern protocol revision with no unsolicited notification path"
        };
    }
    if (Ie() !== "firstParty") {
        return {
            action: "skip",
            kind: "provider",
            reason: "channels are not available on third-party providers"
        };
    }
    if (wyt()) {
        return {
            action: "skip",
            kind: "disabled",
            reason: "channels feature is not currently available"
        };
    }
    let c = fe("policySettings");
    if (jQe(c)) {
        return {
            action: "skip",
            kind: "policy",
            reason: "channels not enabled by org policy (set channelsEnabled: true in managed settings)"
        };
    }
    let a = Wie(e, fy());
    if (!a) {
        return {
            action: "skip",
            kind: "session",
            reason: `server ${e} not in --channels list for this session`
        };
    }
    if (a.kind === "plugin") {
        let s = n ? zc(n) : undefined;
        if (s?.marketplace === undefined || !tXn(n, a)) {
            return {
                action: "skip",
                kind: "marketplace",
                reason: `you asked for plugin:${a.name}@${a.marketplace} but the installed plugin is ${s?.marketplace !== undefined ? Et(`${s.name}@${s.marketplace}`) : "from an unknown source"}`
            };
        }
        if (!a.dev) {
            let { entries, source } = Ahn(c?.allowedChannelPlugins);
            if (!entries.some((l)=>l.marketplace === s.marketplace && (l.plugin === s.name || l.marketplace === Pi && oUn(l.plugin) === s.name))) {
                let l = Et(`${s.name}@${s.marketplace}`);
                return {
                    action: "skip",
                    kind: "allowlist",
                    reason: source === "org" ? `plugin ${l} is not on your org's approved channels list (set allowedChannelPlugins in managed settings)` : `plugin ${l} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
                };
            }
        }
    } else if (!a.dev) {
        return {
            action: "skip",
            kind: "allowlist",
            reason: `server ${a.name} is not on the approved channels allowlist (use --dangerously-load-development-channels for local dev)`
        };
    }
    return {
        action: "register"
    };
}
export { _yt, eXn, kjr, Tjr, byt, Ahn, Ajr, jQe, Wie, tXn, Syt };
