import { At } from "/$bunfs/root/chunk-9fa34ggx.js";
import { o8, ZW, rO, lP, kr, Gt, Nt, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { l, Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Tt, c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Tw, XD } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
async function m(r, s) {
    return Zr("api_admin_request_create", async ()=>{
        let e = await Gt.post("/api/oauth/organizations/:orgUUID/admin_requests", r, {
            auth: "teleport-org",
            credentials: s
        });
        if (!e.ok) {
            throw Error(e.reason === "no-auth" ? e.detail : `admin_requests: ${e.reason}`);
        }
        return e.data;
    });
}
async function p(request_type, s, e) {
    return Zr("api_admin_request_list", async ()=>{
        let n = new URLSearchParams({
            request_type
        });
        for (let a of s){
            n.append("statuses", a);
        }
        let u = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/me?${n}`, {
            auth: "teleport-org",
            credentials: e
        });
        if (!u.ok) {
            throw Error(u.reason === "no-auth" ? u.detail : `admin_requests/me: ${u.reason}`);
        }
        return u.data;
    });
}
async function g(r, s) {
    return Zr("api_admin_request_eligibility", async ()=>{
        let e = await Gt.get(`/api/oauth/organizations/:orgUUID/admin_requests/eligibility?request_type=${r}`, {
            auth: "teleport-org",
            credentials: s
        });
        if (!e.ok) {
            throw Error(e.reason === "no-auth" ? e.detail : `admin_requests/eligibility: ${e.reason}`);
        }
        return e.data;
    });
}
function f(r) {
    if (!At.isAxiosError(r)) {
        return null;
    }
    let s = r.response?.status;
    if (typeof s !== "number" || s >= 500) {
        return null;
    }
    let e = r.response?.data;
    if (!e || typeof e !== "object") {
        return null;
    }
    let n = e;
    let n_error = n.error;
    if (n_error && typeof n_error === "object") {
        let a = n_error.message;
        if (typeof a === "string" && a.length > 0) {
            return a;
        }
    }
    for (let a of [
        "message",
        "detail"
    ]){
        let i = n[a];
        if (typeof i === "string" && i.length > 0) {
            return i;
        }
    }
    return null;
}
const NQe = "Requesting usage credits notifies your organization admins. To review and send the request, run /usage-credits in an interactive Claude Code session.";
async function pyt(r, s) {
    try {
        await m({
            request_type: "limit_increase",
            details: null
        }, s);
        return {
            type: "message",
            filed: true,
            value: r == null ? "Request sent to your admin for usage credits." : r.is_enabled ? "Request sent to your admin to increase your usage credit limit." : "Request sent to your admin to turn on usage credits."
        };
    } catch (error) {
        let n = f(error);
        if (Hp(error, (u)=>f(u) !== null)) {
            t(`Admin request rejected: ${n ?? l(error)}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        if (n) {
            return {
                type: "message",
                value: n,
                filed: false
            };
        }
    }
    return {
        type: "message",
        filed: false,
        value: "Couldn't send your request. Try again later."
    };
}
function z1t() {
    if (Nt()) {
        return false;
    }
    let r = kr();
    let s = rO() !== null;
    let e = k("tengu_ember_latch", false) || s;
    let n = lP() && (s || (r === "pro" || r === "max") && !Tt());
    return e && n;
}
async function bme(r, s) {
    let e = kr();
    let n = e === "team" || e === "enterprise";
    if (!Tw() && n) {
        let extraUsage;
        let checked = true;
        try {
            extraUsage = (await XD(s))?.extra_usage;
            checked &&= extraUsage !== undefined;
        } catch (error) {
            checked = false;
            t(`extra-usage: fetchUtilization failed, falling through to ask user: ${error}`, {
                level: "error"
            });
        }
        switch(extraUsage?.disabled_reason){
            case "out_of_credits":
                return {
                    type: "message",
                    value: "Your organization is out of usage credits. Contact your admin to add more."
                };
            case "org_level_disabled_until":
            case "org_spend_cap_reached":
                if (extraUsage.disabled_reason === "org_level_disabled_until" && extraUsage.spend_limit_reached === false) {
                    break;
                }
                return {
                    type: "message",
                    value: "Your organization's usage credit cap is reached for this period. Contact your admin to raise it."
                };
            default:
        }
        if (extraUsage?.is_enabled && extraUsage.monthly_limit === null) {
            return {
                type: "message",
                value: "Your organization already has unlimited usage credits. No request needed."
            };
        }
        try {
            let o = await g("limit_increase", s);
            if (o?.is_allowed === false) {
                return {
                    type: "message",
                    value: "Usage credit requests are turned off for your organization."
                };
            }
            checked &&= o?.is_allowed === true;
        } catch (error) {
            checked = false;
            t(`Extra usage eligibility check failed: ${error}`, {
                level: "error"
            });
        }
        try {
            let o = await p("limit_increase", [
                "pending"
            ], s);
            if (o && o.length > 0) {
                return {
                    type: "message",
                    value: "You've already sent a usage credit request to your admin."
                };
            }
            checked &&= o !== null;
        } catch (error) {
            checked = false;
            t(`Failed to fetch pending admin requests: ${error}`, {
                level: "error"
            });
        }
        return {
            type: "confirm-admin-request",
            extraUsage,
            checked
        };
    }
    let url = n ? ZW : o8;
    if (!r.openInBrowser || Nt()) {
        return {
            type: "browser-opened",
            url,
            opened: false
        };
    }
    try {
        let opened = await Fs(url);
        return {
            type: "browser-opened",
            url,
            opened
        };
    } catch (error) {
        t(`Failed to open browser for ${url}: ${error}`, {
            level: "error"
        });
        return {
            type: "message",
            value: `Couldn't open your browser. Visit ${url} to manage usage credits.`
        };
    }
}
export { NQe, pyt, z1t, bme };
