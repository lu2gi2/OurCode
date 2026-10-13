import { t0 } from "/$bunfs/root/chunk-nh84xq74.js";
import { Hm } from "/$bunfs/root/chunk-3vxngrsq.js";
import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const nP = C(function(E) {
    const t = Hm();
    const l = t0();
    function d(e) {
        try {
            let o = new Set(Array.from(e.match(/([A-Z_]){3,}/g) ?? []));
            o.delete("CONFIG");
            o.delete("CONFIG_PREFIX_SEPARATOR");
            o.delete("ENV");
            return [
                ...o
            ].join(", ");
        } catch (o) {
            return e;
        }
    }
    const h = (environmentVariableSelector, o)=>async ()=>{
            try {
                let r = environmentVariableSelector(process.env, o);
                if (r === undefined) {
                    throw Error();
                }
                return r;
            } catch (error) {
                throw new t.CredentialsProviderError(error.message || `Not found in ENV: ${d(environmentVariableSelector.toString())}`, {
                    logger: o?.logger
                });
            }
        };
    const w = (configFileSelector, { preferredFile = "config", ...rest } = {})=>async ()=>{
            let n = l.getProfileName(rest);
            let { configFile, credentialsFile } = await l.loadSharedConfigFiles(rest);
            let s = credentialsFile[n] || {};
            let g = configFile[n] || {};
            let m = preferredFile === "config" ? {
                ...s,
                ...g
            } : {
                ...g,
                ...s
            };
            try {
                let f = configFileSelector(m, preferredFile === "config" ? configFile : credentialsFile);
                if (f === undefined) {
                    throw Error();
                }
                return f;
            } catch (error) {
                throw new t.CredentialsProviderError(error.message || `Not found in config files w/ profile [${n}]: ${d(configFileSelector.toString())}`, {
                    logger: rest.logger
                });
            }
        };
    const F = (_default)=>typeof _default === "function";
    const u = (_default)=>{
        if (F(_default)) {
            return async ()=>await _default();
        }
        return t.fromStatic(_default);
    };
    const y = ({ environmentVariableSelector, configFileSelector, default: _default }, n = {})=>{
        let { signingName, logger } = n;
        let s = {
            signingName,
            logger
        };
        return t.memoize(t.chain(h(environmentVariableSelector, s), w(configFileSelector, n), u(_default)));
    };
    E.loadConfig = y;
});
