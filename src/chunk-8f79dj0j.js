import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { fFn, Ode } from "/$bunfs/root/chunk-xn017ebj.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { Imo } from "/$bunfs/root/chunk-70shpvca.js";
import { Fk } from "/$bunfs/root/chunk-dvxpnma3.js";
import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import "/$bunfs/root/chunk-sw8e7v35.js";
import "/$bunfs/root/chunk-53tyrfzz.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import "/$bunfs/root/chunk-dze6yaxw.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const x = Se(Hm());
export const createCredentialChain = (...e)=>{
    let r = -1;
    let i = Object.assign(async (t)=>{
        let o = await P(...e)(t);
        if (!o.expiration && r !== -1) {
            o.expiration = new Date(Date.now() + r);
        }
        return o;
    }, {
        expireAfter (t) {
            if (t < 300000) {
                throw Error("@aws-sdk/credential-providers - createCredentialChain(...).expireAfter(ms) may not be called with a duration lower than five minutes.");
            }
            r = t;
            return i;
        }
    });
    return i;
};
var P = (...e)=>async (r)=>{
        if (e.length === 0) {
            throw new x.ProviderError("No providers in chain", {
                tryNextLink: false
            });
        }
        let n;
        for (let i of e){
            try {
                return await i(r);
            } catch (error) {
                n = error;
                if (error?.tryNextLink) {
                    continue;
                }
                throw error;
            }
        }
        throw n;
    };
export const fromEnv = (e)=>fFn(e);
export const fromIni = (e = {})=>Imo({
        ...e
    });
export const fromNodeProviderChain = (e = {})=>Ode({
        ...e
    });
const E = Se(Fk());
const T = Se(nP());
const h = Se(xb());
const S = Se(Hm());
const k = "us-east-1";
const A = (e, fromNodeProviderChain, n)=>{
    let i;
    return async ({ callerClientConfig } = {})=>{
        let profile = e.clientConfig?.profile ?? callerClientConfig?.profile;
        let logger = e.logger ?? callerClientConfig?.logger;
        logger?.debug("@aws-sdk/credential-providers - fromTemporaryCredentials (STS)");
        let f = {
            ...e.params,
            RoleSessionName: e.params.RoleSessionName ?? `aws-sdk-js-${Date.now()}`
        };
        if (f?.SerialNumber) {
            if (!e.mfaCodeProvider) {
                throw new S.CredentialsProviderError("Temporary credential requires multi-factor authentication, but no MFA code callback was provided.", {
                    tryNextLink: false,
                    logger
                });
            }
            f.TokenCode = await e.mfaCodeProvider(f?.SerialNumber);
        }
        let { AssumeRoleCommand, STSClient } = await import("/$bunfs/root/chunk-y2xwpknn.js");
        if (!i) {
            let u = typeof fromNodeProviderChain === "function" ? fromNodeProviderChain() : undefined;
            let s = [
                e.masterCredentials,
                e.clientConfig?.credentials,
                void callerClientConfig?.credentials,
                callerClientConfig?.credentialDefaultProvider?.(),
                u
            ];
            let l = "STS client default credentials";
            if (s[0]) {
                l = "options.masterCredentials";
            } else if (s[1]) {
                l = "options.clientConfig.credentials";
            } else if (s[2]) {
                l = "caller client's credentials";
                throw Error("fromTemporaryCredentials recursion in callerClientConfig.credentials");
            } else if (s[3]) {
                l = "caller client's credentialDefaultProvider";
            } else if (s[4]) {
                l = "AWS SDK default credentials";
            }
            let d = [
                e.clientConfig?.region,
                callerClientConfig?.region,
                await n?.({
                    profile
                }),
                k
            ];
            let m = "default partition's default region";
            if (d[0]) {
                m = "options.clientConfig.region";
            } else if (d[1]) {
                m = "caller client's region";
            } else if (d[2]) {
                m = "file or env region";
            }
            let C = [
                y(e.clientConfig?.requestHandler),
                y(callerClientConfig?.requestHandler)
            ];
            let g = "STS default requestHandler";
            if (C[0]) {
                g = "options.clientConfig.requestHandler";
            } else if (C[1]) {
                g = "caller client's requestHandler";
            }
            logger?.debug?.(`@aws-sdk/credential-providers - fromTemporaryCredentials STS client init with ${m}=${await h.normalizeProvider(p(d))()}, ${l}, ${g}.`);
            i = new STSClient({
                userAgentAppId: callerClientConfig?.userAgentAppId,
                ...e.clientConfig,
                credentials: p(s),
                logger,
                profile,
                region: p(d),
                requestHandler: p(C)
            });
        }
        if (e.clientPlugins) {
            for (let u of e.clientPlugins){
                i.middlewareStack.use(u);
            }
        }
        let { Credentials } = await i.send(new AssumeRoleCommand(f));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new S.CredentialsProviderError(`Invalid response from STS.assumeRole call with role ${f.RoleArn}`, {
                logger
            });
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope
        };
    };
};
var y = (e)=>{
    if (e?.metadata?.handlerProtocol === "h2") {
        return undefined;
    }
    return e;
};
var p = (e)=>{
    for (let r of e){
        if (r !== undefined) {
            return r;
        }
    }
};
export const fromTemporaryCredentials = (e)=>A(e, fromNodeProviderChain, async ({ profile = process.env.AWS_PROFILE })=>T.loadConfig({
            environmentVariableSelector: (n)=>n.AWS_REGION,
            configFileSelector: (n)=>n.region,
            default: ()=>{}
        }, {
            ...E.NODE_REGION_CONFIG_FILE_OPTIONS,
            profile
        })());
