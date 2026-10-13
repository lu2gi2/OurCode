import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { exec } from "child_process";
import { promisify } from "util";
const i = Se(t0());
const c = Se(Hm());
const f = Se(t0());
const p = Se(tP());
const a = (r, e, o)=>{
    if (e.Version !== 1) {
        throw Error(`Profile ${r} credential_process did not return Version 1.`);
    }
    if (e.AccessKeyId === undefined || e.SecretAccessKey === undefined) {
        throw Error(`Profile ${r} credential_process returned invalid credentials.`);
    }
    if (e.Expiration) {
        let d = new Date;
        if (new Date(e.Expiration) < d) {
            throw Error(`Profile ${r} credential_process returned expired credentials.`);
        }
    }
    let e_AccountId = e.AccountId;
    if (!e_AccountId && o?.[r]?.aws_account_id) {
        e_AccountId = o[r].aws_account_id;
    }
    let t = {
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        ...e.SessionToken && {
            sessionToken: e.SessionToken
        },
        ...e.Expiration && {
            expiration: new Date(e.Expiration)
        },
        ...e.CredentialScope && {
            credentialScope: e.CredentialScope
        },
        ...e_AccountId && {
            accountId: e_AccountId
        }
    };
    p.setCredentialFeature(t, "CREDENTIALS_PROCESS", "w");
    return t;
};
const u = async (r, e, logger)=>{
    let s = e[r];
    if (e[r]) {
        let t = s.credential_process;
        if (t !== undefined) {
            let d = promisify(f.externalDataInterceptor?.getTokenRecord?.().exec ?? exec);
            try {
                let { stdout } = await d(t);
                let l;
                try {
                    l = JSON.parse(stdout.trim());
                } catch  {
                    throw Error(`Profile ${r} credential_process returned invalid JSON.`);
                }
                return a(r, l, e);
            } catch (error) {
                throw new c.CredentialsProviderError(error.message, {
                    logger
                });
            }
        } else {
            throw new c.CredentialsProviderError(`Profile ${r} did not contain credential_process.`, {
                logger
            });
        }
    } else {
        throw new c.CredentialsProviderError(`Profile ${r} could not be found in shared credentials file.`, {
            logger
        });
    }
};
export const fromProcess = (r = {})=>async ({ callerClientConfig } = {})=>{
        r.logger?.debug("@aws-sdk/credential-provider-process - fromProcess");
        let o = await i.parseKnownFiles(r);
        return u(i.getProfileName({
            profile: r.profile ?? callerClientConfig?.profile
        }), o, r.logger);
    };
