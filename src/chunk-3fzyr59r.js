import { $r } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ao, _W as error, has, Hx } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Ns } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { XB } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
function Ame(e) {
    return e.type;
}
function xXn(e) {
    return e.type === "failed" && !Hx(e) || e.type === "needs-auth";
}
function jhn(e, n) {
    return xXn(e) && !n(e.name);
}
function xyt(e) {
    let n = Ame(e);
    switch(n){
        case "disabled":
        case "pending":
        case "needs-approval":
            return n;
        case "connected":
        case "failed":
        case "needs-auth":
        case "cached":
            return null;
        default:
            return n;
    }
}
function OOe(e) {
    return `"${ao(e)}" is disabled \u2014 enable it in /mcp first`;
}
function Pyt(e, n) {
    return `MCP server ${ao(e)} is disabled \u2014 enable it (mcp_toggle) before ${n}`;
}
function JQe(e, n) {
    return `MCP server ${ao(e)} is not approved for this project \u2014 approve it in /mcp before ${n}`;
}
function Qee(e) {
    return `"${ao(e)}" was disabled in another session \u2014 disable and re-enable it in /mcp, or restart, to reconnect`;
}
function yjt(e) {
    let n = ao(e);
    let t = `"${e}" was re-enabled in another session, so this disable didn't persist \u2014 /mcp enable ${e} then /mcp disable ${e} makes it stick. Left alone, it connects on the next launch.`;
    if (XB(e) && [
        ...t
    ].length <= 1024) {
        return t;
    }
    return `"${n}" was re-enabled in another session, so this disable didn't persist. Left alone, it connects on the next launch.`;
}
function MOe(e, n, t) {
    if (!n) {
        let r = F(e, (s)=>s.type === "disabled" && !t(s.name));
        if (r === 0) {
            return null;
        }
        let l = F(e, (s)=>s.type === "disabled" && t(s.name));
        return `${r} MCP server(s) were re-enabled in another session, so this disable didn't persist for them \u2014 enable then disable each in /mcp to make it stick. Left alone, they connect on the next launch.` + (l > 0 ? ` The other ${l} ${l === 1 ? "remains" : "remain"} disabled.` : "");
    }
    let o = e.filter((r)=>r.type !== "disabled" && Ame(r) !== "needs-approval" && t(r.name));
    if (o.length === 0) {
        return null;
    }
    let i = F(o, Ns);
    let c = F(o, (r)=>!Ns(r) && Hx(r));
    let p = o.length - i - c;
    let a = [];
    if (p > 0) {
        a.push(`${p} MCP server(s) were disabled in another session \u2014 disable and re-enable them in /mcp, or restart, to reconnect.`);
    }
    if (c > 0) {
        a.push(`${c} MCP server(s) were disabled in another session but aren't configured yet \u2014 there's nothing to reconnect until they are.`);
    }
    if (i > 0) {
        a.push(`${i} MCP server(s) are still available in this session but were disabled in another \u2014 they keep working here and won't reconnect after the next launch. Disable and re-enable them in /mcp to persist the re-enable.`);
    }
    return a.join(" ");
}
function PXn(e) {
    return `"${ao(e)}" is blocked by your organization's managed policy \u2014 it can't be authenticated or reconnected here`;
}
function IXn(e) {
    return `"${ao(e)}" is a project-scope MCP server (.mcp.json) that is not approved for this project \u2014 approve it via /mcp first, then authenticate or reconnect it`;
}
function Iyt(e, n, t) {
    if (n === "project-approval") {
        return IXn(e);
    }
    return t ?? PXn(e);
}
function rWr(e, n, t) {
    if (n === "project-approval") {
        return new $r(IXn(e), "MCP server not approved for this project");
    }
    return new $r(t ?? PXn(e), "MCP server blocked by enterprise managed policy");
}
function eM(e) {
    if (e === "project-approval") {
        return {
            error: has,
            errorCode: "APPROVAL_REQUIRED"
        };
    }
    return {
        error,
        errorCode: "POLICY_BLOCKED"
    };
}
function _jt(e) {
    return `"${ao(e)}" is still available in this session, but another session disabled it \u2014 it keeps working here and won't reconnect after the next launch. Disable and re-enable it in /mcp to persist the re-enable.`;
}
function oWr(e, n) {
    if (n === "ide") {
        throw new $r("The IDE connection is managed automatically and can't be reconnected manually");
    }
    let t = e.find((i)=>i.name === n);
    let o = t && xyt(t);
    if (o) {
        throw new $r(o === "disabled" ? OOe(n) : o === "pending" ? `"${ao(n)}" is already reconnecting \u2014 retries can take a few minutes when a server keeps failing` : `"${ao(n)}" is pending approval \u2014 approve it in the terminal first`);
    }
}
export { Ame, xXn, jhn, xyt, OOe, Pyt, JQe, Qee, yjt, MOe, PXn, IXn, Iyt, rWr, eM, _jt, oWr };
