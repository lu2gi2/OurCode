import { B, W8e, LN, zZ, bwe, UPe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { x, l, v, jt, hy } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { wC, m9 } from "/$bunfs/root/chunk-x0qpydt2.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { eC, Wvs, Vvs, uN, PEs, p8, _vr, ayo, m8, $vr, dz, Nt, xY, Ae, a0, COt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Dr, Lw, Ie, Rh } from "/$bunfs/root/chunk-nj0630nv.js";
import { Zl, gwo, ZCs, gxe, Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { HFe, cxe, PF } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { Mys, XL, w$n, Y_s, X_s } from "/$bunfs/root/chunk-gr4a0fky.js";
import { rN } from "/$bunfs/root/chunk-5s4qvyjz.js";
import { mtr, vx } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Ers } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { AQ } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { Wit, Xs } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { Tfr } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { Xne } from "/$bunfs/root/chunk-53bavyda.js";
import { xSs, xQt, wmo, lSr } from "/$bunfs/root/chunk-n10cystb.js";
import { Eys, kys } from "/$bunfs/root/chunk-499b1h1a.js";
import { cys } from "/$bunfs/root/chunk-8yfbbt6t.js";
import { Dfo } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { r2o } from "/$bunfs/root/chunk-h170bvt6.js";
import { Jee, iEe } from "/$bunfs/root/chunk-6w83p5r5.js";
import { V6o } from "/$bunfs/root/chunk-krjtgnpw.js";
import { n$ } from "/$bunfs/root/chunk-8y1m7sq5.js";
import { ajt } from "/$bunfs/root/chunk-ggpgtemh.js";
import { Aj } from "/$bunfs/root/chunk-nwc9gp5j.js";
import { kyt } from "/$bunfs/root/chunk-2xadr0nb.js";
import { o, _t } from "/$bunfs/root/chunk-smx21d0k.js";
import { mkdir, readFile, unlink, writeFile } from "fs/promises";
import { join } from "path";
const vyt = "41077d10-94b8-4194-be48-d251e9eb21b4";
const GGo = [
    m9,
    wC
];
const U = /^[A-Za-z0-9_.-]+$/;
const S = {
    created_by: "claude-code"
};
const K = p(()=>_t({
        created_by: o().optional(),
        base_url: o().optional(),
        authentication: _t({
            type: o(),
            client_id: o().optional(),
            credentials_path: o().optional()
        })
    }));
const z = p(()=>_t({
        created_by: o().optional()
    }));
const O = {
    no_config_dir: true,
    invalid_profile_name: true,
    foreign_profile: true,
    custom_credentials_path: true,
    api_key_env_nondispatching: true,
    wif_env_quad: false,
    third_party_provider: false,
    api_key_env: false,
    env_credential_shadow: false,
    other_deployment_profile: false,
    federation_profile: false,
    unreadable_profile: false
};
function G(errorClass) {
    return Object.hasOwn(O, errorClass);
}
function VGo(e) {
    if (!(e instanceof x) || e.errorClass === undefined || !G(e.errorClass)) {
        return null;
    }
    return O[e.errorClass];
}
const M = {
    no_config_dir: "no Anthropic config directory was found",
    invalid_profile_name: "the configured profile name isn't valid",
    foreign_profile: "the profile on this machine belongs to another tool",
    custom_credentials_path: "the existing profile keeps its sign-in somewhere custom",
    api_key_env_nondispatching: "ANTHROPIC_API_KEY is set in this environment"
};
function qGo(e) {
    if (!(e instanceof x) || e.errorClass === undefined || !Y(e.errorClass)) {
        return null;
    }
    return M[e.errorClass];
}
function Y(errorClass) {
    return Object.hasOwn(M, errorClass);
}
async function pXn() {
    if (!b(a.ANTHROPIC_PROFILE) && a.ANTHROPIC_FEDERATION_RULE_ID && a.ANTHROPIC_ORGANIZATION_ID) {
        throw new x("Workload identity federation is configured in this environment (ANTHROPIC_FEDERATION_RULE_ID and ANTHROPIC_ORGANIZATION_ID), and it takes precedence over the default profile. Set ANTHROPIC_PROFILE to a profile name to sign in with a profile that outranks it.", "Console profile login refused: env-quad federation outranks the implicit profile", "wif_env_quad");
    }
    let e = Ie();
    if (e !== "firstParty") {
        throw new x(`This session uses ${Lw[e]}, which does not use Anthropic Console sign-in.`, "This session uses a third-party provider, which does not use Anthropic Console sign-in.", "third_party_provider");
    }
    let a_ANTHROPIC_API_KEY = a.ANTHROPIC_API_KEY;
    if (a_ANTHROPIC_API_KEY) {
        let u = await $vr({
            skipRetrievingKeyFromApiKeyHelper: true
        });
        if (u.source === "ANTHROPIC_API_KEY" && u.key === a_ANTHROPIC_API_KEY) {
            throw new x("ANTHROPIC_API_KEY is set in this environment and takes precedence over a profile, so a profile sign-in would not be used. Unset it to sign in this way.", "Console profile login refused: env credential shadows the profile", "api_key_env");
        }
    }
    if (_vr()) {
        throw new x("Something in this environment — an API key helper, an injected token, or a third-party provider setting — takes precedence over a profile sign-in, so it would not be used here.", "Console profile login refused: env credential shadows the profile", "env_credential_shadow");
    }
    let configDir = PF();
    if (configDir === null) {
        throw new x("Cannot locate the Anthropic config directory. Set ANTHROPIC_CONFIG_DIR (or HOME) and try again.", "Console profile login refused: no config directory", "no_config_dir");
    }
    let profile = A(configDir);
    let f = await R(join(configDir, "configs", `${profile}.json`));
    if (f !== null) {
        if (f.base_url && !Rh(f.base_url)) {
            throw new x("This profile is bound to a different Anthropic deployment, so Claude Code will not replace it here. Sign out of it with the tool that created it, then try again.", "Console profile login refused: profile bound to another deployment", "other_deployment_profile");
        }
        if (f.authentication.type === "oidc_federation") {
            throw new x("This machine is set up for workload identity federation, which signs in on its own. If you need a different sign-in, ask whoever configured it.", "Console profile login refused: federation profile", "federation_profile");
        }
        if (f.authentication.type !== "user_oauth") {
            throw new x("Claude Code cannot read the existing sign-in on this machine, so it will not overwrite it. Check the permissions on your Anthropic config directory, then try again.", "Console profile login refused: unreadable or unrecognized profile config", "unreadable_profile");
        }
        if (f.authentication.client_id !== vyt) {
            throw new x("This machine already has a sign-in from another tool that Claude Code cannot replace. Sign out with that tool, then try again.", "Console profile login refused: profile is not a same-client login", "foreign_profile");
        }
        if (f.authentication.credentials_path) {
            throw new x("This profile keeps its sign-in somewhere custom, so Claude Code cannot replace it. Sign out of it with the tool that created it, then try again.", "Console profile login refused: custom credentials_path", "custom_credentials_path");
        }
    }
    if (a_ANTHROPIC_API_KEY) {
        throw new x("ANTHROPIC_API_KEY is set in this environment. Unset it to sign in without an API key.", "Console profile login refused: non-dispatching env API key present", "api_key_env_nondispatching");
    }
    return {
        profile,
        configDir,
        isNewProfile: f === null
    };
}
async function KGo(e) {
    let r = await pXn();
    await mkdir(join(r.configDir, "credentials"), {
        recursive: true,
        mode: 448
    });
    return wmo(P(r.configDir, r.profile), ()=>q(e));
}
async function q(e) {
    let { profile, configDir, isNewProfile } = await pXn();
    let f = join(configDir, "configs", `${profile}.json`);
    await mkdir(join(configDir, "configs"), {
        recursive: true,
        mode: 448
    });
    let u = {
        version: xSs,
        organization_id: e.organizationUuid,
        workspace_id: e.workspaceId,
        authentication: {
            type: "user_oauth",
            client_id: vyt
        },
        ...S
    };
    await HFe(f, u);
    let _ = isNewProfile;
    let h = {
        version: xQt,
        type: "oauth_token",
        access_token: e.accessToken,
        refresh_token: e.refreshToken,
        expires_at: Math.floor(e.expiresAtMs / 1000),
        scope: e.scopes.join(" "),
        organization_uuid: e.organizationUuid,
        organization_name: e.organizationName,
        account_email: e.accountEmail
    };
    await HFe(P(configDir, profile), {
        ...h,
        workspace_id: e.workspaceId,
        workspace_name: e.workspaceName,
        ...S
    });
    let E = await W(join(configDir, "active_config"), profile + `
`);
    t(`Console profile login: wrote credentials for profile ${profile}${_ ? " (new profile)" : ""}${E ? " (set active)" : ""}`);
    lSr();
    return {
        profile,
        configDir
    };
}
async function N({ revoke } = {}) {
    try {
        let r = PF();
        if (r === null) {
            return {
                removed: false
            };
        }
        let n;
        try {
            n = A(r);
        } catch  {
            return {
                removed: false
            };
        }
        let s = await R(join(r, "configs", `${n}.json`));
        if (s === null || !L(s)) {
            return {
                removed: false
            };
        }
        if (await k(P(r, n)) === null) {
            return {
                removed: false
            };
        }
        return await wmo(P(r, n), ()=>V(revoke));
    } catch (error) {
        if (v(error) === "ENOENT") {
            return {
                removed: false
            };
        }
        t(`Logout: profile credential removal failed: ${l(error)}`, {
            level: "error"
        });
        return {
            removed: false
        };
    }
}
async function V(revoke) {
    let r = PF();
    if (r === null) {
        return {
            removed: false
        };
    }
    let n;
    try {
        n = A(r);
    } catch  {
        return {
            removed: false
        };
    }
    let s = await R(join(r, "configs", `${n}.json`));
    if (s === null || !L(s)) {
        return {
            removed: false
        };
    }
    let f = P(r, n);
    let u = await k(f);
    if (u === null) {
        return {
            removed: false
        };
    }
    let _ = {
        refreshToken: u.refreshToken,
        clientId: vyt
    };
    if (revoke && _.refreshToken) {
        await revoke({
            refreshToken: _.refreshToken,
            clientId: _.clientId
        });
    }
    try {
        await unlink(f);
    } catch (error) {
        t(`Logout: could not remove profile credentials: ${l(error)}`, {
            level: "error"
        });
        return {
            removed: false,
            ..._
        };
    }
    t(`Logout: removed credentials for profile ${n}`);
    lSr();
    return {
        removed: true,
        ..._
    };
}
function A(e) {
    let r = a.ANTHROPIC_PROFILE || cxe(e);
    if (!b(r)) {
        throw new x(`ANTHROPIC_PROFILE "${r}" is not a valid profile name (letters, digits, '_', '.', '-')`, "ANTHROPIC_PROFILE is not a valid profile name", "invalid_profile_name");
    }
    return r;
}
function b(e) {
    return !!e && U.test(e) && e !== "." && e !== "..";
}
function P(e, r) {
    return join(e, "credentials", `${r}.json`);
}
async function R(e) {
    let r;
    try {
        r = await readFile(e, "utf-8");
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        if (jt(error)) {
            return {
                authentication: {
                    type: "unreadable"
                }
            };
        }
        throw error;
    }
    let n;
    try {
        n = X(r);
    } catch (error) {
        t(`Profile config is not JSON, treating as foreign: ${l(error)}`);
        return {
            authentication: {
                type: "unreadable"
            }
        };
    }
    let s = K().safeParse(n);
    if (s.success) {
        return s.data;
    }
    return {
        authentication: {
            type: "unreadable"
        }
    };
}
function L(e) {
    return e.created_by === S.created_by && e.authentication.type === "user_oauth" && e.authentication.client_id === vyt;
}
async function k(e) {
    let r;
    try {
        r = await readFile(e, "utf-8");
    } catch (error) {
        if (jt(error)) {
            return null;
        }
        throw error;
    }
    let n;
    try {
        n = X(r);
    } catch  {
        return null;
    }
    let s = z().safeParse(n);
    if (!s.success || s.data.created_by !== S.created_by) {
        return null;
    }
    let refresh_token = s.data.refresh_token;
    return {
        refreshToken: typeof refresh_token === "string" ? refresh_token : undefined
    };
}
async function YGo(e) {
    let r = PF();
    if (r === null) {
        return false;
    }
    try {
        let n = await k(P(r, A(r)));
        return n !== null && n.refreshToken === e;
    } catch  {
        return true;
    }
}
async function W(e, r) {
    try {
        await writeFile(e, r, {
            flag: "wx",
            mode: 420
        });
        return true;
    } catch (error) {
        if (v(error) === "EEXIST") {
            return false;
        }
        throw error;
    }
}
async function zie({ clearOnboarding = false, preserveInProcessTokens = false, preserveNonAnthropicAuth = false, storageV5, preserveQuotaAutoResume = false, artifactAccount = "signed_out", incomingIdentity, credentials }) {
    let { flushTelemetry } = await import("/$bunfs/root/chunk-kmavnvvj.js");
    await flushTelemetry();
    await kys(artifactAccount);
    if (Nt()) {
        await Dhn(storageV5, {
            preserveQuotaAutoResume,
            artifactAccount,
            incomingIdentity
        });
        return;
    }
    if (!preserveInProcessTokens && Ie() === "firstParty") {
        let d = Jn();
        d.invalidateCache?.();
        let i = await d.readAsync(credentials);
        let m = i?.claudeAiOauth;
        if (m?.refreshToken) {
            await eC(m.refreshToken, m.clientId);
        }
        let C = i?.designOauth;
        if (C?.refreshToken) {
            await eC(C.refreshToken, C.clientId);
        }
    }
    if (Ie() === "gateway") {
        let d = Date.now() + 5000;
        for(let C = UPe(); C && Date.now() < d; C = UPe()){
            await Ge(C.catch(()=>{}), d - Date.now());
        }
        let i = Jn();
        i.invalidateCache?.();
        let m = (await i.readAsync(credentials))?.enterpriseGateway;
        if (m) {
            await PEs(m, credentials);
        }
    }
    if (!preserveInProcessTokens) {
        a.unset("CLAUDE_CODE_OAUTH_TOKEN");
        LN(null);
    }
    await ayo(storageV5);
    await N({
        revoke: !preserveInProcessTokens && Ie() === "firstParty" ? ({ refreshToken, clientId })=>eC(refreshToken, clientId) : undefined
    });
    let w = Jn();
    if (preserveNonAnthropicAuth) {
        if (Ie() === "firstParty") {
            w.invalidateCache?.();
            let d = (await w.readAsync(credentials))?.designOauth;
            if (d?.refreshToken) {
                await eC(d.refreshToken, d.clientId);
            }
        }
        await w.mutate((d)=>{
            let i = {
                ...d
            };
            delete i.claudeAiOauth;
            delete i.organizationUuid;
            delete i.trustedDeviceToken;
            delete i.enterpriseGateway;
            delete i.designOauth;
            return i;
        }, credentials).catch((d)=>{
            let i = v(d);
            if (i === "EPERM" || i === "ENOENT" || hy(d)) {
                t(`[performLogout] re-login secure-storage prune failed (${i}): ${l(d)}`, {
                    level: "error"
                });
                return;
            }
            c(d);
        });
    } else {
        let d = false;
        let i = async ()=>{
            d = true;
            let m = await J(w, credentials);
            await w.delete(credentials);
            if (m && Object.keys(m).length > 0) {
                await Z(w, m, credentials);
            }
        };
        await gwo(i).catch((m)=>{
            if (d) {
                throw m;
            }
            c(m);
            return ZCs(i);
        });
    }
    zZ(null);
    bwe(null);
    await Dhn(storageV5, {
        preserveQuotaAutoResume,
        artifactAccount,
        incomingIdentity,
        credentials
    });
    await Ae((d)=>{
        let i = {
            ...d
        };
        if (clearOnboarding) {
            i.hasCompletedOnboarding = false;
            i.subscriptionNoticeCount = 0;
            i.hasAvailableSubscription = false;
            if (i.customApiKeyResponses !== undefined) {
                i.customApiKeyResponses = {
                    approved: [],
                    rejected: a0(i).rejected
                };
            }
            let m = kyt;
            if (i.seenNotifications?.[m] !== undefined) {
                let { [m]: C, ...rest } = i.seenNotifications;
                i.seenNotifications = rest;
            }
        }
        i.oauthAccount = undefined;
        i.additionalModelOptionsCache = undefined;
        i.additionalModelOptionsAnsweredAt = undefined;
        i.additionalModelCostsCache = undefined;
        i.modelAccessCache = undefined;
        i.orgModelDefaultCache = undefined;
        i.cachedArtifactRoster = undefined;
        i.artifactRosterDenied = undefined;
        i.lastSeenOrgDefaultUpdatedAt = undefined;
        i.clientDataCache = undefined;
        i.clientDataCacheSlots = undefined;
        i.autoCompactWindowsCache = undefined;
        i.cachedUsageUtilization = undefined;
        i.metricsStatusCache = undefined;
        i.metricsStatusCacheByPrincipal = undefined;
        i.githubWebConnectionStatusCache = undefined;
        i.startupPrefetchedAt = undefined;
        return i;
    }, storageV5);
    await Q();
    W8e(undefined);
    g("oauth_logout");
}
async function Q() {}
async function Dhn(e, { preserveQuotaAutoResume = false, artifactAccount = "signed_out", incomingIdentity, credentials } = {}) {
    m8();
    if (j() && credentials === undefined) {
        gxe();
    }
    rN();
    COt();
    Dr().providerCache.clientDataFetches.clear();
    uN();
    Dr().providerCache.modelConfigs.clear();
    Dr().providerCache.validatedModels.clear();
    Vvs();
    Wvs();
    p8();
    Wit(Xs().gzipRequestBody.blockStore);
    AQ();
    let u = B();
    Ers(u.host);
    V6o(u.host);
    Eys(artifactAccount, incomingIdentity);
    if (artifactAccount !== "same_account") {
        cys(u);
        if (!(Nt() && artifactAccount === "signed_out")) {
            mtr("account_change");
            Tfr("account_change");
        }
    }
    Aj.of(u.host).clear();
    dz();
    vx(u, "account_change");
    xY();
    iEe.cache?.clear?.();
    Jee.cache?.clear?.();
    await ajt(e);
    await Dfo();
    r2o();
    Y_s();
    X_s();
    if (!preserveQuotaAutoResume) {
        n$("account_switch");
        XL("account_switch");
        Mys();
    }
    w$n();
}
async function ijs({ exit, setError, setInfo, storageV5, credentials }) {
    setInfo("Signing out…");
    Xne({
        action: "logout",
        success: true,
        authMethod: "oauth"
    });
    try {
        await zie({
            clearOnboarding: true,
            storageV5,
            credentials
        });
        exit();
    } catch (error) {
        c(error);
        setError(`Couldn't sign out \u2014 ${error instanceof Error ? error.message : String(error)}`);
    }
}
async function Z(e, coworkRemoteDevice, credentials) {
    let s;
    for(let f = 0; f < 2; f++){
        try {
            let u = await e.mutate(()=>({
                    coworkRemoteDevice
                }), credentials);
            if (u.success) {
                return;
            }
            s = Error("logout: the device identity could not be written back after the credential wipe");
            if (!u.transient) {
                break;
            }
        } catch (error) {
            s = error;
        }
    }
    c(s);
}
async function J(e, credentials) {
    for(let n = 0; n < 2; n++){
        let s = await (e.readAsyncStrict?.(credentials) ?? e.readAsync(credentials));
        if (s !== Zl) {
            return s?.coworkRemoteDevice;
        }
    }
    c(Error("logout: secure storage could not be read, so the device identity is not carried across the wipe"));
}
export { vyt, GGo, VGo, qGo, pXn, KGo, YGo, zie, Dhn, ijs };
