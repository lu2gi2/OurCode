import { $r, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ao, nl, _b } from "/$bunfs/root/chunk-8yak0fbv.js";
import { Yt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { tL, fd } from "/$bunfs/root/chunk-kaa66qxk.js";
const a = new Set([
    "INVALID_CONFIG",
    "UNCONFIGURED",
    "AUTH_HEADER_REJECTED",
    "HEADERS_HELPER_AUTH_REJECTED",
    "CLI_OWNED_BEARER_REJECTED",
    "FIRST_PARTY_AUTH_REJECTED",
    "CLAUDEAI_BEARER_REJECTED",
    "ENDPOINT_NOT_FOUND",
    "CONNECT_TIMEOUT",
    "POLICY_BLOCKED",
    "APPROVAL_REQUIRED",
    "DISABLED",
    "IDENTITY_CHANGED",
    "SHUTTING_DOWN"
]);
function z4n(e) {
    let o = tL(e.name, e.config, {
        detail: "origin"
    });
    let e_errorCode = e.errorCode;
    let s = (error)=>fd(e.name, e.config, error);
    if (e_errorCode !== undefined && a.has(e_errorCode)) {
        if (e.error !== undefined) {
            return s(e.error);
        }
        return e_errorCode;
    }
    if (e_errorCode) {
        let r = d(e_errorCode);
        if (o) {
            return `${r} at ${o}`;
        }
        return r;
    }
    if (e.error !== undefined) {
        return s(e.error);
    }
    return "";
}
function d(e) {
    let o = Number(e);
    if (e === "23") {
        return "request timed out";
    }
    if (Number.isInteger(o) && o >= 100 && o <= 599) {
        return `HTTP ${e}`;
    }
    return e;
}
function WLo(e) {
    let { errorCode, displayDetail } = e;
    let s = (i)=>_b(fd(e.name, e.config, i));
    if (errorCode && !a.has(errorCode)) {
        let i = d(errorCode);
        let f = e.error !== undefined ? `${i}: ${e.error}` : i;
        return s(displayDetail ? `${f} ${displayDetail}` : f);
    }
    let r = e.error ?? errorCode ?? "";
    let c = displayDetail ? `${r} ${displayDetail}`.trim() : r;
    if (c === "") {
        return c;
    }
    return s(c);
}
function mmt(e, o, n, s) {
    switch(e.client.type){
        case "connected":
            if (e.client.discoveryBearerRejected) {
                return {
                    message: `Reconnected to ${ao(o)}, but your claude.ai session token was rejected. Run /login, then reconnect.`,
                    success: false
                };
            }
            if (e.client.toolsListError) {
                if (n.persistsOffBox) {
                    t(`mcp reconnect tools/list failed for ${Yt(o)}: ${fd(o, e.client.config, e.client.toolsListError)}`, {
                        level: "error"
                    });
                    return {
                        message: `Reconnected to ${ao(o)}, but fetching tools failed (detail withheld on this connection).`,
                        success: false
                    };
                }
                return {
                    message: `Reconnected to ${ao(o)}, but fetching tools failed: ${nl(fd(o, e.client.config, e.client.toolsListError))}`,
                    success: false
                };
            }
            return {
                message: `Reconnected to ${ao(o)}.`,
                success: true
            };
        case "needs-auth":
            return {
                message: s?.hasHeadersHelper ? `${ao(o)} requires authentication. Use 'Authenticate' if the upstream server uses OAuth, or check the headersHelper script and use 'Reconnect'.` : `${ao(o)} requires authentication. Use the 'Authenticate' option.`,
                success: false
            };
        case "failed":
            {
                let r = z4n(e.client);
                if (n.persistsOffBox) {
                    if (r) {
                        t(`mcp reconnect failed for ${Yt(o)}: ${r}`, {
                            level: "error"
                        });
                    }
                    return {
                        message: `Failed to reconnect to ${ao(o)}${r ? " (detail withheld on this connection)" : ""}.`,
                        success: false
                    };
                }
                return {
                    message: r ? `Failed to reconnect to ${ao(o)}: ${nl(r)}` : `Failed to reconnect to ${ao(o)}.`,
                    success: false
                };
            }
        default:
            return {
                message: `Unknown result when reconnecting to ${ao(o)}.`,
                success: false
            };
    }
}
function SXe(e, o, n) {
    let s = n.config ? fd(o, n.config, l(e)) : l(e);
    if (e instanceof $r) {
        return nl(l(e), undefined, "none");
    }
    if (n.persistsOffBox) {
        t(`mcp reconnect error for ${Yt(o)}: ${s}`, {
            level: "error"
        });
        return `Error reconnecting to ${ao(o)} (detail withheld on this connection).`;
    }
    return `Error reconnecting to ${ao(o)}: ${nl(s)}`;
}
function hIe(e, o, n, s) {
    let r = s.config ? fd(o, s.config, l(e)) : l(e);
    if (e instanceof $r) {
        return nl(l(e), undefined, "none");
    }
    if (s.persistsOffBox) {
        t(`mcp ${n} failed for ${Yt(o)}: ${r}`, {
            level: "error"
        });
        return `Failed to ${n} MCP server "${ao(o)}" (detail withheld on this connection).`;
    }
    return `Failed to ${n} MCP server "${ao(o)}": ${nl(r)}`;
}
export { z4n, WLo, mmt, SXe, hIe };
