import { Rd } from "/$bunfs/root/chunk-gxstjgam.js";
import { Nmo } from "/$bunfs/root/chunk-sw8e7v35.js";
import "/$bunfs/root/chunk-53tyrfzz.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { jm, kH } from "/$bunfs/root/chunk-55x53sfe.js";
import "/$bunfs/root/chunk-dze6yaxw.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import O from "fs/promises";
const E = Se(tP());
const N = Se(kH());
const m = Se(Hm());
const A = Se(Hm());
const w = "169.254.170.2";
const g = "169.254.170.23";
const S = "[fd00:ec2::23]";
const h = (e, logger)=>{
    if (e.protocol === "https:") {
        return;
    }
    if (e.hostname === w || e.hostname === g || e.hostname === S) {
        return;
    }
    if (e.hostname.includes("[")) {
        if (e.hostname === "[::1]" || e.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
            return;
        }
    } else {
        if (e.hostname === "localhost") {
            return;
        }
        let n = e.hostname.split(".");
        let r = (t)=>{
            let s = parseInt(t, 10);
            return s >= 0 && s <= 255;
        };
        if (n[0] === "127" && r(n[1]) && r(n[2]) && r(n[3]) && n.length === 4) {
            return;
        }
    }
    throw new A.CredentialsProviderError(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`, {
        logger
    });
};
const i = Se(Hm());
const C = Se(jm());
const l = Se(Rd());
const p = Se(Nmo());
function _(e) {
    return new C.HttpRequest({
        protocol: e.protocol,
        hostname: e.hostname,
        port: Number(e.port),
        path: e.pathname,
        query: Array.from(e.searchParams.entries()).reduce((acc, [n, r])=>{
            acc[n] = r;
            return acc;
        }, {}),
        fragment: e.hash
    });
}
async function I(response, logger) {
    let r = await p.sdkStreamMixin(response.body).transformToString();
    if (response.statusCode === 200) {
        let t = JSON.parse(r);
        if (typeof t.AccessKeyId !== "string" || typeof t.SecretAccessKey !== "string" || typeof t.Token !== "string" || typeof t.Expiration !== "string") {
            throw new i.CredentialsProviderError("HTTP credential provider response not of the required format, an object matching: { AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }", {
                logger
            });
        }
        return {
            accessKeyId: t.AccessKeyId,
            secretAccessKey: t.SecretAccessKey,
            sessionToken: t.Token,
            expiration: l.parseRfc3339DateTime(t.Expiration)
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let t = {};
        try {
            t = JSON.parse(r);
        } catch (s) {}
        throw Object.assign(new i.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, {
            logger
        }), {
            Code: t.Code,
            Message: t.Message
        });
    }
    throw new i.CredentialsProviderError(`Server responded with status: ${response.statusCode}`, {
        logger
    });
}
const f = (e, o, n)=>async ()=>{
        for(let r = 0; r < o; ++r){
            try {
                return await e();
            } catch (t) {
                await new Promise((resolve)=>setTimeout(resolve, n));
            }
        }
        return await e();
    };
const L = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const y = "http://169.254.170.2";
const v = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const U = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const k = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
export const fromHttp = (e = {})=>{
    e.logger?.debug("@aws-sdk/credential-provider-http - fromHttp");
    let o;
    let n = e.awsContainerCredentialsRelativeUri ?? process.env[L];
    let r = e.awsContainerCredentialsFullUri ?? process.env[v];
    let t = e.awsContainerAuthorizationToken ?? process.env[k];
    let s = e.awsContainerAuthorizationTokenFile ?? process.env[U];
    let a = e.logger?.constructor?.name === "NoOpLogger" || !e.logger?.warn ? console.warn : e.logger.warn.bind(e.logger);
    if (n && r) {
        a("@aws-sdk/credential-provider-http: you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        a("awsContainerCredentialsFullUri will take precedence.");
    }
    if (t && s) {
        a("@aws-sdk/credential-provider-http: you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        a("awsContainerAuthorizationToken will take precedence.");
    }
    if (r) {
        o = r;
    } else if (n) {
        o = `${y}${n}`;
    } else {
        throw new m.CredentialsProviderError(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`, {
            logger: e.logger
        });
    }
    let T = new URL(o);
    h(T, e.logger);
    let u = N.NodeHttpHandler.create({
        requestTimeout: e.timeout ?? 1000,
        connectionTimeout: e.timeout ?? 1000
    });
    return f(async ()=>{
        let c = _(T);
        if (t) {
            c.headers.Authorization = t;
        } else if (s) {
            c.headers.Authorization = (await O.readFile(s)).toString();
        }
        try {
            let d = await u.handle(c);
            return I(d.response).then((R)=>E.setCredentialFeature(R, "CREDENTIALS_HTTP", "z"));
        } catch (error) {
            throw new m.CredentialsProviderError(String(error), {
                logger: e.logger
            });
        }
    }, e.maxRetries ?? 3, e.timeout ?? 1000);
};
