import { Oq, LN, o0t, bwe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { $r, l, Hp } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m } from "/$bunfs/root/chunk-04d4ftnx.js";
import { XYe, bwr, ez, S7t, tho, w7t, Rvr, xvr, m8, fg, aP, yl, Pb, Xu, hyo, Mn, pN, Gt, Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { fTr } from "/$bunfs/root/chunk-ph7a449e.js";
import { Xne } from "/$bunfs/root/chunk-53bavyda.js";
import { zie, Dhn } from "/$bunfs/root/chunk-yd9y535y.js";
import { nae } from "/$bunfs/root/chunk-w9qrhgzw.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
async function h(storageV5, credentials) {
    try {
        if (ce().claudeCodeFirstTokenDate !== undefined) {
            g("api_first_token_date_fetch");
            return;
        }
        let f = await Gt.get("/api/organization/claude_code_first_token_date", {
            auth: "async",
            timeout: 10000,
            credentials
        });
        if (!f.ok) {
            if (f.reason === "no-auth") {
                t(`Failed to get auth headers for first-token-date fetch: ${f.detail}`, {
                    level: "error"
                });
                m("api_first_token_date_fetch", "request_failed");
            }
            return;
        }
        let claudeCodeFirstTokenDate = f.data?.first_token_date ?? null;
        if (claudeCodeFirstTokenDate !== null) {
            let u = new Date(claudeCodeFirstTokenDate).getTime();
            if (isNaN(u)) {
                c(Error(`Received invalid first_token_date from API: ${claudeCodeFirstTokenDate}`));
                m("api_first_token_date_fetch", "invalid_date");
                return;
            }
        }
        await Ae((u)=>({
                ...u,
                claudeCodeFirstTokenDate
            }), storageV5);
        g("api_first_token_date_fetch");
    } catch (error) {
        if (Hp(error)) {
            t(`Failed to fetch first token date: ${l(error)}`, {
                level: "error"
            });
        } else {
            c(error);
        }
        m("api_first_token_date_fetch", "request_failed");
    }
}
const y = "Couldn't save your login. Try logging in again.";
const k = "Couldn't save your login. If your Mac's keychain is locked, unlock it and log in again.";
async function sje(e, { storageV5, credentials } = {}) {
    let f = await t0r(e, {
        storageV5,
        credentials
    });
    let o = await xvr(e, credentials);
    aP();
    if (process.env.CLAUDE_CODE_OAUTH_TOKEN) {
        if (o.success) {
            delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
        } else {
            process.env.CLAUDE_CODE_OAUTH_TOKEN = e.accessToken;
        }
    }
    if (Oq()) {
        LN(o.success ? null : e.accessToken);
        o0t(false);
    }
    if ("transient" in o && o.transient === true && !a.CLAUDE_CODE_OAUTH_TOKEN && !Oq()) {
        throw new $r(O() === "macos" ? k : y);
    }
    if (j() && credentials !== undefined) {
        await T(credentials);
    }
    let { warning } = o;
    if (warning) {
        i("tengu_oauth_storage_warning", {
            warning: warning === fTr || warning === Rvr ? d(warning) : b("other")
        });
    }
    await S7t(e.accessToken, storageV5).catch((p)=>t(String(p), {
            level: "error"
        }));
    if (ez(e.scopes)) {
        await h(storageV5, credentials).catch((p)=>t(String(p), {
                level: "error"
            }));
    } else if (!await tho(e.accessToken, storageV5)) {
        throw Error("Unable to create API key. The server accepted the request but did not return a key.");
    }
    await n0r({
        storageV5,
        credentials,
        ...f
    });
    return {
        storage: {
            success: o.success,
            backendName: o.backendName,
            transient: o.transient,
            sessionAuth: o.success || hyo(e.accessToken) ? "fresh" : Xu() ? "previous" : "none"
        }
    };
}
async function t0r(e, { storageV5, credentials }) {
    let f = Mn();
    let incomingIdentity = {
        accountUuid: e.profile?.account?.uuid ?? e.tokenAccount?.uuid,
        organizationUuid: e.profile?.organization?.uuid ?? e.tokenAccount?.organizationUuid
    };
    let preserveQuotaAutoResume = Pb(f, incomingIdentity);
    let p = Pb(pN(), incomingIdentity);
    let A = await fg(credentials);
    let artifactAccount = p && (A === "env" || A === "fd" || A === "store" && preserveQuotaAutoResume) ? "same_account" : "account_switch";
    await zie({
        clearOnboarding: false,
        preserveInProcessTokens: true,
        preserveNonAnthropicAuth: true,
        storageV5,
        preserveQuotaAutoResume,
        artifactAccount,
        incomingIdentity,
        credentials
    });
    bwe(null);
    let r = e.profile ?? await XYe(e.accessToken);
    if (r?.account && r.organization) {
        w7t({
            accountUuid: r.account.uuid,
            emailAddress: r.account.email,
            organizationUuid: r.organization.uuid,
            displayName: r.account.display_name || undefined,
            fullName: r.account.full_name || undefined,
            hasExtraUsageEnabled: r.organization.has_extra_usage_enabled ?? undefined,
            billingType: r.organization.billing_type ?? undefined,
            subscriptionCreatedAt: r.organization.subscription_created_at ?? undefined,
            accountCreatedAt: r.account.created_at,
            ccOnboardingFlags: r.organization.cc_onboarding_flags ?? {},
            claudeCodeTrialEndsAt: r.organization.claude_code_trial_ends_at ?? null,
            claudeCodeTrialDurationDays: r.organization.claude_code_trial_duration_days ?? null,
            seatTier: r.organization.seat_tier ?? null,
            planDisplayName: bwr(r),
            profileFetchedAt: Date.now()
        }, storageV5);
    } else if (e.tokenAccount) {
        w7t({
            accountUuid: e.tokenAccount.uuid,
            emailAddress: e.tokenAccount.emailAddress,
            organizationUuid: e.tokenAccount.organizationUuid
        }, storageV5);
    }
    Xne({
        action: "login",
        success: true,
        authMethod: "oauth"
    });
    return {
        preserveQuotaAutoResume,
        artifactAccount,
        incomingIdentity
    };
}
async function n0r({ storageV5, credentials, preserveQuotaAutoResume = false, incomingIdentity }) {
    await Dhn(storageV5, {
        preserveQuotaAutoResume,
        artifactAccount: "same_account",
        incomingIdentity
    });
    if (j() && credentials !== undefined) {
        await T(credentials);
    }
    await nae(storageV5, credentials);
}
async function T(credentials) {
    m8();
    await yl(credentials);
}
export { sje, t0r, n0r };
