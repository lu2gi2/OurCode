import { xb } from "/$bunfs/root/chunk-4r8zj2v5.js";
import { mFn } from "/$bunfs/root/chunk-4p8pf317.js";
import { OYe } from "/$bunfs/root/chunk-2e6e7dc3.js";
import { tP } from "/$bunfs/root/chunk-04nmpby8.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { jm } from "/$bunfs/root/chunk-55x53sfe.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const a = Se(tP());
const c = jm();
const d = xb();
const l = Hm();
const u = tP();
const S = OYe();
const g = (e)=>`AWS_BEARER_TOKEN_${e.replace(/[\s-]/g, "_").toUpperCase()}`;
const r = g;
const s = Se(Hm());
const uFn = ({ logger, signingName } = {})=>async ()=>{
        logger?.debug?.("@aws-sdk/token-providers - fromEnvSigningName");
        if (!signingName) {
            throw new s.TokenProviderError("Please pass 'signingName' to compute environment variable key", {
                logger
            });
        }
        let t = r(signingName);
        if (!(t in process.env)) {
            throw new s.TokenProviderError(`Token not present in '${t}' environment variable`, {
                logger
            });
        }
        let o = {
            token: process.env[t]
        };
        a.setTokenFeature(o, "BEARER_SERVICE_ENV_VARS", "3");
        return o;
    };
const i = Se(Hm());
const pFn = (e = {})=>i.memoize(i.chain(mFn(e), async ()=>{
        throw new i.TokenProviderError("Could not load token from any providers", false);
    }), (n)=>n.expiration !== undefined && n.expiration.getTime() - Date.now() < 300000, (n)=>n.expiration !== undefined);
export { uFn, pFn };
