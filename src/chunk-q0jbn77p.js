import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { readFileSync } from "fs";
const d = Se(tP());
const a = Se(Hm());
const m = Se(t0());
export const fromWebToken = (e)=>async (t)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromWebToken");
        let { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = e;
        let { roleAssumerWithWebIdentity } = e;
        if (!roleAssumerWithWebIdentity) {
            let { getDefaultRoleAssumerWithWebIdentity } = await import("/$bunfs/root/chunk-cd304kxj.js").then((m)=>Se(m.default));
            roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
                ...e.clientConfig,
                credentialProviderLogger: e.logger,
                parentClientConfig: {
                    ...t?.callerClientConfig,
                    ...e.parentClientConfig
                }
            }, e.clientPlugins);
        }
        return roleAssumerWithWebIdentity({
            RoleArn: roleArn,
            RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
            WebIdentityToken: webIdentityToken,
            ProviderId: providerId,
            PolicyArns: policyArns,
            Policy: policy,
            DurationSeconds: durationSeconds
        });
    };
const c = "AWS_WEB_IDENTITY_TOKEN_FILE";
const S = "AWS_ROLE_ARN";
const N = "AWS_ROLE_SESSION_NAME";
export const fromTokenFile = (e = {})=>async (t)=>{
        e.logger?.debug("@aws-sdk/credential-provider-web-identity - fromTokenFile");
        let o = e?.webIdentityTokenFile ?? process.env[c];
        let roleArn = e?.roleArn ?? process.env[S];
        let roleSessionName = e?.roleSessionName ?? process.env[N];
        if (!o || !roleArn) {
            throw new a.CredentialsProviderError("Web identity configuration not specified", {
                logger: e.logger
            });
        }
        let n = await fromWebToken({
            ...e,
            webIdentityToken: m.externalDataInterceptor?.getTokenRecord?.()[o] ?? readFileSync(o, {
                encoding: "ascii"
            }),
            roleArn,
            roleSessionName
        })(t);
        if (o === process.env[c]) {
            d.setCredentialFeature(n, "CREDENTIALS_ENV_VARS_STS_WEB_ID_TOKEN", "h");
        }
        return n;
    };
