import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { createHash, createPrivateKey, createPublicKey, sign } from "crypto";
import { promises } from "fs";
import { homedir } from "os";
import { dirname, join } from "path";
const k = Se(t0());
const ne = Se(Hm());
const I = Se(tP());
const P = Se(Hm());
const N = Se(t0());
const L = Se(tP());
const _ = Se(Hm());
const O = (credential_source, r, logger)=>{
    let o = {
        EcsContainer: async (s)=>{
            let { fromHttp } = await import("/$bunfs/root/chunk-hh02h6bf.js");
            let { fromContainerMetadata } = await import("/$bunfs/root/chunk-1wxtxsr3.js");
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is EcsContainer");
            return async ()=>_.chain(fromHttp(s ?? {}), fromContainerMetadata(s))().then(S);
        },
        Ec2InstanceMetadata: async (s)=>{
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Ec2InstanceMetadata");
            let { fromInstanceMetadata } = await import("/$bunfs/root/chunk-1wxtxsr3.js");
            return async ()=>fromInstanceMetadata(s)().then(S);
        },
        Environment: async (s)=>{
            logger?.debug("@aws-sdk/credential-provider-ini - credential_source is Environment");
            let { fromEnv } = await import("/$bunfs/root/chunk-7x0z5crm.js");
            return async ()=>fromEnv(s)().then(S);
        }
    };
    if (credential_source in o) {
        return o[credential_source];
    } else {
        throw new _.CredentialsProviderError(`Unsupported credential source in profile ${r}. Got ${credential_source}, expected EcsContainer or Ec2InstanceMetadata or Environment.`, {
            logger
        });
    }
};
var S = (e)=>L.setCredentialFeature(e, "CREDENTIALS_PROFILE_NAMED_PROVIDER", "p");
const K = (e, { profile = "default", logger } = {})=>Boolean(e) && typeof e === "object" && typeof e.role_arn === "string" && [
        "undefined",
        "string"
    ].indexOf(typeof e.role_session_name) > -1 && [
        "undefined",
        "string"
    ].indexOf(typeof e.external_id) > -1 && [
        "undefined",
        "string"
    ].indexOf(typeof e.mfa_serial) > -1 && (se(e, {
        profile,
        logger
    }) || ie(e, {
        profile,
        logger
    }));
