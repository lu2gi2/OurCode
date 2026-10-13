import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { promises } from "fs";
const S = Se(Hm());
const a = Se(t0());
const g = 300000;
const p = "To refresh this SSO session run 'aws sso login' with the corresponding profile.";
const k = async (sso_region, o = {})=>{
    let { SSOOIDCClient } = await import("/$bunfs/root/chunk-e2jnjh12.js").then((m)=>Se(m.default));
    let n = (f)=>o.clientConfig?.[f] ?? o.parentClientConfig?.[f];
    return new SSOOIDCClient({
        ...o.clientConfig ?? {},
        region: sso_region ?? o.clientConfig?.region,
        logger: n("logger"),
        userAgentAppId: n("userAgentAppId")
    });
};
const h = async (e, sso_region, s = {})=>{
    let { CreateTokenCommand } = await import("/$bunfs/root/chunk-e2jnjh12.js").then((m)=>Se(m.default));
    return (await k(sso_region, s)).send(new CreateTokenCommand({
        clientId: e.clientId,
        clientSecret: e.clientSecret,
        refreshToken: e.refreshToken,
        grantType: "refresh_token"
    }));
};
const u = Se(Hm());
const w = (e)=>{
    if (e.expiration && e.expiration.getTime() < Date.now()) {
        throw new u.TokenProviderError(`Token is expired. ${p}`, false);
    }
};
const E = Se(Hm());
const i = (e, o, s = false)=>{
    if (typeof o === "undefined") {
        throw new E.TokenProviderError(`Value not present for '${e}' in SSO Token${s ? ". Cannot refresh" : ""}. ${p}`, false);
    }
};
const x = Se(t0());
const { writeFile } = promises;
const O = (e, o)=>{
    let s = x.getSSOTokenFilepath(e);
    let n = JSON.stringify(o, null, 2);
    return writeFile(s, n);
};
const C = new Date(0);
export const mFn = (e = {})=>async ({ callerClientConfig } = {})=>{
        let s = {
            ...e,
            parentClientConfig: {
                ...callerClientConfig,
                ...e.parentClientConfig
            }
        };
        s.logger?.debug("@aws-sdk/token-providers - fromSso");
        let n = await a.parseKnownFiles(s);
        let c = a.getProfileName({
            profile: s.profile ?? callerClientConfig?.profile
        });
        let f = n[c];
        if (!f) {
            throw new S.TokenProviderError(`Profile '${c}' could not be found in shared credentials file.`, false);
        } else if (!f.sso_session) {
            throw new S.TokenProviderError(`Profile '${c}' is missing required property 'sso_session'.`);
        }
        let f_sso_session = f.sso_session;
        let d = (await a.loadSsoSessionData(s))[f_sso_session];
        if (!d) {
            throw new S.TokenProviderError(`Sso session '${f_sso_session}' could not be found in shared credentials file.`, false);
        }
        for (let t of [
            "sso_start_url",
            "sso_region"
        ]){
            if (!d[t]) {
                throw new S.TokenProviderError(`Sso session '${f_sso_session}' is missing required property '${t}'.`, false);
            }
        }
        let { sso_start_url, sso_region } = d;
        let r;
        try {
            r = await a.getSSOTokenFromFile(f_sso_session);
        } catch (t) {
            throw new S.TokenProviderError(`The SSO session token associated with profile=${c} was not found or is invalid. ${p}`, false);
        }
        i("accessToken", r.accessToken);
        i("expiresAt", r.expiresAt);
        let { accessToken, expiresAt } = r;
        let l = {
            token: accessToken,
            expiration: new Date(expiresAt)
        };
        if (l.expiration.getTime() - Date.now() > g) {
            return l;
        }
        if (Date.now() - C.getTime() < 30000) {
            w(l);
            return l;
        }
        i("clientId", r.clientId, true);
        i("clientSecret", r.clientSecret, true);
        i("refreshToken", r.refreshToken, true);
        try {
            C.setTime(Date.now());
            let t = await h(r, sso_region, s);
            i("accessToken", t.accessToken);
            i("expiresIn", t.expiresIn);
            let expiration = new Date(Date.now() + t.expiresIn * 1000);
            try {
                await O(f_sso_session, {
                    ...r,
                    accessToken: t.accessToken,
                    expiresAt: expiration.toISOString(),
                    refreshToken: t.refreshToken
                });
            } catch (v) {}
            return {
                token: t.accessToken,
                expiration
            };
        } catch (t) {
            w(l);
            return l;
        }
    };
