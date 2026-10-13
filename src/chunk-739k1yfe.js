import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { mFn } from "/$bunfs/root/chunk-4p8pf317.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const S = Se(Hm());
const m = Se(t0());
const D = (e)=>e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
const y = Se(tP());
const d = Se(Hm());
const F = Se(t0());
const tryNextLink = false;
const O = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, parentClientConfig, profile, filepath, configFilepath, ignoreCache, logger })=>{
    let g;
    let N = "To refresh this SSO session run aws sso login with the corresponding profile.";
    if (ssoSession) {
        try {
            let c = await mFn({
                profile,
                filepath,
                configFilepath,
                ignoreCache
            })();
            g = {
                accessToken: c.token,
                expiresAt: new Date(c.expiration).toISOString()
            };
        } catch (error) {
            throw new d.CredentialsProviderError(error.message, {
                tryNextLink,
                logger
            });
        }
    } else {
        try {
            g = await F.getSSOTokenFromFile(ssoStartUrl);
        } catch (c) {
            throw new d.CredentialsProviderError("The SSO session associated with this profile is invalid. To refresh this SSO session run aws sso login with the corresponding profile.", {
                tryNextLink,
                logger
            });
        }
    }
    if (new Date(g.expiresAt).getTime() - Date.now() <= 0) {
        throw new d.CredentialsProviderError("The SSO session associated with this profile has expired. To refresh this SSO session run aws sso login with the corresponding profile.", {
            tryNextLink,
            logger
        });
    }
    let { accessToken } = g;
    let { SSOClient, GetRoleCredentialsCommand } = await import("/$bunfs/root/chunk-g9nxhxxw.js");
    let w = ssoClient || new SSOClient({
        ...clientConfig ?? {},
        logger: clientConfig?.logger ?? parentClientConfig?.logger,
        region: clientConfig?.region ?? ssoRegion,
        userAgentAppId: clientConfig?.userAgentAppId ?? parentClientConfig?.userAgentAppId
    });
    let I;
    try {
        I = await w.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken
        }));
    } catch (error) {
        throw new d.CredentialsProviderError(error, {
            tryNextLink,
            logger
        });
    }
    let { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope, accountId } = {} } = I;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new d.CredentialsProviderError("SSO returns an invalid temporary credential.", {
            tryNextLink,
            logger
        });
    }
    let x = {
        accessKeyId,
        secretAccessKey,
        sessionToken,
        expiration: new Date(expiration),
        ...credentialScope && {
            credentialScope
        },
        ...accountId && {
            accountId
        }
    };
    if (ssoSession) {
        y.setCredentialFeature(x, "CREDENTIALS_SSO", "s");
    } else {
        y.setCredentialFeature(x, "CREDENTIALS_SSO_LEGACY", "u");
    }
    return x;
};
const M = Se(Hm());
const U = (e, logger)=>{
    let { sso_start_url, sso_account_id, sso_region, sso_role_name } = e;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new M.CredentialsProviderError(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", "sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(e).join(", ")}
Reference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, {
            tryNextLink: false,
            logger
        });
    }
    return e;
};
export const fromSSO = (e = {})=>async ({ callerClientConfig } = {})=>{
        e.logger?.debug("@aws-sdk/credential-provider-sso - fromSSO");
        let { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = e;
        let { ssoClient } = e;
        let profile = m.getProfileName({
            profile: e.profile ?? callerClientConfig?.profile
        });
        if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
            let o = (await m.parseKnownFiles(e))[profile];
            if (!o) {
                throw new S.CredentialsProviderError(`Profile ${profile} was not found.`, {
                    logger: e.logger
                });
            }
            if (!D(o)) {
                throw new S.CredentialsProviderError(`Profile ${profile} is not configured with SSO credentials.`, {
                    logger: e.logger
                });
            }
            if (o?.sso_session) {
                let p = (await m.loadSsoSessionData(e))[o.sso_session];
                let w = ` configurations in profile ${profile} and sso-session ${o.sso_session}`;
                if (ssoRegion && ssoRegion !== p.sso_region) {
                    throw new S.CredentialsProviderError(`Conflicting SSO region${w}`, {
                        tryNextLink: false,
                        logger: e.logger
                    });
                }
                if (ssoStartUrl && ssoStartUrl !== p.sso_start_url) {
                    throw new S.CredentialsProviderError(`Conflicting SSO start_url${w}`, {
                        tryNextLink: false,
                        logger: e.logger
                    });
                }
                o.sso_region = p.sso_region;
                o.sso_start_url = p.sso_start_url;
            }
            let { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = U(o, e.logger);
            return O({
                ssoStartUrl: sso_start_url,
                ssoSession: sso_session,
                ssoAccountId: sso_account_id,
                ssoRegion: sso_region,
                ssoRoleName: sso_role_name,
                ssoClient,
                clientConfig: e.clientConfig,
                parentClientConfig: e.parentClientConfig,
                profile,
                filepath: e.filepath,
                configFilepath: e.configFilepath,
                ignoreCache: e.ignoreCache,
                logger: e.logger
            });
        } else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
            throw new S.CredentialsProviderError('Incomplete configuration. The fromSSO() argument hash must include "ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"', {
                tryNextLink: false,
                logger: e.logger
            });
        } else {
            return O({
                ssoStartUrl,
                ssoSession,
                ssoAccountId,
                ssoRegion,
                ssoRoleName,
                ssoClient,
                clientConfig: e.clientConfig,
                parentClientConfig: e.parentClientConfig,
                profile,
                filepath: e.filepath,
                configFilepath: e.configFilepath,
                ignoreCache: e.ignoreCache,
                logger: e.logger
            });
        }
    };