var se = (e, { profile, logger })=>{
    let o = typeof e.source_profile === "string" && typeof e.credential_source === "undefined";
    if (o) {
        logger?.debug?.(`    ${profile} isAssumeRoleWithSourceProfile source_profile=${e.source_profile}`);
    }
    return o;
};
var ie = (e, { profile, logger })=>{
    let o = typeof e.credential_source === "string" && typeof e.source_profile === "undefined";
    if (o) {
        logger?.debug?.(`    ${profile} isCredentialSourceProfile credential_source=${e.credential_source}`);
    }
    return o;
};
const B = async (e, r, t, o = {}, s)=>{
    t.logger?.debug("@aws-sdk/credential-provider-ini - resolveAssumeRoleCredentials (STS)");
    let n = r[e];
    let { source_profile, region } = n;
    if (!t.roleAssumer) {
        let { getDefaultRoleAssumer } = await import("/$bunfs/root/chunk-cd304kxj.js").then((m)=>Se(m.default));
        t.roleAssumer = getDefaultRoleAssumer({
            ...t.clientConfig,
            credentialProviderLogger: t.logger,
            parentClientConfig: {
                ...t?.parentClientConfig,
                region: region ?? t?.parentClientConfig?.region
            }
        }, t.clientPlugins);
    }
    if (source_profile && source_profile in o) {
        throw new P.CredentialsProviderError(`Detected a cycle attempting to resolve credentials for profile ${N.getProfileName(t)}. Profiles visited: ` + Object.keys(o).join(", "), {
            logger: t.logger
        });
    }
    t.logger?.debug(`@aws-sdk/credential-provider-ini - finding credential resolver using ${source_profile ? `source_profile=[${source_profile}]` : `profile=[${e}]`}`);
    let g = source_profile ? s(source_profile, r, t, {
        ...o,
        [source_profile]: true
    }, F(r[source_profile] ?? {})) : (await O(n.credential_source, e, t.logger)(t))();
    if (F(n)) {
        return g.then((l)=>I.setCredentialFeature(l, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    } else {
        let l = {
            RoleArn: n.role_arn,
            RoleSessionName: n.role_session_name || `aws-sdk-js-${Date.now()}`,
            ExternalId: n.external_id,
            DurationSeconds: parseInt(n.duration_seconds || "3600", 10)
        };
        let { mfa_serial } = n;
        if (mfa_serial) {
            if (!t.mfaCodeProvider) {
                throw new P.CredentialsProviderError(`Profile ${e} requires multi-factor authentication, but no MFA code callback was provided.`, {
                    logger: t.logger,
                    tryNextLink: false
                });
            }
            l.SerialNumber = mfa_serial;
            l.TokenCode = await t.mfaCodeProvider(mfa_serial);
        }
        let d = await g;
        return t.roleAssumer(d, l).then((c)=>I.setCredentialFeature(c, "CREDENTIALS_PROFILE_SOURCE_PROFILE", "o"));
    }
};
var F = (e)=>!e.role_arn && !!e.credential_source;
const G = Se(tP());
const q = Se(tP());
const M = Se(Hm());
const C = Se(t0());
const f = Se(Hm());
const j = Se(jm());
const W = Se(t0());
class w {
    profileData;
    init;
    callerClientConfig;
    static REFRESH_THRESHOLD = 300000;
    constructor(e, r, t){
        this.profileData = e;
        this.init = r;
        this.callerClientConfig = t;
    }
    async loadCredentials() {
        let e = await this.loadToken();
        if (!e) {
            throw new f.CredentialsProviderError(`Failed to load a token for session ${this.loginSession}, please re-authenticate using aws login`, {
                tryNextLink: false,
                logger: this.logger
            });
        }
        let e_accessToken = e.accessToken;
        let t = Date.now();
        if (new Date(e_accessToken.expiresAt).getTime() - t <= w.REFRESH_THRESHOLD) {
            return this.refresh(e);
        }
        return {
            accessKeyId: e_accessToken.accessKeyId,
            secretAccessKey: e_accessToken.secretAccessKey,
            sessionToken: e_accessToken.sessionToken,
            accountId: e_accessToken.accountId,
            expiration: new Date(e_accessToken.expiresAt)
        };
    }
    get logger() {
        return this.init?.logger;
    }
    get loginSession() {
        return this.profileData.login_session;
    }
    async refresh(e) {
        let { SigninClient, CreateOAuth2TokenCommand } = await import("/$bunfs/root/chunk-45dn2qxt.js").then((m)=>Se(m.default));
        let { logger, userAgentAppId } = this.callerClientConfig ?? {};
        let requestHandler = ((a)=>a?.metadata?.handlerProtocol === "h2")(this.callerClientConfig?.requestHandler) ? undefined : this.callerClientConfig?.requestHandler;
        let region = this.profileData.region ?? await this.callerClientConfig?.region?.() ?? process.env.AWS_REGION;
        let g = new SigninClient({
            credentials: {
                accessKeyId: "",
                secretAccessKey: ""
            },
            region,
            requestHandler,
            logger,
            userAgentAppId,
            ...this.init?.clientConfig
        });
        this.createDPoPInterceptor(g.middlewareStack);
        let l = {
            tokenInput: {
                clientId: e.clientId,
                refreshToken: e.refreshToken,
                grantType: "refresh_token"
            }
        };
        try {
            let a = await g.send(new CreateOAuth2TokenCommand(l));
            let { accessKeyId, secretAccessKey, sessionToken } = a.tokenOutput?.accessToken ?? {};
            let { refreshToken, expiresIn } = a.tokenOutput ?? {};
            if (!accessKeyId || !secretAccessKey || !sessionToken || !refreshToken) {
                throw new f.CredentialsProviderError("Token refresh response missing required fields", {
                    logger: this.logger,
                    tryNextLink: false
                });
            }
            let E = (expiresIn ?? 900) * 1000;
            let expiration = new Date(Date.now() + E);
            let D = {
                ...e,
                accessToken: {
                    ...e.accessToken,
                    accessKeyId,
                    secretAccessKey,
                    sessionToken,
                    expiresAt: expiration.toISOString()
                },
                refreshToken
            };
            await this.saveToken(D);
            let y = D.accessToken;
            return {
                accessKeyId: y.accessKeyId,
                secretAccessKey: y.secretAccessKey,
                sessionToken: y.sessionToken,
                accountId: y.accountId,
                expiration
            };
        } catch (error) {
            if (error.name === "AccessDeniedException") {
                let d = error.error;
                let c;
                switch(d){
                    case "TOKEN_EXPIRED":
                        c = "Your session has expired. Please reauthenticate.";
                        break;
                    case "USER_CREDENTIALS_CHANGED":
                        c = "Unable to refresh credentials because of a change in your password. Please reauthenticate with your new password.";
                        break;
                    case "INSUFFICIENT_PERMISSIONS":
                        c = "Unable to refresh credentials due to insufficient permissions. You may be missing permission for the 'CreateOAuth2Token' action.";
                        break;
                    default:
                        c = `Failed to refresh token: ${String(error)}. Please re-authenticate using \`aws login\``;
                }
                throw new f.CredentialsProviderError(c, {
                    logger: this.logger,
                    tryNextLink: false
                });
            }
            throw new f.CredentialsProviderError(`Failed to refresh token: ${String(error)}. Please re-authenticate using aws login`, {
                logger: this.logger
            });
        }
    }
    async loadToken() {
        let e = this.getTokenFilePath();
        try {
            let r;
            try {
                r = await W.readFile(e, {
                    ignoreCache: this.init?.ignoreCache
                });
            } catch  {
                r = await promises.readFile(e, "utf8");
            }
            let t = JSON.parse(r);
            let o = [
                "accessToken",
                "clientId",
                "refreshToken",
                "dpopKey"
            ].filter((s)=>!t[s]);
            if (!t.accessToken?.accountId) {
                o.push("accountId");
            }
            if (o.length > 0) {
                throw new f.CredentialsProviderError(`Token validation failed, missing fields: ${o.join(", ")}`, {
                    logger: this.logger,
                    tryNextLink: false
                });
            }
            return t;
        } catch (error) {
            throw new f.CredentialsProviderError(`Failed to load token from ${e}: ${String(error)}`, {
                logger: this.logger,
                tryNextLink: false
            });
        }
    }
    async saveToken(e) {
        let r = this.getTokenFilePath();
        let t = dirname(r);
        try {
            await promises.mkdir(t, {
                recursive: true
            });
        } catch (o) {}
        await promises.writeFile(r, JSON.stringify(e, null, 2), "utf8");
    }
    getTokenFilePath() {
        let e = process.env.AWS_LOGIN_CACHE_DIRECTORY ?? join(homedir(), ".aws", "login", "cache");
        let r = Buffer.from(this.loginSession, "utf8");
        let t = createHash("sha256").update(r).digest("hex");
        return join(e, `${t}.json`);
    }
    derToRawSignature(e) {
        let r = 2;
        if (e[r] !== 2) {
            throw Error("Invalid DER signature");
        }
        r++;
        let t = e[r++];
        let o = e.subarray(r, r + t);
        r += t;
        if (e[r] !== 2) {
            throw Error("Invalid DER signature");
        }
        r++;
        let s = e[r++];
        let n = e.subarray(r, r + s);
        o = o[0] === 0 ? o.subarray(1) : o;
        n = n[0] === 0 ? n.subarray(1) : n;
        let i = Buffer.concat([
            Buffer.alloc(32 - o.length),
            o
        ]);
        let u = Buffer.concat([
            Buffer.alloc(32 - n.length),
            n
        ]);
        return Buffer.concat([
            i,
            u
        ]);
    }
    createDPoPInterceptor(e) {
        e.add((r)=>async (t)=>{
                if (j.HttpRequest.isInstance(t.request)) {
                    let o = t.request;
                    let s = `${o.protocol}//${o.hostname}${o.port ? `:${o.port}` : ""}${o.path}`;
                    let DPoP = await this.generateDpop(o.method, s);
                    o.headers = {
                        ...o.headers,
                        DPoP
                    };
                }
                return r(t);
            }, {
            step: "finalizeRequest",
            name: "dpopInterceptor",
            override: true
        });
    }
    async generateDpop(htm = "POST", htu) {
        let t = await this.loadToken();
        try {
            let o = createPrivateKey({
                key: t.dpopKey,
                format: "pem",
                type: "sec1"
            });
            let n = createPublicKey(o).export({
                format: "der",
                type: "spki"
            });
            let i = -1;
            for(let p = 0; p < n.length; p++){
                if (n[p] === 4) {
                    i = p;
                    break;
                }
            }
            let u = n.slice(i + 1, i + 33);
            let g = n.slice(i + 33, i + 65);
            let l = {
                alg: "ES256",
                typ: "dpop+jwt",
                jwk: {
                    kty: "EC",
                    crv: "P-256",
                    x: u.toString("base64url"),
                    y: g.toString("base64url")
                }
            };
            let a = {
                jti: crypto.randomUUID(),
                htm,
                htu,
                iat: Math.floor(Date.now() / 1000)
            };
            let d = Buffer.from(JSON.stringify(l)).toString("base64url");
            let c = Buffer.from(JSON.stringify(a)).toString("base64url");
            let m = `${d}.${c}`;
            let h = sign("sha256", Buffer.from(m), o);
            let E = this.derToRawSignature(h).toString("base64url");
            return `${m}.${E}`;
        } catch (error) {
            throw new f.CredentialsProviderError(`Failed to generate Dpop proof: ${error instanceof Error ? error.message : String(error)}`, {
                logger: this.logger,
                tryNextLink: false
            });
        }
    }
}
const U = (e)=>async ({ callerClientConfig } = {})=>{
        e?.logger?.debug?.("@aws-sdk/credential-providers - fromLoginCredentials");
        let t = await C.parseKnownFiles(e || {});
        let o = C.getProfileName({
            profile: e?.profile ?? callerClientConfig?.profile
        });
        let s = t[o];
        if (!s?.login_session) {
            throw new M.CredentialsProviderError(`Profile ${o} does not contain login_session.`, {
                tryNextLink: true,
                logger: e?.logger
            });
        }
        let i = await new w(s, e, callerClientConfig).loadCredentials();
        return q.setCredentialFeature(i, "CREDENTIALS_LOGIN", "AD");
    };
const J = (e)=>Boolean(e && e.login_session);
const Y = async (e, r)=>{
    let t = await U({
        ...r,
        profile: e
    })();
    return G.setCredentialFeature(t, "CREDENTIALS_PROFILE_LOGIN", "AC");
};
const z = Se(tP());
const V = (e)=>Boolean(e) && typeof e === "object" && typeof e.credential_process === "string";
const X = async (e, r)=>import("/$bunfs/root/chunk-dh7sqpr7.js").then(({ fromProcess })=>fromProcess({
            ...e,
            profile: r
        })().then((o)=>z.setCredentialFeature(o, "CREDENTIALS_PROFILE_PROCESS", "v")));
const v = Se(tP());
const Q = async (e, r, t = {})=>{
    let { fromSSO } = await import("/$bunfs/root/chunk-739k1yfe.js");
    return fromSSO({
        profile: e,
        logger: t.logger,
        parentClientConfig: t.parentClientConfig,
        clientConfig: t.clientConfig
    })().then((s)=>{
        if (r.sso_session) {
            return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO", "r");
        } else {
            return v.setCredentialFeature(s, "CREDENTIALS_PROFILE_SSO_LEGACY", "t");
        }
    });
};
const Z = (e)=>e && (typeof e.sso_start_url === "string" || typeof e.sso_account_id === "string" || typeof e.sso_session === "string" || typeof e.sso_region === "string" || typeof e.sso_role_name === "string");
const ee = Se(tP());
const x = (e)=>Boolean(e) && typeof e === "object" && typeof e.aws_access_key_id === "string" && typeof e.aws_secret_access_key === "string" && [
        "undefined",
        "string"
    ].indexOf(typeof e.aws_session_token) > -1 && [
        "undefined",
        "string"
    ].indexOf(typeof e.aws_account_id) > -1;
const R = async (e, r)=>{
    r?.logger?.debug("@aws-sdk/credential-provider-ini - resolveStaticCredentials");
    let t = {
        accessKeyId: e.aws_access_key_id,
        secretAccessKey: e.aws_secret_access_key,
        sessionToken: e.aws_session_token,
        ...e.aws_credential_scope && {
            credentialScope: e.aws_credential_scope
        },
        ...e.aws_account_id && {
            accountId: e.aws_account_id
        }
    };
    return ee.setCredentialFeature(t, "CREDENTIALS_PROFILE", "n");
};
const te = Se(tP());
const re = (e)=>Boolean(e) && typeof e === "object" && typeof e.web_identity_token_file === "string" && typeof e.role_arn === "string" && [
        "undefined",
        "string"
    ].indexOf(typeof e.role_session_name) > -1;
const oe = async (e, r)=>import("/$bunfs/root/chunk-q0jbn77p.js").then(({ fromTokenFile })=>fromTokenFile({
            webIdentityTokenFile: e.web_identity_token_file,
            roleArn: e.role_arn,
            roleSessionName: e.role_session_name,
            roleAssumerWithWebIdentity: r.roleAssumerWithWebIdentity,
            logger: r.logger,
            parentClientConfig: r.parentClientConfig
        })().then((o)=>te.setCredentialFeature(o, "CREDENTIALS_PROFILE_STS_WEB_ID_TOKEN", "q")));
const A = async (e, r, t, o = {}, s = false)=>{
    let n = r[e];
    if (Object.keys(o).length > 0 && x(n)) {
        return R(n, t);
    }
    if (s || K(n, {
        profile: e,
        logger: t.logger
    })) {
        return B(e, r, t, o, A);
    }
    if (x(n)) {
        return R(n, t);
    }
    if (re(n)) {
        return oe(n, t);
    }
    if (V(n)) {
        return X(t, e);
    }
    if (Z(n)) {
        return await Q(e, n, t);
    }
    if (J(n)) {
        return Y(e, t);
    }
    throw new ne.CredentialsProviderError(`Could not resolve credentials using profile: [${e}] in configuration/credentials file(s).`, {
        logger: t.logger
    });
};
export const Imo = (e = {})=>async ({ callerClientConfig } = {})=>{
        let t = {
            ...e,
            parentClientConfig: {
                ...callerClientConfig,
                ...e.parentClientConfig
            }
        };
        t.logger?.debug("@aws-sdk/credential-provider-ini - fromIni");
        let o = await k.parseKnownFiles(t);
        return A(k.getProfileName({
            profile: e.profile ?? callerClientConfig?.profile
        }), o, t);
    };
