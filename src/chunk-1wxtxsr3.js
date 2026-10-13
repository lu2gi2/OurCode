import { nP } from "/$bunfs/root/chunk-964dstky.js";
import { GW } from "/$bunfs/root/chunk-xy7epjk2.js";
import "/$bunfs/root/chunk-nh84xq74.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { Se, Ji } from "/$bunfs/root/chunk-cj4xndke.js";
import { Buffer } from "buffer";
import { request } from "http";
import { parse } from "url";
export function httpRequest(e) {
    return new Promise((resolve, reject)=>{
        let o = request({
            method: "GET",
            ...e,
            hostname: e.hostname?.replace(/^\[(.+)\]$/, "$1")
        });
        o.on("error", (r)=>{
            reject(Object.assign(new A.ProviderError("Unable to connect to instance metadata service"), r));
            o.destroy();
        });
        o.on("timeout", ()=>{
            reject(new A.ProviderError("TimeoutError from instance metadata service"));
            o.destroy();
        });
        o.on("response", (r)=>{
            let { statusCode = 400 } = r;
            if (statusCode < 200 || statusCode >= 300) {
                reject(Object.assign(new A.ProviderError("Error response received from instance metadata service"), {
                    statusCode
                }));
                o.destroy();
            }
            let m = [];
            r.on("data", (s)=>{
                m.push(s);
            });
            r.on("end", ()=>{
                resolve(Buffer.concat(m));
                o.destroy();
            });
        });
        o.end();
    });
}
var A;
const S = Ji(()=>{
    A = Se(Hm());
});
const N = (e)=>Boolean(e) && typeof e === "object" && typeof e.AccessKeyId === "string" && typeof e.SecretAccessKey === "string" && typeof e.Token === "string" && typeof e.Expiration === "string";
const g = (e)=>({
        accessKeyId: e.AccessKeyId,
        secretAccessKey: e.SecretAccessKey,
        sessionToken: e.Token,
        expiration: new Date(e.Expiration),
        ...e.AccountId && {
            accountId: e.AccountId
        }
    });
const O = ()=>{};
const C = ({ maxRetries = 0, timeout = 1000 })=>({
        maxRetries,
        timeout
    });
const h = ()=>{};
const _ = (e, maxRetries)=>{
    let n = e();
    for(let o = 0; o < maxRetries; o++){
        n = n.catch(e);
    }
    return n;
};
const D = ()=>{};
let T;
export const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
export const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const k = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
export const fromContainerMetadata = (e = {})=>{
    let { timeout, maxRetries } = C(e);
    return ()=>_(async ()=>{
            let o = await me({
                logger: e.logger
            });
            let r = JSON.parse(await ce(timeout, o));
            if (!N(r)) {
                throw new T.CredentialsProviderError("Invalid response received from instance metadata service.", {
                    logger: e.logger
                });
            }
            return g(r);
        }, maxRetries);
};
var ce = async (timeout, t)=>{
    if (process.env[k]) {
        t.headers = {
            ...t.headers,
            Authorization: process.env[k]
        };
    }
    return (await httpRequest({
        ...t,
        timeout
    })).toString();
};
const hostname = "169.254.170.2";
let le;
let pe;
var me = async ({ logger })=>{
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname,
            path: process.env[ENV_CMDS_RELATIVE_URI]
        };
    }
    if (process.env[ENV_CMDS_FULL_URI]) {
        let t = parse(process.env[ENV_CMDS_FULL_URI]);
        if (!t.hostname || !(t.hostname in le)) {
            throw new T.CredentialsProviderError(`${t.hostname} is not a valid container metadata service hostname`, {
                tryNextLink: false,
                logger
            });
        }
        if (!t.protocol || !(t.protocol in pe)) {
            throw new T.CredentialsProviderError(`${t.protocol} is not a valid container metadata service protocol`, {
                tryNextLink: false,
                logger
            });
        }
        return {
            ...t,
            port: t.port ? parseInt(t.port, 10) : undefined
        };
    }
    throw new T.CredentialsProviderError(`The container metadata credential provider cannot be used unless the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment variable is set`, {
        tryNextLink: false,
        logger
    });
};
const V = Ji(()=>{
    S();
    O();
    h();
    D();
    T = Se(Hm());
    le = {
        localhost: true,
        "127.0.0.1": true
    };
    pe = {
        "http:": true,
        "https:": true
    };
});
let U;
let v;
const W = Ji(()=>{
    U = Se(Hm());
    v = class v extends U.CredentialsProviderError {
        tryNextLink;
        name = "InstanceMetadataV1FallbackError";
        constructor(e, t = true){
            super(e, t);
            this.tryNextLink = t;
            Object.setPrototypeOf(this, v.prototype);
        }
    };
});
let u;
const B = Ji(()=>{
    u = {
        IPv4: "http://169.254.169.254",
        IPv6: "http://[fd00:ec2::254]"
    };
});
let K;
const G = Ji(()=>{
    K = {
        environmentVariableSelector: (e)=>e.AWS_EC2_METADATA_SERVICE_ENDPOINT,
        configFileSelector: (e)=>e.ec2_metadata_service_endpoint,
        default: undefined
    };
});
let l;
const M = Ji(()=>{
    l = {
        IPv4: "IPv4",
        IPv6: "IPv6"
    };
});
const fe = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const Ee = "ec2_metadata_service_endpoint_mode";
let q;
const H = Ji(()=>{
    M();
    q = {
        environmentVariableSelector: (e)=>e[fe],
        configFileSelector: (e)=>e[Ee],
        default: l.IPv4
    };
});
let P;
let Y;
export const getInstanceMetadataEndpoint = async ()=>Y.parseUrl(await Ie() || await _e());
var Ie = async ()=>P.loadConfig(K)();
var _e = async ()=>{
    let e = await P.loadConfig(q)();
    switch(e){
        case l.IPv4:
            return u.IPv4;
        case l.IPv6:
            return u.IPv6;
        default:
            throw Error(`Unsupported endpoint mode: ${e}. Select from ${Object.values(l)}`);
    }
};
const R = Ji(()=>{
    B();
    G();
    M();
    H();
    P = Se(nP());
    Y = Se(GW());
});
const b = (e, t)=>{
    let n = 300 + Math.floor(Math.random() * 300);
    let expiration = new Date(Date.now() + n * 1000);
    t.warn(`Attempting credential expiration extension due to a credential service availability issue. A refresh of these credentials will be attempted after ${new Date(expiration)}.
For more information, please visit: https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html`);
    let originalExpiration = e.originalExpiration ?? e.expiration;
    return {
        ...e,
        ...originalExpiration ? {
            originalExpiration
        } : {},
        expiration
    };
};
const j = ()=>{};
const J = (e, t = {})=>{
    let n = t?.logger || console;
    let o;
    return async ()=>{
        let r;
        try {
            r = await e();
            if (r.expiration && r.expiration.getTime() < Date.now()) {
                r = b(r, n);
            }
        } catch (error) {
            if (o) {
                n.warn("Credential renew failed: ", error);
                r = b(o, n);
            } else {
                throw error;
            }
        }
        o = r;
        return r;
    };
};
const z = Ji(()=>{
    j();
});
let Q;
let L;
const path_1 = "/latest/meta-data/iam/security-credentials/";
const path = "/latest/api/token";
const F = "AWS_EC2_METADATA_V1_DISABLED";
const X = "ec2_metadata_v1_disabled";
const Z = "x-aws-ec2-metadata-token";
export const fromInstanceMetadata = (e = {})=>J(ue(e), {
        logger: e.logger
    });
