import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const p = Se(tP());
const E = Se(Hm());
const Omo = "AWS_ACCESS_KEY_ID";
const Mmo = "AWS_SECRET_ACCESS_KEY";
const u = "AWS_SESSION_TOKEN";
const _ = "AWS_CREDENTIAL_EXPIRATION";
const C = "AWS_CREDENTIAL_SCOPE";
const w = "AWS_ACCOUNT_ID";
const fFn = (e)=>async ()=>{
        e?.logger?.debug("@aws-sdk/credential-provider-env - fromEnv");
        let accessKeyId = process.env[Omo];
        let secretAccessKey = process.env[Mmo];
        let sessionToken = process.env[u];
        let s = process.env[_];
        let credentialScope = process.env[C];
        let accountId = process.env[w];
        if (accessKeyId && secretAccessKey) {
            let a = {
                accessKeyId,
                secretAccessKey,
                ...sessionToken && {
                    sessionToken
                },
                ...s && {
                    expiration: new Date(s)
                },
                ...credentialScope && {
                    credentialScope
                },
                ...accountId && {
                    accountId
                }
            };
            p.setCredentialFeature(a, "CREDENTIALS_ENV_VARS", "g");
            return a;
        }
        throw new E.CredentialsProviderError("Unable to find environment variable credentials.", {
            logger: e?.logger
        });
    };
const c = Se(Hm());
const m = Se(t0());
const i = Se(Hm());
const f = "AWS_EC2_METADATA_DISABLED";
const S = async (e)=>{
    let { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await import("/$bunfs/root/chunk-1wxtxsr3.js");
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromHttp/fromContainerMetadata");
        let { fromHttp } = await import("/$bunfs/root/chunk-hh02h6bf.js");
        return i.chain(fromHttp(e), fromContainerMetadata(e));
    }
    if (process.env[f] && process.env[f] !== "false") {
        return async ()=>{
            throw new i.CredentialsProviderError("EC2 Instance Metadata Service access disabled", {
                logger: e.logger
            });
        };
    }
    e.logger?.debug("@aws-sdk/credential-provider-node - remoteProvider::fromInstanceMetadata");
    return fromInstanceMetadata(e);
};
function g(e, o) {
    let r = A(e);
    let n;
    let s;
    let t;
    let d = async (a)=>{
        if (a?.forceRefresh) {
            return await r(a);
        }
        if (t?.expiration) {
            if (t?.expiration?.getTime() < Date.now()) {
                t = undefined;
            }
        }
        if (n) {
            await n;
        } else if (!t || o?.(t)) {
            if (t) {
                if (!s) {
                    s = r(a).then((l)=>{
                        t = l;
                        s = undefined;
                    });
                }
            } else {
                n = r(a).then((l)=>{
                    t = l;
                    n = undefined;
                });
                return d(a);
            }
        }
        return t;
    };
    return d;
}
var A = (e)=>async (o)=>{
        let r;
        for (let n of e){
            try {
                return await n(o);
            } catch (error) {
                r = error;
                if (error?.tryNextLink) {
                    continue;
                }
                throw error;
            }
        }
        throw r;
    };
let v = false;
const Ode = (e = {})=>g([
        async ()=>{
            if (e.profile ?? process.env[m.ENV_PROFILE]) {
                if (process.env[Omo] && process.env[Mmo]) {
                    if (!v) {
                        (e.logger?.warn && e.logger?.constructor?.name !== "NoOpLogger" ? e.logger.warn.bind(e.logger) : console.warn)(`@aws-sdk/credential-provider-node - defaultProvider::fromEnv WARNING:
    Multiple credential sources detected: 
    Both AWS_PROFILE and the pair AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY static credentials are set.
    This SDK will proceed with the AWS_PROFILE value.
    
    However, a future version may change this behavior to prefer the ENV static credentials.
    Please ensure that your environment only sets either the AWS_PROFILE or the
    AWS_ACCESS_KEY_ID/AWS_SECRET_ACCESS_KEY pair.
`);
                        v = true;
                    }
                }
                throw new c.CredentialsProviderError("AWS_PROFILE is set, skipping fromEnv provider.", {
                    logger: e.logger,
                    tryNextLink: true
                });
            }
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromEnv");
            return fFn(e)();
        },
        async (o)=>{
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromSSO");
            let { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = e;
            if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
                throw new c.CredentialsProviderError("Skipping SSO provider in default chain (inputs do not include SSO fields).", {
                    logger: e.logger
                });
            }
            let { fromSSO } = await import("/$bunfs/root/chunk-739k1yfe.js");
            return fromSSO(e)(o);
        },
        async (o)=>{
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromIni");
            let { fromIni } = await import("/$bunfs/root/chunk-vm6dtdmj.js");
            return fromIni(e)(o);
        },
        async (o)=>{
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromProcess");
            let { fromProcess } = await import("/$bunfs/root/chunk-dh7sqpr7.js");
            return fromProcess(e)(o);
        },
        async (o)=>{
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::fromTokenFile");
            let { fromTokenFile } = await import("/$bunfs/root/chunk-q0jbn77p.js");
            return fromTokenFile(e)(o);
        },
        async ()=>{
            e.logger?.debug("@aws-sdk/credential-provider-node - defaultProvider::remoteProvider");
            return (await S(e))();
        },
        async ()=>{
            throw new c.CredentialsProviderError("Could not load credentials from any providers", {
                tryNextLink: false,
                logger: e.logger
            });
        }
    ], I);
var I = (e)=>e?.expiration !== undefined && e.expiration.getTime() - Date.now() < 300000;
export { Omo, Mmo, fFn, Ode };
