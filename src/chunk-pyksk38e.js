import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Zgo, Gws, Mn, kr, Gt, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
const l = 14;
function rHr() {
    return Mn()?.claudeCodeTrialDurationDays ?? null;
}
const s = {
    status: "ineligible",
    daysRemaining: null
};
function Gft() {
    let r = Zgo();
    if (r) {
        return o(true, r.endsAt);
    }
    let e = Mn();
    if (!e || kr() !== "pro") {
        return s;
    }
    let a = e.ccOnboardingFlags?.e10 === true;
    return o(a, e.claudeCodeTrialEndsAt ?? null);
}
async function oHr(r, credentials) {
    return Zr("api_pro_trial_start", async ()=>{
        if (Zgo()) {
            let endsAt = new Date(Date.now() + l * 24 * 60 * 60 * 1000).toISOString();
            Gws({
                endsAt
            });
            return o(true, endsAt);
        }
        let n = await Gt.post("/api/oauth/organizations/:orgUUID/claude_code/pro_trial", {}, {
            auth: "teleport-org",
            credentials
        });
        if (!n.ok) {
            throw Error(n.reason === "no-auth" ? n.detail : `Pro trial start unavailable: ${n.reason}`);
        }
        t("Pro trial started", {
            level: "debug"
        });
        u(n.data.ends_at, r);
        return o(true, n.data.ends_at);
    });
}
function P0o() {
    if (Gft().status !== "expired") {
        return false;
    }
    return ce().cachedExtraUsageDisabledReason !== null;
}
function sHr(r) {
    switch(r.status){
        case "active":
            {
                let e = r.daysRemaining ?? 0;
                return `Trial: ${e} ${e === 1 ? "day" : "days"} left`;
            }
        case "expired":
            return "Usage credits";
        case "ineligible":
        case "not_started":
            return null;
    }
}
function o(r, e) {
    if (!r) {
        return s;
    }
    if (!e) {
        return {
            status: "not_started",
            daysRemaining: null
        };
    }
    let a = new Date(e);
    if (Number.isNaN(a.getTime())) {
        c(Error(`Invalid claude_code_trial_ends_at: ${e}`));
        return s;
    }
    let n = a.getTime() - Date.now();
    if (n <= 0) {
        return {
            status: "expired",
            daysRemaining: 0
        };
    }
    return {
        status: "active",
        daysRemaining: Math.ceil(n / 86400000)
    };
}
function u(claudeCodeTrialEndsAt, e) {
    Ae((a)=>{
        if (!a.oauthAccount || a.oauthAccount.claudeCodeTrialEndsAt === claudeCodeTrialEndsAt) {
            return a;
        }
        return {
            ...a,
            oauthAccount: {
                ...a.oauthAccount,
                claudeCodeTrialEndsAt
            }
        };
    }, e);
}
export { rHr, Gft, oHr, P0o, sHr };
