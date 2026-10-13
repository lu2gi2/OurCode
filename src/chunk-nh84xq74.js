import { qxe } from "/$bunfs/root/chunk-55x53sfe.js";
import { C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
const m = C(function(v) {
    Object.defineProperty(v, "__esModule", {
        value: true
    });
    v.getHomeDir = undefined;
    const T = Le("os");
    const b = Le("path");
    const h = {};
    const Q = ()=>{
        if (process && process.geteuid) {
            return `${process.geteuid()}`;
        }
        return "DEFAULT";
    };
    const Y = ()=>{
        let { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${b.sep}` } = process.env;
        if (HOME) {
            return HOME;
        }
        if (USERPROFILE) {
            return USERPROFILE;
        }
        if (HOMEPATH) {
            return `${HOMEDRIVE}${HOMEPATH}`;
        }
        let n = Q();
        if (!h[n]) {
            h[n] = T.homedir();
        }
        return h[n];
    };
    v.getHomeDir = Y;
});
const _ = C(function(R) {
    Object.defineProperty(R, "__esModule", {
        value: true
    });
    R.getSSOTokenFilepath = undefined;
    const j = Le("crypto");
    const y = Le("path");
    const H = m();
    const Z = (e)=>{
        let r = j.createHash("sha1").update(e).digest("hex");
        return y.join(H.getHomeDir(), ".aws", "sso", "cache", `${r}.json`);
    };
    R.getSSOTokenFilepath = Z;
});
const q = C(function(k) {
    Object.defineProperty(k, "__esModule", {
        value: true
    });
    k.getSSOTokenFromFile = k.tokenIntercept = undefined;
    const L = Le("fs/promises");
    const N = _();
    k.tokenIntercept = {};
    const ee = async (e)=>{
        if (k.tokenIntercept[e]) {
            return k.tokenIntercept[e];
        }
        let t = N.getSSOTokenFilepath(e);
        let r = await L.readFile(t, "utf8");
        return JSON.parse(r);
    };
    k.getSSOTokenFromFile = ee;
});
const V = C(function(K) {
    Object.defineProperty(K, "__esModule", {
        value: true
    });
    K.readFile = K.fileIntercept = K.filePromises = undefined;
    const M = Le("fs/promises");
    K.filePromises = {};
    K.fileIntercept = {};
    const te = (e, t)=>{
        if (K.fileIntercept[e] !== undefined) {
            return K.fileIntercept[e];
        }
        if (!K.filePromises[e] || t?.ignoreCache) {
            K.filePromises[e] = M.readFile(e, "utf8");
        }
        return K.filePromises[e];
    };
    K.readFile = te;
});
export const t0 = C(function(a) {
    const f = m();
    const G = _();
    const E = q();
    const F = Le("path");
    const g = qxe();
    const u = V();
    const X = "AWS_PROFILE";
    const B = "default";
    const re = (e)=>e.profile || process.env[X] || B;
    const c = ".";
    const oe = (e)=>Object.entries(e).filter(([t])=>{
            let r = t.indexOf(c);
            if (r === -1) {
                return false;
            }
            return Object.values(g.IniSectionType).includes(t.substring(0, r));
        }).reduce((acc, [r, o])=>{
            let n = r.indexOf(c);
            let i = r.substring(0, n) === g.IniSectionType.PROFILE ? r.substring(n + 1) : r;
            acc[i] = o;
            return acc;
        }, {
            ...e.default && {
                default: e.default
            }
        });
    const ne = "AWS_CONFIG_FILE";
    const J = ()=>process.env[ne] || F.join(f.getHomeDir(), ".aws", "config");
    const ie = "AWS_SHARED_CREDENTIALS_FILE";
    const se = ()=>process.env[ie] || F.join(f.getHomeDir(), ".aws", "credentials");
    const ce = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
    const ae = [
        "__proto__",
        "profile __proto__"
    ];
    const P = (e)=>{
        let t = {};
        let r;
        let o;
        for (let n of e.split(/\r?\n/)){
            let i = n.split(/(^|\s)[;#]/)[0].trim();
            if (i[0] === "[" && i[i.length - 1] === "]") {
                r = undefined;
                o = undefined;
                let s = i.substring(1, i.length - 1);
                let l = ce.exec(s);
                if (l) {
                    let [, p, , O] = l;
                    if (Object.values(g.IniSectionType).includes(p)) {
                        r = [
                            p,
                            O
                        ].join(c);
                    }
                } else {
                    r = s;
                }
                if (ae.includes(s)) {
                    throw Error(`Found invalid profile name "${s}"`);
                }
            } else if (r) {
                let s = i.indexOf("=");
                if (![
                    0,
                    -1
                ].includes(s)) {
                    let [l, p] = [
                        i.substring(0, s).trim(),
                        i.substring(s + 1).trim()
                    ];
                    if (p === "") {
                        o = l;
                    } else {
                        if (o && n.trimStart() === n) {
                            o = undefined;
                        }
                        t[r] = t[r] || {};
                        let O = o ? [
                            o,
                            l
                        ].join(c) : l;
                        t[r][O] = p;
                    }
                }
            }
        }
        return t;
    };
    const U = ()=>({});
    const z = async (e = {})=>{
        let { filepath = se(), configFilepath = J() } = e;
        let o = f.getHomeDir();
        let n = "~/";
        let i = filepath;
        if (filepath.startsWith("~/")) {
            i = F.join(o, filepath.slice(2));
        }
        let S = configFilepath;
        if (configFilepath.startsWith("~/")) {
            S = F.join(o, configFilepath.slice(2));
        }
        let s = await Promise.all([
            u.readFile(S, {
                ignoreCache: e.ignoreCache
            }).then(P).then(oe).catch(U),
            u.readFile(i, {
                ignoreCache: e.ignoreCache
            }).then(P).catch(U)
        ]);
        return {
            configFile: s[0],
            credentialsFile: s[1]
        };
    };
    const le = (e)=>Object.entries(e).filter(([t])=>t.startsWith(g.IniSectionType.SSO_SESSION + c)).reduce((acc, [r, o])=>({
                ...acc,
                [r.substring(r.indexOf(c) + 1)]: o
            }), {});
    const ue = ()=>({});
    const pe = async (e = {})=>u.readFile(e.configFilepath ?? J()).then(P).then(le).catch(ue);
    const fe = (...e)=>{
        let t = {};
        for (let r of e){
            for (let [o, n] of Object.entries(r)){
                if (t[o] !== undefined) {
                    Object.assign(t[o], n);
                } else {
                    t[o] = n;
                }
            }
        }
        return t;
    };
    const de = async (e)=>{
        let t = await z(e);
        return fe(t.configFile, t.credentialsFile);
    };
    const Fe = {
        getFileRecord () {
            return u.fileIntercept;
        },
        interceptFile (e, t) {
            u.fileIntercept[e] = Promise.resolve(t);
        },
        getTokenRecord () {
            return E.tokenIntercept;
        },
        interceptToken (e, t) {
            E.tokenIntercept[e] = t;
        }
    };
    Object.defineProperty(a, "getSSOTokenFromFile", {
        enumerable: true,
        get: function() {
            return E.getSSOTokenFromFile;
        }
    });
    Object.defineProperty(a, "readFile", {
        enumerable: true,
        get: function() {
            return u.readFile;
        }
    });
    a.CONFIG_PREFIX_SEPARATOR = c;
    a.DEFAULT_PROFILE = B;
    a.ENV_PROFILE = X;
    a.externalDataInterceptor = Fe;
    a.getProfileName = re;
    a.loadSharedConfigFiles = z;
    a.loadSsoSessionData = pe;
    a.parseKnownFiles = de;
    Object.keys(f).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(a, e)) {
            Object.defineProperty(a, e, {
                enumerable: true,
                get: function() {
                    return f[e];
                }
            });
        }
    });
    Object.keys(G).forEach((e)=>{
        if (e !== "default" && !Object.prototype.hasOwnProperty.call(a, e)) {
            Object.defineProperty(a, e, {
                enumerable: true,
                get: function() {
                    return G[e];
                }
            });
        }
    });
});