var ue = (e = {})=>{
    let t = false;
    let { logger, profile } = e;
    let { timeout, maxRetries } = C(e);
    let m = async (maxRetries, f)=>{
        if (t || f.headers?.[Z] == null) {
            let i = false;
            let c = false;
            let ne = await Q.loadConfig({
                environmentVariableSelector: (d)=>{
                    let E = d[F];
                    c = !!E && E !== "false";
                    if (E === undefined) {
                        throw new L.CredentialsProviderError(`${F} not set in env, checking config file next.`, {
                            logger: e.logger
                        });
                    }
                    return c;
                },
                configFileSelector: (d)=>{
                    let E = d[X];
                    i = !!E && E !== "false";
                    return i;
                },
                default: false
            }, {
                profile
            })();
            if (e.ec2MetadataV1Disabled || ne) {
                let d = [];
                if (e.ec2MetadataV1Disabled) {
                    d.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
                }
                if (i) {
                    d.push(`config file profile (${X})`);
                }
                if (c) {
                    d.push(`process environment variable (${F})`);
                }
                throw new v(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${d.join(", ")}].`);
            }
        }
        let re = (await _(async ()=>{
            let i;
            try {
                i = await Ne(f);
            } catch (error) {
                if (error.statusCode === 401) {
                    t = false;
                }
                throw error;
            }
            return i;
        }, maxRetries)).trim();
        return _(async ()=>{
            let i;
            try {
                i = await ge(re, f, e);
            } catch (error) {
                if (error.statusCode === 401) {
                    t = false;
                }
                throw error;
            }
            return i;
        }, maxRetries);
    };
    return async ()=>{
        let s = await getInstanceMetadataEndpoint();
        if (t) {
            logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
            return m(maxRetries, {
                ...s,
                timeout
            });
        } else {
            let f;
            try {
                f = (await Ae({
                    ...s,
                    timeout
                })).toString();
            } catch (error) {
                if (error?.statusCode === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error"
                    });
                } else if (error.message === "TimeoutError" || [
                    403,
                    404,
                    405
                ].includes(error.statusCode)) {
                    t = true;
                }
                logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
                return m(maxRetries, {
                    ...s,
                    timeout
                });
            }
            return m(maxRetries, {
                ...s,
                headers: {
                    [Z]: f
                },
                timeout
            });
        }
    };
};
var Ae = async (e)=>httpRequest({
        ...e,
        path,
        method: "PUT",
        headers: {
            "x-aws-ec2-metadata-token-ttl-seconds": "21600"
        }
    });
var Ne = async (e)=>(await httpRequest({
        ...e,
        path: path_1
    })).toString();
var ge = async (e, t, n)=>{
    let o = JSON.parse((await httpRequest({
        ...t,
        path: path_1 + e
    })).toString());
    if (!N(o)) {
        throw new L.CredentialsProviderError("Invalid response received from instance metadata service.", {
            logger: n.logger
        });
    }
    return g(o);
};
const te = Ji(()=>{
    W();
    S();
    O();
    h();
    D();
    R();
    z();
    Q = Se(nP());
    L = Se(Hm());
});
const oe = ()=>{};
const Ce = Ji(()=>{
    S();
    R();
    V();
    te();
    h();
    oe();
});
Ce();
