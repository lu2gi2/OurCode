import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { q2n } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, aj } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { po } from "/$bunfs/root/chunk-xgw72tt1.js";
import { O9 } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { pp } from "/$bunfs/root/chunk-x0qpydt2.js";
import { Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { fp, Bb, awe, fl, pf, Qz, Fu } from "/$bunfs/root/chunk-etbngzss.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ie, k1 } from "/$bunfs/root/chunk-nj0630nv.js";
import { MUe, HUe, J8 } from "/$bunfs/root/chunk-55x53sfe.js";
import { bPe } from "/$bunfs/root/chunk-x47nahfr.js";
import { th, hHt, $nn, but, xzn } from "/$bunfs/root/chunk-52bcnmbr.js";
import { b0, TN } from "/$bunfs/root/chunk-k7dkeqsc.js";
import { fO } from "/$bunfs/root/chunk-gh6rwdb0.js";
import { dAs, uAs, pAs, fAs, mAs } from "/$bunfs/root/chunk-k3tkc302.js";
import { wP } from "/$bunfs/root/chunk-6g4165br.js";
import { o, E, M, Bm, oe, T, u, De, _t, Ue, Wr, ue, U, A, qE, pa } from "/$bunfs/root/chunk-smx21d0k.js";
import { Se, C, Le } from "/$bunfs/root/chunk-cj4xndke.js";
import { randomUUID } from "crypto";
const dt = C(function(n1, Fa) {
    const MAX_SAFE_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
    const RELEASE_TYPES = [
        "major",
        "premajor",
        "minor",
        "preminor",
        "patch",
        "prepatch",
        "prerelease"
    ];
    Fa.exports = {
        MAX_LENGTH: 256,
        MAX_SAFE_COMPONENT_LENGTH: 16,
        MAX_SAFE_BUILD_LENGTH: 250,
        MAX_SAFE_INTEGER,
        RELEASE_TYPES,
        SEMVER_SPEC_VERSION: "2.0.0",
        FLAG_INCLUDE_PRERELEASE: 1,
        FLAG_LOOSE: 2
    };
});
const ut = C(function(o1, Ya) {
    const nR = typeof process === "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...e)=>console.error("SEMVER", ...e) : ()=>{};
    Ya.exports = nR;
});
const Ke = C(function(de, Wa) {
    const { MAX_SAFE_COMPONENT_LENGTH, MAX_SAFE_BUILD_LENGTH, MAX_LENGTH } = dt();
    const iR = ut();
    de = Wa.exports = {};
    const lR = de.re = [];
    const cR = de.safeRe = [];
    const S = de.src = [];
    const dR = de.safeSrc = [];
    const b = de.t = {};
    let hR = 0;
    const gr = "[a-zA-Z0-9-]";
    const uR = [
        [
            "\\s",
            1
        ],
        [
            "\\d",
            MAX_LENGTH
        ],
        [
            gr,
            MAX_SAFE_BUILD_LENGTH
        ]
    ];
    const pR = (e)=>{
        for (let [s, r] of uR){
            e = e.split(`${s}*`).join(`${s}{0,${r}}`).split(`${s}+`).join(`${s}{1,${r}}`);
        }
        return e;
    };
    const z = (e, s, r)=>{
        let n = pR(s);
        let i = hR++;
        iR(e, i, s);
        b[e] = i;
        S[i] = s;
        dR[i] = n;
        lR[i] = new RegExp(s, r ? "g" : undefined);
        cR[i] = new RegExp(n, r ? "g" : undefined);
    };
    z("NUMERICIDENTIFIER", "0|[1-9]\\d*");
    z("NUMERICIDENTIFIERLOOSE", "\\d+");
    z("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${gr}*`);
    z("MAINVERSION", `(${S[b.NUMERICIDENTIFIER]})\\.(${S[b.NUMERICIDENTIFIER]})\\.(${S[b.NUMERICIDENTIFIER]})`);
    z("MAINVERSIONLOOSE", `(${S[b.NUMERICIDENTIFIERLOOSE]})\\.(${S[b.NUMERICIDENTIFIERLOOSE]})\\.(${S[b.NUMERICIDENTIFIERLOOSE]})`);
    z("PRERELEASEIDENTIFIER", `(?:${S[b.NONNUMERICIDENTIFIER]}|${S[b.NUMERICIDENTIFIER]})`);
    z("PRERELEASEIDENTIFIERLOOSE", `(?:${S[b.NONNUMERICIDENTIFIER]}|${S[b.NUMERICIDENTIFIERLOOSE]})`);
    z("PRERELEASE", `(?:-(${S[b.PRERELEASEIDENTIFIER]}(?:\\.${S[b.PRERELEASEIDENTIFIER]})*))`);
    z("PRERELEASELOOSE", `(?:-?(${S[b.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${S[b.PRERELEASEIDENTIFIERLOOSE]})*))`);
    z("BUILDIDENTIFIER", `${gr}+`);
    z("BUILD", `(?:\\+(${S[b.BUILDIDENTIFIER]}(?:\\.${S[b.BUILDIDENTIFIER]})*))`);
    z("FULLPLAIN", `v?${S[b.MAINVERSION]}${S[b.PRERELEASE]}?${S[b.BUILD]}?`);
    z("FULL", `^${S[b.FULLPLAIN]}$`);
    z("LOOSEPLAIN", `[v=\\s]*${S[b.MAINVERSIONLOOSE]}${S[b.PRERELEASELOOSE]}?${S[b.BUILD]}?`);
    z("LOOSE", `^${S[b.LOOSEPLAIN]}$`);
    z("GTLT", "((?:<|>)?=?)");
    z("XRANGEIDENTIFIERLOOSE", `${S[b.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`);
    z("XRANGEIDENTIFIER", `${S[b.NUMERICIDENTIFIER]}|x|X|\\*`);
    z("XRANGEPLAIN", `[v=\\s]*(${S[b.XRANGEIDENTIFIER]})(?:\\.(${S[b.XRANGEIDENTIFIER]})(?:\\.(${S[b.XRANGEIDENTIFIER]})(?:${S[b.PRERELEASE]})?${S[b.BUILD]}?)?)?`);
    z("XRANGEPLAINLOOSE", `[v=\\s]*(${S[b.XRANGEIDENTIFIERLOOSE]})(?:\\.(${S[b.XRANGEIDENTIFIERLOOSE]})(?:\\.(${S[b.XRANGEIDENTIFIERLOOSE]})(?:${S[b.PRERELEASELOOSE]})?${S[b.BUILD]}?)?)?`);
    z("XRANGE", `^${S[b.GTLT]}\\s*${S[b.XRANGEPLAIN]}$`);
    z("XRANGELOOSE", `^${S[b.GTLT]}\\s*${S[b.XRANGEPLAINLOOSE]}$`);
    z("COERCEPLAIN", `(^|[^\\d])(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}})(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?(?:\\.(\\d{1,${MAX_SAFE_COMPONENT_LENGTH}}))?`);
    z("COERCE", `${S[b.COERCEPLAIN]}(?:$|[^\\d])`);
    z("COERCEFULL", S[b.COERCEPLAIN] + `(?:${S[b.PRERELEASE]})?(?:${S[b.BUILD]})?(?:$|[^\\d])`);
    z("COERCERTL", S[b.COERCE], true);
    z("COERCERTLFULL", S[b.COERCEFULL], true);
    z("LONETILDE", "(?:~>?)");
    z("TILDETRIM", `(\\s*)${S[b.LONETILDE]}\\s+`, true);
    de.tildeTrimReplace = "$1~";
    z("TILDE", `^${S[b.LONETILDE]}${S[b.XRANGEPLAIN]}$`);
    z("TILDELOOSE", `^${S[b.LONETILDE]}${S[b.XRANGEPLAINLOOSE]}$`);
    z("LONECARET", "(?:\\^)");
    z("CARETTRIM", `(\\s*)${S[b.LONECARET]}\\s+`, true);
    de.caretTrimReplace = "$1^";
    z("CARET", `^${S[b.LONECARET]}${S[b.XRANGEPLAIN]}$`);
    z("CARETLOOSE", `^${S[b.LONECARET]}${S[b.XRANGEPLAINLOOSE]}$`);
    z("COMPARATORLOOSE", `^${S[b.GTLT]}\\s*(${S[b.LOOSEPLAIN]})$|^$`);
    z("COMPARATOR", `^${S[b.GTLT]}\\s*(${S[b.FULLPLAIN]})$|^$`);
    z("COMPARATORTRIM", `(\\s*)${S[b.GTLT]}\\s*(${S[b.LOOSEPLAIN]}|${S[b.XRANGEPLAIN]})`, true);
    de.comparatorTrimReplace = "$1$2$3";
    z("HYPHENRANGE", `^\\s*(${S[b.XRANGEPLAIN]})\\s+-\\s+(${S[b.XRANGEPLAIN]})\\s*$`);
    z("HYPHENRANGELOOSE", `^\\s*(${S[b.XRANGEPLAINLOOSE]})\\s+-\\s+(${S[b.XRANGEPLAINLOOSE]})\\s*$`);
    z("STAR", "(<|>)?=?\\s*\\*");
    z("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$");
    z("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
});
const Kt = C(function(a1, $a) {
    const _R = Object.freeze({
        loose: true
    });
    const mR = Object.freeze({});
    const gR = (e)=>{
        if (!e) {
            return mR;
        }
        if (typeof e !== "object") {
            return _R;
        }
        return e;
    };
    $a.exports = gR;
});
const fr = C(function(i1, Ja) {
    const Xa = /^[0-9]+$/;
    const compareIdentifiers = (e, s)=>{
        if (typeof e === "number" && typeof s === "number") {
            if (e === s) {
                return 0;
            }
            if (e < s) {
                return -1;
            }
            return 1;
        }
        let r = Xa.test(e);
        let n = Xa.test(s);
        if (r && n) {
            e = +e;
            s = +s;
        }
        if (e === s) {
            return 0;
        }
        if (r && !n) {
            return -1;
        }
        if (n && !r) {
            return 1;
        }
        if (e < s) {
            return -1;
        }
        return 1;
    };
    const rcompareIdentifiers = (e, s)=>compareIdentifiers(s, e);
    Ja.exports = {
        compareIdentifiers,
        rcompareIdentifiers
    };
});
const G = C(function(l1, ei) {
    const Ft = ut();
    const { MAX_LENGTH, MAX_SAFE_INTEGER } = dt();
    const { safeRe, t } = Ke();
    const ER = Kt();
    const { compareIdentifiers } = fr();
    class ie {
        constructor(e, s){
            s = ER(s);
            if (e instanceof ie) {
                if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) {
                    return e;
                } else {
                    e = e.version;
                }
            } else if (typeof e !== "string") {
                throw TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
            }
            if (e.length > MAX_LENGTH) {
                throw TypeError(`version is longer than ${MAX_LENGTH} characters`);
            }
            Ft("SemVer", e, s);
            this.options = s;
            this.loose = !!s.loose;
            this.includePrerelease = !!s.includePrerelease;
            let r = e.trim().match(s.loose ? safeRe[t.LOOSE] : safeRe[t.FULL]);
            if (!r) {
                throw TypeError(`Invalid Version: ${e}`);
            }
            this.raw = e;
            this.major = +r[1];
            this.minor = +r[2];
            this.patch = +r[3];
            if (this.major > MAX_SAFE_INTEGER || this.major < 0) {
                throw TypeError("Invalid major version");
            }
            if (this.minor > MAX_SAFE_INTEGER || this.minor < 0) {
                throw TypeError("Invalid minor version");
            }
            if (this.patch > MAX_SAFE_INTEGER || this.patch < 0) {
                throw TypeError("Invalid patch version");
            }
            if (!r[4]) {
                this.prerelease = [];
            } else {
                this.prerelease = r[4].split(".").map((n)=>{
                    if (/^[0-9]+$/.test(n)) {
                        let i = +n;
                        if (i >= 0 && i < MAX_SAFE_INTEGER) {
                            return i;
                        }
                    }
                    return n;
                });
            }
            this.build = r[5] ? r[5].split(".") : [];
            this.format();
        }
        format() {
            this.version = `${this.major}.${this.minor}.${this.patch}`;
            if (this.prerelease.length) {
                this.version += `-${this.prerelease.join(".")}`;
            }
            return this.version;
        }
        toString() {
            return this.version;
        }
        compare(e) {
            Ft("SemVer.compare", this.version, this.options, e);
            if (!(e instanceof ie)) {
                if (typeof e === "string" && e === this.version) {
                    return 0;
                }
                e = new ie(e, this.options);
            }
            if (e.version === this.version) {
                return 0;
            }
            return this.compareMain(e) || this.comparePre(e);
        }
        compareMain(e) {
            if (!(e instanceof ie)) {
                e = new ie(e, this.options);
            }
            if (this.major < e.major) {
                return -1;
            }
            if (this.major > e.major) {
                return 1;
            }
            if (this.minor < e.minor) {
                return -1;
            }
            if (this.minor > e.minor) {
                return 1;
            }
            if (this.patch < e.patch) {
                return -1;
            }
            if (this.patch > e.patch) {
                return 1;
            }
            return 0;
        }
        comparePre(e) {
            if (!(e instanceof ie)) {
                e = new ie(e, this.options);
            }
            if (this.prerelease.length && !e.prerelease.length) {
                return -1;
            } else if (!this.prerelease.length && e.prerelease.length) {
                return 1;
            } else if (!this.prerelease.length && !e.prerelease.length) {
                return 0;
            }
            let s = 0;
            do {
                let r = this.prerelease[s];
                let n = e.prerelease[s];
                Ft("prerelease compare", s, r, n);
                if (r === undefined && n === undefined) {
                    return 0;
                } else if (n === undefined) {
                    return 1;
                } else if (r === undefined) {
                    return -1;
                } else if (r === n) {
                    continue;
                } else {
                    return compareIdentifiers(r, n);
                }
            }while (++s)
        }
        compareBuild(e) {
            if (!(e instanceof ie)) {
                e = new ie(e, this.options);
            }
            let s = 0;
            do {
                let r = this.build[s];
                let n = e.build[s];
                Ft("build compare", s, r, n);
                if (r === undefined && n === undefined) {
                    return 0;
                } else if (n === undefined) {
                    return 1;
                } else if (r === undefined) {
                    return -1;
                } else if (r === n) {
                    continue;
                } else {
                    return compareIdentifiers(r, n);
                }
            }while (++s)
        }
        inc(e, s, r) {
            if (e.startsWith("pre")) {
                if (!s && r === false) {
                    throw Error("invalid increment argument: identifier is empty");
                }
                if (s) {
                    let n = `-${s}`.match(this.options.loose ? safeRe[t.PRERELEASELOOSE] : safeRe[t.PRERELEASE]);
                    if (!n || n[1] !== s) {
                        throw Error(`invalid identifier: ${s}`);
                    }
                }
            }
            switch(e){
                case "premajor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor = 0;
                    this.major++;
                    this.inc("pre", s, r);
                    break;
                case "preminor":
                    this.prerelease.length = 0;
                    this.patch = 0;
                    this.minor++;
                    this.inc("pre", s, r);
                    break;
                case "prepatch":
                    this.prerelease.length = 0;
                    this.inc("patch", s, r);
                    this.inc("pre", s, r);
                    break;
                case "prerelease":
                    if (this.prerelease.length === 0) {
                        this.inc("patch", s, r);
                    }
                    this.inc("pre", s, r);
                    break;
                case "release":
                    if (this.prerelease.length === 0) {
                        throw Error(`version ${this.raw} is not a prerelease`);
                    }
                    this.prerelease.length = 0;
                    break;
                case "major":
                    if (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) {
                        this.major++;
                    }
                    this.minor = 0;
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                case "minor":
                    if (this.patch !== 0 || this.prerelease.length === 0) {
                        this.minor++;
                    }
                    this.patch = 0;
                    this.prerelease = [];
                    break;
                case "patch":
                    if (this.prerelease.length === 0) {
                        this.patch++;
                    }
                    this.prerelease = [];
                    break;
                case "pre":
                    {
                        let n = Number(r) ? 1 : 0;
                        if (this.prerelease.length === 0) {
                            this.prerelease = [
                                n
                            ];
                        } else {
                            let i = this.prerelease.length;
                            while(--i >= 0){
                                if (typeof this.prerelease[i] === "number") {
                                    this.prerelease[i]++;
                                    i = -2;
                                }
                            }
                            if (i === -1) {
                                if (s === this.prerelease.join(".") && r === false) {
                                    throw Error("invalid increment argument: identifier already exists");
                                }
                                this.prerelease.push(n);
                            }
                        }
                        if (s) {
                            let i = [
                                s,
                                n
                            ];
                            if (r === false) {
                                i = [
                                    s
                                ];
                            }
                            if (compareIdentifiers(this.prerelease[0], s) === 0) {
                                if (isNaN(this.prerelease[1])) {
                                    this.prerelease = i;
                                }
                            } else {
                                this.prerelease = i;
                            }
                        }
                        break;
                    }
                default:
                    throw Error(`invalid increment argument: ${e}`);
            }
            this.raw = this.format();
            if (this.build.length) {
                this.raw += `+${this.build.join(".")}`;
            }
            return this;
        }
    }
    ei.exports = ie;
});
const ve = C(function(c1, ri) {
    const ti = G();
    const SR = (e, s, r = false)=>{
        if (e instanceof ti) {
            return e;
        }
        try {
            return new ti(e, s);
        } catch (error) {
            if (!r) {
                return null;
            }
            throw error;
        }
    };
    ri.exports = SR;
});
const oi = C(function(h1, ni) {
    const TR = ve();
    const AR = (e, s)=>{
        let r = TR(e, s);
        if (r) {
            return r.version;
        }
        return null;
    };
    ni.exports = AR;
});
const ii = C(function(_1, ai) {
    const wR = ve();
    const yR = (e, s)=>{
        let r = wR(e.trim().replace(/^[=v]+/, ""), s);
        if (r) {
            return r.version;
        }
        return null;
    };
    ai.exports = yR;
});
const hi = C(function(g1, di) {
    const li = G();
    const RR = (e, s, r, n, i)=>{
        if (typeof r === "string") {
            i = n;
            n = r;
            r = undefined;
        }
        try {
            return new li(e instanceof li ? e.version : e, r).inc(s, n, i).version;
        } catch (c) {
            return null;
        }
    };
    di.exports = RR;
});
const _i = C(function(E1, pi) {
    const ui = ve();
    const vR = (e, s)=>{
        let r = ui(e, null, true);
        let n = ui(s, null, true);
        let i = r.compare(n);
        if (i === 0) {
            return null;
        }
        let c = i > 0;
        let d = c ? r : n;
        let m = c ? n : r;
        let h = !!d.prerelease.length;
        if (!!m.prerelease.length && !h) {
            if (!m.patch && !m.minor) {
                return "major";
            }
            if (m.compareMain(d) === 0) {
                if (m.minor && !m.patch) {
                    return "minor";
                }
                return "patch";
            }
        }
        let w = h ? "pre" : "";
        if (r.major !== n.major) {
            return `${w}major`;
        }
        if (r.minor !== n.minor) {
            return `${w}minor`;
        }
        if (r.patch !== n.patch) {
            return `${w}patch`;
        }
        return "prerelease";
    };
    pi.exports = vR;
});
const gi = C(function(S1, mi) {
    const CR = G();
    const zR = (e, s)=>new CR(e, s).major;
    mi.exports = zR;
});
const Ei = C(function(b1, fi) {
    const OR = G();
    const kR = (e, s)=>new OR(e, s).minor;
    fi.exports = kR;
});
const Ti = C(function(T1, bi) {
    const NR = G();
    const IR = (e, s)=>new NR(e, s).patch;
    bi.exports = IR;
});
const wi = C(function(A1, Ai) {
    const MR = ve();
    const PR = (e, s)=>{
        let r = MR(e, s);
        if (r && r.prerelease.length) {
            return r.prerelease;
        }
        return null;
    };
    Ai.exports = PR;
});
const Z = C(function(w1, Ri) {
    const yi = G();
    const DR = (e, s, r)=>new yi(e, r).compare(new yi(s, r));
    Ri.exports = DR;
});
const Ci = C(function(y1, vi) {
    const xR = Z();
    const LR = (e, s, r)=>xR(s, e, r);
    vi.exports = LR;
});
const Oi = C(function(R1, zi) {
    const UR = Z();
    const VR = (e, s)=>UR(e, s, true);
    zi.exports = VR;
});
const Qt = C(function(v1, Ni) {
    const ki = G();
    const jR = (e, s, r)=>{
        let n = new ki(e, r);
        let i = new ki(s, r);
        return n.compare(i) || n.compareBuild(i);
    };
    Ni.exports = jR;
});
const Mi = C(function(C1, Ii) {
    const qR = Qt();
    const GR = (e, s)=>e.sort((r, n)=>qR(r, n, s));
    Ii.exports = GR;
});
const Di = C(function(z1, Pi) {
    const BR = Qt();
    const HR = (e, s)=>e.sort((r, n)=>BR(n, r, s));
    Pi.exports = HR;
});
const pt = C(function(O1, xi) {
    const KR = Z();
    const FR = (e, s, r)=>KR(e, s, r) > 0;
    xi.exports = FR;
});
const Jt = C(function(N1, Li) {
    const YR = Z();
    const WR = (e, s, r)=>YR(e, s, r) < 0;
    Li.exports = WR;
});
const Sr = C(function(I1, Ui) {
    const $R = Z();
    const XR = (e, s, r)=>$R(e, s, r) === 0;
    Ui.exports = XR;
});
const br = C(function(M1, Vi) {
    const QR = Z();
    const JR = (e, s, r)=>QR(e, s, r) !== 0;
    Vi.exports = JR;
});
const Zt = C(function(P1, ji) {
    const ZR = Z();
    const ev = (e, s, r)=>ZR(e, s, r) >= 0;
    ji.exports = ev;
});
const es = C(function(D1, qi) {
    const tv = Z();
    const sv = (e, s, r)=>tv(e, s, r) <= 0;
    qi.exports = sv;
});
const Tr = C(function(x1, Gi) {
    const rv = Sr();
    const nv = br();
    const ov = pt();
    const av = Zt();
    const iv = Jt();
    const lv = es();
    const cv = (e, s, r, n)=>{
        switch(s){
            case "===":
                if (typeof e === "object") {
                    e = e.version;
                }
                if (typeof r === "object") {
                    r = r.version;
                }
                return e === r;
            case "!==":
                if (typeof e === "object") {
                    e = e.version;
                }
                if (typeof r === "object") {
                    r = r.version;
                }
                return e !== r;
            case "":
            case "=":
            case "==":
                return rv(e, r, n);
            case "!=":
                return nv(e, r, n);
            case ">":
                return ov(e, r, n);
            case ">=":
                return av(e, r, n);
            case "<":
                return iv(e, r, n);
            case "<=":
                return lv(e, r, n);
            default:
                throw TypeError(`Invalid operator: ${s}`);
        }
    };
    Gi.exports = cv;
});
const Hi = C(function(L1, Bi) {
    const dv = G();
    const hv = ve();
    const { safeRe, t } = Ke();
    const uv = (e, s)=>{
        if (e instanceof dv) {
            return e;
        }
        if (typeof e === "number") {
            e = String(e);
        }
        if (typeof e !== "string") {
            return null;
        }
        s = s || {};
        let r = null;
        if (!s.rtl) {
            r = e.match(s.includePrerelease ? safeRe[t.COERCEFULL] : safeRe[t.COERCE]);
        } else {
            let h = s.includePrerelease ? safeRe[t.COERCERTLFULL] : safeRe[t.COERCERTL];
            let f;
            while((f = h.exec(e)) && (!r || r.index + r[0].length !== e.length)){
                if (!r || f.index + f[0].length !== r.index + r[0].length) {
                    r = f;
                }
                h.lastIndex = f.index + f[1].length + f[2].length;
            }
            h.lastIndex = -1;
        }
        if (r === null) {
            return null;
        }
        let n = r[2];
        let i = r[3] || "0";
        let c = r[4] || "0";
        let d = s.includePrerelease && r[5] ? `-${r[5]}` : "";
        let m = s.includePrerelease && r[6] ? `+${r[6]}` : "";
        return hv(`${n}.${i}.${c}${d}${m}`, s);
    };
    Bi.exports = uv;
});
const Yi = C(function(U1, Fi) {
    class Ki {
        constructor(){
            this.max = 1000;
            this.map = new Map;
        }
        get(e) {
            let s = this.map.get(e);
            if (s === undefined) {
                return;
            } else {
                this.map.delete(e);
                this.map.set(e, s);
                return s;
            }
        }
        delete(e) {
            return this.map.delete(e);
        }
        set(e, s) {
            if (!this.delete(e) && s !== undefined) {
                if (this.map.size >= this.max) {
                    let n = this.map.keys().next().value;
                    this.delete(n);
                }
                this.map.set(e, s);
            }
            return this;
        }
    }
    Fi.exports = Ki;
});
const ee = C(function(V1, Qi) {
    const pv = /\s+/g;
    class mt {
        constructor(e, s){
            s = mv(s);
            if (e instanceof mt) {
                if (e.loose === !!s.loose && e.includePrerelease === !!s.includePrerelease) {
                    return e;
                } else {
                    return new mt(e.raw, s);
                }
            }
            if (e instanceof ns) {
                this.raw = e.value;
                this.set = [
                    [
                        e
                    ]
                ];
                this.formatted = undefined;
                return this;
            }
            this.options = s;
            this.loose = !!s.loose;
            this.includePrerelease = !!s.includePrerelease;
            this.raw = e.trim().replace(pv, " ");
            this.set = this.raw.split("||").map((r)=>this.parseRange(r.trim())).filter((r)=>r.length);
            if (!this.set.length) {
                throw TypeError(`Invalid SemVer Range: ${this.raw}`);
            }
            if (this.set.length > 1) {
                let r = this.set[0];
                this.set = this.set.filter((n)=>!$i(n[0]));
                if (this.set.length === 0) {
                    this.set = [
                        r
                    ];
                } else if (this.set.length > 1) {
                    for (let n of this.set){
                        if (n.length === 1 && Av(n[0])) {
                            this.set = [
                                n
                            ];
                            break;
                        }
                    }
                }
            }
            this.formatted = undefined;
        }
        get range() {
            if (this.formatted === undefined) {
                this.formatted = "";
                for(let e = 0; e < this.set.length; e++){
                    if (e > 0) {
                        this.formatted += "||";
                    }
                    let s = this.set[e];
                    for(let r = 0; r < s.length; r++){
                        if (r > 0) {
                            this.formatted += " ";
                        }
                        this.formatted += s[r].toString().trim();
                    }
                }
            }
            return this.formatted;
        }
        format() {
            return this.range;
        }
        toString() {
            return this.range;
        }
        parseRange(e) {
            let r = `${(this.options.includePrerelease && FLAG_INCLUDE_PRERELEASE) | (this.options.loose && FLAG_LOOSE)}:${e}`;
            let n = Wi.get(r);
            if (n) {
                return n;
            }
            let loose = this.options.loose;
            let c = loose ? safeRe[t.HYPHENRANGELOOSE] : safeRe[t.HYPHENRANGE];
            e = e.replace(c, Iv(this.options.includePrerelease));
            P("hyphen replace", e);
            e = e.replace(safeRe[t.COMPARATORTRIM], comparatorTrimReplace);
            P("comparator trim", e);
            e = e.replace(safeRe[t.TILDETRIM], tildeTrimReplace);
            P("tilde trim", e);
            e = e.replace(safeRe[t.CARETTRIM], caretTrimReplace);
            P("caret trim", e);
            let d = e.split(" ").map((w)=>wv(w, this.options)).join(" ").split(/\s+/).map((w)=>Nv(w, this.options));
            if (loose) {
                d = d.filter((w)=>{
                    P("loose invalid filter", w, this.options);
                    return !!w.match(safeRe[t.COMPARATORLOOSE]);
                });
            }
            P("range list", d);
            let m = new Map;
            let h = d.map((w)=>new ns(w, this.options));
            for (let w of h){
                if ($i(w)) {
                    return [
                        w
                    ];
                }
                m.set(w.value, w);
            }
            if (m.size > 1 && m.has("")) {
                m.delete("");
            }
            let f = [
                ...m.values()
            ];
            Wi.set(r, f);
            return f;
        }
        intersects(e, s) {
            if (!(e instanceof mt)) {
                throw TypeError("a Range is required");
            }
            return this.set.some((r)=>Xi(r, s) && e.set.some((n)=>Xi(n, s) && r.every((i)=>n.every((c)=>i.intersects(c, s)))));
        }
        test(e) {
            if (!e) {
                return false;
            }
            if (typeof e === "string") {
                try {
                    e = new gv(e, this.options);
                } catch (s) {
                    return false;
                }
            }
            for(let s = 0; s < this.set.length; s++){
                if (Mv(this.set[s], e, this.options)) {
                    return true;
                }
            }
            return false;
        }
    }
    Qi.exports = mt;
    const _v = Yi();
    var Wi = new _v;
    var mv = Kt();
    var ns = gt();
    var P = ut();
    var gv = G();
    var { safeRe, t, comparatorTrimReplace, tildeTrimReplace, caretTrimReplace } = Ke();
    var { FLAG_INCLUDE_PRERELEASE, FLAG_LOOSE } = dt();
    var $i = (e)=>e.value === "<0.0.0-0";
    var Av = (e)=>e.value === "";
    var Xi = (e, s)=>{
        let r = true;
        let n = e.slice();
        let i = n.pop();
        while(r && n.length){
            r = n.every((c)=>i.intersects(c, s));
            i = n.pop();
        }
        return r;
    };
    var wv = (e, options)=>{
        e = e.replace(safeRe[t.BUILD], "");
        P("comp", e, options);
        e = vv(e, options);
        P("caret", e);
        e = yv(e, options);
        P("tildes", e);
        e = zv(e, options);
        P("xrange", e);
        e = kv(e, options);
        P("stars", e);
        return e;
    };
    const Y = (e)=>!e || e.toLowerCase() === "x" || e === "*";
    var yv = (e, options)=>e.trim().split(/\s+/).map((r)=>Rv(r, options)).join(" ");
    var Rv = (e, s)=>{
        let r = s.loose ? safeRe[t.TILDELOOSE] : safeRe[t.TILDE];
        return e.replace(r, (n, i, c, d, m)=>{
            P("tilde", e, n, i, c, d, m);
            let h;
            if (Y(i)) {
                h = "";
            } else if (Y(c)) {
                h = `>=${i}.0.0 <${+i + 1}.0.0-0`;
            } else if (Y(d)) {
                h = `>=${i}.${c}.0 <${i}.${+c + 1}.0-0`;
            } else if (m) {
                P("replaceTilde pr", m);
                h = `>=${i}.${c}.${d}-${m} <${i}.${+c + 1}.0-0`;
            } else {
                h = `>=${i}.${c}.${d} <${i}.${+c + 1}.0-0`;
            }
            P("tilde return", h);
            return h;
        });
    };
    var vv = (e, options)=>e.trim().split(/\s+/).map((r)=>Cv(r, options)).join(" ");
    var Cv = (e, s)=>{
        P("caret", e, s);
        let r = s.loose ? safeRe[t.CARETLOOSE] : safeRe[t.CARET];
        let n = s.includePrerelease ? "-0" : "";
        return e.replace(r, (i, c, d, m, h)=>{
            P("caret", e, i, c, d, m, h);
            let f;
            if (Y(c)) {
                f = "";
            } else if (Y(d)) {
                f = `>=${c}.0.0${n} <${+c + 1}.0.0-0`;
            } else if (Y(m)) {
                if (c === "0") {
                    f = `>=${c}.${d}.0${n} <${c}.${+d + 1}.0-0`;
                } else {
                    f = `>=${c}.${d}.0${n} <${+c + 1}.0.0-0`;
                }
            } else if (h) {
                P("replaceCaret pr", h);
                if (c === "0") {
                    if (d === "0") {
                        f = `>=${c}.${d}.${m}-${h} <${c}.${d}.${+m + 1}-0`;
                    } else {
                        f = `>=${c}.${d}.${m}-${h} <${c}.${+d + 1}.0-0`;
                    }
                } else {
                    f = `>=${c}.${d}.${m}-${h} <${+c + 1}.0.0-0`;
                }
            } else {
                P("no pr");
                if (c === "0") {
                    if (d === "0") {
                        f = `>=${c}.${d}.${m}${n} <${c}.${d}.${+m + 1}-0`;
                    } else {
                        f = `>=${c}.${d}.${m}${n} <${c}.${+d + 1}.0-0`;
                    }
                } else {
                    f = `>=${c}.${d}.${m} <${+c + 1}.0.0-0`;
                }
            }
            P("caret return", f);
            return f;
        });
    };
    var zv = (e, options)=>{
        P("replaceXRanges", e, options);
        return e.split(/\s+/).map((r)=>Ov(r, options)).join(" ");
    };
    var Ov = (e, s)=>{
        e = e.trim();
        let r = s.loose ? safeRe[t.XRANGELOOSE] : safeRe[t.XRANGE];
        return e.replace(r, (n, i, c, d, m, h)=>{
            P("xRange", e, n, i, c, d, m, h);
            let f = Y(c);
            let w = f || Y(d);
            let O = w || Y(m);
            let I = O;
            if (i === "=" && I) {
                i = "";
            }
            h = s.includePrerelease ? "-0" : "";
            if (f) {
                if (i === ">" || i === "<") {
                    n = "<0.0.0-0";
                } else {
                    n = "*";
                }
            } else if (i && I) {
                if (w) {
                    d = 0;
                }
                m = 0;
                if (i === ">") {
                    i = ">=";
                    if (w) {
                        c = +c + 1;
                        d = 0;
                        m = 0;
                    } else {
                        d = +d + 1;
                        m = 0;
                    }
                } else if (i === "<=") {
                    i = "<";
                    if (w) {
                        c = +c + 1;
                    } else {
                        d = +d + 1;
                    }
                }
                if (i === "<") {
                    h = "-0";
                }
                n = `${i + c}.${d}.${m}${h}`;
            } else if (w) {
                n = `>=${c}.0.0${h} <${+c + 1}.0.0-0`;
            } else if (O) {
                n = `>=${c}.${d}.0${h} <${c}.${+d + 1}.0-0`;
            }
            P("xRange return", n);
            return n;
        });
    };
    var kv = (e, options)=>{
        P("replaceStars", e, options);
        return e.trim().replace(safeRe[t.STAR], "");
    };
    var Nv = (e, options)=>{
        P("replaceGTE0", e, options);
        return e.trim().replace(safeRe[options.includePrerelease ? t.GTE0PRE : t.GTE0], "");
    };
    var Iv = (includePrerelease)=>(s, r, n, i, c, d, m, h, f, w, O, I)=>{
            if (Y(n)) {
                r = "";
            } else if (Y(i)) {
                r = `>=${n}.0.0${includePrerelease ? "-0" : ""}`;
            } else if (Y(c)) {
                r = `>=${n}.${i}.0${includePrerelease ? "-0" : ""}`;
            } else if (d) {
                r = `>=${r}`;
            } else {
                r = `>=${r}${includePrerelease ? "-0" : ""}`;
            }
            if (Y(f)) {
                h = "";
            } else if (Y(w)) {
                h = `<${+f + 1}.0.0-0`;
            } else if (Y(O)) {
                h = `<${f}.${+w + 1}.0-0`;
            } else if (I) {
                h = `<=${f}.${w}.${O}-${I}`;
            } else if (includePrerelease) {
                h = `<${f}.${w}.${+O + 1}-0`;
            } else {
                h = `<=${h}`;
            }
            return `${r} ${h}`.trim();
        };
    var Mv = (e, s, options)=>{
        for(let n = 0; n < e.length; n++){
            if (!e[n].test(s)) {
                return false;
            }
        }
        if (s.prerelease.length && !options.includePrerelease) {
            for(let n = 0; n < e.length; n++){
                P(e[n].semver);
                if (e[n].semver === ns.ANY) {
                    continue;
                }
                if (e[n].semver.prerelease.length > 0) {
                    let i = e[n].semver;
                    if (i.major === s.major && i.minor === s.minor && i.patch === s.patch) {
                        return true;
                    }
                }
            }
            return false;
        }
        return true;
    };
});
var gt = C(function(j1, nl) {
    const ft = Symbol("SemVer ANY");
    class os {
        static get ANY() {
            return ft;
        }
        constructor(e, s){
            s = Ji(s);
            if (e instanceof os) {
                if (e.loose === !!s.loose) {
                    return e;
                } else {
                    e = e.value;
                }
            }
            e = e.trim().split(/\s+/).join(" ");
            wr("comparator", e, s);
            this.options = s;
            this.loose = !!s.loose;
            this.parse(e);
            if (this.semver === ft) {
                this.value = "";
            } else {
                this.value = this.operator + this.semver.version;
            }
            wr("comp", this);
        }
        parse(e) {
            let s = this.options.loose ? safeRe[t.COMPARATORLOOSE] : safeRe[t.COMPARATOR];
            let r = e.match(s);
            if (!r) {
                throw TypeError(`Invalid comparator: ${e}`);
            }
            this.operator = r[1] !== undefined ? r[1] : "";
            if (this.operator === "=") {
                this.operator = "";
            }
            if (!r[2]) {
                this.semver = ft;
            } else {
                this.semver = new tl(r[2], this.options.loose);
            }
        }
        toString() {
            return this.value;
        }
        test(e) {
            wr("Comparator.test", e, this.options.loose);
            if (this.semver === ft || e === ft) {
                return true;
            }
            if (typeof e === "string") {
                try {
                    e = new tl(e, this.options);
                } catch (s) {
                    return false;
                }
            }
            return Ar(e, this.operator, this.semver, this.options);
        }
        intersects(e, s) {
            if (!(e instanceof os)) {
                throw TypeError("a Comparator is required");
            }
            if (this.operator === "") {
                if (this.value === "") {
                    return true;
                }
                return new rl(e.value, s).test(this.value);
            } else if (e.operator === "") {
                if (e.value === "") {
                    return true;
                }
                return new rl(this.value, s).test(e.semver);
            }
            s = Ji(s);
            if (s.includePrerelease && (this.value === "<0.0.0-0" || e.value === "<0.0.0-0")) {
                return false;
            }
            if (!s.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) {
                return false;
            }
            if (this.operator.startsWith(">") && e.operator.startsWith(">")) {
                return true;
            }
            if (this.operator.startsWith("<") && e.operator.startsWith("<")) {
                return true;
            }
            if (this.semver.version === e.semver.version && this.operator.includes("=") && e.operator.includes("=")) {
                return true;
            }
            if (Ar(this.semver, "<", e.semver, s) && this.operator.startsWith(">") && e.operator.startsWith("<")) {
                return true;
            }
            if (Ar(this.semver, ">", e.semver, s) && this.operator.startsWith("<") && e.operator.startsWith(">")) {
                return true;
            }
            return false;
        }
    }
    nl.exports = os;
    var Ji = Kt();
    var { safeRe, t } = Ke();
    var Ar = Tr();
    var wr = ut();
    var tl = G();
    var rl = ee();
});
const Et = C(function(q1, ol) {
    const Pv = ee();
    const Dv = (e, s, r)=>{
        try {
            s = new Pv(s, r);
        } catch (n) {
            return false;
        }
        return s.test(e);
    };
    ol.exports = Dv;
});
const il = C(function(G1, al) {
    const xv = ee();
    const Lv = (e, s)=>new xv(e, s).set.map((r)=>r.map((n)=>n.value).join(" ").trim().split(" "));
    al.exports = Lv;
});
const cl = C(function(B1, ll) {
    const Uv = G();
    const Vv = ee();
    const jv = (e, s, r)=>{
        let n = null;
        let i = null;
        let c = null;
        try {
            c = new Vv(s, r);
        } catch (d) {
            return null;
        }
        e.forEach((d)=>{
            if (c.test(d)) {
                if (!n || i.compare(d) === -1) {
                    n = d;
                    i = new Uv(n, r);
                }
            }
        });
        return n;
    };
    ll.exports = jv;
});
const hl = C(function(H1, dl) {
    const qv = G();
    const Gv = ee();
    const Bv = (e, s, r)=>{
        let n = null;
        let i = null;
        let c = null;
        try {
            c = new Gv(s, r);
        } catch (d) {
            return null;
        }
        e.forEach((d)=>{
            if (c.test(d)) {
                if (!n || i.compare(d) === 1) {
                    n = d;
                    i = new qv(n, r);
                }
            }
        });
        return n;
    };
    dl.exports = Bv;
});
const _l = C(function(K1, pl) {
    const yr = G();
    const Hv = ee();
    const ul = pt();
    const Kv = (e, s)=>{
        e = new Hv(e, s);
        let r = new yr("0.0.0");
        if (e.test(r)) {
            return r;
        }
        r = new yr("0.0.0-0");
        if (e.test(r)) {
            return r;
        }
        r = null;
        for(let n = 0; n < e.set.length; ++n){
            let i = e.set[n];
            let c = null;
            i.forEach((d)=>{
                let m = new yr(d.semver.version);
                switch(d.operator){
                    case ">":
                        if (m.prerelease.length === 0) {
                            m.patch++;
                        } else {
                            m.prerelease.push(0);
                        }
                        m.raw = m.format();
                    case "":
                    case ">=":
                        if (!c || ul(m, c)) {
                            c = m;
                        }
                        break;
                    case "<":
                    case "<=":
                        break;
                    default:
                        throw Error(`Unexpected operation: ${d.operator}`);
                }
            });
            if (c && (!r || ul(r, c))) {
                r = c;
            }
        }
        if (r && e.test(r)) {
            return r;
        }
        return null;
    };
    pl.exports = Kv;
});
const gl = C(function(F1, ml) {
    const Fv = ee();
    const Yv = (e, s)=>{
        try {
            return new Fv(e, s).range || "*";
        } catch (r) {
            return null;
        }
    };
    ml.exports = Yv;
});
const as = C(function(Y1, Tl) {
    const Wv = G();
    const bl = gt();
    const { ANY } = bl;
    const Xv = ee();
    const Qv = Et();
    const El = pt();
    const Sl = Jt();
    const Jv = es();
    const Zv = Zt();
    const eC = (e, s, r, n)=>{
        e = new Wv(e, n);
        s = new Xv(s, n);
        let i;
        let c;
        let d;
        let m;
        let h;
        switch(r){
            case ">":
                i = El;
                c = Jv;
                d = Sl;
                m = ">";
                h = ">=";
                break;
            case "<":
                i = Sl;
                c = Zv;
                d = El;
                m = "<";
                h = "<=";
                break;
            default:
                throw TypeError('Must provide a hilo val of "<" or ">"');
        }
        if (Qv(e, s, n)) {
            return false;
        }
        for(let f = 0; f < s.set.length; ++f){
            let w = s.set[f];
            let O = null;
            let I = null;
            w.forEach((R)=>{
                if (R.semver === ANY) {
                    R = new bl(">=0.0.0");
                }
                O = O || R;
                I = I || R;
                if (i(R.semver, O.semver, n)) {
                    O = R;
                } else if (d(R.semver, I.semver, n)) {
                    I = R;
                }
            });
            if (O.operator === m || O.operator === h) {
                return false;
            }
            if ((!I.operator || I.operator === m) && c(e, I.semver)) {
                return false;
            } else if (I.operator === h && d(e, I.semver)) {
                return false;
            }
        }
        return true;
    };
    Tl.exports = eC;
});
const wl = C(function(W1, Al) {
    const tC = as();
    const rC = (e, s, r)=>tC(e, s, ">", r);
    Al.exports = rC;
});
const Rl = C(function($1, yl) {
    const nC = as();
    const oC = (e, s, r)=>nC(e, s, "<", r);
    yl.exports = oC;
});
const zl = C(function(X1, Cl) {
    const vl = ee();
    const aC = (e, s, r)=>{
        e = new vl(e, r);
        s = new vl(s, r);
        return e.intersects(s, r);
    };
    Cl.exports = aC;
});
const kl = C(function(Q1, Ol) {
    const lC = Et();
    const cC = Z();
    Ol.exports = (e, s, r)=>{
        let n = [];
        let i = null;
        let c = null;
        let d = e.sort((w, O)=>cC(w, O, r));
        for (let w of d){
            if (lC(w, s, r)) {
                c = w;
                if (!i) {
                    i = w;
                }
            } else {
                if (c) {
                    n.push([
                        i,
                        c
                    ]);
                }
                c = null;
                i = null;
            }
        }
        if (i) {
            n.push([
                i,
                null
            ]);
        }
        let m = [];
        for (let [w, O] of n){
            if (w === O) {
                m.push(w);
            } else if (!O && w === d[0]) {
                m.push("*");
            } else if (!O) {
                m.push(`>=${w}`);
            } else if (w === d[0]) {
                m.push(`<=${O}`);
            } else {
                m.push(`${w} - ${O}`);
            }
        }
        let h = m.join(" || ");
        let f = typeof s.raw === "string" ? s.raw : String(s);
        if (h.length < f.length) {
            return h;
        }
        return s;
    };
});
const xl = C(function(J1, Dl) {
    const Nl = ee();
    const vr = gt();
    const { ANY } = vr;
    const St = Et();
    const Cr = Z();
    const dC = (e, s, r = {})=>{
        if (e === s) {
            return true;
        }
        e = new Nl(e, r);
        s = new Nl(s, r);
        let n = false;
        e: for (let i of e.set){
            for (let c of s.set){
                let d = uC(i, c, r);
                n = n || d !== null;
                if (d) {
                    continue e;
                }
            }
            if (n) {
                return false;
            }
        }
        return true;
    };
    const hC = [
        new vr(">=0.0.0-0")
    ];
    const Il = [
        new vr(">=0.0.0")
    ];
    var uC = (e, s, r)=>{
        if (e === s) {
            return true;
        }
        if (e.length === 1 && e[0].semver === ANY) {
            if (s.length === 1 && s[0].semver === ANY) {
                return true;
            } else if (r.includePrerelease) {
                e = hC;
            } else {
                e = Il;
            }
        }
        if (s.length === 1 && s[0].semver === ANY) {
            if (r.includePrerelease) {
                return true;
            } else {
                s = Il;
            }
        }
        let n = new Set;
        let i;
        let c;
        for (let R of e){
            if (R.operator === ">" || R.operator === ">=") {
                i = Ml(i, R, r);
            } else if (R.operator === "<" || R.operator === "<=") {
                c = Pl(c, R, r);
            } else {
                n.add(R.semver);
            }
        }
        if (n.size > 1) {
            return null;
        }
        let d;
        if (i && c) {
            d = Cr(i.semver, c.semver, r);
            if (d > 0) {
                return null;
            } else if (d === 0 && (i.operator !== ">=" || c.operator !== "<=")) {
                return null;
            }
        }
        for (let R of n){
            if (i && !St(R, String(i), r)) {
                return null;
            }
            if (c && !St(R, String(c), r)) {
                return null;
            }
            for (let Hy of s){
                if (!St(R, String(Hy), r)) {
                    return false;
                }
            }
            return true;
        }
        let m;
        let h;
        let f;
        let w;
        let O = c && !r.includePrerelease && c.semver.prerelease.length ? c.semver : false;
        let I = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : false;
        if (O && O.prerelease.length === 1 && c.operator === "<" && O.prerelease[0] === 0) {
            O = false;
        }
        for (let R of s){
            w = w || R.operator === ">" || R.operator === ">=";
            f = f || R.operator === "<" || R.operator === "<=";
            if (i) {
                if (I) {
                    if (R.semver.prerelease && R.semver.prerelease.length && R.semver.major === I.major && R.semver.minor === I.minor && R.semver.patch === I.patch) {
                        I = false;
                    }
                }
                if (R.operator === ">" || R.operator === ">=") {
                    m = Ml(i, R, r);
                    if (m === R && m !== i) {
                        return false;
                    }
                } else if (i.operator === ">=" && !St(i.semver, String(R), r)) {
                    return false;
                }
            }
            if (c) {
                if (O) {
                    if (R.semver.prerelease && R.semver.prerelease.length && R.semver.major === O.major && R.semver.minor === O.minor && R.semver.patch === O.patch) {
                        O = false;
                    }
                }
                if (R.operator === "<" || R.operator === "<=") {
                    h = Pl(c, R, r);
                    if (h === R && h !== c) {
                        return false;
                    }
                } else if (c.operator === "<=" && !St(c.semver, String(R), r)) {
                    return false;
                }
            }
            if (!R.operator && (c || i) && d !== 0) {
                return false;
            }
        }
        if (i && f && !c && d !== 0) {
            return false;
        }
        if (c && w && !i && d !== 0) {
            return false;
        }
        if (I || O) {
            return false;
        }
        return true;
    };
    var Ml = (e, s, r)=>{
        if (!e) {
            return s;
        }
        let n = Cr(e.semver, s.semver, r);
        if (n > 0) {
            return e;
        }
        if (n < 0) {
            return s;
        }
        if (s.operator === ">" && e.operator === ">=") {
            return s;
        }
        return e;
    };
    var Pl = (e, s, r)=>{
        if (!e) {
            return s;
        }
        let n = Cr(e.semver, s.semver, r);
        if (n < 0) {
            return e;
        }
        if (n > 0) {
            return s;
        }
        if (s.operator === "<" && e.operator === "<=") {
            return s;
        }
        return e;
    };
    Dl.exports = dC;
});
const ty = C(function(Z1, Ll) {
    const Fe = Ke();
    const is = dt();
    const SemVer = G();
    const ls = fr();
    const parse = ve();
    const valid = oi();
    const clean = ii();
    const inc = hi();
    const diff = _i();
    const major = gi();
    const minor = Ei();
    const patch = Ti();
    const prerelease = wi();
    const compare = Z();
    const rcompare = Ci();
    const compareLoose = Oi();
    const compareBuild = Qt();
    const sort = Mi();
    const rsort = Di();
    const gt_1 = pt();
    const lt_1 = Jt();
    const eq = Sr();
    const neq = br();
    const gte = Zt();
    const lte = es();
    const cmp = Tr();
    const coerce = Hi();
    const Comparator = gt();
    const Range = ee();
    const satisfies = Et();
    const toComparators = il();
    const maxSatisfying = cl();
    const minSatisfying = hl();
    const minVersion = _l();
    const validRange = gl();
    const outside = as();
    const gtr = wl();
    const ltr = Rl();
    const intersects = zl();
    const simplifyRange = kl();
    const subset = xl();
    Ll.exports = {
        parse,
        valid,
        clean,
        inc,
        diff,
        major,
        minor,
        patch,
        prerelease,
        compare,
        rcompare,
        compareLoose,
        compareBuild,
        sort,
        rsort,
        gt: gt_1,
        lt: lt_1,
        eq,
        neq,
        gte,
        lte,
        cmp,
        coerce,
        Comparator,
        Range,
        satisfies,
        toComparators,
        maxSatisfying,
        minSatisfying,
        minVersion,
        validRange,
        outside,
        gtr,
        ltr,
        intersects,
        simplifyRange,
        subset,
        SemVer,
        re: Fe.re,
        src: Fe.src,
        tokens: Fe.t,
        SEMVER_SPEC_VERSION: is.SEMVER_SPEC_VERSION,
        RELEASE_TYPES: is.RELEASE_TYPES,
        compareIdentifiers: ls.compareIdentifiers,
        rcompareIdentifiers: ls.rcompareIdentifiers
    };
});
const jl = C(function(Ul) {
    Object.defineProperty(Ul, "__esModule", {
        value: true
    });
    Ul._globalThis = undefined;
    Ul._globalThis = typeof globalThis === "object" ? globalThis : global;
});
const ql = C(function(Ce) {
    const ZC = Ce && Ce.__createBinding || (Object.create ? (e, s, r, n = r)=>{
        Object.defineProperty(e, n, {
            enumerable: true,
            get: function() {
                return s[r];
            }
        });
    } : (e, s, r, n = r)=>{
        e[n] = s[r];
    });
    const ez = Ce && Ce.__exportStar || ((e, s)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) {
                ZC(s, e, r);
            }
        }
    });
    Object.defineProperty(Ce, "__esModule", {
        value: true
    });
    ez(jl(), Ce);
});
const Gl = C(function(ze) {
    const tz = ze && ze.__createBinding || (Object.create ? (e, s, r, n = r)=>{
        Object.defineProperty(e, n, {
            enumerable: true,
            get: function() {
                return s[r];
            }
        });
    } : (e, s, r, n = r)=>{
        e[n] = s[r];
    });
    const sz = ze && ze.__exportStar || ((e, s)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) {
                tz(s, e, r);
            }
        }
    });
    Object.defineProperty(ze, "__esModule", {
        value: true
    });
    sz(ql(), ze);
});
const zr = C(function(Bl) {
    Object.defineProperty(Bl, "__esModule", {
        value: true
    });
    Bl.VERSION = undefined;
    Bl.VERSION = "1.9.0";
});
const Xl = C(function(Wl) {
    Object.defineProperty(Wl, "__esModule", {
        value: true
    });
    Wl.isCompatible = Wl._makeCompatibilityCheck = undefined;
    const Fl = zr();
    const Kl = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    function Yl(e) {
        let s = new Set([
            e
        ]);
        let r = new Set;
        let n = e.match(Kl);
        if (!n) {
            return ()=>false;
        }
        let i = {
            major: +n[1],
            minor: +n[2],
            patch: +n[3],
            prerelease: n[4]
        };
        if (i.prerelease != null) {
            return function(h) {
                return h === e;
            };
        }
        function c(m) {
            r.add(m);
            return false;
        }
        function d(m) {
            s.add(m);
            return true;
        }
        return function(h) {
            if (s.has(h)) {
                return true;
            }
            if (r.has(h)) {
                return false;
            }
            let f = h.match(Kl);
            if (!f) {
                return c(h);
            }
            let w = {
                major: +f[1],
                minor: +f[2],
                patch: +f[3],
                prerelease: f[4]
            };
            if (w.prerelease != null) {
                return c(h);
            }
            if (i.major !== w.major) {
                return c(h);
            }
            if (i.major === 0) {
                if (i.minor === w.minor && i.patch <= w.patch) {
                    return d(h);
                }
                return c(h);
            }
            if (i.minor <= w.minor) {
                return d(h);
            }
            return c(h);
        };
    }
    Wl._makeCompatibilityCheck = Yl;
    Wl.isCompatible = Yl(Fl.VERSION);
});
const Oe = C(function(Zl) {
    Object.defineProperty(Zl, "__esModule", {
        value: true
    });
    Zl.unregisterGlobal = Zl.getGlobal = Zl.registerGlobal = undefined;
    const Ql = Gl();
    const te = zr();
    const Jl = Xl();
    const nz = te.VERSION.split(".")[0];
    const bt = Symbol.for(`opentelemetry.js.api.${nz}`);
    const Ql__globalThis = Ql._globalThis;
    function oz(e, s, r, n = false) {
        let c = Ql__globalThis[bt] = Ql__globalThis[bt] ?? {
            version: te.VERSION
        };
        if (!n && c[e]) {
            let d = Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
            r.error(d.stack || d.message);
            return false;
        }
        if (c.version !== te.VERSION) {
            let d = Error(`@opentelemetry/api: Registration of version v${c.version} for ${e} does not match previously registered API v${te.VERSION}`);
            r.error(d.stack || d.message);
            return false;
        }
        c[e] = s;
        r.debug(`@opentelemetry/api: Registered a global for ${e} v${te.VERSION}.`);
        return true;
    }
    Zl.registerGlobal = oz;
    function az(e) {
        let n = Ql__globalThis[bt]?.version;
        if (!n || !Jl.isCompatible(n)) {
            return;
        }
        return Ql__globalThis[bt]?.[e];
    }
    Zl.getGlobal = az;
    function iz(e, s) {
        s.debug(`@opentelemetry/api: Unregistering a global for ${e} v${te.VERSION}.`);
        let r = Ql__globalThis[bt];
        if (r) {
            delete r[e];
        }
    }
    Zl.unregisterGlobal = iz;
});
const oc = C(function(rc) {
    Object.defineProperty(rc, "__esModule", {
        value: true
    });
    rc.DiagComponentLogger = undefined;
    const tc = Oe();
    class sc {
        constructor(e){
            this._namespace = e.namespace || "DiagComponentLogger";
        }
        debug(...e) {
            return At("debug", this._namespace, e);
        }
        error(...e) {
            return At("error", this._namespace, e);
        }
        info(...e) {
            return At("info", this._namespace, e);
        }
        warn(...e) {
            return At("warn", this._namespace, e);
        }
        verbose(...e) {
            return At("verbose", this._namespace, e);
        }
    }
    rc.DiagComponentLogger = sc;
    function At(e, _namespace, r) {
        let n = tc.getGlobal("diag");
        if (!n) {
            return;
        }
        r.unshift(_namespace);
        return n[e](...r);
    }
});
const cs = C(function(ac) {
    Object.defineProperty(ac, "__esModule", {
        value: true
    });
    ac.DiagLogLevel = undefined;
    let dz;
    ((e)=>{
        e[e.NONE = 0] = "NONE";
        e[e.ERROR = 30] = "ERROR";
        e[e.WARN = 50] = "WARN";
        e[e.INFO = 60] = "INFO";
        e[e.DEBUG = 70] = "DEBUG";
        e[e.VERBOSE = 80] = "VERBOSE";
        e[e.ALL = 9999] = "ALL";
    })(dz = ac.DiagLogLevel || (ac.DiagLogLevel = {}));
});
const cc = C(function(ic) {
    Object.defineProperty(ic, "__esModule", {
        value: true
    });
    ic.createLogLevelDiagLogger = undefined;
    const L = cs();
    function hz(e, s) {
        if (e < L.DiagLogLevel.NONE) {
            e = L.DiagLogLevel.NONE;
        } else if (e > L.DiagLogLevel.ALL) {
            e = L.DiagLogLevel.ALL;
        }
        s = s || {};
        function r(n, i) {
            let c = s[n];
            if (typeof c === "function" && e >= i) {
                return c.bind(s);
            }
            return function() {};
        }
        return {
            error: r("error", L.DiagLogLevel.ERROR),
            warn: r("warn", L.DiagLogLevel.WARN),
            info: r("info", L.DiagLogLevel.INFO),
            debug: r("debug", L.DiagLogLevel.DEBUG),
            verbose: r("verbose", L.DiagLogLevel.VERBOSE)
        };
    }
    ic.createLogLevelDiagLogger = hz;
});
const ke = C(function(uc) {
    Object.defineProperty(uc, "__esModule", {
        value: true
    });
    uc.DiagAPI = undefined;
    const dc = oc();
    const hc = cc();
    const ds = cs();
    const fe = Oe();
    const uz = "diag";
    class kr {
        constructor(){
            function e(n) {
                return function(...i) {
                    let c = fe.getGlobal("diag");
                    if (!c) {
                        return;
                    }
                    return c[n](...i);
                };
            }
            let s = this;
            let r = (n, logLevel = {
                logLevel: ds.DiagLogLevel.INFO
            })=>{
                if (n === s) {
                    let w = Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                    s.error(w.stack ?? w.message);
                    return false;
                }
                if (typeof logLevel === "number") {
                    logLevel = {
                        logLevel
                    };
                }
                let h = fe.getGlobal("diag");
                let f = hc.createLogLevelDiagLogger(logLevel.logLevel ?? ds.DiagLogLevel.INFO, n);
                if (h && !logLevel.suppressOverrideMessage) {
                    let w = Error().stack ?? "<failed to generate stacktrace>";
                    h.warn(`Current logger will be overwritten from ${w}`);
                    f.warn(`Current logger will overwrite one already registered from ${w}`);
                }
                return fe.registerGlobal("diag", f, s, true);
            };
            s.setLogger = r;
            s.disable = ()=>{
                fe.unregisterGlobal(uz, s);
            };
            s.createComponentLogger = (n)=>new dc.DiagComponentLogger(n);
            s.verbose = e("verbose");
            s.debug = e("debug");
            s.info = e("info");
            s.warn = e("warn");
            s.error = e("error");
        }
        static instance() {
            if (!this._instance) {
                this._instance = new kr;
            }
            return this._instance;
        }
    }
    uc.DiagAPI = kr;
});
const gc = C(function(_c) {
    Object.defineProperty(_c, "__esModule", {
        value: true
    });
    _c.BaggageImpl = undefined;
    class Ye {
        constructor(e){
            this._entries = e ? new Map(e) : new Map;
        }
        getEntry(e) {
            let s = this._entries.get(e);
            if (!s) {
                return;
            }
            return {
                ...s
            };
        }
        getAllEntries() {
            return Array.from(this._entries.entries()).map(([e, s])=>[
                    e,
                    s
                ]);
        }
        setEntry(e, s) {
            let r = new Ye(this._entries);
            r._entries.set(e, s);
            return r;
        }
        removeEntry(e) {
            let s = new Ye(this._entries);
            s._entries.delete(e);
            return s;
        }
        removeEntries(...e) {
            let s = new Ye(this._entries);
            for (let r of e){
                s._entries.delete(r);
            }
            return s;
        }
        clear() {
            return new Ye;
        }
    }
    _c.BaggageImpl = Ye;
});
const Sc = C(function(fc) {
    Object.defineProperty(fc, "__esModule", {
        value: true
    });
    fc.baggageEntryMetadataSymbol = undefined;
    fc.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
});
const Nr = C(function(wc) {
    Object.defineProperty(wc, "__esModule", {
        value: true
    });
    wc.baggageEntryMetadataFromString = wc.createBaggage = undefined;
    const bc = ke();
    const Tc = gc();
    const Ac = Sc();
    const pz = bc.DiagAPI.instance();
    function mz(e = {}) {
        return new Tc.BaggageImpl(new Map(Object.entries(e)));
    }
    wc.createBaggage = mz;
    function gz(e) {
        if (typeof e !== "string") {
            pz.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
            e = "";
        }
        return {
            __TYPE__: Ac.baggageEntryMetadataSymbol,
            toString () {
                return e;
            }
        };
    }
    wc.baggageEntryMetadataFromString = gz;
});
const wt = C(function(Rc) {
    Object.defineProperty(Rc, "__esModule", {
        value: true
    });
    Rc.ROOT_CONTEXT = Rc.createContextKey = undefined;
    function Ez(e) {
        return Symbol.for(e);
    }
    Rc.createContextKey = Ez;
    class hs {
        constructor(e){
            let s = this;
            s._currentContext = e ? new Map(e) : new Map;
            s.getValue = (r)=>s._currentContext.get(r);
            s.setValue = (r, n)=>{
                let i = new hs(s._currentContext);
                i._currentContext.set(r, n);
                return i;
            };
            s.deleteValue = (r)=>{
                let n = new hs(s._currentContext);
                n._currentContext.delete(r);
                return n;
            };
        }
    }
    Rc.ROOT_CONTEXT = new hs;
});
const kc = C(function(zc) {
    Object.defineProperty(zc, "__esModule", {
        value: true
    });
    zc.DiagConsoleLogger = undefined;
    const Ir = [
        {
            n: "error",
            c: "error"
        },
        {
            n: "warn",
            c: "warn"
        },
        {
            n: "info",
            c: "info"
        },
        {
            n: "debug",
            c: "debug"
        },
        {
            n: "verbose",
            c: "trace"
        }
    ];
    class Cc {
        constructor(){
            function e(s) {
                return function(...r) {
                    if (console) {
                        let n = console[s];
                        if (typeof n !== "function") {
                            n = console.log;
                        }
                        if (typeof n === "function") {
                            return n.apply(console, r);
                        }
                    }
                };
            }
            for(let s = 0; s < Ir.length; s++){
                this[Ir[s].n] = e(Ir[s].c);
            }
        }
    }
    zc.DiagConsoleLogger = Cc;
});
const qr = C(function(Nc) {
    Object.defineProperty(Nc, "__esModule", {
        value: true
    });
    Nc.createNoopMeter = Nc.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = Nc.NOOP_OBSERVABLE_GAUGE_METRIC = Nc.NOOP_OBSERVABLE_COUNTER_METRIC = Nc.NOOP_UP_DOWN_COUNTER_METRIC = Nc.NOOP_HISTOGRAM_METRIC = Nc.NOOP_GAUGE_METRIC = Nc.NOOP_COUNTER_METRIC = Nc.NOOP_METER = Nc.NoopObservableUpDownCounterMetric = Nc.NoopObservableGaugeMetric = Nc.NoopObservableCounterMetric = Nc.NoopObservableMetric = Nc.NoopHistogramMetric = Nc.NoopGaugeMetric = Nc.NoopUpDownCounterMetric = Nc.NoopCounterMetric = Nc.NoopMetric = Nc.NoopMeter = undefined;
    class Mr {
        constructor(){}
        createGauge(e, s) {
            return Nc.NOOP_GAUGE_METRIC;
        }
        createHistogram(e, s) {
            return Nc.NOOP_HISTOGRAM_METRIC;
        }
        createCounter(e, s) {
            return Nc.NOOP_COUNTER_METRIC;
        }
        createUpDownCounter(e, s) {
            return Nc.NOOP_UP_DOWN_COUNTER_METRIC;
        }
        createObservableGauge(e, s) {
            return Nc.NOOP_OBSERVABLE_GAUGE_METRIC;
        }
        createObservableCounter(e, s) {
            return Nc.NOOP_OBSERVABLE_COUNTER_METRIC;
        }
        createObservableUpDownCounter(e, s) {
            return Nc.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
        }
        addBatchObservableCallback(e, s) {}
        removeBatchObservableCallback(e) {}
    }
    Nc.NoopMeter = Mr;
    class We {
    }
    Nc.NoopMetric = We;
    class Pr extends We {
        add(e, s) {}
    }
    Nc.NoopCounterMetric = Pr;
    class Dr extends We {
        add(e, s) {}
    }
    Nc.NoopUpDownCounterMetric = Dr;
    class xr extends We {
        record(e, s) {}
    }
    Nc.NoopGaugeMetric = xr;
    class Lr extends We {
        record(e, s) {}
    }
    Nc.NoopHistogramMetric = Lr;
    class yt {
        addCallback(e) {}
        removeCallback(e) {}
    }
    Nc.NoopObservableMetric = yt;
    class Ur extends yt {
    }
    Nc.NoopObservableCounterMetric = Ur;
    class Vr extends yt {
    }
    Nc.NoopObservableGaugeMetric = Vr;
    class jr extends yt {
    }
    Nc.NoopObservableUpDownCounterMetric = jr;
    Nc.NOOP_METER = new Mr;
    Nc.NOOP_COUNTER_METRIC = new Pr;
    Nc.NOOP_GAUGE_METRIC = new xr;
    Nc.NOOP_HISTOGRAM_METRIC = new Lr;
    Nc.NOOP_UP_DOWN_COUNTER_METRIC = new Dr;
    Nc.NOOP_OBSERVABLE_COUNTER_METRIC = new Ur;
    Nc.NOOP_OBSERVABLE_GAUGE_METRIC = new Vr;
    Nc.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new jr;
    function Tz() {
        return Nc.NOOP_METER;
    }
    Nc.createNoopMeter = Tz;
});
const Gc = C(function(qc) {
    Object.defineProperty(qc, "__esModule", {
        value: true
    });
    qc.ValueType = undefined;
    let Iz;
    ((e)=>{
        e[e.INT = 0] = "INT";
        e[e.DOUBLE = 1] = "DOUBLE";
    })(Iz = qc.ValueType || (qc.ValueType = {}));
});
const Br = C(function(Bc) {
    Object.defineProperty(Bc, "__esModule", {
        value: true
    });
    Bc.defaultTextMapSetter = Bc.defaultTextMapGetter = undefined;
    Bc.defaultTextMapGetter = {
        get (e, s) {
            if (e == null) {
                return;
            }
            return e[s];
        },
        keys (e) {
            if (e == null) {
                return [];
            }
            return Object.keys(e);
        }
    };
    Bc.defaultTextMapSetter = {
        set (e, s, r) {
            if (e == null) {
                return;
            }
            e[s] = r;
        }
    };
});
const $c = C(function(Yc) {
    Object.defineProperty(Yc, "__esModule", {
        value: true
    });
    Yc.NoopContextManager = undefined;
    const Kc = wt();
    class Fc {
        active() {
            return Kc.ROOT_CONTEXT;
        }
        with(e, s, r, ...n) {
            return s.call(r, ...n);
        }
        bind(e, s) {
            return s;
        }
        enable() {
            return this;
        }
        disable() {
            return this;
        }
    }
    Yc.NoopContextManager = Fc;
});
const Rt = C(function(Qc) {
    Object.defineProperty(Qc, "__esModule", {
        value: true
    });
    Qc.ContextAPI = undefined;
    const Xc = $c();
    const $e = Oe();
    const us = ke();
    const Hr = "context";
    const Pz = new Xc.NoopContextManager;
    class Kr {
        constructor(){}
        static getInstance() {
            if (!this._instance) {
                this._instance = new Kr;
            }
            return this._instance;
        }
        setGlobalContextManager(e) {
            return $e.registerGlobal(Hr, e, us.DiagAPI.instance());
        }
        active() {
            return this._getContextManager().active();
        }
        with(e, s, r, ...n) {
            return this._getContextManager().with(e, s, r, ...n);
        }
        bind(e, s) {
            return this._getContextManager().bind(e, s);
        }
        _getContextManager() {
            return $e.getGlobal(Hr) || Pz;
        }
        disable() {
            this._getContextManager().disable();
            $e.unregisterGlobal(Hr, us.DiagAPI.instance());
        }
    }
    Qc.ContextAPI = Kr;
});
const Yr = C(function(Zc) {
    Object.defineProperty(Zc, "__esModule", {
        value: true
    });
    Zc.TraceFlags = undefined;
    let Dz;
    ((e)=>{
        e[e.NONE = 0] = "NONE";
        e[e.SAMPLED = 1] = "SAMPLED";
    })(Dz = Zc.TraceFlags || (Zc.TraceFlags = {}));
});
const ps = C(function(td) {
    Object.defineProperty(td, "__esModule", {
        value: true
    });
    td.INVALID_SPAN_CONTEXT = td.INVALID_TRACEID = td.INVALID_SPANID = undefined;
    const ed = Yr();
    td.INVALID_SPANID = "0000000000000000";
    td.INVALID_TRACEID = "00000000000000000000000000000000";
    td.INVALID_SPAN_CONTEXT = {
        traceId: td.INVALID_TRACEID,
        spanId: td.INVALID_SPANID,
        traceFlags: ed.TraceFlags.NONE
    };
});
const _s = C(function(id) {
    Object.defineProperty(id, "__esModule", {
        value: true
    });
    id.NonRecordingSpan = undefined;
    const od = ps();
    class ad {
        constructor(e = od.INVALID_SPAN_CONTEXT){
            this._spanContext = e;
        }
        spanContext() {
            return this._spanContext;
        }
        setAttribute(e, s) {
            return this;
        }
        setAttributes(e) {
            return this;
        }
        addEvent(e, s) {
            return this;
        }
        addLink(e) {
            return this;
        }
        addLinks(e) {
            return this;
        }
        setStatus(e) {
            return this;
        }
        updateName(e) {
            return this;
        }
        end(e) {}
        isRecording() {
            return false;
        }
        recordException(e, s) {}
    }
    id.NonRecordingSpan = ad;
});
const Qr = C(function(pd) {
    Object.defineProperty(pd, "__esModule", {
        value: true
    });
    pd.getSpanContext = pd.setSpanContext = pd.deleteSpan = pd.setSpan = pd.getActiveSpan = pd.getSpan = undefined;
    const cd = wt();
    const dd = _s();
    const hd = Rt();
    const $r = cd.createContextKey("OpenTelemetry Context Key SPAN");
    function Xr(e) {
        return e.getValue($r) || undefined;
    }
    pd.getSpan = Xr;
    function xz() {
        return Xr(hd.ContextAPI.getInstance().active());
    }
    pd.getActiveSpan = xz;
    function ud(e, s) {
        return e.setValue($r, s);
    }
    pd.setSpan = ud;
    function Lz(e) {
        return e.deleteValue($r);
    }
    pd.deleteSpan = Lz;
    function Uz(e, s) {
        return ud(e, new dd.NonRecordingSpan(s));
    }
    pd.setSpanContext = Uz;
    function Vz(e) {
        return Xr(e)?.spanContext();
    }
    pd.getSpanContext = Vz;
});
const gs = C(function(Ed) {
    Object.defineProperty(Ed, "__esModule", {
        value: true
    });
    Ed.wrapSpanContext = Ed.isSpanContextValid = Ed.isValidSpanId = Ed.isValidTraceId = undefined;
    const ms = ps();
    const md = _s();
    const Kz = /^([0-9a-f]{32})$/i;
    const Fz = /^[0-9a-f]{16}$/i;
    function gd(e) {
        return Kz.test(e) && e !== ms.INVALID_TRACEID;
    }
    Ed.isValidTraceId = gd;
    function fd(e) {
        return Fz.test(e) && e !== ms.INVALID_SPANID;
    }
    Ed.isValidSpanId = fd;
    function Yz(e) {
        return gd(e.traceId) && fd(e.spanId);
    }
    Ed.isSpanContextValid = Yz;
    function Wz(e) {
        return new md.NonRecordingSpan(e);
    }
    Ed.wrapSpanContext = Wz;
});
const Zr = C(function(wd) {
    Object.defineProperty(wd, "__esModule", {
        value: true
    });
    wd.NoopTracer = undefined;
    const bd = Rt();
    const fs = Qr();
    const Xe = _s();
    const Td = gs();
    const Jr = bd.ContextAPI.getInstance();
    class Ad {
        startSpan(e, s, r = Jr.active()) {
            if (Boolean(s?.root)) {
                return new Xe.NonRecordingSpan;
            }
            let i = r && fs.getSpanContext(r);
            if (Zz(i) && Td.isSpanContextValid(i)) {
                return new Xe.NonRecordingSpan(i);
            } else {
                return new Xe.NonRecordingSpan;
            }
        }
        startActiveSpan(e, s, r, n) {
            let i;
            let c;
            let d;
            if (arguments.length < 2) {
                return;
            } else if (arguments.length === 2) {
                d = s;
            } else if (arguments.length === 3) {
                i = s;
                d = r;
            } else {
                i = s;
                c = r;
                d = n;
            }
            let m = c ?? Jr.active();
            let h = this.startSpan(e, i, m);
            let f = fs.setSpan(m, h);
            return Jr.with(f, d, undefined, h);
        }
    }
    wd.NoopTracer = Ad;
    function Zz(e) {
        return typeof e === "object" && typeof e.spanId === "string" && typeof e.traceId === "string" && typeof e.traceFlags === "number";
    }
});
const en = C(function(Cd) {
    Object.defineProperty(Cd, "__esModule", {
        value: true
    });
    Cd.ProxyTracer = undefined;
    const Rd = Zr();
    const eO = new Rd.NoopTracer;
    class vd {
        constructor(e, s, r, n){
            this._provider = e;
            this.name = s;
            this.version = r;
            this.options = n;
        }
        startSpan(e, s, r) {
            return this._getTracer().startSpan(e, s, r);
        }
        startActiveSpan(e, s, r, n) {
            let i = this._getTracer();
            return Reflect.apply(i.startActiveSpan, i, arguments);
        }
        _getTracer() {
            if (this._delegate) {
                return this._delegate;
            }
            let e = this._provider.getDelegateTracer(this.name, this.version, this.options);
            if (!e) {
                return eO;
            }
            this._delegate = e;
            return this._delegate;
        }
    }
    Cd.ProxyTracer = vd;
});
const Md = C(function(Nd) {
    Object.defineProperty(Nd, "__esModule", {
        value: true
    });
    Nd.NoopTracerProvider = undefined;
    const Od = Zr();
    class kd {
        getTracer(e, s, r) {
            return new Od.NoopTracer;
        }
    }
    Nd.NoopTracerProvider = kd;
});
const tn = C(function(Ld) {
    Object.defineProperty(Ld, "__esModule", {
        value: true
    });
    Ld.ProxyTracerProvider = undefined;
    const Pd = en();
    const Dd = Md();
    const tO = new Dd.NoopTracerProvider;
    class xd {
        getTracer(e, s, r) {
            return this.getDelegateTracer(e, s, r) ?? new Pd.ProxyTracer(this, e, s, r);
        }
        getDelegate() {
            return this._delegate ?? tO;
        }
        setDelegate(e) {
            this._delegate = e;
        }
        getDelegateTracer(e, s, r) {
            return this._delegate?.getTracer(e, s, r);
        }
    }
    Ld.ProxyTracerProvider = xd;
});
const jd = C(function(Vd) {
    Object.defineProperty(Vd, "__esModule", {
        value: true
    });
    Vd.SamplingDecision = undefined;
    let sO;
    ((e)=>{
        e[e.NOT_RECORD = 0] = "NOT_RECORD";
        e[e.RECORD = 1] = "RECORD";
        e[e.RECORD_AND_SAMPLED = 2] = "RECORD_AND_SAMPLED";
    })(sO = Vd.SamplingDecision || (Vd.SamplingDecision = {}));
});
const Gd = C(function(qd) {
    Object.defineProperty(qd, "__esModule", {
        value: true
    });
    qd.SpanKind = undefined;
    let rO;
    ((e)=>{
        e[e.INTERNAL = 0] = "INTERNAL";
        e[e.SERVER = 1] = "SERVER";
        e[e.CLIENT = 2] = "CLIENT";
        e[e.PRODUCER = 3] = "PRODUCER";
        e[e.CONSUMER = 4] = "CONSUMER";
    })(rO = qd.SpanKind || (qd.SpanKind = {}));
});
const Hd = C(function(Bd) {
    Object.defineProperty(Bd, "__esModule", {
        value: true
    });
    Bd.SpanStatusCode = undefined;
    let nO;
    ((e)=>{
        e[e.UNSET = 0] = "UNSET";
        e[e.OK = 1] = "OK";
        e[e.ERROR = 2] = "ERROR";
    })(nO = Bd.SpanStatusCode || (Bd.SpanStatusCode = {}));
});
const Yd = C(function(Kd) {
    Object.defineProperty(Kd, "__esModule", {
        value: true
    });
    Kd.validateValue = Kd.validateKey = undefined;
    const on = "[_0-9a-z-*/]";
    const oO = `[a-z]${on}{0,255}`;
    const aO = `[a-z0-9]${on}{0,240}@[a-z]${on}{0,13}`;
    const iO = new RegExp(`^(?:${oO}|${aO})$`);
    const lO = /^[ -~]{0,255}[!-~]$/;
    const cO = /,|=/;
    function dO(e) {
        return iO.test(e);
    }
    Kd.validateKey = dO;
    function hO(e) {
        return lO.test(e) && !cO.test(e);
    }
    Kd.validateValue = hO;
});
const Zd = C(function(Qd) {
    Object.defineProperty(Qd, "__esModule", {
        value: true
    });
    Qd.TraceStateImpl = undefined;
    const Es = Yd();
    const Wd = 32;
    const _O = 512;
    const $d = ",";
    const Xd = "=";
    class an {
        constructor(e){
            this._internalState = new Map;
            if (e) {
                this._parse(e);
            }
        }
        set(e, s) {
            let r = this._clone();
            if (r._internalState.has(e)) {
                r._internalState.delete(e);
            }
            r._internalState.set(e, s);
            return r;
        }
        unset(e) {
            let s = this._clone();
            s._internalState.delete(e);
            return s;
        }
        get(e) {
            return this._internalState.get(e);
        }
        serialize() {
            return this._keys().reduce((acc, item)=>{
                acc.push(item + Xd + this.get(item));
                return acc;
            }, []).join($d);
        }
        _parse(e) {
            if (e.length > _O) {
                return;
            }
            this._internalState = e.split($d).reverse().reduce((acc, item)=>{
                let n = item.trim();
                let i = n.indexOf(Xd);
                if (i !== -1) {
                    let c = n.slice(0, i);
                    let d = n.slice(i + 1, item.length);
                    if (Es.validateKey(c) && Es.validateValue(d)) {
                        acc.set(c, d);
                    }
                }
                return acc;
            }, new Map);
            if (this._internalState.size > Wd) {
                this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, Wd));
            }
        }
        _keys() {
            return Array.from(this._internalState.keys()).reverse();
        }
        _clone() {
            let e = new an;
            e._internalState = new Map(this._internalState);
            return e;
        }
    }
    Qd.TraceStateImpl = an;
});
const nh = C(function(sh) {
    Object.defineProperty(sh, "__esModule", {
        value: true
    });
    sh.createTraceState = undefined;
    const eh = Zd();
    function mO(e) {
        return new eh.TraceStateImpl(e);
    }
    sh.createTraceState = mO;
});
const lh = C(function(ah) {
    Object.defineProperty(ah, "__esModule", {
        value: true
    });
    ah.context = undefined;
    const oh = Rt();
    ah.context = oh.ContextAPI.getInstance();
});
const uh = C(function(dh) {
    Object.defineProperty(dh, "__esModule", {
        value: true
    });
    dh.diag = undefined;
    const ch = ke();
    dh.diag = ch.DiagAPI.instance();
});
const gh = C(function(_h) {
    Object.defineProperty(_h, "__esModule", {
        value: true
    });
    _h.NOOP_METER_PROVIDER = _h.NoopMeterProvider = undefined;
    const ph = qr();
    class ln {
        getMeter(e, s, r) {
            return ph.NOOP_METER;
        }
    }
    _h.NoopMeterProvider = ln;
    _h.NOOP_METER_PROVIDER = new ln;
});
const bh = C(function(Eh) {
    Object.defineProperty(Eh, "__esModule", {
        value: true
    });
    Eh.MetricsAPI = undefined;
    const fh = gh();
    const Qe = Oe();
    const Ss = ke();
    const cn = "metrics";
    class dn {
        constructor(){}
        static getInstance() {
            if (!this._instance) {
                this._instance = new dn;
            }
            return this._instance;
        }
        setGlobalMeterProvider(e) {
            return Qe.registerGlobal(cn, e, Ss.DiagAPI.instance());
        }
        getMeterProvider() {
            return Qe.getGlobal(cn) || fh.NOOP_METER_PROVIDER;
        }
        getMeter(e, s, r) {
            return this.getMeterProvider().getMeter(e, s, r);
        }
        disable() {
            Qe.unregisterGlobal(cn, Ss.DiagAPI.instance());
        }
    }
    Eh.MetricsAPI = dn;
});
const Rh = C(function(wh) {
    Object.defineProperty(wh, "__esModule", {
        value: true
    });
    wh.metrics = undefined;
    const Ah = bh();
    wh.metrics = Ah.MetricsAPI.getInstance();
});
const Oh = C(function(Ch) {
    Object.defineProperty(Ch, "__esModule", {
        value: true
    });
    Ch.NoopTextMapPropagator = undefined;
    class vh {
        inject(e, s) {}
        extract(e, s) {
            return e;
        }
        fields() {
            return [];
        }
    }
    Ch.NoopTextMapPropagator = vh;
});
const Dh = C(function(Mh) {
    Object.defineProperty(Mh, "__esModule", {
        value: true
    });
    Mh.deleteBaggage = Mh.setBaggage = Mh.getActiveBaggage = Mh.getBaggage = undefined;
    const kh = Rt();
    const Nh = wt();
    const hn = Nh.createContextKey("OpenTelemetry Baggage Key");
    function Ih(e) {
        return e.getValue(hn) || undefined;
    }
    Mh.getBaggage = Ih;
    function EO() {
        return Ih(kh.ContextAPI.getInstance().active());
    }
    Mh.getActiveBaggage = EO;
    function SO(e, s) {
        return e.setValue(hn, s);
    }
    Mh.setBaggage = SO;
    function bO(e) {
        return e.deleteValue(hn);
    }
    Mh.deleteBaggage = bO;
});
const jh = C(function(Uh) {
    Object.defineProperty(Uh, "__esModule", {
        value: true
    });
    Uh.PropagationAPI = undefined;
    const Je = Oe();
    const xh = Oh();
    const bs = Br();
    const Ee = Dh();
    const Lh = Nr();
    const Ts = ke();
    const un = "propagation";
    const yO = new xh.NoopTextMapPropagator;
    class pn {
        constructor(){
            this.createBaggage = Lh.createBaggage;
            this.getBaggage = Ee.getBaggage;
            this.getActiveBaggage = Ee.getActiveBaggage;
            this.setBaggage = Ee.setBaggage;
            this.deleteBaggage = Ee.deleteBaggage;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new pn;
            }
            return this._instance;
        }
        setGlobalPropagator(e) {
            return Je.registerGlobal(un, e, Ts.DiagAPI.instance());
        }
        inject(e, s, r = bs.defaultTextMapSetter) {
            return this._getGlobalPropagator().inject(e, s, r);
        }
        extract(e, s, r = bs.defaultTextMapGetter) {
            return this._getGlobalPropagator().extract(e, s, r);
        }
        fields() {
            return this._getGlobalPropagator().fields();
        }
        disable() {
            Je.unregisterGlobal(un, Ts.DiagAPI.instance());
        }
        _getGlobalPropagator() {
            return Je.getGlobal(un) || yO;
        }
    }
    Uh.PropagationAPI = pn;
});
const Hh = C(function(Gh) {
    Object.defineProperty(Gh, "__esModule", {
        value: true
    });
    Gh.propagation = undefined;
    const qh = jh();
    Gh.propagation = qh.PropagationAPI.getInstance();
});
const Yh = C(function(Kh) {
    Object.defineProperty(Kh, "__esModule", {
        value: true
    });
    Kh.TraceAPI = undefined;
    const Ze = Oe();
    const As = tn();
    const ws = gs();
    const se = Qr();
    const ys = ke();
    const _n = "trace";
    class mn {
        constructor(){
            this._proxyTracerProvider = new As.ProxyTracerProvider;
            this.wrapSpanContext = ws.wrapSpanContext;
            this.isSpanContextValid = ws.isSpanContextValid;
            this.deleteSpan = se.deleteSpan;
            this.getSpan = se.getSpan;
            this.getActiveSpan = se.getActiveSpan;
            this.getSpanContext = se.getSpanContext;
            this.setSpan = se.setSpan;
            this.setSpanContext = se.setSpanContext;
        }
        static getInstance() {
            if (!this._instance) {
                this._instance = new mn;
            }
            return this._instance;
        }
        setGlobalTracerProvider(e) {
            let s = Ze.registerGlobal(_n, this._proxyTracerProvider, ys.DiagAPI.instance());
            if (s) {
                this._proxyTracerProvider.setDelegate(e);
            }
            return s;
        }
        getTracerProvider() {
            return Ze.getGlobal(_n) || this._proxyTracerProvider;
        }
        getTracer(e, s) {
            return this.getTracerProvider().getTracer(e, s);
        }
        disable() {
            Ze.unregisterGlobal(_n, ys.DiagAPI.instance());
            this._proxyTracerProvider = new As.ProxyTracerProvider;
        }
    }
    Kh.TraceAPI = mn;
});
const Qh = C(function($h) {
    Object.defineProperty($h, "__esModule", {
        value: true
    });
    $h.trace = undefined;
    const Wh = Yh();
    $h.trace = Wh.TraceAPI.getInstance();
});
const Da = C(function(N) {
    Object.defineProperty(N, "__esModule", {
        value: true
    });
    N.trace = N.propagation = N.metrics = N.diag = N.context = N.INVALID_SPAN_CONTEXT = N.INVALID_TRACEID = N.INVALID_SPANID = N.isValidSpanId = N.isValidTraceId = N.isSpanContextValid = N.createTraceState = N.TraceFlags = N.SpanStatusCode = N.SpanKind = N.SamplingDecision = N.ProxyTracerProvider = N.ProxyTracer = N.defaultTextMapSetter = N.defaultTextMapGetter = N.ValueType = N.createNoopMeter = N.DiagLogLevel = N.DiagConsoleLogger = N.ROOT_CONTEXT = N.createContextKey = N.baggageEntryMetadataFromString = undefined;
    const RO = Nr();
    Object.defineProperty(N, "baggageEntryMetadataFromString", {
        enumerable: true,
        get: function() {
            return RO.baggageEntryMetadataFromString;
        }
    });
    const Jh = wt();
    Object.defineProperty(N, "createContextKey", {
        enumerable: true,
        get: function() {
            return Jh.createContextKey;
        }
    });
    Object.defineProperty(N, "ROOT_CONTEXT", {
        enumerable: true,
        get: function() {
            return Jh.ROOT_CONTEXT;
        }
    });
    const vO = kc();
    Object.defineProperty(N, "DiagConsoleLogger", {
        enumerable: true,
        get: function() {
            return vO.DiagConsoleLogger;
        }
    });
    const CO = cs();
    Object.defineProperty(N, "DiagLogLevel", {
        enumerable: true,
        get: function() {
            return CO.DiagLogLevel;
        }
    });
    const zO = qr();
    Object.defineProperty(N, "createNoopMeter", {
        enumerable: true,
        get: function() {
            return zO.createNoopMeter;
        }
    });
    const OO = Gc();
    Object.defineProperty(N, "ValueType", {
        enumerable: true,
        get: function() {
            return OO.ValueType;
        }
    });
    const Zh = Br();
    Object.defineProperty(N, "defaultTextMapGetter", {
        enumerable: true,
        get: function() {
            return Zh.defaultTextMapGetter;
        }
    });
    Object.defineProperty(N, "defaultTextMapSetter", {
        enumerable: true,
        get: function() {
            return Zh.defaultTextMapSetter;
        }
    });
    const kO = en();
    Object.defineProperty(N, "ProxyTracer", {
        enumerable: true,
        get: function() {
            return kO.ProxyTracer;
        }
    });
    const NO = tn();
    Object.defineProperty(N, "ProxyTracerProvider", {
        enumerable: true,
        get: function() {
            return NO.ProxyTracerProvider;
        }
    });
    const IO = jd();
    Object.defineProperty(N, "SamplingDecision", {
        enumerable: true,
        get: function() {
            return IO.SamplingDecision;
        }
    });
    const MO = Gd();
    Object.defineProperty(N, "SpanKind", {
        enumerable: true,
        get: function() {
            return MO.SpanKind;
        }
    });
    const PO = Hd();
    Object.defineProperty(N, "SpanStatusCode", {
        enumerable: true,
        get: function() {
            return PO.SpanStatusCode;
        }
    });
    const DO = Yr();
    Object.defineProperty(N, "TraceFlags", {
        enumerable: true,
        get: function() {
            return DO.TraceFlags;
        }
    });
    const xO = nh();
    Object.defineProperty(N, "createTraceState", {
        enumerable: true,
        get: function() {
            return xO.createTraceState;
        }
    });
    const gn = gs();
    Object.defineProperty(N, "isSpanContextValid", {
        enumerable: true,
        get: function() {
            return gn.isSpanContextValid;
        }
    });
    Object.defineProperty(N, "isValidTraceId", {
        enumerable: true,
        get: function() {
            return gn.isValidTraceId;
        }
    });
    Object.defineProperty(N, "isValidSpanId", {
        enumerable: true,
        get: function() {
            return gn.isValidSpanId;
        }
    });
    const fn = ps();
    Object.defineProperty(N, "INVALID_SPANID", {
        enumerable: true,
        get: function() {
            return fn.INVALID_SPANID;
        }
    });
    Object.defineProperty(N, "INVALID_TRACEID", {
        enumerable: true,
        get: function() {
            return fn.INVALID_TRACEID;
        }
    });
    Object.defineProperty(N, "INVALID_SPAN_CONTEXT", {
        enumerable: true,
        get: function() {
            return fn.INVALID_SPAN_CONTEXT;
        }
    });
    const Rs = lh();
    Object.defineProperty(N, "context", {
        enumerable: true,
        get: function() {
            return Rs.context;
        }
    });
    const vs = uh();
    Object.defineProperty(N, "diag", {
        enumerable: true,
        get: function() {
            return vs.diag;
        }
    });
    const Cs = Rh();
    Object.defineProperty(N, "metrics", {
        enumerable: true,
        get: function() {
            return Cs.metrics;
        }
    });
    const zs = Hh();
    Object.defineProperty(N, "propagation", {
        enumerable: true,
        get: function() {
            return zs.propagation;
        }
    });
    const Os = Qh();
    Object.defineProperty(N, "trace", {
        enumerable: true,
        get: function() {
            return Os.trace;
        }
    });
    N.default = {
        context: Rs.context,
        diag: vs.diag,
        metrics: Cs.metrics,
        propagation: zs.propagation,
        trace: Os.trace
    };
});
const En = C(function(eu) {
    Object.defineProperty(eu, "__esModule", {
        value: true
    });
    eu.createConstMap = undefined;
    function VO(e) {
        let s = {};
        let e_length = e.length;
        for(let n = 0; n < e_length; n++){
            let i = e[n];
            if (i) {
                s[String(i).toUpperCase().replace(/[-.]/g, "_")] = i;
            }
        }
        return s;
    }
    eu.createConstMap = VO;
});
const cf = C(function(tf) {
    Object.defineProperty(tf, "__esModule", {
        value: true
    });
    tf.SEMATTRS_NET_HOST_CARRIER_ICC = tf.SEMATTRS_NET_HOST_CARRIER_MNC = tf.SEMATTRS_NET_HOST_CARRIER_MCC = tf.SEMATTRS_NET_HOST_CARRIER_NAME = tf.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = tf.SEMATTRS_NET_HOST_CONNECTION_TYPE = tf.SEMATTRS_NET_HOST_NAME = tf.SEMATTRS_NET_HOST_PORT = tf.SEMATTRS_NET_HOST_IP = tf.SEMATTRS_NET_PEER_NAME = tf.SEMATTRS_NET_PEER_PORT = tf.SEMATTRS_NET_PEER_IP = tf.SEMATTRS_NET_TRANSPORT = tf.SEMATTRS_FAAS_INVOKED_REGION = tf.SEMATTRS_FAAS_INVOKED_PROVIDER = tf.SEMATTRS_FAAS_INVOKED_NAME = tf.SEMATTRS_FAAS_COLDSTART = tf.SEMATTRS_FAAS_CRON = tf.SEMATTRS_FAAS_TIME = tf.SEMATTRS_FAAS_DOCUMENT_NAME = tf.SEMATTRS_FAAS_DOCUMENT_TIME = tf.SEMATTRS_FAAS_DOCUMENT_OPERATION = tf.SEMATTRS_FAAS_DOCUMENT_COLLECTION = tf.SEMATTRS_FAAS_EXECUTION = tf.SEMATTRS_FAAS_TRIGGER = tf.SEMATTRS_EXCEPTION_ESCAPED = tf.SEMATTRS_EXCEPTION_STACKTRACE = tf.SEMATTRS_EXCEPTION_MESSAGE = tf.SEMATTRS_EXCEPTION_TYPE = tf.SEMATTRS_DB_SQL_TABLE = tf.SEMATTRS_DB_MONGODB_COLLECTION = tf.SEMATTRS_DB_REDIS_DATABASE_INDEX = tf.SEMATTRS_DB_HBASE_NAMESPACE = tf.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = tf.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = tf.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = tf.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = tf.SEMATTRS_DB_CASSANDRA_TABLE = tf.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = tf.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = tf.SEMATTRS_DB_CASSANDRA_KEYSPACE = tf.SEMATTRS_DB_MSSQL_INSTANCE_NAME = tf.SEMATTRS_DB_OPERATION = tf.SEMATTRS_DB_STATEMENT = tf.SEMATTRS_DB_NAME = tf.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = tf.SEMATTRS_DB_USER = tf.SEMATTRS_DB_CONNECTION_STRING = tf.SEMATTRS_DB_SYSTEM = tf.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = undefined;
    tf.SEMATTRS_MESSAGING_DESTINATION_KIND = tf.SEMATTRS_MESSAGING_DESTINATION = tf.SEMATTRS_MESSAGING_SYSTEM = tf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = tf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = tf.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = tf.SEMATTRS_AWS_DYNAMODB_COUNT = tf.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = tf.SEMATTRS_AWS_DYNAMODB_SEGMENT = tf.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = tf.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = tf.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = tf.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = tf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = tf.SEMATTRS_AWS_DYNAMODB_SELECT = tf.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = tf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = tf.SEMATTRS_AWS_DYNAMODB_LIMIT = tf.SEMATTRS_AWS_DYNAMODB_PROJECTION = tf.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = tf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = tf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = tf.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = tf.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = tf.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = tf.SEMATTRS_HTTP_CLIENT_IP = tf.SEMATTRS_HTTP_ROUTE = tf.SEMATTRS_HTTP_SERVER_NAME = tf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = tf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = tf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = tf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = tf.SEMATTRS_HTTP_USER_AGENT = tf.SEMATTRS_HTTP_FLAVOR = tf.SEMATTRS_HTTP_STATUS_CODE = tf.SEMATTRS_HTTP_SCHEME = tf.SEMATTRS_HTTP_HOST = tf.SEMATTRS_HTTP_TARGET = tf.SEMATTRS_HTTP_URL = tf.SEMATTRS_HTTP_METHOD = tf.SEMATTRS_CODE_LINENO = tf.SEMATTRS_CODE_FILEPATH = tf.SEMATTRS_CODE_NAMESPACE = tf.SEMATTRS_CODE_FUNCTION = tf.SEMATTRS_THREAD_NAME = tf.SEMATTRS_THREAD_ID = tf.SEMATTRS_ENDUSER_SCOPE = tf.SEMATTRS_ENDUSER_ROLE = tf.SEMATTRS_ENDUSER_ID = tf.SEMATTRS_PEER_SERVICE = undefined;
    tf.DBSYSTEMVALUES_FILEMAKER = tf.DBSYSTEMVALUES_DERBY = tf.DBSYSTEMVALUES_FIREBIRD = tf.DBSYSTEMVALUES_ADABAS = tf.DBSYSTEMVALUES_CACHE = tf.DBSYSTEMVALUES_EDB = tf.DBSYSTEMVALUES_FIRSTSQL = tf.DBSYSTEMVALUES_INGRES = tf.DBSYSTEMVALUES_HANADB = tf.DBSYSTEMVALUES_MAXDB = tf.DBSYSTEMVALUES_PROGRESS = tf.DBSYSTEMVALUES_HSQLDB = tf.DBSYSTEMVALUES_CLOUDSCAPE = tf.DBSYSTEMVALUES_HIVE = tf.DBSYSTEMVALUES_REDSHIFT = tf.DBSYSTEMVALUES_POSTGRESQL = tf.DBSYSTEMVALUES_DB2 = tf.DBSYSTEMVALUES_ORACLE = tf.DBSYSTEMVALUES_MYSQL = tf.DBSYSTEMVALUES_MSSQL = tf.DBSYSTEMVALUES_OTHER_SQL = tf.SemanticAttributes = tf.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = tf.SEMATTRS_MESSAGE_COMPRESSED_SIZE = tf.SEMATTRS_MESSAGE_ID = tf.SEMATTRS_MESSAGE_TYPE = tf.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = tf.SEMATTRS_RPC_JSONRPC_ERROR_CODE = tf.SEMATTRS_RPC_JSONRPC_REQUEST_ID = tf.SEMATTRS_RPC_JSONRPC_VERSION = tf.SEMATTRS_RPC_GRPC_STATUS_CODE = tf.SEMATTRS_RPC_METHOD = tf.SEMATTRS_RPC_SERVICE = tf.SEMATTRS_RPC_SYSTEM = tf.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = tf.SEMATTRS_MESSAGING_KAFKA_PARTITION = tf.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = tf.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = tf.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = tf.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = tf.SEMATTRS_MESSAGING_CONSUMER_ID = tf.SEMATTRS_MESSAGING_OPERATION = tf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = tf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = tf.SEMATTRS_MESSAGING_CONVERSATION_ID = tf.SEMATTRS_MESSAGING_MESSAGE_ID = tf.SEMATTRS_MESSAGING_URL = tf.SEMATTRS_MESSAGING_PROTOCOL_VERSION = tf.SEMATTRS_MESSAGING_PROTOCOL = tf.SEMATTRS_MESSAGING_TEMP_DESTINATION = undefined;
    tf.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = tf.FaasDocumentOperationValues = tf.FAASDOCUMENTOPERATIONVALUES_DELETE = tf.FAASDOCUMENTOPERATIONVALUES_EDIT = tf.FAASDOCUMENTOPERATIONVALUES_INSERT = tf.FaasTriggerValues = tf.FAASTRIGGERVALUES_OTHER = tf.FAASTRIGGERVALUES_TIMER = tf.FAASTRIGGERVALUES_PUBSUB = tf.FAASTRIGGERVALUES_HTTP = tf.FAASTRIGGERVALUES_DATASOURCE = tf.DbCassandraConsistencyLevelValues = tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = tf.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = tf.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = tf.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = tf.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = tf.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = tf.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = tf.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = tf.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = tf.DbSystemValues = tf.DBSYSTEMVALUES_COCKROACHDB = tf.DBSYSTEMVALUES_MEMCACHED = tf.DBSYSTEMVALUES_ELASTICSEARCH = tf.DBSYSTEMVALUES_GEODE = tf.DBSYSTEMVALUES_NEO4J = tf.DBSYSTEMVALUES_DYNAMODB = tf.DBSYSTEMVALUES_COSMOSDB = tf.DBSYSTEMVALUES_COUCHDB = tf.DBSYSTEMVALUES_COUCHBASE = tf.DBSYSTEMVALUES_REDIS = tf.DBSYSTEMVALUES_MONGODB = tf.DBSYSTEMVALUES_HBASE = tf.DBSYSTEMVALUES_CASSANDRA = tf.DBSYSTEMVALUES_COLDFUSION = tf.DBSYSTEMVALUES_H2 = tf.DBSYSTEMVALUES_VERTICA = tf.DBSYSTEMVALUES_TERADATA = tf.DBSYSTEMVALUES_SYBASE = tf.DBSYSTEMVALUES_SQLITE = tf.DBSYSTEMVALUES_POINTBASE = tf.DBSYSTEMVALUES_PERVASIVE = tf.DBSYSTEMVALUES_NETEZZA = tf.DBSYSTEMVALUES_MARIADB = tf.DBSYSTEMVALUES_INTERBASE = tf.DBSYSTEMVALUES_INSTANTDB = tf.DBSYSTEMVALUES_INFORMIX = undefined;
    tf.MESSAGINGOPERATIONVALUES_RECEIVE = tf.MessagingDestinationKindValues = tf.MESSAGINGDESTINATIONKINDVALUES_TOPIC = tf.MESSAGINGDESTINATIONKINDVALUES_QUEUE = tf.HttpFlavorValues = tf.HTTPFLAVORVALUES_QUIC = tf.HTTPFLAVORVALUES_SPDY = tf.HTTPFLAVORVALUES_HTTP_2_0 = tf.HTTPFLAVORVALUES_HTTP_1_1 = tf.HTTPFLAVORVALUES_HTTP_1_0 = tf.NetHostConnectionSubtypeValues = tf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_NR = tf.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = tf.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = tf.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = tf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = tf.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = tf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = tf.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = tf.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = tf.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = tf.NetHostConnectionTypeValues = tf.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = tf.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = tf.NETHOSTCONNECTIONTYPEVALUES_CELL = tf.NETHOSTCONNECTIONTYPEVALUES_WIRED = tf.NETHOSTCONNECTIONTYPEVALUES_WIFI = tf.NetTransportValues = tf.NETTRANSPORTVALUES_OTHER = tf.NETTRANSPORTVALUES_INPROC = tf.NETTRANSPORTVALUES_PIPE = tf.NETTRANSPORTVALUES_UNIX = tf.NETTRANSPORTVALUES_IP = tf.NETTRANSPORTVALUES_IP_UDP = tf.NETTRANSPORTVALUES_IP_TCP = tf.FaasInvokedProviderValues = tf.FAASINVOKEDPROVIDERVALUES_GCP = tf.FAASINVOKEDPROVIDERVALUES_AZURE = tf.FAASINVOKEDPROVIDERVALUES_AWS = undefined;
    tf.MessageTypeValues = tf.MESSAGETYPEVALUES_RECEIVED = tf.MESSAGETYPEVALUES_SENT = tf.RpcGrpcStatusCodeValues = tf.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = tf.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = tf.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = tf.RPCGRPCSTATUSCODEVALUES_INTERNAL = tf.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = tf.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = tf.RPCGRPCSTATUSCODEVALUES_ABORTED = tf.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = tf.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = tf.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = tf.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = tf.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = tf.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = tf.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = tf.RPCGRPCSTATUSCODEVALUES_UNKNOWN = tf.RPCGRPCSTATUSCODEVALUES_CANCELLED = tf.RPCGRPCSTATUSCODEVALUES_OK = tf.MessagingOperationValues = tf.MESSAGINGOPERATIONVALUES_PROCESS = undefined;
    const D = En();
    const su = "aws.lambda.invoked_arn";
    const ru = "db.system";
    const nu = "db.connection_string";
    const ou = "db.user";
    const au = "db.jdbc.driver_classname";
    const iu = "db.name";
    const lu = "db.statement";
    const cu = "db.operation";
    const du = "db.mssql.instance_name";
    const hu = "db.cassandra.keyspace";
    const uu = "db.cassandra.page_size";
    const pu = "db.cassandra.consistency_level";
    const _u = "db.cassandra.table";
    const mu = "db.cassandra.idempotence";
    const gu = "db.cassandra.speculative_execution_count";
    const fu = "db.cassandra.coordinator.id";
    const Eu = "db.cassandra.coordinator.dc";
    const Su = "db.hbase.namespace";
    const bu = "db.redis.database_index";
    const Tu = "db.mongodb.collection";
    const Au = "db.sql.table";
    const wu = "exception.type";
    const yu = "exception.message";
    const Ru = "exception.stacktrace";
    const vu = "exception.escaped";
    const Cu = "faas.trigger";
    const zu = "faas.execution";
    const Ou = "faas.document.collection";
    const ku = "faas.document.operation";
    const Nu = "faas.document.time";
    const Iu = "faas.document.name";
    const Pu = "faas.time";
    const Du = "faas.cron";
    const xu = "faas.coldstart";
    const Lu = "faas.invoked_name";
    const Uu = "faas.invoked_provider";
    const Vu = "faas.invoked_region";
    const ju = "net.transport";
    const qu = "net.peer.ip";
    const Gu = "net.peer.port";
    const Bu = "net.peer.name";
    const Hu = "net.host.ip";
    const Ku = "net.host.port";
    const Yu = "net.host.name";
    const Wu = "net.host.connection.type";
    const $u = "net.host.connection.subtype";
    const Xu = "net.host.carrier.name";
    const Ju = "net.host.carrier.mcc";
    const Zu = "net.host.carrier.mnc";
    const ep = "net.host.carrier.icc";
    const tp = "peer.service";
    const sp = "enduser.id";
    const rp = "enduser.role";
    const np = "enduser.scope";
    const op = "thread.id";
    const ap = "thread.name";
    const ip = "code.function";
    const cp = "code.namespace";
    const dp = "code.filepath";
    const hp = "code.lineno";
    const up = "http.method";
    const _p = "http.url";
    const mp = "http.target";
    const gp = "http.host";
    const Ep = "http.scheme";
    const Sp = "http.status_code";
    const bp = "http.flavor";
    const Tp = "http.user_agent";
    const Ap = "http.request_content_length";
    const wp = "http.request_content_length_uncompressed";
    const yp = "http.response_content_length";
    const Rp = "http.response_content_length_uncompressed";
    const vp = "http.server_name";
    const Cp = "http.route";
    const zp = "http.client_ip";
    const Op = "aws.dynamodb.table_names";
    const kp = "aws.dynamodb.consumed_capacity";
    const Np = "aws.dynamodb.item_collection_metrics";
    const Ip = "aws.dynamodb.provisioned_read_capacity";
    const Mp = "aws.dynamodb.provisioned_write_capacity";
    const Pp = "aws.dynamodb.consistent_read";
    const Dp = "aws.dynamodb.projection";
    const xp = "aws.dynamodb.limit";
    const Lp = "aws.dynamodb.attributes_to_get";
    const Up = "aws.dynamodb.index_name";
    const Vp = "aws.dynamodb.select";
    const jp = "aws.dynamodb.global_secondary_indexes";
    const qp = "aws.dynamodb.local_secondary_indexes";
    const Gp = "aws.dynamodb.exclusive_start_table";
    const Bp = "aws.dynamodb.table_count";
    const Hp = "aws.dynamodb.scan_forward";
    const Kp = "aws.dynamodb.segment";
    const Fp = "aws.dynamodb.total_segments";
    const Yp = "aws.dynamodb.count";
    const Wp = "aws.dynamodb.scanned_count";
    const $p = "aws.dynamodb.attribute_definitions";
    const Xp = "aws.dynamodb.global_secondary_index_updates";
    const Qp = "messaging.system";
    const Jp = "messaging.destination";
    const Zp = "messaging.destination_kind";
    const e_ = "messaging.temp_destination";
    const t_ = "messaging.protocol";
    const s_ = "messaging.protocol_version";
    const r_ = "messaging.url";
    const n_ = "messaging.message_id";
    const o_ = "messaging.conversation_id";
    const a_ = "messaging.message_payload_size_bytes";
    const i_ = "messaging.message_payload_compressed_size_bytes";
    const l_ = "messaging.operation";
    const c_ = "messaging.consumer_id";
    const d_ = "messaging.rabbitmq.routing_key";
    const u_ = "messaging.kafka.message_key";
    const p_ = "messaging.kafka.consumer_group";
    const __ = "messaging.kafka.client_id";
    const m_ = "messaging.kafka.partition";
    const g_ = "messaging.kafka.tombstone";
    const f_ = "rpc.system";
    const E_ = "rpc.service";
    const S_ = "rpc.method";
    const b_ = "rpc.grpc.status_code";
    const T_ = "rpc.jsonrpc.version";
    const A_ = "rpc.jsonrpc.request_id";
    const w_ = "rpc.jsonrpc.error_code";
    const y_ = "rpc.jsonrpc.error_message";
    const R_ = "message.type";
    const v_ = "message.id";
    const C_ = "message.compressed_size";
    const z_ = "message.uncompressed_size";
    tf.SEMATTRS_AWS_LAMBDA_INVOKED_ARN = su;
    tf.SEMATTRS_DB_SYSTEM = ru;
    tf.SEMATTRS_DB_CONNECTION_STRING = nu;
    tf.SEMATTRS_DB_USER = ou;
    tf.SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = au;
    tf.SEMATTRS_DB_NAME = iu;
    tf.SEMATTRS_DB_STATEMENT = lu;
    tf.SEMATTRS_DB_OPERATION = cu;
    tf.SEMATTRS_DB_MSSQL_INSTANCE_NAME = du;
    tf.SEMATTRS_DB_CASSANDRA_KEYSPACE = hu;
    tf.SEMATTRS_DB_CASSANDRA_PAGE_SIZE = uu;
    tf.SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = pu;
    tf.SEMATTRS_DB_CASSANDRA_TABLE = _u;
    tf.SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = mu;
    tf.SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = gu;
    tf.SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = fu;
    tf.SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = Eu;
    tf.SEMATTRS_DB_HBASE_NAMESPACE = Su;
    tf.SEMATTRS_DB_REDIS_DATABASE_INDEX = bu;
    tf.SEMATTRS_DB_MONGODB_COLLECTION = Tu;
    tf.SEMATTRS_DB_SQL_TABLE = Au;
    tf.SEMATTRS_EXCEPTION_TYPE = wu;
    tf.SEMATTRS_EXCEPTION_MESSAGE = yu;
    tf.SEMATTRS_EXCEPTION_STACKTRACE = Ru;
    tf.SEMATTRS_EXCEPTION_ESCAPED = vu;
    tf.SEMATTRS_FAAS_TRIGGER = Cu;
    tf.SEMATTRS_FAAS_EXECUTION = zu;
    tf.SEMATTRS_FAAS_DOCUMENT_COLLECTION = Ou;
    tf.SEMATTRS_FAAS_DOCUMENT_OPERATION = ku;
    tf.SEMATTRS_FAAS_DOCUMENT_TIME = Nu;
    tf.SEMATTRS_FAAS_DOCUMENT_NAME = Iu;
    tf.SEMATTRS_FAAS_TIME = Pu;
    tf.SEMATTRS_FAAS_CRON = Du;
    tf.SEMATTRS_FAAS_COLDSTART = xu;
    tf.SEMATTRS_FAAS_INVOKED_NAME = Lu;
    tf.SEMATTRS_FAAS_INVOKED_PROVIDER = Uu;
    tf.SEMATTRS_FAAS_INVOKED_REGION = Vu;
    tf.SEMATTRS_NET_TRANSPORT = ju;
    tf.SEMATTRS_NET_PEER_IP = qu;
    tf.SEMATTRS_NET_PEER_PORT = Gu;
    tf.SEMATTRS_NET_PEER_NAME = Bu;
    tf.SEMATTRS_NET_HOST_IP = Hu;
    tf.SEMATTRS_NET_HOST_PORT = Ku;
    tf.SEMATTRS_NET_HOST_NAME = Yu;
    tf.SEMATTRS_NET_HOST_CONNECTION_TYPE = Wu;
    tf.SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = $u;
    tf.SEMATTRS_NET_HOST_CARRIER_NAME = Xu;
    tf.SEMATTRS_NET_HOST_CARRIER_MCC = Ju;
    tf.SEMATTRS_NET_HOST_CARRIER_MNC = Zu;
    tf.SEMATTRS_NET_HOST_CARRIER_ICC = ep;
    tf.SEMATTRS_PEER_SERVICE = tp;
    tf.SEMATTRS_ENDUSER_ID = sp;
    tf.SEMATTRS_ENDUSER_ROLE = rp;
    tf.SEMATTRS_ENDUSER_SCOPE = np;
    tf.SEMATTRS_THREAD_ID = op;
    tf.SEMATTRS_THREAD_NAME = ap;
    tf.SEMATTRS_CODE_FUNCTION = ip;
    tf.SEMATTRS_CODE_NAMESPACE = cp;
    tf.SEMATTRS_CODE_FILEPATH = dp;
    tf.SEMATTRS_CODE_LINENO = hp;
    tf.SEMATTRS_HTTP_METHOD = up;
    tf.SEMATTRS_HTTP_URL = _p;
    tf.SEMATTRS_HTTP_TARGET = mp;
    tf.SEMATTRS_HTTP_HOST = gp;
    tf.SEMATTRS_HTTP_SCHEME = Ep;
    tf.SEMATTRS_HTTP_STATUS_CODE = Sp;
    tf.SEMATTRS_HTTP_FLAVOR = bp;
    tf.SEMATTRS_HTTP_USER_AGENT = Tp;
    tf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = Ap;
    tf.SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = wp;
    tf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = yp;
    tf.SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = Rp;
    tf.SEMATTRS_HTTP_SERVER_NAME = vp;
    tf.SEMATTRS_HTTP_ROUTE = Cp;
    tf.SEMATTRS_HTTP_CLIENT_IP = zp;
    tf.SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = Op;
    tf.SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = kp;
    tf.SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = Np;
    tf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = Ip;
    tf.SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = Mp;
    tf.SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = Pp;
    tf.SEMATTRS_AWS_DYNAMODB_PROJECTION = Dp;
    tf.SEMATTRS_AWS_DYNAMODB_LIMIT = xp;
    tf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = Lp;
    tf.SEMATTRS_AWS_DYNAMODB_INDEX_NAME = Up;
    tf.SEMATTRS_AWS_DYNAMODB_SELECT = Vp;
    tf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = jp;
    tf.SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = qp;
    tf.SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = Gp;
    tf.SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = Bp;
    tf.SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = Hp;
    tf.SEMATTRS_AWS_DYNAMODB_SEGMENT = Kp;
    tf.SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = Fp;
    tf.SEMATTRS_AWS_DYNAMODB_COUNT = Yp;
    tf.SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = Wp;
    tf.SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = $p;
    tf.SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = Xp;
    tf.SEMATTRS_MESSAGING_SYSTEM = Qp;
    tf.SEMATTRS_MESSAGING_DESTINATION = Jp;
    tf.SEMATTRS_MESSAGING_DESTINATION_KIND = Zp;
    tf.SEMATTRS_MESSAGING_TEMP_DESTINATION = e_;
    tf.SEMATTRS_MESSAGING_PROTOCOL = t_;
    tf.SEMATTRS_MESSAGING_PROTOCOL_VERSION = s_;
    tf.SEMATTRS_MESSAGING_URL = r_;
    tf.SEMATTRS_MESSAGING_MESSAGE_ID = n_;
    tf.SEMATTRS_MESSAGING_CONVERSATION_ID = o_;
    tf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = a_;
    tf.SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = i_;
    tf.SEMATTRS_MESSAGING_OPERATION = l_;
    tf.SEMATTRS_MESSAGING_CONSUMER_ID = c_;
    tf.SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = d_;
    tf.SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = u_;
    tf.SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = p_;
    tf.SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = __;
    tf.SEMATTRS_MESSAGING_KAFKA_PARTITION = m_;
    tf.SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = g_;
    tf.SEMATTRS_RPC_SYSTEM = f_;
    tf.SEMATTRS_RPC_SERVICE = E_;
    tf.SEMATTRS_RPC_METHOD = S_;
    tf.SEMATTRS_RPC_GRPC_STATUS_CODE = b_;
    tf.SEMATTRS_RPC_JSONRPC_VERSION = T_;
    tf.SEMATTRS_RPC_JSONRPC_REQUEST_ID = A_;
    tf.SEMATTRS_RPC_JSONRPC_ERROR_CODE = w_;
    tf.SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = y_;
    tf.SEMATTRS_MESSAGE_TYPE = R_;
    tf.SEMATTRS_MESSAGE_ID = v_;
    tf.SEMATTRS_MESSAGE_COMPRESSED_SIZE = C_;
    tf.SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = z_;
    tf.SemanticAttributes = D.createConstMap([
        su,
        ru,
        nu,
        ou,
        au,
        iu,
        lu,
        cu,
        du,
        hu,
        uu,
        pu,
        _u,
        mu,
        gu,
        fu,
        Eu,
        Su,
        bu,
        Tu,
        Au,
        wu,
        yu,
        Ru,
        vu,
        Cu,
        zu,
        Ou,
        ku,
        Nu,
        Iu,
        Pu,
        Du,
        xu,
        Lu,
        Uu,
        Vu,
        ju,
        qu,
        Gu,
        Bu,
        Hu,
        Ku,
        Yu,
        Wu,
        $u,
        Xu,
        Ju,
        Zu,
        ep,
        tp,
        sp,
        rp,
        np,
        op,
        ap,
        ip,
        cp,
        dp,
        hp,
        up,
        _p,
        mp,
        gp,
        Ep,
        Sp,
        bp,
        Tp,
        Ap,
        wp,
        yp,
        Rp,
        vp,
        Cp,
        zp,
        Op,
        kp,
        Np,
        Ip,
        Mp,
        Pp,
        Dp,
        xp,
        Lp,
        Up,
        Vp,
        jp,
        qp,
        Gp,
        Bp,
        Hp,
        Kp,
        Fp,
        Yp,
        Wp,
        $p,
        Xp,
        Qp,
        Jp,
        Zp,
        e_,
        t_,
        s_,
        r_,
        n_,
        o_,
        a_,
        i_,
        l_,
        c_,
        d_,
        u_,
        p_,
        __,
        m_,
        g_,
        f_,
        E_,
        S_,
        b_,
        T_,
        A_,
        w_,
        y_,
        R_,
        v_,
        C_,
        z_
    ]);
    const O_ = "other_sql";
    const k_ = "mssql";
    const N_ = "mysql";
    const I_ = "oracle";
    const M_ = "db2";
    const P_ = "postgresql";
    const D_ = "redshift";
    const x_ = "hive";
    const L_ = "cloudscape";
    const U_ = "hsqldb";
    const V_ = "progress";
    const j_ = "maxdb";
    const G_ = "hanadb";
    const B_ = "ingres";
    const H_ = "firstsql";
    const F_ = "edb";
    const Y_ = "cache";
    const W_ = "adabas";
    const $_ = "firebird";
    const X_ = "derby";
    const Q_ = "filemaker";
    const J_ = "informix";
    const Z_ = "instantdb";
    const em = "interbase";
    const tm = "mariadb";
    const sm = "netezza";
    const rm = "pervasive";
    const nm = "pointbase";
    const om = "sqlite";
    const am = "sybase";
    const im = "teradata";
    const lm = "vertica";
    const cm = "h2";
    const dm = "coldfusion";
    const hm = "cassandra";
    const um = "hbase";
    const pm = "mongodb";
    const _m = "redis";
    const mm = "couchbase";
    const gm = "couchdb";
    const fm = "cosmosdb";
    const Em = "dynamodb";
    const Sm = "neo4j";
    const bm = "geode";
    const Tm = "elasticsearch";
    const Am = "memcached";
    const wm = "cockroachdb";
    tf.DBSYSTEMVALUES_OTHER_SQL = O_;
    tf.DBSYSTEMVALUES_MSSQL = k_;
    tf.DBSYSTEMVALUES_MYSQL = N_;
    tf.DBSYSTEMVALUES_ORACLE = I_;
    tf.DBSYSTEMVALUES_DB2 = M_;
    tf.DBSYSTEMVALUES_POSTGRESQL = P_;
    tf.DBSYSTEMVALUES_REDSHIFT = D_;
    tf.DBSYSTEMVALUES_HIVE = x_;
    tf.DBSYSTEMVALUES_CLOUDSCAPE = L_;
    tf.DBSYSTEMVALUES_HSQLDB = U_;
    tf.DBSYSTEMVALUES_PROGRESS = V_;
    tf.DBSYSTEMVALUES_MAXDB = j_;
    tf.DBSYSTEMVALUES_HANADB = G_;
    tf.DBSYSTEMVALUES_INGRES = B_;
    tf.DBSYSTEMVALUES_FIRSTSQL = H_;
    tf.DBSYSTEMVALUES_EDB = F_;
    tf.DBSYSTEMVALUES_CACHE = Y_;
    tf.DBSYSTEMVALUES_ADABAS = W_;
    tf.DBSYSTEMVALUES_FIREBIRD = $_;
    tf.DBSYSTEMVALUES_DERBY = X_;
    tf.DBSYSTEMVALUES_FILEMAKER = Q_;
    tf.DBSYSTEMVALUES_INFORMIX = J_;
    tf.DBSYSTEMVALUES_INSTANTDB = Z_;
    tf.DBSYSTEMVALUES_INTERBASE = em;
    tf.DBSYSTEMVALUES_MARIADB = tm;
    tf.DBSYSTEMVALUES_NETEZZA = sm;
    tf.DBSYSTEMVALUES_PERVASIVE = rm;
    tf.DBSYSTEMVALUES_POINTBASE = nm;
    tf.DBSYSTEMVALUES_SQLITE = om;
    tf.DBSYSTEMVALUES_SYBASE = am;
    tf.DBSYSTEMVALUES_TERADATA = im;
    tf.DBSYSTEMVALUES_VERTICA = lm;
    tf.DBSYSTEMVALUES_H2 = cm;
    tf.DBSYSTEMVALUES_COLDFUSION = dm;
    tf.DBSYSTEMVALUES_CASSANDRA = hm;
    tf.DBSYSTEMVALUES_HBASE = um;
    tf.DBSYSTEMVALUES_MONGODB = pm;
    tf.DBSYSTEMVALUES_REDIS = _m;
    tf.DBSYSTEMVALUES_COUCHBASE = mm;
    tf.DBSYSTEMVALUES_COUCHDB = gm;
    tf.DBSYSTEMVALUES_COSMOSDB = fm;
    tf.DBSYSTEMVALUES_DYNAMODB = Em;
    tf.DBSYSTEMVALUES_NEO4J = Sm;
    tf.DBSYSTEMVALUES_GEODE = bm;
    tf.DBSYSTEMVALUES_ELASTICSEARCH = Tm;
    tf.DBSYSTEMVALUES_MEMCACHED = Am;
    tf.DBSYSTEMVALUES_COCKROACHDB = wm;
    tf.DbSystemValues = D.createConstMap([
        O_,
        k_,
        N_,
        I_,
        M_,
        P_,
        D_,
        x_,
        L_,
        U_,
        V_,
        j_,
        G_,
        B_,
        H_,
        F_,
        Y_,
        W_,
        $_,
        X_,
        Q_,
        J_,
        Z_,
        em,
        tm,
        sm,
        rm,
        nm,
        om,
        am,
        im,
        lm,
        cm,
        dm,
        hm,
        um,
        pm,
        _m,
        mm,
        gm,
        fm,
        Em,
        Sm,
        bm,
        Tm,
        Am,
        wm
    ]);
    const ym = "all";
    const Rm = "each_quorum";
    const vm = "quorum";
    const Cm = "local_quorum";
    const zm = "one";
    const Om = "two";
    const km = "three";
    const Nm = "local_one";
    const Im = "any";
    const Mm = "serial";
    const Pm = "local_serial";
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_ALL = ym;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = Rm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = vm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = Cm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_ONE = zm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_TWO = Om;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_THREE = km;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = Nm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_ANY = Im;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = Mm;
    tf.DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = Pm;
    tf.DbCassandraConsistencyLevelValues = D.createConstMap([
        ym,
        Rm,
        vm,
        Cm,
        zm,
        Om,
        km,
        Nm,
        Im,
        Mm,
        Pm
    ]);
    const Dm = "datasource";
    const xm = "http";
    const Lm = "pubsub";
    const Um = "timer";
    const Vm = "other";
    tf.FAASTRIGGERVALUES_DATASOURCE = Dm;
    tf.FAASTRIGGERVALUES_HTTP = xm;
    tf.FAASTRIGGERVALUES_PUBSUB = Lm;
    tf.FAASTRIGGERVALUES_TIMER = Um;
    tf.FAASTRIGGERVALUES_OTHER = Vm;
    tf.FaasTriggerValues = D.createConstMap([
        Dm,
        xm,
        Lm,
        Um,
        Vm
    ]);
    const jm = "insert";
    const qm = "edit";
    const Gm = "delete";
    tf.FAASDOCUMENTOPERATIONVALUES_INSERT = jm;
    tf.FAASDOCUMENTOPERATIONVALUES_EDIT = qm;
    tf.FAASDOCUMENTOPERATIONVALUES_DELETE = Gm;
    tf.FaasDocumentOperationValues = D.createConstMap([
        jm,
        qm,
        Gm
    ]);
    const Hm = "alibaba_cloud";
    const Km = "aws";
    const Fm = "azure";
    const Ym = "gcp";
    tf.FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = Hm;
    tf.FAASINVOKEDPROVIDERVALUES_AWS = Km;
    tf.FAASINVOKEDPROVIDERVALUES_AZURE = Fm;
    tf.FAASINVOKEDPROVIDERVALUES_GCP = Ym;
    tf.FaasInvokedProviderValues = D.createConstMap([
        Hm,
        Km,
        Fm,
        Ym
    ]);
    const Wm = "ip_tcp";
    const $m = "ip_udp";
    const Xm = "ip";
    const Qm = "unix";
    const Jm = "pipe";
    const Zm = "inproc";
    const eg = "other";
    tf.NETTRANSPORTVALUES_IP_TCP = Wm;
    tf.NETTRANSPORTVALUES_IP_UDP = $m;
    tf.NETTRANSPORTVALUES_IP = Xm;
    tf.NETTRANSPORTVALUES_UNIX = Qm;
    tf.NETTRANSPORTVALUES_PIPE = Jm;
    tf.NETTRANSPORTVALUES_INPROC = Zm;
    tf.NETTRANSPORTVALUES_OTHER = eg;
    tf.NetTransportValues = D.createConstMap([
        Wm,
        $m,
        Xm,
        Qm,
        Jm,
        Zm,
        eg
    ]);
    const tg = "wifi";
    const sg = "wired";
    const rg = "cell";
    const ng = "unavailable";
    const og = "unknown";
    tf.NETHOSTCONNECTIONTYPEVALUES_WIFI = tg;
    tf.NETHOSTCONNECTIONTYPEVALUES_WIRED = sg;
    tf.NETHOSTCONNECTIONTYPEVALUES_CELL = rg;
    tf.NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = ng;
    tf.NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = og;
    tf.NetHostConnectionTypeValues = D.createConstMap([
        tg,
        sg,
        rg,
        ng,
        og
    ]);
    const ag = "gprs";
    const ig = "edge";
    const lg = "umts";
    const cg = "cdma";
    const dg = "evdo_0";
    const hg = "evdo_a";
    const ug = "cdma2000_1xrtt";
    const pg = "hsdpa";
    const _g = "hsupa";
    const mg = "hspa";
    const gg = "iden";
    const fg = "evdo_b";
    const Eg = "lte";
    const Sg = "ehrpd";
    const bg = "hspap";
    const Tg = "gsm";
    const Ag = "td_scdma";
    const wg = "iwlan";
    const yg = "nr";
    const Rg = "nrnsa";
    const vg = "lte_ca";
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = ag;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = ig;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = lg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = cg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = dg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = hg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = ug;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = pg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = _g;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = mg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = gg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = fg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE = Eg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = Sg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = bg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_GSM = Tg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = Ag;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = wg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_NR = yg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = Rg;
    tf.NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = vg;
    tf.NetHostConnectionSubtypeValues = D.createConstMap([
        ag,
        ig,
        lg,
        cg,
        dg,
        hg,
        ug,
        pg,
        _g,
        mg,
        gg,
        fg,
        Eg,
        Sg,
        bg,
        Tg,
        Ag,
        wg,
        yg,
        Rg,
        vg
    ]);
    const HTTP_1_0 = "1.0";
    const HTTP_1_1 = "1.1";
    const HTTP_2_0 = "2.0";
    const SPDY = "SPDY";
    const QUIC = "QUIC";
    tf.HTTPFLAVORVALUES_HTTP_1_0 = HTTP_1_0;
    tf.HTTPFLAVORVALUES_HTTP_1_1 = HTTP_1_1;
    tf.HTTPFLAVORVALUES_HTTP_2_0 = HTTP_2_0;
    tf.HTTPFLAVORVALUES_SPDY = SPDY;
    tf.HTTPFLAVORVALUES_QUIC = QUIC;
    tf.HttpFlavorValues = {
        HTTP_1_0,
        HTTP_1_1,
        HTTP_2_0,
        SPDY,
        QUIC
    };
    const Ig = "queue";
    const Mg = "topic";
    tf.MESSAGINGDESTINATIONKINDVALUES_QUEUE = Ig;
    tf.MESSAGINGDESTINATIONKINDVALUES_TOPIC = Mg;
    tf.MessagingDestinationKindValues = D.createConstMap([
        Ig,
        Mg
    ]);
    const Pg = "receive";
    const Dg = "process";
    tf.MESSAGINGOPERATIONVALUES_RECEIVE = Pg;
    tf.MESSAGINGOPERATIONVALUES_PROCESS = Dg;
    tf.MessagingOperationValues = D.createConstMap([
        Pg,
        Dg
    ]);
    const OK_1 = 0;
    const CANCELLED = 1;
    const UNKNOWN = 2;
    const INVALID_ARGUMENT = 3;
    const DEADLINE_EXCEEDED = 4;
    const NOT_FOUND = 5;
    const ALREADY_EXISTS = 6;
    const PERMISSION_DENIED = 7;
    const RESOURCE_EXHAUSTED = 8;
    const FAILED_PRECONDITION = 9;
    const ABORTED = 10;
    const OUT_OF_RANGE = 11;
    const UNIMPLEMENTED = 12;
    const INTERNAL = 13;
    const UNAVAILABLE = 14;
    const DATA_LOSS = 15;
    const UNAUTHENTICATED = 16;
    tf.RPCGRPCSTATUSCODEVALUES_OK = OK_1;
    tf.RPCGRPCSTATUSCODEVALUES_CANCELLED = CANCELLED;
    tf.RPCGRPCSTATUSCODEVALUES_UNKNOWN = UNKNOWN;
    tf.RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = INVALID_ARGUMENT;
    tf.RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = DEADLINE_EXCEEDED;
    tf.RPCGRPCSTATUSCODEVALUES_NOT_FOUND = NOT_FOUND;
    tf.RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = ALREADY_EXISTS;
    tf.RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = PERMISSION_DENIED;
    tf.RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = RESOURCE_EXHAUSTED;
    tf.RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = FAILED_PRECONDITION;
    tf.RPCGRPCSTATUSCODEVALUES_ABORTED = ABORTED;
    tf.RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = OUT_OF_RANGE;
    tf.RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = UNIMPLEMENTED;
    tf.RPCGRPCSTATUSCODEVALUES_INTERNAL = INTERNAL;
    tf.RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = UNAVAILABLE;
    tf.RPCGRPCSTATUSCODEVALUES_DATA_LOSS = DATA_LOSS;
    tf.RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = UNAUTHENTICATED;
    tf.RpcGrpcStatusCodeValues = {
        OK: OK_1,
        CANCELLED,
        UNKNOWN,
        INVALID_ARGUMENT,
        DEADLINE_EXCEEDED,
        NOT_FOUND,
        ALREADY_EXISTS,
        PERMISSION_DENIED,
        RESOURCE_EXHAUSTED,
        FAILED_PRECONDITION,
        ABORTED,
        OUT_OF_RANGE,
        UNIMPLEMENTED,
        INTERNAL,
        UNAVAILABLE,
        DATA_LOSS,
        UNAUTHENTICATED
    };
    const Zg = "SENT";
    const ef = "RECEIVED";
    tf.MESSAGETYPEVALUES_SENT = Zg;
    tf.MESSAGETYPEVALUES_RECEIVED = ef;
    tf.MessageTypeValues = D.createConstMap([
        Zg,
        ef
    ]);
});
const df = C(function(Ne) {
    const BP = Ne && Ne.__createBinding || (Object.create ? (e, s, r, n = r)=>{
        let i = Object.getOwnPropertyDescriptor(s, r);
        if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) {
            i = {
                enumerable: true,
                get: function() {
                    return s[r];
                }
            };
        }
        Object.defineProperty(e, n, i);
    } : (e, s, r, n = r)=>{
        e[n] = s[r];
    });
    const HP = Ne && Ne.__exportStar || ((e, s)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) {
                BP(s, e, r);
            }
        }
    });
    Object.defineProperty(Ne, "__esModule", {
        value: true
    });
    HP(cf(), Ne);
});
const GS = C(function(US) {
    Object.defineProperty(US, "__esModule", {
        value: true
    });
    US.SEMRESATTRS_K8S_STATEFULSET_NAME = US.SEMRESATTRS_K8S_STATEFULSET_UID = US.SEMRESATTRS_K8S_DEPLOYMENT_NAME = US.SEMRESATTRS_K8S_DEPLOYMENT_UID = US.SEMRESATTRS_K8S_REPLICASET_NAME = US.SEMRESATTRS_K8S_REPLICASET_UID = US.SEMRESATTRS_K8S_CONTAINER_NAME = US.SEMRESATTRS_K8S_POD_NAME = US.SEMRESATTRS_K8S_POD_UID = US.SEMRESATTRS_K8S_NAMESPACE_NAME = US.SEMRESATTRS_K8S_NODE_UID = US.SEMRESATTRS_K8S_NODE_NAME = US.SEMRESATTRS_K8S_CLUSTER_NAME = US.SEMRESATTRS_HOST_IMAGE_VERSION = US.SEMRESATTRS_HOST_IMAGE_ID = US.SEMRESATTRS_HOST_IMAGE_NAME = US.SEMRESATTRS_HOST_ARCH = US.SEMRESATTRS_HOST_TYPE = US.SEMRESATTRS_HOST_NAME = US.SEMRESATTRS_HOST_ID = US.SEMRESATTRS_FAAS_MAX_MEMORY = US.SEMRESATTRS_FAAS_INSTANCE = US.SEMRESATTRS_FAAS_VERSION = US.SEMRESATTRS_FAAS_ID = US.SEMRESATTRS_FAAS_NAME = US.SEMRESATTRS_DEVICE_MODEL_NAME = US.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = US.SEMRESATTRS_DEVICE_ID = US.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = US.SEMRESATTRS_CONTAINER_IMAGE_TAG = US.SEMRESATTRS_CONTAINER_IMAGE_NAME = US.SEMRESATTRS_CONTAINER_RUNTIME = US.SEMRESATTRS_CONTAINER_ID = US.SEMRESATTRS_CONTAINER_NAME = US.SEMRESATTRS_AWS_LOG_STREAM_ARNS = US.SEMRESATTRS_AWS_LOG_STREAM_NAMES = US.SEMRESATTRS_AWS_LOG_GROUP_ARNS = US.SEMRESATTRS_AWS_LOG_GROUP_NAMES = US.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = US.SEMRESATTRS_AWS_ECS_TASK_REVISION = US.SEMRESATTRS_AWS_ECS_TASK_FAMILY = US.SEMRESATTRS_AWS_ECS_TASK_ARN = US.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = US.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = US.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = US.SEMRESATTRS_CLOUD_PLATFORM = US.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = US.SEMRESATTRS_CLOUD_REGION = US.SEMRESATTRS_CLOUD_ACCOUNT_ID = US.SEMRESATTRS_CLOUD_PROVIDER = undefined;
    US.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = US.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = US.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = US.CLOUDPLATFORMVALUES_AZURE_AKS = US.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = US.CLOUDPLATFORMVALUES_AZURE_VM = US.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = US.CLOUDPLATFORMVALUES_AWS_LAMBDA = US.CLOUDPLATFORMVALUES_AWS_EKS = US.CLOUDPLATFORMVALUES_AWS_ECS = US.CLOUDPLATFORMVALUES_AWS_EC2 = US.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = US.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = US.CloudProviderValues = US.CLOUDPROVIDERVALUES_GCP = US.CLOUDPROVIDERVALUES_AZURE = US.CLOUDPROVIDERVALUES_AWS = US.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = US.SemanticResourceAttributes = US.SEMRESATTRS_WEBENGINE_DESCRIPTION = US.SEMRESATTRS_WEBENGINE_VERSION = US.SEMRESATTRS_WEBENGINE_NAME = US.SEMRESATTRS_TELEMETRY_AUTO_VERSION = US.SEMRESATTRS_TELEMETRY_SDK_VERSION = US.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = US.SEMRESATTRS_TELEMETRY_SDK_NAME = US.SEMRESATTRS_SERVICE_VERSION = US.SEMRESATTRS_SERVICE_INSTANCE_ID = US.SEMRESATTRS_SERVICE_NAMESPACE = US.SEMRESATTRS_SERVICE_NAME = US.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = US.SEMRESATTRS_PROCESS_RUNTIME_VERSION = US.SEMRESATTRS_PROCESS_RUNTIME_NAME = US.SEMRESATTRS_PROCESS_OWNER = US.SEMRESATTRS_PROCESS_COMMAND_ARGS = US.SEMRESATTRS_PROCESS_COMMAND_LINE = US.SEMRESATTRS_PROCESS_COMMAND = US.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = US.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = US.SEMRESATTRS_PROCESS_PID = US.SEMRESATTRS_OS_VERSION = US.SEMRESATTRS_OS_NAME = US.SEMRESATTRS_OS_DESCRIPTION = US.SEMRESATTRS_OS_TYPE = US.SEMRESATTRS_K8S_CRONJOB_NAME = US.SEMRESATTRS_K8S_CRONJOB_UID = US.SEMRESATTRS_K8S_JOB_NAME = US.SEMRESATTRS_K8S_JOB_UID = US.SEMRESATTRS_K8S_DAEMONSET_NAME = US.SEMRESATTRS_K8S_DAEMONSET_UID = undefined;
    US.TelemetrySdkLanguageValues = US.TELEMETRYSDKLANGUAGEVALUES_WEBJS = US.TELEMETRYSDKLANGUAGEVALUES_RUBY = US.TELEMETRYSDKLANGUAGEVALUES_PYTHON = US.TELEMETRYSDKLANGUAGEVALUES_PHP = US.TELEMETRYSDKLANGUAGEVALUES_NODEJS = US.TELEMETRYSDKLANGUAGEVALUES_JAVA = US.TELEMETRYSDKLANGUAGEVALUES_GO = US.TELEMETRYSDKLANGUAGEVALUES_ERLANG = US.TELEMETRYSDKLANGUAGEVALUES_DOTNET = US.TELEMETRYSDKLANGUAGEVALUES_CPP = US.OsTypeValues = US.OSTYPEVALUES_Z_OS = US.OSTYPEVALUES_SOLARIS = US.OSTYPEVALUES_AIX = US.OSTYPEVALUES_HPUX = US.OSTYPEVALUES_DRAGONFLYBSD = US.OSTYPEVALUES_OPENBSD = US.OSTYPEVALUES_NETBSD = US.OSTYPEVALUES_FREEBSD = US.OSTYPEVALUES_DARWIN = US.OSTYPEVALUES_LINUX = US.OSTYPEVALUES_WINDOWS = US.HostArchValues = US.HOSTARCHVALUES_X86 = US.HOSTARCHVALUES_PPC64 = US.HOSTARCHVALUES_PPC32 = US.HOSTARCHVALUES_IA64 = US.HOSTARCHVALUES_ARM64 = US.HOSTARCHVALUES_ARM32 = US.HOSTARCHVALUES_AMD64 = US.AwsEcsLaunchtypeValues = US.AWSECSLAUNCHTYPEVALUES_FARGATE = US.AWSECSLAUNCHTYPEVALUES_EC2 = US.CloudPlatformValues = US.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = US.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = US.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = US.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = undefined;
    const X = En();
    const hf = "cloud.provider";
    const uf = "cloud.account.id";
    const _f = "cloud.region";
    const mf = "cloud.availability_zone";
    const gf = "cloud.platform";
    const ff = "aws.ecs.container.arn";
    const Ef = "aws.ecs.cluster.arn";
    const Sf = "aws.ecs.launchtype";
    const bf = "aws.ecs.task.arn";
    const Tf = "aws.ecs.task.family";
    const Af = "aws.ecs.task.revision";
    const wf = "aws.eks.cluster.arn";
    const yf = "aws.log.group.names";
    const Rf = "aws.log.group.arns";
    const vf = "aws.log.stream.names";
    const Cf = "aws.log.stream.arns";
    const zf = "container.name";
    const kf = "container.id";
    const Nf = "container.runtime";
    const If = "container.image.name";
    const Mf = "container.image.tag";
    const Pf = "deployment.environment";
    const Df = "device.id";
    const xf = "device.model.identifier";
    const Lf = "device.model.name";
    const Uf = "faas.name";
    const Vf = "faas.id";
    const jf = "faas.version";
    const qf = "faas.instance";
    const Gf = "faas.max_memory";
    const Bf = "host.id";
    const Hf = "host.name";
    const Kf = "host.type";
    const Ff = "host.arch";
    const Yf = "host.image.name";
    const Wf = "host.image.id";
    const $f = "host.image.version";
    const Xf = "k8s.cluster.name";
    const Qf = "k8s.node.name";
    const Jf = "k8s.node.uid";
    const Zf = "k8s.namespace.name";
    const eE = "k8s.pod.uid";
    const tE = "k8s.pod.name";
    const sE = "k8s.container.name";
    const rE = "k8s.replicaset.uid";
    const nE = "k8s.replicaset.name";
    const oE = "k8s.deployment.uid";
    const aE = "k8s.deployment.name";
    const iE = "k8s.statefulset.uid";
    const lE = "k8s.statefulset.name";
    const cE = "k8s.daemonset.uid";
    const dE = "k8s.daemonset.name";
    const hE = "k8s.job.uid";
    const uE = "k8s.job.name";
    const pE = "k8s.cronjob.uid";
    const _E = "k8s.cronjob.name";
    const mE = "os.type";
    const gE = "os.description";
    const fE = "os.name";
    const EE = "os.version";
    const SE = "process.pid";
    const bE = "process.executable.name";
    const TE = "process.executable.path";
    const AE = "process.command";
    const wE = "process.command_line";
    const yE = "process.command_args";
    const RE = "process.owner";
    const vE = "process.runtime.name";
    const CE = "process.runtime.version";
    const zE = "process.runtime.description";
    const OE = "service.name";
    const kE = "service.namespace";
    const NE = "service.instance.id";
    const IE = "service.version";
    const ME = "telemetry.sdk.name";
    const PE = "telemetry.sdk.language";
    const DE = "telemetry.sdk.version";
    const xE = "telemetry.auto.version";
    const LE = "webengine.name";
    const UE = "webengine.version";
    const VE = "webengine.description";
    US.SEMRESATTRS_CLOUD_PROVIDER = hf;
    US.SEMRESATTRS_CLOUD_ACCOUNT_ID = uf;
    US.SEMRESATTRS_CLOUD_REGION = _f;
    US.SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = mf;
    US.SEMRESATTRS_CLOUD_PLATFORM = gf;
    US.SEMRESATTRS_AWS_ECS_CONTAINER_ARN = ff;
    US.SEMRESATTRS_AWS_ECS_CLUSTER_ARN = Ef;
    US.SEMRESATTRS_AWS_ECS_LAUNCHTYPE = Sf;
    US.SEMRESATTRS_AWS_ECS_TASK_ARN = bf;
    US.SEMRESATTRS_AWS_ECS_TASK_FAMILY = Tf;
    US.SEMRESATTRS_AWS_ECS_TASK_REVISION = Af;
    US.SEMRESATTRS_AWS_EKS_CLUSTER_ARN = wf;
    US.SEMRESATTRS_AWS_LOG_GROUP_NAMES = yf;
    US.SEMRESATTRS_AWS_LOG_GROUP_ARNS = Rf;
    US.SEMRESATTRS_AWS_LOG_STREAM_NAMES = vf;
    US.SEMRESATTRS_AWS_LOG_STREAM_ARNS = Cf;
    US.SEMRESATTRS_CONTAINER_NAME = zf;
    US.SEMRESATTRS_CONTAINER_ID = kf;
    US.SEMRESATTRS_CONTAINER_RUNTIME = Nf;
    US.SEMRESATTRS_CONTAINER_IMAGE_NAME = If;
    US.SEMRESATTRS_CONTAINER_IMAGE_TAG = Mf;
    US.SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = Pf;
    US.SEMRESATTRS_DEVICE_ID = Df;
    US.SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = xf;
    US.SEMRESATTRS_DEVICE_MODEL_NAME = Lf;
    US.SEMRESATTRS_FAAS_NAME = Uf;
    US.SEMRESATTRS_FAAS_ID = Vf;
    US.SEMRESATTRS_FAAS_VERSION = jf;
    US.SEMRESATTRS_FAAS_INSTANCE = qf;
    US.SEMRESATTRS_FAAS_MAX_MEMORY = Gf;
    US.SEMRESATTRS_HOST_ID = Bf;
    US.SEMRESATTRS_HOST_NAME = Hf;
    US.SEMRESATTRS_HOST_TYPE = Kf;
    US.SEMRESATTRS_HOST_ARCH = Ff;
    US.SEMRESATTRS_HOST_IMAGE_NAME = Yf;
    US.SEMRESATTRS_HOST_IMAGE_ID = Wf;
    US.SEMRESATTRS_HOST_IMAGE_VERSION = $f;
    US.SEMRESATTRS_K8S_CLUSTER_NAME = Xf;
    US.SEMRESATTRS_K8S_NODE_NAME = Qf;
    US.SEMRESATTRS_K8S_NODE_UID = Jf;
    US.SEMRESATTRS_K8S_NAMESPACE_NAME = Zf;
    US.SEMRESATTRS_K8S_POD_UID = eE;
    US.SEMRESATTRS_K8S_POD_NAME = tE;
    US.SEMRESATTRS_K8S_CONTAINER_NAME = sE;
    US.SEMRESATTRS_K8S_REPLICASET_UID = rE;
    US.SEMRESATTRS_K8S_REPLICASET_NAME = nE;
    US.SEMRESATTRS_K8S_DEPLOYMENT_UID = oE;
    US.SEMRESATTRS_K8S_DEPLOYMENT_NAME = aE;
    US.SEMRESATTRS_K8S_STATEFULSET_UID = iE;
    US.SEMRESATTRS_K8S_STATEFULSET_NAME = lE;
    US.SEMRESATTRS_K8S_DAEMONSET_UID = cE;
    US.SEMRESATTRS_K8S_DAEMONSET_NAME = dE;
    US.SEMRESATTRS_K8S_JOB_UID = hE;
    US.SEMRESATTRS_K8S_JOB_NAME = uE;
    US.SEMRESATTRS_K8S_CRONJOB_UID = pE;
    US.SEMRESATTRS_K8S_CRONJOB_NAME = _E;
    US.SEMRESATTRS_OS_TYPE = mE;
    US.SEMRESATTRS_OS_DESCRIPTION = gE;
    US.SEMRESATTRS_OS_NAME = fE;
    US.SEMRESATTRS_OS_VERSION = EE;
    US.SEMRESATTRS_PROCESS_PID = SE;
    US.SEMRESATTRS_PROCESS_EXECUTABLE_NAME = bE;
    US.SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TE;
    US.SEMRESATTRS_PROCESS_COMMAND = AE;
    US.SEMRESATTRS_PROCESS_COMMAND_LINE = wE;
    US.SEMRESATTRS_PROCESS_COMMAND_ARGS = yE;
    US.SEMRESATTRS_PROCESS_OWNER = RE;
    US.SEMRESATTRS_PROCESS_RUNTIME_NAME = vE;
    US.SEMRESATTRS_PROCESS_RUNTIME_VERSION = CE;
    US.SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = zE;
    US.SEMRESATTRS_SERVICE_NAME = OE;
    US.SEMRESATTRS_SERVICE_NAMESPACE = kE;
    US.SEMRESATTRS_SERVICE_INSTANCE_ID = NE;
    US.SEMRESATTRS_SERVICE_VERSION = IE;
    US.SEMRESATTRS_TELEMETRY_SDK_NAME = ME;
    US.SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = PE;
    US.SEMRESATTRS_TELEMETRY_SDK_VERSION = DE;
    US.SEMRESATTRS_TELEMETRY_AUTO_VERSION = xE;
    US.SEMRESATTRS_WEBENGINE_NAME = LE;
    US.SEMRESATTRS_WEBENGINE_VERSION = UE;
    US.SEMRESATTRS_WEBENGINE_DESCRIPTION = VE;
    US.SemanticResourceAttributes = X.createConstMap([
        hf,
        uf,
        _f,
        mf,
        gf,
        ff,
        Ef,
        Sf,
        bf,
        Tf,
        Af,
        wf,
        yf,
        Rf,
        vf,
        Cf,
        zf,
        kf,
        Nf,
        If,
        Mf,
        Pf,
        Df,
        xf,
        Lf,
        Uf,
        Vf,
        jf,
        qf,
        Gf,
        Bf,
        Hf,
        Kf,
        Ff,
        Yf,
        Wf,
        $f,
        Xf,
        Qf,
        Jf,
        Zf,
        eE,
        tE,
        sE,
        rE,
        nE,
        oE,
        aE,
        iE,
        lE,
        cE,
        dE,
        hE,
        uE,
        pE,
        _E,
        mE,
        gE,
        fE,
        EE,
        SE,
        bE,
        TE,
        AE,
        wE,
        yE,
        RE,
        vE,
        CE,
        zE,
        OE,
        kE,
        NE,
        IE,
        ME,
        PE,
        DE,
        xE,
        LE,
        UE,
        VE
    ]);
    const jE = "alibaba_cloud";
    const GE = "aws";
    const BE = "azure";
    const HE = "gcp";
    US.CLOUDPROVIDERVALUES_ALIBABA_CLOUD = jE;
    US.CLOUDPROVIDERVALUES_AWS = GE;
    US.CLOUDPROVIDERVALUES_AZURE = BE;
    US.CLOUDPROVIDERVALUES_GCP = HE;
    US.CloudProviderValues = X.createConstMap([
        jE,
        GE,
        BE,
        HE
    ]);
    const KE = "alibaba_cloud_ecs";
    const FE = "alibaba_cloud_fc";
    const YE = "aws_ec2";
    const WE = "aws_ecs";
    const $E = "aws_eks";
    const XE = "aws_lambda";
    const QE = "aws_elastic_beanstalk";
    const JE = "azure_vm";
    const ZE = "azure_container_instances";
    const eS = "azure_aks";
    const tS = "azure_functions";
    const sS = "azure_app_service";
    const rS = "gcp_compute_engine";
    const nS = "gcp_cloud_run";
    const oS = "gcp_kubernetes_engine";
    const aS = "gcp_cloud_functions";
    const iS = "gcp_app_engine";
    US.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = KE;
    US.CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = FE;
    US.CLOUDPLATFORMVALUES_AWS_EC2 = YE;
    US.CLOUDPLATFORMVALUES_AWS_ECS = WE;
    US.CLOUDPLATFORMVALUES_AWS_EKS = $E;
    US.CLOUDPLATFORMVALUES_AWS_LAMBDA = XE;
    US.CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = QE;
    US.CLOUDPLATFORMVALUES_AZURE_VM = JE;
    US.CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = ZE;
    US.CLOUDPLATFORMVALUES_AZURE_AKS = eS;
    US.CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = tS;
    US.CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = sS;
    US.CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = rS;
    US.CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = nS;
    US.CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = oS;
    US.CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = aS;
    US.CLOUDPLATFORMVALUES_GCP_APP_ENGINE = iS;
    US.CloudPlatformValues = X.createConstMap([
        KE,
        FE,
        YE,
        WE,
        $E,
        XE,
        QE,
        JE,
        ZE,
        eS,
        tS,
        sS,
        rS,
        nS,
        oS,
        aS,
        iS
    ]);
    const lS = "ec2";
    const cS = "fargate";
    US.AWSECSLAUNCHTYPEVALUES_EC2 = lS;
    US.AWSECSLAUNCHTYPEVALUES_FARGATE = cS;
    US.AwsEcsLaunchtypeValues = X.createConstMap([
        lS,
        cS
    ]);
    const dS = "amd64";
    const hS = "arm32";
    const uS = "arm64";
    const pS = "ia64";
    const _S = "ppc32";
    const mS = "ppc64";
    const gS = "x86";
    US.HOSTARCHVALUES_AMD64 = dS;
    US.HOSTARCHVALUES_ARM32 = hS;
    US.HOSTARCHVALUES_ARM64 = uS;
    US.HOSTARCHVALUES_IA64 = pS;
    US.HOSTARCHVALUES_PPC32 = _S;
    US.HOSTARCHVALUES_PPC64 = mS;
    US.HOSTARCHVALUES_X86 = gS;
    US.HostArchValues = X.createConstMap([
        dS,
        hS,
        uS,
        pS,
        _S,
        mS,
        gS
    ]);
    const fS = "windows";
    const ES = "linux";
    const SS = "darwin";
    const bS = "freebsd";
    const TS = "netbsd";
    const AS = "openbsd";
    const wS = "dragonflybsd";
    const yS = "hpux";
    const RS = "aix";
    const vS = "solaris";
    const CS = "z_os";
    US.OSTYPEVALUES_WINDOWS = fS;
    US.OSTYPEVALUES_LINUX = ES;
    US.OSTYPEVALUES_DARWIN = SS;
    US.OSTYPEVALUES_FREEBSD = bS;
    US.OSTYPEVALUES_NETBSD = TS;
    US.OSTYPEVALUES_OPENBSD = AS;
    US.OSTYPEVALUES_DRAGONFLYBSD = wS;
    US.OSTYPEVALUES_HPUX = yS;
    US.OSTYPEVALUES_AIX = RS;
    US.OSTYPEVALUES_SOLARIS = vS;
    US.OSTYPEVALUES_Z_OS = CS;
    US.OsTypeValues = X.createConstMap([
        fS,
        ES,
        SS,
        bS,
        TS,
        AS,
        wS,
        yS,
        RS,
        vS,
        CS
    ]);
    const zS = "cpp";
    const OS = "dotnet";
    const kS = "erlang";
    const NS = "go";
    const IS = "java";
    const MS = "nodejs";
    const PS = "php";
    const DS = "python";
    const xS = "ruby";
    const LS = "webjs";
    US.TELEMETRYSDKLANGUAGEVALUES_CPP = zS;
    US.TELEMETRYSDKLANGUAGEVALUES_DOTNET = OS;
    US.TELEMETRYSDKLANGUAGEVALUES_ERLANG = kS;
    US.TELEMETRYSDKLANGUAGEVALUES_GO = NS;
    US.TELEMETRYSDKLANGUAGEVALUES_JAVA = IS;
    US.TELEMETRYSDKLANGUAGEVALUES_NODEJS = MS;
    US.TELEMETRYSDKLANGUAGEVALUES_PHP = PS;
    US.TELEMETRYSDKLANGUAGEVALUES_PYTHON = DS;
    US.TELEMETRYSDKLANGUAGEVALUES_RUBY = xS;
    US.TELEMETRYSDKLANGUAGEVALUES_WEBJS = LS;
    US.TelemetrySdkLanguageValues = X.createConstMap([
        zS,
        OS,
        kS,
        NS,
        IS,
        MS,
        PS,
        DS,
        xS,
        LS
    ]);
});
const BS = C(function(Me) {
    const SL = Me && Me.__createBinding || (Object.create ? (e, s, r, n = r)=>{
        let i = Object.getOwnPropertyDescriptor(s, r);
        if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) {
            i = {
                enumerable: true,
                get: function() {
                    return s[r];
                }
            };
        }
        Object.defineProperty(e, n, i);
    } : (e, s, r, n = r)=>{
        e[n] = s[r];
    });
    const bL = Me && Me.__exportStar || ((e, s)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) {
                SL(s, e, r);
            }
        }
    });
    Object.defineProperty(Me, "__esModule", {
        value: true
    });
    bL(GS(), Me);
});
const WS = C(function(HS) {
    Object.defineProperty(HS, "__esModule", {
        value: true
    });
    HS.ATTR_EXCEPTION_TYPE = HS.ATTR_EXCEPTION_STACKTRACE = HS.ATTR_EXCEPTION_MESSAGE = HS.ATTR_EXCEPTION_ESCAPED = HS.ERROR_TYPE_VALUE_OTHER = HS.ATTR_ERROR_TYPE = HS.DOTNET_GC_HEAP_GENERATION_VALUE_POH = HS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = HS.ATTR_DOTNET_GC_HEAP_GENERATION = HS.DB_SYSTEM_NAME_VALUE_POSTGRESQL = HS.DB_SYSTEM_NAME_VALUE_MYSQL = HS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = HS.DB_SYSTEM_NAME_VALUE_MARIADB = HS.ATTR_DB_SYSTEM_NAME = HS.ATTR_DB_STORED_PROCEDURE_NAME = HS.ATTR_DB_RESPONSE_STATUS_CODE = HS.ATTR_DB_QUERY_TEXT = HS.ATTR_DB_QUERY_SUMMARY = HS.ATTR_DB_OPERATION_NAME = HS.ATTR_DB_OPERATION_BATCH_SIZE = HS.ATTR_DB_NAMESPACE = HS.ATTR_DB_COLLECTION_NAME = HS.ATTR_CODE_STACKTRACE = HS.ATTR_CODE_LINE_NUMBER = HS.ATTR_CODE_FUNCTION_NAME = HS.ATTR_CODE_FILE_PATH = HS.ATTR_CODE_COLUMN_NUMBER = HS.ATTR_CLIENT_PORT = HS.ATTR_CLIENT_ADDRESS = HS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = HS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = HS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = HS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = HS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = HS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = HS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = HS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = HS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = HS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = undefined;
    HS.OTEL_STATUS_CODE_VALUE_ERROR = HS.ATTR_OTEL_STATUS_CODE = HS.ATTR_OTEL_SCOPE_VERSION = HS.ATTR_OTEL_SCOPE_NAME = HS.NETWORK_TYPE_VALUE_IPV6 = HS.NETWORK_TYPE_VALUE_IPV4 = HS.ATTR_NETWORK_TYPE = HS.NETWORK_TRANSPORT_VALUE_UNIX = HS.NETWORK_TRANSPORT_VALUE_UDP = HS.NETWORK_TRANSPORT_VALUE_TCP = HS.NETWORK_TRANSPORT_VALUE_QUIC = HS.NETWORK_TRANSPORT_VALUE_PIPE = HS.ATTR_NETWORK_TRANSPORT = HS.ATTR_NETWORK_PROTOCOL_VERSION = HS.ATTR_NETWORK_PROTOCOL_NAME = HS.ATTR_NETWORK_PEER_PORT = HS.ATTR_NETWORK_PEER_ADDRESS = HS.ATTR_NETWORK_LOCAL_PORT = HS.ATTR_NETWORK_LOCAL_ADDRESS = HS.JVM_THREAD_STATE_VALUE_WAITING = HS.JVM_THREAD_STATE_VALUE_TIMED_WAITING = HS.JVM_THREAD_STATE_VALUE_TERMINATED = HS.JVM_THREAD_STATE_VALUE_RUNNABLE = HS.JVM_THREAD_STATE_VALUE_NEW = HS.JVM_THREAD_STATE_VALUE_BLOCKED = HS.ATTR_JVM_THREAD_STATE = HS.ATTR_JVM_THREAD_DAEMON = HS.JVM_MEMORY_TYPE_VALUE_NON_HEAP = HS.JVM_MEMORY_TYPE_VALUE_HEAP = HS.ATTR_JVM_MEMORY_TYPE = HS.ATTR_JVM_MEMORY_POOL_NAME = HS.ATTR_JVM_GC_NAME = HS.ATTR_JVM_GC_ACTION = HS.ATTR_HTTP_ROUTE = HS.ATTR_HTTP_RESPONSE_STATUS_CODE = HS.ATTR_HTTP_RESPONSE_HEADER = HS.ATTR_HTTP_REQUEST_RESEND_COUNT = HS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = HS.HTTP_REQUEST_METHOD_VALUE_TRACE = HS.HTTP_REQUEST_METHOD_VALUE_PUT = HS.HTTP_REQUEST_METHOD_VALUE_POST = HS.HTTP_REQUEST_METHOD_VALUE_PATCH = HS.HTTP_REQUEST_METHOD_VALUE_OPTIONS = HS.HTTP_REQUEST_METHOD_VALUE_HEAD = HS.HTTP_REQUEST_METHOD_VALUE_GET = HS.HTTP_REQUEST_METHOD_VALUE_DELETE = HS.HTTP_REQUEST_METHOD_VALUE_CONNECT = HS.HTTP_REQUEST_METHOD_VALUE_OTHER = HS.ATTR_HTTP_REQUEST_METHOD = HS.ATTR_HTTP_REQUEST_HEADER = undefined;
    HS.ATTR_USER_AGENT_ORIGINAL = HS.ATTR_URL_SCHEME = HS.ATTR_URL_QUERY = HS.ATTR_URL_PATH = HS.ATTR_URL_FULL = HS.ATTR_URL_FRAGMENT = HS.ATTR_TELEMETRY_SDK_VERSION = HS.ATTR_TELEMETRY_SDK_NAME = HS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = HS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = HS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = HS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = HS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = HS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = HS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = HS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = HS.TELEMETRY_SDK_LANGUAGE_VALUE_GO = HS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = HS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = HS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = HS.ATTR_TELEMETRY_SDK_LANGUAGE = HS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = HS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = HS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = HS.ATTR_SIGNALR_TRANSPORT = HS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = HS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = HS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = HS.ATTR_SIGNALR_CONNECTION_STATUS = HS.ATTR_SERVICE_VERSION = HS.ATTR_SERVICE_NAME = HS.ATTR_SERVER_PORT = HS.ATTR_SERVER_ADDRESS = HS.ATTR_OTEL_STATUS_DESCRIPTION = HS.OTEL_STATUS_CODE_VALUE_OK = undefined;
    HS.ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
    HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
    HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
    HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
    HS.ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
    HS.ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
    HS.ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
    HS.ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
    HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
    HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
    HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
    HS.ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
    HS.ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
    HS.ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
    HS.ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
    HS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
    HS.ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
    HS.ATTR_ASPNETCORE_USER_IS_AUTHENTICATED = "aspnetcore.user.is_authenticated";
    HS.ATTR_CLIENT_ADDRESS = "client.address";
    HS.ATTR_CLIENT_PORT = "client.port";
    HS.ATTR_CODE_COLUMN_NUMBER = "code.column.number";
    HS.ATTR_CODE_FILE_PATH = "code.file.path";
    HS.ATTR_CODE_FUNCTION_NAME = "code.function.name";
    HS.ATTR_CODE_LINE_NUMBER = "code.line.number";
    HS.ATTR_CODE_STACKTRACE = "code.stacktrace";
    HS.ATTR_DB_COLLECTION_NAME = "db.collection.name";
    HS.ATTR_DB_NAMESPACE = "db.namespace";
    HS.ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
    HS.ATTR_DB_OPERATION_NAME = "db.operation.name";
    HS.ATTR_DB_QUERY_SUMMARY = "db.query.summary";
    HS.ATTR_DB_QUERY_TEXT = "db.query.text";
    HS.ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
    HS.ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
    HS.ATTR_DB_SYSTEM_NAME = "db.system.name";
    HS.DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
    HS.DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
    HS.DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
    HS.DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
    HS.ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
    HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
    HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
    HS.DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
    HS.DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
    HS.DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
    HS.ATTR_ERROR_TYPE = "error.type";
    HS.ERROR_TYPE_VALUE_OTHER = "_OTHER";
    HS.ATTR_EXCEPTION_ESCAPED = "exception.escaped";
    HS.ATTR_EXCEPTION_MESSAGE = "exception.message";
    HS.ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
    HS.ATTR_EXCEPTION_TYPE = "exception.type";
    const TL = (e)=>`http.request.header.${e}`;
    HS.ATTR_HTTP_REQUEST_HEADER = TL;
    HS.ATTR_HTTP_REQUEST_METHOD = "http.request.method";
    HS.HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
    HS.HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
    HS.HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
    HS.HTTP_REQUEST_METHOD_VALUE_GET = "GET";
    HS.HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
    HS.HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
    HS.HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
    HS.HTTP_REQUEST_METHOD_VALUE_POST = "POST";
    HS.HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
    HS.HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
    HS.ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
    HS.ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
    const AL = (e)=>`http.response.header.${e}`;
    HS.ATTR_HTTP_RESPONSE_HEADER = AL;
    HS.ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
    HS.ATTR_HTTP_ROUTE = "http.route";
    HS.ATTR_JVM_GC_ACTION = "jvm.gc.action";
    HS.ATTR_JVM_GC_NAME = "jvm.gc.name";
    HS.ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
    HS.ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
    HS.JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
    HS.JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
    HS.ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
    HS.ATTR_JVM_THREAD_STATE = "jvm.thread.state";
    HS.JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
    HS.JVM_THREAD_STATE_VALUE_NEW = "new";
    HS.JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
    HS.JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
    HS.JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
    HS.JVM_THREAD_STATE_VALUE_WAITING = "waiting";
    HS.ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
    HS.ATTR_NETWORK_LOCAL_PORT = "network.local.port";
    HS.ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
    HS.ATTR_NETWORK_PEER_PORT = "network.peer.port";
    HS.ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
    HS.ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
    HS.ATTR_NETWORK_TRANSPORT = "network.transport";
    HS.NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
    HS.NETWORK_TRANSPORT_VALUE_QUIC = "quic";
    HS.NETWORK_TRANSPORT_VALUE_TCP = "tcp";
    HS.NETWORK_TRANSPORT_VALUE_UDP = "udp";
    HS.NETWORK_TRANSPORT_VALUE_UNIX = "unix";
    HS.ATTR_NETWORK_TYPE = "network.type";
    HS.NETWORK_TYPE_VALUE_IPV4 = "ipv4";
    HS.NETWORK_TYPE_VALUE_IPV6 = "ipv6";
    HS.ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
    HS.ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
    HS.ATTR_OTEL_STATUS_CODE = "otel.status_code";
    HS.OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
    HS.OTEL_STATUS_CODE_VALUE_OK = "OK";
    HS.ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
    HS.ATTR_SERVER_ADDRESS = "server.address";
    HS.ATTR_SERVER_PORT = "server.port";
    HS.ATTR_SERVICE_NAME = "service.name";
    HS.ATTR_SERVICE_VERSION = "service.version";
    HS.ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
    HS.SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
    HS.SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
    HS.SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
    HS.ATTR_SIGNALR_TRANSPORT = "signalr.transport";
    HS.SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
    HS.SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
    HS.SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
    HS.ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
    HS.TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
    HS.ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
    HS.ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
    HS.ATTR_URL_FRAGMENT = "url.fragment";
    HS.ATTR_URL_FULL = "url.full";
    HS.ATTR_URL_PATH = "url.path";
    HS.ATTR_URL_QUERY = "url.query";
    HS.ATTR_URL_SCHEME = "url.scheme";
    HS.ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
});
const JS = C(function($S) {
    Object.defineProperty($S, "__esModule", {
        value: true
    });
    $S.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = $S.METRIC_KESTREL_UPGRADED_CONNECTIONS = $S.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = $S.METRIC_KESTREL_REJECTED_CONNECTIONS = $S.METRIC_KESTREL_QUEUED_REQUESTS = $S.METRIC_KESTREL_QUEUED_CONNECTIONS = $S.METRIC_KESTREL_CONNECTION_DURATION = $S.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = $S.METRIC_KESTREL_ACTIVE_CONNECTIONS = $S.METRIC_JVM_THREAD_COUNT = $S.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = $S.METRIC_JVM_MEMORY_USED = $S.METRIC_JVM_MEMORY_LIMIT = $S.METRIC_JVM_MEMORY_COMMITTED = $S.METRIC_JVM_GC_DURATION = $S.METRIC_JVM_CPU_TIME = $S.METRIC_JVM_CPU_RECENT_UTILIZATION = $S.METRIC_JVM_CPU_COUNT = $S.METRIC_JVM_CLASS_UNLOADED = $S.METRIC_JVM_CLASS_LOADED = $S.METRIC_JVM_CLASS_COUNT = $S.METRIC_HTTP_SERVER_REQUEST_DURATION = $S.METRIC_HTTP_CLIENT_REQUEST_DURATION = $S.METRIC_DOTNET_TIMER_COUNT = $S.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = $S.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = $S.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = $S.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = $S.METRIC_DOTNET_PROCESS_CPU_TIME = $S.METRIC_DOTNET_PROCESS_CPU_COUNT = $S.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = $S.METRIC_DOTNET_JIT_COMPILED_METHODS = $S.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = $S.METRIC_DOTNET_JIT_COMPILATION_TIME = $S.METRIC_DOTNET_GC_PAUSE_TIME = $S.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = $S.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = $S.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = $S.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = $S.METRIC_DOTNET_GC_COLLECTIONS = $S.METRIC_DOTNET_EXCEPTIONS = $S.METRIC_DOTNET_ASSEMBLY_COUNT = $S.METRIC_DB_CLIENT_OPERATION_DURATION = $S.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = $S.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = $S.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = $S.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = undefined;
    $S.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = undefined;
    $S.METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
    $S.METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
    $S.METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
    $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
    $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
    $S.METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
    $S.METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
    $S.METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
    $S.METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
    $S.METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
    $S.METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
    $S.METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
    $S.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
    $S.METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
    $S.METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
    $S.METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
    $S.METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
    $S.METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
    $S.METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
    $S.METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
    $S.METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
    $S.METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
    $S.METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
    $S.METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
    $S.METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
    $S.METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
    $S.METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
    $S.METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
    $S.METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
    $S.METRIC_JVM_CLASS_COUNT = "jvm.class.count";
    $S.METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
    $S.METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
    $S.METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
    $S.METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
    $S.METRIC_JVM_CPU_TIME = "jvm.cpu.time";
    $S.METRIC_JVM_GC_DURATION = "jvm.gc.duration";
    $S.METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
    $S.METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
    $S.METRIC_JVM_MEMORY_USED = "jvm.memory.used";
    $S.METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
    $S.METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
    $S.METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
    $S.METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
    $S.METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
    $S.METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
    $S.METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
    $S.METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
    $S.METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
    $S.METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
    $S.METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
    $S.METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
});
const tb = C(function(ZS) {
    Object.defineProperty(ZS, "__esModule", {
        value: true
    });
    ZS.EVENT_EXCEPTION = undefined;
    ZS.EVENT_EXCEPTION = "exception";
});
const bFe = C(function(le) {
    const Fj = le && le.__createBinding || (Object.create ? (e, s, r, n = r)=>{
        let i = Object.getOwnPropertyDescriptor(s, r);
        if (!i || ("get" in i ? !s.__esModule : i.writable || i.configurable)) {
            i = {
                enumerable: true,
                get: function() {
                    return s[r];
                }
            };
        }
        Object.defineProperty(e, n, i);
    } : (e, s, r, n = r)=>{
        e[n] = s[r];
    });
    const vt = le && le.__exportStar || ((e, s)=>{
        for(const r in e){
            if (r !== "default" && !Object.prototype.hasOwnProperty.call(s, r)) {
                Fj(s, e, r);
            }
        }
    });
    Object.defineProperty(le, "__esModule", {
        value: true
    });
    vt(df(), le);
    vt(BS(), le);
    vt(WS(), le);
    vt(JS(), le);
    vt(tb(), le);
});
const zt = C(function(rb) {
    Object.defineProperty(rb, "__esModule", {
        value: true
    });
    rb.isTracingSuppressed = rb.unsuppressTracing = rb.suppressTracing = undefined;
    const sb = Da();
    const Sn = sb.createContextKey("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
    function Yj(e) {
        return e.setValue(Sn, true);
    }
    rb.suppressTracing = Yj;
    function Wj(e) {
        return e.deleteValue(Sn);
    }
    rb.unsuppressTracing = Wj;
    function $j(e) {
        return e.getValue(Sn) === true;
    }
    rb.isTracingSuppressed = $j;
});
const bn = C(function(ob) {
    Object.defineProperty(ob, "__esModule", {
        value: true
    });
    ob.BAGGAGE_MAX_TOTAL_LENGTH = ob.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = ob.BAGGAGE_MAX_NAME_VALUE_PAIRS = ob.BAGGAGE_HEADER = ob.BAGGAGE_ITEMS_SEPARATOR = ob.BAGGAGE_PROPERTIES_SEPARATOR = ob.BAGGAGE_KEY_PAIR_SEPARATOR = undefined;
    ob.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
    ob.BAGGAGE_PROPERTIES_SEPARATOR = ";";
    ob.BAGGAGE_ITEMS_SEPARATOR = ",";
    ob.BAGGAGE_HEADER = "baggage";
    ob.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
    ob.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
    ob.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
});
const Tn = C(function(cb) {
    Object.defineProperty(cb, "__esModule", {
        value: true
    });
    cb.parseKeyPairsIntoRecord = cb.parsePairKeyValue = cb.getKeyPairs = cb.serializeKeyPairs = undefined;
    const ib = Da();
    const re = bn();
    function nq(e) {
        return e.reduce((acc, item)=>{
            let n = `${acc}${acc !== "" ? re.BAGGAGE_ITEMS_SEPARATOR : ""}${item}`;
            if (n.length > re.BAGGAGE_MAX_TOTAL_LENGTH) {
                return acc;
            }
            return n;
        }, "");
    }
    cb.serializeKeyPairs = nq;
    function oq(e) {
        return e.getAllEntries().map(([s, r])=>{
            let n = `${encodeURIComponent(s)}=${encodeURIComponent(r.value)}`;
            if (r.metadata !== undefined) {
                n += re.BAGGAGE_PROPERTIES_SEPARATOR + r.metadata.toString();
            }
            return n;
        });
    }
    cb.getKeyPairs = oq;
    function lb(e) {
        if (!e) {
            return;
        }
        let s = e.indexOf(re.BAGGAGE_PROPERTIES_SEPARATOR);
        let r = s === -1 ? e : e.substring(0, s);
        let n = r.indexOf(re.BAGGAGE_KEY_PAIR_SEPARATOR);
        if (n <= 0) {
            return;
        }
        let i = r.substring(0, n).trim();
        let c = r.substring(n + 1).trim();
        if (!i || !c) {
            return;
        }
        let d;
        let m;
        try {
            d = decodeURIComponent(i);
            m = decodeURIComponent(c);
        } catch  {
            return;
        }
        let metadata;
        if (s !== -1 && s < e.length - 1) {
            let f = e.substring(s + 1);
            metadata = ib.baggageEntryMetadataFromString(f);
        }
        return {
            key: d,
            value: m,
            metadata
        };
    }
    cb.parsePairKeyValue = lb;
    function aq(e) {
        let s = {};
        if (typeof e === "string" && e.length > 0) {
            e.split(re.BAGGAGE_ITEMS_SEPARATOR).forEach((r)=>{
                let n = lb(r);
                if (n !== undefined && n.value.length > 0) {
                    s[n.key] = n.value;
                }
            });
        }
        return s;
    }
    cb.parseKeyPairsIntoRecord = aq;
});
const mb = C(function(pb) {
    Object.defineProperty(pb, "__esModule", {
        value: true
    });
    pb.W3CBaggagePropagator = undefined;
    const et = Da();
    const hb = zt();
    const Q = bn();
    const tt = Tn();
    class ub {
        inject(e, s, r) {
            let n = et.propagation.getBaggage(e);
            if (!n || hb.isTracingSuppressed(e)) {
                return;
            }
            let i = tt.getKeyPairs(n).filter((d)=>d.length <= Q.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS).slice(0, Q.BAGGAGE_MAX_NAME_VALUE_PAIRS);
            let c = tt.serializeKeyPairs(i);
            if (c.length > 0) {
                r.set(s, Q.BAGGAGE_HEADER, c);
            }
        }
        extract(e, s, r) {
            let n = r.get(s, Q.BAGGAGE_HEADER);
            let i = Array.isArray(n) ? n.join(Q.BAGGAGE_ITEMS_SEPARATOR) : n;
            if (!i) {
                return e;
            }
            let c = {};
            if (i.length === 0) {
                return e;
            }
            i.split(Q.BAGGAGE_ITEMS_SEPARATOR).forEach((m)=>{
                let h = tt.parsePairKeyValue(m);
                if (h) {
                    let f = {
                        value: h.value
                    };
                    if (h.metadata) {
                        f.metadata = h.metadata;
                    }
                    c[h.key] = f;
                }
            });
            if (Object.entries(c).length === 0) {
                return e;
            }
            return et.propagation.setBaggage(e, et.propagation.createBaggage(c));
        }
        fields() {
            return [
                Q.BAGGAGE_HEADER
            ];
        }
    }
    pb.W3CBaggagePropagator = ub;
});
const Sb = C(function(fb) {
    Object.defineProperty(fb, "__esModule", {
        value: true
    });
    fb.AnchoredClock = undefined;
    class gb {
        _monotonicClock;
        _epochMillis;
        _performanceMillis;
        constructor(e, s){
            this._monotonicClock = s;
            this._epochMillis = e.now();
            this._performanceMillis = s.now();
        }
        now() {
            let e = this._monotonicClock.now() - this._performanceMillis;
            return this._epochMillis + e;
        }
    }
    fb.AnchoredClock = gb;
});
const Rb = C(function(wb) {
    Object.defineProperty(wb, "__esModule", {
        value: true
    });
    wb.isAttributeValue = wb.isAttributeKey = wb.sanitizeAttributes = undefined;
    const ks = Da();
    function dq(e) {
        let s = {};
        if (typeof e !== "object" || e == null) {
            return s;
        }
        for(let r in e){
            if (!Object.prototype.hasOwnProperty.call(e, r)) {
                continue;
            }
            if (!bb(r)) {
                ks.diag.warn(`Invalid attribute key: ${r}`);
                continue;
            }
            let n = e[r];
            if (!Tb(n)) {
                ks.diag.warn(`Invalid attribute value set for key: ${r}`);
                continue;
            }
            if (Array.isArray(n)) {
                s[r] = n.slice();
            } else {
                s[r] = n;
            }
        }
        return s;
    }
    wb.sanitizeAttributes = dq;
    function bb(e) {
        return typeof e === "string" && e !== "";
    }
    wb.isAttributeKey = bb;
    function Tb(e) {
        if (e == null) {
            return true;
        }
        if (Array.isArray(e)) {
            return hq(e);
        }
        return Ab(typeof e);
    }
    wb.isAttributeValue = Tb;
    function hq(e) {
        let s;
        for (let r of e){
            if (r == null) {
                continue;
            }
            let n = typeof r;
            if (n === s) {
                continue;
            }
            if (!s) {
                if (Ab(n)) {
                    s = n;
                    continue;
                }
                return false;
            }
            return false;
        }
        return true;
    }
    function Ab(e) {
        switch(e){
            case "number":
            case "boolean":
            case "string":
                return true;
        }
        return false;
    }
});
const An = C(function(Cb) {
    Object.defineProperty(Cb, "__esModule", {
        value: true
    });
    Cb.loggingErrorHandler = undefined;
    const vb = Da();
    function _q() {
        return (e)=>{
            vb.diag.error(mq(e));
        };
    }
    Cb.loggingErrorHandler = _q;
    function mq(e) {
        if (typeof e === "string") {
            return e;
        } else {
            return JSON.stringify(gq(e));
        }
    }
    function gq(e) {
        let s = {};
        let r = e;
        while(r !== null){
            Object.getOwnPropertyNames(r).forEach((n)=>{
                if (s[n]) {
                    return;
                }
                let i = r[n];
                if (i) {
                    s[n] = String(i);
                }
            });
            r = Object.getPrototypeOf(r);
        }
        return s;
    }
});
const Pb = C(function(Nb) {
    Object.defineProperty(Nb, "__esModule", {
        value: true
    });
    Nb.globalErrorHandler = Nb.setGlobalErrorHandler = undefined;
    const Ob = An();
    let kb = Ob.loggingErrorHandler();
    function fq(e) {
        kb = e;
    }
    Nb.setGlobalErrorHandler = fq;
    function Eq(e) {
        try {
            kb(e);
        } catch  {}
    }
    Nb.globalErrorHandler = Eq;
});
const Ub = C(function(xb) {
    Object.defineProperty(xb, "__esModule", {
        value: true
    });
    xb.getStringListFromEnv = xb.getBooleanFromEnv = xb.getStringFromEnv = xb.getNumberFromEnv = undefined;
    const Ns = Da();
    const Is = Le("util");
    function bq(e) {
        let s = process.env[e];
        if (s == null || s.trim() === "") {
            return;
        }
        let r = Number(s);
        if (isNaN(r)) {
            Ns.diag.warn(`Unknown value ${Is.inspect(s)} for ${e}, expected a number, using defaults`);
            return;
        }
        return r;
    }
    xb.getNumberFromEnv = bq;
    function Db(e) {
        let s = process.env[e];
        if (s == null || s.trim() === "") {
            return;
        }
        return s;
    }
    xb.getStringFromEnv = Db;
    function Tq(e) {
        let s = process.env[e]?.trim().toLowerCase();
        if (s == null || s === "") {
            return false;
        }
        if (s === "true") {
            return true;
        } else if (s === "false") {
            return false;
        } else {
            Ns.diag.warn(`Unknown value ${Is.inspect(s)} for ${e}, expected 'true' or 'false', falling back to 'false' (default)`);
            return false;
        }
    }
    xb.getBooleanFromEnv = Tq;
    function Aq(e) {
        return Db(e)?.split(",").map((s)=>s.trim()).filter((s)=>s !== "");
    }
    xb.getStringListFromEnv = Aq;
});
const qb = C(function(Vb) {
    Object.defineProperty(Vb, "__esModule", {
        value: true
    });
    Vb._globalThis = undefined;
    Vb._globalThis = globalThis;
});
const Fb = C(function(Gb) {
    Object.defineProperty(Gb, "__esModule", {
        value: true
    });
    Gb.VERSION = undefined;
    Gb.VERSION = "2.7.1";
});
const $b = C(function(Yb) {
    Object.defineProperty(Yb, "__esModule", {
        value: true
    });
    Yb.ATTR_PROCESS_RUNTIME_NAME = undefined;
    Yb.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
});
const eT = C(function(Jb) {
    Object.defineProperty(Jb, "__esModule", {
        value: true
    });
    Jb.SDK_INFO = undefined;
    const Xb = Fb();
    const be = bFe();
    const Qb = $b();
    Jb.SDK_INFO = {
        [be.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
        [Qb.ATTR_PROCESS_RUNTIME_NAME]: "node",
        [be.ATTR_TELEMETRY_SDK_LANGUAGE]: be.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
        [be.ATTR_TELEMETRY_SDK_VERSION]: Xb.VERSION
    };
});
const sT = C(function(Te) {
    Object.defineProperty(Te, "__esModule", {
        value: true
    });
    Te.otperformance = Te.SDK_INFO = Te._globalThis = Te.getStringListFromEnv = Te.getNumberFromEnv = Te.getBooleanFromEnv = Te.getStringFromEnv = undefined;
    const Ms = Ub();
    Object.defineProperty(Te, "getStringFromEnv", {
        enumerable: true,
        get: function() {
            return Ms.getStringFromEnv;
        }
    });
    Object.defineProperty(Te, "getBooleanFromEnv", {
        enumerable: true,
        get: function() {
            return Ms.getBooleanFromEnv;
        }
    });
    Object.defineProperty(Te, "getNumberFromEnv", {
        enumerable: true,
        get: function() {
            return Ms.getNumberFromEnv;
        }
    });
    Object.defineProperty(Te, "getStringListFromEnv", {
        enumerable: true,
        get: function() {
            return Ms.getStringListFromEnv;
        }
    });
    const vq = qb();
    Object.defineProperty(Te, "_globalThis", {
        enumerable: true,
        get: function() {
            return vq._globalThis;
        }
    });
    const Cq = eT();
    Object.defineProperty(Te, "SDK_INFO", {
        enumerable: true,
        get: function() {
            return Cq.SDK_INFO;
        }
    });
    Te.otperformance = performance;
});
const yn = C(function(ge) {
    Object.defineProperty(ge, "__esModule", {
        value: true
    });
    ge.getStringListFromEnv = ge.getNumberFromEnv = ge.getStringFromEnv = ge.getBooleanFromEnv = ge.otperformance = ge._globalThis = ge.SDK_INFO = undefined;
    const Pe = sT();
    Object.defineProperty(ge, "SDK_INFO", {
        enumerable: true,
        get: function() {
            return Pe.SDK_INFO;
        }
    });
    Object.defineProperty(ge, "_globalThis", {
        enumerable: true,
        get: function() {
            return Pe._globalThis;
        }
    });
    Object.defineProperty(ge, "otperformance", {
        enumerable: true,
        get: function() {
            return Pe.otperformance;
        }
    });
    Object.defineProperty(ge, "getBooleanFromEnv", {
        enumerable: true,
        get: function() {
            return Pe.getBooleanFromEnv;
        }
    });
    Object.defineProperty(ge, "getStringFromEnv", {
        enumerable: true,
        get: function() {
            return Pe.getStringFromEnv;
        }
    });
    Object.defineProperty(ge, "getNumberFromEnv", {
        enumerable: true,
        get: function() {
            return Pe.getNumberFromEnv;
        }
    });
    Object.defineProperty(ge, "getStringListFromEnv", {
        enumerable: true,
        get: function() {
            return Pe.getStringListFromEnv;
        }
    });
});
const lT = C(function(aT) {
    Object.defineProperty(aT, "__esModule", {
        value: true
    });
    aT.addHrTimes = aT.isTimeInput = aT.isTimeInputHrTime = aT.hrTimeToMicroseconds = aT.hrTimeToMilliseconds = aT.hrTimeToNanoseconds = aT.hrTimeToTimeStamp = aT.hrTimeDuration = aT.timeInputToHrTime = aT.hrTime = aT.getTimeOrigin = aT.millisToHrTime = undefined;
    const Ae = yn();
    const rT = 9;
    const Oq = 6;
    const kq = 10 ** Oq;
    const Ps = 10 ** rT;
    function Ot(e) {
        let s = e / 1000;
        let r = Math.trunc(s);
        let n = Math.round(e % 1000 * kq);
        return [
            r,
            n
        ];
    }
    aT.millisToHrTime = Ot;
    function Nq() {
        return Ae.otperformance.timeOrigin;
    }
    aT.getTimeOrigin = Nq;
    function nT(e) {
        let s = Ot(Ae.otperformance.timeOrigin);
        let r = Ot(typeof e === "number" ? e : Ae.otperformance.now());
        return oT(s, r);
    }
    aT.hrTime = nT;
    function Iq(e) {
        if (vn(e)) {
            return e;
        } else if (typeof e === "number") {
            if (e < Ae.otperformance.timeOrigin) {
                return nT(e);
            } else {
                return Ot(e);
            }
        } else if (e instanceof Date) {
            return Ot(e.getTime());
        } else {
            throw TypeError("Invalid input type");
        }
    }
    aT.timeInputToHrTime = Iq;
    function Mq(e, s) {
        let r = s[0] - e[0];
        let n = s[1] - e[1];
        if (n < 0) {
            r -= 1;
            n += Ps;
        }
        return [
            r,
            n
        ];
    }
    aT.hrTimeDuration = Mq;
    function Pq(e) {
        let s = rT;
        let r = `${"0".repeat(s)}${e[1]}Z`;
        let n = r.substring(r.length - s - 1);
        return new Date(e[0] * 1000).toISOString().replace("000Z", n);
    }
    aT.hrTimeToTimeStamp = Pq;
    function Dq(e) {
        return e[0] * Ps + e[1];
    }
    aT.hrTimeToNanoseconds = Dq;
    function xq(e) {
        return e[0] * 1000 + e[1] / 1000000;
    }
    aT.hrTimeToMilliseconds = xq;
    function Lq(e) {
        return e[0] * 1000000 + e[1] / 1000;
    }
    aT.hrTimeToMicroseconds = Lq;
    function vn(e) {
        return Array.isArray(e) && e.length === 2 && typeof e[0] === "number" && typeof e[1] === "number";
    }
    aT.isTimeInputHrTime = vn;
    function Uq(e) {
        return vn(e) || typeof e === "number" || e instanceof Date;
    }
    aT.isTimeInput = Uq;
    function oT(e, s) {
        let r = [
            e[0] + s[0],
            e[1] + s[1]
        ];
        if (r[1] >= Ps) {
            r[1] -= Ps;
            r[0] += 1;
        }
        return r;
    }
    aT.addHrTimes = oT;
});
const hT = C(function(cT) {
    Object.defineProperty(cT, "__esModule", {
        value: true
    });
    cT.unrefTimer = undefined;
    function Xq(e) {
        if (typeof e !== "number") {
            e.unref();
        }
    }
    cT.unrefTimer = Xq;
});
const pT = C(function(uT) {
    Object.defineProperty(uT, "__esModule", {
        value: true
    });
    uT.ExportResultCode = undefined;
    let Qq;
    ((e)=>{
        e[e.SUCCESS = 0] = "SUCCESS";
        e[e.FAILED = 1] = "FAILED";
    })(Qq = uT.ExportResultCode || (uT.ExportResultCode = {}));
});
const fT = C(function(mT) {
    Object.defineProperty(mT, "__esModule", {
        value: true
    });
    mT.CompositePropagator = undefined;
    const Ds = Da();
    class _T {
        _propagators;
        _fields;
        constructor(e = {}){
            this._propagators = e.propagators ?? [];
            let s = new Set;
            for (let r of this._propagators){
                let n = typeof r.fields === "function" ? r.fields() : [];
                for (let i of n){
                    s.add(i);
                }
            }
            this._fields = Array.from(s);
        }
        inject(e, s, r) {
            for (let n of this._propagators){
                try {
                    n.inject(e, s, r);
                } catch (error) {
                    Ds.diag.warn(`Failed to inject with ${n.constructor.name}. Err: ${error.message}`);
                }
            }
        }
        extract(e, s, r) {
            return this._propagators.reduce((acc, _propagator)=>{
                try {
                    return _propagator.extract(acc, s, r);
                } catch (error) {
                    Ds.diag.warn(`Failed to extract with ${_propagator.constructor.name}. Err: ${error.message}`);
                }
                return acc;
            }, e);
        }
        fields() {
            return this._fields.slice();
        }
    }
    mT.CompositePropagator = _T;
});
const bT = C(function(ET) {
    Object.defineProperty(ET, "__esModule", {
        value: true
    });
    ET.validateValue = ET.validateKey = undefined;
    const zn = "[_0-9a-z-*/]";
    const Jq = `[a-z]${zn}{0,255}`;
    const Zq = `[a-z0-9]${zn}{0,240}@[a-z]${zn}{0,13}`;
    const eG = new RegExp(`^(?:${Jq}|${Zq})$`);
    const tG = /^[ -~]{0,255}[!-~]$/;
    const sG = /,|=/;
    function rG(e) {
        return eG.test(e);
    }
    ET.validateKey = rG;
    function nG(e) {
        return tG.test(e) && !sG.test(e);
    }
    ET.validateValue = nG;
});
const kn = C(function(yT) {
    Object.defineProperty(yT, "__esModule", {
        value: true
    });
    yT.TraceState = undefined;
    const we = bT();
    const aG = 32;
    const TT = 512;
    const AT = ",";
    const wT = "=";
    class On {
        _length;
        _rawTraceState;
        _internalState;
        constructor(e){
            this._rawTraceState = typeof e === "string" ? e : "";
            this._length = this._rawTraceState.length;
        }
        set(e, s) {
            if (!we.validateKey(e) || !we.validateValue(s)) {
                return this;
            }
            let r = this._getState();
            let n = r.get(e);
            let _length = this._length;
            if (typeof n === "string") {
                _length += s.length - n.length;
            } else {
                _length += e.length + s.length + (r.size > 0 ? 2 : 1);
            }
            if (_length > TT) {
                return this;
            }
            let c = new Map(r);
            c.delete(e);
            c.set(e, s);
            return this._fromState(c, _length);
        }
        unset(e) {
            let s = this._getState();
            let r = s.get(e);
            if (typeof r !== "string") {
                return this;
            }
            let n = this._length - (e.length + r.length + 1);
            if (s.size > 1) {
                n = n - 1;
            }
            let i = new Map(s);
            i.delete(e);
            return this._fromState(i, n);
        }
        get(e) {
            return this._getState().get(e);
        }
        serialize() {
            let e = "";
            let s = 0;
            for (let r of this._getState()){
                if (s > 0) {
                    e = AT + e;
                }
                e = `${r[0]}${wT}${r[1]}` + e;
                s++;
            }
            return e;
        }
        _getState() {
            if (this._internalState) {
                return this._internalState;
            }
            let e = this._rawTraceState.split(AT);
            let s = new Map;
            let r = 0;
            for (let n of e){
                let i = n.trim();
                let c = i.indexOf(wT);
                if (c === -1) {
                    continue;
                }
                let d = i.slice(0, c);
                let m = i.slice(c + 1);
                if (!we.validateKey(d) || !we.validateValue(m)) {
                    continue;
                }
                let h = r + i.length + (s.size > 0 ? 1 : 0);
                if (h > TT) {
                    continue;
                }
                s.set(d, m);
                r = h;
                if (s.size >= aG) {
                    break;
                }
            }
            this._length = r;
            this._internalState = new Map(Array.from(s.entries()).reverse());
            return this._internalState;
        }
        _fromState(e, s) {
            let r = Object.create(On.prototype);
            r._internalState = e;
            r._length = s;
            return r;
        }
    }
    yT.TraceState = On;
});
const IT = C(function(kT) {
    Object.defineProperty(kT, "__esModule", {
        value: true
    });
    kT.W3CTraceContextPropagator = kT.parseTraceParent = kT.TRACE_STATE_HEADER = kT.TRACE_PARENT_HEADER = undefined;
    const ye = Da();
    const vT = zt();
    const CT = kn();
    kT.TRACE_PARENT_HEADER = "traceparent";
    kT.TRACE_STATE_HEADER = "tracestate";
    const iG = "00";
    const lG = "(?!ff)[\\da-f]{2}";
    const cG = "(?![0]{32})[\\da-f]{32}";
    const dG = "(?![0]{16})[\\da-f]{16}";
    const hG = "[\\da-f]{2}";
    const uG = new RegExp(`^\\s?(${lG})-(${cG})-(${dG})-(${hG})(-.*)?\\s?$`);
    function zT(e) {
        let s = uG.exec(e);
        if (!s) {
            return null;
        }
        if (s[1] === "00" && s[5]) {
            return null;
        }
        return {
            traceId: s[2],
            spanId: s[3],
            traceFlags: parseInt(s[4], 16)
        };
    }
    kT.parseTraceParent = zT;
    class OT {
        inject(e, s, r) {
            let n = ye.trace.getSpanContext(e);
            if (!n || vT.isTracingSuppressed(e) || !ye.isSpanContextValid(n)) {
                return;
            }
            let i = `${iG}-${n.traceId}-${n.spanId}-0${Number(n.traceFlags || ye.TraceFlags.NONE).toString(16)}`;
            r.set(s, kT.TRACE_PARENT_HEADER, i);
            if (n.traceState) {
                r.set(s, kT.TRACE_STATE_HEADER, n.traceState.serialize());
            }
        }
        extract(e, s, r) {
            let n = r.get(s, kT.TRACE_PARENT_HEADER);
            if (!n) {
                return e;
            }
            let i = Array.isArray(n) ? n[0] : n;
            if (typeof i !== "string") {
                return e;
            }
            let c = zT(i);
            if (!c) {
                return e;
            }
            c.isRemote = true;
            let d = r.get(s, kT.TRACE_STATE_HEADER);
            if (d) {
                let m = Array.isArray(d) ? d.join(",") : d;
                c.traceState = new CT.TraceState(typeof m === "string" ? m : undefined);
            }
            return ye.trace.setSpanContext(e, c);
        }
        fields() {
            return [
                kT.TRACE_PARENT_HEADER,
                kT.TRACE_STATE_HEADER
            ];
        }
    }
    kT.W3CTraceContextPropagator = OT;
});
const LT = C(function(DT) {
    Object.defineProperty(DT, "__esModule", {
        value: true
    });
    DT.getRPCMetadata = DT.deleteRPCMetadata = DT.setRPCMetadata = DT.RPCType = undefined;
    const PT = Da();
    const Nn = PT.createContextKey("OpenTelemetry SDK Context Key RPC_METADATA");
    let _G;
    ((e)=>{
        e.HTTP = "http";
    })(_G = DT.RPCType || (DT.RPCType = {}));
    function mG(e, s) {
        return e.setValue(Nn, s);
    }
    DT.setRPCMetadata = mG;
    function gG(e) {
        return e.deleteValue(Nn);
    }
    DT.deleteRPCMetadata = gG;
    function fG(e) {
        return e.getValue(Nn);
    }
    DT.getRPCMetadata = fG;
});
const HT = C(function(GT) {
    Object.defineProperty(GT, "__esModule", {
        value: true
    });
    GT.isPlainObject = undefined;
    const bG = "[object Object]";
    const TG = "[object Null]";
    const AG = "[object Undefined]";
    const toString = Function.prototype.toString;
    const yG = toString.call(Object);
    const { getPrototypeOf, prototype } = Object;
    const prototype_hasOwnProperty = prototype.hasOwnProperty;
    const xe = Symbol ? Symbol.toStringTag : undefined;
    const prototype_toString = prototype.toString;
    function vG(e) {
        if (!CG(e) || zG(e) !== bG) {
            return false;
        }
        let s = getPrototypeOf(e);
        if (s === null) {
            return true;
        }
        let r = prototype_hasOwnProperty.call(s, "constructor") && s.constructor;
        return typeof r === "function" && r instanceof r && toString.call(r) === yG;
    }
    GT.isPlainObject = vG;
    function CG(e) {
        return e != null && typeof e === "object";
    }
    function zG(e) {
        if (e == null) {
            if (e === undefined) {
                return AG;
            }
            return TG;
        }
        if (xe && xe in Object(e)) {
            return OG(e);
        }
        return kG(e);
    }
    function OG(e) {
        let s = prototype_hasOwnProperty.call(e, xe);
        let r = e[xe];
        let n = false;
        try {
            e[xe] = undefined;
            n = true;
        } catch  {}
        let i = prototype_toString.call(e);
        if (n) {
            if (s) {
                e[xe] = r;
            } else {
                delete e[xe];
            }
        }
        return i;
    }
    function kG(e) {
        return prototype_toString.call(e);
    }
});
const XT = C(function(WT) {
    Object.defineProperty(WT, "__esModule", {
        value: true
    });
    WT.merge = undefined;
    const Vs = HT();
    const NG = 20;
    function IG(...e) {
        let s = e.shift();
        let r = new WeakMap;
        while(e.length > 0){
            s = FT(s, e.shift(), 0, r);
        }
        return s;
    }
    WT.merge = IG;
    function In(e) {
        if (js(e)) {
            return e.slice();
        }
        return e;
    }
    function FT(e, s, r = 0, n) {
        let i;
        if (r > NG) {
            return;
        }
        r++;
        if (Us(e) || Us(s) || YT(s)) {
            i = In(s);
        } else if (js(e)) {
            i = e.slice();
            if (js(s)) {
                for(let c = 0, d = s.length; c < d; c++){
                    i.push(In(s[c]));
                }
            } else if (kt(s)) {
                let c = Object.keys(s);
                for(let d = 0, m = c.length; d < m; d++){
                    let h = c[d];
                    if (h === "__proto__" || h === "constructor" || h === "prototype") {
                        continue;
                    }
                    i[h] = In(s[h]);
                }
            }
        } else if (kt(e)) {
            if (kt(s)) {
                if (!MG(e, s)) {
                    return s;
                }
                i = {
                    ...e
                };
                let c = Object.keys(s);
                for(let d = 0, m = c.length; d < m; d++){
                    let h = c[d];
                    if (h === "__proto__" || h === "constructor" || h === "prototype") {
                        continue;
                    }
                    let f = s[h];
                    if (Us(f)) {
                        if (typeof f === "undefined") {
                            delete i[h];
                        } else {
                            i[h] = f;
                        }
                    } else {
                        let w = i[h];
                        let O = f;
                        if (KT(e, h, n) || KT(s, h, n)) {
                            delete i[h];
                        } else {
                            if (kt(w) && kt(O)) {
                                let I = n.get(w) || [];
                                let R = n.get(O) || [];
                                I.push({
                                    obj: e,
                                    key: h
                                });
                                R.push({
                                    obj: s,
                                    key: h
                                });
                                n.set(w, I);
                                n.set(O, R);
                            }
                            i[h] = FT(i[h], f, r, n);
                        }
                    }
                }
            } else {
                i = s;
            }
        }
        return i;
    }
    function KT(e, s, r) {
        let n = r.get(e[s]) || [];
        for(let i = 0, c = n.length; i < c; i++){
            let d = n[i];
            if (d.key === s && d.obj === e) {
                return true;
            }
        }
        return false;
    }
    function js(e) {
        return Array.isArray(e);
    }
    function YT(e) {
        return typeof e === "function";
    }
    function kt(e) {
        return !Us(e) && !js(e) && !YT(e) && typeof e === "object";
    }
    function Us(e) {
        return typeof e === "string" || typeof e === "number" || typeof e === "boolean" || typeof e === "undefined" || e instanceof Date || e instanceof RegExp || e === null;
    }
    function MG(e, s) {
        if (!Vs.isPlainObject(e) || !Vs.isPlainObject(s)) {
            return false;
        }
        return true;
    }
});
const ZT = C(function(QT) {
    Object.defineProperty(QT, "__esModule", {
        value: true
    });
    QT.callWithTimeout = QT.TimeoutError = undefined;
    class qs extends Error {
        constructor(e){
            super(e);
            Object.setPrototypeOf(this, qs.prototype);
        }
    }
    QT.TimeoutError = qs;
    function PG(e, s) {
        let r;
        let n = new Promise((resolve, reject)=>{
            r = setTimeout(()=>{
                reject(new qs("Operation timed out."));
            }, s);
        });
        return Promise.race([
            e,
            n
        ]).then((i)=>{
            clearTimeout(r);
            return i;
        }, (i)=>{
            clearTimeout(r);
            throw i;
        });
    }
    QT.callWithTimeout = PG;
});
const rA = C(function(tA) {
    Object.defineProperty(tA, "__esModule", {
        value: true
    });
    tA.isUrlIgnored = tA.urlMatches = undefined;
    function eA(e, s) {
        if (typeof s === "string") {
            return e === s;
        } else {
            return !!e.match(s);
        }
    }
    tA.urlMatches = eA;
    function xG(e, s) {
        if (!s) {
            return false;
        }
        for (let r of s){
            if (eA(e, r)) {
                return true;
            }
        }
        return false;
    }
    tA.isUrlIgnored = xG;
});
const iA = C(function(oA) {
    Object.defineProperty(oA, "__esModule", {
        value: true
    });
    oA.Deferred = undefined;
    class nA {
        _promise;
        _resolve;
        _reject;
        constructor(){
            this._promise = new Promise((resolve, reject)=>{
                this._resolve = resolve;
                this._reject = reject;
            });
        }
        get promise() {
            return this._promise;
        }
        resolve(e) {
            this._resolve(e);
        }
        reject(e) {
            this._reject(e);
        }
    }
    oA.Deferred = nA;
});
const uA = C(function(dA) {
    Object.defineProperty(dA, "__esModule", {
        value: true
    });
    dA.BindOnceFuture = undefined;
    const lA = iA();
    class cA {
        _isCalled = false;
        _deferred = new lA.Deferred;
        _callback;
        _that;
        constructor(e, s){
            this._callback = e;
            this._that = s;
        }
        get isCalled() {
            return this._isCalled;
        }
        get promise() {
            return this._deferred.promise;
        }
        call(...e) {
            if (!this._isCalled) {
                this._isCalled = true;
                try {
                    Promise.resolve(this._callback.call(this._that, ...e)).then((s)=>this._deferred.resolve(s), (s)=>this._deferred.reject(s));
                } catch (error) {
                    this._deferred.reject(error);
                }
            }
            return this._deferred.promise;
        }
    }
    dA.BindOnceFuture = cA;
});
const gA = C(function(_A) {
    Object.defineProperty(_A, "__esModule", {
        value: true
    });
    _A.diagLogLevelFromString = undefined;
    const V = Da();
    const pA = {
        ALL: V.DiagLogLevel.ALL,
        VERBOSE: V.DiagLogLevel.VERBOSE,
        DEBUG: V.DiagLogLevel.DEBUG,
        INFO: V.DiagLogLevel.INFO,
        WARN: V.DiagLogLevel.WARN,
        ERROR: V.DiagLogLevel.ERROR,
        NONE: V.DiagLogLevel.NONE
    };
    function UG(e) {
        if (e == null) {
            return;
        }
        let s = pA[e.toUpperCase()];
        if (s == null) {
            V.diag.warn(`Unknown log level "${e}", expected one of ${Object.keys(pA)}, using default`);
            return V.DiagLogLevel.INFO;
        }
        return s;
    }
    _A.diagLogLevelFromString = UG;
});
const bA = C(function(EA) {
    Object.defineProperty(EA, "__esModule", {
        value: true
    });
    EA._export = undefined;
    const Gs = Da();
    const fA = zt();
    function VG(e, s) {
        return new Promise((resolve)=>{
            Gs.context.with(fA.suppressTracing(Gs.context.active()), ()=>{
                e.export(s, resolve);
            });
        });
    }
    EA._export = VG;
});
const Of = C(function(y) {
    Object.defineProperty(y, "__esModule", {
        value: true
    });
    y.internal = y.diagLogLevelFromString = y.BindOnceFuture = y.urlMatches = y.isUrlIgnored = y.callWithTimeout = y.TimeoutError = y.merge = y.TraceState = y.unsuppressTracing = y.suppressTracing = y.isTracingSuppressed = y.setRPCMetadata = y.getRPCMetadata = y.deleteRPCMetadata = y.RPCType = y.parseTraceParent = y.W3CTraceContextPropagator = y.TRACE_STATE_HEADER = y.TRACE_PARENT_HEADER = y.CompositePropagator = y.otperformance = y.getStringListFromEnv = y.getNumberFromEnv = y.getBooleanFromEnv = y.getStringFromEnv = y._globalThis = y.SDK_INFO = y.parseKeyPairsIntoRecord = y.ExportResultCode = y.unrefTimer = y.timeInputToHrTime = y.millisToHrTime = y.isTimeInputHrTime = y.isTimeInput = y.hrTimeToTimeStamp = y.hrTimeToNanoseconds = y.hrTimeToMilliseconds = y.hrTimeToMicroseconds = y.hrTimeDuration = y.hrTime = y.getTimeOrigin = y.addHrTimes = y.loggingErrorHandler = y.setGlobalErrorHandler = y.globalErrorHandler = y.sanitizeAttributes = y.isAttributeValue = y.AnchoredClock = y.W3CBaggagePropagator = undefined;
    const jG = mb();
    Object.defineProperty(y, "W3CBaggagePropagator", {
        enumerable: true,
        get: function() {
            return jG.W3CBaggagePropagator;
        }
    });
    const qG = Sb();
    Object.defineProperty(y, "AnchoredClock", {
        enumerable: true,
        get: function() {
            return qG.AnchoredClock;
        }
    });
    const TA = Rb();
    Object.defineProperty(y, "isAttributeValue", {
        enumerable: true,
        get: function() {
            return TA.isAttributeValue;
        }
    });
    Object.defineProperty(y, "sanitizeAttributes", {
        enumerable: true,
        get: function() {
            return TA.sanitizeAttributes;
        }
    });
    const AA = Pb();
    Object.defineProperty(y, "globalErrorHandler", {
        enumerable: true,
        get: function() {
            return AA.globalErrorHandler;
        }
    });
    Object.defineProperty(y, "setGlobalErrorHandler", {
        enumerable: true,
        get: function() {
            return AA.setGlobalErrorHandler;
        }
    });
    const GG = An();
    Object.defineProperty(y, "loggingErrorHandler", {
        enumerable: true,
        get: function() {
            return GG.loggingErrorHandler;
        }
    });
    const ne = lT();
    Object.defineProperty(y, "addHrTimes", {
        enumerable: true,
        get: function() {
            return ne.addHrTimes;
        }
    });
    Object.defineProperty(y, "getTimeOrigin", {
        enumerable: true,
        get: function() {
            return ne.getTimeOrigin;
        }
    });
    Object.defineProperty(y, "hrTime", {
        enumerable: true,
        get: function() {
            return ne.hrTime;
        }
    });
    Object.defineProperty(y, "hrTimeDuration", {
        enumerable: true,
        get: function() {
            return ne.hrTimeDuration;
        }
    });
    Object.defineProperty(y, "hrTimeToMicroseconds", {
        enumerable: true,
        get: function() {
            return ne.hrTimeToMicroseconds;
        }
    });
    Object.defineProperty(y, "hrTimeToMilliseconds", {
        enumerable: true,
        get: function() {
            return ne.hrTimeToMilliseconds;
        }
    });
    Object.defineProperty(y, "hrTimeToNanoseconds", {
        enumerable: true,
        get: function() {
            return ne.hrTimeToNanoseconds;
        }
    });
    Object.defineProperty(y, "hrTimeToTimeStamp", {
        enumerable: true,
        get: function() {
            return ne.hrTimeToTimeStamp;
        }
    });
    Object.defineProperty(y, "isTimeInput", {
        enumerable: true,
        get: function() {
            return ne.isTimeInput;
        }
    });
    Object.defineProperty(y, "isTimeInputHrTime", {
        enumerable: true,
        get: function() {
            return ne.isTimeInputHrTime;
        }
    });
    Object.defineProperty(y, "millisToHrTime", {
        enumerable: true,
        get: function() {
            return ne.millisToHrTime;
        }
    });
    Object.defineProperty(y, "timeInputToHrTime", {
        enumerable: true,
        get: function() {
            return ne.timeInputToHrTime;
        }
    });
    const BG = hT();
    Object.defineProperty(y, "unrefTimer", {
        enumerable: true,
        get: function() {
            return BG.unrefTimer;
        }
    });
    const HG = pT();
    Object.defineProperty(y, "ExportResultCode", {
        enumerable: true,
        get: function() {
            return HG.ExportResultCode;
        }
    });
    const KG = Tn();
    Object.defineProperty(y, "parseKeyPairsIntoRecord", {
        enumerable: true,
        get: function() {
            return KG.parseKeyPairsIntoRecord;
        }
    });
    const Ve = yn();
    Object.defineProperty(y, "SDK_INFO", {
        enumerable: true,
        get: function() {
            return Ve.SDK_INFO;
        }
    });
    Object.defineProperty(y, "_globalThis", {
        enumerable: true,
        get: function() {
            return Ve._globalThis;
        }
    });
    Object.defineProperty(y, "getStringFromEnv", {
        enumerable: true,
        get: function() {
            return Ve.getStringFromEnv;
        }
    });
    Object.defineProperty(y, "getBooleanFromEnv", {
        enumerable: true,
        get: function() {
            return Ve.getBooleanFromEnv;
        }
    });
    Object.defineProperty(y, "getNumberFromEnv", {
        enumerable: true,
        get: function() {
            return Ve.getNumberFromEnv;
        }
    });
    Object.defineProperty(y, "getStringListFromEnv", {
        enumerable: true,
        get: function() {
            return Ve.getStringListFromEnv;
        }
    });
    Object.defineProperty(y, "otperformance", {
        enumerable: true,
        get: function() {
            return Ve.otperformance;
        }
    });
    const FG = fT();
    Object.defineProperty(y, "CompositePropagator", {
        enumerable: true,
        get: function() {
            return FG.CompositePropagator;
        }
    });
    const Bs = IT();
    Object.defineProperty(y, "TRACE_PARENT_HEADER", {
        enumerable: true,
        get: function() {
            return Bs.TRACE_PARENT_HEADER;
        }
    });
    Object.defineProperty(y, "TRACE_STATE_HEADER", {
        enumerable: true,
        get: function() {
            return Bs.TRACE_STATE_HEADER;
        }
    });
    Object.defineProperty(y, "W3CTraceContextPropagator", {
        enumerable: true,
        get: function() {
            return Bs.W3CTraceContextPropagator;
        }
    });
    Object.defineProperty(y, "parseTraceParent", {
        enumerable: true,
        get: function() {
            return Bs.parseTraceParent;
        }
    });
    const Hs = LT();
    Object.defineProperty(y, "RPCType", {
        enumerable: true,
        get: function() {
            return Hs.RPCType;
        }
    });
    Object.defineProperty(y, "deleteRPCMetadata", {
        enumerable: true,
        get: function() {
            return Hs.deleteRPCMetadata;
        }
    });
    Object.defineProperty(y, "getRPCMetadata", {
        enumerable: true,
        get: function() {
            return Hs.getRPCMetadata;
        }
    });
    Object.defineProperty(y, "setRPCMetadata", {
        enumerable: true,
        get: function() {
            return Hs.setRPCMetadata;
        }
    });
    const Mn = zt();
    Object.defineProperty(y, "isTracingSuppressed", {
        enumerable: true,
        get: function() {
            return Mn.isTracingSuppressed;
        }
    });
    Object.defineProperty(y, "suppressTracing", {
        enumerable: true,
        get: function() {
            return Mn.suppressTracing;
        }
    });
    Object.defineProperty(y, "unsuppressTracing", {
        enumerable: true,
        get: function() {
            return Mn.unsuppressTracing;
        }
    });
    const YG = kn();
    Object.defineProperty(y, "TraceState", {
        enumerable: true,
        get: function() {
            return YG.TraceState;
        }
    });
    const WG = XT();
    Object.defineProperty(y, "merge", {
        enumerable: true,
        get: function() {
            return WG.merge;
        }
    });
    const wA = ZT();
    Object.defineProperty(y, "TimeoutError", {
        enumerable: true,
        get: function() {
            return wA.TimeoutError;
        }
    });
    Object.defineProperty(y, "callWithTimeout", {
        enumerable: true,
        get: function() {
            return wA.callWithTimeout;
        }
    });
    const yA = rA();
    Object.defineProperty(y, "isUrlIgnored", {
        enumerable: true,
        get: function() {
            return yA.isUrlIgnored;
        }
    });
    Object.defineProperty(y, "urlMatches", {
        enumerable: true,
        get: function() {
            return yA.urlMatches;
        }
    });
    const $G = uA();
    Object.defineProperty(y, "BindOnceFuture", {
        enumerable: true,
        get: function() {
            return $G.BindOnceFuture;
        }
    });
    const XG = gA();
    Object.defineProperty(y, "diagLogLevelFromString", {
        enumerable: true,
        get: function() {
            return XG.diagLogLevelFromString;
        }
    });
    const RA = bA();
    y.internal = {
        _export: RA._export
    };
});
const Pn = C(function(CA) {
    Object.defineProperty(CA, "__esModule", {
        value: true
    });
    CA._clearDefaultServiceNameCache = CA.defaultServiceName = undefined;
    let Nt;
    function QG() {
        if (Nt === undefined) {
            try {
                let e = globalThis.process.argv0;
                Nt = e ? `unknown_service:${e}` : "unknown_service";
            } catch  {
                Nt = "unknown_service";
            }
        }
        return Nt;
    }
    CA.defaultServiceName = QG;
    function JG() {
        Nt = undefined;
    }
    CA._clearDefaultServiceNameCache = JG;
});
const NA = C(function(OA) {
    Object.defineProperty(OA, "__esModule", {
        value: true
    });
    OA.isPromiseLike = undefined;
    const eB = (e)=>e !== null && typeof e === "object" && typeof e.then === "function";
    OA.isPromiseLike = eB;
});
const xn = C(function(PA) {
    Object.defineProperty(PA, "__esModule", {
        value: true
    });
    PA.defaultResource = PA.emptyResource = PA.resourceFromDetectedResource = PA.resourceFromAttributes = undefined;
    const pe = Da();
    const st = Of();
    const J = bFe();
    const MA = Pn();
    const he = NA();
    class It {
        _rawAttributes;
        _asyncAttributesPending = false;
        _schemaUrl;
        _memoizedAttributes;
        static FromAttributeList(e, s) {
            let r = new It({}, s);
            r._rawAttributes = IA(e);
            r._asyncAttributesPending = e.filter(([n, i])=>he.isPromiseLike(i)).length > 0;
            return r;
        }
        constructor(e, s){
            let r = e.attributes ?? {};
            this._rawAttributes = Object.entries(r).map(([n, i])=>{
                if (he.isPromiseLike(i)) {
                    this._asyncAttributesPending = true;
                }
                return [
                    n,
                    i
                ];
            });
            this._rawAttributes = IA(this._rawAttributes);
            this._schemaUrl = nB(s?.schemaUrl);
        }
        get asyncAttributesPending() {
            return this._asyncAttributesPending;
        }
        async waitForAsyncAttributes() {
            if (!this.asyncAttributesPending) {
                return;
            }
            for(let e = 0; e < this._rawAttributes.length; e++){
                let [s, r] = this._rawAttributes[e];
                this._rawAttributes[e] = [
                    s,
                    he.isPromiseLike(r) ? await r : r
                ];
            }
            this._asyncAttributesPending = false;
        }
        get attributes() {
            if (this.asyncAttributesPending) {
                pe.diag.error("Accessing resource attributes before async attributes settled");
            }
            if (this._memoizedAttributes) {
                return this._memoizedAttributes;
            }
            let e = {};
            for (let [s, r] of this._rawAttributes){
                if (he.isPromiseLike(r)) {
                    pe.diag.debug(`Unsettled resource attribute ${s} skipped`);
                    continue;
                }
                if (r != null) {
                    e[s] ??= r;
                }
            }
            if (!this._asyncAttributesPending) {
                this._memoizedAttributes = e;
            }
            return e;
        }
        getRawAttributes() {
            return this._rawAttributes;
        }
        get schemaUrl() {
            return this._schemaUrl;
        }
        merge(e) {
            if (e == null) {
                return this;
            }
            let schemaUrl = oB(this, e);
            let r = schemaUrl ? {
                schemaUrl
            } : undefined;
            return It.FromAttributeList([
                ...e.getRawAttributes(),
                ...this.getRawAttributes()
            ], r);
        }
    }
    function Dn(e, s) {
        return It.FromAttributeList(Object.entries(e), s);
    }
    PA.resourceFromAttributes = Dn;
    function tB(e, s) {
        return new It(e, s);
    }
    PA.resourceFromDetectedResource = tB;
    function sB() {
        return Dn({});
    }
    PA.emptyResource = sB;
    function rB() {
        return Dn({
            [J.ATTR_SERVICE_NAME]: MA.defaultServiceName(),
            [J.ATTR_TELEMETRY_SDK_LANGUAGE]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_LANGUAGE],
            [J.ATTR_TELEMETRY_SDK_NAME]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_NAME],
            [J.ATTR_TELEMETRY_SDK_VERSION]: st.SDK_INFO[J.ATTR_TELEMETRY_SDK_VERSION]
        });
    }
    PA.defaultResource = rB;
    function IA(e) {
        return e.map(([s, r])=>{
            if (he.isPromiseLike(r)) {
                return [
                    s,
                    r.catch((n)=>{
                        pe.diag.debug("promise rejection for resource attribute: %s - %s", s, n);
                    })
                ];
            }
            return [
                s,
                r
            ];
        });
    }
    function nB(e) {
        if (typeof e === "string" || e === undefined) {
            return e;
        }
        pe.diag.warn("Schema URL must be string or undefined, got %s. Schema URL will be ignored.", e);
    }
    function oB(e, s) {
        let r = e?.schemaUrl;
        let n = s?.schemaUrl;
        let i = r === undefined || r === "";
        let c = n === undefined || n === "";
        if (i) {
            return n;
        }
        if (c) {
            return r;
        }
        if (r === n) {
            return r;
        }
        pe.diag.warn('Schema URL merge conflict: old resource has "%s", updating resource has "%s". Resulting resource will have undefined Schema URL.', r, n);
    }
});
const UA = C(function(xA) {
    Object.defineProperty(xA, "__esModule", {
        value: true
    });
    xA.detectResources = undefined;
    const Ks = Da();
    const rt = xn();
    const cB = (e = {})=>(e.detectors || []).map((r)=>{
            try {
                let n = rt.resourceFromDetectedResource(r.detect(e));
                Ks.diag.debug(`${r.constructor.name} found resource.`, n);
                return n;
            } catch (error) {
                Ks.diag.debug(`${r.constructor.name} failed: ${error.message}`);
                return rt.emptyResource();
            }
        }).reduce((acc, item)=>acc.merge(item), rt.emptyResource());
    xA.detectResources = cB;
});
const HA = C(function(GA) {
    Object.defineProperty(GA, "__esModule", {
        value: true
    });
    GA.envDetector = undefined;
    const VA = Da();
    const jA = bFe();
    const Fs = Of();
    class qA {
        _MAX_LENGTH = 255;
        _COMMA_SEPARATOR = ",";
        _LABEL_KEY_VALUE_SPLITTER = "=";
        detect(e) {
            let s = {};
            let r = Fs.getStringFromEnv("OTEL_RESOURCE_ATTRIBUTES");
            let n = Fs.getStringFromEnv("OTEL_SERVICE_NAME");
            if (r) {
                try {
                    let i = this._parseResourceAttributes(r);
                    Object.assign(s, i);
                } catch (error) {
                    VA.diag.debug(`EnvDetector failed: ${error instanceof Error ? error.message : error}`);
                }
            }
            if (n) {
                s[jA.ATTR_SERVICE_NAME] = n;
            }
            return {
                attributes: s
            };
        }
        _parseResourceAttributes(e) {
            if (!e) {
                return {};
            }
            let s = {};
            let r = e.split(this._COMMA_SEPARATOR).filter((n)=>n.trim() !== "");
            for (let n of r){
                let i = n.split(this._LABEL_KEY_VALUE_SPLITTER);
                if (i.length !== 2) {
                    throw Error(`Invalid format for OTEL_RESOURCE_ATTRIBUTES: "${n}". Expected format: key=value. The ',' and '=' characters must be percent-encoded in keys and values.`);
                }
                let [c, d] = i;
                let m = c.trim();
                let h = d.trim();
                if (m.length === 0) {
                    throw Error(`Invalid OTEL_RESOURCE_ATTRIBUTES: empty attribute key in "${n}".`);
                }
                let f;
                let w;
                try {
                    f = decodeURIComponent(m);
                    w = decodeURIComponent(h);
                } catch (error) {
                    throw Error(`Failed to percent-decode OTEL_RESOURCE_ATTRIBUTES entry "${n}": ${error instanceof Error ? error.message : error}`);
                }
                if (f.length > this._MAX_LENGTH) {
                    throw Error(`Attribute key exceeds the maximum length of ${this._MAX_LENGTH} characters: "${f}".`);
                }
                if (w.length > this._MAX_LENGTH) {
                    throw Error(`Attribute value exceeds the maximum length of ${this._MAX_LENGTH} characters for key "${f}".`);
                }
                s[f] = w;
            }
            return s;
        }
    }
    GA.envDetector = new qA;
});
const Mt = C(function(KA) {
    Object.defineProperty(KA, "__esModule", {
        value: true
    });
    KA.ATTR_WEBENGINE_VERSION = KA.ATTR_WEBENGINE_NAME = KA.ATTR_WEBENGINE_DESCRIPTION = KA.ATTR_SERVICE_NAMESPACE = KA.ATTR_SERVICE_INSTANCE_ID = KA.ATTR_PROCESS_RUNTIME_VERSION = KA.ATTR_PROCESS_RUNTIME_NAME = KA.ATTR_PROCESS_RUNTIME_DESCRIPTION = KA.ATTR_PROCESS_PID = KA.ATTR_PROCESS_OWNER = KA.ATTR_PROCESS_EXECUTABLE_PATH = KA.ATTR_PROCESS_EXECUTABLE_NAME = KA.ATTR_PROCESS_COMMAND_ARGS = KA.ATTR_PROCESS_COMMAND = KA.ATTR_OS_VERSION = KA.ATTR_OS_TYPE = KA.ATTR_K8S_POD_NAME = KA.ATTR_K8S_NAMESPACE_NAME = KA.ATTR_K8S_DEPLOYMENT_NAME = KA.ATTR_K8S_CLUSTER_NAME = KA.ATTR_HOST_TYPE = KA.ATTR_HOST_NAME = KA.ATTR_HOST_IMAGE_VERSION = KA.ATTR_HOST_IMAGE_NAME = KA.ATTR_HOST_IMAGE_ID = KA.ATTR_HOST_ID = KA.ATTR_HOST_ARCH = KA.ATTR_CONTAINER_NAME = KA.ATTR_CONTAINER_IMAGE_TAGS = KA.ATTR_CONTAINER_IMAGE_NAME = KA.ATTR_CONTAINER_ID = KA.ATTR_CLOUD_REGION = KA.ATTR_CLOUD_PROVIDER = KA.ATTR_CLOUD_AVAILABILITY_ZONE = KA.ATTR_CLOUD_ACCOUNT_ID = undefined;
    KA.ATTR_CLOUD_ACCOUNT_ID = "cloud.account.id";
    KA.ATTR_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
    KA.ATTR_CLOUD_PROVIDER = "cloud.provider";
    KA.ATTR_CLOUD_REGION = "cloud.region";
    KA.ATTR_CONTAINER_ID = "container.id";
    KA.ATTR_CONTAINER_IMAGE_NAME = "container.image.name";
    KA.ATTR_CONTAINER_IMAGE_TAGS = "container.image.tags";
    KA.ATTR_CONTAINER_NAME = "container.name";
    KA.ATTR_HOST_ARCH = "host.arch";
    KA.ATTR_HOST_ID = "host.id";
    KA.ATTR_HOST_IMAGE_ID = "host.image.id";
    KA.ATTR_HOST_IMAGE_NAME = "host.image.name";
    KA.ATTR_HOST_IMAGE_VERSION = "host.image.version";
    KA.ATTR_HOST_NAME = "host.name";
    KA.ATTR_HOST_TYPE = "host.type";
    KA.ATTR_K8S_CLUSTER_NAME = "k8s.cluster.name";
    KA.ATTR_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
    KA.ATTR_K8S_NAMESPACE_NAME = "k8s.namespace.name";
    KA.ATTR_K8S_POD_NAME = "k8s.pod.name";
    KA.ATTR_OS_TYPE = "os.type";
    KA.ATTR_OS_VERSION = "os.version";
    KA.ATTR_PROCESS_COMMAND = "process.command";
    KA.ATTR_PROCESS_COMMAND_ARGS = "process.command_args";
    KA.ATTR_PROCESS_EXECUTABLE_NAME = "process.executable.name";
    KA.ATTR_PROCESS_EXECUTABLE_PATH = "process.executable.path";
    KA.ATTR_PROCESS_OWNER = "process.owner";
    KA.ATTR_PROCESS_PID = "process.pid";
    KA.ATTR_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
    KA.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
    KA.ATTR_PROCESS_RUNTIME_VERSION = "process.runtime.version";
    KA.ATTR_SERVICE_INSTANCE_ID = "service.instance.id";
    KA.ATTR_SERVICE_NAMESPACE = "service.namespace";
    KA.ATTR_WEBENGINE_DESCRIPTION = "webengine.description";
    KA.ATTR_WEBENGINE_NAME = "webengine.name";
    KA.ATTR_WEBENGINE_VERSION = "webengine.version";
});
const XA = C(function(WA) {
    Object.defineProperty(WA, "__esModule", {
        value: true
    });
    WA.getMachineId = undefined;
    const YA = Le("process");
    let je;
    async function HB() {
        if (!je) {
            switch(YA.platform){
                case "darwin":
                    je = (await import("/$bunfs/root/chunk-w904hz8w.js").then((m)=>Se(m.default))).getMachineId;
                    break;
                case "linux":
                    je = (await import("/$bunfs/root/chunk-k66n0xyq.js").then((m)=>Se(m.default))).getMachineId;
                    break;
                case "freebsd":
                    je = (await import("/$bunfs/root/chunk-npzsnzw4.js").then((m)=>Se(m.default))).getMachineId;
                    break;
                case "win32":
                    je = (await import("/$bunfs/root/chunk-cznxpwmn.js").then((m)=>Se(m.default))).getMachineId;
                    break;
                default:
                    je = (await import("/$bunfs/root/chunk-av4rvq1t.js").then((m)=>Se(m.default))).getMachineId;
                    break;
            }
        }
        return je();
    }
    WA.getMachineId = HB;
});
const Ln = C(function(QA) {
    Object.defineProperty(QA, "__esModule", {
        value: true
    });
    QA.normalizeType = QA.normalizeArch = undefined;
    const KB = (e)=>{
        switch(e){
            case "arm":
                return "arm32";
            case "ppc":
                return "ppc32";
            case "x64":
                return "amd64";
            default:
                return e;
        }
    };
    QA.normalizeArch = KB;
    const FB = (e)=>{
        switch(e){
            case "sunos":
                return "solaris";
            case "win32":
                return "windows";
            default:
                return e;
        }
    };
    QA.normalizeType = FB;
});
const ow = C(function(rw) {
    Object.defineProperty(rw, "__esModule", {
        value: true
    });
    rw.hostDetector = undefined;
    const nt = Mt();
    const Ys = Le("os");
    const ZA = XA();
    const tw = Ln();
    class sw {
        detect(e) {
            return {
                attributes: {
                    [nt.ATTR_HOST_NAME]: Ys.hostname(),
                    [nt.ATTR_HOST_ARCH]: tw.normalizeArch(Ys.arch()),
                    [nt.ATTR_HOST_ID]: ZA.getMachineId()
                }
            };
        }
    }
    rw.hostDetector = new sw;
});
const dw = C(function(lw) {
    Object.defineProperty(lw, "__esModule", {
        value: true
    });
    lw.osDetector = undefined;
    const Ws = Mt();
    const $s = Le("os");
    const aw = Ln();
    class iw {
        detect(e) {
            return {
                attributes: {
                    [Ws.ATTR_OS_TYPE]: aw.normalizeType($s.platform()),
                    [Ws.ATTR_OS_VERSION]: $s.release()
                }
            };
        }
    }
    lw.osDetector = new iw;
});
const gw = C(function(_w) {
    Object.defineProperty(_w, "__esModule", {
        value: true
    });
    _w.processDetector = undefined;
    const hw = Da();
    const j = Mt();
    const uw = Le("os");
    class pw {
        detect(e) {
            let s = {
                [j.ATTR_PROCESS_PID]: process.pid,
                [j.ATTR_PROCESS_EXECUTABLE_NAME]: process.title,
                [j.ATTR_PROCESS_EXECUTABLE_PATH]: process.execPath,
                [j.ATTR_PROCESS_COMMAND_ARGS]: [
                    process.argv[0],
                    ...process.execArgv,
                    ...process.argv.slice(1)
                ],
                [j.ATTR_PROCESS_RUNTIME_VERSION]: process.versions.node,
                [j.ATTR_PROCESS_RUNTIME_NAME]: "nodejs",
                [j.ATTR_PROCESS_RUNTIME_DESCRIPTION]: "Node.js"
            };
            if (process.argv.length > 1) {
                s[j.ATTR_PROCESS_COMMAND] = process.argv[1];
            }
            try {
                let r = uw.userInfo();
                s[j.ATTR_PROCESS_OWNER] = r.username;
            } catch (error) {
                hw.diag.debug(`error obtaining process owner: ${error}`);
            }
            return {
                attributes: s
            };
        }
    }
    _w.processDetector = new pw;
});
const Aw = C(function(bw) {
    Object.defineProperty(bw, "__esModule", {
        value: true
    });
    bw.serviceInstanceIdDetector = undefined;
    const fw = Mt();
    const Ew = Le("crypto");
    class Sw {
        detect(e) {
            return {
                attributes: {
                    [fw.ATTR_SERVICE_INSTANCE_ID]: Ew.randomUUID()
                }
            };
        }
    }
    bw.serviceInstanceIdDetector = new Sw;
});
const ww = C(function(ot) {
    Object.defineProperty(ot, "__esModule", {
        value: true
    });
    ot.serviceInstanceIdDetector = ot.processDetector = ot.osDetector = ot.hostDetector = undefined;
    const WB = ow();
    Object.defineProperty(ot, "hostDetector", {
        enumerable: true,
        get: function() {
            return WB.hostDetector;
        }
    });
    const $B = dw();
    Object.defineProperty(ot, "osDetector", {
        enumerable: true,
        get: function() {
            return $B.osDetector;
        }
    });
    const XB = gw();
    Object.defineProperty(ot, "processDetector", {
        enumerable: true,
        get: function() {
            return XB.processDetector;
        }
    });
    const QB = Aw();
    Object.defineProperty(ot, "serviceInstanceIdDetector", {
        enumerable: true,
        get: function() {
            return QB.serviceInstanceIdDetector;
        }
    });
});
const yw = C(function(at) {
    Object.defineProperty(at, "__esModule", {
        value: true
    });
    at.serviceInstanceIdDetector = at.processDetector = at.osDetector = at.hostDetector = undefined;
    const Xs = ww();
    Object.defineProperty(at, "hostDetector", {
        enumerable: true,
        get: function() {
            return Xs.hostDetector;
        }
    });
    Object.defineProperty(at, "osDetector", {
        enumerable: true,
        get: function() {
            return Xs.osDetector;
        }
    });
    Object.defineProperty(at, "processDetector", {
        enumerable: true,
        get: function() {
            return Xs.processDetector;
        }
    });
    Object.defineProperty(at, "serviceInstanceIdDetector", {
        enumerable: true,
        get: function() {
            return Xs.serviceInstanceIdDetector;
        }
    });
});
const Cw = C(function(Rw) {
    Object.defineProperty(Rw, "__esModule", {
        value: true
    });
    Rw.noopDetector = Rw.NoopDetector = undefined;
    class Un {
        detect() {
            return {
                attributes: {}
            };
        }
    }
    Rw.NoopDetector = Un;
    Rw.noopDetector = new Un;
});
const zw = C(function(Re) {
    Object.defineProperty(Re, "__esModule", {
        value: true
    });
    Re.noopDetector = Re.serviceInstanceIdDetector = Re.processDetector = Re.osDetector = Re.hostDetector = Re.envDetector = undefined;
    const tH = HA();
    Object.defineProperty(Re, "envDetector", {
        enumerable: true,
        get: function() {
            return tH.envDetector;
        }
    });
    const Qs = yw();
    Object.defineProperty(Re, "hostDetector", {
        enumerable: true,
        get: function() {
            return Qs.hostDetector;
        }
    });
    Object.defineProperty(Re, "osDetector", {
        enumerable: true,
        get: function() {
            return Qs.osDetector;
        }
    });
    Object.defineProperty(Re, "processDetector", {
        enumerable: true,
        get: function() {
            return Qs.processDetector;
        }
    });
    Object.defineProperty(Re, "serviceInstanceIdDetector", {
        enumerable: true,
        get: function() {
            return Qs.serviceInstanceIdDetector;
        }
    });
    const sH = Cw();
    Object.defineProperty(Re, "noopDetector", {
        enumerable: true,
        get: function() {
            return sH.noopDetector;
        }
    });
});
const vct = C(function(ae) {
    Object.defineProperty(ae, "__esModule", {
        value: true
    });
    ae.defaultServiceName = ae.emptyResource = ae.defaultResource = ae.resourceFromAttributes = ae.serviceInstanceIdDetector = ae.processDetector = ae.osDetector = ae.hostDetector = ae.envDetector = ae.detectResources = undefined;
    const nH = UA();
    Object.defineProperty(ae, "detectResources", {
        enumerable: true,
        get: function() {
            return nH.detectResources;
        }
    });
    const Pt = zw();
    Object.defineProperty(ae, "envDetector", {
        enumerable: true,
        get: function() {
            return Pt.envDetector;
        }
    });
    Object.defineProperty(ae, "hostDetector", {
        enumerable: true,
        get: function() {
            return Pt.hostDetector;
        }
    });
    Object.defineProperty(ae, "osDetector", {
        enumerable: true,
        get: function() {
            return Pt.osDetector;
        }
    });
    Object.defineProperty(ae, "processDetector", {
        enumerable: true,
        get: function() {
            return Pt.processDetector;
        }
    });
    Object.defineProperty(ae, "serviceInstanceIdDetector", {
        enumerable: true,
        get: function() {
            return Pt.serviceInstanceIdDetector;
        }
    });
    const Vn = xn();
    Object.defineProperty(ae, "resourceFromAttributes", {
        enumerable: true,
        get: function() {
            return Vn.resourceFromAttributes;
        }
    });
    Object.defineProperty(ae, "defaultResource", {
        enumerable: true,
        get: function() {
            return Vn.defaultResource;
        }
    });
    Object.defineProperty(ae, "emptyResource", {
        enumerable: true,
        get: function() {
            return Vn.emptyResource;
        }
    });
    const oH = Pn();
    Object.defineProperty(ae, "defaultServiceName", {
        enumerable: true,
        get: function() {
            return oH.defaultServiceName;
        }
    });
});
class Na {
    committed = false;
}
const Ia = new Na;
function wn() {
    return Ia.committed;
}
function T8() {
    Ia.committed = true;
}
const Ky = new Promise(()=>{});
function Qu() {
    return Ky;
}
class NTs {
    #e = false;
    #t = false;
    #s = false;
    #r = null;
    #n = false;
    #o = undefined;
    #a = false;
    #i = undefined;
    #l = false;
    #c = undefined;
    get active() {
        return this.#e;
    }
    get flagCli() {
        return this.#t;
    }
    get circuitBroken() {
        return this.#s;
    }
    get fastModeBreakerReason() {
        return this.#r;
    }
    get fromFallback() {
        return this.#n;
    }
    get provisionalStartupMode() {
        return this.#o;
    }
    get autoStartWithheldForHipaaTaint() {
        return this.#a;
    }
    setAutoStartWithheldForHipaaTaint(e) {
        this.#a = e;
    }
    get envOnboardingEligible() {
        return this.#i;
    }
    get envOnboardingShownLogged() {
        return this.#l;
    }
    get accountSetMode() {
        return this.#c;
    }
    setActive(e) {
        this.#e = e;
    }
    setFlagCli(e) {
        this.#t = e;
    }
    setCircuitBroken(e) {
        this.#s = e;
    }
    setFastModeBreakerReason(e) {
        this.#r = e;
    }
    setFromFallback(e) {
        this.#n = e;
    }
    setProvisionalStartupMode(e) {
        this.#o = e;
    }
    setEnvOnboardingEligible(e) {
        this.#i = e;
    }
    setEnvOnboardingShownLogged(e) {
        this.#l = e;
    }
    setAccountSetMode(e) {
        this.#c = e;
    }
    reset() {
        this.#e = false;
        this.#t = false;
        this.#s = false;
        this.#r = null;
        this.#n = false;
        this.#o = undefined;
        this.#a = false;
        this.#i = undefined;
        this.#l = false;
        this.#c = undefined;
    }
}
const K$s = new q(()=>new NTs);
function m1() {
    return K$s.of(B().host);
}
function bR(e) {
    m1().setActive(e);
}
function lp() {
    return m1().active;
}
function yFe(e) {
    return e.mode === "auto" || e.mode === "plan" && e.servedCall !== true && lp() && !e.isBypassPermissionsModeAvailable;
}
function si(e, s = false) {
    return e === "auto" || e === "plan" && !s && lp();
}
function tbo(e) {
    m1().setFlagCli(e);
}
function nbo() {
    return m1().flagCli;
}
function QZt(e) {
    m1().setCircuitBroken(e);
}
function XRe() {
    return m1().circuitBroken;
}
function rbo(e) {
    m1().setFastModeBreakerReason(e);
}
function obo() {
    return m1().fastModeBreakerReason;
}
function XEr(e) {
    m1().setFromFallback(e);
}
function WV() {
    return m1().fromFallback;
}
function _Fe(e) {
    m1().setProvisionalStartupMode(e);
}
function k2s() {
    return m1().autoStartWithheldForHipaaTaint;
}
function JEr(e) {
    m1().setAutoStartWithheldForHipaaTaint(e);
}
function R1n() {
    return m1().provisionalStartupMode;
}
function x1n() {
    return m1().envOnboardingEligible;
}
function wct(e) {
    m1().setEnvOnboardingEligible(e);
}
function QEr() {
    return m1().envOnboardingShownLogged;
}
function ZZt() {
    return m1().accountSetMode;
}
function Y6e(e) {
    m1().setAccountSetMode(e);
}
function ZEr(e) {
    m1().setEnvOnboardingShownLogged(e);
}
function hr() {
    return O9(a.AWS_REGION) || O9(a.AWS_DEFAULT_REGION);
}
function _ct() {
    return hr() || "us-east-1";
}
function dr() {
    return `${a.AWS_CONFIG_FILE ?? ""}|${a.AWS_SHARED_CREDENTIALS_FILE ?? ""}|${a.AWS_PROFILE ?? ""}`;
}
class Ma {
    resolvedSharedConfigRegions = new Map;
    readAwsSharedConfigRegion = po(async ()=>{
        let e = dr();
        let s;
        try {
            let [r, n] = await Promise.all([
                import("/$bunfs/root/chunk-dmt9kewn.js").then((m)=>Se(m.default, 1)),
                import("/$bunfs/root/chunk-610zhawf.js").then((m)=>Se(m.default, 1))
            ]);
            let i = r.loadConfig ?? r.default?.loadConfig;
            let c = n.NODE_REGION_CONFIG_FILE_OPTIONS ?? n.default?.NODE_REGION_CONFIG_FILE_OPTIONS;
            let d = await i({
                environmentVariableSelector: ()=>{},
                configFileSelector: (m)=>m.region,
                default: ()=>{}
            }, c)();
            s = O9(d?.trim());
        } catch  {
            s = undefined;
        }
        this.resolvedSharedConfigRegions.set(e, s);
        return s;
    }, dr);
}
const Fy = new q(()=>new Ma);
function Pa() {
    return Fy.of(B().host);
}
async function pO() {
    let e = hr();
    if (e) {
        return e;
    }
    return await Pa().readAwsSharedConfigRegion() || _ct();
}
function G6e() {
    return j_o().region;
}
function j_o() {
    let e = hr();
    if (e) {
        return {
            region: e,
            source: "env"
        };
    }
    let s = Pa().resolvedSharedConfigRegions.get(dr());
    if (s) {
        return {
            region: s,
            source: "shared-config"
        };
    }
    let r = !!(a.AWS_REGION || a.AWS_DEFAULT_REGION);
    return {
        region: _ct(),
        source: r ? "env-invalid" : "default"
    };
}
function v(name, header) {
    return Object.freeze({
        name,
        header
    });
}
const ROt = v("claude_code", "claude-code-20250219");
const oSe = v("oauth_auth", pp);
const GZt = v("interleaved_thinking", "interleaved-thinking-2025-05-14");
const ew = v("long_context", "context-1m-2025-08-07");
const qRe = v("context_management", "context-management-2025-06-27");
const Koe = v("structured_outputs", "structured-outputs-2025-12-15");
const VEr = v("web_search", "web-search-2025-03-05");
const W_o = v("tool_search", "advanced-tool-use-2025-11-20");
const k1n = v("tool_search", "tool-search-tool-2025-10-19");
const V6e = v("effort", "effort-2025-11-24");
const qEr = v("task_budgets", "task-budgets-2026-03-13");
const xOt = v("prompt_caching_scope", "prompt-caching-scope-2026-01-05");
const q6e = v("prompt_caching_evict", "prompt-caching-evict-2026-05-12");
const hP = v("cache_keepalive", "cache-keepalive-2026-09-03");
const POt = v("extended_cache_ttl", "extended-cache-ttl-2025-04-11");
const VZt = v("speed", "fast-mode-2026-02-01");
const qZt = v("redact_thinking", "redact-thinking-2026-02-12");
const K6e = v("thinking_resumption", "thinking-resumption-2026-07-17");
const P7 = v("thinking_token_count", "thinking-token-count-2026-05-13");
const SF = v("afk_mode", "afk-mode-2026-01-31");
const KEr = v("advisor_tool", "advisor-tool-2026-03-01");
const sSe = v("cache_diagnosis", "cache-diagnosis-2026-04-07");
const z_o = v("context_hint", "context-hint-2026-04-09");
const KZt = v("mcp_servers", "mcp-servers-2025-12-04");
const G_o = v("files_api", "files-api-2025-04-14");
const V_o = v("environments", "environments-2025-11-01");
const YZt = v("ccr_byoc", "ccr-byoc-2025-07-29");
const Mb = v("mid_conversation_system", "mid-conversation-system-2026-04-07");
const d1 = v("per_message_effort", "per-turn-control-2026-07-01");
const BV = v("per_turn_timing", "timing-2026-09-09");
const q_ = v("mid_conv_tool_change", "mid-conversation-tool-changes-2026-07-01");
const h_ = v("inline_tools", "inline-tools-2026-09-15");
const wF = v("server_side_fallback", "server-side-fallback-2026-06-01");
const Hb = v("server_side_fallback_category", "server-side-fallback-2026-07-01");
const _z = v("fallback_credit", "fallback-credit-2026-06-01");
const T1n = v("mid_conv_cache_promotion_latch", "x-cc-internal-mid-conv-cache-promotion");
const q_o = v("mid_conv_cache_promotion_ok_latch", "x-cc-internal-mid-conv-cache-promotion-ok");
const XZt = null;
const K_o = v("auto_mode_classifier", "auto-mode-classifier-2026-07-16");
const sC = v("dangerous_tool_use", "dangerous-tool-use-2026-09-03");
const Yy = null;
const I7 = v("thinking_display_updates", "thinking-display-updates-2026-08-18");
const u1 = v("thinking_binding_controls", "thinking-binding-controls-2026-08-01");
const p1 = v("message_threads", "message-threads-2026-08-12");
const bz = v("mid_conversation_system_clear_at", "mid-conversation-system-clear-at-2026-08-21");
const Wy = Object.freeze([
    ROt,
    oSe,
    GZt,
    ew,
    qRe,
    Koe,
    VEr,
    W_o,
    k1n,
    V6e,
    qEr,
    xOt,
    q6e,
    hP,
    POt,
    VZt,
    qZt,
    K6e,
    P7,
    SF,
    KEr,
    sSe,
    z_o,
    KZt,
    G_o,
    V_o,
    YZt,
    Mb,
    d1,
    BV,
    q_,
    h_,
    wF,
    Hb,
    _z,
    XZt,
    K_o,
    sC,
    Yy,
    I7,
    p1,
    bz,
    u1
].filter((e)=>e !== null));
const xa = new Map(Wy.map((e)=>[
        e.header,
        e
    ]));
function bct(e) {
    return xa.get(e);
}
function Y_o(e) {
    return xa.get(e) ?? Object.freeze({
        name: e,
        header: e
    });
}
function iC(e) {
    return e.map((s)=>s.header);
}
function IOt(e) {
    return e.toLowerCase().includes("afk-mode");
}
const JZt = new Set([
    GZt,
    ew,
    k1n
]);
const OOt = new Set([
    ROt,
    GZt,
    qRe,
    oSe
]);
function jV() {
    let e = Ie();
    return e === "firstParty" || k1(e) || e === "foundry";
}
function vF() {
    return a.CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS || EF();
}
function EF() {
    return sl("hipaa");
}
function YEr(e) {
    if (EF()) {
        return undefined;
    }
    return e;
}
function Th() {
    return jV() && !vF();
}
function Sct(e) {
    return aj(e, (s)=>s.name === "CredentialsProviderError") !== undefined;
}
const $y = /ExpiredToken|InvalidSignature|SignatureDoesNotMatch|UnrecognizedClient|InvalidClientTokenId|security token.*(invalid|expired)|signature we calculated does not match|Bearer Token has expired|Authentication failed.*API Key|Missing required parameters in the API Key/i;
function iSe(e = a.ANTHROPIC_CUSTOM_HEADERS ?? "") {
    let s = [];
    for (let r of e.split(/\r?\n/)){
        let n = r.indexOf(":");
        let i = n === -1 ? "" : r.slice(0, n).trim();
        if (i) {
            s.push([
                i,
                r.slice(n + 1).trim()
            ]);
        }
    }
    return s;
}
function yP() {
    return Ua("x-api-key");
}
function MOt(e = {}) {
    let a_ANTHROPIC_API_KEY = a.ANTHROPIC_API_KEY;
    if (a_ANTHROPIC_API_KEY === undefined || yP() || Object.entries(e).some(([r, n])=>r.toLowerCase() === "x-api-key" && n !== undefined)) {
        return;
    }
    return {
        "X-Api-Key": a_ANTHROPIC_API_KEY
    };
}
function PTs() {
    return Ua("authorization");
}
function X_o() {
    return iSe().map(([e])=>e);
}
function Ua(e) {
    return X_o().some((s)=>s.toLowerCase() === e);
}
function K_() {
    let e = {
        Authorization: undefined
    };
    for (let [s] of iSe()){
        if (s.toLowerCase() === "authorization") {
            e[s] = undefined;
        }
    }
    return e;
}
function mN() {
    let e = {};
    let s = EF();
    for (let [r, n] of iSe()){
        if (r.toLowerCase() !== "anthropic-beta") {
            continue;
        }
        let i = n.split(",").map((d)=>d.trim()).filter(Boolean);
        let c = i.filter((d)=>!IOt(d));
        if (s) {
            e[r] = undefined;
        } else if (c.length !== i.length) {
            e[r] = c.length > 0 ? c.join(",") : undefined;
        } else {
            delete e[r];
        }
    }
    return e;
}
function hFe(e, s) {
    return $y.test(`${e ?? ""} ${s ?? ""}`);
}
const _P = {
    __auth: {
        provider: null,
        tokenCache: null,
        resolution: null,
        error: null,
        extraHeaders: {}
    }
};
function KRe() {
    let a_ANTHROPIC_AUTH_TOKEN = a.ANTHROPIC_AUTH_TOKEN;
    if (a_ANTHROPIC_AUTH_TOKEN) {
        return `Bearer ${a_ANTHROPIC_AUTH_TOKEN}`;
    }
    let s;
    let r = Object.fromEntries(iSe());
    for (let [n, i] of Object.entries(r)){
        if (n.toLowerCase() === "authorization") {
            s = i;
        }
    }
    return s || undefined;
}
function La(e) {
    if (!e || typeof e !== "object") {
        return false;
    }
    let s = e;
    return typeof s.AccessKeyId === "string" && typeof s.SecretAccessKey === "string" && typeof s.SessionToken === "string" && s.AccessKeyId.length > 0 && s.SecretAccessKey.length > 0 && s.SessionToken.length > 0;
}
function ITs(e) {
    if (!e || typeof e !== "object") {
        return null;
    }
    let s = e;
    if (La(s.Credentials)) {
        return s.Credentials;
    }
    if (La(s)) {
        return s;
    }
    return null;
}
const requestTimeoutMs = 30000;
function A1n() {
    return a.CLAUDE_CODE_AWS_CHAIN_RESOLVE_TIMEOUT_MS ?? 60000;
}
async function J_o() {
    let { loadSharedConfigFiles } = await import("/$bunfs/root/chunk-e4px49kk.js").then((m)=>Se(m.default, 1));
    await loadSharedConfigFiles({
        ignoreCache: true
    }).catch(()=>{});
    let [{ STSClient, GetCallerIdentityCommand }, n] = await Promise.all([
        import("/$bunfs/root/chunk-yt8w1915.js"),
        pO()
    ]);
    let i = new STSClient({
        region: n,
        ...await HUe({
            url: MUe(n),
            region: n,
            requestTimeoutMs
        })
    });
    await Ut(i.send(new GetCallerIdentityCommand({})), A1n(), "AWS STS");
}
async function OTs() {
    let { loadSharedConfigFiles } = await import("/$bunfs/root/chunk-e4px49kk.js").then((m)=>Se(m.default, 1));
    let s = await loadSharedConfigFiles().catch(()=>{});
    let r = new Set;
    let n = a.AWS_PROFILE || "default";
    while(s !== undefined && !r.has(n)){
        r.add(n);
        let i = {
            ...s.configFile[n],
            ...s.credentialsFile[n]
        };
        if (i.credential_process) {
            return true;
        }
        if (!i.source_profile) {
            return false;
        }
        n = i.source_profile;
    }
    return false;
}
async function MTs() {
    try {
        t("Clearing AWS credential provider cache");
        let [{ fromIni }, s] = await Promise.all([
            import("/$bunfs/root/chunk-8f79dj0j.js"),
            pO()
        ]);
        let requestHandler = await J8({
            url: MUe(s),
            requestTimeoutMs
        });
        let n = fromIni({
            ignoreCache: true,
            ...requestHandler && {
                clientConfig: {
                    requestHandler
                },
                parentClientConfig: {
                    requestHandler,
                    region: s
                }
            }
        });
        await Ut(n(), A1n(), "AWS ini cache refresh");
        t("AWS credential provider cache refreshed");
    } catch (error) {
        t(`Failed to refresh AWS credential cache: ${l(error)}`);
    }
}
function rs() {
    return a.CLAUDE_CODE_REMOTE === true && a.CLAUDE_CODE_ENVIRONMENT_KIND === undefined;
}
function f1() {
    return a.CLAUDE_CODE_REMOTE === true && a.CLAUDE_CODE_ENVIRONMENT_KIND === "byoc";
}
function A8() {
    return rs() || f1();
}
function Q_o() {
    return f1() && a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE === "self_hosted";
}
function HTs(e, s) {
    if (!(e && Q_o() && Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID) && !a.CLAUDE_CODE_DISABLE_WORKING_SYNC)) {
        return "not_admitted";
    }
    if (s === q2n) {
        return "admitted";
    }
    return "moved_directory";
}
function cH() {
    return a.CLAUDE_CODE_ENVIRONMENT_KIND === "bridge";
}
function YRe() {
    return cH() && !bPe();
}
function C1n(e) {
    return e.hostedWorker || cH() && e.transportPersists !== false;
}
const Xy = /hooks\.slack\.com\/(?:services|workflows|triggers)\/[A-Za-z0-9/_-]+/gi;
const pr = {
    bearer: [
        /\bBearer\s+(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%[0-9A-Fa-f]{2}){7})[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]+|%[0-9A-Fa-f]{2})*/gi,
        "Bearer <token>"
    ],
    basic: [
        /(:\s*)Basic\s+[A-Za-z0-9+/=]{8,}/gi,
        "$1Basic <token>"
    ],
    sk: [
        /\bsk-[A-Za-z0-9_-]{20,}/g,
        "<token>"
    ]
};
const Qy = [
    /\bBearer\s{1,512}(?=[A-Za-z0-9._~+/=-](?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){15})(?:eyJ|(?=(?:[A-Za-z0-9._~+/=-]|%(?!20)[0-9A-Fa-f]{2}){0,64}[0-9=]))/i,
    /:\s{0,512}Basic\s{1,512}(?=[A-Za-z0-9+/=]{16})(?=[A-Za-z0-9+/=]{0,64}[0-9=])/i,
    /\bsk-(?=[A-Za-z0-9_-]{20})(?=[A-Za-z0-9_-]{0,64}[0-9])/
];
const DTs = 4096;
const s1 = new RegExp(`(?:\\b(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-${He("[A-Za-z0-9+/=%_-]")}|\\bxox[cd]-|(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-(?=[0-9])|xox[cd]-${He("[A-Za-z0-9+/=%_-]")}(?=[A-Za-z0-9+/=%_-]{16}))`, "i");
const ja = [
    [
        ct("sk-ant-", "[A-Za-z0-9_-]", 8, _r(8)),
        "<token>"
    ],
    [
        ct("sk-(?:proj|svcacct|admin)-", "[A-Za-z0-9_-]", 20, _r(20)),
        "<token>"
    ]
];
const qa = [
    "AKIA",
    "ASIA",
    "ABIA",
    "ACCA",
    "A3T[A-Z0-9]"
];
const Jy = `(?:${qa.join("|")})`;
const Ga = [
    [
        new RegExp(`(^|[^A-Za-z0-9+])${Jy}[A-Z0-9]{16}(?![A-Za-z0-9+=])`, "g"),
        "$1<token>"
    ]
];
const Ba = [
    [
        ct("gh[opusr]_", "[A-Za-z0-9]", 20, He("[A-Za-z0-9]")),
        "<token>"
    ],
    [
        /github_pat_[A-Za-z0-9_]{82,}/g,
        "<token>"
    ],
    [
        /sq0(?:atp|csp)-[A-Za-z0-9_-]{22,}/g,
        "<token>"
    ],
    [
        /(^|[^A-Za-z0-9+/])EAAA[A-Za-z0-9+/=%_-]{56,}/g,
        "$1<token>"
    ],
    [
        ct("gl(?:pat|dt|rt|ft|soat|oas|agent|ptt|cbt|imt|ffct)-", "[A-Za-z0-9_=-]", 20, He("[A-Za-z0-9_=-]"), "(?:\\.[0-9a-z]{9})?"),
        "<token>"
    ],
    [
        ct("(?:xox[abe-z](?:\\.xox[a-z])?|xapp|xwfp)-", "[A-Za-z0-9+/=%_-]", 10, "(?=[0-9])", "", He("[A-Za-z0-9+/=%_-]"), "gi"),
        "<token>"
    ],
    [
        new RegExp(`(?:\\bxox[cd]-[A-Za-z0-9+/=%_-]{10,}|xox[cd]-${He("[A-Za-z0-9+/=%_-]")}[A-Za-z0-9+/=%_-]{16,})`, "gi"),
        "<token>"
    ],
    [
        Xy,
        "hooks.slack.com/<redacted>"
    ]
];
const Zy = [
    new RegExp("(?<![A-Za-z0-9_-])(?=[A-Za-z0-9_-]+\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*)((?:[A-Za-z0-9_-]*?-)??)ey[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*\\.[A-Za-z0-9_-]{10}[A-Za-z0-9_-]*", "g"),
    "$1<jwt>"
];
const eR = /\beyJ(?:[A-Za-z0-9_-]{256}|[A-Za-z0-9_-]{8,2048}\.[A-Za-z0-9_-]{10})/;
const Ha = [
    [
        /(^|[^A-Za-z0-9+_-])AIza[A-Za-z0-9_-]{35}(?![A-Za-z0-9+=_-])/g,
        "$1<token>"
    ],
    [
        /(^|[^A-Za-z0-9+_-])GOCSPX-[A-Za-z0-9_-]{28}(?![A-Za-z0-9+=_-])/g,
        "$1<token>"
    ]
];
const Ka = [
    [
        /(^|[^A-Za-z0-9+_-])[sr]k_(?:live|test|prod)_(?=[A-Za-z0-9]{0,64}[0-9])[A-Za-z0-9]{24,}(?![A-Za-z0-9+=_-])/g,
        "$1<token>"
    ]
];
const Z_o = [
    pr.bearer,
    pr.basic,
    ...ja,
    pr.sk,
    ...Ga
];
const ebo = [
    ...Ba,
    Zy,
    ...Ha,
    ...Ka
];
const LTs = [
    [
        new RegExp(`sk-${_r(20)}[A-Za-z0-9_-]{20,}`, "g"),
        "<token>"
    ],
    ...qa.map((e)=>[
            new RegExp(`${e}[A-Z2-7]{16}`, "g"),
            "<token>"
        ]),
    [
        /AIza[\w-]{35}/g,
        "<token>"
    ],
    [
        /GOCSPX-[\w-]{28,}/g,
        "<token>"
    ],
    [
        /[sr]k_(?:live|test|prod)_[A-Za-z0-9]{24,}/g,
        "<token>"
    ]
];
function O7(e) {
    return [
        ...Z_o,
        ...ebo
    ].reduce((acc, [r, n])=>acc.replace(r, n), String(e));
}
const tR = [
    ...Qy,
    ...[
        ...ja,
        ...Ga,
        ...Ba,
        ...Ha,
        ...Ka
    ].map(([e])=>new RegExp(e.source, e.flags.replaceAll("g", ""))),
    eR
];
function aSe(e) {
    return tR.some((s)=>s.test(e));
}
function ct(e, s, r, n, i = "", c = "", d = "g") {
    let m = `${s}{${r},}${i}`;
    return new RegExp(`(?:\\b${e}${c}${m}|${e}${n}${m})`, d);
}
function He(e) {
    return `(?=${e}{0,64}[0-9])`;
}
function _r(e) {
    return `(?=[A-Za-z0-9_-]{0,64}?(?=[A-Za-z0-9]{${e}})(?=[A-Za-z0-9]{0,64}[0-9])(?=[A-Za-z0-9]{0,64}[A-Za-z]))`;
}
const Mu = "(no content)";
const kF = "No response requested.";
const Si = "<synthetic>";
const $Ts = "Auto Mode Active";
const P1n = "the tracked path is (or became) a link or other non-regular file, its directory changed since the checkpoint, or its backup could not be safely read";
function TF(e) {
    return e.startsWith(`<${fl}>`) || e.startsWith(`<${pf}>`) || QC(e) || e.startsWith(`<${awe}>`) || e.startsWith(`<${Fu}>`);
}
function QC(e) {
    return e.startsWith(`<${Bb}>`) || e.startsWith(`<${fp}>`);
}
const JC = [
    [
        `<${fp}>`,
        "record"
    ],
    [
        `<${fl}>`,
        "output"
    ],
    [
        `<${pf}>`,
        "output"
    ],
    [
        `<${Qz}>`,
        "caveat"
    ]
];
function sbo(e) {
    let s = e.message?.content;
    let r = Array.isArray(s) ? s.findLast((n)=>n?.type === "text")?.text : typeof s === "string" ? s : undefined;
    if (typeof r !== "string") {
        return;
    }
    return JC.find(([n])=>r.startsWith(n))?.[1];
}
function FTs(e) {
    return sbo(e) !== undefined;
}
const ht = "Edit";
const ten = "/.claude/**";
const nen = "~/.claude/**";
const ren = "File has not been read yet. Read it first before writing to it.";
const oen = "File is in a directory that is denied by your permission settings.";
const sen = "File is covered by a Read deny rule in your permission settings and cannot be edited.";
const ien = "File is covered by a Read deny rule in your permission settings and cannot be written.";
const HOt = "File content has changed since it was last read. This commonly happens when a linter or formatter run via Bash rewrites the file. Call Read on this file to refresh, then retry the edit.";
const aen = "File is not valid UTF-8. It may use a legacy encoding such as Windows-1252, Shift-JIS or GBK, or be binary. This tool saves the whole file as UTF-8, which would replace every byte it cannot decode with U+FFFD. Nothing was written. Make the change with a shell command that reads and writes the file in its own encoding, or ask the user whether to convert the file to UTF-8 first.";
const UTs = "The file on disk is not valid UTF-8, and the new content holds U+FFFD, which is what Read shows for the bytes of that file it cannot decode. If the content came from Read, writing it destroys those characters. Nothing was written. Make the change with a shell command that reads and writes the file in its own encoding, or ask the user whether to convert the file to UTF-8 first.";
class C8 extends Error {
    constructor(e){
        super(e);
        this.name = "FileStateError";
    }
}
const Xt = "Write";
const ibo = [
    "invalid_request",
    "catalog_unknown",
    "restricted_by_org",
    "unavailable_for_account",
    "not_offered",
    "alias_1m_disabled",
    "alias_1m_unsupported",
    "blocked_by_hook",
    "check_failed",
    "auth_failed",
    "model_not_current"
];
const iH = [
    "invalid_mode",
    "bypass_restricted",
    "bypass_disabled",
    "bypass_not_launched",
    "auto_mode_settings",
    "auto_mode_circuit_breaker",
    "auto_mode_fast_mode",
    "auto_mode_model",
    "auto_mode_unavailable"
];
const lH = [
    "remote_control_auth",
    "remote_control_terminal",
    "remote_control_ended_elsewhere",
    "remote_control_policy_disabled"
];
function BTs(e) {
    switch(e){
        case "auth":
            return "remote_control_auth";
        case "ended_elsewhere":
            return "remote_control_ended_elsewhere";
        case "terminal":
            return "remote_control_terminal";
        case "network":
            return;
    }
}
const hH = [
    "workspace_diff_pending"
];
const uH = [
    "stale_worker_epoch",
    "invalid_worker_epoch"
];
const Ow = [
    ...ibo,
    ...iH,
    ...lH,
    ...hH,
    ...uH
];
const X6e = [
    "summarized",
    "omitted",
    "highlights"
];
function O1n(e) {
    return X6e.includes(e);
}
const jn = [
    "durable_post",
    "ephemeral_post",
    "retry_backoff",
    "hold",
    "none"
];
const kw = [
    "orphaned_permission",
    "turn_handoff",
    "deferred_tool_use",
    "none"
];
function len(e, s) {
    if (e.type !== "result") {
        return e;
    }
    let r = s.subagentStats !== undefined ? {
        subagent_stats: s.subagentStats
    } : {};
    let n = e.safety_stops !== undefined ? {
        safety_stops: Math.max(e.safety_stops, s.safetyStops)
    } : {};
    if (e.total_cost_usd !== undefined && s.totalCostUsd < e.total_cost_usd) {
        return {
            ...e,
            ...r,
            ...n
        };
    }
    return {
        ...e,
        total_cost_usd: s.totalCostUsd,
        duration_api_ms: e.duration_api_ms === 0 ? e.duration_api_ms : s.durationApiMs,
        modelUsage: s.modelUsage,
        ...s.usage !== undefined && {
            usage: s.usage
        },
        ...r,
        ...n
    };
}
function GTs(e) {
    let s = e.toLowerCase().replace(/[^a-z]+/g, "_").replace(/^_+|_+$/g, "").slice(0, 64).replace(/_+$/, "");
    if (s === "") {
        return "custom";
    }
    return s;
}
function M7({ startedAt, common, variant }) {
    let n = {
        type: "result",
        duration_ms: Math.max(0, Math.round(performance.now() - startedAt)),
        uuid: randomUUID()
    };
    return {
        ...common,
        ...variant,
        ...n
    };
}
const _H = [
    "blocking_limit",
    "rapid_refill_breaker",
    "prompt_too_long",
    "image_error",
    "model_error",
    "api_error",
    "malformed_tool_use_exhausted",
    "aborted_streaming",
    "aborted_tools",
    "stop_hook_prevented",
    "hook_stopped",
    "tool_deferred",
    "max_turns",
    "background_requested",
    "completed"
];
const mH = [
    "budget_exhausted",
    "structured_output_retry_exhausted",
    "tool_deferred_unavailable",
    "turn_setup_failed"
];
const Nw = [
    ..._H,
    ...mH
];
function dH(e) {
    return e === "aborted_streaming" || e === "aborted_tools";
}
function Ect(e) {
    if (e === undefined) {
        return false;
    }
    switch(e){
        case "blocking_limit":
        case "rapid_refill_breaker":
        case "prompt_too_long":
        case "image_error":
        case "model_error":
        case "api_error":
        case "malformed_tool_use_exhausted":
        case "budget_exhausted":
        case "structured_output_retry_exhausted":
        case "tool_deferred_unavailable":
        case "turn_setup_failed":
            return true;
        case "aborted_streaming":
        case "aborted_tools":
        case "stop_hook_prevented":
        case "hook_stopped":
        case "tool_deferred":
        case "max_turns":
        case "background_requested":
        case "completed":
            return false;
        default:
            return false;
    }
}
function VTs(e) {
    if (e.reason === "api_error") {
        return `api_error_${e.errorKind ?? "unknown"}`;
    }
    return e.reason;
}
function M1n(e) {
    return dH(e) || Ect(e);
}
const qn = [
    "unavailable_headless",
    "unknown",
    "failed",
    "restart_required"
];
function qTs(e) {
    return typeof e === "object" && e !== null && "kind" in e && qn.some((s)=>s === e.kind);
}
const ekr = [
    "send",
    "flagged",
    "withheld"
];
const tkr = p(()=>u({
        text: o().describe("The subagent's whole report, never truncated, with a backslash inserted into text that imitates harness markup, such as a system tag (`<system-reminder>`), a `[harness:` line or a turn marker (`Human:` at the start of a line)"),
        warning: o().optional().describe("Auto mode's warning to show above `text`: a SECURITY WARNING, or a note that the review could not run")
    }));
const nkr = [
    "ios_app",
    "android_app"
];
const Iw = [
    "swift_edit",
    "uikit_import",
    "xcode_project",
    "ios_command",
    "kotlin_edit",
    "java_edit",
    "android_import",
    "android_manifest",
    "gradle_plugin",
    "android_command",
    "project_scan"
];
const Mw = [
    "server_tool_use",
    "web_search_tool_result",
    "web_fetch_tool_result",
    "advisor_tool_result",
    "code_execution_tool_result",
    "bash_code_execution_tool_result",
    "text_editor_code_execution_tool_result",
    "tool_search_tool_result",
    "mcp_tool_use",
    "mcp_tool_result",
    "container_upload",
    "compaction",
    "fallback"
];
const gH = [
    ...Mw,
    "mid_conv_system"
];
function Pw(e) {
    return _t({
        type: A(e)
    });
}
const fH = p(()=>u({
        type: A("ephemeral"),
        ttl: U([
            "5m",
            "1h"
        ]).optional()
    }));
const it = ()=>fH().nullable().optional().describe("Cache breakpoint at this block.");
const EH = p(()=>u({
        type: A("base64"),
        media_type: o().describe("image/jpeg, image/png, image/gif or image/webp."),
        data: o()
    }));
const SH = p(()=>u({
        type: A("url"),
        url: o()
    }));
const bH = p(()=>u({
        type: A("file"),
        file_id: o()
    }).describe("A Files API upload (beta surface)."));
const TH = p(()=>Ue([
        EH(),
        SH(),
        bH()
    ]).describe("Where the image bytes come from (inline base64, a URL, or a file upload)."));
const Gn = p(()=>u({
        type: A("image"),
        source: TH(),
        cache_control: it()
    }));
const AH = p(()=>u({
        type: A("base64"),
        media_type: o().describe("application/pdf."),
        data: o()
    }));
const wH = p(()=>u({
        type: A("text"),
        media_type: o().describe("text/plain."),
        data: o()
    }));
const yH = p(()=>u({
        type: A("url"),
        url: o()
    }));
const RH = p(()=>u({
        type: A("file"),
        file_id: o()
    }).describe("A Files API upload (beta surface)."));
const vH = p(()=>Ue([
        Zs(),
        Gn()
    ]));
const CH = p(()=>T(vH()));
const zH = p(()=>u({
        type: A("content"),
        content: Ue([
            o(),
            CH()
        ])
    }).describe("Document content given inline as text and image blocks."));
const OH = p(()=>Ue([
        AH(),
        wH(),
        zH(),
        yH(),
        RH()
    ]).describe("Where the document comes from (inline base64 PDF, inline text, inline blocks, a URL, or a file upload)."));
const Dw = p(()=>u({
        enabled: M().optional()
    }));
const xw = p(()=>u({
        type: A("document"),
        source: OH(),
        title: o().nullable().optional(),
        context: o().nullable().optional(),
        citations: Dw().nullable().optional(),
        cache_control: it()
    }));
var Zs = p(()=>u({
        type: A("text"),
        text: o(),
        citations: T(oe()).nullable().optional().describe("Citation locations (char_location, page_location, content_block_location, web_search_result_location, search_result_location), as the API defines them."),
        cache_control: it()
    }));
const Lw = p(()=>u({
        type: A("search_result"),
        source: o(),
        title: o(),
        content: T(Zs()),
        citations: Dw().optional(),
        cache_control: it()
    }));
const kH = p(()=>u({
        type: A("tool_use"),
        id: o(),
        name: o(),
        input: ue(o(), oe()).describe("The tool's input object; its shape is the named tool's input schema."),
        cache_control: it()
    }));
const NH = p(()=>u({
        type: A("tool_reference"),
        tool_name: o()
    }));
const IH = p(()=>Ue([
        Zs(),
        Gn(),
        Lw(),
        xw(),
        NH()
    ]));
const MH = p(()=>T(IH()));
const PH = p(()=>u({
        type: A("tool_result"),
        tool_use_id: o(),
        content: Ue([
            o(),
            MH()
        ]).optional().describe("The tool output: a string, or text / image / search_result / document blocks."),
        is_error: M().optional(),
        cache_control: it()
    }));
const DH = p(()=>Ue([
        Zs(),
        Gn(),
        xw(),
        Lw(),
        kH(),
        PH(),
        Vw(),
        jw(),
        ...gH.map(Pw)
    ]).describe("A request content block. text, image, document, search_result, tool_use, tool_result and thinking blocks are modelled; the other API block types are accepted by type tag only, and consumers must tolerate types newer than this list."));
const xH = p(()=>T(DH()));
const Bn = p(()=>Ue([
        o(),
        xH()
    ]).describe("A bare string (shorthand for one text block) or a list of content blocks."));
const Uw = p(()=>u({
        role: A("user"),
        content: Bn()
    }).describe('A Messages API MessageParam with role "user", as SDK user messages carry it.'));
const LH = p(()=>u({
        type: A("text"),
        text: o(),
        citations: T(oe()).nullable().optional().describe("Citation locations backing the text, as the API defines them.")
    }));
const UH = p(()=>u({
        type: A("tool_use"),
        id: o(),
        name: o(),
        input: ue(o(), oe()).describe("The tool's input object; its shape is the named tool's input schema."),
        caller: oe().optional().describe("Which caller invoked the tool (direct, or a server tool), when reported.")
    }));
var Vw = p(()=>u({
        type: A("thinking"),
        thinking: o(),
        signature: o()
    }));
var jw = p(()=>u({
        type: A("redacted_thinking"),
        data: o()
    }));
const VH = p(()=>Ue([
        LH(),
        UH(),
        Vw(),
        jw(),
        ...Mw.map(Pw)
    ]).describe("A response content block. text, tool_use and thinking blocks are modelled; the other API block types (server tool use and results, MCP tool blocks, container_upload, compaction, ...) are accepted by type tag only, and consumers must tolerate types newer than this list."));
const jH = p(()=>u({
        ephemeral_1h_input_tokens: E().int(),
        ephemeral_5m_input_tokens: E().int()
    }));
const qH = p(()=>u({
        web_search_requests: E().int(),
        web_fetch_requests: E().int()
    }));
const GH = p(()=>u({
        thinking_tokens: E().int().optional()
    }));
const Hn = p(()=>u({
        input_tokens: E().int(),
        output_tokens: E().int(),
        cache_creation_input_tokens: E().int().nullable(),
        cache_read_input_tokens: E().int().nullable(),
        cache_creation: jH().nullable().describe("Cache writes by TTL."),
        server_tool_use: qH().nullable(),
        service_tier: o().nullable().describe("standard, priority or batch."),
        inference_geo: o().nullable().optional(),
        speed: o().nullable().optional().describe("standard or fast."),
        iterations: oe().optional().describe("Per-iteration usage when the request ran several sampling iterations."),
        output_tokens_details: GH().nullable().optional(),
        fallback_credit: oe().optional().describe("Outcome of a fallback-credit token the request presented, or null.")
    }));
const qw = p(()=>u({
        id: o().optional(),
        type: A("message").optional(),
        role: A("assistant"),
        model: o(),
        content: T(VH()),
        stop_reason: o().nullable().describe("end_turn, max_tokens, stop_sequence, tool_use, pause_turn, refusal, ...; null while the message is still streaming."),
        stop_sequence: o().nullable().optional(),
        stop_details: oe().optional().describe("Structured refusal details, when stop_reason is refusal."),
        usage: Hn(),
        container: oe().optional().describe("The code-execution container used by the request, if any."),
        context_management: oe().optional().describe("Context-management edits applied during the request, if any.")
    }).describe("A Messages API Message (a BetaMessage, possibly one streamed block of it), as SDK assistant messages carry it."));
const Kn = [
    "CLAUDEAI_BEARER_REJECTED",
    "FIRST_PARTY_AUTH_REJECTED",
    "APPROVAL_REQUIRED"
];
function H1n(e) {
    if (e.type !== "failed") {
        return;
    }
    return Kn.find((s)=>s === e.errorCode);
}
const Gw = [
    "accept",
    "reject",
    "cancelled"
];
const DOt = [
    "user-rejected",
    "permission-rule",
    "automode-blocked",
    "automode-unavailable",
    "automode-parsing-error",
    "interrupted",
    "cancelled"
];
function lbo(e) {
    switch(e){
        case "automode-blocked":
        case "automode-unavailable":
        case "automode-parsing-error":
            return true;
        case "user-rejected":
        case "permission-rule":
        case "interrupted":
        case "cancelled":
        case undefined:
            return false;
    }
}
const Dt = p(()=>u({
        inputTokens: E().int(),
        outputTokens: E().int(),
        thinkingTokens: E().int().optional().describe("Thinking tokens, already counted inside outputTokens. Counts only turns run on CLI versions that record this field: absent when none did, and partial for a resumed session that began on an older version."),
        cacheReadInputTokens: E().int(),
        cacheCreationInputTokens: E().int(),
        webSearchRequests: E().int(),
        costUSD: E(),
        contextWindow: E().int(),
        maxOutputTokens: E().int(),
        canonicalModel: o().optional().describe("Canonical model id used for the pricing lookup (e.g. 'claude-opus-4-7'). May differ from the raw model string this entry is keyed by (provider-specific ids, aliases)."),
        provider: o().optional().describe("API provider that served this model (e.g. 'firstParty', 'bedrock', 'vertex', 'foundry', 'anthropicAws', 'mantle', 'gateway')."),
        costBasis: U([
            "list",
            "managed",
            "unknown"
        ]).optional().describe("Which price table the most recent request for this model was priced at: Claude Code's built-in list prices ('list'), the organization's managed-settings modelPricing rates or multiplier ('managed'), or neither ('unknown' — no pricing row and no built-in price matched the model ID, so costUSD is a guess at the default model's rate). Overwritten per request like canonicalModel, so a consumer that differences the cumulative costUSD per turn gets that turn's basis. Absent until this process has priced a request for the model (e.g. right after --resume) and on builds that predate the field; treat as 'list'.")
    }));
const BH = p(()=>A("json_schema"));
const zQ = p(()=>u({
        type: BH()
    }));
const HH = p(()=>u({
        type: A("json_schema"),
        schema: ue(o(), oe())
    }));
const OQ = p(()=>HH());
const KH = p(()=>U([
        "ANTHROPIC_API_KEY",
        "apiKeyHelper",
        "/login managed key",
        "none",
        "user",
        "project",
        "org",
        "temporary",
        "oauth"
    ]).describe("Where the credential used for API requests came from: 'ANTHROPIC_API_KEY' (environment variable), 'apiKeyHelper' (the configured helper command), '/login managed key' (an API key created and stored by /login with an Anthropic Console account), or 'none' (no API key in use - e.g. claude.ai OAuth login, a bearer token, or a third-party cloud provider). 'user' | 'project' | 'org' | 'temporary' | 'oauth' are legacy members that current CLIs never emit; they remain only so the type stays backward compatible."));
const kQ = p(()=>U([
        "local",
        "user",
        "project"
    ]).describe("Config scope for settings."));
const NQ = p(()=>A("context-1m-2025-08-07"));
const FH = p(()=>u({
        type: A("adaptive"),
        display: U([
            "summarized",
            "omitted"
        ]).optional()
    }).describe("Claude decides when and how much to think (Opus 4.6+)."));
const YH = p(()=>u({
        type: A("enabled"),
        budgetTokens: E().optional(),
        display: U([
            "summarized",
            "omitted"
        ]).optional()
    }).describe("Fixed thinking token budget (older models)"));
const WH = p(()=>u({
        type: A("disabled")
    }).describe("No extended thinking"));
const IQ = p(()=>Ue([
        FH(),
        YH(),
        WH()
    ]).describe("Controls Claude's thinking/reasoning behavior. When set, takes precedence over the deprecated maxThinkingTokens."));
const Wn = p(()=>A("comms").optional().catch(undefined).describe("@internal Coordinator-mode role for this MCP server. 'comms' marks the server the coordinator uses to address the user; the coordinator tool filter lets comms-roled servers' tools through. Claude Code extension to .mcp.json — host-side config, not part of the MCP wire protocol. Coordinator mode is activated via the CLAUDE_CODE_COORDINATOR_MODE environment variable; this field only takes effect when coordinator mode is active."));
const Hw = "Per-server tool-call timeout in milliseconds. Overrides the MCP_TOOL_TIMEOUT environment variable for this server. Hard wall-clock limit per call; progress notifications do not extend it. Values below 1000ms are ignored (falls through to MCP_TOOL_TIMEOUT or the default).";
const xt = p(()=>E().int().positive().optional().describe(Hw));
const Kw = p(()=>E().int().positive().optional().describe("Per-server HTTP request timeout in milliseconds, set by the host on the mcp_set_servers control event. Raises the per-request fetch first-byte budget and the tool-call watchdog for this server. Capped at 5 minutes. Ignored when `timeout` is also set.\n@internal"));
const $H = p(()=>u({
        type: A("stdio").optional(),
        command: o(),
        args: T(o()).optional(),
        env: ue(o(), o()).optional(),
        timeout: xt(),
        alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
        role: Wn()
    }));
const Fw = p(()=>u({
        name: o(),
        permission_policy: U([
            "always_allow",
            "always_ask",
            "always_deny"
        ]).optional(),
        org_max_permission: U([
            "allow",
            "ask",
            "blocked"
        ]).optional().describe("Org admin's per-tool ceiling. Drives the auto-mode isOrgAskCeiling gate so an admin 'ask' cap forces a user prompt even in auto mode.")
    }).describe("Per-tool permission policy carried on mcp_set_servers for remote servers."));
const XH = p(()=>u({
        type: A("sse"),
        url: o(),
        headers: ue(o(), o()).optional(),
        tools: T(Fw()).optional(),
        timeout: xt(),
        request_timeout_ms: Kw(),
        alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
        role: Wn()
    }));
const QH = p(()=>u({
        type: A("http"),
        url: o(),
        headers: ue(o(), o()).optional(),
        tools: T(Fw()).optional(),
        timeout: xt(),
        request_timeout_ms: Kw(),
        alwaysLoad: M().optional().describe("When true, all tools from this server are always included in the prompt and never deferred behind tool search, except a tool the server itself lists with _meta anthropic/alwaysLoad set to false. Equivalent to setting defer_loading: false on the API. When false, all tools from this server are deferred behind tool search. Default: tools are deferred when tool search is enabled. As a side effect, true also blocks startup until the server is connected (capped at the standard 5s connect timeout) even though MCP startup is otherwise non-blocking by default, since the tools must be present when the turn-1 prompt is built."),
        role: Wn()
    }));
const $n = p(()=>u({
        type: A("sdk"),
        name: o(),
        timeout: xt().catch(undefined).describe(`${Hw} Applies when the server is first registered; changing it for an already-registered server has no effect until it is removed and re-added.`),
        disableAutoBackground: M().optional().catch(undefined).describe("@internal When true, the CLI never moves a call to this server's tools to a background task on its own: not after the auto-background delay, and not early for a priority 'now' message, which instead interrupts the turn and so ends the call. Meant for a server whose calls wait on a person. The turn waits for the call's own result, up to the server's timeout, so set timeout too. A tool that advertises MCP task support can still run as a task. Any value but true counts as unset. Read when the server is first registered, from initialize, mcp_set_servers or --mcp-config.")
    }));
const er = p(()=>Ue([
        $H(),
        XH(),
        QH(),
        $n()
    ]));
const JH = p(()=>u({
        type: A("claudeai-proxy"),
        url: o(),
        id: o(),
        timeout: xt()
    }));
const ZH = p(()=>Ue([
        er(),
        JH()
    ]));
const Xn = p(()=>u({
        name: o().describe("Server name as configured"),
        status: U([
            "connected",
            "failed",
            "needs-auth",
            "pending",
            "disabled"
        ]).describe("Current connection status"),
        serverInfo: u({
            name: o(),
            version: o()
        }).optional().describe("Server information (available when connected)"),
        error: o().optional().describe("Error message (available when status is 'failed')"),
        error_code: U(Kn).optional().describe("@internal Why a 'failed' row failed, for the causes a host can fix: CLAUDEAI_BEARER_REJECTED (a claude.ai connector rejected the claude.ai login — sign in again), FIRST_PARTY_AUTH_REJECTED (a first-party Anthropic server rejected its credential — the claude.ai login, or for the Claude Design server its /design-login authorization; the row's error names which sign-in fixes it), APPROVAL_REQUIRED (a project-scoped server awaiting the user's approval). Absent for every other failure; new values are additive."),
        config: ZH().optional().describe("Server configuration (includes URL for HTTP/SSE servers)"),
        scope: o().optional().describe("Configuration scope (e.g., project, user, local, claudeai, managed)"),
        source: o().optional().describe("Where the server definition came from: sdk (an in-process server the SDK host registered — only the host can register one), plugin (a server a plugin ships or registers at runtime), or the config scope (user, project, local, dynamic, managed, enterprise, claudeai, agent). Key trust on this, not on the name. Absent on CLIs that predate the field."),
        tools: T(u({
            name: o(),
            description: o().optional(),
            annotations: u({
                readOnly: M().optional(),
                destructive: M().optional(),
                openWorld: M().optional()
            }).optional(),
            _meta: ue(o(), oe()).optional().describe("The MCP Apps (SEP-1865) members of the tool's `_meta`, for a host that renders the tool's `ui://` resource, under the keys the server used: `ui` (an object: `resourceUri`, a `ui://` string; `visibility`, an array of 'model' | 'app'; and any other member the server sent) and the deprecated flat `ui/resourceUri` (a `ui://` string). Validated and size-bounded; every other `_meta` key is withheld. Present only on a tool that declares one, from CLIs that advertise `mcp_tool_ui_meta_v1`.")
        })).optional().describe("Tools provided by this server (available when connected)"),
        capabilities: u({
            experimental: ue(o(), oe()).optional()
        }).optional().describe("@internal Server capabilities (available when connected). experimental['claude/channel'] is only present if the server's plugin is on the approved channels allowlist — use its presence to decide whether to show an Enable-channel prompt.")
    }).describe("Status information for an MCP server connection."));
const MQ = p(()=>u({
        added: T(o()).describe("Names of servers that were added"),
        removed: T(o()).describe("Names of servers that were removed"),
        errors: ue(o(), o()).describe("Map of server names to error messages for servers that failed to connect")
    }).describe("Result of a setMcpServers operation."));
const lt = p(()=>U([
        "userSettings",
        "projectSettings",
        "localSettings",
        "session",
        "cliArg"
    ]));
const Fn = p(()=>U([
        "allow",
        "deny",
        "ask"
    ]));
const eK = p(()=>U([
        "allow",
        "deny",
        "ask",
        "defer"
    ]));
const Yn = p(()=>u({
        toolName: o(),
        ruleContent: o().optional()
    }));
const Lt = p(()=>Wr("type", [
        u({
            type: A("addRules"),
            rules: T(Yn()),
            behavior: Fn(),
            destination: lt()
        }),
        u({
            type: A("replaceRules"),
            rules: T(Yn()),
            behavior: Fn(),
            destination: lt()
        }),
        u({
            type: A("removeRules"),
            rules: T(Yn()),
            behavior: Fn(),
            destination: lt()
        }),
        u({
            type: A("setMode"),
            mode: qE(()=>ce()),
            destination: lt()
        }),
        u({
            type: A("addDirectories"),
            directories: T(o()),
            destination: lt()
        }),
        u({
            type: A("removeDirectories"),
            directories: T(o()),
            destination: lt()
        })
    ]));
const Bw = p(()=>U([
        "user_temporary",
        "user_permanent",
        "user_reject"
    ]).describe("Classification of this permission decision for telemetry. SDK hosts that prompt users (desktop apps, IDEs) should set this to reflect what actually happened: user_temporary for allow-once, user_permanent for always-allow (both the click and later cache hits), user_reject for deny. If unset, the CLI infers conservatively (temporary for allow, reject for deny). The vocabulary matches tool_decision OTel events (monitoring-usage docs)."));
const Yw = p(()=>Ue([
        u({
            behavior: A("allow"),
            updatedInput: ue(o(), oe()).optional(),
            updatedPermissions: T(Lt()).optional(),
            toolUseID: o().optional(),
            decisionClassification: Bw().optional()
        }),
        u({
            behavior: A("deny"),
            message: o(),
            interrupt: M().optional(),
            toolUseID: o().optional(),
            decisionClassification: Bw().optional()
        })
    ]));
var ce = p(()=>pa(th, U([
        "default",
        "acceptEdits",
        "bypassPermissions",
        "plan",
        "dontAsk",
        "auto"
    ])).describe("Permission mode for controlling how tool executions are handled. 'default' - Standard behavior, prompts for dangerous operations. 'acceptEdits' - Auto-accept file edit operations. 'bypassPermissions' - Bypass all permission checks (requires allowDangerouslySkipPermissions). 'plan' - Planning mode, no actual tool execution. 'dontAsk' - Don't prompt for permissions, deny if not pre-approved. 'auto' - Use a model classifier to approve/deny permission prompts."));
const tK = [
    "PreToolUse",
    "PostToolUse",
    "PostToolUseFailure",
    "PostToolBatch",
    "Notification",
    "UserPromptSubmit",
    "UserPromptExpansion",
    "SessionStart",
    "SessionEnd",
    "Stop",
    "StopFailure",
    "SubagentStart",
    "SubagentStop",
    "PreCompact",
    "PostCompact",
    "PreModelSwitch",
    "PostModelSwitch",
    "PermissionRequest",
    "PermissionDenied",
    "Setup",
    "TeammateIdle",
    "TaskCreated",
    "TaskCompleted",
    "Elicitation",
    "ElicitationResult",
    "ConfigChange",
    "WorktreeCreate",
    "WorktreeRemove",
    "InstructionsLoaded",
    "CwdChanged",
    "FileChanged",
    "DirectoryAdded",
    "MessageDisplay"
];
const Ww = p(()=>U(tK));
const Ge = p(()=>u({
        name: o(),
        source: o().describe("sdk | plugin | user | project | local | dynamic | managed | enterprise | claudeai | agent — an open set; treat unknown values as an unrecognized configured source, never as sdk.")
    }).describe('The MCP server serving this tool, for `mcp__*` tools: `name` is the server\'s config key (for `source: "sdk"`, exactly the name the SDK host registered in `sdkMcpServers` / `mcp_set_servers`; for any other source, the key as authored in that configuration — untrusted text, the same value `mcp_status` and system/init report, to be escaped before display), `source` is where its definition came from — `sdk` (an in-process server the SDK host runs; only the host can register one, so a configured server of the same name never reads `sdk`), `plugin` (a server a plugin ships or registers at runtime), or a config scope (`user`, `project`, `local`, `dynamic` for --mcp-config / `mcp_set_servers` process servers, `managed`, `enterprise`, `claudeai`, `agent`). Key trust on `source`, not on the name or the tool-name prefix. Absent for non-MCP tools.'));
const k = p(()=>u({
        session_id: o(),
        transcript_path: o(),
        cwd: o(),
        prompt_id: o().optional().describe("UUID correlating a user prompt with all subsequent events until the next prompt. Same value emitted on OpenTelemetry events as the `prompt.id` attribute, so hook output can be joined to OTel events at prompt grain. Absent until the first user input of the process lifetime."),
        permission_mode: o().optional(),
        agent_id: o().optional().describe("Subagent identifier. Present only when the hook fires from within a subagent (e.g., a tool called by an AgentTool worker). Absent for the main thread, even in --agent sessions. Use this field (not agent_type) to distinguish subagent calls from main-thread calls."),
        agent_type: o().optional().describe('Agent type name (e.g., "general-purpose", "code-reviewer"). Present when the hook fires from within a subagent (alongside agent_id), or on the main thread of a session started with --agent (without agent_id).'),
        effort: u({
            level: o().describe('Active effort level for the current turn (e.g., "low", "medium", "high", "xhigh", "max"), after any silent downgrade for the selected model. Also exposed to hook commands and Bash as the CLAUDE_EFFORT env var.')
        }).optional().describe("Reasoning effort applied to the current turn. Same shape as StatusLineCommandInput.effort. Present for hooks that fire within a tool-use context (PreToolUse, PostToolUse, Stop, SubagentStop, etc.) on a model that supports the effort parameter; absent for session-lifecycle hooks and models without effort support.")
    }));
const sK = p(()=>k().and(u({
        hook_event_name: A("PreToolUse"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        mcp_server: Ge().optional()
    })));
const rK = p(()=>k().and(u({
        hook_event_name: A("PermissionRequest"),
        tool_name: o(),
        tool_input: oe(),
        permission_suggestions: T(Lt()).optional(),
        mcp_server: Ge().optional()
    })));
const nK = p(()=>k().and(u({
        hook_event_name: A("PostToolUse"),
        tool_name: o(),
        tool_input: oe(),
        tool_response: oe(),
        tool_use_id: o(),
        duration_ms: E().optional().describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
        mcp_server: Ge().optional()
    })));
const oK = p(()=>k().and(u({
        hook_event_name: A("PostToolUseFailure"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        error: o(),
        is_interrupt: M().optional(),
        duration_ms: E().optional().describe("Tool execution time in milliseconds. Excludes permission-prompt and hook time."),
        mcp_server: Ge().optional()
    })));
const aK = p(()=>u({
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        tool_response: oe().optional()
    }));
const iK = p(()=>k().and(u({
        hook_event_name: A("PostToolBatch"),
        tool_calls: T(aK())
    })).describe("Hook input for the PostToolBatch event. Fired once after every tool call in a batch has resolved, before the next model request. PostToolUse fires per-tool and may run concurrently for parallel tool calls; PostToolBatch fires exactly once with the full batch."));
const lK = p(()=>k().and(u({
        hook_event_name: A("PermissionDenied"),
        tool_name: o(),
        tool_input: oe(),
        tool_use_id: o(),
        reason: o(),
        mcp_server: Ge().optional()
    })));
const cK = p(()=>k().and(u({
        hook_event_name: A("Notification"),
        message: o(),
        title: o().optional(),
        notification_type: o()
    })));
const dK = p(()=>k().and(u({
        hook_event_name: A("UserPromptSubmit"),
        prompt: o(),
        source: U([
            "user",
            "sdk",
            "system",
            "loop_wakeup",
            "schedule_wakeup",
            "poll_event"
        ]).optional().describe("Who authored/injected the prompt: `user` = submitted from the interactive composer, `sdk` = non-interactive entrypoint (`-p` / Agent SDK), `loop_wakeup` = dynamic /loop wakeup, `schedule_wakeup` = scheduled-task fire (CronCreate/routine), `system` = other machine-injected turns (peer/channel messages, task notifications, auto-continuation), `poll_event` = the poll-event channel enqueue-time pass (the hook fires when the host submits an event, before its delivery ack exists — a blocking verdict rejects the event). Payloads may omit it while the field rolls out."),
        session_title: o().optional()
    })));
const hK = p(()=>k().and(u({
        hook_event_name: A("UserPromptExpansion"),
        expansion_type: U([
            "slash_command",
            "mcp_prompt"
        ]),
        command_name: o(),
        command_args: o(),
        command_source: o().optional(),
        prompt: o()
    })));
const uK = p(()=>k().and(u({
        hook_event_name: A("SessionStart"),
        source: U([
            "startup",
            "resume",
            "clear",
            "compact",
            "fork"
        ]),
        agent_type: o().optional(),
        model: o().optional(),
        session_title: o().optional(),
        seconds_since_last_response: E().optional().describe("resume/fork: seconds since the resumed transcript's last assistant response"),
        context_tokens: E().optional().describe("resume/fork: the resumed transcript's last response input + cache_read + cache_creation + output tokens (for a server-side tool loop, its last iteration's window, not the summed totals)"),
        prompt_cache_likely_expired: M().optional().describe("resume/fork: seconds_since_last_response exceeds the prompt-cache TTL, so the first request re-caches context_tokens"),
        estimated_cache_write_usd: E().optional().describe("resume/fork: estimated cost of re-caching context_tokens on the session model — the managed modelPricing when set, otherwise list price; excludes the response")
    })));
const pK = p(()=>k().and(u({
        hook_event_name: A("Setup"),
        trigger: U([
            "init",
            "maintenance"
        ])
    })));
const $w = p(()=>u({
        id: o(),
        type: o().describe("Friendly task-type label (e.g. 'shell', 'subagent', 'monitor', 'workflow'). Falls back to the raw discriminant for unknown types."),
        status: o(),
        description: o().describe("Free-text description. Capped at 1000 chars; clipped values append " + 'an in-string "… [+N chars]" marker.'),
        command: o().optional().describe("Shell command line. Only present for 'shell' tasks. Capped at 1000 " + 'chars with the same "… [+N chars]" marker.'),
        agent_type: o().optional().describe("Subagent type name. Only present for 'subagent' tasks."),
        server: o().optional().describe("MCP server name. Only present for 'monitor' / 'MCP task' tasks."),
        tool: o().optional().describe("MCP tool name. Only present for 'monitor' / 'MCP task' tasks."),
        name: o().optional().describe("Workflow name. Only present for 'workflow' tasks.")
    }));
const Xw = p(()=>u({
        id: o(),
        schedule: o().describe('Cron expression, e.g. "0 9 * * 1-5".'),
        recurring: M().describe("False for one-shot wakeups whose cron field encodes a single fire time; true for tasks that re-fire on every match."),
        prompt: o().describe("Prompt text submitted when the cron fires. Capped at 1000 chars; " + 'clipped values append an in-string "… [+N chars]" marker.')
    }));
const _K = p(()=>k().and(u({
        hook_event_name: A("Stop"),
        stop_hook_active: M(),
        last_assistant_message: o().optional().describe("Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."),
        background_tasks: T($w()).optional().describe('In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'),
        session_crons: T(Xw()).optional().describe("Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.")
    })));
const mK = p(()=>k().and(u({
        hook_event_name: A("StopFailure"),
        error: Zn(),
        error_details: o().optional(),
        last_assistant_message: o().optional()
    })));
const gK = p(()=>k().and(u({
        hook_event_name: A("SubagentStart"),
        agent_id: o(),
        agent_type: o()
    })));
const fK = p(()=>k().and(u({
        hook_event_name: A("SubagentStop"),
        stop_hook_active: M(),
        agent_id: o(),
        agent_transcript_path: o(),
        agent_type: o(),
        last_assistant_message: o().optional().describe("Text content of the last assistant message before stopping. Avoids the need to read and parse the transcript file."),
        background_tasks: T($w()).optional().describe('In-flight background work (running/pending + backgrounded) registered in this session. Lets hooks distinguish "session is done" from "session is paused waiting for background work to wake it". Empty array when nothing is in flight.'),
        session_crons: T(Xw()).optional().describe("Session-scoped cron tasks (CronCreate, ScheduleWakeup, /loop) that will wake this session later. Empty array when none are scheduled.")
    })));
const EK = p(()=>k().and(u({
        hook_event_name: A("PreCompact"),
        trigger: U([
            "manual",
            "auto"
        ]),
        custom_instructions: o().nullable()
    })));
const SK = p(()=>k().and(u({
        hook_event_name: A("PostCompact"),
        trigger: U([
            "manual",
            "auto"
        ]),
        compact_summary: o().describe("The conversation summary produced by compaction")
    })));
const bK = {
    command: "command: /model <name>, the /config Model row, or enabling fast mode when that promotes the model",
    picker: "picker: an interactive model picker",
    sdk: "sdk: headless set_model (SDK, Remote Control, IDE)",
    auto: "auto: automatic fallback or other programmatic change",
    resume: "resume: model restored while resuming a session"
};
function Qw(e) {
    return u({
        from_model: o().describe("Resolved model id the session was running before the switch"),
        to_model: o().describe("Resolved model id the session runs after the switch"),
        requested_model: o().nullable().describe('What was asked for (alias such as "opus", a full id, or null for "default")'),
        source: U(e).describe(e.map((s)=>bK[s]).join("; ")),
        context_tokens: E().describe("Prompt tokens the next request re-sends: the last main-thread response's input + cache_read + cache_creation + output tokens (0 before the first response; for a server-side tool loop, its last iteration's window, not the summed totals)"),
        prompt_cache_warm: M().describe("Whether the current model's prompt cache is likely still warm (a switch then forfeits it)"),
        cache_ttl: U([
            "5m",
            "1h"
        ]),
        estimated_cache_write_usd: E().describe("Estimated cost of re-caching context_tokens on to_model at its cache-write rate — the managed modelPricing when set, otherwise list price; excludes the response"),
        pricing: U([
            "configured",
            "catalog",
            "default"
        ]).describe("configured: priced at the managed modelPricing setting; catalog: list price; default: to_model unknown, the default tier was assumed")
    });
}
const TK = p(()=>k().and(u({
        hook_event_name: A("PreModelSwitch")
    })).and(Qw([
        "command",
        "picker",
        "sdk"
    ])));
const AK = p(()=>k().and(u({
        hook_event_name: A("PostModelSwitch")
    })).and(Qw([
        "command",
        "picker",
        "sdk",
        "auto",
        "resume"
    ])));
const wK = p(()=>k().and(u({
        hook_event_name: A("TeammateIdle"),
        teammate_name: o(),
        team_name: o().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
    })));
const yK = p(()=>k().and(u({
        hook_event_name: A("TaskCreated"),
        task_id: o(),
        task_subject: o(),
        task_description: o().optional(),
        teammate_name: o().optional(),
        team_name: o().optional().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
    })));
const RK = p(()=>k().and(u({
        hook_event_name: A("TaskCompleted"),
        task_id: o(),
        task_subject: o(),
        task_description: o().optional(),
        teammate_name: o().optional(),
        team_name: o().optional().describe("@deprecated Sessions have a single implicit team; this carries the session-derived team name and will be removed in a future release.")
    })));
const vK = p(()=>k().and(u({
        hook_event_name: A("Elicitation"),
        mcp_server_name: o(),
        message: o(),
        mode: U([
            "form",
            "url"
        ]).optional(),
        url: o().optional(),
        elicitation_id: o().optional(),
        requested_schema: ue(o(), oe()).optional()
    })).describe("Hook input for the Elicitation event. Fired when an MCP server requests user input. Hooks can auto-respond (accept/decline) instead of showing the dialog."));
const CK = p(()=>k().and(u({
        hook_event_name: A("ElicitationResult"),
        mcp_server_name: o(),
        elicitation_id: o().optional(),
        mode: U([
            "form",
            "url"
        ]).optional(),
        action: U([
            "accept",
            "decline",
            "cancel"
        ]),
        content: ue(o(), oe()).optional()
    })).describe("Hook input for the ElicitationResult event. Fired after the user responds to an MCP elicitation. Hooks can observe or override the response before it is sent to the server."));
const zK = [
    "user_settings",
    "project_settings",
    "local_settings",
    "policy_settings",
    "skills"
];
const OK = p(()=>k().and(u({
        hook_event_name: A("ConfigChange"),
        source: U(zK),
        file_path: o().optional()
    })));
const kK = [
    "session_start",
    "nested_traversal",
    "path_glob_match",
    "include",
    "compact"
];
const NK = [
    "User",
    "Project",
    "Local",
    "Managed"
];
const IK = p(()=>k().and(u({
        hook_event_name: A("InstructionsLoaded"),
        file_path: o(),
        memory_type: U(NK),
        load_reason: U(kK),
        globs: T(o()).optional(),
        trigger_file_path: o().optional(),
        parent_file_path: o().optional()
    })));
const MK = p(()=>k().and(u({
        hook_event_name: A("WorktreeCreate"),
        name: o()
    })));
const PK = p(()=>k().and(u({
        hook_event_name: A("WorktreeRemove"),
        worktree_path: o()
    })));
const DK = p(()=>k().and(u({
        hook_event_name: A("CwdChanged"),
        old_cwd: o(),
        new_cwd: o()
    })));
const xK = p(()=>k().and(u({
        hook_event_name: A("FileChanged"),
        file_path: o(),
        event: U([
            "change",
            "add",
            "unlink"
        ])
    })));
const LK = p(()=>k().and(u({
        hook_event_name: A("DirectoryAdded"),
        directory: o().describe("Absolute path of the directory that was added."),
        source: U([
            "slash_command",
            "register_repo_root"
        ]).describe('How the directory was added: "slash_command" for /add-dir, "register_repo_root" for the SDK control_request.')
    })));
const UK = p(()=>k().and(u({
        hook_event_name: A("MessageDisplay"),
        turn_id: o().describe("UUID of the current turn."),
        message_id: o().describe("UUID of the assistant message being displayed. Stable across " + "every flush of the same message. Not the API msg_… id."),
        index: E().int().describe("Zero-based index of this delta within the message. Increments by one per flush."),
        final: M().describe("True on the message's last flush. Exactly one flush per message has it."),
        delta: o().describe("The newly completed lines since the prior flush. Always whole lines, except on the final flush which may end mid-line. The delta of the final flush is empty when the message ends on a newline; treat final as the end-of-message signal regardless.")
    })).describe("Hook input for the MessageDisplay event. Fired with each batch of newly completed lines while an assistant message streams. Display-only: the stored message and what the model sees are untouched."));
const VK = [
    "clear",
    "resume",
    "logout",
    "prompt_input_exit",
    "other"
];
const jK = p(()=>U(VK));
const qK = p(()=>k().and(u({
        hook_event_name: A("SessionEnd"),
        reason: jK()
    })));
const J6e = p(()=>Ue([
        sK(),
        nK(),
        oK(),
        iK(),
        lK(),
        cK(),
        dK(),
        hK(),
        uK(),
        qK(),
        _K(),
        mK(),
        gK(),
        fK(),
        EK(),
        SK(),
        TK(),
        AK(),
        rK(),
        pK(),
        wK(),
        yK(),
        RK(),
        vK(),
        CK(),
        OK(),
        IK(),
        MK(),
        PK(),
        DK(),
        xK(),
        LK(),
        UK()
    ]));
const GK = p(()=>u({
        async: A(true),
        asyncTimeout: E().optional()
    }));
const BK = p(()=>u({
        hookEventName: A("PreToolUse"),
        permissionDecision: eK().optional(),
        permissionDecisionReason: o().optional(),
        updatedInput: ue(o(), oe()).optional(),
        additionalContext: o().optional()
    }));
const HK = p(()=>u({
        hookEventName: A("UserPromptSubmit"),
        additionalContext: o().optional(),
        sessionTitle: o().optional(),
        suppressOriginalPrompt: M().optional().describe('When decision is "block", omit the original prompt from the block message')
    }));
const KK = p(()=>u({
        hookEventName: A("UserPromptExpansion"),
        additionalContext: o().optional(),
        suppressOriginalPrompt: M().optional().describe('When decision is "block", omit the original prompt from the block message')
    }));
const FK = p(()=>u({
        hookEventName: A("SessionStart"),
        additionalContext: o().optional(),
        initialUserMessage: o().optional(),
        sessionTitle: o().optional(),
        watchPaths: T(o()).optional(),
        reloadSkills: M().optional().describe("Re-scan skill and command directories after SessionStart hooks complete, so skills installed by the hook are available in the same session")
    }));
const YK = p(()=>u({
        hookEventName: A("Setup"),
        additionalContext: o().optional()
    }));
const WK = p(()=>u({
        hookEventName: A("PreModelSwitch"),
        permissionDecision: U([
            "allow",
            "deny",
            "ask"
        ]).optional().describe("Same contract as PreToolUse: allow proceeds (skipping the interactive cache-miss confirm), deny cancels the switch, ask asks the user to confirm (a headless session refuses instead)"),
        permissionDecisionReason: o().optional()
    }));
const $K = p(()=>u({
        hookEventName: A("PostModelSwitch"),
        additionalContext: o().optional().describe("Reaches the model with the next request the new model serves")
    }));
const XK = p(()=>u({
        hookEventName: A("SubagentStart"),
        additionalContext: o().optional()
    }));
const QK = p(()=>u({
        hookEventName: A("PostToolUse"),
        additionalContext: o().optional(),
        classifierContext: o().optional().describe("Host-asserted context shown to the auto-mode permission classifier alongside this tool call's result. In the live session the classifier may weigh a user statement relayed here as user intent (it can satisfy a consent bar a user turn would satisfy, never a hard boundary); values restored from saved session state are treated as unverified context only. Relay discipline is the host's obligation: put ONLY genuine user statements in intent-bearing positions — never tool output or model text dressed as one. Capped at 2000 UTF-16 code units, a budget shared across all hooks that contribute to one call (surrogate-pair-safe; emoji and other astral characters count as two). Honored on synchronous hook responses only: an async hook's late response arrives after the result message is frozen and this field in it is silently ignored. Security note: do not copy untrusted tool output or third-party text into it blindly — content placed here reaches the permission classifier with host-application framing. Applies only to calls the classifier transcript shows: read-only lookups the transcript omits (file reads, searches) and remote-engine shells produce no per-result line, and context attached to them is silently unused. Not a delivery channel: it is bound to a single call id and sized for a short assertion, not for relaying messages or events. Rewrite integrity: if this assertion describes output you are rewriting, return it in the SAME hook result as the rewrite — it is then dropped automatically if your rewrite is rejected or superseded by a later hook's rewrite; assertions returned without a rewrite are never invalidated by other hooks' rewrites, so a non-rewriting hook should assert only what holds regardless of other hooks' rewrites — hosts that need an assertion bound to exact output bytes should make it in the hook that produces those bytes. (Do NOT return an identity rewrite just to pair an assertion: hooks run in parallel on the ORIGINAL output, so an identity rewrite competes last-write-wins with sibling rewrites and can clobber a real redaction.)"),
        updatedToolOutput: oe().optional().describe("Replaces the tool output before it is sent to the model"),
        updatedMCPToolOutput: oe().optional().describe("Replaces the output for MCP tools only. Prefer updatedToolOutput, which works for all tools")
    }));
const JK = p(()=>u({
        hookEventName: A("PostToolBatch"),
        additionalContext: o().optional()
    }));
const ZK = p(()=>u({
        hookEventName: A("PostToolUseFailure"),
        additionalContext: o().optional()
    }));
const e0 = p(()=>u({
        hookEventName: A("Stop"),
        additionalContext: o().optional()
    }).describe("Hook-specific output for the Stop event. additionalContext is non-error feedback delivered to the model; the conversation continues so the model can act on it."));
const t0 = p(()=>u({
        hookEventName: A("SubagentStop"),
        additionalContext: o().optional()
    }).describe("Hook-specific output for the SubagentStop event. additionalContext is non-error feedback delivered to the subagent; the subagent continues so it can act on it."));
const s0 = p(()=>u({
        hookEventName: A("PermissionDenied"),
        retry: M().optional()
    }));
const r0 = p(()=>u({
        hookEventName: A("Notification"),
        additionalContext: o().optional()
    }));
const n0 = p(()=>u({
        hookEventName: A("PermissionRequest"),
        decision: Ue([
            u({
                behavior: A("allow"),
                updatedInput: ue(o(), oe()).optional(),
                updatedPermissions: T(Lt()).optional()
            }),
            u({
                behavior: A("deny"),
                message: o().optional(),
                interrupt: M().optional()
            })
        ])
    }));
const o0 = p(()=>u({
        hookEventName: A("CwdChanged"),
        watchPaths: T(o()).optional()
    }));
const a0 = p(()=>u({
        hookEventName: A("FileChanged"),
        watchPaths: T(o()).optional()
    }));
const i0 = p(()=>u({
        hookEventName: A("MessageDisplay"),
        displayContent: o().optional().describe("Text displayed in place of the delta. Omit (or return the delta unchanged) to display the original.")
    }).describe("Hook-specific output for the MessageDisplay event. Display-only: replaces the delta on screen without changing the stored message."));
const l0 = p(()=>u({
        continue: M().optional(),
        suppressOutput: M().optional(),
        stopReason: o().optional(),
        decision: U([
            "approve",
            "block"
        ]).optional(),
        systemMessage: o().optional(),
        terminalSequence: o().optional().describe("A terminal escape sequence (e.g. OSC 9 / OSC 777 desktop-notification) for Claude Code to emit on your behalf. Only notification/title OSCs (0, 1, 2, 9, 99, 777) and BEL are permitted; anything else is dropped."),
        reason: o().optional(),
        hookSpecificOutput: Ue([
            BK(),
            HK(),
            KK(),
            FK(),
            YK(),
            WK(),
            $K(),
            XK(),
            QK(),
            ZK(),
            JK(),
            e0(),
            t0(),
            s0(),
            r0(),
            n0(),
            c0(),
            d0(),
            o0(),
            a0(),
            h0(),
            i0()
        ]).optional()
    }));
var c0 = p(()=>u({
        hookEventName: A("Elicitation"),
        action: U([
            "accept",
            "decline",
            "cancel"
        ]).optional(),
        content: ue(o(), oe()).optional()
    }).describe("Hook-specific output for the Elicitation event. Return this to programmatically accept or decline an MCP elicitation request."));
var d0 = p(()=>u({
        hookEventName: A("ElicitationResult"),
        action: U([
            "accept",
            "decline",
            "cancel"
        ]).optional(),
        content: ue(o(), oe()).optional()
    }).describe("Hook-specific output for the ElicitationResult event. Return this to override the action or content before the response is sent to the MCP server."));
var h0 = p(()=>u({
        hookEventName: A("WorktreeCreate"),
        worktreePath: o()
    }).describe("Hook-specific output for the WorktreeCreate event. Provides the absolute path to the created worktree directory. Command hooks print the path on stdout instead."));
const Jw = p(()=>Ue([
        GK(),
        l0()
    ]));
const Vt = p(()=>u({
        name: o().describe("Skill name (without the leading slash)"),
        description: o().describe("Description of what the skill does"),
        argumentHint: o().describe('Hint for skill arguments (e.g., "<file>")'),
        aliases: T(o()).optional().describe("Alternate names that resolve to this command (e.g., /cost and /stats both resolve to /usage)"),
        builtin: M().optional().describe("True when the command is Claude Code's own; absent for a command defined by a user, project, plugin or MCP server. Rows can share a name: when a marked row carries it, /name runs that one, and an unmarked row is the one /name runs only when no marked row shares its name. The marker describes the row's name, not its aliases: a typed alias runs a command that has it as its name, when one exists, whatever this marker says.")
    }).describe("Information about an available skill (invoked via /command syntax)."));
const Qn = p(()=>u({
        name: o().describe('Agent type identifier (e.g., "Explore")'),
        description: o().describe("Description of when to use this agent"),
        model: o().optional().describe("Model this agent uses: an alias or model ID, or 'inherit' for the parent's model. If omitted, uses the default subagent model when one is configured, else the parent's model")
    }).describe("Information about an available subagent that can be invoked via the Task tool."));
const tr = p(()=>u({
        value: o().describe("Model identifier to use in API calls"),
        resolvedModel: o().optional().describe("Canonical wire model id this row's `value` resolves to (e.g. 'sonnet' → 'claude-sonnet-5'). Lets hosts match a persisted explicit id against the alias row that covers it."),
        displayName: o().describe("Human-readable display name"),
        description: o().describe("Description of the model's capabilities"),
        supportsEffort: M().optional().describe("Whether this model supports effort levels"),
        supportedEffortLevels: T(U([
            "low",
            "medium",
            "high",
            "xhigh",
            "max"
        ])).optional().describe("Available effort levels for this model"),
        supportsAdaptiveThinking: M().optional().describe("Whether this model supports adaptive thinking (Claude decides when and how much to think)"),
        supportsFastMode: M().optional().describe("Whether this model supports fast mode"),
        supportsAutoMode: M().optional().describe("Whether this model supports auto mode"),
        disabled: M().optional().describe("@internal Model is visible but not selectable (e.g. a model the org's Zero Data Retention setting excludes). The human-readable reason is folded into `description`; a structured disabledReason field is the extension point if a consumer ever needs the reason separately."),
        promoListPrice: o().optional().describe("@internal List price (e.g. `$3/$15`) for a model currently on a launch promo. `description` carries only the promo price so plain-text consumers read it unambiguously; rich pickers prepend this struck-through before the first `$X/$Y` in `description`. Absent when no promo is active.")
    }).describe("Information about an available model."));
const Zw = p(()=>u({
        email: o().optional(),
        organization: o().optional(),
        subscriptionType: o().optional(),
        tokenSource: o().optional(),
        apiKeySource: o().optional(),
        apiProvider: U([
            "firstParty",
            "bedrock",
            "vertex",
            "foundry",
            "anthropicAws",
            "anthropicGoogleCloud",
            "mantle",
            "gateway"
        ]).optional().describe('Active API backend. Anthropic OAuth login only applies when "firstParty"; for 3P providers the other fields are absent and auth is external (AWS creds, gcloud ADC, etc.). "gateway" means the CLI is authenticated against an enterprise gateway.')
    }).describe("Information about the logged in user's account."));
const u0 = p(()=>Ue([
        o(),
        ue(o(), er())
    ]));
const ey = p(()=>u({
        description: o().describe("Natural language description of when to use this agent"),
        tools: T(o()).optional().describe("Array of allowed tool names. If omitted, inherits all tools from parent. Note: passing 'Skill' here is deprecated — use the `skills` field instead."),
        disallowedTools: T(o()).optional().describe("Array of tool names to explicitly disallow for this agent. MCP server-level specs (mcp__server, mcp__server__*, mcp__*) remove every tool from the named server (or all MCP tools)."),
        prompt: o().describe("The agent's system prompt"),
        model: o().optional().describe("Model alias (e.g. 'fable', 'opus', 'sonnet', 'haiku') or full model ID (e.g. 'claude-fable-5'). 'inherit' uses the main model; if omitted, uses the default subagent model when one is configured, else the main model"),
        mcpServers: T(u0()).optional(),
        criticalSystemReminder_EXPERIMENTAL: o().optional().describe("Experimental: Critical reminder added to system prompt"),
        skills: T(o()).optional().describe("Array of skill names to preload into the agent context"),
        initialPrompt: o().optional().describe("Auto-submitted as the first user turn when this agent is the main thread agent. Slash commands are processed. Prepended to any user-provided prompt."),
        maxTurns: E().int().positive().optional().describe("Maximum number of agentic turns (API round-trips) before stopping"),
        autoCompactWindow: E().int().min(b0).max(TN).optional().describe("Token count at which this agent compacts its own conversation when it runs as a subagent. It only lowers the window the subagent would otherwise inherit. No effect on the main session agent."),
        background: M().optional().describe("Run this agent as a background task (non-blocking, fire-and-forget) when invoked"),
        omitClaudeMd: M().optional().describe("Run this agent without the user, project and local CLAUDE.md instruction files when it runs as a subagent; managed policy files are kept. For agents that take everything they need from the delegation prompt. No effect on the main session agent."),
        memory: U([
            "user",
            "project",
            "local"
        ]).optional().describe("Scope for auto-loading agent memory files. 'user' - ~/.claude/agent-memory/<agentType>/, 'project' - .claude/agent-memory/<agentType>/, 'local' - .claude/agent-memory-local/<agentType>/"),
        effort: Ue([
            U([
                "low",
                "medium",
                "high",
                "xhigh",
                "max"
            ]),
            E().int()
        ]).optional().describe("Reasoning effort level for this agent. Either a named level or an integer"),
        permissionMode: ce().optional().describe("Permission mode controlling how tool executions are handled"),
        observer: o().optional().describe("Agent type auto-spawned as a background observer whenever this agent runs. The observer receives read-only activity digests and reports via the ObserverReport tool; it never participates in the task."),
        observerMessage: o().optional().describe("Supplemental postamble appended (after the harness-owned default) to each activity digest sent to the observer. Blank values are ignored.")
    }).describe("Definition for a custom subagent that can be invoked via the Agent tool."));
const PQ = p(()=>U([
        "user",
        "project",
        "local"
    ]).describe("Source for loading filesystem-based settings. 'user' - Global user settings (~/.claude/settings.json). 'project' - Project settings (.claude/settings.json). 'local' - Local settings (.claude/settings.local.json)."));
const D1n = p(()=>u({
        type: A("local").describe("Plugin type. Currently only 'local' is supported"),
        path: o().describe("Absolute or relative path to the plugin directory"),
        skipMcpDiscovery: M().optional().describe("When true, the engine loads skills/hooks/agents/commands from this plugin but does NOT read its .mcp.json or manifest mcpServers. Use when the SDK host owns this plugin's MCP connections.")
    }).describe("Configuration for loading a plugin."));
const Jn = "Count of tracked files NOT restored or deleted because a symlink, hard link, or other non-regular file was detected at the tracked path, its parent directory no longer resolves to where it pointed when the checkpoint was taken, or its backup could not be safely read. Only populated by a real (non-dryRun) rewind — on a dryRun response the field is never set and the preview counts do not reflect link-safety refusals. Absent or 0 on a real rewind means no link-safety refusals occurred; other per-file failures (for example a missing backup file) are not counted here; they are reported in telemetry, and when every differing file fails to restore the rewind itself fails (canRewind: false).";
const DQ = p(()=>u({
        canRewind: M(),
        error: o().optional(),
        filesChanged: T(o()).optional(),
        insertions: E().int().optional(),
        deletions: E().int().optional(),
        skippedLinks: E().optional().describe(Jn)
    }).describe("Result of a rewindFiles operation."));
const p0 = p(()=>Uw().describe('An Anthropic Messages API user message: a MessageParam with role "user" whose content is a string or an array of content blocks (text, image, document, tool_result, ...). See the Messages API reference for the block types.'));
const _0 = p(()=>Bn());
const m0 = p(()=>qw().describe('Shaped like an Anthropic Messages API Message object (role "assistant"): id, model, content blocks (text, thinking, tool_use, ...), stop_reason and usage. When streamed, content typically holds the single block this message delivers and stop_reason is still null — see SDKAssistantMessage. See the Messages API reference for the block types.'));
const g0 = p(()=>oe().describe("One Anthropic Messages API streaming event (message_start, content_block_start, content_block_delta, content_block_stop, message_delta, message_stop) as defined for the streaming Messages API."));
const _ = p(()=>o());
const sy = p(()=>Hn().describe("MAIN AGENT LOOP ONLY — excludes Task subagent, sidechain, and auxiliary model calls, and is per-turn in streaming-input sessions. Prefer modelUsage for token/cost accounting."));
var Zn = p(()=>U([
        "authentication_failed",
        "oauth_org_not_allowed",
        "account_on_hold",
        "verification_required",
        "billing_error",
        "rate_limit",
        "overloaded",
        "invalid_request",
        "model_not_found",
        "server_error",
        "unknown",
        "max_output_tokens",
        "cloud_credential_error"
    ]));
const f0 = p(()=>Ue([
        A("compacting"),
        A("requesting"),
        Bm()
    ]));
const ry = p(()=>u({
        uri: o(),
        name: o(),
        title: o().optional(),
        description: o().optional(),
        mimeType: o().optional(),
        size: E().optional(),
        annotations: ue(o(), oe()).optional()
    }));
const E0 = p(()=>u({
        kind: U(dAs),
        servers: T(o()).optional().describe("mcp_needs_auth / mcp_disabled: the server names as configured. mcp_required_missing: the name patterns the agent definition requires that no connected server matches."),
        provider: U(uAs).optional().describe("auth_expired / auth_overridden / auth_missing_scope / design_needs_authorization: whose login the fix names — 'claude_ai' (the claude.ai account, /login) or 'claude_design' (Claude Design's own authorization, /design login)."),
        path: o().optional().describe("outside_reads_blocked: the path the read block refused, when the refusal names one. staged_for_review: the settings file the write was held for."),
        managed: M().optional().describe("outside_reads_blocked: an organization policy sets the block, so the user cannot remove it. auth_overridden: the overriding credential was injected by the host environment, so nothing in this session can unset it."),
        feature: U(pAs).optional().describe("feature_disabled / policy_denied: the feature that is off."),
        cause: U(fAs).optional().describe("feature_disabled: why the feature is off — 'managed_settings' (CLAUDE_CODE_DISABLE_WORKFLOWS, or disableWorkflows or enableWorkflows: false set by a layer above the user's own settings), 'org_policy', 'unavailable' (not launched for this account), or 'user_setting' (the user's /config setting is off, including a disableWorkflows in their own settings, and nothing the user cannot clear also keeps them off)."),
        policy_kind: U(mAs).optional().describe("policy_denied: the verdict — 'org_denied' (the organization's policy turns the feature off) or 'latched' (a HIPAA-regulated organization signed in earlier in this process; restarting clears it).")
    }).describe("@internal The fix a host can offer for a tool result, stamped from structured producer state (never parsed from the result text). Kinds: mcp_needs_auth, mcp_disabled, mcp_required_missing, auth_expired, auth_overridden, auth_missing_scope, design_needs_authorization, sandbox_violation, outside_reads_blocked, memory_paused, feature_disabled, policy_denied, spawn_arg_limit (the command's exec image exceeded the OS argument limit), staged_for_review (a settings-file write held for the machine owner's review). New kinds are additive; treat an unknown kind as absent."));
const eo = p(()=>Wr("kind", [
        u({
            kind: A("human")
        }),
        u({
            kind: A("channel"),
            server: o()
        }),
        u({
            kind: A("peer"),
            from: o(),
            fromMode: U([
                "bypass",
                "prompting"
            ]).optional().describe("The SENDING session's permission class as declared by the host that injects this message on local stdin ('bypass' for sessions that run tools without asking, 'prompting' otherwise). Lets the recipient deliver a same-class message immediately while a cross-class or undeclared sender is still held at a recipient that runs without asking. Honored only from the injecting host on local stdin; absent when the host does not declare it."),
            name: o().optional().describe("Sender display name, normalized by the harness: Unicode control, format, surrogate, and line/paragraph-separator code points stripped (categories Cc/Cf/Cs/Zl/Zp — covers bidi controls, zero-width characters, and tag characters), trimmed, at most 64 code points (+ ellipsis, never splitting a surrogate pair). Sender-asserted display text (the addressable identity is `from`) — render it as reported speech, but no client-side character sanitization is needed. Absent when the wire is not exactly one harness-formed envelope and on messages from older senders."),
            fromSession: o().optional().describe("The sender's host-openable session id (the envelope's `from-session` attribute — e.g. a desktop `local_<uuid>` or a cloud session `session_`/`ses_` id), set by the sender's host so a receiving UI can link this message back to the sending session. Sender-asserted like `from`: a navigation target only, never authority. Absent when the sender's host provides none and on messages from older senders."),
            inbound_origin: o().optional().describe("@internal Server-asserted ingest path of the demoted delivery, copied at classification from the message-level `inbound_origin`."),
            senderTaskId: o().optional().describe("Task id of the in-process background subagent that sent this message, stamped by the harness from the sending loop (never from tool input). Absent for cross-session peers."),
            body: o().optional().describe("Decoded message body with the peer envelope stripped — byte-exact with what the model sees. Present only when the turn is exactly one harness-formed envelope (or an in-process agent message); render this instead of re-parsing the message text."),
            verifiedPeerPid: E().optional().describe("Kernel-verified pid of the process that connected to this session's cross-session messaging socket, read from the connection (SO_PEERCRED / LOCAL_PEERPID) — never from the payload. This identifies the CONNECTING process, which for relayed traffic (e.g. a daemon forwarding on another session's behalf) is the relay, not the message's author. Key sender identity on this, never on `from`: `from` is sender-authored and kept only for reply routing, so it is forgeable by any same-user process. Absent when unverifiable (Windows, non-UDS ingress) — never a wrong value. Pids are recyclable: provenance, not an authentication token.")
        }),
        u({
            kind: A("task-notification"),
            subkind: U([
                "scheduled-trigger",
                "peer-send-message",
                "projects-relay",
                "session-inbox"
            ]).optional().describe("Present when the delivery is the fired stored prompt of a scheduled task/routine ('scheduled-trigger', stamped from server-asserted provenance, or declared by a local host for its own scheduled runs; the schedule attests storage, not authorship) or a coordinator co-member SendMessage delivery ('peer-send-message': model-authored text from another of the same user's sessions, verified by the server-stamped receiver co-membership — task-notification for prompt authority, but distinguishable so the receive-side crossSessionInbound setting can apply to it). The harness frames a scheduled-trigger delivery as the session's assigned task instead of the generic background-notification frame. Absent on webhook, PR-steward, plugin, and background-event deliveries."),
            fireReason: o().optional().describe("On a 'scheduled-trigger' delivery, why it fired: a short lowercase token such as 'scheduled', 'manual', 'retry', 'catch_up' or 'api'. Set by the server for cloud routines, or declared by a local host for its own scheduled runs, which is honored only in a process the host started with CLAUDE_CODE_HOST_SCHEDULED_RUN=1 (a local host's value is kept only if it is 1 to 32 lowercase letters or underscores); absent when neither sent one."),
            producer: A("session-task").optional().describe("@internal Present ('session-task') when the notification reports on work this session itself launched: a background agent, shell command, workflow, monitor, MCP or remote task settling, a detached tool call, or a hook rewake or worker check-in following up on such work. Absent on webhook, artifact and other externally-authored deliveries."),
            runId: o().optional().describe("On a background task's own notification: the run_id its task_* events carried, as of when the notification was queued. Not part of the text the model reads.")
        }),
        u({
            kind: A("coordinator")
        }),
        u({
            kind: A("unclassified")
        }).describe("Injected turn whose ingress classification found no provenance. Framed by the harness as a non-user source in both drains; never presumed human, never host-replayed."),
        u({
            kind: A("observer"),
            from: o(),
            senderTaskId: o()
        }).describe("Report from a background observer agent to the agent it observes. One-way by construction — the observed agent must not reply."),
        u({
            kind: A("auto-continuation")
        }),
        u({
            kind: A("observer-activity")
        }).describe("Activity digest delivered to an observer agent. The message body is the self-framing digest (envelope + postamble); observed content is data, not instructions.")
    ]).describe("Provenance of a user-role message (peer session, team lead, channel). A host wrapping keyboard input must stamp {kind:'human'} explicitly — absent origin is treated as unattributed and fails closed at strict isHuman() trust gates."));
const ny = p(()=>u({
        type: A("user"),
        message: p0(),
        parent_tool_use_id: o().nullable(),
        isSynthetic: M().optional(),
        tool_use_result: oe().optional().describe("Structured tool output — the tool's full Output object, not the string content sent to the model. The shape is per-tool, keyed by the matching tool_use block's name (see the *Output types in toolTypes); MCP and dynamic tools carry their own shapes, so the field stays unknown-typed. For the Agent/Task tool the completed shape is the subagent's final report without the model-directed agentId/usage trailer, plus run totals — render from it instead of parsing the tool_result text. A call that stepped aside for a message the user sent (today a WebFetch or WebSearch call) carries `{ detachedToolCall: true }` in place of its Output: the call is still running, and its result reaches the model in a later turn."),
        priority: U([
            "now",
            "next",
            "later"
        ]).optional(),
        origin: eo().optional(),
        client_platform: o().optional().describe("@internal The `anthropic-client-platform` value of the client that sent this message (e.g. `ios`, `android`, `web_claude_ai`, `desktop_app`). Injected server-side by CCR ingress from the request header."),
        inbound_origin: o().optional().describe("@internal Server-asserted ingest path that produced this message. Not settable by clients."),
        server_received_wall_ms: E().optional().describe("@internal Epoch ms on the session server's clock when it received the HTTP request that delivered this message. Written by the session server; the CLI copies it to the turn's result as user_message_server_received_wall_ms."),
        historical: M().optional().describe("@internal Replayed history rather than a live message: the Remote Control bridge stamps it on the messages it flushes to the session server, which also stamps it on deliveries it replays."),
        shouldQuery: M().optional().describe("When false, the message is appended to the transcript without triggering an assistant turn. It will be merged into the next user message that does query."),
        timestamp: o().optional().describe("ISO timestamp when the message was created on the originating process. Older emitters omit it; consumers should fall back to receive time."),
        is_meta: A(true).optional().describe("@internal True when the message was synthesized by the loop (not user keyboard input). From internal UserMessage.isMeta."),
        seeded_summon: A(true).optional().describe("@internal Desktop host only: the host's own seeded summon."),
        client_composed: A(true).optional().describe("The client composed this turn from content the user did not type; the CLI delivers its text as written, with no `@path` file-mention expansion and no slash-command dispatch. On current CLIs the turn-start attachment pass is skipped as a whole: `@server:resource` MCP mentions are not expanded either, and the prompt is sent without the context the CLI normally attaches alongside it (nested `CLAUDE.md` and rules files, skill and tool listings, reminders); the pass the CLI runs between tool calls is unaffected."),
        initiator: o().optional().describe("@internal The host's own label for what started this turn (e.g. the desktop app's `scheduled-task`, `sleep-auto-resume`); `user` or absent means a person sent it. Usage attribution only; it does not change how the turn runs."),
        is_visible_in_transcript_only: A(true).optional().describe("@internal True when the message is stored in the transcript but not rendered in the live UI."),
        is_virtual: A(true).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
        is_compact_summary: A(true).optional().describe("@internal True when this user message is a compact-summary synthetic message."),
        summarize_metadata: u({
            messages_summarized: E().int(),
            user_context: o().optional(),
            direction: U([
                "from",
                "up_to"
            ]).optional()
        }).optional().describe('@internal Metadata for "Summarize from here" / "Summarize up to here" summaries (from internal UserMessage.summarizeMetadata).'),
        mcp_meta: u({
            _meta: ue(o(), oe()).optional(),
            structured_content: ue(o(), oe()).optional(),
            resource_links: T(ry()).optional().describe("CLI-owned: the `resource_link` content blocks the MCP tool returned, collected from the raw result before the CLI rewrites each into the `[Resource link: NAME] URI` text line the model reads — so a host renders the files without parsing that line. At most 50 links and 64 KiB serialized; absent when the result had none, and absent on a subagent's tool results (parent_tool_use_id set), whose mcpMeta carries `_meta` only. On today's wire this rides the mcpMeta spread as `tool_use_result.resourceLinks`. A sibling of `_meta`, never inside it: a server cannot supply it, and server `_meta` keys under the CLI-reserved `com.anthropic/` prefix are dropped before this message.")
        }).optional().describe("@internal MCP protocol metadata passed through to SDK consumers, never sent to the model (from internal UserMessage.mcpMeta)."),
        tool_result_meta: T(u({
            id: o(),
            non_execution_kind: U(DOt).optional(),
            user_feedback: o().optional(),
            remedy: E0().optional(),
            permission_decision: u({
                decision: U(Gw),
                source: o(),
                reason_type: U(but).optional().catch(undefined)
            }).optional().catch(undefined)
        })).optional().describe("@internal Display metadata for this message's tool_result blocks, keyed by tool_use_id. non_execution_kind is the harness-stamped reason an is_error:true result did not carry the tool's own execution output (user-rejected / permission-rule / automode-* / interrupted / cancelled); absent means the tool ran to completion. remedy is the fix a host can offer for what the result reports (see SDKToolResultRemedy). An entry may carry a remedy alone, on a result that did run (a staged write, a sandbox violation on exit 0), so whether a call ran is read from non_execution_kind, never from an entry's presence. On a subagent's messages (parent_tool_use_id set), entries carry only permission_decision, so those messages do not say whether a call ran. permission_decision is how the call's permission check ended, as Claude Code's claude_code.tool.blocked_on_user trace span reports it. decision is accept, reject or cancelled. source names what decided: config, classifier, hook, user_temporary, user_permanent, user_reject, user_abort, or invalid_input, permission_updated_input_invalid or server_fallback_tombstone when bad input or the server ended the wait. Which label a rule gets depends on the session: in SDK sessions a rule for this session or in the user's own settings reports user_temporary, user_permanent or user_reject and other rules report config, while interactive sessions report every rule as config. reason_type is the kind of reason the check gave when it decided by itself, such as 'rule' whenever a rule decided, or 'classifier' for an auto-mode allow, which reports source config. reason_type is absent when a person or the SDK host answered the question, when the check's outcome was still a question, and for user_abort and the last three sources above. permission_decision is absent when the call ended before its permission check, and on some results built apart from the call's own run, such as a plugin hook's refusal, a hook's rewrite of a denied result, or the result the tool executor writes for a queued call that a stop cancelled. user_feedback is the deny comment a human typed at a permission prompt (the local dialog or a bridge client's deny UI), before the CLI's reject-message framing — absent when the deny was resolved by a coordinator, channel relay, or hook rather than a human. A deny answered through the SDK control protocol (can_use_tool / --permission-prompt-tool) currently reports as 'permission-rule' with no user_feedback, because that wire carries no human-provenance signal. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model. Clients read this instead of string-matching the result prose."),
        source_tool_use_id: o().optional().describe("@internal When this message was generated by a tool via newMessages, links it to that tool_use id."),
        source_tool_assistant_uuid: o().optional().describe("@internal For tool_result messages: UUID of the assistant message containing the matching tool_use block. Used for parentUuid assignment in transcript."),
        image_paste_ids: T(E().int()).optional().describe("@internal Paste IDs for images in this message, in order of appearance. REPL-local state — candidate for surface-side if daemon has no use for it."),
        plan_content: o().optional().describe("@internal Plan to implement (cleared-context flow). When set, the message is rendered with plan styling."),
        permission_mode: ce().optional().describe("@internal Permission mode active when this message was sent (for rewind restoration)."),
        interrupted_message_id: o().optional().describe("@internal For [Request interrupted by user] markers only: the API msg_* id that Esc cancelled."),
        refused_message_id: o().optional().describe("@internal Only on the synthetic message that re-asks the same model after a refusal: the API msg_* id of the refused response. Absent when the CLI has no well-formed id for it.")
    }));
const sr = p(()=>ny().extend({
        uuid: _().optional(),
        pasted_content: T(_0()).optional().describe("Content the user pasted into the prompt rather than typed: each entry a string or an array of content blocks. The CLI appends the text of each entry after the typed text, in order, and may wrap it in `<pasted_content>` tags. Blocks other than text are ignored; send images and documents in `message.content`. A list of over 1,000 entries and blocks in all is ignored."),
        inline_pastes: T(o()).optional().describe("Text the user pasted that is still in `message.content` where they put it: each entry one paste. The prompt is not changed by the host; the CLI may wrap each entry in `<pasted_content>` tags where it still stands in the last text block. It looks for the first 100 entries that are not blank. For a paste the host took out of `message`, use `pasted_content` instead."),
        session_id: o().optional(),
        agent_id: o().optional().describe("ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."),
        subagent_type: o().optional().describe("Subagent type that produced this message."),
        task_description: o().optional().describe("Description of the subagent task that produced this message."),
        file_attachments: T(oe()).optional().describe("@internal Files a remote client attached to this prompt (each {file_uuid, file_name, is_image?, sha256?, file_size?}; src/bridge/inboundAttachmentSchema.ts reads them). Typed like SDKUserMessageReplay.file_attachments so the two message types stay assignable.")
    }).describe("A user-role message. A client writes one to the CLI to submit a prompt (this starts a turn); the CLI emits them for user-role content it adds to the conversation itself, chiefly the tool_result blocks answering the assistant's tool_use blocks."));
const S0 = p(()=>ny().extend({
        uuid: _(),
        session_id: o(),
        isReplay: A(true),
        file_attachments: T(oe()).optional()
    }));
const oy = p(()=>u({
        type: A("bash_command"),
        command: o().describe("Shell command to execute verbatim via a one-shot `/bin/sh -c` (or `pwsh`) subprocess, bypassing the model. Trust model matches the local TUI `!cmd` path (no sandbox, no per-command prompt); unlike `!cmd`, output is not appended to the conversation transcript and there is no persistent shell state across calls."),
        cwd: o().optional().describe("Working directory for the command. Falls back to the session cwd when omitted."),
        uuid: _().optional(),
        session_id: o().optional()
    }).describe("@internal A user-initiated shell command dispatched to a one-shot shell subprocess with no model turn. Input-only — sent by CCR clients that surface a dedicated terminal UI; never emitted on stdout."));
const rkr = p(()=>u({
        status: U([
            "allowed",
            "allowed_warning",
            "rejected"
        ]),
        resetsAt: E().int().optional(),
        rateLimitType: U([
            "five_hour",
            "seven_day",
            "seven_day_opus",
            "seven_day_sonnet",
            "seven_day_overage_included",
            "overage"
        ]).optional(),
        utilization: E().optional(),
        unifiedWindows: u({
            five_hour: u({
                utilization: E(),
                resetsAt: E().int()
            }).optional(),
            seven_day: u({
                utilization: E(),
                resetsAt: E().int()
            }).optional(),
            seven_day_overage_included: u({
                utilization: E(),
                resetsAt: E().int()
            }).optional()
        }).optional().describe("@internal Per-window usage for the session (5-hour), weekly (7-day), and overage-included weekly (per-model bucket; present only for accounts whose responses carry that window) subscription rate-limit windows, as read from the anthropic-ratelimit-unified-* response headers. utilization is the fraction of the window used (usually 0-1, same scale as the top-level utilization field; values above 1 occur when usage legitimately runs past a window's cap, e.g. lower-priority episodes past the 5-hour limit); resetsAt is unix epoch seconds. Unlike the top-level status/utilization fields, which describe the currently limiting window, both windows are tracked on every observation, and events are emitted when a window's rounded percentage or reset time moves, not only on status transitions. Windows absent from the account state are absent here. Absent until the first response carrying these headers is observed, and always absent for API-key, Bedrock, and Vertex sessions, whose responses do not carry them."),
        overageStatus: U([
            "allowed",
            "allowed_warning",
            "rejected"
        ]).optional(),
        overageResetsAt: E().int().optional(),
        overageDisabledReason: U([
            "overage_not_provisioned",
            "org_level_disabled",
            "org_level_disabled_until",
            "out_of_credits",
            "seat_tier_level_disabled",
            "member_level_disabled",
            "seat_tier_zero_credit_limit",
            "group_zero_credit_limit",
            "member_zero_credit_limit",
            "org_service_level_disabled",
            "no_limits_configured",
            "fetch_error",
            "unknown"
        ]).optional(),
        isUsingOverage: M().optional(),
        overageInUse: M().optional(),
        overageEnabled: M().optional(),
        surpassedThreshold: E().optional(),
        rateLimitGraceActive: M().optional().describe("@internal Usage-limit grace signal. Follows the latest served main-loop or subagent response: set when it reports grace-zone utilization > 0 (the server reports that only to a request that sent `anthropic-usage-limit: extended`, tengu_lantern_spool), cleared when a response the limiter ran on reports none or, if the latest in-zone response named the grace window's reset, once that reset passes on this machine's clock. Side calls, and responses with no `anthropic-ratelimit-unified-status` (the limiter did not run), are not read. A refused request's 429 is not read either, so while requests are refused the last value persists: still expire any UI derived from this field via resetsAt. While set, overageStatus allowed / allowed_warning means paid extra usage covers the overflow (nothing will be cut off). Stays true at hard exhaustion (status rejected); combine with status instead of reading this field alone as \"still usable\"."),
        overagePeriodMonthly: u({
            utilization: E()
        }).optional().describe("@internal Monthly service spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap."),
        overagePeriodChannel: u({
            utilization: E()
        }).optional().describe("@internal Per-Slack-channel spend-cap telemetry for the Claude-in-Slack surface (CLAUDE_IN_SLACK_V2): utilization is fraction-of-cap. Absent when the channel has no individual cap."),
        limitScope: U([
            "service",
            "channel",
            "group_pool"
        ]).optional().describe("Which spend limit blocked the request when it is not the member's own cap: 'group_pool' means a pooled group budget shared by the member's team is used up (the denial otherwise looks like the member's own monthly cap). Absent on a plain member denial and from older CLIs."),
        errorCode: U([
            "credits_required"
        ]).optional(),
        canUserPurchaseCredits: M().optional(),
        hasChargeableSavedPaymentMethod: M().optional()
    }).describe("Rate limit information for claude.ai subscription users."));
const qe = 128;
const T0 = 64;
const cbo = p(()=>u({
        session: u({
            total_cost_usd: E(),
            total_api_duration_ms: E().int(),
            total_duration_ms: E().int(),
            total_lines_added: E().int(),
            total_lines_removed: E().int(),
            model_usage: ue(o(), Dt())
        }).describe("Cost and usage accumulated by the current session."),
        rate_limits: u({
            limits: T(u({
                kind: o().max(qe).describe("The server's meter kind, e.g. 'session', 'weekly_all' or 'weekly_scoped'. Classify a row on this, never on a label."),
                group: o().max(qe).describe("The server's row group, e.g. 'session' or 'weekly'; rows render grouped under it, in the server's order."),
                percent: E().describe("Share of the window used, 0-100."),
                resets_at: o().max(qe).nullable().describe("ISO 8601 timestamp when the window resets."),
                scope: u({
                    model: u({
                        display_name: o().max(qe)
                    }).nullable().optional(),
                    surface: u({
                        display_name: o().max(qe)
                    }).nullable().optional()
                }).nullable().optional().describe("What a scoped row is for, a model or a surface, with the server's display label."),
                severity: o().max(qe).describe("The server's reading of the row for a meter's colour, e.g. 'normal', 'warning' or 'critical'. Every row here is the server's, so a client never grades a row itself."),
                is_active: M().describe("The server's headline pick: the row a single-value indicator shows.")
            })).max(T0).nullable().describe("The server's usage rows (the usage endpoint's limits[]), as sent: which meters apply, their scope, labels, severity and order are the server's, so a client renders them verbatim and a new meter needs no client release. Empty when the server reported no meters; null when the body carried no rows at all (a server that predates them). Null too while the usage fetch is failing: the rows here are only ever the server's current reply, so neither the row the CLI builds from rate-limit response headers for its own screen nor its snapshot of an earlier reply appears here."),
            extra_usage: u({
                is_enabled: M(),
                monthly_limit: E().nullable(),
                used_credits: E().nullable(),
                utilization: E().nullable(),
                currency: o().max(qe).nullable().optional()
            }).nullable().optional().describe("Extra-usage (overage) spend for the billing period, when the plan has it. Amounts are in minor units of `currency` (cents for USD); is_enabled is false while extra usage cannot cover sends.")
        }).nullable().describe("The plan's usage rows and extra-usage spend from the claude.ai usage endpoint; null when the CLI could not fetch them (no plan on this lane, or a token without the profile scope).")
    }).describe("Structured twin of a /usage result, carried beside its text: the session's totals, the plan's usage rows as the server sent them and the extra-usage spend, and nothing else from the usage body (the get_usage control reply carries the rest). Experimental — the shape may change."));
const L1n = [
    "used",
    "free",
    "buffer",
    "deferred"
];
const A0 = p(()=>u({
        name: o().describe('Display name of the row as the CLI renders it, e.g. "Messages" or "MCP tools (deferred)". Use `kind` (not this name) to classify the row.'),
        tokens: E().int(),
        kind: U(L1n).describe("What the row is: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve (autocompact or manual); 'deferred' rows are out-of-window tool schemas — listed for awareness, excluded from usage math.")
    }).describe("One row of the /context usage-by-category breakdown. Rows may carry zero tokens; renderers typically hide those."));
const w0 = p(()=>u({
        model: o().describe("Main-loop model the usage was computed for."),
        total_tokens: E().int().describe("Estimated tokens in use, unclamped — may exceed raw_max_tokens when over limit."),
        raw_max_tokens: E().int().describe("The window usage is measured against: the resolved autocompact window — the model's believed limit, or a smaller compaction-policy window (a configured value, or e.g. the 200K boundary on 1M-window models)."),
        percentage: E().int().describe("Rounded total_tokens / raw_max_tokens, 0-100+."),
        over_limit: u({
            tokens_over: E().int(),
            kind: U([
                "hard_limit",
                "compaction_window"
            ])
        }).optional().describe("Present when total_tokens exceeds raw_max_tokens. kind says how the window was resolved, not whether the API will accept the next request: 'hard_limit' means the window is the model's believed limit (the API will refuse past it); 'compaction_window' means a compaction-policy window, which may or may not coincide with the model's hard limit."),
        categories: T(A0()),
        mcp_tools: T(u({
            name: o().describe('Wire name, e.g. "mcp__linear__create_issue".'),
            server_name: o(),
            tokens: E().int()
        })),
        memory_files: T(u({
            path: o(),
            type: o().describe('Display label of the memory-file source, e.g. "Project" or "User".'),
            tokens: E().int()
        })),
        agents: T(u({
            agent_type: o(),
            source: o().describe("Raw source identifier, e.g. 'projectSettings', 'userSettings', 'plugin'. Built-in agents are excluded by the producer. Display labels are the renderer's concern."),
            tokens: E().int()
        })),
        skills: T(u({
            name: o(),
            source: o().describe("Raw source identifier, e.g. 'userSettings', 'plugin', 'syncedSkills'."),
            plugin_name: o().optional(),
            tokens: E().int()
        })).optional().describe("Omitted when no skills contribute tokens.")
    }).describe("Structured twin of the /context report — the data a client needs to render the context-usage card without parsing the markdown table. Evolves additively (new optional fields); a breaking reshape would ship as a sibling field, so consumers can trust the fields they know."));
const rr = p(()=>u({
        type: A("assistant"),
        message: m0(),
        parent_tool_use_id: o().nullable(),
        error: Zn().optional(),
        uuid: _(),
        historical: M().optional().describe("@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server)."),
        session_id: o(),
        request_id: o().optional(),
        user_message_uuid: o().optional().describe("Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on an assistant message each time that send changes — the turn's FIRST top-level assistant message (which may carry only a thinking block, or be a synthetic API-error message), and then, for a turn started by a synthetic (meta) prompt, the first assistant message after each queued user message folded in mid-turn (the fold takes the echo over); with --include-partial-messages the turn's first non-ping stream event is stamped too, independently (see SDKPartialAssistantMessage), so the same uuid may appear on both — either binds the reply to the send it answers without waiting for the result; the server keeps the first stamp it sees per uuid. A turn started by a typed prompt keeps that uuid for its whole turn, so it stamps once per frame kind. A meta turn's own uuid is stamped only when the host vouches it is the client event's own (on a hosted session, the uuid the session server persisted: delivered content such as a Slack owner ping, a Slack-bot observation or a client-injected synthetic turn), never for a prompt the CLI minted itself — except that a turn carrying resume_reason, such as the boot-time rescue turn re-running a turn a worker restart interrupted mid-way, stamps the interrupted turn's own last user prompt, the send it answers, where that can be vouched for (a turn that goes on from a permission answer or from in-flight tool calls may first re-send, unstamped, the assistant message that made those calls); either way a user message folded into a meta turn takes the echo over from it (the rescue turn absorbing messages sent while the session was down; a bot-observation turn absorbing a human's post), and the first reply frame of each kind after that fold carries the folded message's uuid — the first reply that message got. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model. Absent on every other frame of the turn, on subagent frames (parent_tool_use_id set), on turns that neither had a client uuid nor folded a user message in, and from older producers."),
        user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn has consumed so far, in consumption order — all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame — so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."),
        resume_reason: o().optional().describe("Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, …), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers."),
        resumed_from_incomplete_thinking: A(true).optional().describe("This turn continued the preceding truncated assistant turn inside its trailing signed thinking block (max-output-tokens recovery). Its thinking signatures are cumulative over that preceding thinking-only turn, so a history replayed through the bridge must carry this flag back for the normalizer to keep the run's prefix on the wire. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        supersedes: T(_()).optional().describe("Wire uuids of previously-delivered messages that this message replaces (refusal-fallback supersede). The list can include tombstoned tool_result frames from the refused leg, not only assistant frames. Evict the named messages on arrival and treat this frame as their canonical replacement. Idempotent with the end-of-turn model_refusal_fallback notice, whose retracted_message_uuids remains the complete audit record for the turn."),
        aborted: A(true).optional().describe("True when this assistant message was truncated by an interrupt/abort before the stream completed: stop_reason was never received and the content may end mid-word. Absent on normally completed messages."),
        agent_id: o().optional().describe("ID of the subagent that produced this message: the `task_id` of its task events, unchanged when the subagent is resumed. Absent on main-thread messages."),
        subagent_type: o().optional().describe("Subagent type that produced this message."),
        task_description: o().optional().describe("Description of the subagent task that produced this message."),
        tool_use_meta: T(u({
            id: o(),
            display_name: o(),
            server_display_name: o().optional(),
            icon_url: o().optional()
        })).optional().describe("@internal Display metadata for this message's tool_use blocks, keyed by block id. display_name is the MCP server's `tool.annotations.title` when provided, otherwise a readable transform of the wire name; server_display_name is the MCP server's own display name; icon_url is the MCP server's directory icon URL (claude.ai connectors only). Omitted for blocks whose display label equals the wire name (built-in tools). Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        narration_block_indexes: T(E().int().nonnegative()).optional().describe("@internal Ascending zero-based indexes into this frame's `message.content` of the thinking blocks whose signature the server tagged block_kind 'narration' (server summaries of the prose between tool calls, not the model's own reasoning), so a renderer can label them as summaries without decoding the signature envelope. Fail-closed: an unparseable or legacy signature is not listed. A listed block can have empty thinking text when the request returned no thinking text; give those ordinary thinking treatment. Omitted when the frame has no such block, and by CLI versions before this field existed; treat unlisted thinking blocks as ordinary thinking. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        narration_hint: U([
            "hidden",
            "faint"
        ]).optional().describe("@internal Display-only, for this frame's narration_block_indexes blocks: how to draw their trailing ' · summarized' hint, by the same rule Claude Code's terminal UI uses for the model that produced the frame. 'hidden': draw no hint. 'faint': draw ' · summary'. Omitted: draw ' · summarized'. Sent only to the VS Code extension and only on frames that have such a block; older CLI versions never send it. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        thinking_duration_ms: E().int().positive().optional().catch(undefined).describe("@internal How long the thinking block in this frame took to stream, in whole milliseconds (at least 1): from its content_block_start to its content_block_stop, so the wait for the response's first token is not counted. For display only. Sent only on a frame whose one content block is a thinking block that was streamed. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history, so be ready to show the block without a duration. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        thinking_display: o().optional().catch(undefined).describe("@internal The thinking.display that Claude Code put in the API request body for the response that streamed this frame's thinking block. It has the same source and meaning as `thinking_display` on a stream event. Sent only on a frame whose one content block is a thinking block that was streamed, and only when the body had a display. Older CLI versions never send it, and a CLI that rebuilt its history from SDK frames does not send it when it replays that history. An absent key states nothing. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        timestamp: o().optional().describe("ISO timestamp of when this content block finished on the originating process. One API assistant turn may produce several assistant messages sharing a message.id, each with its own timestamp. Uses the originating host's clock, so it's for display only; do not order messages by this field. Older emitters omit it; consumers should fall back to receive time."),
        is_meta: A(true).optional().describe("@internal True when the message was synthesized by the loop (not a model response)."),
        context_usage: w0().optional().describe("Structured twin of the /context report, carried on the synthetic assistant message that delivers the markdown table. Present only on /context results from CLIs new enough to attach it; the markdown in message.content remains the canonical fallback. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        usage_report: cbo().optional().describe("Structured twin of the /usage report, carried on the synthetic assistant message that delivers its text: the session totals, the plan's usage rows and extra-usage spend, for remote clients that render a card from data. Present only on /usage results from CLIs new enough to attach it and from claude.ai-subscriber sessions; the text in message.content remains the canonical fallback. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        local_command_source: o().optional().describe("@internal The originating system local_command row's wire-form content (escaped frames), carried on the loop-synthesized local-command twin. Round-tripped so toInternalMessages rebuilds the internal system row on a bridge/SDK history replay — replay then matches the live session, where that row is model-visible — instead of dropping the output or replaying the twin's decoded display text. Wrapper-level sibling — never inside `message.content`."),
        local_command_run: u({
            command: o(),
            args: o()
        }).optional().describe("@internal On the local-command twin, the run that printed the row: the command's name as `command.run` carried it (no slash) and its arguments as the echo shows them (`***` when the command marks them sensitive). Present when a `local` command's dispatch printed the row or a `command.run` hook answered it, absent on a never-ran notice. A surface that draws the hooks engine's `CommandOutput` site asks ui_render with these, the twin's text and its uuid as instance_id; toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling — never inside `message.content`."),
        local_command_outcome: u({
            kind: U(qn),
            suggestion: o().optional().describe("unknown: the registered command closest to the typed name, no slash.")
        }).optional().catch(undefined).describe("@internal On the local-command twin, what the row reports, so a host can offer a fix instead of relaying the text: 'unavailable_headless' (an interactive-panel command this session cannot open), 'unknown' (no command has the typed name), 'failed' (the command ran and failed), 'restart_required' (the change applies after Claude Code restarts). Absent when the row reports none of these; new kinds are additive, so treat an unknown one as absent. toInternalMessages round-trips it onto the rebuilt row. Wrapper-level sibling — never inside `message.content`."),
        is_virtual: A(true).optional().describe("@internal Display-only: rendered in the UI but filtered before API send."),
        batch_tool_uses: T(De({
            id: o(),
            name: o()
        })).optional().describe("@internal `{id, name}` of the original Batch* tool_use block(s) for a message whose content was decomposed into synthetic v1 tool_use blocks. Round-tripped so a replayed history reassembles the batch block on the wire (not N synthetics). Input is reassembled from the synthetics in `message.content` — never carried here. Wrapper-level sibling — never inside `message.content` — so it is not replayed to the model."),
        wire_tool_inputs: ue(o(), oe()).optional().describe("@internal `tool_use.input` exactly as the API produced it, keyed by tool_use id, for a message whose `message.content` carries the client-normalized input. Round-tripped so a replayed history echoes each earlier tool call back to the API as the API emitted it (the server may hold its own copy of the turn). Wrapper-level sibling — never inside `message.content`."),
        wire_ingest_context: ue(o(), oe()).optional().describe("@internal What the client-side input normalization read from process state (the working directory a leading `cd` was stripped against, the stamp applied to a Slack send) for the inputs in `wire_tool_inputs`, keyed by the same tool_use ids. Round-tripped with `wire_tool_inputs` so a replayed history can verify each recorded input against the normalized one exactly. Wrapper-level sibling — never inside `message.content`."),
        is_api_error_message: M().optional().describe("@internal True when this assistant message wraps an API error (from internal AssistantMessage.isApiErrorMessage)."),
        api_error_status: E().int().optional().describe("@internal HTTP status code of the API error when is_api_error_message is true."),
        api_error: U([
            "max_output_tokens",
            "dlp_request_denied",
            "claude_code_version_too_old",
            "safety_monitor_blocked",
            "effort_requires_thinking",
            "advisor_incompatible",
            "tool_history_mismatch",
            "autocompact_thrashing",
            "pdf_too_large",
            "pdf_password_protected",
            "media_removed",
            "no_response",
            "tls_untrusted_ca",
            "gateway_content_type",
            "provider_credentials",
            "gateway_signin_required",
            "gateway_session_expired",
            "api_key_auth_disabled",
            "org_disabled_credential",
            "invalid_credential_header",
            "model_requires_usage_credits",
            "long_context_credits_required",
            "consent_unanswered",
            "no_allowed_fallback",
            "model_substitution_disabled",
            "field_not_granted",
            "usage_limit_reached"
        ]).optional().catch(undefined).describe("@internal Typed kind of the API error when is_api_error_message is true, for consumers that key on the cause instead of the message text (the text stays the fallback and may change). Absent when the error has no typed kind; new values are added over time, so treat an unknown value as absent. dlp_request_denied: the request was refused by the organization's data-loss-prevention policy — terminal for that request body; a consumer replaying history must not re-send it. claude_code_version_too_old: the API refused the request because this Claude Code build is below a required minimum version — the selected model's minimum, or an organization-policy floor; only the message text says which and names the versions, and the remedy is updating Claude Code. safety_monitor_blocked: a server-side safety monitor blocked the model's response for this turn; terminal for the turn, so a consumer replaying history must not re-send the prompt that led to it. effort_requires_thinking: the model refuses the requested effort level while thinking is off; api_error_params.effort names the level. advisor_incompatible: the configured advisor model cannot be paired with this request's model. tool_history_mismatch: the API rejected the conversation's tool_use/tool_result pairing (a tool_use without its result, an orphaned tool_result, a duplicate tool_use id); re-sending the same history fails the same way, and rewinding the conversation is the remedy. autocompact_thrashing: the context refilled to the limit right after each automatic compaction, repeatedly, so the turn stopped; something in context is too large for the window. pdf_too_large: a PDF is over the API's page or size limit. pdf_password_protected: a PDF is encrypted. media_removed: the API refused an image or a document in the conversation, so Claude Code leaves it out of the requests that follow. The frame comes either before the answer of a retry that already left it out, or as the error that ended the turn (the result then repeats this value). api_error_params.media_reason says why, and api_error_params.media which kind of block. Other kinds (pdf_too_large, pdf_password_protected) and some untyped errors also leave the block out, so the absence of this value does not mean that nothing was left out. no_response: no response arrived before the first-byte deadline on any attempt, usually a proxy or gateway that holds responses until they complete. tls_untrusted_ca: the API's TLS certificate comes from an authority this process does not trust, usually a TLS-inspecting proxy or a gateway signed by a private CA. gateway_content_type: a proxy between Claude Code and Amazon Bedrock rewrote Bedrock's event-stream response. provider_credentials: a third-party cloud provider (api_error_params.provider) refused the request's credentials or access; api_error_params.remedy says what fixes it. gateway_signin_required: the Cloud gateway provider is configured and nobody is signed in to it; no request was sent. gateway_session_expired: the Cloud gateway session expired; no request was sent; api_error_params.remedy is gateway_token when the token came from the environment, which signing in does not replace. api_key_auth_disabled: the organization turned off API key authentication and the active credential is an API key. org_disabled_credential: the ANTHROPIC_API_KEY environment variable belongs to a disabled organization and overrides the account sign-in. invalid_credential_header: a credential or header value (from the environment, a helper, or the saved sign-in) cannot be sent as an HTTP header; caught before the request was sent. model_requires_usage_credits: the model runs on usage credits for this account, and credits are off or the included allowance is used up. long_context_credits_required: a request over the 200K-token context boundary needs usage credits. consent_unanswered: the model now uses usage credits and the prompt to confirm went unanswered; nothing was sent. no_allowed_fallback: switching off the model was needed (the usage-credits prompt was declined) and the model policy allows no other model. model_substitution_disabled: switching off the model was needed and CLAUDE_CODE_NO_MODEL_FALLBACK forbids it. field_not_granted: the organization is not allowed to send a field in the request, and the message text says what to do. usage_limit_reached: the request was refused by the account's own usage limit, a plan limit (session, weekly or per-model) or a spend cap on usage credits; api_error_params.rate_limit_info says which and when it resets. The other refusals that share error rate_limit never carry it: an organization policy that turned the service off (no limit was reached, and no reset clears it), a temporary server throttle, a capacity switch-off, an entitlement refusal shown in the server's own words, or a 429 on an API key or a third-party cloud provider."),
        api_error_params: u({
            effort: o().optional(),
            provider: U([
                "bedrock",
                "anthropicAws",
                "mantle",
                "anthropicGoogleCloud",
                "vertex",
                "foundry",
                "gateway"
            ]).optional(),
            remedy: U([
                "refresh_command",
                "refresh_credentials",
                "adc",
                "gateway_token",
                "host_managed",
                "model_access"
            ]).optional(),
            media: U([
                "image",
                "document"
            ]).optional().catch(undefined),
            media_reason: U([
                "unprocessable",
                "unsupported_by_model",
                "media_budget"
            ]).optional().catch(undefined),
            rate_limit_info: rkr().optional().catch(undefined)
        }).optional().describe("@internal Parameters of api_error, present only for the kinds that have any. effort: the effort level the API refused (effort_requires_thinking). media (media_removed): the kind of block the API refused; absent for media_budget. media_reason (media_removed): unsupported_by_model — the API said that the model does not accept PDF documents; media_budget — the request's images and documents together exceed the API's limit, and the requests that follow may leave out blocks of either kind; unprocessable — every other refusal, a gateway's report of a model's refusal among them. provider: the API provider whose credentials failed (provider_credentials, gateway_session_expired). remedy (provider_credentials, gateway_session_expired): refresh_command — a configured refresh command (awsAuthRefresh / gcpAuthRefresh) refreshes the credentials; refresh_credentials — refresh the provider's credentials by hand, no command is configured; adc — refresh the Google application default credentials or the GOOGLE_APPLICATION_CREDENTIALS key file; gateway_token — replace the gateway token supplied through ANTHROPIC_AUTH_TOKEN or ANTHROPIC_CUSTOM_HEADERS; host_managed — the host application owns these credentials; model_access — the credentials work but the model is not enabled for this account and region (Amazon Bedrock). rate_limit_info (usage_limit_reached): what the refused request's own response said about the limit, in the shape rate_limit_event carries. It is read from the same values as the message text, so its status, limit and reset are the text's: status is rejected and isUsingOverage false, rateLimitType names the limit, resetsAt is when it resets, and overageStatus, overageResetsAt, overageDisabledReason and limitScope say whose spend cap it is (the person's own cap arrives as org_level_disabled_until, as on rate_limit_event); no other member is sent. It is that refusal's record and is never updated, so compare resetsAt with the clock before calling the limit current."),
        api_error_code: o().optional().describe("@internal The server's error.details.error_code for this API error, copied through when it is an identifier (^[a-z][a-z0-9_]{0,63}$) and dropped otherwise. Carries server gate codes this build has no api_error value for, so a host can key on a new gate without a Claude Code release. Absent when the response carried no code."),
        error_details: o().optional().describe("@internal Raw API error message — preserves details (e.g. prompt-too-long token counts) that user-facing content discards."),
        advisor_model: o().optional().describe("@internal Advisor model that produced this message, when applicable."),
        attribution_agent: o().optional().describe("@internal Attribution stamp: agent name parsed from querySource (see messageAttribution.ts). May overlap with subagent_type."),
        attribution_skill: o().optional().describe("@internal Skill that produced this message."),
        attribution_plugin: o().optional().describe("@internal Plugin that produced this message."),
        attribution_mcp_server: o().optional().describe("@internal MCP server that produced this message."),
        attribution_mcp_tool: o().optional().describe("@internal MCP tool that produced this message.")
    }).describe("An assistant message. While a response streams the CLI emits one assistant message per completed content block, so several consecutive assistant messages can share message.id and each carries just that block in message.content; on those, message.stop_reason is null and message.usage is not final — the turn's stop reason and total usage arrive on the result message. parent_tool_use_id is non-null when the message was produced inside a subagent started by that tool_use."));
const y0 = p(()=>u({
        type: A("rate_limit_event"),
        rate_limit_info: rkr(),
        uuid: _(),
        session_id: o()
    }).describe("Rate limit event emitted when rate limit info changes."));
const ay = p(()=>u({
        tool_name: o(),
        tool_use_id: o(),
        tool_input: ue(o(), oe())
    }));
const R0 = p(()=>u({
        id: o(),
        name: o(),
        input: ue(o(), oe())
    }));
const iy = p(()=>U(Nw).describe("Why the query loop terminated. Unset when the loop was bypassed (local slash command)."));
const ly = p(()=>u({
        spawned: E().int().describe("Subagents actually started (one tengu_agent_tool_selected each); a refused or failed launch is not counted."),
        requested: u({
            background: E().int(),
            foreground: E().int(),
            unset: E().int()
        }).describe("Spawns by the run_in_background value the model passed; all count as unset while the parameter is not offered (background tasks disabled, or the fork gate on)."),
        started_in_background: E().int().describe("Spawns that started in the background after defaults and session settings (tengu_agent_tool_selected.is_async); the rest blocked the spawning tool call."),
        by_type: ue(o(), E().int()).describe("Spawns by agent type."),
        max_depth: E().int().describe("Deepest spawn: 1 = started by the main thread, 2 = by a depth-1 subagent."),
        spawned_by_subagents: E().int().describe("Spawns made from inside another subagent (depth > 1)."),
        completed: E().int(),
        failed: E().int(),
        killed: u({
            parent: E().int(),
            user: E().int(),
            system: E().int()
        }).describe("Stopped before finishing: parent = by another agent through TaskStop; system = by Claude Code itself (the --max-budget-usd halt, the sweep of background subagents when an SDK or IDE client interrupts, or -p giving up on a background subagent still running at its wait ceiling); user = any other stop, including a foreground subagent cancelled just as it finished (counted here, not as completed)."),
        refused: u({
            depth_limit: E().int(),
            concurrency_limit: E().int(),
            budget: E().int()
        }).describe("Agent tool calls turned down because one of these limits was reached (other denials, such as an unknown agent type, are not counted). depth_limit stays near zero in practice: a subagent at the nesting limit is normally not offered the tool at all.")
    }).describe("@internal Subagents started through the Agent tool in this session, as running totals (forked skills, workflows, teammates and other internal agents are not counted; two sessions in one process keep separate counts). Cumulative like modelUsage: read the latest result rather than summing across results; a resumed session starts fresh and a mid-session /clear zeroes it, though a background subagent that outlives the /clear still records its outcome, so completed, failed and killed can then exceed spawned. A result that was held back while background subagents finished carries the counts as of when it is written to the stream, as do its total_cost_usd, duration_api_ms and modelUsage (and usage where that is a running total; a per-turn main-loop usage keeps its turn-end value). Omitted by hosts without a local Agent tool and on crash/startup-error results; all zeros until the Agent tool starts or refuses a subagent. A remote (isolation: remote) launch counts as spawned but never reports an outcome. Per-subagent detail is on the task_started / task_notification events."));
const cy = "Per-model totals for every model call made through the query pipeline during this query() call — main loop, Task subagents, sidechains, and internal calls such as compaction and Workflow agents. Cumulative across turns in streaming-input sessions: each result carries the running total so far, so read the latest result rather than summing across results. Internal helper calls outside the query pipeline (e.g. the permission classifier, token-count probes) are excluded; crash/startup-error results may carry zeroed usage, a resumed or forked session continues from the totals its transcript saved, when it has them (so the first result already carries the earlier turns), and a mid-session /clear resets the running total. The correct field for token/cost accounting; treat it as an estimate, not a billing statement.";
const dy = "@internal Running totals of the subagents the Agent tool started this session; see SDKSubagentStats.";
const hy = "@internal How many times a safety system has stopped one of this session's model calls made through the query pipeline (main loop, subagents, forked skills, compaction and other internal calls), as a running total since the session started in this process; two sessions in one process keep separate counts. Counted: a response that ends on stop_reason refusal, whether Claude Code then shows it, retries it or re-sends it to another model; a refusal that the API itself answered on a fallback model; output that the API's content filter stopped for good (the stop ends the call); and, where the build can recognise it (public builds cannot), a server-side safety monitor's block (api_error safety_monitor_blocked). It counts these events, not calls: one call can add a refusal answered on a fallback model and then that model's own refusal. 0 means that none of these was seen; a kind of stop that this version does not know is not counted. Never sum across results. It is never saved, so a resumed session starts at 0 again, and a mid-session /clear zeroes it: over a stored log that spans a restart, a resume or a /clear, any result above 0 means a stop happened, and a later 0 does not cancel it. Present, 0 included, on every result that carries a turn's measured totals. Absent on the zeroed results that stand in for a crashed, cut or never-started turn, on Remote Control's results and from older producers, where it says nothing: absent is not 0. A call still running when a result is written (a background subagent's) shows on the next result; a result held back while background subagents finished carries the count as of when it is written to the stream, never less than it was built with. Not counted inside the pipeline: a stop of the API's content filter that Claude Code answers by streaming the request again (so 0 does not rule one out), an organization's data-loss-prevention denial (api_error dlp_request_denied), a block by a cloud provider's own guardrail, an advisor's refusal inside a reply that ends normally. Not counted at all: model calls outside the query pipeline (e.g. the permission classifier, token-count probes) and work in other processes.";
const uy = "User-initiated sends still waiting in the command queue when this result was produced. Greater than 0 means at least one more user turn (and result) follows without further input, barring cancellation; 0 means none is pending, or the session is ending (end_session or a shutdown latched mid-turn discards the backlog). Queued sends may coalesce into fewer turns, so this counts pending sends, not remaining results. System-generated queue entries are not counted. Absent on fatal startup results and on surfaces without a command queue.";
const py = "Cumulative estimated cost in USD for this query() call, covering the same query-pipeline calls as modelUsage and sharing its lifecycle: cumulative across turns in streaming-input sessions — each result carries the running total so far, so read the latest result rather than summing across results. Crash/startup-error results may carry zeroed values, a resumed or forked session continues from the total its transcript saved, when it has one (so the first result already carries the earlier turns; maxBudgetUsd counts only the spend since this query() call started or last /clear), and a mid-session /clear resets the running total. An estimate, not a billing statement.";
const _y = "Delivery sequence of this result within the run: how many results the run numbered before this one, starting at 0, in the order the process writes them. A result held back while background work finishes is numbered when it is finally written, not when its text was produced; a result whose write fails still consumes its number, so a gap in a stream-json sequence means a result was lost. Distinct from num_turns, which counts model round-trips within one turn. Numbered by the process that hosts the run (`claude -p`, stream-json): a local client relaying a cloud session passes the cloud session's numbering through and its own locally built error results carry none; the in-process engine surface does not number yet. Absent from older producers.";
const v0 = p(()=>u({
        phase: U([
            "setup",
            "run"
        ]).describe("@internal 'setup' when the session process never started, 'run' when it exited."),
        exit_code: E().int().nullable().optional(),
        signal: o().nullable().optional()
    }).describe("@internal How a self-hosted runner's session process ended, on the result the runner synthesizes for it."));
const C0 = p(()=>U([
        "org_pin_api_key_conflict",
        "provider_not_allowed",
        "org_verify_failed",
        "org_pin_mismatch",
        "managed_settings_invalid",
        "remote_settings_required_unavailable",
        "gateway_signin_required",
        "gateway_access_denied",
        "proxy_invalid",
        "temp_dir_unusable",
        "cwd_unavailable",
        "shell_tool_missing",
        "session_held_by_background",
        "worktree_resume_refused",
        "worktree_unverified",
        "cli_version_too_old",
        "bypass_root",
        "org_config_required_unavailable",
        "org_config_refused"
    ]).describe("Why Claude Code refused to start, so a host can offer the fix instead of a retry. org_pin_api_key_conflict: managed settings pin a first-party or Cloud gateway sign-in, and an Anthropic API key or auth token is configured instead. provider_not_allowed: managed settings list the API providers this machine may use (allowedProviders), and the session is set up for one that is not listed. org_verify_failed: the sign-in's organization could not be verified against the pin (network, or a revoked token). org_pin_mismatch: the sign-in belongs to an organization the pin does not allow. managed_settings_invalid: managed policy settings could not be read, the pin names no organization, or managed model settings (deniedModels, or an availableModels list matched exactly) block the default model and leave no allowed model to use instead. remote_settings_required_unavailable: managed settings the organization requires could not be loaded. gateway_signin_required: the Cloud gateway ended this sign-in. gateway_access_denied: the Cloud gateway refused managed settings for this account. proxy_invalid: a proxy setting is not a complete URL. temp_dir_unusable: the per-user temp directory is unsafe or could not be created. cwd_unavailable: the working directory was deleted, moved or cannot be read. shell_tool_missing: Windows has no shell tool: Git Bash is missing, and PowerShell is missing or turned off by CLAUDE_CODE_USE_POWERSHELL_TOOL. session_held_by_background: the conversation to resume or continue is running as a background session. worktree_resume_refused: the resume was refused because the session's worktree failed its safety checks or the resume was launched from inside it; errors says whether a re-run continues without the worktree. worktree_unverified: the session's worktree could not be verified right now; retrying may succeed. cli_version_too_old: this Claude Code version is below the minimum Anthropic requires. bypass_root: bypass permissions mode was requested while running as root. org_config_required_unavailable: the organization requires its policy limits and managed settings before a session starts, and they could not be loaded (network, proxy, or an Anthropic error); retrying may succeed. org_config_refused: the organization requires its policy limits and managed settings, and Anthropic refused them for this sign-in (expired or revoked session, or the organization does not allow Claude Code for this account); signing in again or an admin's change is the fix, not a retry."));
const z0 = p(()=>u({
        type: A("result"),
        subtype: A("success"),
        duration_ms: E().int(),
        duration_api_ms: E().int(),
        ttft_ms: E().int().optional(),
        ttft_stream_ms: E().int().optional(),
        time_to_request_ms: E().int().optional(),
        time_to_request_phases_ms: ue(o(), E().int()).optional().describe("@internal How time_to_request_ms was spent, in integer ms per phase, summing to it exactly: system_prompt, resume_other (settling, before the turn's own prompt, tool calls that an earlier run left open or the session's client handed over, see turn_start_resume_kind; excluding four parts of it that have keys of their own: resume_store_confirm, writing a handed-over turn's lines to the transcript and waiting for the store to confirm them; resume_staged_files_wait, that turn's wait for files its client is still staging; resume_connector_wait, an orphaned permission's wait for its tool's MCP server to connect; turn_start_tool_run, the calls' permission checks, a person's time at a prompt included, and their runs, which are work the user asked for, not preparation; older producers report these five as one key, turn_start_resume), process_user_input (excluding four parts of it that have keys of their own: input_images, input_attachments, input_command, input_hooks), transcript_persist, tool_pool_refresh, system_prompt_rebuild (a second assembly of the system prompt, run when the tool pool re-read after the message was handled differs from the turn-start pool; older producers report it inside system_prompt), init_message, engine_pickup, memory_recall_wait, memory_context_wait, message_prep, model_config_wait, autocompact, query_setup, auto_mode_context_wait (the wait at dispatch for the auto-mode context, on a request that started one), model_gates, tool_schema_build, message_normalization, client_creation, request_build, then at most one of redrive_reactive_compact, redrive_fallback_model, redrive_non_streaming and redrive_other (present when the first model request of the turn never began streaming, or was answered without streaming, so time_to_request_ms runs to the send time of a later request: the time between the two sends, named for the reason; after a reply without streaming it includes that reply and any tool calls), and other (the remainder no phase covers). A phase that did not run on the turn is absent; other is always present. Present where time_to_request_ms is, on CLAUDE_CODE_REMOTE sessions and hosts that set CLAUDE_CODE_EMIT_STARTUP_TIMING; absent elsewhere and from older producers. See src/utils/turnRequestTiming.ts."),
        turn_start_resume_kind: U(kw).optional().describe("@internal What the turn was given to settle before its own prompt (the resume_ phases and turn_start_tool_run in time_to_request_phases_ms say how long that took): orphaned_permission (a permission answer whose pending request was lost, as when a worker restarts, so the tool call is settled with that answer), turn_handoff (a turn in progress that the session's client handed over), deferred_tool_use (a call a PreToolUse hook deferred), or none (resume_other is still reported, at about 0). A turn given more than one reports the first in that order. Present where time_to_request_phases_ms is."),
        process_turn_index: E().int().optional().describe("@internal Number of earlier turns of this CLI process that sent a main-conversation model request: 0 is the process's first turn to reach the model, not the conversation's first. Turns stopped or failed after sending count but carry no value, so values can skip. Where one process hosts several sessions, each has its own count, from 0 each time the process starts hosting it. Present where time_to_request_phases_ms is."),
        time_to_request_cpu_ms: E().int().optional().describe("@internal CPU time (user plus system) the CLI process used from turn start until it sent the turn's first main-conversation model request. Normally that is the time_to_request_ms window; if that request was abandoned for a new call (not an ordinary retry), time_to_request_ms runs on to the new one and this does not. Near time_to_request_ms, the window was mostly computing; near 0, mostly waiting. It adds up all threads, so it can exceed the window, and leaves out child processes, such as a command a tool runs. Unrelated work counts, such as the request that names the session (usually in its first turn). On a virtual machine, time the host spends restoring memory can count as CPU time, so a high value alone does not mean JavaScript work. Present where time_to_request_phases_ms is, unless the runtime reports no resource usage or the process hosts other sessions too."),
        time_to_request_loop_lag_ms: E().int().optional().describe("@internal The longest single stall of the session's thread between turn start and the turn's first main-conversation model request, measured as how late a 50 ms timer fired: the real stall can be up to 50 ms longer, so one under 50 ms can read 0, and a few ms is timer noise. JavaScript ran without a break, or the thread waited inside a blocking call (a synchronous file read or child process), or the whole process was paused; time_to_request_cpu_ms below this value means one of the last two, though on a virtual machine a pause while the host restores memory can look like CPU time. Any work on the thread counts: the request that names the session (usually in its first turn), or another session's where several share the thread. Only the first two minutes are measured. Present where time_to_request_phases_ms is."),
        time_to_request_major_faults: E().int().optional().describe("@internal Major page faults (waits for memory to be read from disk) by the process in the time_to_request_cpu_ms window; Windows also counts faults needing no disk read. On a virtual machine, memory the host restores is not counted: the machine never sees those faults. Present where time_to_request_cpu_ms is."),
        input_attachments_detail: u({
            slowest_producer: o().optional(),
            slowest_producer_ms: E().int().optional(),
            cpu_ms: E().int().optional(),
            major_faults: E().int().optional(),
            changed_files_reread: E().int().optional()
        }).optional().describe("@internal What the input_attachments phase of time_to_request_phases_ms did on the turn, to tell a wait inside one attachment producer from a process that was busy. The producers are the calls of maybe() in getAttachments; their labels are a closed list, and a producer's time includes the computing of the others that run beside it. slowest_producer is the label of the one that took longest from its start to its result, among those that began within the phase, and slowest_producer_ms is that time; a background agent's pass that begins within the phase is timed with the turn's own (a new process's first turn has none), and its re-reads are not counted. Where slowest_producer_ms is well above cpu_ms that producer most likely waited (on a file, the network or a child process); a time_to_request_loop_lag_ms near slowest_producer_ms says instead that the thread itself stood still about that long (a blocking call, or a paused process). Where it is not well above cpu_ms the label tells little. cpu_ms and major_faults are time_to_request_cpu_ms's and time_to_request_major_faults's counters over this phase alone and are read the same way: cpu_ms far below the phase's time means the process was not computing; at or above it means computing, without saying whose. Where cpu_ms is absent, the phase's own time is what there is to compare slowest_producer_ms with. changed_files_reread is how many files the changed_files producer set out to read again in full because their modification time was later than the one recorded when the conversation last wrote or edited them (0 when it read none again, whether or not any file was a candidate; absent when the conversation's record of files was empty or the producer did not run). Present on turns where the input_attachments phase started, unless nothing of it is known. cpu_ms and major_faults are absent wherever time_to_request_cpu_ms is absent, and when the turn's first model request went out before the phase ended."),
        resume_store_confirm_detail: u({
            write_ms: E().int(),
            ahead_ms: E().int(),
            post_ms: E().int(),
            other_ms: E().int(),
            posts: E().int(),
            failed_posts: E().int(),
            rows_ahead: E().int(),
            rows: E().int()
        }).optional().describe("@internal How the resume_store_confirm phase of time_to_request_phases_ms was spent. Present where that phase is, in a session whose transcript goes to a hosted store: on the result of a handed-off turn whose lines were confirmed and that went on to a model request. A wait that ends its turn (the lines not stored, or the turn stopped meanwhile) is therefore not in the measure. The four _ms values sum to that phase exactly. write_ms: the transcript write, until the carried lines are in the queue of the lane that uploads transcript rows (POST /worker/internal-events, one POST out at a time); a POST that is out during the write is counted in posts and rows, but that part of its time is in write_ms only. The other three split the wait for that lane to empty. ahead_ms: a POST was out that held only rows queued before the hand-off's write began, one already out at that moment included. post_ms: any other POST was out, timed by the client from before the body is encoded to the response, each retry included. other_ms: no POST was out (a backoff between retries, picking and sizing the next batch, a busy event loop), plus rounding, any POST still out when the wait was cut short, and the time of POSTs after the 64th. posts: POST attempts that ended between the start of the write and the end of the wait; failed_posts: those that did not go through. rows_ahead: rows the lane had accepted and the store had not yet confirmed when the write began, queued or in a POST already out; rows written earlier but kept back for a compaction's summary count from when they are queued. rows: rows queued since then that a POST delivered, the carried lines among them."),
        user_message_uuid: o().optional(),
        user_message_uuids: T(o()).optional(),
        resume_reason: o().optional(),
        local_command: o().optional(),
        request_sent_wall_ms: E().optional(),
        first_request_input_tokens: E().int().optional().describe("@internal Input tokens of the model call whose send time is request_sent_wall_ms: input_tokens + cache_read_input_tokens + cache_creation_input_tokens from that call's message_start. Lets a consumer group turn latency by prompt size. Present only with request_sent_wall_ms, and only when the sum is above zero; absent from older producers."),
        user_message_server_received_wall_ms: E().optional().describe("@internal The server_received_wall_ms of the user message that user_message_uuid names, copied unchanged, so the session server can measure from its own receipt to request_sent_wall_ms (two machines' clocks) without keeping the receipt time. Present only with request_sent_wall_ms, and only when that message carried a positive finite number there; absent from older producers."),
        first_content_frame_ms: E().int().optional(),
        first_stream_post_ms: E().int().optional(),
        first_stream_post_ack_ms: E().int().optional(),
        first_stream_post_queue_wait_ms: E().int().optional(),
        first_stream_post_queued_behind: U(jn).optional(),
        first_stream_post_wall_ms: E().optional(),
        frame_received_wall_ms: E().optional().describe("@internal Date.now() (epoch ms) when the triggering send's frame arrived on a session reading its input from the session server's SSE stream (--sdk-url), before the input loop read it. With frame_enqueued_wall_ms and turn_started_wall_ms it splits the stretch between the server's persist and request_sent_wall_ms into transit, the input loop's handling of the frame, its wait on the command queue, and the turn's own work. Present only together with request_sent_wall_ms, and only when the transport recorded the receipt; absent on a local stdin host and from older producers."),
        frame_enqueued_wall_ms: E().optional().describe("@internal Date.now() (epoch ms) when the input loop put the triggering send's frame on the command queue. Present exactly when frame_received_wall_ms is."),
        turn_started_wall_ms: E().optional().describe("@internal Date.now() (epoch ms) when the turn's clock started: the anchor duration_ms, ttft_ms, ttft_stream_ms, time_to_request_ms, first_content_frame_ms, first_stream_post_ms and first_stream_post_ack_ms are measured from. Present exactly when frame_received_wall_ms is."),
        frame_intake_phases_ms: ue(o(), E().int()).optional().describe("@internal How the triggering send's frame spent the time from frame_received_wall_ms to frame_enqueued_wall_ms, in integer ms per step: before_read (until the input loop read the frame; a frame received more than once counts from the earliest receipt no earlier copy already took), and, carved out of before_read where the loop could tell them apart, startup_wait (the part before the input loop existed, the worker still starting), control_requests_ahead (the part the loop spent handling control requests before it read the frame) and user_frames_ahead (the part it spent on earlier user frames, each from its read until the loop moved on, at its delivery or its parking), so that before_read keeps only the rest (frames handled without being noted, and everything when no split could be made); then dedup, flag_settle, receive_hook, attachments, admission_wait (held behind a pending model switch, a pending MCP server-set change, start-up work the worker still owed its first turn, or an earlier held frame), admit_check (the host's decision whether to queue the frame, when it had to be awaited), and other (the rest). Steps that did not run are absent; before_read and other are always present. The values sum to frame_enqueued_wall_ms minus frame_received_wall_ms, unless other or before_read came out negative and was set to 0. Present exactly when frame_received_wall_ms is, except from older producers."),
        turn_start_phases_ms: ue(o(), E().int()).optional().describe("@internal How the time from frame_enqueued_wall_ms to turn_started_wall_ms was spent, in integer ms per step of the host's work through its message queue. Each step is where the host was at the time, which for part of the stretch may be an earlier message's turn. The steps: idle (the host was not working through its queue), earlier_turn (an earlier turn still running, including its work after its result), after_turn (the host's work after an earlier turn ended and before it took the next message: recording the outcome, writing the transcript and acknowledgements, and releasing the queue; also its handling of a crash), background_wait (waiting on background tasks before looking at the queue again), entry_joins (other waits when the host starts on its queue, before it may take a message), sdk_mcp_update (the claude -p host updating its SDK MCP servers when it starts on its queue), loop_top (reloading plugins that changed, at the start of each pass over the queue), session_start_wait (waiting for the plugins' first session.start hook, and taking the message off the queue), first_command (the claude -p host's waits for its plugin registry and a Projects mount before the first message it takes each time it starts on its queue), mcp_prewait (waiting for MCP servers still connecting, before that same first message), repo_wait (a claude-code-server session waiting for its repository before a turn), turn_joins (before every turn: starting the memory re-check, and waiting for a Projects mount and for SDK or newly added MCP servers), tool_pool (building the turn's tools), commit (marking the message taken and setting up its turn), after_arm (waiting for a cleared permission prompt's record to be written, and the host's other work once the turn is set up), turn_gate (work the host requires before every turn), turn_open (the host's turn-start hook and other turn setup), engine_setup (getting the engine for the turn; on the claude -p host's first turn, building its session), tool_reread (re-reading tools, MCP clients and settings for the turn), cwd (switching to the turn's working directory), and other (the rest: rounding, and the wall clock running ahead of the monotonic one). Values are rounded so that they add up: each is within 1 ms of its step's time, a step that comes out as 0 is absent, and other is always present. The values sum to turn_started_wall_ms minus frame_enqueued_wall_ms, except that they can exceed it, usually by 1 ms from rounding and by more if the wall clock stepped back. Present only when frame_received_wall_ms is, and absent from older producers."),
        turn_start_control_requests_ms: E().int().optional().describe("@internal Of the time from frame_enqueued_wall_ms to turn_started_wall_ms, the integer ms in which the claude -p host's message reader was held by control requests (such as mcp_set_servers or set_permission_mode) instead of reading the next message; for a request handled in the background, only its start counts. The host can keep working toward the turn meanwhile, so this overlaps turn_start_phases_ms and is not part of its sum. Absent when 0. A claude-code-server tenant does not time control requests, so its results never have this field."),
        first_text_post_ms: E().int().optional(),
        first_text_post_queue_wait_ms: E().int().optional(),
        first_text_post_queued_behind: U(jn).optional(),
        first_text_post_wall_ms: E().optional(),
        time_to_request_from_spawn_ms: E().int().optional(),
        warm_spare_claimed: M().optional(),
        flag_fetch_kick: o().optional().describe("@internal One of FLAG_FETCH_KICKS, a string here so that list can change: whether this process started its start-up feature-flag fetch before the wait for it, or why not: the same value as system:init's startup_timing.flag_fetch_kick. started_in_init_* and started_after_init_*: it did, inside init() or right after. not_asked_warm: the flag cache was warm and nothing asked for an early start. settings_pending_*: settings that could change the fetch were still to be applied. launch_excluded: not a launch that starts it early. not_eligible: interactive, or no wait is budgeted. An _empty or _warm ending is the flag cache at that moment. Present only where time_to_request_from_spawn_ms is, and only when start-up judged it."),
        time_origin_ms: E().optional(),
        is_error: M(),
        api_error_status: E().int().nullable().optional(),
        api_error_code: o().optional().describe("@internal The api_error_code of the API error that ended the turn (see SDKAssistantMessage.api_error_code): the server's error.details.error_code when it is an identifier. Absent when the turn did not end on an API error or the response carried no code."),
        api_error: rr().shape.api_error.describe("@internal The api_error of the API error that ended the turn (see SDKAssistantMessage.api_error). Absent when the turn did not end on an API error or the error has no typed kind; treat an unknown value as absent."),
        num_turns: E().int(),
        result: o(),
        stop_reason: o().nullable(),
        total_cost_usd: E().describe(py),
        usage: sy(),
        modelUsage: ue(o(), Dt()).describe(cy),
        subagent_stats: ly().optional().describe(dy),
        safety_stops: E().int().nonnegative().optional().describe(hy),
        permission_denials: T(ay()),
        queued_turn_count: E().int().optional().describe(uy),
        structured_output: oe().optional(),
        deferred_tool_use: R0().optional(),
        terminal_reason: iy().optional(),
        result_index: E().int().nonnegative().optional().describe(_y),
        fast_mode_state: qt().optional(),
        fast_mode_disabled_reason: Gt().optional(),
        origin: eo().optional(),
        uuid: _(),
        session_id: o()
    }));
const O0 = p(()=>u({
        type: A("result"),
        subtype: U([
            "error_during_execution",
            "error_max_turns",
            "error_max_budget_usd",
            "error_max_structured_output_retries"
        ]),
        duration_ms: E().int(),
        duration_api_ms: E().int(),
        is_error: M(),
        num_turns: E().int(),
        stop_reason: o().nullable(),
        total_cost_usd: E().describe(py),
        usage: sy(),
        modelUsage: ue(o(), Dt()).describe(cy),
        subagent_stats: ly().optional().describe(dy),
        safety_stops: E().int().nonnegative().optional().describe(hy),
        permission_denials: T(ay()),
        queued_turn_count: E().int().optional().describe(uy),
        errors: T(o()),
        runner_exit: v0().optional().describe("@internal Set by the self-hosted runner on the result it synthesizes when the session process fails to start or exits abnormally (src/self-hosted-runner/sessionHandler.ts buildFailureEvents)."),
        startup_failure_reason: C0().optional().describe("Set on the zeroed error_during_execution result a stream-json run writes before exiting on a known startup failure; errors carries the same text as stderr. Failures that used to end with stderr alone write that result only when the host sets CLAUDE_CODE_STARTUP_FAILURE_RESULTS. Absent on every other result, on startup failures without a known cause, and from older producers."),
        user_message_uuid: o().optional().describe("Client uuid of the user message that triggered this turn (submitMessage options.uuid), echoed back so a consumer can link this error result to the send it answers — the same join key the success variant echoes, carried alone (error turns have no request_sent_wall_ms to report). A delivery-failure result from the remote-session client echoes the failed send's queue key, which is client-minted when the host sent no uuid of its own. A synthetic/scheduled (meta) turn's own uuid is echoed only when the host vouches it is the client event's own (delivered content such as a Slack owner ping or a Slack-bot observation); a meta turn that folded queued user messages in mid-turn, vouched or not, echoes the LAST of them. Absent on turns that neither had a client uuid nor folded a user message in, on session-scoped failures with no single triggering send (a crashed worker's zeroed result), and from older producers."),
        user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn consumed, in consumption order — all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any queued user message folded into the running turn between tool rounds, once taken off the queue — so a consumer that sent any of them can bind this result to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries; can be longer than the list on the turn's first reply frame. Present when a headless turn that ran echoes user_message_uuid; absent on delivery-failure and zeroed results and from older producers (fall back to user_message_uuid)."),
        resume_reason: o().optional().describe("Why this turn continued one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, …), else 'interrupted_turn'. Present on such a headless turn's result, success or error, with or without an echo (a turn whose opening user prompt could not be vouched for still carries the reason); absent on every other turn (also one that goes on from the answer to any other permission prompt), on the Remote Control bridge's per-turn synthetic results, and from older producers."),
        terminal_reason: iy().optional(),
        result_index: E().int().nonnegative().optional().describe(_y),
        fast_mode_state: qt().optional(),
        fast_mode_disabled_reason: Gt().optional(),
        origin: eo().optional(),
        uuid: _(),
        session_id: o()
    }));
const k0 = p(()=>Ue([
        z0(),
        O0()
    ]).describe(`The outcome of a turn. The CLI emits exactly one result message per turn, after that turn's assistant, user and stream_event messages; treat it as the turn-complete signal (informational system messages such as task notifications, session state changes or prompt suggestions may still follow it). subtype "success" carries the final assistant text in result \u2014 or, with is_error true, the error text when the turn ended on an API error; the error subtypes say why the turn stopped early. In single-prompt (non-streaming-input) mode the process exits after the turn.`));
const nr = p(()=>u({
        file: o().optional().describe("Path to the settings file that failed to parse or validate."),
        path: o().describe("Dot-notation path to the field with the error, or empty string for whole-file errors."),
        message: o().describe("Human-readable error message.")
    }).describe("A settings file parse or validation error. When a settings.json file fails to parse (invalid JSON, JSON comments, schema mismatch), the file is skipped and any rules it contained — including permission allow/deny lists — are not applied."));
const to = "The plugin's version as declared in its plugin.json manifest, emitted verbatim (plugin-author-controlled — validate before trusting). Omitted when the manifest declares no version.";
function my() {
    return u({
        id: o(),
        view_url: o(),
        device: Wr("status", [
            u({
                status: A("bound"),
                device_id: o(),
                display_name: o().optional()
            }),
            u({
                status: A("unbound"),
                reason: o(),
                message: o()
            })
        ]),
        directory_sync: u({
            state: U([
                "off",
                "seeding",
                "armed",
                "stopped"
            ]),
            reason: o().optional(),
            message: o().optional(),
            first_upload: o().optional(),
            synced_files: E().int().nonnegative().optional(),
            other_window: M().optional(),
            muted: M().optional(),
            started_from_upload: M().optional(),
            direction: U([
                "two_way",
                "upload_only"
            ]).optional().catch(undefined),
            file_mode: U([
                "container_sync",
                "device_tools",
                "unspecified"
            ]),
            file_mode_source: U([
                "stored"
            ])
        }),
        client_version: A(1),
        not_applied: T(u({
            name: o(),
            kind: U([
                "lost",
                "kept",
                "preference"
            ])
        })).optional(),
        host: u({
            handle: o(),
            working_dir: o(),
            platform: o(),
            cli_version: o().optional()
        }).optional(),
        serving: u({
            state: U([
                "on",
                "off",
                "pending",
                "revoked"
            ]).catch("off"),
            reason: o().optional().catch(undefined),
            policy: U([
                "parity",
                "interim"
            ]).catch("interim"),
            channel: U([
                "session",
                "bridge_only"
            ]).catch("bridge_only")
        }).optional(),
        connection: U([
            "connecting",
            "live",
            "reconnecting"
        ]).optional().catch(undefined),
        calls: u({
            live: T(u({
                call_id: o(),
                tool: o(),
                state: U([
                    "running",
                    "asked"
                ]).catch("running"),
                since: E(),
                ask_id: o().optional(),
                lapses_at: E().optional()
            })),
            recent: T(u({
                call_id: o(),
                tool: o(),
                ended: U([
                    "completed",
                    "denied",
                    "withdrawn",
                    "refused",
                    "failed"
                ]).catch("failed"),
                code: o().optional(),
                at: E()
            }))
        }).optional(),
        notices: T(u({
            key: o(),
            text: o()
        })).optional().catch(undefined)
    });
}
const N0 = p(()=>u({
        type: A("system"),
        subtype: A("init"),
        agents: T(o()).optional(),
        apiKeySource: KH(),
        startup_timing: ue(o(), oe()).optional().describe("@internal Cold-start telemetry for hosted (CCR) sessions: named startup phases and resume-hydration counters (StartupTiming in src/utils/startupTiming.ts). Absent elsewhere."),
        betas: T(o()).optional(),
        claude_code_version: o(),
        cwd: o(),
        tools: T(o()),
        mcp_servers: T(u({
            name: o(),
            status: o(),
            source: o().optional().describe("Where the server definition came from — same values as McpServerStatus.source (sdk | plugin | a config scope). Absent on CLIs that predate the field.")
        })),
        model: o(),
        permissionMode: ce(),
        slash_commands: T(o()),
        terminal_slash_commands: T(o()).optional().describe("Subset of slash_commands whose UX is bound to the local terminal (e.g. exit, statusline). Phone/remote UIs should hide these from command menus; desktop surfaces may keep them. Present only when non-empty; absent on CLIs that predate the field, and on sessions where no advertised command carries the tag."),
        output_style: o(),
        skills: T(o()),
        plugins: T(u({
            name: o(),
            path: o(),
            source: o().optional().describe('@internal Plugin source identifier in "name\\@marketplace" format. Sentinels: "name\\@inline" for --plugin-dir, "name\\@skills-dir" for .claude/skills plugins, "name\\@synced" for plugins synced from claude.ai, "name\\@builtin" for built-in plugins.'),
            version: o().optional().describe(to)
        })),
        plugin_errors: T(u({
            plugin: o(),
            type: o(),
            message: o(),
            path: o().optional().describe("Present only when a --plugin-dir, SDK `plugins` or synced directory entry did not load at all: the path of that entry, resolved against the cwd (for a directory, the value its `plugins[]` row would have carried; for a .zip, the archive; a --plugin-url entry carries none). `plugin` is then the positional `inline[N]` / `synced[N]` tag, so a host that mounts several directories pairs the error to its own by this path.")
        })).optional().describe("Plugin load-time errors. A plugin that did not load (an unmet dependency, a --plugin-dir entry that failed) is absent from `plugins[]`; a plugin that loaded without one of its components keeps its row and gets an entry here too. `plugin` is `name@marketplace`, or the positional `inline[N]` / `synced[N]` tag for a directory entry that failed before it had a name; `type` is a category from an open set (path-not-found, generic-error, manifest-validation-error, dependency-unsatisfied, hook-load-failed, …) — treat a value you do not recognize as a generic failure; `message` is display text. The key is omitted when there are no errors; CI can fail on `(plugin_errors?.length ?? 0) > 0`. A session whose frames are persisted server-side (a Remote Control worker) always omits this key — plugin diagnostics stay in the local log there, so an omitted key does not assert a clean load."),
        plugin_warnings: T(u({
            plugin: o(),
            type: o(),
            message: o()
        })).optional().describe("@internal Plugin authoring feedback (e.g., a default folder shadowed by a manifest key). When `plugin` matches an entry in `plugins[]`, that plugin loaded and the warning is advisory; warnings with a synthetic `plugin` source (no matching `plugins[]` entry, e.g. workspace-level suppression notices) describe content that did NOT load. The key is omitted when there are no warnings. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted — plugin diagnostics stay in the local log, so an omitted key there does NOT assert a clean load."),
        mcp_server_errors: T(u({
            name: o(),
            type: o(),
            message: o()
        })).optional().describe("@internal MCP server config entries from --mcp-config that failed validation and were skipped (e.g. a `url` entry with no `type`). Affected servers are absent from `mcp_servers[]`. `type` is a stable category from an open set — currently unknown_type, url_missing_type, invalid_config, reserved_name, or (Remote Control child only) bridge_carrier_foreign_entry, bridge_carrier_not_http, bridge_carrier_url_mismatch, bridge_carrier_no_ingress_origin, bridge_carrier_no_session_id; treat values you do not recognize as a generic skip. The key is omitted when there are no errors; CI can fail on `(mcp_server_errors?.length ?? 0) > 0`. On connections that persist frames server-side (the local bridge-worker lane) this key is always omitted — the skipped-entry detail stays in the local log, so an omitted key there does NOT assert every entry validated."),
        fast_mode_state: qt().optional(),
        fast_mode_disabled_reason: Gt().optional(),
        footer_indicator: uo().optional().describe(`@internal The terminal's configured "\u25C6 <text>" footer pill \u2014 see SDKFooterIndicator. Absent when nothing is configured.`),
        effort: U([
            "low",
            "medium",
            "high",
            "xhigh",
            "max"
        ]).nullable().optional().describe("The effort level the session will send on its next request — after env overrides, session state, org caps and model-support downgrades; the same value get_settings reports as applied.effort. null when no effort parameter will be sent (a model without effort, CLAUDE_CODE_EFFORT_LEVEL=unset, or an internal numeric budget). Present on Remote Control bridge init frames (terminal- and Desktop/VS Code-hosted sessions); absent on hosts that do not publish it and on CLIs that predate the field. Re-emitted inits carry the current value — the newest frame wins."),
        per_turn_effort_active: M().optional().describe("@internal Whether per-turn effort is active for this frame's `model`. true: an effort change keeps the prompt cache, because the effort is sent inside the conversation, at the turn where it changes. false: the effort is sent only as the top-level parameter, so a change rewrites the cached prefix. Mid-session the CLI reports only a change to false (system/per_turn_effort_changed), and true comes only from an init. After a fresh process, or after the conversation's refusals are cleared (for example by /clear or a compaction), a true is provisional: a refusal on any later request sends system/per_turn_effort_changed before the retry, so a host keeps listening for it all session. Absent means unknown. Sent by the stream-json (Agent SDK) host."),
        view_mode: U([
            "focus",
            "default"
        ]).optional().describe("Whether the session's transcript is in focus view ('focus': the model is told the user sees only its final message per turn, so clients may collapse each turn to the prompt and the final response; 'default' otherwise). Toggled by /focus, including over Remote Control. Present on Remote Control bridge init frames and on the per-turn init of headless stream-json runs (`claude rc` workers, -p, the SDK's subprocess transport); absent on hosts that do not publish it (the in-process engine) and on CLIs that predate the field. Re-emitted inits carry the current value — the newest frame wins."),
        capabilities: T(o()).optional().describe("Protocol capabilities this CLI supports, so SDK consumers can feature-detect instead of version-sniffing. Open set — ignore unknown values; check each capability for exactly the behavior you use. 'interrupt_receipt_v1' = the interrupt control_response success payload carries still_queued (uuids of async user messages that survive the interrupt). 'interrupt_cancel_queued_v1' = the interrupt control_request honors cancel_queued:true (queued and pending-dispatch commands are cancelled alongside the abort, listed on the response's cancelled field; still_queued is then empty — including any uuid that was mid-fold at the interrupt instant, since this request also aborts and the fold never delivers it — except that a client driving a hosted session lists there what it can no longer recall: a send already in flight to that session, or the first prompt the session was created with). 'queued_notifications' = the CLI accepts inbound queued_notification stream messages and drains them via ReadNotifications (the cloud session backend reads this from the persisted init event to decide whether it may send them). Absent on older CLIs."),
        analytics_disabled: M().optional().describe("@internal True when the CLI has analytics/telemetry disabled (privacy level, DO_NOT_TRACK, or 3P provider). IDE clients use this to hide per-message thumbs feedback UI since the rating event would be a no-op."),
        product_feedback_disabled: M().optional().describe("@internal True when the org's allow_product_feedback policy is false (ZDR/HIPAA). IDE clients use this to hide feedback surfaces (thumbs, session survey) whose events the CLI would drop at the proxy boundary anyway."),
        memory_paths: u({
            auto: o().optional(),
            team: o().optional()
        }).optional().describe("@internal Absolute directory paths for the auto-memory and team-memory stores. Lets SDK renderers classify Read/Write/Edit tool calls on these paths as memory operations without re-implementing CLI path detection."),
        scratchpad_path: o().optional().describe("@internal Absolute path of this session's scratchpad directory, for clients that read files from the session. Omitted when the scratchpad is disabled, and from the redacted init sent over the Remote Control bridge and by the hosted worker."),
        worker_epoch: E().int().min(1).optional().describe("@internal This cloud worker's life (CLAUDE_CODE_WORKER_EPOCH): a new number each time the session's worker is started. A claude --cloud client that latched an acknowledged epoch (remote_tools_announce) re-registers only when this differs. Emitted on workers where the account's remote-tools gate (tengu_violin_wood) is on, and by every claude-code-server worker whatever that gate reads; absent outside cloud workers and on CLIs that predate the field."),
        powershell_path: o().nullable().optional().describe("@internal Windows only: the absolute path of the PowerShell binary this session runs PowerShell commands with (PowerShell 7 when installed, including Microsoft Store installs, else Windows PowerShell 5.1), or null when none was found. Lets a desktop host open its own terminal with the same shell instead of re-implementing the detection. Present on stream-json (Agent SDK) init frames; absent on other platforms, wherever the init ambient is redacted (the Remote Control bridge), and on CLIs that predate the field."),
        cloud_session: my().optional().describe("@internal Only on init frames written by the headless stream-json client of a cloud-hosted session (agent loop in the cloud container; this machine may be bound to it as a device): a snapshot per frame, absent in every other mode; no user, assistant or result frame precedes the first such init (informational system frames may; so may a worker's result that no init preceded, after all that was held ahead of it; on a re-attach so may frames of a turn already in progress, other clients' prompts, and the echo of this host's own prompt when the session already had it or it joins a turn in progress). `id` is the cloud session id, always in its `session_…` spelling (the producer normalizes the service's `cse_…` spelling of the same session); hosts store it and pass it back verbatim to re-attach. The frame-level `session_id` is instead the cloud worker's id, a uuidv5 of the session id in its `cse_` form: the same for the life of the cloud session across worker restarts and re-attaches until a /clear in the session, and passed through by the client unchanged. When `device.status` is `unbound`, `reason` is one of the client's unbound-reason keys and `message` its phrase: one line, at most 200 characters, no ANSI or trailing newline, worded to follow `Laptop tools unavailable: `. `directory_sync`: see docs/cloud-session-block.md. `not_applied`, when present, lists what the host passed that this session does not apply — `name` is a flag as `--flag`, a key inside --settings / --managed-settings as `settings.<key>` / `managed-settings.<key>`, or a field of the opening initialize as `initialize.<field>` (at most 40, lost first, each one line of about 64 characters at most); `kind` says what it costs: `lost` (the session does without something this invocation asked for — the informational warning names these), `kept` (an attach: the existing session keeps what it was created with) or `preference` (a display or host preference nobody would miss — the informational notice names these two), so a host may show them itself once or never; absent when nothing was left unapplied. `host`, when present, is what this machine announces as to the session: `handle` is the name the model addresses it by (and a client shows), `working_dir` the absolute directory served calls run in (that machine's separators), `platform` its platform word, `cli_version` its Claude Code version; each one line of at most 200 characters; present once this machine has built an announce for the session (bound, with something or an explicit nothing to serve), absent otherwise and on clients that predate it. `serving`, when present, says whether this machine serves its tools (Bash, Read, Write, Edit) to the session over the session's channel: `state` is `pending` while bound and about to announce, `on` once the session holds this machine's tools, `off` when it serves nothing, `revoked` when it stopped mid-session; `reason` (present when `state` is not `on` and the cause is known) is one of the client's serving-off keys — `not_bound` (see `device.reason`), `external_build`, `windows`, `muted` (Anthropic's emergency switch turned serving off; it comes back when the switch does), `switch_off`, `launched_from_home`, `channel_off`, `egress`, `policy_org` (the organization does not allow remote sessions), `flag_off`, `flag_stale`, `announce_refused`, `announce_unverified`, `superseded` — an open set: render an unrecognized value as a generic not-serving state; `policy` is the serving policy in effect (`parity`, or the stricter `interim` fallback); `channel` is `session`, or `bridge_only` when the session channel is switched off on this machine and served calls (if any) ride only the legacy device bridge, whose state this block does not describe. Absent on clients that predate it: feature-detect the key. `connection`, when present, is this client's stream to the session: `connecting` before it first connects, `live` while it is up, `reconnecting` while it is lost and being re-dialled (this machine is offline to the session meanwhile). `calls`, when present (once this machine has served a call this attach), is what it serves right now and how its last calls ended, by id and tool name only — never a call's input or output: `live` lists, oldest first, each call admitted here and not yet ended, `state` `running` while this machine executes it or `asked` while it waits on the session's approval (`ask_id` names the question; `since` is when it entered that state and `lapses_at` about when the session gives an unanswered question up, both epoch milliseconds on this machine's clock — the session's own timer decides); `recent` lists, newest last, at most 20 calls that ended here, `ended` being `completed`, `denied` (the session said no), `withdrawn` (the session took the question back unanswered — its patience ran out or the turn moved on), `refused` or `failed`, with `code` the result's disposition, refusal or failure word when it has one, and `at` when. `notices`, when present, is what this machine's serving has told the person during this attach that a host should show, at most 8: `key` is the notice's stable name (an open set — `device-mcp-consent`: this machine has MCP servers a cloud session could use and none are offered until the person allows it; `device-mcp-reconsent`: a server it offers changed the tools it lists and is withheld until re-approved, or this machine's record of what its servers list could not be read and none are offered — `text` says which; `device-mcp-dropped`; `served-hooks-not-run`; `served-hook-errors`; `served-bash-launched-from-home`; `served-tools-muted` / `served-tools-unmuted`; `announce_unverified`) and `text` its one line (at most 200 characters, no ANSI or newline) — this machine's own words with names from its own configuration, to be shown as plain text; written only by a serve-only helper (`--attach-serve`) and absent when nothing was said. `calls`, `connection` and `notices` are pushed between inits on `cloud_session_delta` frames. `client_version` rises only on a breaking change to this block — warn and continue on a higher value, never refuse; `not_applied[].kind`, `serving.state`, `connection`, `calls[].state` / `ended` and reason keys may gain values without it changing, so treat unrecognized values neutrally (an unrecognized `serving.state` as not serving — this schema itself parses an unrecognized `serving.state` as `off`, `policy` as `interim`, `channel` as `bridge_only`)."),
        uuid: _(),
        session_id: o()
    }).describe("Session metadata the CLI emits at the start of each turn, normally ahead of every other message of that turn: session_id, model, working directory, tools, MCP servers, slash commands, permission mode, and the capabilities list for feature detection."));
const I0 = p(()=>u({
        type: A("stream_event"),
        event: g0(),
        parent_tool_use_id: o().nullable(),
        uuid: _(),
        session_id: o(),
        ttft_ms: E().int().optional(),
        thinking_display: o().optional().describe("@internal The thinking.display Claude Code put in the API request body for the response this event belongs to. If anything rewrites the request on its way to the API, this value still states what Claude Code sent, not what the API received. Two responses of one turn can differ. Set on `message_start`, on a thinking block's `content_block_start` and on `thinking_delta` events when the body had a display; absent on every other event, on Remote Control (interactive terminal) sessions and from older producers. An event that the API did not send as it stands can lack the key. The key states which display the text was requested with, and nothing about how to show it. An absent key states nothing: neither which display was requested, nor that none was."),
        api_message_id: o().optional().describe("@internal The API's id (`msg_…`) of the response this event belongs to: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Set on every event from a response's `message_start` to its `message_stop`, so that a consumer that missed the `message_start` can still tell responses apart. Two responses can share an id, as when a `message_start` is replayed; the key does not tell those apart. Absent on pings, when the `message_start` had no id or an empty one, on Remote Control (interactive terminal) sessions and from older producers. The events that Claude Code produces itself to close a response cut short carry it too. Events that a plugin produced or rewrote, and those that Claude Code builds in their place or to close them, can lack it. An absent key states nothing about which response the event belongs to."),
        abandoned_blocks: u({
            api_message_id: o().describe("The API's id (`msg_…`) of the response that was cut short: `event.message.id` on its `message_start`, `message.id` on its assistant messages. Not a message `uuid`. Should two responses share an id, the one meant is the one this `message_stop` closes."),
            from_block_index: E().int().nonnegative().describe("Blocks of the response at this index and above have no assistant message and never will. It is an `event.index` as on the response's `content_block_*` events, not a count of assistant messages. 0 means the whole response. Can be higher than every index the consumer has seen, and then there is nothing to remove.")
        }).optional().describe("@internal Set on a `message_stop` that Claude Code produced itself, after it stopped reading the response that `message_stop` closes because the API's stream failed, stalled or ended early. That response's content blocks at index `from_block_index` and above have no assistant message and will never get one, so a consumer that drew or stored them from stream events, and holds no assistant message for them, can remove them, even a block that has had its `content_block_stop`. Nothing is stated about lower blocks: some may have no assistant message, and what follows may repeat or replace them. What follows can be, among others, a retry (a new `message_start`), the same request without streaming (assistant messages under another id, with no `message_start` before them), an assistant message that reports the error, or nothing. A plugin can add content blocks of its own to a response, and those do get assistant messages under the same id, emitted before this event. Absent on every other `message_stop` (the API's own, one produced for a response that had arrived whole, one where Claude Code cannot be sure), on Remote Control (interactive terminal) sessions and from older producers. An absent key states nothing: a block with no assistant message yet may still get one."),
        text_runs_joined: A(true).optional().describe("@internal Set on the `message_start` of a response when CLAUDE_CODE_WEBSEARCH_CITATIONS is on in a non-interactive session. Each run of adjacent text blocks of that response gets one assistant message with one text block, which holds the joined text. Each entry of its `citations`, except a `web_search_result_location`, has `span_start` and `span_end`: the place of the cited block in the joined text, in Unicode code points, end exclusive. The `content_block_*` events still show each block of the run by its own index. A response that came without streaming has no `message_start`, and it is joined too."),
        user_message_uuid: o().optional().describe("Client uuid of the user message this turn is answering (submitMessage options.uuid), stamped on a non-ping stream event each time that send changes: the turn's FIRST non-ping stream event (normally the frame that triggers the turn's initial ack), and, for a turn started by a synthetic (meta) prompt, the first non-ping stream event after each queued user message folded in mid-turn takes the echo over (see SDKAssistantMessage.user_message_uuid for the rule) — so a consumer can bind the reply stream to the send it answers without waiting for the result. A turn started by a typed prompt stamps only its first non-ping stream event; independently, its first complete assistant message is stamped as well (see SDKAssistantMessage.user_message_uuid), so the same uuid may appear on both. Absent on every other stream event of the turn, on turns that neither had a client uuid nor folded a user message in, and from older producers."),
        user_message_uuids: T(o()).optional().describe("Client uuids of every user message whose prompt this turn has consumed so far, in consumption order — all members of a prompt batch the host merged into this one turn (several messages sent close together run as one turn whose user_message_uuid is the LAST member's), then any user message folded into the turn before this frame — so a consumer that sent any of them can bind this reply to its own send by finding its uuid anywhere in the list. Always contains user_message_uuid; at most 64 entries. Present exactly when user_message_uuid is, on the same frames; absent from older producers (fall back to user_message_uuid)."),
        resume_reason: o().optional().describe("Why this frame's turn continues one that a worker restart interrupted. Such a turn is the automatic re-run of the interrupted turn (CLAUDE_CODE_RESUME_INTERRUPTED_TURN), or one that goes on from the answer to the permission prompt the new worker took over, or from that turn's tool calls still in flight. The value is the host's CLAUDE_CODE_RESUME_REASON when it set one (host_draining, checkpoint_restore, container_recreated, …), else 'interrupted_turn'. Stamped on the same reply frames as user_message_uuid (which on such a turn names the interrupted turn's own last user prompt), so a consumer can tell its first reply from the interrupted attempt's. Absent on every other turn (also one that goes on from the answer to any other permission prompt), on thinking_tokens frames, and from older producers.")
    }).describe("An incremental streaming event for the assistant message being generated, emitted only when partial messages are requested (--include-partial-messages). The complete assistant message still follows as its own message."));
const M0 = p(()=>u({
        type: A("system"),
        subtype: A("compact_boundary"),
        compact_metadata: u({
            trigger: U([
                "manual",
                "auto"
            ]),
            pre_tokens: E().int(),
            post_tokens: E().int().optional(),
            cumulative_dropped_tokens: E().int().optional().describe("@internal Running total of context tokens compaction has removed so far, across this and every earlier compaction. " + "Each contribution is approximately pre_tokens − post_tokens."),
            duration_ms: E().int().optional(),
            user_context: o().optional().describe('@internal User-provided focus text for manual "summarize from here".'),
            messages_summarized: E().int().optional().describe("@internal Count of messages the compaction summarized."),
            precomputed: M().optional().describe("@internal The summary was generated in the background at the autocompact threshold and swapped in when prompt-too-long fired; duration_ms measures user-wait from that point."),
            pre_compact_discovered_tools: T(o()).optional().describe("@internal Deferred-tool names discovered before this compaction. extractDiscoveredToolNames reads this back on the next turn so the tool-schema filter keeps including them after the tool_reference-carrying messages were summarized away."),
            pre_compact_artifact_read_versions: T(u({
                slug: o(),
                ver: o()
            })).optional().describe("@internal The artifact versions the conversation held before this compaction (slug is the artifact id, ver the version read or published), most recently changed first; empty when it held none. A resumed session replays these so it can update those artifacts without reading them again."),
            preserved_segment: u({
                head_uuid: _(),
                anchor_uuid: _(),
                tail_uuid: _()
            }).optional().describe("Relink info for messagesToKeep. Loaders splice the preserved segment at anchor_uuid (summary for suffix-preserving, boundary for prefix-preserving partial compact) so resume includes preserved content. Unset when compaction summarizes everything (no messagesToKeep)."),
            preserved_messages: u({
                anchor_uuid: _(),
                uuids: T(_()),
                all_uuids: T(_()).optional().describe("@internal Unfiltered messagesToKeep UUIDs. uuids is the on-disk subset (messages recordTranscript writes); all_uuids is the in-memory superset including non-loggable messages an in-process surface still holds for the next turn's API input. Absent from older producers.")
            }).optional().describe("Ordered messagesToKeep UUIDs. Supersedes preserved_segment — " + "readers look up each UUID directly and relink uuids[i] to uuids[i-1] (uuids[0] to anchor_uuid) instead of walking the parentUuid chain. Unset when compaction summarizes everything.")
        }),
        logical_parent_uuid: _().nullable().optional().describe("@internal uuid of the last pre-compact message — the backpointer " + "forkSession follows across the compaction break. Distinct from the session-file chain parent (which is the post-compact summary). Absent from older producers."),
        uuid: _(),
        session_id: o(),
        historical: M().optional().describe("@internal Replayed history rather than a live message (stamped by the Remote Control bridge when it flushes history to the session server).")
    }));
const P0 = p(()=>u({
        type: A("system"),
        subtype: A("status"),
        status: f0(),
        permissionMode: ce().optional(),
        compact_result: U([
            "success",
            "failed"
        ]).optional(),
        compact_error: o().optional(),
        compact_output_chars: E().int().optional().describe("@internal On the 'compacting' statuses of an automatic compaction (absent on a typed /compact): characters of the summary streamed so far (text and tool-input deltas, not thinking). Returns to 0 at each new attempt at the summary (a request retried inside an attempt adds to what the dropped try streamed), and stays 0 while waiting for a summary written in the background. A rising count shows that the summary is being written; a still one proves nothing, and it is not a share of the final length, which is not known in advance."),
        uuid: _(),
        session_id: o()
    }));
const so = p(()=>u({
        type: A("system"),
        subtype: A("post_turn_summary"),
        summarizes_uuid: o(),
        status_category: o(),
        status_detail: o(),
        needs_action: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Background post-turn summary emitted after each assistant turn. summarizes_uuid points to the assistant message this summarizes."));
const ro = p(()=>u({
        type: A("system"),
        subtype: A("task_summary"),
        detail: o().nullable(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Mid-turn progress line from the debounced classifier. Mirrors external_metadata.task_summary so non-CCR consumers (desktop LocalSessionManager) see the same live phrase. detail is null on the idle clear."));
const no = p(()=>u({
        type: A("system"),
        subtype: A("session_metadata"),
        metadata: u({
            artifacts: T(u({
                url: o(),
                title: o().optional(),
                favicon: o().optional(),
                kind: A("frame"),
                updated_at: o()
            })).nullable().optional()
        }),
        uuid: _(),
        session_id: o()
    }).describe("@internal The same external_metadata patch a cloud worker sends the session server, for the keys a local host needs: today `artifacts` (the session's published-artifact list, whole list on each change, null once empty). Lets an SDK host keep the per-session summary a cloud session gets, without reading transcript rows."));
const D0 = p(()=>u({
        type: A("system"),
        subtype: A("informational"),
        content: o(),
        level: U([
            "info",
            "notice",
            "suggestion",
            "warning"
        ]).describe("Render level. 'info' shows only in transcript mode; 'notice' renders in inactive gray; 'suggestion' and 'warning' are more prominent."),
        tool_use_id: o().optional().describe("Dedupes progress messages for the same tool use."),
        prevent_continuation: M().optional().describe("When true, execution stops after this message (e.g. a Stop hook denied continuation)."),
        tag: o().optional().describe("Opaque feature tag on a line a host may treat specially; absent on ordinary lines. Hosts ignore values they do not know."),
        uuid: _(),
        session_id: o()
    }).describe("Generic text banner emitted by the loop — non-error status lines, hook feedback (e.g. a UserPromptSubmit hook's block reason), slash-command output. Hosts render `content` as plaintext at the given level."));
const xQ = p(()=>u({
        type: A("system"),
        subtype: A("permission_retry"),
        content: o(),
        commands: T(o()).describe("Display names of the commands that were allowed."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when tool execution retries after a permission-mode change allowed previously-denied commands. REPL renders a 'retrying with <commands>' banner. From internal SystemMessage 'permission_retry'."));
const LQ = p(()=>u({
        type: A("system"),
        subtype: A("stop_hook_summary"),
        hook_count: E().int(),
        hook_infos: T(u({
            command: o(),
            prompt_text: o().optional(),
            duration_ms: E().int().optional()
        })),
        hook_errors: T(o()),
        hook_additional_context: T(o()).optional().describe("Non-error feedback from hookSpecificOutput.additionalContext — kept separate from hook_errors so the sanctioned feedback channel is not labeled an error. Absent in sessions persisted before this field existed."),
        prevented_continuation: M(),
        stop_reason: o().optional(),
        has_output: M(),
        level: U([
            "info",
            "notice",
            "suggestion",
            "warning"
        ]),
        tool_use_id: o().optional(),
        hook_label: o().optional(),
        total_duration_ms: E().int().optional(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Summary of Stop/SubagentStop hook execution at turn end — which hooks ran, their output, and whether any prevented continuation. From internal SystemMessage 'stop_hook_summary'."));
const UQ = p(()=>u({
        type: A("system"),
        subtype: A("memory_saved"),
        written_paths: T(o()),
        team_count: E().int().optional(),
        verb: o().optional().describe('Renders as "<verb> N memories". Defaults to "Saved".'),
        uuid: _(),
        session_id: o()
    }).describe("@internal Confirmation that the memory subsystem wrote to the listed paths. REPL renders a '<verb> N memories' banner. From internal SystemMessage 'memory_saved'."));
const VQ = p(()=>u({
        type: A("system"),
        subtype: A("agents_killed"),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when background agents are terminated (e.g. on interrupt). REPL renders an 'agents killed' banner. From internal SystemMessage 'agents_killed'."));
const x0 = p(()=>u({
        type: A("system"),
        subtype: A("instruction_size_warning"),
        total_chars: E().int().describe("Combined length, in characters, of the instruction files in the session prompt: CLAUDE.md files, rules files and the files they import. Always over total_limit_chars."),
        total_limit_chars: E().int().describe("The recommended limit for total_chars on the turn's model, in characters."),
        file_count: E().int().describe("Number of files counted in total_chars. When it is 1, word the warning for a single file rather than a total."),
        largest_chars: E().int().optional().describe("Length of the largest file, in characters. Present only when the warning should mention it: there are several files and this one by itself is over total_limit_chars."),
        uuid: _(),
        session_id: o()
    }).describe("@internal The session's instruction files add up to more than the recommended limit. Numbers only: the host words the warning in the person's language. Sent to Claude Desktop's Code tab alone, at most once per process, on a conversation's first turn after system/init; never stored in the transcript. Safe to ignore: a host that does not recognize this subtype shows nothing."));
const jQ = p(()=>u({
        type: A("system"),
        subtype: A("away_summary"),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Summary of what happened while the user was away (background tasks completed, notifications accumulated). From internal SystemMessage 'away_summary'."));
const qQ = p(()=>u({
        type: A("system"),
        subtype: A("thinking"),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Rendered thinking content (the text itself, not the running token estimate — that is SDKThinkingTokensMessage). From internal SystemMessage 'thinking'."));
const oo = p(()=>u({
        type: A("transcript_mirror"),
        filePath: o(),
        entries: T(oe())
    }).describe("@internal Emitted after each successful local transcript write. The parent peels these off the stdout stream and batches them to the SessionStore adapter. Not exposed to public SDK consumers."));
const L0 = p(()=>u({
        type: A("system"),
        subtype: A("mirror_error"),
        error: o(),
        key: u({
            projectKey: o(),
            sessionId: o(),
            subpath: o().optional()
        }),
        uuid: _(),
        session_id: o()
    }).describe("Emitted when SessionStore.append() rejects or times out for a transcript-mirror batch after bounded retry (3 attempts with short backoff; timeouts are not retried). The batch is then dropped; this surfaces the failure so consumers are not silent on data loss."));
const U0 = p(()=>u({
        type: A("system"),
        subtype: A("api_retry"),
        attempt: E().int(),
        max_retries: E().int(),
        retry_delay_ms: E().int(),
        error_status: E().int().nullable(),
        error: Zn(),
        no_response: u({
            waited_ms: E().int(),
            retry_wait_ms: E().int()
        }).optional().describe("Present only when the API sent no response headers within the first-byte window (CLAUDE_STREAM_FIRST_BYTE_TIMEOUT_MS): waited_ms is how long the failed attempt waited for headers, retry_wait_ms how long the retry will wait for them. For this cause max_retries is its own cap (normally one retry), not the session budget."),
        uuid: _(),
        session_id: o()
    }).describe("Emitted when an API request fails with a retryable error and will be retried after a delay. error_status is null for connection errors (e.g. timeouts) that had no HTTP response."));
const V0 = p(()=>u({
        type: A("system"),
        subtype: A("control_request_progress"),
        request_id: o().describe("request_id of the in-flight control_request this progress belongs to."),
        status: U([
            "started",
            "api_retry"
        ]),
        attempt: E().int().optional(),
        max_retries: E().int().optional(),
        retry_delay_ms: E().int().optional(),
        error_status: E().int().nullable().optional(),
        uuid: _(),
        session_id: o()
    }).describe("Progress for a long-running client-originated control_request (currently only side_question), correlated by request_id. status 'started' means the worker accepted the request and launched the work; 'api_retry' carries the same retry counters as SDKAPIRetryMessage and is present only for that status."));
const j0 = p(()=>u({
        type: A("system"),
        subtype: A("model_refusal_fallback"),
        trigger: A("refusal"),
        direction: U([
            "retry",
            "revert",
            "sticky"
        ]),
        scope: U([
            "session",
            "local"
        ]).optional().describe("'session': the main thread fell back and the session model is swapped. 'local': a subagent / side-question (/btw) / background fork fell back — only that response came from the fallback model and the session model is unchanged. Absent from older CLIs (treat as 'session')."),
        original_model: o(),
        fallback_model: o(),
        request_id: o().nullable(),
        api_refusal_category: o().nullable().optional().describe("The refusal category ('cyber', 'bio', …): stop_details.category from the refused API response (client lane), or the fallback block's server-gated trigger.category (server lane). Open string — new categories ship on the wire ahead of schema updates. null when neither source carried a category (normal, not an error). Absent when emitted by an older CLI."),
        saw_cyber_refusal: A(true).optional().describe("@internal Present when ANY hop of this banner's multi-hop episode was a cyber refusal — not only the origin hop that api_refusal_category describes (the banner keeps first-hop category semantics for display). Re-arm evidence for the CLI's cyber-exclusion header on session restore; never rendered, not part of the public SDK contract. Absent on cyber-free episodes and when emitted by an older CLI."),
        api_refusal_explanation: o().nullable().optional().describe("stop_details.explanation from the refused API response (client lane only — the server-lane trigger carries no explanation). Unstable human prose — display only, never parse. null/absent when the response carried none, and always null on server-lane banners."),
        retracted_message_uuids: T(o()).optional().describe("Wire uuids of the messages this fallback retracted — the refused partial as the consumer received it (one uuid per normalized SDK message; multi-block messages carry per-block derived uuids) plus any tombstoned tool_results. Emitted AFTER the retraction, so this is a resolution-time eviction signal: remove these messages from transcript state on receipt. Eviction is idempotent — unknown or already-removed uuids are a no-op. Absent when emitted by an older CLI."),
        refused_user_message_uuid: o().nullable().optional().describe("UUID of the user message the refused request was for — the rewind target and composer prefill for edit-and-retry. This is the message's own uuid as delivered on the replay ack (not a per-block normalized uuid). null when the refused turn was not human-authored (e.g. a background task notification or auto-continuation — nothing to edit-and-retry) or otherwise cannot be identified; absent from older CLIs."),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe('Emitted when the primary model ends the stream with stop_reason "refusal" and the turn is retried once on a fallback model (direction: "retry"). When `scope` is "session" (or absent — older CLIs), the swap is made persistent for the session; when `scope` is "local", only that subagent/side-question response came from the fallback model and the session model is unchanged. "revert" and "sticky" are retained in the enum for SDK-consumer compat and are no longer emitted.'));
const q0 = p(()=>u({
        type: A("system"),
        subtype: A("model_refusal_no_fallback"),
        original_model: o(),
        request_id: o().nullable(),
        api_refusal_category: o().nullable().optional(),
        api_refusal_explanation: o().nullable().optional(),
        refused_user_message_uuid: o().nullable().optional(),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe('Emitted when the model ends the stream with stop_reason "refusal" and no retry runs: no fallback model is configured, or per-category routing declined the retry (the mapped fallback target is unresolvable, or CLAUDE_CODE_REFUSAL_FALLBACK_CATCH_ALL is explicitly disabled and the refusal category has no fallback map entry). The structured counterpart to detecting stop_reason "refusal" on the assistant error frame. Not emitted when the retry ran or the user declined the retry dialog (model_refusal_fallback covers the retry case). Absent from older CLIs.'));
const GQ = p(()=>u({
        type: A("system"),
        subtype: A("model_fallback"),
        trigger: U([
            "model_not_found",
            "permission_denied",
            "overloaded",
            "server_error",
            "last_resort",
            "model_blocked"
        ]),
        original_model: o(),
        fallback_model: o(),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe('@internal Emitted when the current turn is switched to the configured fallback model because the primary model failed (trigger "model_not_found": model retired/unknown; "permission_denied": org lacks access; "overloaded": repeated 529s; "server_error": retryable 5xx pivot; "last_resort": non-retryable error on the primary; "model_blocked": primary disabled by the per-model kill switch). Turn-scoped — the primary is re-tried on the next user turn. Not yet in the public SDKMessage union.'));
const BQ = p(()=>u({
        type: A("system"),
        subtype: A("model_consent_fallback"),
        choice: U([
            "consent",
            "switch_default",
            "cancelled"
        ]).describe("The consent-prompt answer (or no-dialog collapse) that produced the swap. 'consent' appears here only when the gate could not honor it (e.g. usage credits did not end up provisioned — the loop never enables billing from a bare wire reply)."),
        original_model: o(),
        original_model_name: o().optional().describe(`The name the CLI's usage-credit copy uses for original_model ("Fable 5"), for a host that renders its own notice; "Fable" when absent.`),
        fallback_model: o(),
        persisted_as_default: M().describe("True when the decline also rewrote the saved default model (explicit switch_default with the consent-gated model as the saved default)."),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when a pre-send model consent gate swaps the session off the requested model (consent declined, dismissed, or given without the required entitlement ending up provisioned). Currently emitted by the Fable 5 usage-credit gate (`fable_overage_consent_prompt`). Session-scoped — the swap persists for the session, and additionally as the saved default when persisted_as_default is true. Absence of this message after the consent dialog resolves means the session stayed on the requested model. Not yet in the public SDKMessage union."));
const HQ = p(()=>u({
        type: A("system"),
        subtype: A("file_snapshot"),
        content: o(),
        snapshot_files: T(u({
            key: o().describe("Identifier for the file type (e.g. 'plan', 'todo')."),
            path: o().describe("Original file path (for debugging)."),
            content: o()
        })),
        uuid: _(),
        session_id: o()
    }).describe("@internal Snapshot of session files (plan, todo) captured for rewind. From internal SystemMessage 'file_snapshot'."));
const KQ = p(()=>u({
        type: A("system"),
        subtype: A("scheduled_task_fire"),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when a scheduled task (cron) fires. content is the render text. From internal SystemMessage 'scheduled_task_fire'."));
const G0 = p(()=>u({
        type: A("system"),
        subtype: A("peer_message_hold"),
        state: U([
            "held",
            "released",
            "dropped"
        ]).describe("'held' when the receive-side policy parks the message instead of queueing it (once per message per hold cause — a re-announcement under a different cause emits again); then at most one of 'released' (the policy now accepts it: it enters the queue — its command_lifecycle 'queued' and, when it drains, its user replay echo follow under message_uuid) or 'dropped' (it will never reach the model in this session; see outcome)."),
        message_uuid: o().optional().describe("The parked command's uuid — the value its later command_lifecycle frames and user replay echo carry. For lane 'bridge'/'stdin' it is the id the host (or its bridge) supplied on the inbound message; for lane 'socket' it was chosen by the SENDING session, so a host must correlate it only within peer_message_hold / peer replay frames, never against its own prompts' lifecycle."),
        lane: U([
            "bridge",
            "stdin",
            "socket"
        ]).describe("Which ingress delivered it: the Remote Control bridge, the host's own stdin stream, or the local cross-session socket."),
        from: o().describe("The sender's address as the envelope will show it (the cross-session-message `from`) — an address-shaped token with control and invisible code points scrubbed; empty when the sender supplied none or an unshaped one. Sender-asserted on the socket lane: a label, not an identity proof."),
        from_name: o().optional().describe("The sender's display name when it supplied one, normalized and scrubbed the same way. A claim, like `from`."),
        cause: U([
            "explicit-setting",
            "managed-setting",
            "repo-setting",
            "invalid-setting",
            "bypass-default",
            "mode-unknown",
            "mode-mismatch",
            "no-mode-asserted"
        ]).optional().describe("state 'held' only: why the policy parked it. 'mode-mismatch' / 'no-mode-asserted' are the permission-mode parity holds (the sender runs in a different permission class, or asserted none while this session bypasses permissions); the *-setting causes are a standing crossSessionInbound:'hold'."),
        outcome: U([
            "expired",
            "refused",
            "dropped",
            "discarded"
        ]).optional().describe("state 'dropped' only: 'expired' — no one approved it before the approval deadline (a headless host has no approval surface, so every parity hold ends this way unless the mode changes first); 'refused' — the policy turned to refuse while it waited; 'dropped' — released or approved but the ingress guard (rate limit, duplicate, queue cap) discarded it; 'discarded' — the session ended with it still parked."),
        uuid: _(),
        session_id: o()
    }).describe("@internal A cross-session (peer) message this session's receive-side policy HELD rather than queued, and how that hold resolved. Lets a host show the human that a message arrived but has not reached the model (and may never) instead of nothing at all; the sending session is told separately over its own transport where one exists. Informational only — there is no host-side approval through this frame. Emitted on the stdout stream in -p/SDK sessions."));
const FQ = p(()=>u({
        type: A("system"),
        subtype: A("turn_duration"),
        duration_ms: E().int(),
        budget_tokens: E().int().optional().describe("Output tokens spent this turn toward the token budget."),
        budget_limit: E().int().optional().describe("Turn token-budget ceiling."),
        budget_nudges: E().int().optional().describe("Budget-nudge count this turn."),
        message_count: E().int().optional().describe("In-memory message count at turn end; used by resume-consistency telemetry to detect write→load round-trip drift."),
        pending_background_agent_count: E().int().optional().describe("Background Agent-tool runs still in flight when the turn finished."),
        pending_workflow_count: E().int().optional().describe("Workflow-tool runs still in flight when the turn finished."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Per-turn wall-clock duration plus budget and pending-background-work counts. REPL renders the 'Done in Ns' / 'Waiting for N agents' line. From internal SystemMessage 'turn_duration'."));
const YQ = p(()=>u({
        type: A("system"),
        subtype: A("api_error"),
        error: u({
            message: o(),
            status: E().int().optional(),
            request_id: o().optional(),
            formatted: o().describe("Human-readable display string for the error."),
            connection: u({
                code: o(),
                message: o(),
                is_ssl_error: M()
            }).nullable().describe("errno/SSL code extracted from the cause chain; null when absent."),
            is_network_down: M(),
            rate_limits: u({
                resets_at: E().int().optional(),
                rate_limit_type: o().optional()
            }).nullable().describe("Quota-429 headers surfaced by the retry banner; null when not a quota 429.")
        }).describe("Plain-data snapshot of the APIError — the class instance cannot cross the wire."),
        retry_in_ms: E().int(),
        retry_attempt: E().int(),
        max_retries: E().int(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Retryable-API-error frame carrying the plain-data error snapshot and retry counters. REPL renders the retry banner from this. Wire twin is SDKAPIRetryMessage ('api_retry'). From internal SystemMessage 'api_error'."));
const B0 = p(()=>u({
        type: A("system"),
        subtype: A("local_command_output"),
        content: o(),
        uuid: _(),
        session_id: o()
    }).describe("Output from a local slash command (e.g. /voice, /usage). Displayed as assistant-style text in the transcript."));
const H0 = p(()=>u({
        type: A("system"),
        subtype: A("hook_started"),
        hook_id: o(),
        hook_name: o(),
        hook_event: o(),
        uuid: _(),
        session_id: o()
    }));
const K0 = p(()=>u({
        type: A("system"),
        subtype: A("hook_progress"),
        hook_id: o(),
        hook_name: o(),
        hook_event: o(),
        stdout: o(),
        stderr: o(),
        output: o(),
        uuid: _(),
        session_id: o()
    }));
const F0 = p(()=>u({
        type: A("system"),
        subtype: A("hook_response"),
        hook_id: o(),
        hook_name: o(),
        hook_event: o(),
        output: o(),
        stdout: o(),
        stderr: o(),
        exit_code: E().int().optional(),
        outcome: U([
            "success",
            "error",
            "cancelled"
        ]),
        uuid: _(),
        session_id: o()
    }));
const Y0 = p(()=>u({
        type: A("system"),
        subtype: A("plugin_install"),
        status: U([
            "started",
            "installed",
            "failed",
            "completed"
        ]),
        name: o().optional(),
        error: o().optional(),
        uuid: _(),
        session_id: o()
    }).describe("Headless plugin installation progress (CLAUDE_CODE_SYNC_PLUGIN_INSTALL). started/completed bracket the whole install; installed/failed carry a per-marketplace name."));
const W0 = p(()=>u({
        type: A("tool_progress"),
        tool_use_id: o(),
        tool_name: o(),
        parent_tool_use_id: o().nullable(),
        elapsed_time_seconds: E().int(),
        task_id: o().optional(),
        uuid: _(),
        session_id: o(),
        heartbeat: M().optional(),
        subagent_type: o().optional(),
        subagent_retry: u({
            agent_id: o(),
            attempt: E().int(),
            max_retries: E().int(),
            retry_delay_ms: E().int(),
            error_status: E().int().nullable(),
            error_category: o()
        }).optional()
    }));
const $0 = p(()=>u({
        type: A("auth_status"),
        isAuthenticating: M(),
        output: T(o()),
        error: o().optional(),
        uuid: _(),
        session_id: o()
    }));
const X0 = p(()=>u({
        type: A("system"),
        subtype: A("files_persisted"),
        files: T(u({
            filename: o(),
            file_id: o()
        })),
        failed: T(u({
            filename: o(),
            error: o()
        })),
        processed_at: o(),
        uuid: _(),
        session_id: o()
    }));
const ao = "True for tasks that are not activity (every skip_transcript task, plus every live-update watcher, requested or auto-started); hosts should exclude them from activity indicators.";
const gy = "@internal True for a run of a resumed subagent (local_agent) that the tool call which resumed it waits for, as SendMessage does when background tasks are disabled; its task_started, if one is sent, names that call in tool_use_id. The run has ended by the time that call returns or throws, even when the wait is aborted. Its report goes into that call's result, so expect no follow-up turn when it ends. A later resume that nothing waits for starts a new run without the field.";
const fy = "task_id of the subagent (local_agent) task whose agent launched this subagent, shell, monitor or workflow task. Absent when the launcher is the main thread, has no task_id of its own (a teammate, an agent inside a workflow), or is no longer tracked. A resumed subagent keeps its original parent. The parent may be a foreground or already-ended task, so treat an unknown id as no parent.";
const jt = "Id of one run of the task: equal on every task_* event, background_tasks_changed entry and saved notification (its origin.runId) of that run. A resumed task keeps its task_id and gets a new one. The run ids of one task sort, by plain string comparison, in the order the runs opened; a frame that names a run sorting before the one a reader shows is late. Nothing else about the format is promised. Absent for a task this process did not register, and from CLIs that predate it.";
const Q0 = p(()=>u({
        type: A("system"),
        subtype: A("task_notification"),
        task_id: o(),
        run_id: o().optional().describe(jt),
        tool_use_id: o().optional(),
        status: U([
            "completed",
            "failed",
            "stopped"
        ]),
        reason: U([
            "worker_restart"
        ]).optional().describe("Machine-readable cause, set only when the task did not end through an ordinary completion, failure, or stop. 'worker_restart': the worker process restarted and the resumed process found the task orphaned (always with status 'stopped')."),
        output_file: o(),
        summary: o(),
        usage: u({
            total_tokens: E().int(),
            tool_uses: E().int(),
            duration_ms: E().int()
        }).optional(),
        resource_links: T(ry()).optional().describe("CLI-owned: for a backgrounded MCP task (task_type mcp_task) that completed, the `resource_link` content blocks of its final result — the files it returned by reference — collected from the raw result before the CLI renders it as the text the model reads. A backgrounded task's tool_result is the placeholder text and its real result arrives as this notification, so this is where a host learns which files that tool call produced; join to the originating call via tool_use_id. Same fields and caps as tool_use_result.resourceLinks (at most 50 links, 64 KiB serialized), absent when the result had none or the task is any other type. Never populated from the server's _meta."),
        handback: U(ekr).optional().describe("@internal Present on a 'completed' notification of a subagent that reports through the SubagentHandback tool: how its report reached its caller, with the values and meaning of `handback` on AgentToolCompletedOutput. Left out when the subagent failed, was stopped, is waiting on agents it started, or is waiting on its own background work with nothing delivered yet; for such a subagent, `summary` is then not a report. When present, `summary` holds harness notes written for the model. Any notification can be followed by a later one for the same task_id when the agent is resumed or finishes its wait; the later one replaces what the earlier one showed."),
        handback_report: tkr().optional().describe("@internal The report a 'send' or 'flagged' hand-back delivered, the same shape as `handbackReport` on AgentToolCompletedOutput: when present, render it instead of `summary`, with its `warning`, if it has one, above its `text`. Absent for 'withheld'; if it is absent for another value too, show `summary`."),
        skip_transcript: M().optional(),
        ambient: M().optional().describe(ao),
        uuid: _(),
        session_id: o()
    }));
const J0 = p(()=>u({
        type: A("system"),
        subtype: A("task_started"),
        task_id: o(),
        run_id: o().optional().describe(jt),
        tool_use_id: o().optional(),
        description: o(),
        subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
        is_backgrounded: M().optional().describe("Whether the task was registered in the background (true) or in the foreground with the spawning tool call blocking on it (false). A resumed subagent is always registered in the background. A later move to the background arrives as task_updated patch.is_backgrounded. Set for local_agent and local_bash tasks."),
        awaited: M().optional().describe(gy),
        spawn_depth: E().int().optional().describe("Nesting depth of a spawned subagent (local_agent) task: 1 for a top-level spawn, N+1 when spawned from inside a depth-N agent. Not set on other tasks."),
        parent_task_id: o().optional().describe(fy),
        task_type: o().optional(),
        workflow_name: o().optional().describe("meta.name from the workflow script (e.g. 'spec'). Only set when task_type is 'local_workflow'."),
        prompt: o().optional(),
        skip_transcript: M().optional().describe("Ambient/housekeeping task. Consumers should hide this from the inline transcript; it may still appear in a tasks panel."),
        ambient: M().optional().describe(ao),
        uuid: _(),
        session_id: o()
    }));
const Z0 = p(()=>u({
        type: A("system"),
        subtype: A("task_updated"),
        task_id: o(),
        run_id: o().optional().describe(jt),
        patch: u({
            status: U([
                "pending",
                "running",
                "completed",
                "failed",
                "killed",
                "paused"
            ]).optional(),
            description: o().optional(),
            end_time: E().int().optional(),
            total_paused_ms: E().int().optional(),
            error: o().optional(),
            is_backgrounded: M().optional()
        }).describe("Wire-safe subset of TaskState fields that changed. Excludes abortController, messages, result. Clients merge into their local task map."),
        uuid: _(),
        session_id: o()
    }));
const eF = p(()=>u({
        type: A("system"),
        subtype: A("background_tasks_changed"),
        tasks: T(u({
            task_id: o(),
            run_id: o().optional().describe(jt),
            task_type: o(),
            subagent_type: o().optional().describe(`Agent type of a local_agent task, such as "general-purpose" or a custom agent's name; "main-session" for a backgrounded main session. Not set on other tasks.`),
            description: o(),
            parent_task_id: o().optional().describe(fy),
            ambient: M().optional().describe(ao),
            awaited: M().optional().describe(gy)
        })).describe("Every live background task after the change. REPLACE semantics: swap your set for this payload."),
        uuid: _(),
        session_id: o()
    }).describe("The full set of live background tasks, emitted whenever membership changes (start, completion, kill, a foreground agent being backgrounded) or an entry's `ambient` flag or `parent_task_id` changes. A level signal, unlike the task_started/task_notification edge bookends: consumers that only need 'is background work running' should replace their set with each payload rather than pairing edges, so a missed bookend cannot wedge a stale running indicator. Ordering relative to the bookends for the same transition is unspecified (in practice a task that starts in the background joins the level before its task_started, and a finishing task leaves it after its task_updated and task_notification), so do not correlate it with the edge stream. The level is per-process: nothing is emitted at startup, so consumers must reset to the empty set whenever the session's CLI process (re)starts and let the next membership change repopulate it. A host that re-initializes an already-running process (a repeated `initialize` control request, e.g. after reconnecting) is sent a snapshot of the current set right behind the success response to that request, even when it is empty, so it need not wait for a change; CLIs that predate this send nothing there."));
const tF = p(()=>u({
        type: A("system"),
        subtype: A("feedback_draft_queued"),
        draft_id: o().describe("UUID of the on-disk draft file under ~/.claude/feedback/drafts/ — the identity for discard and submit."),
        draft_type: U([
            "bug",
            "idea",
            "missing_capability"
        ]),
        title: o().describe("Sanitized one-line summary from the SendFeedback tool call."),
        details_preview: o().describe("First ~200 chars of the sanitized details, for the host UI's three-line card preview. The full draft stays on disk and is read when the user opens the review form."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted by the SendFeedback tool after it writes a local draft to ~/.claude/feedback/drafts/, so a connected host UI can surface a review card without polling the filesystem. Carries only the card's display fields; nothing is sent anywhere without the user's explicit action on the review form."));
const sF = p(()=>u({
        type: A("system"),
        subtype: A("session_state_changed"),
        state: U([
            "idle",
            "running",
            "requires_action"
        ]),
        uuid: _(),
        session_id: o()
    }).describe("Mirrors notifySessionStateChanged. 'idle' fires after heldBackResult flushes and the bg-agent do-while exits — authoritative turn-over signal."));
const rF = p(()=>u({
        type: A("system"),
        subtype: A("session_title_changed"),
        title: o().describe("The session's current name. Control, bidirectional and zero-width characters are replaced with single spaces, the ends are trimmed, and the name is at most 200 Unicode code points. When another session already has the name, a suffix can make it unique."),
        uuid: _(),
        session_id: o()
    }).describe("@internal The session's name, for a host that shows it, such as an IDE editor tab. A headless (print mode) session sends it at startup when the session already has a name, and again after each change to the name (not an AI-generated title), including a rename the host itself sent with `rename_session`. A name that another process writes to the transcript arrives when this process next reads the end of its transcript: after about 32 KB of its own transcript writes, or at a compaction. A cleared name is not sent. The same name can arrive more than once, for example when it is set again, so a host should treat a repeated name as no change. The frame can arrive before the system/init message that first names its session_id, for example at startup or after /clear. A host that learns the session id from system/init can hold the name until then."));
const nF = p(()=>u({
        type: A("system"),
        subtype: A("worker_shutting_down"),
        reason: o().describe("Short snake_case reason set by the host CLI (not user input), e.g. 'host_exit', 'remote_control_disabled'."),
        uuid: _(),
        session_id: o()
    }).describe("Emitted by the bridge on opt-in graceful worker teardown (only when the teardown caller supplied a reason), before the heartbeat stops, so remote clients can show why the worker went away instead of waiting for heartbeat timeout. Absence is NOT a dead-host signal: handoffs (/update, /teleport, respawn), auto-disable, mode transitions, and internal fatal-error paths emit nothing by design. A dead host (battery, OOM, kill -9) never reaches teardown and never sends this either. NOTE: this event lands in the durable per-session event stream — a session that is later resumed may carry historical instances mid-stream. Clients MUST treat it as a live-tail signal only (honored when no further activity follows), not a one-shot session-lifetime fact."));
const oF = p(()=>u({
        type: A("system"),
        subtype: A("turn_handoff_available"),
        v: A(1),
        tools: T(o()),
        worker_epoch: E(),
        uuid: _(),
        session_id: o(),
        staged_files: A(true).optional().describe("@internal Present, and true, when this worker starts a handed-off turn's calls only after every stage_file control request it received earlier has finished or failed, or a wait limit has passed; a worker that omits it may start them while files are still downloading. Exception: a request with filestore_path set (a synced file) is not waited for, so a call that names that file may start before it is synced."),
        no_query_first: A(true).optional().describe("@internal True when user messages with shouldQuery false that reach this worker before a turn_handoff request are appended, and acknowledged, before the handed-off turn produces any output. Exception: a request that continues a turn whose leading lines an earlier request appended; that turn goes first. A worker that omits it may run the turn first."),
        relay_marker: A(true).optional().describe("@internal Present, and true, only when this worker uses the relay_marker member of a turn_handoff request; a client sends that member to no other worker."),
        home_files: A(true).optional().describe("@internal Present, and true, only on a worker that takes a stage_file control request whose mount_path is /uploads/.home/<path> as a file for /home/claude/<path>: it writes the file there, answers ok with a noop (already_present, path_occupied, refused_name, home_files_off, unchecked_announcement, resent_announcement) and writes nothing, or answers an error. Any other worker treats that path as an ordinary upload."),
        file_names: A(true).optional().describe("@internal Present, and true, only when this worker uses the file_names member of a turn_handoff request; a client sends that member to no other worker."),
        carried_writes: A(true).optional().describe(`@internal Present, and true, only on a worker that writes the files of the Write calls a turn_handoff request brings already answered, where their paths are under /home/claude. Before it appends a turn that has calls to run, it writes each such call's content to its path, replacing nothing. If it cannot write them all, it appends and runs nothing: the request is refused with an error that starts "invalid_handoff: carried_writes_", or it is accepted and the turn ends in a result with num_turns 0. Any other worker writes no file for these calls.`),
        hydrates_carried_lines: A(true).optional().describe(`@internal Present, and true, only on a worker that rebuilt the conversation from the session's stored transcript before it read any request, and would not have started without it. A client may send this worker again a turn_handoff request that an earlier worker accepted, if the request names no calls (tool_use_ids empty), is not stopped, and its messages hold no tool call. A request whose turn had not ended when an earlier worker with this key stopped is left unacknowledged, so the session service sends it to this worker by itself; a second request for the same turn is answered "duplicate" while the first waits or runs. The worker appends only the messages of the turn that its conversation lacks and, once the store confirms them, sends the turn's last message back as an assistant event (the echo); a turn it already holds whole is echoed again. The request can still be accepted, or refused ("invalid_handoff:"), with no echo, and the turn may then not be stored. That happens, for example, when the conversation has moved on past the part of the turn it holds, when a rewind has removed the turn, when a compaction has summarised part of it (or all of it, if the compaction was this worker's own), when a Stop clears the queue first, or when the store does not confirm the messages. An echo proves nothing if the same worker had the request before and sent none: messages the store did not confirm stay in its conversation. A turn that an earlier worker's compaction summarised whole is appended a second time. The key promises nothing for a turn that holds a tool call, or whose first message is stored with no answer but with another row behind it (a hook's output, say): the worker may already have continued such a turn itself when it started. A worker without the key may have started with none of the turn's messages.`)
    }).describe("@internal Emitted once by a cloud worker that accepts the turn_handoff control request, after it registers, carrying what it wrote to external_metadata.turn_handoff: the version, the tools whose calls it would accept, the worker life (worker_epoch) announcing it, whether handed-off calls wait for files still being staged (staged_files), whether user messages that make no model call are appended before a handed-off turn (no_query_first), and relay_marker, home_files, file_names, carried_writes and hydrates_carried_lines when set. Lets a session client learn the capability from the event stream instead of reading worker state. Durable in the stream: a reader keeps the entry with the newest worker_epoch it has seen and ignores older ones; a worker life that does not accept turn_handoff emits nothing (its registration writes turn_handoff: null)."));
const aF = p(()=>u({
        type: A("system"),
        subtype: A("ui_invalidate"),
        event: A("ui.render").describe("@internal The render event whose version moved; the engine versions `ui.render` as one event, so no component or instance is named."),
        instances: T(u({
            surface: o().describe("@internal The surface that drew the instance."),
            component: o().describe("@internal The component of the instance."),
            instance_id: o().describe("@internal The engine's requestId of the instance, as the ui_render that drew it named it.")
        })).optional().describe("@internal Present when a plugin wrote state (`$.state.set`) that these instances read while they were drawn, or a `Client` drawn in them failed and its plugin heard it (`ui.fault`), and nothing else moved: only they are stale, and the surface may re-ask them alone. Absent, every mounted instance may be stale, as before. A surface that ignores the field re-asks everything and stays correct."),
        uuid: _(),
        session_id: o()
    }).describe('@internal Fire-and-forget push from the hooks engine when a plugin called `$.ui.invalidate("ui.render")` or a plugin loaded or reloaded: every tree a remote surface drew through ui_render may be stale. The surface re-asks each mounted instance; the engine dedups the evaluations. Bumps from one plugin fold to at most one per 100 ms. With `instances`, a state write or a `Client` that failed made only those stale.'));
const iF = p(()=>u({
        type: A("system"),
        subtype: A("ui_log"),
        plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."),
        text: o().describe("@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push from a headless session for one `$.ui.log(text)` line: what the REPL appends to its transcript as a dim notice under the plugin's name. Not sent to the model. Lines are not counted across the session: a plugin's lines are the plugin's to write, however long the session runs; ones logged before the stream opened are delivered first, in order."));
const lF = p(()=>u({
        type: A("system"),
        subtype: A("ui_toast"),
        plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable)."),
        text: o().describe("@internal The line the plugin gave: be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
        timeout_ms: E().int().describe("@internal How long the REPL would keep it on the notification bar: the plugin's `timeoutMs`, or the engine's default (4000)."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push from a headless session for one `$.ui.toast(text)`: what the REPL shows on the notification bar under the prompt for a few seconds, under the plugin's name. Be ready for a plugin's toasts at no fixed rate; nothing counts how many a plugin has shown."));
const cF = p(()=>u({
        type: A("system"),
        subtype: A("ui_status"),
        plugin: o().describe("@internal The calling plugin's registry name, as the hooks engine knows it (never plugin-settable). One status line per plugin."),
        text: o().nullable().describe("@internal The plugin's pinned line, replacing its previous one; null removes it. Be ready for up to 10000 characters of it and then an ellipsis. Plain text: draw it as a text node, never as markup."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push from a headless session for one `$.ui.status(text)`: the line the REPL pins under the prompt beside the engine's own notices until the plugin's next call replaces or clears it."));
const dF = /^[A-Za-z0-9_-]{1,64}$/;
const _e = p(()=>o().regex(dF).describe("@internal A pane's id as the plugin opened it (`$.ui.open({ id })`): 1 to 64 of letters, digits, `_`, `-`. What a ui_render for `Pane` carries as `instance_id`."));
const hF = p(()=>u({
        id: _e(),
        title: o().describe("@internal The pane's tab label: the `title` its latest open gave, else its id. Plugin-authored text the engine bounded and freed of control characters: draw it as a text node, never as markup."),
        plugin: o().describe("@internal The registry name of the plugin that opened it, as the engine knows it; a `$.ui.scroll` or `$.ui.focus` of the pane is that plugin's alone."),
        close_on_escape: A(true).optional().describe("@internal Escape while the pane holds the keyboard, or at an idle empty composer, closes it as the person's close does (send ui_close); absent, Escape only returns the keyboard."),
        hold_toasts: A(true).optional().describe("@internal The surface holds its transient toasts while this pane is the one shown, and shows them once it closes."),
        rows: E().int().optional().describe("@internal The body rows its content asked for while seated inline; a request the person's own sizing overrides."),
        columns: E().int().optional().describe("@internal The body columns its content asked for while docked; a request the person's own sizing overrides.")
    }).describe("@internal One placed pane as the engine holds it (plugins/functionHooks/panes/): which, its tab, its opener, and the manners and size its latest open asked for."));
const io = p(()=>u({
        panes: T(hF()).describe("@internal The placed open panes in open order (an open appends, a close removes); a pane waiting unplaced is not listed. The surface draws one container for them: tabs when several, the shown one visible."),
        shown_id: _e().nullable().describe("@internal The pane the surface shows: the last opened or focused, never displacing one the person holds; null with none open."),
        focused_id: _e().nullable().describe("@internal The pane the person gave the keyboard (ui_pane_focus); null while the composer has it."),
        focus_requested_id: _e().nullable().describe("@internal A standing `$.ui.open({ focus: true })` the surface has yet to judge: honour it (focus the pane, send ui_pane_focus with its id) only while the composer is empty and idle and no dialog is up, else refuse it (ui_pane_focus with null).")
    }).describe("@internal The session's panes as a remote surface draws them: what ui_panes answers and the ui_panes push carries."));
const uF = p(()=>io().extend({
        type: A("system"),
        subtype: A("ui_panes"),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push from a headless session whenever the pane roster a remote surface draws changes: a plugin opened, retitled or closed a pane, the person showed, focused or closed one, a placing client attached. Deduplicated: an unchanged roster is not pushed. A pane opened before the stream armed produces none; read the roster with ui_panes on mount."));
const pF = p(()=>u({
        type: A("system"),
        subtype: A("ui_scroll"),
        client_id: o().describe("@internal The client drawing the site, as it attached."),
        component: U([
            "Pane",
            "AbovePrompt"
        ]).describe("@internal Which site: a pane's body or the band."),
        instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
        offset: E().int().describe("@internal The first content row the window is to show, 0 at the top, clamped to the tree as the surface last reported it."),
        follow_end: M().optional().describe("@internal True: keep the window on the tree's last rows through the draws to come, until the person or a plugin next moves it."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push when a plugin's `$.ui.scroll` (through the `ui.scroll` chain) moved the window of a site a remote surface draws: the surface scrolls the site's body there. The person's own scrolls (ui_scroll requests) are never pushed back."));
const _F = p(()=>u({
        type: A("system"),
        subtype: A("ui_focus"),
        client_id: o().describe("@internal The client drawing the site, as it attached."),
        component: U([
            "Pane",
            "AbovePrompt"
        ]).describe("@internal Which site: a pane's body or the band."),
        instance_id: o().describe("@internal The pane's id, or `above-prompt` for the band."),
        plugin: o().describe("@internal Whose element takes the ring: its `press.plugin`."),
        key: o().describe("@internal The element's `props.key`, as ui.press names it."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fire-and-forget push when a plugin's `$.ui.focus` (through the `ui.focus` chain) moved the focus ring of a site a remote surface draws onto one of its Buttons, Inputs or Selects: the surface focuses that element if it still draws it. The person's own moves (ui_focus requests) are never pushed back."));
const mF = p(()=>u({
        type: A("system"),
        subtype: A("commands_changed"),
        commands: T(Vt()),
        uuid: _(),
        session_id: o()
    }).describe("Fire-and-forget push of the full slash-command list after a mid-session change (e.g. skills discovered dynamically as the agent works in a subdirectory). Clients should REPLACE their cached command list with this payload; supportedCommands() tracks the latest push, so a re-fetch returns the same fresh list."));
const gF = p(()=>u({
        type: A("system"),
        subtype: A("notification"),
        key: o(),
        text: o(),
        priority: U([
            "low",
            "medium",
            "high",
            "immediate"
        ]),
        color: o().optional(),
        timeout_ms: E().int().optional(),
        uuid: _(),
        session_id: o()
    }).describe("Loop-side text notification. Mirrors the interactive REPL notification queue (key/priority/timeout). JSX notifications are not emitted on this channel."));
const fF = p(()=>u({
        type: A("system"),
        subtype: A("task_progress"),
        task_id: o(),
        run_id: o().optional().describe(jt),
        tool_use_id: o().optional(),
        description: o(),
        subagent_type: o().optional().describe("Subagent type for Task tool subagents."),
        usage: u({
            total_tokens: E().int(),
            tool_uses: E().int(),
            duration_ms: E().int()
        }),
        last_tool_name: o().optional(),
        summary: o().optional().describe("A one-line status for the task's row. For a local_agent task it is the model-generated progress summary (only when the agentProgressSummaries option is on); for a backgrounded mcp_task it is the MCP server's own bounded status message, emitted once per change without any option. Render it when present regardless of task type."),
        uuid: _(),
        session_id: o()
    }));
const bF = p(()=>u({
        type: A("system"),
        subtype: A("thinking_tokens"),
        estimated_tokens: E().int(),
        estimated_tokens_delta: E().int(),
        user_message_uuid: o().optional().describe("Client uuid of the user message that triggered this turn (submitMessage options.uuid), stamped on every thinking_tokens frame of a headless (stream-json / Agent SDK) turn so a consumer can attribute thinking progress to the send it answers before any reply frame arrives. On a synthetic/scheduled (meta) turn it names the last user message folded into the turn so far once one has been, else the turn's own uuid when the host vouches it is the client event's own (delivered content such as a Slack owner ping). Absent on turns that neither had a client uuid nor folded a user message in, on Remote Control (interactive terminal) sessions, and from older producers."),
        uuid: _(),
        session_id: o()
    }).describe("Live thinking-token estimate, digested from thinking_delta.estimated_tokens during the redacted-thinking phase (where the API otherwise streams only pings). estimated_tokens is the running total for the current thinking block; estimated_tokens_delta is the increment carried by this frame. Approximate progress for spinners/pills, not the authoritative billed output_tokens."));
const AF = p(()=>u({
        type: A("tool_use_summary"),
        summary: o(),
        preceding_tool_use_ids: T(o()),
        uuid: _(),
        session_id: o(),
        timestamp: o().optional().describe("@internal ISO timestamp when the summary was created on the originating process. From internal ToolUseSummaryMessage.timestamp.")
    }));
const yF = p(()=>u({
        type: A("system"),
        subtype: A("memory_recall"),
        mode: U([
            "select",
            "synthesize"
        ]).describe("How memories were surfaced: 'select' returns full file bodies chosen by the parallel selector; 'synthesize' returns a Sonnet-authored paragraph distilled from many tiny memories."),
        memories: T(u({
            path: o().describe("Absolute path to the memory file, a synthesis sentinel of the form `<synthesis:DIR>` when mode is 'synthesize', or an https URL when scope is 'organization'."),
            scope: U([
                "personal",
                "team",
                "organization"
            ]),
            content: o().optional().describe("The surfaced memory body. Always present for 'synthesize' mode and 'organization' scope (neither has an on-disk path to lazy-load from); absent for file-backed 'select' entries (renderers lazy-load from path).")
        })),
        uuid: _(),
        session_id: o()
    }).describe('Emitted when the memory recall supervisor surfaces relevant memories into the turn. Mirrors the CLI relevant_memories attachment so SDK renderers can show "Recalled from memory" inline.'));
const RF = p(()=>u({
        type: A("system"),
        subtype: A("elicitation_complete"),
        mcp_server_name: o(),
        elicitation_id: o(),
        uuid: _(),
        session_id: o()
    }).describe("Emitted when an MCP server confirms that a URL-mode elicitation is complete."));
const CF = p(()=>u({
        type: A("system"),
        subtype: A("permission_denied"),
        tool_name: o(),
        tool_use_id: o(),
        agent_id: o().optional().describe("Subagent ID when the denied tool call originated inside a subagent. Mirrors can_use_tool for host-side routing."),
        decision_reason_type: o().optional().describe("Discriminator from PermissionDecisionReason (e.g. 'classifier', 'asyncAgent', 'mode', 'rule')."),
        decision_reason_code: U(xzn).optional().describe("@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged): 'outside_reads_blocked' (permissions.blockReadsOutsideWorkingDirectories refused the path), 'memory_paused' (memory is paused for the session), 'classifier_transcript_too_long' (the auto-mode classifier's transcript exceeded its context window). Absent for every other reason; new values are additive."),
        decision_reason: o().optional().describe("Human-readable reason from the deciding component, when available."),
        message: o().describe("The rejection message returned to the model in the tool_result."),
        uuid: _(),
        session_id: o()
    }).describe("Emitted when a tool call is auto-denied without an interactive permission prompt (e.g. auto-mode classifier, dontAsk mode, headless-agent auto-deny, or a deny rule). With a permission prompt surface (stdio/SDK canUseTool), the 'ask' path surfaces via a can_use_tool control_request and this event covers the 'deny' short-circuit. Without one (bare -p / SDK query() with no canUseTool), 'ask' decisions are terminal, so this event also covers those implicit denials. Best-effort advisory: in rare races a denial can book without a frame or a frame can lack a booking twin — result.permission_denials is the authoritative record. Denials that resolve before canUseTool runs — PreToolUse hook denies, deny-rule overrides of hook allow/ask decisions, and file-tool calls (Read, Edit, Write) refused by a path-scoped deny rule — are not covered here, and neither is the MCP --permission-prompt-tool surface (the prompt tool is the host there)."));
const zF = p(()=>u({
        type: A("system"),
        subtype: A("permission_check_status"),
        tool_use_id: o(),
        agent_id: o().optional().describe("Subagent ID when the tool call originated inside a subagent, as on permission_denied."),
        status: U([
            "checking",
            "done"
        ]).describe("'checking': the call has waited about four seconds on its check and is still waiting. 'done': that wait is over."),
        uuid: _(),
        session_id: o()
    }).describe("@internal A tool call has been waiting on its automatic permission check (the auto-mode classifier) for longer than usual. It lets a host say that the step is being checked, where it would otherwise show a silent pause that looks like a running tool. Most checks answer within about four seconds and send nothing. The wait can include the rest of the model's streaming reply, or a dialog the host is showing about the check: prefer those indicators. Every 'checking' is followed by a 'done' for the same tool_use_id. 'done' does not say whether the call was allowed: the tool's result, permission_denied or a can_use_tool request does. One call can send more than one pair. Display-only and best-effort: a frame can be lost, so also stop showing it at any other frame for this tool_use_id or at the end of the turn. Emitted on the output stream of -p/SDK sessions."));
const OF = p(()=>u({
        type: A("prompt_suggestion"),
        suggestion: o(),
        uuid: _(),
        session_id: o()
    }).describe("Predicted next user prompt, emitted after each turn when promptSuggestions is enabled."));
const WQ = p(()=>u({
        type: A("attachment"),
        attachment: oe().describe("Internal Attachment discriminated union (at-mentioned files, IDE selections, pasted images, structured output, deferred tool-use). Wire shape pending a dedicated SDKAttachment schema."),
        timestamp: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when the engine yields an AttachmentMessage into the turn stream. Carries user-attached content (at-mentioned files, IDE selections, pasted media) and loop-attached data (structured output, deferred tool-use payloads). SDKResultMessage.structured_output and .deferred_tool_use are derived from these frames. From internal QueryEvent 'attachment'."));
const $Q = p(()=>u({
        type: A("tombstone"),
        message: oe().describe("The internal Message being tombstoned. Wire shape pending a dedicated schema."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when a previously-yielded message is superseded or removed from the transcript (e.g., streaming→non-streaming fallback removes a partial orphan). Consumers that render or persist the stream should remove the referenced message. From internal QueryEvent 'tombstone'."));
const NF = p(()=>u({
        type: A("conversation_reset"),
        new_conversation_id: _(),
        uuid: _(),
        session_id: o(),
        trigger: U([
            "clear",
            "plan_mode_exit",
            "fresh_session",
            "onboarding"
        ]).optional().describe("What discarded the conversation: 'clear' is the /clear command (or its /reset and /new aliases), 'plan_mode_exit' is leaving plan mode with the clear-context option, 'fresh_session' is a flow that starts a fresh session to implement an approved plan, 'onboarding' is an onboarding flow re-run inside an existing session. Informational: a consumer should reset on every conversation_reset frame whatever this says, and treat an absent (older emitter) or unrecognized value as an unspecified reset."),
        user_message_uuid: o().optional().describe("Only with trigger 'clear': the uuid of the user message whose /clear was executed (the client's own uuid for that message when it came from a Remote Control or stream-json client, otherwise the uuid the CLI assigned to the typed command). Lets a consumer match this frame to a /clear message it has already seen, wiping once whichever arrives first, instead of relying on arrival order. Absent for the other triggers, when that uuid is not a canonical UUID, and from older emitters."),
        timestamp: o().optional().describe('When the reset happened, as an ISO 8601 string in UTC read from the clock of the process that performed it. Meant for display, such as the time on a "conversation cleared" row, not for ordering frames. Absent from older emitters; a consumer can fall back to the time it received the frame.')
    }).describe("Emitted by /clear, plan-mode exit, fresh-session, and onboarding flows. The surface should mount a fresh transcript under new_conversation_id and reset any cached session title. From internal QueryEvent 'conversation_reset'."));
const XQ = p(()=>u({
        type: A("api_metrics"),
        event: Wr("type", [
            u({
                type: A("start"),
                ttft_ms: E().int(),
                id: o().optional(),
                message_id: o().optional()
            }),
            u({
                type: A("end"),
                output_tokens: E().int(),
                id: o().optional()
            }),
            u({
                type: A("content_block_start"),
                id: o().optional()
            }),
            u({
                type: A("thinking_progress"),
                estimated_tokens_delta: E().int(),
                id: o().optional()
            }),
            u({
                type: A("thinking_signature"),
                chars: E().int(),
                id: o().optional()
            })
        ]).describe("Per-API-call OTPS/TTFT lifecycle event. Optional id correlates parallel subagent start/end; serial callers omit it."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when a subagent's API call reports TTFT or output_tokens for OTPS (output-tokens-per-second) metering. From internal QueryEvent 'api_metrics' (ApiMetricsLifecycleEvent)."));
const QQ = p(()=>u({
        type: A("os_notification"),
        message: o(),
        notification_type: o(),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when a tool (PushNotificationTool, the Computer Use wrapper) or turn-end cleanup requests a native OS notification. The surface dispatches to its platform notification channel (iTerm2/Kitty/Ghostty/bell in the terminal; native IPC for desktop/IDE). From internal QueryEvent 'os_notification'."));
const JQ = p(()=>u({
        type: A("apply_flag_settings"),
        settings: ue(o(), oe()).describe("Shallow-merge flag-settings patch — same shape as SDKControlApplyFlagSettingsRequest.settings."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Output-direction counterpart to SDKControlApplyFlagSettingsRequest. Emitted when slash commands that toggle flag settings request a batched write that the surface applies to its AppState. From internal QueryEvent 'apply_flag_settings'."));
const IF = p(()=>u({
        type: A("command_lifecycle"),
        command_uuid: o().describe("The queued command's uuid — the client-supplied uuid on the inbound message. Commands enqueued without a uuid (e.g. the one-shot `-p \"prompt\"` string path) emit no lifecycle events. Renamed from Engine 'uuid' to avoid collision with the universal message uuid field."),
        state: U([
            "queued",
            "started",
            "completed",
            "cancelled",
            "discarded",
            "refused"
        ]),
        uuid: _(),
        session_id: o()
    }).describe("@internal Fate of a queued command (slash command or queued user prompt). 'queued' when the inbound message enters the command queue; 'started' when it drains into a turn; then exactly one terminal state: 'completed' — the turn that consumed it ended cleanly; 'cancelled' — removed by cancel_async_message (the host's own, or — with Remote Control enabled (remote_control) — a remote client withdrawing a prompt that a remote client queued: such a uuid was never sent by the host, so there is nothing to resend and the frame is informational), swept by an interrupt with cancel_queued:true, caught by a pending cancel just before dispatch, or consumed into a turn that was aborted (interrupt) or died on a hard failure (model_error, prompt_too_long, ...) — cancelled-over-completed is deliberate dup-over-loss for exactly-once resenders, so a fold answered earlier in a failed turn may be re-sent (a per-fold ledger refinement is tracked separately) — but resenders must not blindly resend on 'cancelled': user-requested removals arrive as the same state, so correlate against your own cancel_async_message responses AND against any interrupt receipt's `cancelled` list (interrupt_cancel_queued_v1) and resend only cancels neither source accounts for; 'discarded' — the session ended (end_session) with the command still queued, or with a peer message still held by the receive-side policy (not preceded by 'queued' then); 'refused' — declined by the session's receive-side policy before entering the queue (outright, or after being held): not preceded by 'queued', and it will not run in this session. Known gap: folds consumed by turns ending via max_turns / hook_stopped / tool_deferred / background_requested report 'completed' even though their content may only be answered on continuation/resume. 'completed' means the consuming turn ended, not that the result frame was delivered. Ordering relative to the result frame is per-path: a command that starts a fresh turn emits 'completed' AFTER that turn's result frame (later still when the result is held back for background tasks); a command folded into an already-in-flight turn emits 'completed' BEFORE that turn's result frame. Not a strict pairing: a terminal state may arrive for a command_uuid that never emitted 'started' (control-request ACKs, duplicate deliveries); internally-enqueued commands (cron triggers, teammate shutdown prompts, deferred-turn resume) mint a fresh uuid at enqueue and emit started/terminal without 'queued'; a turn that fails by throwing can leave 'started' without a terminal state; and a peer message the queue's own admission guard drops after acceptance (rate limit, duplicate collapse, loop guard, queued-peer cap) currently leaves 'queued' without a terminal state — on process exit a wrapper should synthesize 'discarded' for uuids it has not seen reach a terminal state. The exactly-one-terminal guarantee is per worker process, not per uuid lifetime: after CCR redelivery a 'discarded' uuid legitimately re-emits queued→…→terminal on the next worker. Emitted on the stdout stream in -p/SDK sessions; remote transports (mobile/desktop bridge) receive the equivalent signal via delivery ACKs instead. A host driving a cloud-hosted session through the headless `--cloud` client also receives 'cancelled' (and only that state) after its interrupt with cancel_queued:true, synthesized from the session's receipt: for a uuid the host sent and did not cancel itself it means the cloud session dropped that command — it will not run; do not resend it; the frames follow the interrupt's success response, are not ordered against the interrupted turn's result, and unknown uuids (another client's prompt) may appear. From internal QueryEvent 'command_lifecycle'."));
const dbo = p(()=>u({
        type: A("system"),
        subtype: A("code_change_published"),
        provider: o().describe("Forge classification derived from the URL's shape: 'github', 'github-enterprise', 'gitlab', or 'bitbucket' for pull/merge requests, 'gerrit' for a change on a googlesource.com Gerrit host, and other values for other review systems in internal builds. A naming hint, not host trust — an unrecognized host with a PR-shaped path classifies as 'github-enterprise'. Open set; treat an unknown value as a valid provider you don't recognize, never as an error."),
        url: o().describe("Web URL of the published change, as printed in the command output. Unverified — do not route authenticated requests to this host without your own validation."),
        repo: o().describe("Repository path from the URL (owner/name on GitHub; may carry more segments on GitLab). Shape-validated (forge path segments only; exactly owner/name except on GitLab) but not verified against any forge — on GitLab a leading segment can be a nested group, so never interpret it as a host."),
        identifier: o().describe("Provider-native change identifier — the PR/MR (or other change) number as a string."),
        action: U([
            "created",
            "edited",
            "merged",
            "commented",
            "closed",
            "reopened",
            "ready",
            "draft",
            "auto-merge-enabled",
            "auto-merge-disabled",
            "pushed",
            "checked-out",
            "started"
        ]).optional().describe("What the session did that produced this announcement: the flag-aware gh pr verb it ran ('created', 'closed', 'auto-merge-enabled', …), 'pushed' for a push to a branch that has a PR (or a push that opened or updated a Gerrit change), 'checked-out' for gh pr checkout, or 'started' for the open change on the branch the session's working directory was on when a Claude Desktop session started or resumed (sent once, at the first initialize) — always sent by current producers, absent only from older ones."),
        branch: o().optional().describe("The session's working branch when it produced the change. Sent for providers whose changes have no head branch of their own ('gerrit'), so a host can place the change on that checkout, and with 'created' on any provider: the branch the create was opened from (its --head / --source-branch flag, else the working branch), so a host can show the new change before its own forge lookup answers. Absent otherwise."),
        uuid: _(),
        session_id: o()
    }).describe("@internal A code change from this session went out for review (a pull/merge request, or another provider's change in internal builds). Fires when the harness sees the change published or links the session to a PR — on creation, and also when the session contributes to an existing one (gh pr edit/close/ready, gh pr checkout, a push to a branch that has an open PR) — so bind on every event, not just the first; re-emission for the same URL is possible and idempotent. Provenance: values are scraped from the command's captured output (the last PR-shaped URL printed) or a gh pr view lookup. Captured output is not only the forge CLI's own text — hook output or files printed by the same command can contribute — so treat the fields as a binding hint: display them, but verify against the forge with your own credential-scoped lookup before routing authenticated requests or trusting the host. Best-effort, not exhaustive: a crash before the link, gh printing no URL to a piped capture (gh pr merge), or an unrecognized forge means no event — keep your provider-API lookup as the source of truth and treat this as the trigger."));
const ubo = p(()=>u({
        type: A("system"),
        subtype: A("vcs_state_changed"),
        kind: U([
            "commit",
            "push",
            "merge",
            "rebase"
        ]).describe("What class of mutation was observed. New kinds may be added — treat an unrecognized kind exactly like a recognized one (something changed, go look)."),
        cwd: o().describe("The directory the shell was in when the command finished (so an inner cd is reflected; a git -C target is not) — a hint about where to look, never proof of what moved: confirm against the repository itself."),
        branch: o().optional().describe("The branch a commit landed on (from the commit summary line git prints per commit) or a push updated (from the ref-update line git prints per pushed ref, e.g. `HEAD -> other`). Commit and push events carry it; a command that pushed several branches emits one push event per branch. A best-effort hint: absent whenever attribution is uncertain (a push whose output was redirected still emits, with no branch; a push that also updated a ref whose name could not be carried emits a nameless event beside the named ones), and never a required key."),
        uuid: _(),
        session_id: o()
    }).describe("@internal A harness-observed shell command mutated repository state (git commit/cherry-pick, push, merge, rebase — dry runs excluded). A cache-invalidation signal with a deliberately minimal payload: beyond classification it carries the branch acted on and the directory the shell finished in, both hints about where to look, so consumers still re-read state (head, PR status) from the repository instead of decoding the event. Derived from the same detection as the tool result's structured gitOperation data, so the two agree on what happened; only a push's `branch` is attributed more strictly here (from the push's own output section) than in that data. A compound command can emit more than one kind (a merge and a rebase in one command collapse to the latter), and a push of several branches emits one push event per branch; coalesce freely. Best-effort, not exhaustive: only foreground mutations run through the Bash/PowerShell tools are observed — a backgrounded command whose confirming output had not printed at capture time emits nothing. A foreground push whose ref lines were redirected or silenced still emits, on the invoking command's zero exit code alone (so a compound that swallows a failed push's code also emits; the event is a prompt to look, never a claim)."));
const MF = p(()=>u({
        type: A("system"),
        subtype: A("dev_intent"),
        kind: U(nkr).describe("What kind of development the evidence shows. 'ios_app' from the conversation (in the main thread or a subagent): Claude ran one of Apple's tools for an iOS SDK, an iOS destination or the Simulator (xcodebuild, xcrun or swift for an iOS SDK, destination or target, simctl, devicectl), wrote iOS source into a Swift or Objective-C file (import UIKit, an import of a UIKit header, or an .iOS platform in a package manifest), or wrote or read build settings that name an iOS SDK or target iPhone or iPad; no Swift edit is needed for these. A command counts only where the shell would run it, so one that is quoted, in a here-document or in a comment does not. Weaker evidence (an iOS deployment target, any other TARGETED_DEVICE_FAMILY setting, iOS source written into another kind of file, an iOS tool named inside a quoted script) counts only beside a .swift file that Claude wrote or edited. A macOS-only app or server-side Swift package never qualifies. 'ios_app' from the project scan: the session's git repository has an Xcode project, at its root or in its ios/, iosApp/, macos/ or apple/ folder, whose build settings name an iOS SDK or target iPhone or iPad. 'android_app' from the conversation: Claude wrote or edited a .kt, .kts or .java file and something it wrote, read, or ran is Android-specific (a manifest, the Android Gradle plugin, an android.* import, adb, a Gradle variant task such as assembleDebug, the emulator), so a Kotlin server or a multiplatform module with no Android target never qualifies. 'android_app' from the project scan: the session's git repository has an AndroidManifest.xml, or the Android Gradle plugin in a build script or version catalog, at its root or in its android/ folder. More kinds will be added; ignore a kind you do not recognize."),
        trigger: U(Iw).optional().describe("The evidence the detection fired on, for a host's own analytics. From the conversation, it is the first platform-specific evidence seen, whichever order it and a file edit the rule required arrived in; an 'ios_app' detection with no Swift edit names the first evidence that is enough alone. 'ios_app': 'uikit_import' (import UIKit or .iOS( in text Claude wrote), 'xcode_project' (iOS build settings written, or seen in a tool result such as a pbxproj or xcconfig read), 'ios_command' (an iOS SDK, an iOS destination or target, or the Simulator's tools, in a command Claude ran). 'android_app': 'android_import' (import android. in text Claude wrote), 'android_manifest' (a manifest path or body written, or seen in a tool result), 'gradle_plugin' (the Android Gradle plugin written, or seen in a tool result), 'android_command' (adb, the emulator, sdkmanager, avdmanager, react-native run-android or a Gradle variant task). The edit values 'swift_edit', 'kotlin_edit' and 'java_edit' are reserved for rules that need no other evidence; no rule sends them yet. 'project_scan', for any kind: a scan of the session's git repository. The CLI scans when the process starts and sends the result. After each conversation_reset, it sends the latest scan's result again. A conversation whose scan did not find every kind scans again, uncached, when its first message arrives, so a kind that scan missed can come after that message. A client that needs to tell project evidence from conversation evidence checks for 'project_scan'. More values will be added; ignore one you do not recognize. Absent from CLI versions that predate the field, which send only conversation evidence."),
        uuid: _(),
        session_id: o()
    }).describe("@internal The conversation, or the git repository it runs in, shows a known kind of development work, for hosts that key tooling on it (Claude Code Desktop opens its iOS Simulator entry point on ios_app). Sent with trigger as its only other payload. Per conversation per process, each kind is sent at most once from conversation evidence and at most once from the project scan. Conversation evidence is sent when it first completes, or at startup when a resumed conversation already has it. Project evidence comes from a CLI process in print mode (-p), which is how the Agent SDK and Claude Code Desktop start it. It is sent at startup, after each conversation_reset, and at the first message of a conversation whose earlier scan did not find every kind. Either can arrive before system/init. A rewind or compaction never retracts it and only a conversation_reset starts over. Treat each kind as a sticky fact about the conversation: a client that needs only the kind can ignore repeats, and one that needs to know what set it off reads trigger."));
const PF = p(()=>u({
        type: A("system"),
        subtype: A("turn_preempted"),
        reason: o().describe("Why the turn was stopped. 'rapid_followup': the user's next message arrived before the running turn showed any output. More reasons may be added; treat an unknown one the same way."),
        preempted_by_uuid: o().describe("The client-supplied uuid of the queued user message the turn was stopped for. It runs next, together with any messages queued behind it."),
        preempted_message_uuids: T(o()).describe("The client-supplied uuids of the user messages the stopped turn was running (uuid-less members omitted; may be empty)."),
        uuid: _(),
        session_id: o()
    }).describe("@internal The CLI itself stopped the running turn so a user's rapid follow-up message is answered at once, exactly as a priority 'now' message would have (running shell commands are backgrounded, not killed). Sent at the moment of the stop, so it precedes the stopped turn's result frame (terminal_reason aborted_streaming or aborted_tools) and its members' 'cancelled' command_lifecycle frames (it can also precede the follow-up's own 'queued' command_lifecycle frame): a host renders that turn as superseded by the follow-up rather than as interrupted, does not resend its messages, and treats only preempted_by_uuid as picked up. At most one per burst: the turn the follow-up starts is never preempted this way. Emitted on the stdout stream in -p/SDK sessions only, and only to a consumer that declared rapidFollowupPreempt on its initialize request, while the feature's rollout flag is on: without both, the turn is not stopped at all. Explicit 'now' and 'later' priorities never produce it."));
const DF = p(()=>u({
        type: A("system"),
        subtype: A("per_turn_effort_changed"),
        per_turn_effort_active: M().describe("Always false: a change to true is reported only by system/init."),
        uuid: _(),
        session_id: o()
    }).describe(`@internal The conversation stopped sending effort per turn, because the server refused its per-turn effort message or a role:"system" message. From the retried request on, an effort change rewrites the cached prefix, for every model, until a later system/init says otherwise. Sent once, when the conversation first turns per-turn effort off, before the retried request's output, on the output stream of -p/SDK sessions; sent again only if the server refuses again after the conversation's refusals are cleared (for example by /clear or a compaction). It can repeat a false the host already holds. Pairs with system/init's per_turn_effort_active.`));
const xF = p(()=>u({
        type: A("system"),
        subtype: A("file_attachments_missing"),
        message_uuid: o().describe("The uuid of the inbound user message whose file_attachments named the files."),
        sent_count: E().int().describe("How many well-formed file_attachments entries that message had."),
        missing: T(u({
            file_uuid: o().describe("The file_uuid of the message's file_attachments entry."),
            reason: o().describe("Why, as a short code. 'download': it could not be downloaded. 'too_large': the file is over the size a session accepts, so sending it again cannot help. 'not_found': the files route answered 404 or 410: the file is most likely deleted, or is not this session's to read, so sending it again rarely helps. 'write': it was downloaded and could not be saved. 'no_token': the session had no credential to download with. 'not_finished': the step that fetches a message's files was cut short or threw, so all its files are listed, though some may have been saved. 'count_cap': the message named more files than a session fetches, and this one was over the limit. More codes may be added; read an unknown one as 'did not arrive'.")
        })).describe("The files Claude was told did not arrive, each once. Never empty."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Some files a user message sent by reference (file_attachments) did not arrive where Claude can read them, and Claude was told so in that message's text or in a later note; the turn runs on without them. A host can use it to tell the person who sent them. Sent once the message is queued, or later when a download or a save that runs beside its turn fails, or both; only by a worker connected to Claude Code Remote, never for input a local host writes; whenever Claude is told, and for the same files. Queued counts as told: a message that a Stop then clears from the queue, or that a UserPromptSubmit hook then blocks, still sends it, though Claude never reads that message. Nothing is sent when every file arrives, when the message is refused or has no uuid, for another session's message that was first held for approval, when the only files lost are those over the count limit, or for a picture that reached Claude inside the message and whose saved copy alone was lost. A file whose entry carries a sha256 (another session's transfer) is reported to Claude by name instead, and is listed here only under 'not_finished'. Each event states the whole list for its message: a save lost after the message was queued, or a delivery to a new worker, states it again, so keep the last one per message_uuid. If its files all arrive that time nothing is sent, and the earlier event stands. One exception: a worker that takes over a turn already begun may fetch and save the message's files again, except pictures and files with a sha256. Its event lists only those it could not fetch or save, so it can leave out a picture an earlier event listed, and can list a file the earlier worker did save."));
const LF = p(()=>u({
        type: A("system"),
        subtype: A("cloud_session_delta"),
        seq: E().int().positive().describe("Rises by one with each of these frames this client writes (1 for the first); never reset by an init. A reader keeps the highest it has applied and drops a lower one."),
        changed: T(o()).describe('The top-level keys of `cloud_session` whose value differs from the last block this client wrote (on an init or one of these frames), e.g. ["serving"] or ["calls", "connection"]; never empty. A hint for what to redraw: the block below is complete either way.'),
        cloud_session: my().describe("The whole block exactly as the next init would carry it (see SDKSystemMessage.cloud_session): replace the held copy, do not merge."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Written by the headless stream-json client of a cloud-hosted session (the same client that puts `cloud_session` on its init frames), and by nothing else: the session's status changed between two inits — for instance this machine's serving word or its reason, its stream to the session (`connection`), a call it serves starting, waiting on the session's approval or ending (`calls`), a serving notice said (`notices`). Only after the first init — except from a serve-only helper (`--attach-serve`), whose stream to the session carries no init: it writes these from the start, its first (`seq` 1) listing every key of the block in `changed`, so a host that has read no init takes that frame's block as its first snapshot. At most a few per second (changes within a quarter second are written as one frame carrying the latest block); none when nothing differs. An init is always a complete snapshot, so a host that (re)attaches resynchronises from the first init it reads and applies these on top. Display-only; ignore it if you do not draw session status."));
const ZQ = p(()=>u({
        type: A("set_expanded_view"),
        expanded_view: U([
            "none",
            "tasks",
            "teammates"
        ]),
        uuid: _(),
        session_id: o()
    }).describe("@internal Hint to expand a side panel. Enum is a superset of AppState.expandedView for back-compat; do not narrow."));
const lo = p(()=>u({
        type: A("active_goal"),
        value: u({
            condition: o(),
            iterations: E().int(),
            set_at: E().int(),
            tokens_at_start: E().int(),
            last_reason: o().optional()
        }).nullable(),
        uuid: _(),
        session_id: o()
    }).describe("Emitted when the user's /goal Stop hook reports met (clears) or not-yet-met (bumps iterations + last_reason). Any surface with a goal indicator re-renders from this. value is null when the goal is cleared. From internal QueryEvent 'active_goal'."));
const co = p(()=>u({
        type: A("autocompact_state"),
        value: u({
            enabled: M().describe("Whether auto-compact is enabled on the worker (autoCompactEnabled setting + DISABLE_AUTO_COMPACT / DISABLE_COMPACT env; DISABLE_COMPACT also disables manual /compact)."),
            effective_window: E().int().describe("The worker's resolved auto-compact window in tokens — resolveAutoCompactWindow output clamped to the model window, honoring /autocompact, CLAUDE_CODE_AUTO_COMPACT_WINDOW, clientdata and experiment overrides."),
            threshold: E().int().describe("The token count where threshold-triggered compaction fires on the worker — effective_window minus the summary buffer, lowered further by CLAUDE_AUTOCOMPACT_PCT_OVERRIDE when set."),
            enforced: M().describe("Whether threshold-triggered compaction will actually fire at `threshold`. False when the worker defers to the API's prompt-too-long (reactive mode) or context collapse owns headroom — clients then show % of window used instead of a countdown to a compaction that won't happen."),
            source: U([
                "env",
                "settings",
                "clientdata",
                "experiment",
                "model-default",
                "unknown-model",
                "auto"
            ]).describe("Which input decided the window (resolveAutoCompactWindow precedence order).")
        }),
        uuid: _(),
        session_id: o()
    }).describe(`@internal Worker-resolved auto-compact state, emitted by CCR workers at boot, whenever the resolved state changes (/autocompact, model switch, settings change), re-checked at each turn start, and re-emitted after a conversation reset. Thin clients adopt it so the "% until auto-compact" indicator counts down to the worker's real compaction trigger instead of re-resolving against client-local state. Turn-scoped divergence is accepted: a turn running under a skill/command frontmatter model override compacts against that model's window while the frame keeps the resting model's (the local indicator shares this limitation). From sessionState.onAutocompactInputsChanged.`));
const eJ = p(()=>u({
        type: A("set_in_progress_tool_use_ids"),
        op: u({
            action: U([
                "add",
                "remove"
            ]),
            ids: T(o())
        }),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when tool execution adds/removes tool_use ids from the mid-execution set (after permission grant, before result). Surfaces use this to show which tools are running. From internal QueryEvent 'set_in_progress_tool_use_ids'."));
const tJ = p(()=>u({
        type: A("hint_clears"),
        ids: T(o()),
        content_by_id: ue(o(), o()),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when the server-side context-hint reject path reports cleared tool_use ids after a retry/fallback. The surface re-runs clearToolResultsById on its message list so subsequent turns match the API's view. From internal QueryEvent 'hint_clears'."));
const sJ = p(()=>u({
        type: A("open_message_selector"),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted by /rewind to open the message-selector overlay. Fire-and-forget — the user's selection returns through a separate channel. From internal QueryEvent 'open_message_selector'."));
const rJ = p(()=>u({
        type: A("compact_progress"),
        event: Wr("type", [
            u({
                type: A("hooks_start"),
                hook_type: U([
                    "pre_compact",
                    "post_compact",
                    "session_start"
                ])
            }),
            u({
                type: A("compact_start"),
                hint_text: o().nullable().optional()
            }),
            u({
                type: A("compact_end")
            })
        ]).describe("In-progress compaction lifecycle event."),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted while compaction is running (hook phase, compact start, compact end). Distinct from system/compact_boundary, which reports the post-compaction transcript boundary after completion. From internal QueryEvent 'compact_progress' (CompactEvent Delta-track arm)."));
const nJ = p(()=>u({
        type: A("stream_mode"),
        mode: U([
            "tool-input",
            "tool-use",
            "requesting",
            "responding",
            "thinking"
        ]),
        uuid: _(),
        session_id: o()
    }).describe("@internal Emitted when the engine's spinner phase changes during compaction. From internal QueryEvent 'stream_mode' (CompactEvent Delta-track arm)."));
const oJ = p(()=>Wr("op", [
        u({
            type: A("response_length"),
            op: A("add"),
            delta: E().int(),
            uuid: _(),
            session_id: o()
        }),
        u({
            type: A("response_length"),
            op: A("reset"),
            uuid: _(),
            session_id: o()
        })
    ]).describe("@internal Emitted to drive the streaming-output character counter in the spinner ('add' accumulates, 'reset' zeroes on compaction-boundary swap). From internal QueryEvent 'response_length' (Delta-track)."));
const aJ = p(()=>Wr("phase", [
        u({
            type: A("refusal_continuation"),
            phase: A("begin"),
            salvage_text: o(),
            uuid: _(),
            session_id: o()
        }),
        u({
            type: A("refusal_continuation"),
            phase: A("end"),
            uuid: _(),
            session_id: o()
        })
    ]).describe("@internal Emitted when a silent refusal-continuation retry begins ('begin' with salvage_text to keep visible in the streaming preview) or ends ('end'). From internal QueryEvent 'refusal_continuation'."));
const iJ = p(()=>u({
        sessionId: o().describe("Unique session identifier (UUID)."),
        summary: o().describe("Display title for the session: custom title, auto-generated summary, or first prompt."),
        lastModified: E().int().describe("Last modified time in integer milliseconds since epoch."),
        fileSize: E().int().optional().describe("File size in bytes. Only populated for local JSONL storage."),
        customTitle: o().optional().describe("User-set session title via /rename."),
        firstPrompt: o().optional().describe("First meaningful user prompt in the session."),
        gitBranch: o().optional().describe("Git branch at the end of the session."),
        cwd: o().optional().describe("Working directory for the session."),
        tag: o().optional().describe("User-set session tag."),
        createdAt: E().int().optional().describe("Creation time in integer milliseconds since epoch, extracted from the first entry's timestamp.")
    }).describe("Session metadata returned by listSessions and getSessionInfo."));
const ho = p(()=>Ue([
        rr(),
        sr(),
        S0(),
        k0(),
        N0(),
        I0(),
        M0(),
        P0(),
        U0(),
        V0(),
        j0(),
        q0(),
        B0(),
        H0(),
        K0(),
        F0(),
        Y0(),
        W0(),
        $0(),
        Q0(),
        J0(),
        Z0(),
        fF(),
        eF(),
        bF(),
        sF(),
        nF(),
        mF(),
        gF(),
        X0(),
        AF(),
        yF(),
        y0(),
        RF(),
        CF(),
        OF(),
        L0(),
        D0(),
        NF(),
        IF(),
        dbo(),
        ubo(),
        tF(),
        aF(),
        iF(),
        lF(),
        cF(),
        LF(),
        MF(),
        rF(),
        oF(),
        PF(),
        G0(),
        DF(),
        zF(),
        uF(),
        pF(),
        _F(),
        x0(),
        xF()
    ]).describe("Every conversational and informational message the CLI emits on its output stream, discriminated by type (and subtype for system/result messages). Consumers should ignore types and subtypes they do not recognize: the set grows over time."));
var qt = p(()=>U([
        "off",
        "cooldown",
        "on"
    ]).describe("Fast mode state: off, in cooldown after rate limit, or actively enabled."));
var Gt = p(()=>U([
        "free",
        "preference",
        "extra_usage_disabled",
        "network_error",
        "unknown",
        "not_first_party",
        "disabled_by_env",
        "model_not_allowed",
        "sdk_opt_in_required",
        "pending"
    ]).describe("Why fast mode can't serve right now. Absent when nothing blocks it (a request may still choose standard speed). A paused-after-rate-limit run is not here; it rides fast_mode_state as 'cooldown'."));
var uo = p(()=>u({
        text: o().describe("The label to show — already sanitized to a single line of plain text and capped at 6 columns, exactly as the terminal footer renders it after its ◆ glyph.")
    }).describe('@internal The session indicator (the CLAUDE_CODE_FOOTER_INDICATOR environment variable, else the footer_indicator_<text> capability of the main model, else bootstrap client_data.footer_indicator) that the terminal renders as a "◆ <text>" pill in the prompt footer — an opaque status note operators set per cohort (e.g. to prove a test config reached the session). Carried on `system/init` and the `initialize` response so a host UI (Claude Desktop, IDE webviews) can render the same pill. Absent when nothing is configured; hosts should then render nothing. The client_data source is read from the CLI\'s cached bootstrap data, so a label configured there after that cache was last written first appears on a later `system/init`.'));
const _o = [
    "signed_out",
    "identity_changed",
    "transient",
    "refresh_failed"
];
function jTs(e) {
    return _o.some((s)=>s === e);
}
let generation = 0;
let mo;
function WTs(reason) {
    generation++;
    mo = {
        reason,
        generation
    };
}
function zTs() {
    generation++;
    mo = undefined;
}
function abo() {
    return mo;
}
function I1n() {
    return generation;
}
const vy = p(()=>oe().describe("A JSON-RPC 2.0 message as defined by the Model Context Protocol (request, notification, or response object)."));
const UF = p(()=>u({
        matcher: o().optional(),
        hookCallbackIds: T(o()).describe("Opaque ids chosen by the client, one per hook function it registered for this matcher. When the hook fires the CLI sends a hook_callback control request carrying one of these ids as callback_id; the client maps it back to its function."),
        timeout: E().optional()
    }).describe("Configuration for matching and routing hook callbacks."));
const N1n = p(()=>u({
        subtype: A("initialize"),
        hooks: ue(Ww(), T(UF())).optional(),
        sdkMcpServers: T(o()).optional(),
        sdkMcpServerConfigs: ue(o(), $n().omit({
            type: true,
            name: true
        })).optional().describe("Settings for the SDK-hosted MCP servers named in sdkMcpServers, keyed by server name. Sent as a separate field so a CLI that predates it ignores it; entries whose name is not in sdkMcpServers, and values that do not match this shape, are ignored rather than rejected. Applied when the server is first registered."),
        sdkMcpServerManifests: ue(o(), u({
            initializeResult: ue(o(), oe()).describe("The server's verbatim JSON-RPC `initialize` result object (protocolVersion, capabilities, serverInfo, instructions, ...), exactly as the in-process server produced it when the host initialized it with no client capabilities — not re-serialized or schema-parsed by the host."),
            toolsListResult: ue(o(), oe()).optional().describe("The server's verbatim JSON-RPC `tools/list` result object. Omit when the initialize result does not advertise the tools capability, when the listing is paginated (nextCursor present), or when it could not be captured — the CLI then lists over the control channel as before.")
        })).optional().describe("Optional, keyed by sdk server name (each key should also appear in sdkMcpServers; other keys are ignored). Unlike sdkMcpServerConfigs — host-declared settings the CLI keeps for the server's lifetime, same shape inline on mcp_set_servers — this is a one-shot cache of the servers' own handshake output: sent on initialize only, consumed by the connect that follows it, never retained. MCP handshake results the host already obtained from its in-process servers by delivering initialize + notifications/initialized (+ tools/list) to them itself before writing this request. For each such server the CLI answers its own MCP client's initialize and first tools/list from these results and skips the notifications/initialized round trip, so registering N in-process servers costs no mcp_message control round trips before the first turn; tools/call and everything after the handshake still flow as mcp_message exactly as before. The host MUST keep answering mcp_message for every server as if this field were absent: a CLI that predates the field ignores it and performs the full per-server handshake over the control channel, and a newer CLI does the same for any server whose entry is missing or malformed, whose initializeResult.protocolVersion differs from the MCP protocol version the CLI's client requests, or that the CLI had already connected. Entries apply only to the connect that follows this initialize; they are never retained for later reconnects. Over a remote session transport the CLI uses the field only when sdkMcpServerManifestsOrigin is set (see that field); a host on the CLI's own stream-json stdio transport needs no marker. sdk_mcp_manifests_parked in the response reports what became of each entry. Absent (older hosts, the Python SDK, browser clients): unchanged behaviour."),
        sdkMcpServerManifestsOrigin: U([
            "host_per_send"
        ]).optional().describe("The host's statement that it composed this request's sdkMcpServerManifests for this very send, from its servers' current state. Needed only by a host that reaches the CLI over a remote session transport, where an unmarked sdkMcpServerManifests is not used (a recorded registration could be handed to a later worker). The CLI also refuses a marked manifest whose session-stream frame is more than five minutes old, so capture the manifests when writing the request, not earlier; and it may still decline them when remote manifests are switched off in that CLI, or on any session where the session service has not told the CLI in the last five minutes that only the account owning the session can send events to it. sdk_mcp_manifests_parked in the response says what became of each entry. A value this CLI does not know counts as no marker. A host on the CLI's own stream-json stdio transport may omit this field; a host writing to the stdin of a remote-session worker cannot use manifests at all."),
        jsonSchema: ue(o(), oe()).optional(),
        systemPrompt: T(o()).optional(),
        appendSystemPrompt: o().optional(),
        systemPromptSnapshot: M().optional().describe("Record the conversation's system prompt once and reuse it verbatim on every later request and resume. Omitted or true (the default): the prompt is rendered on the first request, systemPrompt or appendSystemPrompt included, and the record is sent as-is afterwards — even when a later launch passes different text — until compaction. false: never record; the prompt is rendered fresh every request. No effect where system-prompt recording is not yet enabled."),
        planModeInstructions: o().optional().describe("Custom workflow body for the plan-mode system reminder. Replaces the default code-implementation phases; the CLI still wraps it with the read-only enforcement preamble and the ExitPlanMode protocol footer."),
        appendSubagentSystemPrompt: o().optional().describe("@internal Additional system prompt appended to every Task-tool subagent (and propagated to nested subagents). Gated by CLAUDE_CODE_ENABLE_APPEND_SUBAGENT_PROMPT."),
        toolAliases: ue(o(), o()).optional().describe("Map of tool-name aliases applied before name resolution. When the model emits a tool_use whose name is a key in this map, the tool execution path resolves the mapped name instead. Single-hop (no chains). See Options.toolAliases."),
        excludeDynamicSections: M().optional().describe("When true, omit per-user dynamic sections (working directory, auto-memory path) from the cached system prompt and re-inject them as the first user message. Lets cross-user prompt caching hit on a static system prompt prefix. Tradeoff: the model sees this context slightly later in the prompt, so steering on the working directory and memory location is marginally less authoritative. Has no effect when a custom (non-preset) system prompt is in use."),
        agents: ue(o(), ey()).optional(),
        title: o().optional().describe("Custom session title. When provided, the session uses this title and skips automatic title generation. Has no effect on the persisted title when resuming an existing session."),
        skills: T(o()).optional().describe('When provided, only skills whose names match an entry are loaded into the main session system prompt, matching the exact canonical name (e.g. "my-plugin:my-skill") or a ":name" suffix of it. Display names and aliases do not match. Omit to load every discovered skill. Applies to the main session only; subagents use AgentDefinition.skills, which additionally resolves display names and aliases.'),
        webSearchIsolationExemptMcpServers: T(o()).optional().describe("@internal Additional MCP server names exempt from the web search / connector isolation latch. Unioned with the built-in infra-server list."),
        promptSuggestions: M().optional(),
        agentProgressSummaries: M().optional(),
        forwardSubagentText: M().optional(),
        supportedDialogKinds: T(o()).optional().describe("Dialog kinds (request_user_dialog `dialog_kind` values) this consumer's onUserDialog can actually render. The CLI treats ABSENCE as 'cannot display' and fails closed: without the kind declared here, a dialog-gated flow degrades to its no-dialog behavior (for 'refusal_fallback_prompt', the classic refusal error) instead of parking a dialog the consumer may mishandle. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
        rendersChromeSetupOffer: M().optional().describe("@internal A client capability: this consumer renders the OfferChromeSetup tool's permission request as a Claude in Chrome setup card and answers it with updatedInput.outcome 'connected' or 'not_now'. It lets that tool join the tool list once a Claude in Chrome tool call has reported the browser extension is not connected and the session's experiment flag is on. On, never off: a later initialize may be another client's; absence leaves it as it was. Kept across worker restarts."),
        perTaskStopAffordance: M().optional().describe("Declares that this consumer renders a per-task stop control wired to the `stop_task` control request, so the user can stop an individual background task. When declared, an interrupt on an open-input (interactive stream-json) session spares running background agents/workflows (Stop only aborts the turn). Closed-input exception: a one-shot run (string prompt / -p closes stdin) still kills hold-back tasks at the held-result release regardless of the declaration — with stdin closed, a stop_task control could never be delivered, so the fail-closed kill stands. ABSENCE also fails closed: the interrupt kills background tasks, since the user would otherwise have no way to stop a runaway one. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
        forwardNestedSubagentToolCalls: M().optional().describe("@internal Asks Claude Code to also send the tool_use and tool_result messages of sub-agents that other sub-agents start, and of skills a sub-agent forks, each with `parent_tool_use_id` set to the call that started it. That call is itself a tool_use in the messages of the parent sub-agent, so a consumer can place every sub-agent under the one that started it and list its tool calls. Their text and thinking stay unsent unless `forwardSubagentText` is set, which already sends all of it. ABSENCE sends none of them, as before. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
        rapidFollowupPreempt: M().optional().describe("@internal Declares that this consumer renders the `system/turn_preempted` frame and expects Claude Code to stop a turn on its own: when a person's follow-up message arrives while the running turn has shown nothing yet, the turn is stopped as an interrupt would stop it (its messages get `command_lifecycle` 'cancelled' and its result is an aborted one) and the follow-up runs next, announced by `turn_preempted`. Honored only while the rollout flag is on. ABSENCE fails closed: the follow-up waits its turn exactly as before, because a consumer that does not know the frame would see a message it never withdrew reported cancelled. Messages arriving over the Remote Control bridge never stop a turn, whatever was declared here. First-attached-client-wins on multi-client sessions; later initializes do not change it."),
        plugins: T(D1n()).optional().describe("Plugins to load for the session, in the same shape as the SDK `plugins` option: the stdin form of one --plugin-dir flag per entry (--plugin-dir-no-mcp when skipMcpDiscovery is set), so the launch command line does not grow with the plugin count. Loaded only by a CLI launched with --await-initialize, which reads this request during startup before any plugin work. Without that flag, on a repeated initialize, or over a remote session transport the field loads nothing; plugins_applied in the response reports whether the listed plugins are in fact loaded."),
        workspaceTrust: u({
            accepted: M().describe("Only send true after showing the user a trust dialog for `directory` — the same attestation set_cwd carries as trust_accepted."),
            directory: o().describe("Absolute path of the directory the user accepted, as it exists on the machine the CLI runs on. Honored only when it resolves to the trust key of the session working directory (the canonical git root when inside a repository, so a repository root and its linked worktrees agree); a network or obfuscated spelling, a path that is not a directory here, or one that resolves elsewhere records nothing. The grant covers that whole repository, exactly as the terminal trust dialog and set_cwd do, so a host whose folder sits inside a repository should name the repository root in its dialog.")
        }).optional().describe("@internal Host attestation that the user explicitly accepted a trust dialog for the session's working directory before launching it — the launch-time twin of set_cwd's trust_accepted/trusted_directory, for hosts whose dialog runs before the CLI is spawned and possibly on another machine than the ~/.claude.json this process reads (Claude Desktop's Code tab over SSH or WSL). Honored once, on the session's first initialize from the process that owns the CLI's stdin: the CLI records the working directory as trusted in the same store the interactive trust dialog writes (the home directory is trusted for the session only and never persisted), so the persisted-trust gates read the same answer they do in a checkout the user trusted at a terminal — project permission rules and hooks re-derive in the running process, the open-change announcement that follows this initialize already sees it, and readers evaluated at launch (project .mcp.json approval, project plugins, agent-frontmatter hooks and MCP servers) see it from the next launch on. A re-sent initialize, one arriving over a remote session transport, or one sent to a parked spare (--await-claim; send workspace_trust with claim_session instead) records nothing. workspace_trust_recorded in the response reports the outcome."),
        attachServeRequest: u({
            workId: o(),
            environmentId: o()
        }).optional().describe("@internal Claude Desktop's serve-only helper launch (`--attach-serve`) only: the tool-use work item the helper was started for and the served folder's environment id, exactly as the host polled them. Read from the opening `initialize` on the helper's own stdin and nowhere else; the helper signs its link to the session over both. Every other launch ignores it.")
    }).describe("Initializes the SDK session with hooks, MCP servers, and agent configuration."));
const VF = p(()=>u({
        minTimeBeforeFeedbackMs: E(),
        minTimeBetweenFeedbackMs: E(),
        minTimeBetweenGlobalFeedbackMs: E(),
        minUserTurnsBeforeFeedback: E(),
        minUserTurnsBetweenFeedback: E(),
        hideThanksAfterMs: E(),
        onForModels: T(o()),
        probability: E(),
        lastSurveyShownTime: E().nullable()
    }).describe("@internal Session feedback-survey configuration for host UIs (VS Code webview, Claude Desktop) that run the survey trigger logic themselves: the same GrowthBook-driven pacing/probability values the terminal survey uses, plus the cross-surface last-shown time the host can't read. Survey responses are proxied back as tengu_feedback_survey_event log_event notifications."));
const jF = p(()=>u({
        kind: U([
            "post",
            "bundle",
            "share",
            "disabled"
        ]).describe("How a submit_feedback report from this session is handled: 'post' sends it to Anthropic; 'bundle' writes it, redacted, to a zip on this machine for the user to pass on (a third-party provider or gateway, or no Anthropic credentials) and the response carries its path; 'share' is the internal-build upload; 'disabled' refuses it for a static cause (an environment variable or the nonessential-traffic setting). An org-policy refusal is not reported here: it is read late and can flip, and the per-turn system/init product_feedback_disabled carries it.")
    }).describe("@internal The resolved feedback mode (getFeedbackMode) for host UIs that offer a feedback dialog, so they can say up front that a report is refused or saved on this machine, instead of learning either only after the user has written and sent it."));
const qF = p(()=>u({
        commands: T(Vt()),
        agents: T(Qn()),
        output_style: o(),
        available_output_styles: T(o()),
        user_output_styles_dir: o().optional().describe("@internal Absolute path of the user-level output-styles directory this CLI lists styles from: the output-styles folder of the config home as the CLI resolves it after the settings env blocks are applied, so a CLAUDE_CONFIG_DIR set in user or managed settings is honored. A host that writes a user-level style file writes it here; absent on older CLIs, where the host falls back to its own reading of CLAUDE_CONFIG_DIR."),
        models: T(tr()),
        unavailable_models: T(tr()).optional().describe("@internal Models the account can see but not select (disabled: true, reason folded into description — e.g. a model the org's Zero Data Retention setting excludes). Disjoint from `models`, which stays selectable-only so consumers without disabled rendering are unaffected. Populated only for allowlisted 1P hosts that render these rows (currently the VS Code extension — UNAVAILABLE_MODELS_HOST_ENTRYPOINTS); empty for every other consumer. Omitted when empty."),
        account: Zw(),
        current_model: o().optional().describe("@internal The CLI's active model at connect time. Remote Control clients (web/mobile) sync their model dropdown TO this value on connect instead of sending set_model with their own default — without it, connecting from a phone silently switches the terminal's model (CC-2659)."),
        current_permission_mode: ce().optional().describe("@internal The CLI's active permission mode at connect time, for the same connect-time sync as current_model."),
        inbound_read_receipts: M().optional().describe("@internal Remote Control hosts only: true when this host reports a client message read when it leaves the command queue for a turn — the message's `processing` delivery status — and finished when the turn ends (`processed`). Absent (an older CLI, or a host that acks at receipt): a delivery status means the host received the message, not that it read it. Read per initialize; the kill switch can turn it off for a session already answered."),
        session_state: U([
            "idle",
            "running",
            "requires_action"
        ]).optional().describe("@internal Session state at connect time (same values as the session_state_changed message). Lets a host that attaches to an already-running CLI tell whether a turn is in progress without having seen the transition. Absent (older CLI) → unknown."),
        hooks_applied: M().optional().describe("Whether the `hooks` this initialize carried were registered: true on a session's first initialize, and on a repeated initialize from the process that owns the CLI's stdin (its set replaces the one registered earlier); false when a repeated initialize's hooks were ignored (a client joining a remote session another client configured). Absent when the request carried no hooks, and on CLIs that predate the field — those ignored `hooks` on every repeated initialize."),
        plugins_applied: M().optional().describe("Whether every plugin this initialize listed is loaded: true when each one is among the plugins the process loaded at launch (from `plugins` under --await-initialize, or from --plugin-dir), so a re-sent initialize naming the launch set also reads true; false otherwise. The `plugins` field never loads anything after launch. Absent when the request listed no plugins, and on CLIs that predate the field (those never read `plugins`)."),
        workspace_trust_recorded: M().optional().describe("@internal Outcome of this initialize's `workspaceTrust` attestation: true when the attested directory resolved to the session working directory's trust key and that key is now persisted as trusted (or already was); false when nothing durable was recorded — the directory was a network or obfuscated spelling, is not a directory on this machine, resolved to another key, the grant could not be written durably, or the working directory is the home directory (trusted for this session only); false too, whatever is already persisted, when the directory, the working directory or that key carries an invisible or format character (refused as set_cwd refuses such a spelling). Absent when the request carried no accepted attestation, on a repeated or remote-transport initialize, on a parked spare's initialize (--await-claim), and on CLIs that predate the field."),
        sdk_mcp_manifests_parked: ue(o(), U([
            "parked",
            "already_connected",
            "protocol_version_mismatch",
            "malformed",
            "not_honoured"
        ])).optional().describe("What became of each entry of this initialize's sdkMcpServerManifests, keyed by sdk server name, for the entries whose name is in sdkMcpServers. 'parked': kept for the connect that follows this reply, which answers the server's MCP initialize and first tools/list from it (a later failure to replay shows up as live mcp_message frames, as when no entry was sent). 'already_connected': this CLI already had a live client for the server. 'protocol_version_mismatch': initializeResult.protocolVersion is not the version this CLI's client requests. 'malformed': the entry is not of the documented shape, reported whether or not manifests were honoured (every name in sdkMcpServers gets this when the field itself is not an object); or an honoured entry is past the limits this CLI sets on a live answer. 'not_honoured': the CLI did not use the entry: manifests or remote manifests are switched off in this CLI, the session service has not told this remote-session worker in the last five minutes that only the account owning the session can send events to it, or the request reached such a worker other than over its session stream (nothing for the host to change in any of these cases); or this CLI had read as many tool lists as it allows in a minute (send it again later); or it came over the session stream without sdkMcpServerManifestsOrigin or on a frame too old to trust (the host's to fix). Absent when the request carried no sdkMcpServerManifests or named no sdkMcpServers, and on CLIs that predate the field."),
        permission_mode_from_default_fallback: M().optional().describe('@internal True when current_permission_mode is auto because no settings source configured a mode and the gated auto default applied. IDE hosts only; drives the one-time "auto mode is now the default" disclosure.'),
        auto_default_nudge: ce().optional().describe("@internal The user-settings defaultMode the one-shot auto-default nudge should offer to replace with auto. IDE hosts only; absent when the user isn't eligible."),
        pid: E().optional().describe("@internal CLI process PID for tmux socket isolation"),
        claude_code_version: o().optional().describe("Claude Code version of the process that runs this session's turns (the same value its system/init carries). Absent on CLIs that predate the field, and when the responder is not that process and does not know its version."),
        fast_mode_state: qt().optional(),
        fast_mode_disabled_reason: Gt().optional(),
        footer_indicator: uo().optional().describe(`@internal The terminal's configured "\u25C6 <text>" footer pill at connect time \u2014 see SDKFooterIndicator. Absent when nothing is configured.`),
        feedback_survey_config: VF().optional().describe("@internal Present only when the feedback-survey surface is enabled for this host (GrowthBook gate, privacy level, and org policy all allow it). Absent means the host must not show the survey."),
        feedback_mode: jF().optional().describe("@internal How this session handles a submit_feedback report (see SDKFeedbackMode), read once at init like the other host gates here; the org-policy half of 'disabled' stays on the per-turn system/init product_feedback_disabled boolean. Absent on an older CLI, and when the only refusal is the org policy → the host behaves as it does without the field."),
        analytics_disabled: M().optional().describe("@internal True when the CLI has analytics/telemetry disabled for this session (privacy level, DISABLE_TELEMETRY / DO_NOT_TRACK from any settings tier, third-party provider, gateway) — the same verdict the system/init message carries. IDE hosts fold it into the gate for their own direct telemetry. Absent (older CLI) → unknown."),
        remote_control_auto_enable: M().optional().describe("@internal Whether the CLI resolver says Remote Control should auto-enable at session start (explicit setting → policy default → GB rollout), so IDE hosts can mirror TUI behavior. Absent (older CLI) → treat as false."),
        remote_control_auto_on_by_default: M().optional().describe("@internal True when remote_control_auto_enable is true because of the org/GB default rather than an explicit remoteControlAtStartup setting — mirrors replBridgeAutoOnByDefault so IDE hosts can render the same disclosure notice."),
        remote_control_auto_connect_default: M().optional().describe('@internal The org/GB auto-connect default alone (getCcrAutoConnectDefault, under the same remote-environment guard as remote_control_auto_enable), with every explicit copy of remoteControlAtStartup left out. IDE hosts show it for their toggle only once they have seen the settings key cleared while the session runs (/config "default" clears the legacy ~/.claude.json copy in the same step); at rest they show remote_control_auto_enable. Absent (older CLI) → hosts keep their previous display behavior.'),
        claude_in_chrome_at_startup: M().optional().describe(`@internal Whether an IDE host that connects Claude in Chrome itself should connect it when the session starts. True when the "Enabled by default" setting (claudeInChromeDefaultEnabled) is on, this session did not connect the server itself, and the gates the terminal applies to the setting at startup pass (claudeInChromeDefaultForHost). Sent only to a host that owns the session's startup (isVscodeHostOwnedStartupSession). Absent (older CLI, other hosts) \u2192 treat as false.`),
        remote_control_available: M().optional().describe("@internal Whether Remote Control can be offered at all in this deployment (isRemoteControlDeploymentAvailable: not hard-disabled by managed settings, not nested in a remote environment, first-party provider). Only host-lifetime-stable conditions; transient ones (auth state, the GrowthBook rollout gate, the async org-compliance verdict) are deliberately excluded since hosts latch this from one initialize response — see the helper docstring. Lets IDE hosts hide their Remote Control affordance where it can never work. Absent (older CLI) → treat as available."),
        ide_rc_auto_enable_gate: M().optional().describe("@internal IDE-side rollout kill-switch for RC auto-enable (tengu_ide_rc_auto_enable), independent of remote_control_auto_enable. Carried on the init response (not experimentGates) because the host reads it at init time, before the first-prompt-triggered gate refresh. Absent (older CLI) → treat as false."),
        capabilities: T(o()).optional().describe("@internal Members of system/init.capabilities that are already settled at connect time, said here so a host need not wait for the first turn to read them. The same literals under the same conditions; a subset, so a member missing here may still arrive on init. Absent when there is none to say, and on older CLIs.")
    }).describe("Response from session initialization with available commands, models, and account info."));
const So = p(()=>u({
        subtype: A("interrupt"),
        reason: o().optional().describe("@internal Why the turn was interrupted, forwarded to the turn's AbortSignal.reason. Tool implementations branch on it to distinguish a user-driven cancel (which suppresses error output) from other aborts. Known values: `interrupt` (user Esc/Ctrl+C), `user-cancel`, `remote-cancel`, `consumer-error`, `workflow-abort`, `stalled`, `recovery-timeout`. Open set — consumers must treat unknown values as a generic abort."),
        cancel_queued: M().optional().describe("When true, the interrupt also cancels every uuid-stamped main-thread command still in the queue or already dequeued for the imminent turn but not yet reachable by the abort (the first-command prewait window) — the same set the response would otherwise list under `still_queued`. Each is closed with a terminal 'cancelled' lifecycle and listed on the response's `cancelled` field. `still_queued` is then empty, except that a client driving a hosted session lists there what it can no longer recall (a send already in flight to that session, or the first prompt the session was created with) and, when the session's own sweep then cancels one of those or a send it had already delivered, follows up with a command_lifecycle 'cancelled' frame for it. (The isFoldInFlight guard cancel_async_message uses does not apply here: this request also aborts the running turn, so a fold-in-flight uuid is never delivered and is swept with the rest. A fold-in-flight uuid's queued_command attachment may already appear in the aborted turn's transcript if the abort landed after the fold's attachment yield — pre-existing leave-queued semantics; it never runs as its own turn.) Uuid-less commands (task notifications) still in the queue are also dequeued but cannot be listed; a uuid-less command already in the prewait window is unreachable by either cancel leg — the first-command prewait latch covers it (this request latches exactly like a plain interrupt; see still_queued): its turn starts aborted. When false or absent, queued commands survive the interrupt and are listed under `still_queued` — the interrupt_receipt_v1 contract is unchanged. A Stop-means-stop-everything client (a remote UI's Stop button) sets this true so one round-trip halts the session; a wrapper that wants per-uuid control leaves it false and follows up with cancel_async_message. Advertised by the `interrupt_cancel_queued_v1` capability on system/init; older CLIs ignore the field and behave as if false."),
        send_now: M().optional().describe("@internal True when the request is a client's Send now on a message that is waiting, not its Stop: it asks that the waiting messages reach the model now, as the terminal's send-now key does. It is not a Stop: it makes no later turn start aborted, cancels nothing that is queued, and ends no background task, subscription or other thing outside the running turn that a Stop ends. What it does depends on what the CLI holds when it reads the request, and the response's send_now says which. Without message_uuid every waiting user message counts, which may be another than the one pressed. With no user message waiting at the CLI it does nothing: a message the running turn has already taken in, or was started for, is being answered. With one waiting that is not in the queue yet (received and still being admitted, or already taken for the next turn), that the running turn is taking in at that moment, or with no turn under way, it also does nothing: the message runs when its place comes. With a person's message in the queue behind a turn under way, the CLI chooses how that turn makes way: it moves what the turn waits on to the background so that the turn takes the message in (and, if that fails, stops the turn later as a priority 'now' message does, without a marker), or it aborts that turn at once as a plain interrupt does (running tools are ended, the interruption marker is written, the result is an error_during_execution); what was queued ahead of the message still runs before it. Either way a sender learns that the turn has ended from the turn's result, not from this response. The message must already be at the CLI, or the request finds nothing waiting: a sender that still holds it delivers it first, or sends it with priority 'now', or sends a plain interrupt instead. Only the boolean true counts, and with cancel_queued:true the request is a Stop. Advertised by interrupt_send_now_v1 on system/init; a CLI without it handles the request as a plain interrupt."),
        message_uuid: o().optional().describe("@internal Read only beside send_now:true: the uuid of the user message that Send now was pressed on, in the very form in which that message reached the CLI (a session service may deliver it in lower case): it is compared as an exact string, as cancel_async_message compares. With it only that message counts as waiting. If the running turn has already taken it in or was started for it, or the CLI does not know it or does not count it as a person's, the request does nothing and answers 'nothing_waiting', whatever else waits. Once the request acts, it acts as without the name: everything queued decides between the move to the background and the abort, and goes along with the named message. An empty string is read as no name, and so is a null, which this schema does not admit but an encoder may write; any other value that is no string names nothing."),
        for_user_message_uuids: T(o()).optional().describe("@internal One to eight uuids (case ignored) of user messages whose turn this Stop is for; any other value is read as absent. The current turn is the latest one dequeued for a client's message (it may be over, or not yet started), with every turn started and message taken in since. A Stop that names one of its messages is handled as a plain interrupt (if latched, see still_queued, only for pending work that it names or that answers no client's message), and so is any Stop while the CLI knows of no current turn. Other Stops do nothing and get turn: 'spared', except a few that name queued work (sparesCurrentTurn). Always include the message that opened the turn (user_message_uuid on its first frames, before any re-run): after a restart the CLI knows no other. A turn handed over by turn_handoff has no name: any Stop may stop it, so send a plain one. The uuids are only compared: never stored, logged, sent back or shown to the model. Not read beside cancel_queued:true or send_now:true, nor by older CLIs, which answer without turn."),
        worker_epoch: E().int().min(1).optional().describe("@internal The worker life (system/init's worker_epoch) that this interrupt is for, as a JSON number. Written only on an interrupt that a service sends by itself and that must not outlive the worker it was meant for. Never written on a person's Stop, not even as a null or a 0 for 'unset': a Stop must hold across a restart. Read by a claude-code-server tenant alone, before every other member and whatever they say. A worker of another life takes none of an interrupt's steps (it still counts as a person's presence, as every interrupt does), marks the request processed, so that no later worker is served it, and answers with a stale_worker_epoch error; take the new number from the next system/init, not from the error's text. Any other value that is present (a null, a 0, a fraction, a string such as '7') is refused the same way with an invalid_worker_epoch error, never read as absent. Both errors carry the token as error_code and list no still_queued: they are no receipt. The worker of the stated life, every other host that handles an interrupt, and an older tenant handle the request as if the member were absent, and no capability says which a worker is; a client that relays its host's Stop to a hosted session drops the member.")
    }).describe("Interrupts the currently running conversation turn."));
const GF = p(()=>u({
        still_queued: T(o()).describe("Uuids of async user messages that survive this interrupt: commands still in the queue, plus any batch already dequeued for the imminent turn but not yet reachable by the abort. An interrupt — plain or cancel_queued:true — that lands during the FIRST-command prewait window (before the first turn of the session has armed a controller) is additionally LATCHED, scoped to the user-intent work pending at that instant — the batch already dequeued and parked for the imminent turn, plus the user-intent main-thread commands then in the queue (the work this list enumerates): the first turn to arm that carries any of that doomed work starts already aborted, exactly once, so the listed prewait batch is delivered into an immediately-aborted turn, its frames and result flowing through the normal abort path, instead of running to completion. A turn carrying none of it arms live and leaves the latch waiting: a system delivery turn (for example a replayed host event), or a prompt enqueued after the interrupt — post-interrupt work is never coalesced with the doomed work and never dies to the latch, so the Stop kills exactly what this receipt listed. The latch is released when the doomed work is retired without arming: if a parked prewait batch is entirely cancelled, the latch is released even when other queued commands remain (those arm and run normally); with nothing parked, it is released once none of the doomed commands remains queued — work enqueued after the interrupt neither holds it up nor is aborted by it. Survivors that ride any later turn run normally. These WILL run (subject to that latch) unless cancelled first (or unless the request set cancel_queued:true, in which case every uuid-stamped survivor this process holds is removed, emitted a terminal `cancelled` synchronously, and listed under `cancelled` instead — leaving here only what a client driving a hosted session can no longer recall: a send already in flight to that session, or the first prompt the session was created with; a send that client still holds on its own machine behind a send gate (it waits there until that session is ready to take it) has not gone out, so it is withdrawn and listed under `cancelled` like a queued one, and cancel_async_message can withdraw it too, while a plain interrupt leaves it held and lists it here). Cancellation granularity: uuids still in the queue are individually cancellable via cancel_async_message; once a batch is dequeued and coalesced into one turn, cancelling a NON-representative member uuid is a no-op (its content still runs), while cancelling the batch-representative uuid drops the WHOLE coalesced batch — in both cases the cancel response reports cancelled:false because the message was no longer in the queue. Coverage caveats: only uuid-STAMPED messages appear (a message enqueued without a uuid still runs but is never listed, so [] does not mean \"nothing will run\"); only main-thread messages are listed (subagent-addressed messages are out of scope); and the list may include internally-enqueued uuids the client never sent (cron triggers, auto-resume continuations) — ignore unknown uuids rather than treating them as an error. Ordering: on a clean interrupt this receipt is written before the interrupted turn result; a turn that crashes during interrupt handling emits its error result on a direct-write path that may precede the receipt. Snapshot is taken synchronously with abort processing — probing the queue after the interrupted result instead always loses the race against the drain loop, which starts the next queued turn immediately."),
        send_now: U([
            "stopped",
            "delivering",
            "nothing_waiting"
        ]).optional().describe("@internal Present only when a CLI that advertises interrupt_send_now_v1 itself answers a send_now (a client that relays to a hosted session answers without it). 'nothing_waiting': no user message waited (with message_uuid, the named one did not), and nothing was done. 'delivering': one waits and this request stopped no turn, for one of these reasons: no turn is under way and the message runs when its place comes; the message is not in the queue yet, or the running turn is just taking it in; the CLI is moving what the turn waits on to the background, and may still stop the turn later if that fails; the turn is already being stopped; or the process is on its way out, and the message will not run in it. 'stopped': the running turn was aborted for what waits, and its result follows."),
        turn: U([
            "stopped",
            "idle",
            "spared"
        ]).optional().describe("@internal Present only when the answering CLI read the request's for_user_message_uuids. 'stopped': handled; the turn under way was aborted, or the interrupt was latched for pending work. 'idle': handled; no turn was under way and it latched for nothing. 'spared': it named no message of the current turn, so nothing was done. A named message listed in still_queued still waits, whatever the value."),
        cancelled: T(o()).optional().describe("Present only when the request set cancel_queued:true — uuids of main-thread commands cancelled by this interrupt: every survivor that would otherwise have appeared under `still_queued`, including any uuid that was mid-fold at the interrupt instant (this request also aborts, so the fold never delivers it). Each listed uuid has been removed (queue-resident) or marked cancel-pending (the first-command prewait window, closed by the drain loop's backstop) and emits a terminal 'cancelled' lifecycle synchronously at the first such interrupt (a repeat interrupt over the same parked batch re-lists the uuid idempotently without re-emitting); none will run. Same coverage caveats as `still_queued` (uuid-stamped main-thread only; internally-enqueued uuids may appear). Advertised by the `interrupt_cancel_queued_v1` capability.")
    }).describe("Result of an interrupt operation. Advertised by the interrupt_receipt_v1 capability on system/init; older CLIs send an empty success response with no still_queued field."));
const bo = p(()=>u({
        subtype: A("can_use_tool"),
        tool_name: o(),
        mcp_server: Ge().optional(),
        input: ue(o(), oe()),
        permission_suggestions: T(Lt()).optional(),
        blocked_path: o().optional(),
        decision_reason: o().optional().describe(`Human-readable reason the ask escalated, for the consent line of the host's dialog. For decision_reason_type "subcommandResults" (compound bash), this is the NESTED safety check's warning text \u2014 the wrapper itself has no text \u2014 preferring a check that requires manual approval (classifier_approvable false); treat it with the same display/policy care as a "safetyCheck" reason. May carry ANSI escapes; sanitize before rendering.`),
        decision_reason_type: U(but).optional().describe(`Structured discriminator for why auto-mode escalated. Lets SDK hosts make policy (e.g. auto-deny safetyCheck) without parsing decision_reason text. For compound bash commands this is "subcommandResults" even when a safetyCheck is nested inside \u2014 check classifier_approvable for that case, and see decision_reason: for this variant it carries the nested safety check's warning text.`),
        decision_reason_code: U([
            ...xzn,
            "org_ask_ceiling"
        ]).optional().describe("@internal A closed-set code for a reason a host can act on, beside decision_reason_type (whose values are unchanged, so type-keyed host policy decides as before): 'outside_reads_blocked', 'memory_paused', 'classifier_transcript_too_long', 'org_ask_ceiling' (the MCP tool's ceiling, toolPermissions, is 'ask', and an ask rule or the ceiling itself raised the ask: type 'rule' or 'other'). Absent for every other reason; new values are additive."),
        classifier_approvable: M().optional().describe("Set when a safetyCheck is present anywhere in the decision reason (including nested inside subcommandResults for compound bash). false = at least one safety check requires manual approval (e.g. Windows path bypass, dangerous rm); true = all safety checks MAY be classifier-approved (e.g. sensitive-file paths). Absent when no safetyCheck is involved."),
        suppress_always_allow_rule: M().optional().describe(`True when the dialog must not offer the persistent "don't ask again" row for this ask: accepting it would write a whole-tool allow rule broader than the ask's own verb (PermissionAskDecision.suppressAlwaysAllowRule). Hosts rendering approve options should omit any persistent-rule affordance when set.`),
        default_to_no: M().optional().describe("True when the ask must not be approvable by a single stray keystroke (PermissionAskDecision.defaultToNo): a terminal-style prompt opens on its decline option and takes no digit shortcut. Hosts rendering approve options should not pre-select approve when set."),
        matched_ask_rule: u({
            source: o(),
            tool_name: o(),
            rule_content: o().optional()
        }).optional().describe("Set when a user-configured ask RULE (permissions.ask) forced this prompt but the ask carries the tool's own decision_reason — the ask-rule substitution keeps the richer tool-minted ask, so the rule rides here instead of decision_reason_type 'rule'. Hosts making policy on decision_reason_type (e.g. auto-deny safetyCheck) or running host-side auto-approval should treat asks carrying this field as rule-forced: the user's stated intent is a human prompt. Values are producer-authored but render-unsafe like decision_reason; sanitize before display."),
        title: o().optional(),
        display_name: o().optional(),
        tool_use_id: o(),
        agent_id: o().optional(),
        description: o().optional(),
        requires_user_interaction: M().optional().describe("True when one-tap Approve/Deny must not be offered: the tool's approval card IS the user-interaction surface (Tool.requiresUserInteraction() — the user responds on the card itself), OR the pending ask is localDisplayOnly (its consent disclosure cannot ride this wire and only the local dialog renders it). Either way the user has to open the session to answer."),
        server_prompt: o().optional().describe("@internal A marker the session service puts on an ask it worded itself, naming which of its prompts this is (an open set). Nothing on this frame proves who wrote it: the marker is the service's word only on a stream served by the service, which removes the key from anything a session's own container wrote; anywhere else it is a claim. A host keeps showing the tool name and input whatever it says."),
        computer_folder: u({
            path: o(),
            computer_name: o()
        }).optional().describe("@internal Beside server_prompt, and as trustworthy as it is: a folder on one of the person's computers and that computer's name. Untrusted text; escape before display."),
        provenance_prompt_line: U([
            "one_at_a_time",
            "all_at_once"
        ]).optional().describe("@internal Only on the URL prompt that WebFetch raises mid-call, when the session's web-fetch proxy refuses an address. Says whether the session's line of such prompts was on for this call. 'one_at_a_time' = on: the call took a turn in the line, so no other prompt of that line was up when this one was raised. 'all_at_once' = off: the call joined no line, and its prompt was raised without waiting. For the host's logs: nothing in the CLI decides by it, and a host should not either."),
        tool_kind: U([
            "browser"
        ]).optional().describe("@internal Structured tool category so SDK hosts can route to a specialized permission UI without name-matching tool_name. 'browser' = a Claude-in-Chrome MCP tool under any of its registered server names: the mcp__claude-in-chrome__* extension server, the mcp__Claude_in_Chrome__* Cowork desktop server, the Claude Desktop pane under mcp__Claude_Preview__* / mcp__Claude_Browser__* (both pane names are live during its rename rollout), or the mcp__remote-devices__* spellings bridged through Claude Code Remote (the bridged forms of the current names; the retiring Claude_Preview name has no bridged form). Open for future kinds.")
    }).describe("Requests permission to use a tool with the given input."));
const To = p(()=>u({
        subtype: A("set_permission_mode"),
        mode: ce(),
        ultraplan: M().optional().describe("@internal CCR ultraplan session marker.")
    }).describe("Sets the permission mode for tool execution handling."));
const BF = p(()=>u({
        mode: ce().optional().describe("The permission mode now in effect. Headless CLIs echo it; other hosts may acknowledge with an empty object.")
    }).describe("Success payload answering set_permission_mode."));
const Ao = p(()=>u({
        subtype: A("set_model"),
        model: o().nullable().optional().describe("Model to switch to. Omitted, null, or 'default' resets to the session default model."),
        system_prompt: o().min(1).optional().describe("@internal Replaces the custom system prompt (the --system-prompt / initialize systemPrompt slot). The session keeps sending the system prompt it has recorded, so the new text is first sent after the next compaction; under systemPromptSnapshot: false it is sent from the next turn on. The tool definitions already sent do not change. Applied only when the model request is accepted; must be non-empty (there is no revert-to-built-in form); re-send the current model for a prompt-only update; sending the text already in effect changes nothing. The CLAUDE_CODE_SYSTEM_PROMPT_GB_FEATURE per-turn read, where configured, still wins. Transports that do not implement it, and older builds, ack success without applying it."),
        only_if_model_is_current: M().optional().describe("@internal When true, the request does not change the model. `model` must name a model: if it is absent, null, empty or 'default', the request fails with error_code 'invalid_request'. `system_prompt` is required: without it the request fails the same way. If `model` names the session's model, the request succeeds, and `system_prompt` replaces the custom system prompt as that member describes. The request makes no server check of the model, runs no PreModelSwitch hook, and sends no model report to the host. For a model id that this build knows, two names are one model if they resolve to one model id: an alias resolves to the id that it stands for, every dated id of a version resolves to the undated id, and a [1m] tag is ignored. An id that a behaves_as mapping points at another model is a different model. If the session's model is another model, the request fails with error_code 'model_not_current' and changes nothing. The request also fails that way while the session's records of its model disagree. A fallback that changes the session's model can cause that state until its turn ends, or longer. A session whose model setting is 'opusplan', 'opusplan[1m]' or 'haiku' runs a different model in plan mode. For such a session the request always fails with 'model_not_current'. A value that is not a boolean fails with 'invalid_request'. `claude -p` and a claude-code-server worker implement this member. Remote Control refuses every value but false. A build without this member ignores it and applies the request as a plain set_model.")
    }).describe("Sets the model to use for subsequent conversation turns."));
const wo = p(()=>u({
        subtype: A("set_max_thinking_tokens"),
        max_thinking_tokens: E().int().nullable().optional(),
        thinking_display: U(X6e).nullable().optional()
    }).describe("Sets the maximum number of thinking tokens for extended thinking. When max_thinking_tokens is null, thinking resets to the session default: any mid-session budget override is cleared (back to the spawn-time budget, if one was set), and thinking stays off for sessions that have it disabled. When max_thinking_tokens is omitted, the budget is left as it is, so a request that only changes thinking_display can leave the field out. thinking_display optionally sets the thinking display mode for the rest of the session: a value replaces the session display mode, null clears that override so Claude Code's default display handling applies again, and when omitted the display mode from session start (--thinking-display) is kept. 'highlights' returns one short title per stretch of thinking instead of a prose summary. The API accepts it only from Claude Code sessions that Anthropic hosts; if the API rejects it, the session sends 'omitted' (no thinking text) in its place from then on. A request for 'highlights' gets an error reply after such a rejection, on Amazon Bedrock, Google Vertex AI or another provider to which Claude Code sends no first-party-only beta features, when experimental betas are off (CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS or organization policy), or on a Claude 3 model (except on Microsoft Foundry). The error names which of these it was; the display stays as it was, and max_thinking_tokens still applies when the request has it."));
const yo = p(()=>u({
        subtype: A("rename_session"),
        title: o(),
        source: U([
            "remote",
            "host"
        ]).optional().describe("Who chose the title: 'remote' (the default) for a rename made on claude.ai and relayed to this process, 'host' for one the user made in the hosting application (an IDE), which the CLI counts as a user rename."),
        session_id: o().optional().describe("The session the title is for. When given and this process has since moved to another session (/clear, an in-session resume), the request is refused instead of naming the new session.")
    }).describe("Sets the user-facing title for the current session."));
const Ro = p(()=>u({
        subtype: A("set_color"),
        color: o()
    }).describe('Sets the session accent color. Accepts an agent color name or "default" to reset.'));
const vo = p(()=>u({
        subtype: A("mcp_status")
    }).describe("Requests the current status of all MCP server connections."));
const HF = p(()=>u({
        mcpServers: T(Xn())
    }).describe("Response containing the current status of all MCP server connections."));
const Co = p(()=>u({
        subtype: A("file_suggestions"),
        query: o()
    }).describe("Requests at-mention file autocomplete suggestions for a partial path prefix. Returns the same fuzzy-matched results the TUI shows."));
const KF = p(()=>u({
        suggestions: T(u({
            path: o().describe("Relative to `cwd`, or absolute (e.g. files under the Claude config directory). A directory ends with a path separator."),
            score: E().optional()
        })),
        cwd: o().optional().describe("Absolute directory the relative suggestion paths are relative to: the working directory the file index was built for, which can lag the current one briefly after a directory change. Omitted by older CLIs and on transports that withhold local paths; resolve against the system/init cwd then.")
    }).describe("Response containing fuzzy-ranked file path suggestions (capped at the same limit as the TUI typeahead)."));
const zo = p(()=>u({
        subtype: A("get_context_usage"),
        detail: U([
            "summary",
            "full"
        ]).optional().describe("'full' counts each category with the token-count API; 'summary' answers from the last response's usage and local estimates without the per-category token-count calls. Defaults to 'full'.")
    }).describe("Requests a breakdown of current context window usage by category."));
const Oo = p(()=>u({
        subtype: A("get_session_cost")
    }).describe("Requests the formatted session cost summary (the same text /usage prints in non-interactive mode). Used by the thin-client /usage dialog to show the remote container cost instead of the local $0.00."));
const FF = p(()=>u({
        text: o()
    }).describe("Formatted session cost text, ANSI-stripped."));
const ko = p(()=>u({
        subtype: A("list_models")
    }).describe("Requests the worker's selectable model catalog. Fulfills the caps.modelCatalog capability: in a remote thin-client session the worker's provider, settings cascade, and enforcement policy decide which models the session can run, so the thin client must ask rather than read its own getModelOptions()."));
const YF = p(()=>u({
        models: T(tr())
    }).describe("The worker's model options serialized via toModelInfos() — the same ModelInfo shape the initialize response carries. Includes disabled rows (visible but not selectable) so the thin-client picker renders them greyed-out like the local one."));
const No = p(()=>u({
        subtype: A("get_usage"),
        skip_behaviors: M().optional().describe("Skip the scan of local transcripts that produces the response's behaviors section (it is null in the answer). For callers that need only the plan rate limits, such as a usage meter; the scan reads every transcript touched in the last seven days.")
    }).describe("Requests the structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization when available. Experimental — the response shape may change."));
const Bt = p(()=>u({
        utilization: E().nullable().describe("Percentage of the window used, 0-100."),
        resets_at: o().nullable().describe("ISO 8601 timestamp when the window resets.")
    }));
const ar = p(()=>u({
        name: o(),
        pct: E().describe("Share of the weighted local usage attributed to this item, 0-100.")
    }));
const Ey = p(()=>u({
        request_count: E().describe("API requests found in local transcripts for this window."),
        session_count: E().describe("Distinct sessions observed in this window."),
        behaviors: T(u({
            key: U([
                "cache_miss",
                "long_context",
                "subagent_heavy",
                "high_parallel",
                "cron"
            ]),
            pct: E().describe("Share of the weighted local usage attributed to this behavior, 0-100."),
            count: E().describe("Requests in this window exhibiting the behavior.")
        })).describe("Behavioral characteristics of local usage. Categories overlap — this is not a partition, so percentages do not sum to 100."),
        agents: T(ar()),
        skills: T(ar()),
        plugins: T(ar()),
        mcp_servers: T(ar())
    }));
const WF = p(()=>u({
        session: u({
            total_cost_usd: E(),
            total_api_duration_ms: E().int(),
            total_duration_ms: E().int(),
            total_lines_added: E().int(),
            total_lines_removed: E().int(),
            model_usage: ue(o(), Dt())
        }).describe("Cost and usage accumulated by the current session."),
        subscription_type: o().nullable().describe("Claude.ai subscription type ('pro', 'max', 'team', 'enterprise') or null for API key / 3P provider sessions."),
        rate_limits_available: M().describe("False when plan rate limits do not apply (API key, Bedrock, Vertex, or missing profile scope) — rate_limits will be null."),
        rate_limits: u({
            five_hour: Bt().nullable().optional(),
            seven_day: Bt().nullable().optional(),
            seven_day_oauth_apps: Bt().nullable().optional(),
            seven_day_opus: Bt().nullable().optional(),
            seven_day_sonnet: Bt().nullable().optional(),
            model_scoped: T(u({
                display_name: o().describe("Server-supplied label for the model bucket (e.g. 'Fable')."),
                utilization: E().nullable(),
                resets_at: o().nullable()
            })).optional().describe("Per-model weekly windows from the server limits[] array, filtered by the overage-included-models allowlist. Additive: absent when nothing is known about them (an answer served from cached data, or rows the allowlist hides); an empty array means the endpoint itself answered and listed no per-model weekly window at all for this account, before the allowlist was applied."),
            extra_usage: u({
                is_enabled: M(),
                monthly_limit: E().nullable(),
                used_credits: E().nullable(),
                utilization: E().nullable(),
                currency: o().nullable().optional()
            }).nullable().optional()
        }).nullable().describe("Plan rate-limit utilization windows from the claude.ai usage endpoint, or null when unavailable."),
        behaviors: u({
            day: Ey().describe("Last 24 hours."),
            week: Ey().describe("Last 7 days.")
        }).nullable().describe("What's contributing to limits usage, from a scan of local transcripts on this machine (the same data the /usage dialog renders): behavioral characteristics plus per-skill/agent/plugin/MCP-server attribution. Approximate, excludes other devices and claude.ai. Null for non-claude.ai-subscriber sessions (mirrors the dialog) or when the scan fails.")
    }).describe("Structured /usage data: session cost/usage totals plus claude.ai plan rate-limit utilization. Experimental — the shape may change."));
const Io = p(()=>u({
        subtype: A("get_status")
    }).describe("@internal Requests the rows of the terminal's /status screen (version, session, account, provider, model, servers, settings), every value already rendered as text, for a host that shows them with its own widgets."));
const $F = p(()=>u({
        label: o().optional().describe("The row's name; absent for a row that is a sentence on its own."),
        value: o().describe("The row's value as the terminal shows it.")
    }));
const XF = p(()=>u({
        sections: T(u({
            title: o(),
            rows: T($F())
        })).describe("The /status screen's sections in its order, each with the rows it shows.")
    }).describe("@internal The terminal's /status rows as text."));
const Mo = p(()=>u({
        subtype: A("export_conversation")
    }).describe("@internal Requests the conversation as the plain text the terminal's /export writes, with the file name that command would offer, for a host that copies or saves it with its own widgets."));
const QF = p(()=>u({
        text: o().describe("The whole conversation as plain text, as /export renders it."),
        default_filename: o().describe("The file name /export would offer: the time and the first prompt, ending in .txt.")
    }).describe("@internal The conversation text /export would write."));
const Po = p(()=>u({
        subtype: A("get_memory_dialog")
    }).describe("@internal Requests the rows and toggle states of the session's /memory dialog, for a host that draws the dialog with its own widgets and opens the files and folders itself. Clears the session's memory-file cache first, as the terminal /memory does."));
const JF = p(()=>u({
        kind: U([
            "user",
            "project",
            "project-alt",
            "local",
            "other"
        ]).describe("The user instructions file, the project instructions file (./CLAUDE.md), the alternate project file (./.claude/CLAUDE.md), the local file (./CLAUDE.local.md), or any other loaded instruction file. Only the user and project rows are listed while missing (exists false), so a host may create exactly those two."),
        path: o().describe("Absolute path on the session filesystem."),
        label: o().describe("The row label as the terminal dialog shows it."),
        description: o().describe("The row's secondary text; may be empty."),
        exists: M()
    }));
const ZF = p(()=>u({
        kind: U([
            "auto",
            "team",
            "agent"
        ]).describe("The auto-memory folder, the team memory folder, or one agent's memory folder."),
        path: o().describe("Absolute directory path on the session filesystem; may not exist yet."),
        label: o(),
        description: o()
    }));
const eY = p(()=>u({
        name: o().describe("The memory's path relative to the auto-memory folder ('MEMORY.md' for the index), as the CLI's memory scan names it."),
        path: o().describe("Absolute path on the session filesystem, inside the auto-memory folder reported in folders."),
        description: o().nullable().describe("The memory's frontmatter description; null when it has none."),
        type: U([
            "user",
            "feedback",
            "project",
            "reference"
        ]).nullable().describe("The memory's frontmatter type; null when absent or not one of the CLI's types."),
        modified_ms: E().describe("When the memory was last modified, in epoch milliseconds: the frontmatter 'modified' stamp when it parses, else the file's mtime.")
    }));
const tY = p(()=>u({
        files: T(JF()),
        folders: T(ZF()).describe("Empty when the terminal dialog would show no folder rows."),
        memories: T(eY()).optional().describe("The saved memories in the auto-memory folder, as the CLI's own memory scan lists them (the same listing the memory recall uses, so it follows the CLI's storage and visibility rules): the MEMORY.md index first when it exists on disk, then the memories ordered by file modification time, newest first (modified_ms may carry a frontmatter stamp instead), capped at the scan's limit of 200. Present exactly when folders is non-empty; absent while auto-memory is off, and absent from a CLI that predates this field."),
        auto_memory: u({
            enabled: M().describe("Whether auto-memory is on for every session: on in settings and not turned off by an environment variable, a launch flag, safe mode or the per-model switch."),
            toggleable: M().describe("False where the terminal dialog ignores the toggle (safe mode, or the per-model kill switch)."),
            status: o().describe("The state text beside 'Auto-memory:' in the terminal dialog.")
        }),
        auto_dream: u({
            shown: M().describe("Whether the terminal dialog shows the Auto-dream row."),
            enabled: M(),
            toggleable: M().describe("False while auto-memory is off for every session or held off for this session, or, when off, in a session a tool call or a background runner started."),
            status: o().describe("The state text beside 'Auto-dream:'."),
            detail: o().describe("The dimmed detail ('running', 'never', 'last ran …'), or empty.")
        })
    }).describe("@internal The session's /memory dialog: file rows, folder rows, and the two toggle rows, in dialog order. Org (synced project memory) rows are not included."));
const Do = p(()=>u({
        subtype: A("get_skills_dialog")
    }).describe("@internal Requests the rows of the terminal's /skills menu, for a host that draws the menu with its own widgets: each skill with its source, its token estimate, its effective state, and what locks it. Read-only; a host writes a state through the CLI's edit-skill-overrides subcommand."));
const sY = p(()=>u({
        name: o().describe("The skill's full name (the settings key; 'server:skill' for an MCP skill)."),
        display_name: o().describe("The name the menu shows, as the slash-command list names it."),
        description: o(),
        source: o().describe("The source label the menu shows ('user', 'project', 'plugin', 'built-in', …)."),
        tokens: E().describe("The menu's token estimate for the skill's listing in the system prompt, for the active model."),
        state: U([
            "on",
            "name-only",
            "user-invocable-only",
            "off"
        ]).describe("The effective state (the locked value, else the local setting, else the project or user setting, else 'on')."),
        locked_by: U([
            "author",
            "plugin",
            "policy",
            "flag",
            "reserved-name"
        ]).optional().describe("Present when a local setting cannot change the state: the skill disables model invocation itself, it comes from a plugin, a managed or flag setting names it, or settings cannot store an entry under its name (reserved-name: a skill named __proto__; rename it to configure it). When one of several skills sharing a name is locked, every row of that name carries the lock, as the menu treats the name."),
        advertised: M().describe("Whether the session lists the skill as a slash command (a skill that is off, or not user-invocable, is not): a host joins a row to its command only when true."),
        handles: u({
            unqualified_name: o().optional(),
            aliases: T(o()).optional(),
            bare_name_reserved: M().optional()
        }).describe("The other names the settings files may hold the skill's state under (its unqualified name, its aliases), as the menu resolves them; a host sends these back with an edit of a skill only the session loaded, so the edit reads the same entries.")
    }));
const rY = p(()=>u({
        skills: T(sY()).describe("The menu's rows, in its default order (by source, then name).")
    }).describe("@internal The terminal's /skills menu as rows."));
const xo = p(()=>u({
        subtype: A("get_chrome_dialog")
    }).describe("@internal Requests the state the terminal's /chrome dialog shows (Claude in Chrome: whether it is allowed, the extension's install and connection state, the enabled-by-default setting, and the pages its rows open), for a host that draws the dialog with its own widgets. Read-only; a host writes the setting through the CLI's edit-chrome-settings subcommand."));
const nY = p(()=>u({
        allowed: M().describe("Whether Claude in Chrome may be used at all (the organization policy allows the browser extension)."),
        subscriber: M().describe("Whether the account is a claude.ai subscription, which Claude in Chrome requires."),
        wsl: M().describe("Whether the session runs under WSL, where Claude in Chrome is not supported."),
        installed: M().describe("Whether the Chrome extension was detected on this machine."),
        connected: M().describe("Whether the session's Claude in Chrome server is connected."),
        paired_browser: o().optional().describe("The paired browser's name, when connected and paired."),
        enabled_by_default: M().describe('The "Enabled by default" setting (claudeInChromeDefaultEnabled in the global config).'),
        at_startup: M().optional().describe('@internal The same answer as claude_in_chrome_at_startup, computed when asked. Any host can read it; a host uses it to decide whether to connect open sessions when "Enabled by default" is turned on. Absent (older CLI) → treat as false.'),
        urls: u({
            install: o().describe("The page that installs the extension."),
            reconnect: o().describe("The page that reconnects the extension."),
            permissions: o().describe("The extension's site permissions page.")
        }).describe("The pages the terminal dialog's rows open, so a host holds no copy of them.")
    }).describe("@internal The terminal's /chrome dialog state."));
const Lo = p(()=>u({
        subtype: A("get_chrome_browsers")
    }).describe("@internal Requests the browsers connected to the session's Claude in Chrome server, as the terminal's /chrome browser picker lists them. Fails when the server is not connected."));
const oY = p(()=>u({
        browsers: T(u({
            device_id: o(),
            name: o(),
            os_platform: o().optional(),
            current: M().describe("Whether this is the browser Chrome actions use now.")
        }))
    }).describe("@internal The connected browsers."));
const Uo = p(()=>u({
        subtype: A("select_chrome_browser"),
        device_id: o().describe("The browser to use for Chrome actions, from get_chrome_browsers.")
    }).describe("@internal Switches the session's Claude in Chrome server to the given browser, as the terminal's picker does. Fails when the server is not connected."));
const aY = p(()=>u({
        name: o().optional().describe("The chosen browser's name, when known.")
    }).describe("@internal The browser is now in use."));
const Vo = p(()=>u({
        subtype: A("get_sandbox_dialog")
    }).describe("@internal Requests the state the terminal's /sandbox dialog shows, for a host that draws the dialog with its own widgets: platform support, the policy lock, the mode and its choices, the unsandboxed-fallback override, the dependency check, the excluded commands and the configured restrictions. Read-only; a host writes through the CLI's edit-sandbox-settings subcommand."));
const iY = p(()=>u({
        supported: M().describe("Whether sandboxing can be configured on this platform (macOS, Linux, WSL2, or Windows where enabled) and the enterprise enabledPlatforms setting includes it."),
        unsupported_reason: U([
            "wsl1",
            "platform",
            "excluded_platform"
        ]).optional().describe("Why not, when supported is false: WSL1; another unsupported platform; or a platform the enabledPlatforms setting leaves out."),
        locked: M().describe("Whether a higher-priority settings source sets the sandbox settings, so the mode cannot be changed locally."),
        overrides_locked: M().describe("Whether the unsandboxed-fallback override cannot be changed from the project: set by policy (locked, or unsandboxed commands forbidden), or held closed (allowUnsandboxedCommands: false) by a --settings file or user settings."),
        enabled: M().describe("Whether sandboxing is running in this session: on in the settings, and the sandbox started."),
        enabled_in_settings: M().describe("Whether the settings files turn sandboxing on."),
        unavailable_reason: o().optional().describe("Why the sandbox cannot run although the settings turn it on (a missing dependency, an unsupported platform), when that is so; absent when it runs, or when it is off in the settings. When absent while enabled is false and enabled_in_settings true, the sandbox failed to start in this session."),
        mode: U([
            "auto-allow",
            "regular",
            "disabled"
        ]).describe("The terminal picker's current row, from the settings: sandboxed commands auto-allowed, sandboxed with regular permissions, or no sandbox."),
        auto_allow_available: M().describe("Whether the auto-allow mode is offered on this platform."),
        no_sandbox_allowed: M().describe('False when sandboxing is forced on, so the "No sandbox" choice is not offered.'),
        unsandboxed_fallback: M().describe("Whether a command that fails under the sandbox may be retried outside it."),
        dependencies: u({
            errors: T(o()).describe("Missing required dependencies; the sandbox cannot run with any."),
            warnings: T(o()).describe("Missing optional dependencies; the sandbox runs with less isolation.")
        }).describe("The sandbox runtime's dependency check, as the terminal's Dependencies tab lists it."),
        excluded_commands: T(o()).describe("Command patterns excluded from the sandbox (the excludedCommands setting)."),
        restrictions: u({
            fs_deny_read: T(o()),
            fs_allow_read: T(o()).describe("Paths re-allowed for reading (filesystem.allowRead), as enforced: while managed settings mandate the sandbox, or managed or --settings deny reads, project settings contribute none; under filesystem.allowManagedReadPathsOnly, managed settings only."),
            fs_allow_write: T(o()).describe("Extra writable paths (filesystem.allowWrite), as enforced: while managed settings mandate the sandbox, project settings contribute none."),
            fs_deny_write: T(o()),
            network_allowed_domains: T(o()),
            network_denied_domains: T(o()),
            network_managed: M().describe("Whether the network allow list is managed by policy."),
            unix_sockets: T(o()).describe("Unix socket paths allowed (allowUnixSockets), as enforced: while managed settings mandate the sandbox, from managed, --settings and user settings only."),
            allow_all_unix_sockets: M().describe("Whether every Unix socket is allowed (allowAllUnixSockets, as enforced), so socket blocking is off and a missing socket-filter dependency costs nothing; the terminal shows its socket warning only when this is false."),
            ignored_glob_patterns: T(o()).describe("Patterns the Linux sandbox ignores (globs it does not support).")
        }).describe("The restrictions configured in the sandbox settings (the settings' filesystem, network and socket lists, not the runtime's built-in defaults), as the settings files merge them; the grant fields (fs_allow_read, fs_allow_write, unix_sockets, allow_all_unix_sockets) as enforced.")
    }).describe("@internal The session's /sandbox dialog state, for a host on the same machine (the sandbox governs the commands Claude runs there)."));
const jo = p(()=>u({
        subtype: A("get_binary_version")
    }).describe("Requests the responder's CLI binary version. Used by /version in --remote mode so the thin client can show both its own and the remote container's version."));
const lY = p(()=>u({
        version: o(),
        buildTime: o().optional()
    }));
const cY = p(()=>u({
        name: o(),
        tokens: E().int(),
        color: o(),
        isDeferred: M().optional(),
        kind: U(L1n).describe("What the row is, the same classification the /context result's context_usage rows carry: 'used' content occupies the window; 'free' is the remaining window; 'buffer' is the compaction reserve; 'deferred' rows are out-of-window tool schemas. Classify on this, never on the English name.")
    }));
const dY = p(()=>u({
        color: o(),
        isFilled: M(),
        categoryName: o(),
        tokens: E().int(),
        percentage: E(),
        squareFullness: E()
    }));
const hY = p(()=>u({
        categories: T(cY()),
        totalTokens: E().int(),
        maxTokens: E().int(),
        rawMaxTokens: E().int(),
        percentage: E(),
        gridRows: T(T(dY())),
        model: o(),
        memoryFiles: T(u({
            path: o(),
            type: o(),
            tokens: E().int()
        })),
        mcpTools: T(u({
            name: o(),
            serverName: o(),
            tokens: E().int(),
            isLoaded: M().optional()
        })),
        deferredBuiltinTools: T(u({
            name: o(),
            tokens: E().int(),
            isLoaded: M()
        })).optional(),
        systemTools: T(u({
            name: o(),
            tokens: E().int()
        })).optional(),
        systemPromptSections: T(u({
            name: o(),
            tokens: E().int()
        })).optional(),
        agents: T(u({
            agentType: o(),
            source: o(),
            tokens: E().int()
        })),
        slashCommands: u({
            totalCommands: E().int(),
            includedCommands: E().int(),
            tokens: E().int()
        }).optional(),
        skills: u({
            totalSkills: E().int(),
            includedSkills: E().int(),
            tokens: E().int(),
            skillFrontmatter: T(u({
                name: o(),
                source: o(),
                tokens: E().int()
            }))
        }).optional(),
        autoCompactThreshold: E().int().optional(),
        isAutoCompactEnabled: M(),
        messageBreakdown: u({
            toolCallTokens: E().int(),
            toolResultTokens: E().int(),
            attachmentTokens: E().int(),
            assistantMessageTokens: E().int(),
            userMessageTokens: E().int(),
            redirectedContextTokens: E().int(),
            unattributedTokens: E().int(),
            toolCallsByType: T(u({
                name: o(),
                callTokens: E().int(),
                resultTokens: E().int()
            })),
            attachmentsByType: T(u({
                name: o(),
                tokens: E().int()
            }))
        }).optional(),
        apiUsage: u({
            input_tokens: E().int(),
            output_tokens: E().int(),
            cache_creation_input_tokens: E().int(),
            cache_read_input_tokens: E().int()
        }).nullable()
    }).describe("Breakdown of current context window usage by category (system prompt, tools, messages, etc.)."));
const $1n = p(()=>u({
        subtype: A("mcp_call"),
        tool: o().describe("Fully-qualified MCP tool name, e.g. mcp__server__tool_name. Plugin-hosted servers are ordinary MCP servers here — e.g. mcp__plugin_documents_docs__doc_export (server names are normalized: non-[a-zA-Z0-9_-] becomes _)."),
        arguments: ue(o(), oe()).optional().describe(`Tool arguments. When input_files/output_files are declared, any string VALUE that exactly equals "{{in:NAME}}" or "{{out:NAME}}" (whole string, not a substring) is replaced with the worker-chosen absolute path of that named staged file before the call; a token naming no declared file fails the request with staging error_code=tool_error, and every declared output's "{{out:NAME}}" token must appear in arguments (the substituted path is the only way the tool learns where to write, so an unreferenced output fails the request before the tool runs). With no files declared \u2014 including expires_at/timeout_ms-only staged calls \u2014 passed through unchanged.`),
        expires_at: o().optional().describe("RFC3339 deadline, REQUIRED when output_files are declared (a stale buffered drain must not overwrite rows written since). Sending expires_at routes the call through the staging engine, same as timeout_ms — the response gains a staging result. UNDELIVERED requests buffer durably and drain after reattach; a drain past this instant is dropped with staging error_code=expired instead of executing stale. Once delivered to a live worker the request is acked immediately and never redelivered — a worker killed mid-run surfaces as a missing response (apply your own deadline), not a later drain. An unparseable value is treated as already expired (fail closed)."),
        timeout_ms: E().optional().describe("Tool-execution timeout (staging and collection have their own transport timeouts). Clamped to [1000, 600000]; default 120000. Sending timeout_ms routes the call through the staging engine — so it is always enforced when present and the response carries a staging result; omit it for a plain call. Staged calls are POSIX-worker-only: on a Windows worker any staged-field call fails with a typed staging refusal."),
        input_files: T(u({
            name: o().regex(/^[A-Za-z0-9_-]{1,64}$/).describe('Handle referenced from arguments as "{{in:NAME}}". Unique within the request.'),
            lane_path: o().describe("Synced-file lane row to stage, e.g. /working/.cowork/originals/a.docx. A missing row fails with staging error_code=input_missing; the etag actually staged is echoed back in staging.inputs_used.")
        })).max(64).optional().describe("Declaring input_files or output_files makes this a STAGED call: rows are fetched from the synced-file lane into a private per-request temp dir the WORKER chooses (random, per-UID — the caller never sees or computes paths; it references files via tokens in arguments), the tool runs, and declared outputs are written back as lane rows (durable-at-ack PUT). The response then carries a `staging` result the caller switches on."),
        output_files: T(u({
            name: o().regex(/^[A-Za-z0-9_-]{1,64}$/).describe('Handle referenced from arguments as "{{out:NAME}}" — the tool is told (via the substituted path) where to write; the worker collects from exactly that path. Unique within the request.'),
            lane_path: o().describe("Synced-file lane row to write, e.g. /working/report.cd. Unique within the request (two outputs on one row would self-conflict under CAS). Outputs over the 25 MiB lane cap fail with staging error_code=output_too_large."),
            if_match: o().min(1).optional().describe("Opaque lane etag the output row must still carry for the write to land (CAS). Omitted = unconditional last-writer-wins (an empty string is rejected, not treated as unconditional). A row that moved since fails that output with staging error_code=output_conflict and the requested bytes are not written. Redelivery of a completed CAS write re-runs and conflicts with its own prior write — treat output_conflict on a retry as possible-prior-success and reconcile by etag.")
        })).max(64).optional()
    }).describe("Invokes an MCP tool via the subprocess MCP client without a model turn. No permission check (control channel is trusted, same as other " + 'subtypes). SDK-type MCP servers (config.type === "sdk") are rejected — ' + "they are caller-provided, so the caller can invoke them directly without the subprocess round-trip. Result content passes through the same processing as model-turn MCP calls. Session expiry is not retried automatically; callers can mcp_reconnect and retry. UrlElicitationRequired (-32042) tries Elicitation hooks; if no hook " + "resolves, the call errors with the URL in the message — open it " + "out-of-band, then retry mcp_call. " + 'STAGED calls (input_files/output_files declared) additionally stage lane rows in/out around the call — see the input_files describe. Staged failures come back as a success-subtype response whose staging field carries a typed error_code; subtype:error is emitted only when the call could not be attempted at all (server not connected, kill switch, dispatch failure) and means nothing ran. A target server that is not yet connected is brought up on demand: dispatch runs the deferred plugin/MCP startup resolution (the work a first model turn would have done) and waits up to 30s — shortened by expires_at when that is sooner — for the server to connect before answering "MCP server not connected", so a dispatch that races plugin startup (e.g. after an idle-wake reattach) succeeds instead of failing until a turn runs. Standard RPC semantics: a redelivered request_id supersedes the in-flight run (it is aborted and its response suppressed — exactly one response per request_id); conversion is idempotent, so re-running is safe. Cancellable via control_cancel_request.'));
const uY = p(()=>u({
        content: oe(),
        structuredContent: ue(o(), oe()).optional(),
        _meta: ue(o(), oe()).optional().describe("The result's own `_meta`, minus the server's keys under the CLI-reserved `com.anthropic/` prefix. Absent when nothing is left. The `_meta` of a block inside `content` is not filtered."),
        staging: Ue([
            u({
                ok: A(true),
                outputs: T(u({
                    lane_path: o(),
                    etag: o().describe("Opaque lane etag returned by the durable-at-ack PUT."),
                    bytes: E().int()
                })),
                inputs_used: T(u({
                    lane_path: o(),
                    etag: o()
                })).describe("Lane etag each staged input actually carried.")
            }),
            u({
                ok: A(false),
                error_code: U([
                    "expired",
                    "input_missing",
                    "output_too_large",
                    "output_conflict",
                    "timeout",
                    "tool_error"
                ]),
                detail: o().describe("Plain-text detail for the requesting client. May carry user-document content (tool output, lane paths) — surface it to the user where helpful, but do not log it verbatim or feed it to analytics."),
                retryable: M().optional().describe("Present when the failure class is known (lane transport verdict, CAS rejection): true = safe to re-drive with the same request_id, false = deterministic. Absent = unknown; treat as non-retryable and switch on error_code.")
            })
        ]).optional().describe("Present exactly when the request used any staged-call field (input_files, output_files, expires_at, timeout_ms) — such calls run through the staging engine even with no files, so expires_at is always honored. The error_code set is a stable cross-repo contract — extend it, never rename or repurpose members. A failure makes no guarantee about partial effects: earlier outputs may already have landed; retry with the same request_id is safe for outputs without if_match (unconditional PUTs re-land the same bytes), while if_match outputs surface output_conflict against their own prior write — reconcile by etag. On staged failures the tool may never have run, so content/structuredContent may be absent.")
    }).describe("MCP tool result — the content array, structuredContent, and _meta " + "from CallToolResult. Content passes through the same processing as model-turn MCP calls (large results may be truncated or redirected to a file). Caller interprets. Staged calls additionally carry a `staging` result."));
const qo = p(()=>u({
        subtype: A("rewind_files"),
        user_message_id: o(),
        dry_run: M().optional()
    }).describe("Rewinds file changes made since a specific user message."));
const pY = p(()=>u({
        canRewind: M(),
        error: o().optional(),
        filesChanged: T(o()).optional(),
        insertions: E().int().optional(),
        deletions: E().int().optional(),
        skippedLinks: E().optional().describe(Jn)
    }).describe("Result of a rewindFiles operation."));
const Go = p(()=>u({
        subtype: A("cancel_async_message"),
        message_uuid: o()
    }).describe("Drops a pending async user message from the command queue by uuid. No-op if already dequeued for execution."));
const _Y = p(()=>u({
        cancelled: M()
    }).describe("Result of a cancel_async_message operation. cancelled=false means the message was not in the queue (already dequeued or never enqueued)."));
const pbo = p(()=>Wr("kind", [
        u({
            kind: A("workspace_root")
        }),
        u({
            kind: A("diff_root")
        }),
        u({
            kind: A("repo"),
            repo: o().describe("A repository, as owner/name.")
        })
    ]).describe("@internal A directory read_file resolves a relative path against."));
const Bo = p(()=>u({
        subtype: A("read_file"),
        path: o(),
        max_bytes: E().optional(),
        encoding: U([
            "utf-8",
            "base64"
        ]).optional().describe("How to encode the bytes in `contents`. Defaults to utf-8 (lossy for binary); pass 'base64' to read images."),
        anchor: pbo().optional().describe("@internal Resolve `path` against a directory the session looks up on each request, instead of the live cwd, which a `cd` in the shell moves. workspace_root is the root list_directory lists from. diff_root is the repository get_workspace_diff diffs, so a path taken from that diff opens the file the diff shows. It is refused in a session whose diff follows the shell's cwd between several repositories; a client that knows the repository should send `repo`. repo is the checkout the session declares for that repository or, failing that, diff_root when its origin remote ends in that owner/name. `path` must stay inside that directory as written (the check follows no symlink), and the read is gated as any other read_file is. A path that is `~`, starts with `~/` or leaves that directory, or an anchor the session cannot resolve, is refused with the error `read denied: <path>`. Leave the field out when there is no anchor: null is refused. A CLI that predates this field ignores it and reads against the live cwd; the response's `anchor` tells the two apart.")
    }).describe("Read a file from the session filesystem for the remote sidebar viewer. Path is resolved against cwd by default and gated by the same read-permission rules as the Read tool."));
const mY = p(()=>u({
        contents: o(),
        absPath: o(),
        truncated: M().optional(),
        encoding: A("base64").optional().describe("Set when the request asked for base64. Absent means utf-8 — including when an older CLI ignored the request's encoding field."),
        anchor: U([
            "workspace_root",
            "diff_root",
            "repo"
        ]).optional().describe("@internal The kind of the request's `anchor`, set when `path` was resolved against it. Absent when the request sent no anchor, or when an older CLI ignored it and read against the live cwd.")
    }).describe("File contents for the remote sidebar viewer."));
const Ho = p(()=>u({
        subtype: A("list_directory"),
        path: o().describe('Directory to list, relative to the workspace root: the project root of the session, which is the directory the session was started in or, for a worker started ahead of its session, claimed for. A `cd` in the shell, entering a worktree, or a set_cwd after the first turn does not move it. "" or "." lists the root itself. "/" is the only separator and 1024 UTF-16 code units the most. Absolute, drive, UNC and ".." paths are refused as invalid_path, and so is a path with a backslash: a name that contains one cannot be listed. Some other names are refused as unsupported_name, for example one that ends in a dot or a space.')
    }).describe("@internal List the direct children (names and kinds) of one directory below the workspace root of a remote session on Linux (every cloud session; a self-hosted runner on Linux). One level per request, no file contents. No symlink is followed: a path through or to a symlink is refused. A directory that a Read deny rule or a Read ask rule covers is refused, and such children are left out: the request cannot ask anyone. A directory whose every child is left out answers an empty listing, as an empty directory does. A refusal is the control error `list denied: <code>`, with code one of invalid_path, unsupported_name, symlink_in_path (a symlink at the workspace root or below it), path_not_canonical (a symlink above it, or a directory of the path was moved or removed while it was read; after either of these two codes the same request can succeed when it is sent again, if the tree changed), read_rule, not_found, not_a_directory, os_permission_denied, workspace_moved (the session works in a worktree or another directory now; this can last until the worker is restarted), unexpected_error. A rule for the whole Read tool refuses every listing as read_rule. Any other error text means the request was not served at all: the unsupported-subtype error below, `not_claimed` from a worker that is started but not yet claimed for a session, or the refusal of a client in between that does not know the request. Any other session, and a remote session on macOS, on Windows or under WSL, refuses the request as an unsupported subtype, as an older CLI does (the wording differs between a headless session and the Remote Control bridge). A remote session on Linux answers the same way while the request is switched off remotely; the switch is read for each request, so that answer can change within a session. To open a listed entry, send read_file the listed path, \"/\" and the entry name (the name alone when the listed path is \"\"), with `anchor` workspace_root. A response without `anchor` comes from a CLI that predates it, which read that relative path against the live cwd (a `cd` in the shell moves it), so it may be another file; for such a CLI, send an absolute path: the `cwd` of the first system/init message of the session, then the listed path, then the entry name. When the `absPath` of the listing starts with \"/\", that `absPath`, then \"/\", then the entry name is such a path too. Every later system/init carries the live cwd, not the root. A session whose system/init carries an empty `cwd` names no root to build that path from."));
const gY = p(()=>u({
        absPath: o().describe('The directory that was listed, as an absolute path: the workspace root, then the request path, so "" gives the root itself. A `cd` in the shell does not move it. Exception: a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) gets the request path as it was sent, which is never absolute. An older CLI that answers list_directory leaves the field out: the path is then built as the request text says, from the `cwd` of the first system/init message and the request path.'),
        entries: T(u({
            name: o(),
            isDirectory: M().describe("False for a symlink, whatever it points to: a symlink is a leaf of the tree and cannot be listed. False for a special entry too."),
            isSymlink: M().optional().describe("Present and true only for a symlink. The target is never read or returned."),
            isSpecial: M().optional().describe("Present and true only for an entry that is not a file, a directory or a symlink: a FIFO, a socket or a device. read_file does not open it. The kind is the one the directory records: for a name that something is mounted over, that is the kind of what lies underneath.")
        })),
        truncated: M().describe("True when entries were left out for their number. The listing is cut at the cap of 5000 entries for one response, after the sort by name, so the ones kept are the first in that order. In a directory with more than 50000 children the rest is dropped before the sort and before the Read rules hide any, so fewer than 5000 entries can come with it. False when no entry is returned, whatever the number of children: a listing of nothing but hidden children is the listing of an empty directory.")
    }).describe("@internal The direct children of the requested directory, sorted by name with plain string comparison (uppercase before lowercase), not by locale."));
const fY = p(()=>u({
        oldStart: E().int(),
        oldLines: E().int(),
        newStart: E().int(),
        newLines: E().int(),
        lines: T(o())
    }).describe("@internal One unified-diff hunk of the get_workspace_diff response."));
const Ko = p(()=>u({
        subtype: A("get_workspace_diff")
    }).describe("@internal Requests the workspace git diff for the thin-client /diff dialog. The worker resolves one base ref for both stats and hunks (the merge-base with the base branch the session names, else the default branch, when HEAD is on another branch with commits beyond it, so committed and uncommitted changes show together, uncommitted rows first; otherwise working tree vs HEAD) and applies the standard caps (5s git timeout, 50 files, 1MB/file)."));
const EY = p(()=>u({
        diff: u({
            stats: u({
                filesCount: E().int(),
                linesAdded: E().int(),
                linesRemoved: E().int()
            }),
            perFileStats: T(u({
                path: o(),
                added: E().int(),
                removed: E().int(),
                isBinary: M(),
                isUntracked: M(),
                status: U([
                    "added",
                    "modified",
                    "removed",
                    "renamed",
                    "copied"
                ]).optional().describe("How the file changed, in the same comparison as this row's added and removed counts: added, removed, renamed, copied, or modified (anything else, mode changes included). A move git's rename detection misses, such as one to a file not yet added to git, arrives as removed plus added. Absent from Claude Code versions that predate it, and on the rare reply whose git status lines don't line up with its counts; treat an unknown or absent value as modified."),
                previousPath: o().optional().describe("Renamed and copied rows: the old path as plain text, for display only. Absent, with newPath, when either name holds a character the CLI's path display refuses (controls, bidi and format characters, default-ignorables, non-ASCII spaces, U+FFFD) or could be read as another path (a backslash, a drive prefix or leading slash, a '..' part, ' => ')."),
                newPath: o().optional().describe("The path as plain text where it differs from path: the new path of a renamed or copied row (whose path is git's rename form), or the name of a row git quoted (a name with non-ASCII or special characters); for display only, never to join to a directory. Absent otherwise, and for the names previousPath lists.")
            })),
            hunks: T(u({
                path: o(),
                hunks: T(fY())
            })),
            skippedLarge: T(o()).describe("Paths whose diff text exceeded the per-file or aggregate size cap, so they have stats but no hunks."),
            restricted: T(o()).describe("Paths whose hunk content was withheld by the diff surface's content-provenance gate: read-permission rules (same gate as read_file) plus this surface's stricter file-identity checks (symlink and hardlinked worktree files are refused here even where read_file serves them). Stats remain visible."),
            source: Ue([
                u({
                    kind: A("working-tree")
                }),
                u({
                    kind: A("branch"),
                    baseBranch: o(),
                    baseRef: o()
                })
            ])
        }).nullable()
    }).describe("@internal Workspace git diff for the thin-client /diff dialog. diff is null when the workspace is not a git repo or is in a transient git state (merge/rebase/cherry-pick). Paths in skippedLarge carry no hunks entry at all — membership alone marks them as too large. An entirely empty hunks array with non-empty perFileStats is not by itself a failure signal: it is the normal shape when all changes are untracked (stats only — git diff emits no hunks for untracked files) or every file was withheld, and can also occur when the hunks fetch transiently failed and only stats are available."));
const Fo = p(()=>u({
        subtype: A("get_plan")
    }).describe("@internal Read the session's current plan-mode plan. Unlike read_file, the caller does not need to know the plan file's path — the worker resolves its own plan slug. Never creates a plan slug or file."));
const SY = p(()=>u({
        exists: M(),
        content: o().optional().describe("Plan markdown. Present iff exists is true."),
        path: o().optional().describe("Absolute plan-file path on the session filesystem. Present when exists is true, except on connections that persist frames server-side (the local bridge-worker lane omits it; the plan content still ships).")
    }).describe("@internal The current plan, or exists:false when none has been written."));
const Yo = p(()=>u({
        subtype: A("seed_read_state"),
        path: o(),
        mtime: E()
    }).describe("Seeds the readFileState cache with a path+mtime entry. Use when a prior Read was removed from context so Edit validation would fail despite the client having observed the Read. The mtime lets the CLI detect if the file changed since the seeded Read — same staleness check as the normal path."));
const Wo = p(()=>u({
        subtype: A("hook_callback"),
        callback_id: o(),
        input: J6e(),
        tool_use_id: o().optional(),
        issued_at: E().int().nonnegative().optional().describe("@internal Epoch milliseconds on the sender's clock when this request was issued — informational only: a device client judges staleness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by this value against its own clock, and answers a stale delivery fail-safe (a guard answers 'retry') rather than leaving it unanswered. Optional and additive on the public hook_callback wire; hosts that do not know it ignore it."),
        deadline_ms: E().int().positive().optional().describe("@internal How long after issued_at, in milliseconds, the sender waits before proceeding without an answer. Lets a device client skip or stop work whose answer can no longer be heard. Absent = no deadline known. Optional and additive on the public hook_callback wire.")
    }).describe("Delivers a hook callback with its input data."));
const Cy = "[A-Za-z0-9][A-Za-z0-9._-]{0,63}";
const zy = "[A-Za-z]{1,64}";
const me = new RegExp(`^${Cy}$`);
const Oy = new RegExp(`^${zy}$`);
const Eo = new RegExp(`^${Cy}/${zy}/\\d{1,4}$`);
const $o = /^[0-9a-f]{64}$/;
const fbo = /^[A-Za-z0-9+/]*={0,2}$/;
const bY = /^[^\p{Cc}\p{Cf}\u2028\u2029]+$/u;
const Sy = 4096;
const TY = p(()=>u({
        id: o().regex(Eo).describe(`@internal "<instance_id>/<event>/<index>", index being the entry's position within that event's forwarded list at capture. The schema checks the shape only; matching the instance_id prefix to the request is the receiver's job. Echoed back verbatim as hook_callback.callback_id; never reused for a different hook within one instance.`),
        event: o().regex(Oy).describe("@internal Hook event name. A plain string rather than the HookEvent enum so an older worker tolerates an event it does not know: it ignores that entry instead of rejecting the whole registration."),
        matcher: o().max(512).optional().describe("@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."),
        kind: U([
            "command",
            "http"
        ]).describe("@internal Hook kind on the device. prompt, agent and mcp_tool hooks are never forwarded; a new kind is a deliberate schema change."),
        timeout_s: E().positive().max(600).optional().describe("@internal The hook's own timeout in seconds, when configured; the worker derives its deadline from it."),
        source: U([
            "user",
            "local",
            "flag"
        ]).describe("@internal Settings source on the device: user settings, the checkout's settings.local.json, or a --settings file."),
        has_condition: M().optional().describe("@internal The entry carries an if-condition, evaluated on the device; the condition text never leaves it."),
        target_pinned: M().optional().describe("@internal The device digested the hook's script at start-up and re-verifies those bytes before each run; the digest itself is not sent."),
        author_opt_in: M().optional().describe("@internal Runs at the hook author's explicit request (cloud: 'device' in its settings entry): it starts in the project folder, and its command may not be pinned to a script the session cannot change.")
    }).describe("@internal One forwarded device hook: identity and routing data only — never a command line, URL, path, header or condition text."));
const AY = p(()=>u({
        template: o().regex(me).describe("@internal Built-in template id, looked up in the worker's own table."),
        digest: o().regex($o).describe("@internal Lowercase hex sha256 of the template script version enabled on the device; the worker installs the template only when this equals its table's digest."),
        event: o().regex(Oy).describe("@internal Hook event name, as for inventory entries."),
        matcher: o().max(512).optional().describe("@internal The settings matcher, verbatim, compiled by the worker exactly like a settings matcher; absent = all."),
        timeout_s: E().positive().max(600).optional().describe("@internal Timeout in seconds, when configured.")
    }).describe("@internal A vetted template the device has enabled, to run IN the container. Carries nothing executable: the worker derives the file and the command line from its own table."));
const wY = p(()=>u({
        after_edit: E().int().nonnegative().optional().describe("@internal PostToolUse / PostToolUseFailure hooks whose matcher can only match file-writing tools. The worker never forwards after-edit events for those tools (the device copy of the file is stale or absent), so such a hook could never fire and is not sent."),
        kind_unsupported: E().int().nonnegative().optional().describe("@internal Hooks of a kind that is never forwarded: prompt, agent, mcp_tool."),
        plugin: E().int().nonnegative().optional().describe("@internal Hooks contributed by plugins, which this version does not forward."),
        managed: E().int().nonnegative().optional().describe("@internal Hooks from managed (policy) settings, which this version does not forward."),
        other: E().int().nonnegative().optional().describe("@internal Every other hook not sent: on an event that is not forwarded, a duplicate of one already listed, or beyond a cap.")
    }).describe("@internal Counts of this device's hooks that were not forwarded, for the session line. Each such hook is counted in exactly one field, the first that applies in this order: plugin or managed (by its source); other, when its event is not forwarded at all; kind_unsupported; after_edit; other again for anything else, such as a duplicate or an entry beyond a cap. Absent fields mean zero."));
const F1n = p(()=>u({
        subtype: A("register_device_hooks"),
        instance_id: o().regex(me).describe("@internal Minted once per device client process and stable across its reconnects and re-registrations; the owner key in the worker's store and the first segment of every hook id."),
        display_name: o().min(1).max(64).regex(bY).optional().describe("@internal What the session line calls the device: no control, format or line-separator characters (receivers still sanitize before display); the worker falls back to instance_id when absent."),
        lease_s: E().int().min(60).max(3600).optional().describe("@internal Requested lease in seconds (default 600); the worker caps it and returns the effective expiry. Re-send the request to renew; a repeat from the same instance replaces its entries."),
        worker_epoch: E().int().min(1).optional().describe("@internal The worker life the device believes it addresses; a mismatch is answered with a stale_worker_epoch error."),
        hooks: T(TY()).max(128).describe("@internal The forwarded inventory. An empty array together with an empty templates array unregisters this instance; both keys are required so an omission is a parse error, not an unregister."),
        templates: T(AY()).max(8).describe("@internal Vetted templates enabled on the device, to run in the container."),
        held: wY().optional().describe("@internal How many of its hooks the device did not forward and why; informational, absent = none reported.")
    }).describe("@internal Registers this device's hooks with the worker — unrelated to device registration or bind. Sent by a claude --cloud device client after it attaches to a cloud session (never as an initial event of the create): names, by opaque id, which of the user's own hooks the worker should ask this device to run over hook_callback, and which vetted templates to run in the container. The worker rejects requests over 64 KiB with invalid_registration. Error replies use the standard error response with a message that starts with a code token and a colon: hook_forwarding_disabled (off for this session; not retryable, nothing stored), hook_forwarding_not_ready (retry after a short backoff), invalid_registration, or stale_worker_epoch (re-read the worker epoch and re-send). A worker that predates the request answers with the usual unsupported-subtype error."));
const by = p(()=>u({
        template: o().regex(me),
        status: U([
            "installed",
            "awaiting_upload",
            "interpreter_unavailable",
            "install_failed",
            "unknown_template",
            "version_mismatch",
            "event_not_allowed",
            "disabled"
        ])
    }).describe("@internal Outcome for one requested template."));
const Ty = String.raw`(?!\.\.?(?:\/|$))[^/\\\p{Cc}\p{Cf}\u2028\u2029]+`;
const Ay = new RegExp(`^\\/(?:${Ty}(?:\\/${Ty})*\\/?)?$`, "u");
const wy = p(()=>({
        project_dir: o().max(Sy).regex(Ay).describe("@internal The container's project root, for path translation on the device: absolute, no '.' or '..' segments, no backslash, no control or format characters. Untrusted by the device all the same, which must containment-check every translated path."),
        cwd: o().max(Sy).regex(Ay).describe("@internal The container's working directory at registration time, same shape as project_dir; may differ from it."),
        worker_epoch: E().int().min(1).describe("@internal The worker life that answered.")
    }));
const kct = p(()=>Wr("status", [
        u({
            status: A("registered"),
            ...wy(),
            lease_s: E().int().min(1).max(3600).describe("@internal Effective lease in seconds after capping."),
            lease_expires_at: fO().describe("@internal ISO 8601 UTC instant the lease expires (no offset), as Date.prototype.toISOString renders it."),
            accepted: E().int().nonnegative().describe("@internal Forwarded entries installed as callbacks."),
            ignored: E().int().nonnegative().describe("@internal Entries not installed: event not forwarded by this worker, unknown kind, malformed, or duplicate id."),
            ignored_ids: T(o().regex(Eo)).max(128).optional().describe("@internal Ids of the ignored entries."),
            templates: T(by()).max(8).describe("@internal One row per requested template."),
            replaced_owner: o().regex(me).optional().describe("@internal instance_id of a different device client this registration displaced, if any."),
            away_since: fO().optional().describe("@internal Present when THIS instance was being skipped as away (two forwarded runs went unanswered in a row) until this registration cleared it: the ISO 8601 UTC instant the worker stopped asking it. Absent for a first registration, a device that was never away, and a registration that displaces a different device.")
        }),
        u({
            status: A("unregistered"),
            ...wy(),
            ignored_ids: T(o().regex(Eo)).max(128).optional().describe("@internal Ids of the ignored entries."),
            templates: T(by()).max(8).optional().describe("@internal One row per requested template.")
        })
    ]).describe("@internal Success payload answering register_device_hooks: 'registered' while this instance holds entries and a lease; 'unregistered' when an empty inventory removed them, or when nothing it sent could be held (every entry ignored, no template stored or installed) — then ignored_ids and templates say why."));
const U1n = p(()=>u({
        subtype: A("upload_device_hook_template"),
        template: o().regex(me).describe("@internal Built-in template id."),
        digest: o().regex($o).describe("@internal Lowercase hex sha256 of the decoded content; must be one of the worker's own table digests for this template."),
        content_base64: o().max(360000).regex(fbo).describe("@internal The template script bytes, base64; decoded size must not exceed the template's cap (at most 256 KiB)."),
        worker_epoch: E().int().min(1).optional().describe("@internal The worker epoch the sender believes it is talking to; a mismatch is refused so the device starts over against the new worker.")
    }).describe("@internal Sent by a claude --cloud device client BEFORE register_device_hooks for each vetted template it wants run in the container; a register that arrives first reports awaiting_upload and the device registers again after uploading. The worker keeps the bytes for its own life only after hashing them against its own table; nothing executable is taken from the wire. Idempotent. Errors: hook_forwarding_disabled | hook_forwarding_not_ready (retryable) | stale_worker_epoch | invalid_upload | template_refused: unknown_template, version_mismatch, too_large or digest_mismatch."));
const yY = p(()=>u({
        template: o().regex(me),
        digest: o().regex($o),
        status: U([
            "stored",
            "already_stored"
        ])
    }).describe("@internal Success payload answering upload_device_hook_template."));
const B1n = p(()=>u({
        subtype: A("remote_tools_announce"),
        instance_id: o().regex(me).describe("@internal Minted once per client process, stable across reconnects and re-announces: the owner key on the worker, which addresses its remote_tool_call requests to it. Same alphabet as register_device_hooks.instance_id."),
        worker_epoch: E().int().min(1).optional().describe("@internal The worker life the client believes it addresses; a mismatch is answered with a stale_worker_epoch error."),
        host: ue(o(), oe()).describe("@internal The machine's description in the remote-tool protocol's HostDescription shape (name, kind, platform, working_dir, project_sync, limits, claude_code_version, epoch — epoch is required on this channel); parsed by that protocol, not here."),
        tools: T(ue(o(), oe())).max(16).describe("@internal The native tools the machine serves, one entry each: {name (Bash, Read, Write, Edit), refused_input_fields, protocol_versions, description?, input_schema?} in the remote-tool protocol's AnnouncedTool shape. Entries are validated one by one by that protocol (a bad one is reported back in ignored_tools, the rest stand), so they are not typed here."),
        passthrough: T(ue(o(), oe())).max(1024).describe("@internal The machine's own MCP tools ('<server>__<tool>'), one entry each: {name, local_name, description?, input_schema, annotations?, hints?} in the protocol's AnnouncedPassthrough shape, validated one by one like tools (an entry the worker cannot present as announced, or one beyond the most it keeps, is reported back in ignored_tools; a list longer than 1024 entries is an invalid announce); a worker that adopts them presents them to the model and forwards their calls to the machine over this channel."),
        plumbing: T(o().min(1).max(64)).max(8).describe("@internal Plumbing tools the machine answers over remote_plumbing_call for the session's own machinery; never model-facing.")
    }).describe("@internal Sent by a claude --cloud client that serves tools for this session: which machine it is and which tools it serves, replacing the device-bridge tools/list announcement. Re-sent on reconnect, on worker init and when what it serves changes; all three lists empty withdraws the machine (the keys are required so an omission is a parse error, not a withdrawal) — and from an instance the worker has not heard of, says the machine serves nothing. A first-party cloud worker acts on it only when the session service stamped the event as coming from a verified device of the account (device_attestation_status VERIFIED_BY_GATE or better); an announce below that floor is dropped unanswered. Errors (message starts with the code and a colon): remote_tools_disabled, remote_tools_not_ready (retryable), stale_worker_epoch, invalid_announce."));
const RY = p(()=>u({
        status: U([
            "announced",
            "withdrawn"
        ]),
        worker_epoch: E().int().min(1).optional(),
        protocol_version: E().int().positive().nullable().describe("@internal The wire version the worker will speak with this machine, or null when they have none in common: the machine stays listed and nothing is forwarded to it."),
        passthrough_adopted: E().int().nonnegative().optional().describe("@internal Present on every acknowledgement from a worker that adopts the machine's MCP tools over this channel: how many it kept from this announce (0 when it kept none — none carried, or none it could present; those are named in ignored_tools). Absent from a worker that does not adopt them (an older one, or one with adoption switched off) and while the worker cannot read the organisation's policy yet (passthrough_declined 'pending'): the machine keeps serving them over the device bridge."),
        passthrough_declined: U([
            "policy",
            "pending",
            "unavailable"
        ]).optional().describe("@internal Why the worker adopted none of the machine's MCP tools this announce carried: 'policy' — the organisation's MCP server policy keeps the device bridge's server out of the session (passthrough_adopted is 0); 'pending' — that policy, or the server it is read against, is not known to the worker yet, so the MCP tools are left for the machine's next announce (passthrough_adopted is absent: the machine keeps the bridge for them meanwhile); 'unavailable' — this worker has no route to judge them (CCR injected no remote-devices server into the session), so it adopts none (passthrough_adopted is 0) and the machine need not re-announce for them. Absent otherwise."),
        ignored_tools: T(o()).optional().describe("@internal Announced entries the worker did not adopt, at most 32 named: an unknown native name, a malformed or duplicate entry, or an MCP tool beyond the most it keeps, whose name it could not present as announced, whose name the session service keeps for itself, or whose input schema the API cannot take."),
        worker_capabilities: T(o()).max(32).optional().describe("@internal Optional protocol features this worker reads, named only to a machine whose announce lists the matching host capability: 'still_here' — an announce marked 'still_here' is noted and nothing is taken from it. Absent from a worker that reads none of what the machine listed; the machine then sends none.")
    }).describe("@internal Success payload answering remote_tools_announce."));
const ky = p(()=>_t({
        content: T(oe()),
        isError: M().optional(),
        structuredContent: ue(o(), oe()).optional(),
        _meta: ue(o(), oe()).optional()
    }));
const Xo = p(()=>u({
        subtype: A("remote_tool_call"),
        instance_id: o().regex(me).describe("@internal The announcement this call is addressed to (remote_tools_announce.instance_id). A client that did not announce under this id stays silent: another attached client may own it."),
        host: o().max(64).describe("@internal The machine's announced name; informational twin of instance_id."),
        name: o().min(1).max(256).describe("@internal The announced tool to run."),
        input: ue(o(), oe()).describe("@internal The tool's own input, without the machine argument and without the envelope; {} for an outcome query."),
        envelope: ue(o(), oe()).describe("@internal The remote-tool protocol's request envelope, exactly what rides under the reserved arguments key on the device bridge: a call (call id = tool_use id, the session's permission mode, expiry, and on a second leg the session's answer to the machine's question) or an outcome query by its op. call_id is the serving side's run-at-most-once key across legs, redeliveries and queries; request_id is per leg. Parsed strictly by that protocol on the client."),
        tool_use_id: o(),
        issued_at: E().int().nonnegative().describe("@internal Epoch milliseconds on the sender's clock — kept on the wire but informational only: the serving client judges lateness by how long the delivery waited on the session service's clock (the age its stream stamps on the event) against deadline_ms, never by issued_at on its own clock, and answers a late or undatable leg refused 'stale' — nothing runs — instead of leaving it unanswered. A durable catch-up into a fresh client still never runs an old call; the age check refuses it."),
        deadline_ms: E().int().positive().describe("@internal How long after issued_at the worker waits for the answer before proceeding without it.")
    }).describe("@internal One leg of a tool call this session forwards to the attached machine that announced it serves the tool: the first leg, the approval leg (envelope.approval), a detached decline, or an outcome query (envelope.op = 'outcome_of'). Answered with a control_response whose success payload is the served CallToolResult; cancelled with control_cancel_request. An error-shaped control_response is not an answer (an older attached client error-replies subtypes it does not know); the worker keeps waiting."));
const vY = p(()=>u({
        result: ky().describe("@internal The served CallToolResult for this leg, verbatim as the machine's serving code produced it; structuredContent['anthropic/remoteToolExecution'] is the remote-tool protocol's ResultEnvelope (completed, refused, failed, needs_approval, acknowledged, in_progress), parsed by the worker with that protocol.")
    }).describe("@internal Success payload answering remote_tool_call: the result under one fixed key, never spread at the top level."));
const Qo = p(()=>u({
        subtype: A("remote_plumbing_call"),
        instance_id: o().regex(me).describe("@internal The announcement this call is addressed to; a client that did not announce under this id stays silent."),
        host: o().max(64).describe("@internal The machine's announced name; informational."),
        name: o().min(1).max(64).describe("@internal An announced plumbing tool."),
        args: ue(o(), oe()).describe("@internal The plumbing tool's arguments; no envelope rides with them."),
        issued_at: E().int().nonnegative(),
        deadline_ms: E().int().positive()
    }).describe("@internal One call of a plumbing tool on the attached machine, made by this session's own machinery rather than the model: no envelope and no tool_use id. Answered with a control_response whose success payload carries that tool's CallToolResult; cancelled with control_cancel_request."));
const CY = p(()=>u({
        result: ky().describe("@internal The plumbing tool's CallToolResult, verbatim.")
    }).describe("@internal Success payload answering remote_plumbing_call."));
const Jo = p(()=>u({
        subtype: A("remote_tools_probe"),
        instance_id: o().regex(me).describe("@internal The announcement being probed; other clients stay silent."),
        issued_at: E().int().nonnegative(),
        deadline_ms: E().int().positive()
    }).describe("@internal The worker's liveness check for an announced machine, sent only inside a live turn after minutes without hearing from it; a miss within deadline_ms marks the machine offline until it announces again or answers anything."));
const zY = p(()=>u({
        result: u({
            epoch: o().describe("@internal The machine's current serving epoch (its announced host.epoch).")
        })
    }).describe("@internal Success payload answering remote_tools_probe."));
const j1n = p(()=>u({
        subtype: A("remote_tools_reannounce"),
        worker_epoch: E().int().min(1).describe("@internal The asking worker's life, as the worker states it. A client ignores an ask below the newest worker epoch it has heard and never addresses its announce by this value: the announce goes to the epoch last heard, and the worker's stale_worker_epoch answer teaches the client the current one."),
        deadline_ms: E().int().positive().describe("@internal How long the worker waits for an announcement; a client that receives the request later than this after the session service stored it does nothing.")
    }).describe("@internal A replacement worker asks the attached client that serves this session's tools to announce it, when a call names a machine its roster lacks. Not addressed to an instance: the worker knows none. A client that serves the machine announces, overriding once what it believes the worker already holds; it honours one ask per epoch, another only when the announce that one made failed or went unanswered, and at most one per ten seconds, and does nothing for an ask it cannot date or read, or whose sender it would refuse a tool call from. Any other client, and a client that predates the request, does nothing or error-replies, and the worker reads no reply: it withdraws the request with control_cancel_request when its wait ends."));
const JRe = p(()=>u({
        subtype: A("turn_handoff"),
        messages: T(Ue([
            sr(),
            rr()
        ])).min(1).max(200).describe("@internal The turn so far, in conversation order: the user's message, any [assistant, tool_result] rounds already answered elsewhere, and last an assistant message (thinking blocks with their signatures, text, and the tool_use blocks to run). Every message carries a uuid, kept as the transcript line's; none of the messages, and none of the tool_use ids they hold, may already be in the conversation — the turn is appended once, whole, never merged with lines already there (except as tool_use_ids describes for a turn that runs nothing). A request that names calls to run is refused (invalid_handoff) unless its first message is a user message, not empty and not a tool_result."),
        tool_use_ids: T(o()).max(16).describe("@internal The tool_use blocks of the last message to run, each of a tool named in the turn_handoff entry of the worker external_metadata; all run in one batch, then the model continues once. May be empty, and then nothing runs and no model turn follows: with every call the turn carries answered within it (the last message holding none), the worker appends the turn as history and, once the lines are stored, echoes the last assistant message that holds a call; with stopped, the user stopped the turn before its calls ran. In both cases, when a leading part of the turn is already in the conversation from an earlier delivery, only the rest is appended."),
        stopped: A(true).optional().describe("@internal Only true, and only with an empty tool_use_ids: the user stopped this turn while its last message, an assistant message holding calls that have not run, was being handed over. The worker appends the turn, closes those calls and marks the turn exactly as when a turn of its own is stopped before a call runs, and ends it with the result a stopped turn ends with; when an earlier delivery already appended the turn, the calls are closed in place."),
        relay_marker: u({
            type: A("system"),
            subtype: A("upgrade_relay_marker"),
            uuid: o(),
            content: o()
        }).optional().describe("@internal The system line that starts the prompt-cache relay for this conversation: uuid is the line's uuid, and content is the marker, a JSON string whose anchor_line_uuid is the uuid of the first of messages; other fields of the line are ignored. Only a worker that advertises relay_marker: true in turn_handoff_available uses it, on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet. It is never a reason to refuse the turn: when the member is not such a line, or the worker does not use the marker, the request is answered as without it."),
        memory_context: u({
            uuid: o(),
            version: o().nullable(),
            content: o().nullable()
        }).optional().describe("@internal The snapshot of the user's claude.ai memory that the client showed its model with the turn's user message. Used on a request that names calls to run, or on a history request (no calls named, not stopped) if the session holds none of its messages yet: the worker writes it ahead of the first of messages, with uuid as the line's uuid, as a cowork_memory_context attachment line like those it writes for snapshots it fetches itself, and then adds no copy of that version. version and content are both strings for a snapshot, both null to withdraw an earlier one. The member is never a reason to refuse the request: one that is malformed, that has a version without content or the reverse, or whose uuid is also that of one of messages, of relay_marker or of a line the session's transcript holds, is ignored, and the turn goes on without the line."),
        message_client_platform: o().optional().describe("@internal The `anthropic-client-platform` value of the app a person sent the first of messages from. Left out when no person sent that message, as in a scheduled run. When it names one of the Remote Control apps (isRemoteControlAppPlatform) and that message is not one from another session, the worker marks the message as sent by a person, as it marks a user message that arrives with that value, so the turn counts as started by a person for the calls it runs and for those the model makes afterwards, and the turn the worker runs carries that value as its client platform, as a turn for such a user message does (per-turn telemetry, and tools that read which app the person is on). The member is never a reason to refuse the request: without it, or with any other value, the message is appended unmarked and the turn carries no platform."),
        file_names: T(u({
            file_uuid: o(),
            name: o()
        })).max(16).optional().describe("@internal Files a person attached to the conversation, each with the name the client showed its model for it, the most wanted first; at most 16. file_uuid is that of a file_attachments entry on a user message sent to this worker before the request. Only a worker that advertises file_names: true in turn_handoff_available uses the member, only on a request that names calls to run, and only when those calls run in the session's home directory: before they run, it copies each listed file it has downloaded into that directory, under that name, until a limit on time or on total size is reached, taking first the names that occur in the calls' own input. It replaces nothing then, skips a name it refuses or that the list holds twice, and, within one request, skips the further names of a file once it has found or placed one of them. If a person later sends another file under a name it placed, it puts that file's bytes in the copy's place, or removes the copy if it cannot, and only while the copy is still the file it placed, unchanged. The member is never a reason to refuse the request: a malformed one (a longer list included) is ignored whole, and the calls run whatever became of the copies."),
        safeguard_results: T(ue(o(), oe())).optional().describe("@internal The safeguard_results of the Messages API response that produced the last of messages, as its final frame gave them, when the client's request asked for the dangerous_tool_use safeguard. Used only on a request that names exactly one call to run, in a session whose tool calls the server-side classifier alone decides, and only where the worker's remote switch for it is on; a worker does not say whether it is. When the member holds a verdict on that call (a status of type evaluated), the verdict decides the call as it does a call of the worker's own request. Otherwise it is as if the member had not been sent, a malformed one included. The worker finds the verdict by the call's id, and takes it only where safeguard_tool_use, which must come with it, equals that call in the last of messages. It sees only the carried message, so whether the call was that response's first is for the client to answer for. A hook of the worker's that changes the call's input voids the verdict. Of a flagged call's explanation the worker keeps only the name in brackets of a block rule that its own build knows, when that is the whole of it, and shows it to the model, in that build's spelling, in the denial, which is stored; anything else is dropped. Once the member holds a verdict and safeguard_tool_use equals the call, a worker whose flags have not loaded may hold the call up to 3 s for them, whatever its switch says. The member itself is never appended to the conversation and never a reason to refuse the request."),
        safeguard_tool_use: u({
            name: o(),
            input: ue(o(), oe())
        }).optional().describe(`@internal Read only with safeguard_results, whose verdict is not taken without it. The name and the input object of the tool_use block that the verdict is on, as the Messages API response gave them and before any change of the client's: from a stream, the input is what the block's input_json_delta parts parse to once joined, {} if there were none. The worker takes the verdict only where the name is the same string as that of the named call in the last of messages, and the input equals that call's. The inputs are compared as parsed JSON: the order of keys and the way a number or a string is written (1 and 1.0, an escape) do not count; the order of a list, the type of a value (1 and "1"), and a key that holds null against no key do. Without the member, where it is malformed, where it holds over 20,000 values, over 1,048,576 characters of strings and keys, or over 64 levels, itself counted, or where the two calls differ, by a change the client meant included, it is as if safeguard_results had not been sent. The member is never appended to the conversation and never a reason to refuse the request.`)
    }).describe('@internal Sent by the session client to a worker that advertises turn_handoff in its external_metadata: hand over a turn whose final assistant message holds tool calls that have not run. The worker answers at once — success {status: "accepted"} (validated and queued; the messages are appended at the start of the turn that runs the calls, the last one echoed back as an assistant event before any call runs; a request that runs nothing (see tool_use_ids) for the same turn as one still queued to run replaces it), success {status: "duplicate"} (every named call is already taken by an earlier delivery or answered; nothing runs — taken, not necessarily ran; or, for a turn that runs nothing, its calls are already answered by other lines, or the same turn is already pending in that shape or running), or an error whose message starts with its code and a colon: turn_handoff_disabled, invalid_handoff, unsupported_tool, unknown_tool, recovered_by_restart (this worker restarted after the turn was appended and its recovery set the turn\'s unrun calls aside; this request will not run or close them), expired (the request names calls to run and the session service has held it for over 30 minutes, by the created_at of the frame that delivered it: the service hands a request that no worker answered to every later worker of the session; nothing is appended or taken, and a request that runs nothing is never refused for its age). Accepted calls get the permission evaluation of the worker (rules, the permission mode, can_use_tool to the client); their tool_result messages and the model continuation follow on the event stream as in any turn.'));
const OY = p(()=>u({
        status: U([
            "accepted",
            "duplicate"
        ]),
        tool_use_ids: T(o()).optional().describe("@internal The calls queued to run (status accepted).")
    }).describe("@internal Success payload answering turn_handoff."));
const Zo = p(()=>u({
        subtype: A("mcp_message"),
        server_name: o(),
        message: vy()
    }).describe("Carries one MCP JSON-RPC message for an SDK-hosted MCP server (one named in initialize.sdkMcpServers or added later with mcp_set_servers). Flows in both directions: the CLI sends it to the client to reach the in-process server, and the client sends it to the CLI to deliver that server's own messages. When the client answers, the success response carries the server's JSON-RPC reply under mcp_response; the CLI acknowledges a client-sent one with an empty success."));
const kY = p(()=>u({
        mcp_response: vy().optional().describe("The JSON-RPC response the SDK-hosted server produced for the delivered message (for a JSON-RPC notification, a response with an empty result). Present when the client answers a CLI-sent mcp_message; absent when the CLI acknowledges a client-sent one.")
    }).describe("Success payload answering an mcp_message request."));
const ea = p(()=>u({
        subtype: A("mcp_set_servers"),
        servers: ue(o(), er())
    }).describe("Replaces the set of dynamically managed MCP servers."));
const NY = p(()=>u({
        added: T(o()),
        removed: T(o()),
        errors: ue(o(), o())
    }).describe("Result of replacing the set of dynamically managed MCP servers."));
const ta = p(()=>u({
        subtype: A("reload_plugins"),
        hold_on_cache_impact: M().optional().describe("When true, the reload is not applied if applying it would change the session's tool list while the conversation's prompt cache depends on that list (the same check the interactive /reload-plugins makes before it asks for --force): the response then carries held: true and cache_impact, and the session keeps its current plugins. Default false: apply unconditionally.")
    }).describe("Reloads plugins from disk and returns the refreshed session components."));
const IY = p(()=>u({
        commands: T(Vt()),
        agents: T(Qn()),
        plugins: T(u({
            name: o(),
            path: o(),
            source: o().optional(),
            version: o().optional().describe(to)
        })),
        mcpServers: T(Xn()),
        error_count: E().int(),
        held: M().optional().describe("Present only when the request asked to hold on cache impact and this CLI ran the check. True: the reload was not applied, the lists above describe the session as it still is, and cache_impact says what applying would change. False: the check found no impact and the reload was applied. Absent: the request did not ask, or the CLI predates the option and applied the reload unchecked."),
        cache_impact: u({
            mcp_servers_added: T(o()),
            mcp_servers_removed: T(o()),
            lsp_tool_change: U([
                "adds",
                "may-add",
                "removes",
                "may-remove"
            ]).nullable()
        }).optional().describe("What applying the held reload would change in the session's tool list: plugin MCP servers it would register or drop (scoped plugin:<plugin>:<server> names, plugin-authored — validate before showing) and whether it would add or remove the LSP tool (the may- forms mean the preview could not fully see the pending plugin set). Present only with held: true.")
    }).describe("Refreshed commands, agents, plugins, and MCP server status after reload."));
const sa = p(()=>u({
        subtype: A("reload_skills")
    }).describe("Reloads skills from disk and returns the refreshed skill list."));
const MY = p(()=>u({
        skills: T(Vt())
    }).describe("Refreshed skill commands after reload."));
const ra = p(()=>u({
        subtype: A("reload_output_styles")
    }).describe("Re-reads the output-style directories from disk (a style file written mid-session is otherwise invisible until the next session) and returns the refreshed style names. Also drops the shared markdown-file scan cache, so agents, skills and routines re-read their directories on their next use."));
const PY = p(()=>u({
        available_output_styles: T(o())
    }).describe("Refreshed output style names after reload, built-in and custom, in the order the initialize response lists them."));
const na = p(()=>u({
        subtype: A("register_repo_root"),
        directory: o(),
        reload_claude_md: M().optional(),
        reload_plugins: M().optional(),
        reload_skills: M().optional()
    }).describe("Add a directory as a working-directory root and optionally reload CLAUDE.md, skills, and plugins. The directory must resolve to a strict subdirectory of cwd, or of a directory passed at launch via --add-dir / the SDK additionalDirectories option. A directory that is already a registered working directory (including a duplicate of an earlier request) is denied with an error; the registration pipeline and DirectoryAdded hooks do not re-run."));
const DY = p(()=>u({
        directory: o().describe("The registered root. A resolved absolute path — except on connections that persist frames server-side (the local bridge-worker lane echoes the request directory verbatim; the registration is still keyed on the resolved path locally).")
    }).describe("Success payload answering register_repo_root."));
const oa = p(()=>u({
        subtype: A("set_cwd"),
        path: o().describe("Target directory. Tilde-expanded and realpath-canonicalized by the CLI, exactly like an interactive /cd argument."),
        trust_accepted: M().optional().describe("Host attestation that the user explicitly accepted a trust dialog for this directory. Only send true after showing one — the CLI records the directory as trusted (the same latch /cd's own prompt writes) before relocating. Requires trusted_directory."),
        trusted_directory: o().optional().describe("Required whenever trust_accepted is true: the exact directory string from the needs_trust response being answered. This pins the attestation to the canonical path the user was shown — if the raw path canonicalizes differently by the time the re-send arrives (e.g. a symlink component changed during the dialog), nothing is latched and a fresh needs_trust carries the new canonical directory.")
    }).describe("@internal Moves the session to a new working directory — the headless twin of /cd, for SDK hosts like Claude Desktop. Runs the same validation, Cd(...) permission rules, and relocation path as the interactive command, with the trust prompt delegated to the host via the needs_trust response arm. Before the first turn the move re-anchors start-of-session state (the first request is built as for a start in the new directory, no move notice); after a turn the prefix is preserved and the move arrives as an appended notice. SessionStart hooks are never re-run by set_cwd (those of the launch directory already ran and their output stays in the session); a host that starts the process before its directory is known should use --await-claim and claim_session, which run them in the bound directory instead. Rejected while a turn is in flight."));
const xY = p(()=>Wr("status", [
        u({
            status: A("ok"),
            cwd: o().describe("Canonical (realpath) working directory the session now runs in."),
            changed: M().describe("False when the target already was the working directory — a successful no-op with no side effects."),
            transcript_relocated: M().describe("True when the transcript lives in the project slot derived from cwd (the normal case, and the no-op case). False only on the documented edge where the move completed but the transcript move failed AND the rollback chdir failed — a cwd-derived resume lookup will then miss the session.")
        }),
        u({
            status: A("needs_trust"),
            trust_root: o().optional().describe("Present when `directory` sits inside a git repository whose canonical root differs from it (a subdirectory or a linked worktree). Accepting trust grants that whole repository — every subdirectory and linked worktree of the root — so the trust dialog should name this root alongside `directory`. Informational only: the attestation echo still pins `trusted_directory` to `directory`. Vetted by the same visible-glyph rule as `directory`; a canonical root that fails it is omitted rather than carried."),
            directory: o().describe("Canonical target directory. Nothing changed; show a trust dialog for exactly this string and, on accept, re-send with trust_accepted: true and trusted_directory echoing it verbatim. Safe to render verbatim in the dialog, by construction: every character is a visible, space-distinguishable glyph. Targets whose canonical path contains control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points are rejected (reason: unsafe_path) before this arm can carry them.")
        }),
        u({
            status: A("rejected"),
            reason: U([
                "not_found",
                "not_a_directory",
                "blocked_by_rule",
                "busy",
                "unsafe_path"
            ]).describe("unsafe_path: the target's canonical path contains characters that do not render as visible, space-distinguishable glyphs — control (Cc), format (Cf), default-ignorable, line/paragraph-separator (Zl/Zp), non-ASCII-space Zs, or braille-blank code points; rejected fail-closed before the trust round-trip, and the offending path is never echoed back."),
            message: o().describe("Human-readable, ANSI-free explanation.")
        })
    ]).describe("@internal Result of a set_cwd request. Every non-ok outcome leaves the working directory unchanged — but trust may already have been durably recorded when the request carried a valid attestation (a busy rejection or relocation failure after the latch does not unlatch it; the consent was for the directory, not the attempt). Internal failures (e.g. the transcript move failed and was rolled back) arrive as a control_response error instead."));
const W1n = p(()=>u({
        subtype: A("claim_session"),
        cwd: o().describe("The session's working directory. Tilde-expanded and realpath-canonicalized; treated exactly like the cwd a process is spawned in (no trust prompt, no Cd(...) rule check) — the host chose it, as it chooses a spawn cwd."),
        env: ue(o(), o()).optional().describe("Per-session environment additions. Only keys on the claim allow-list are accepted (keys the process has already consumed — config dir, base URL, proxy/TLS, provider, telemetry, entrypoint — must be part of the spare's spawn env); any other key rejects the claim and leaves the spare parked."),
        additional_directories: T(o()).optional().describe("Extra directories the session may access, as --add-dir."),
        permission_mode: o().optional().describe("Session permission mode, as --permission-mode. Part of the claim (not a follow-up set_permission_mode) so that a mode the process cannot take — bypassPermissions on a spare spawned without --allow-dangerously-skip-permissions, a mode this build does not know, one the claimed directory's settings disable — refuses or fails the claim instead of letting the first turn run under the spare's mode."),
        system_prompt: T(o()).optional().describe("As initialize.systemPrompt."),
        append_system_prompt: o().optional().describe("As initialize.appendSystemPrompt."),
        agents: ue(o(), oe()).optional().describe("As initialize.agents."),
        title: o().optional().describe("As initialize.title."),
        sdk_mcp_servers: T(o()).optional().describe("The session's final set of in-process SDK MCP server names. Diffed against the set registered while parked: new names are connected, missing ones disconnected. Omitted: the parked set stays."),
        include_initialize: M().optional().describe("When true the ok response also carries the payload an initialize response would (commands, agents, models, account …) computed for the claimed directory, for hosts that render them."),
        workspace_trust: u({
            accepted: M(),
            directory: o()
        }).optional().describe("As initialize.workspaceTrust, for a claimed spare: the host's attestation that the user accepted a trust dialog for the session's folder, judged against the claimed cwd once the spare has moved there, by the same rule (honored only from the process that owns the CLI's stdin, and only when `directory` resolves to that folder's trust key). A spare's own initialize arrives in its parking directory and records nothing, so a host that attests sends it here. workspace_trust_recorded in the response (and in the returned initialize payload) reports the outcome.")
    }).describe("@internal Binds a parked spare (a process started with --await-claim in a neutral directory with the host-level options) to its session: relocates it to cwd as if it had been spawned there, applies the per-session prompt options and in-process MCP server set, starts the SessionStart hooks, and registers the session. Model, thinking budget and flag-settings overlays are not claim fields: send set_model / set_max_thinking_tokens / apply_flag_settings right behind the claim; the control loop applies them in order before it reads the first message. A set_model that arrives before the first message is applied the way --model is at start-up: it writes no /model entries to the transcript and makes no extra API call to confirm a model id the local checks accept. Accepted once, only on a parked spare, only before any turn. A request that fails validation is refused before anything is touched and leaves the spare parked; a failure after that point leaves the spare unusable (discard it)."));
const LY = p(()=>u({
        status: A("ok"),
        cwd: o().optional().describe("Canonical working directory the session now runs in (omitted when the canonical path carries invisible or non-printing characters, which are never echoed)."),
        session_id: o(),
        parked_ms: E().optional().describe("How long the spare was parked before this claim."),
        sdk_mcp_settled: M().describe("Whether the in-process SDK MCP handshakes registered while parked had completed when the claim arrived (false: the first turn still waits for them)."),
        initialize: ue(o(), oe()).optional().describe("Present when include_initialize was true: the initialize-shaped payload for the claimed session."),
        workspace_trust_recorded: M().optional().describe("As initialize's workspace_trust_recorded: present when the claim came from the process that owns the CLI's stdin and carried workspace_trust with accepted true and an absolute directory; true when the claimed folder is now recorded as trusted (or already was), false when the attestation was not honored.")
    }).describe("@internal Result of a successful claim_session. Failures arrive as a control_response error whose message starts with a reason token (not_a_spare, already_claimed, busy, turn_started, env_key_not_claimable:<KEY>, cwd_not_found, cwd_not_a_directory, …); the spare stays parked after any of them."));
const aa = p(()=>u({
        subtype: A("mcp_reconnect"),
        serverName: o()
    }).describe("Reconnects a disconnected or failed MCP server."));
const ia = p(()=>u({
        subtype: A("mcp_toggle"),
        serverName: o(),
        enabled: M()
    }).describe("Enables or disables an MCP server."));
const la = p(()=>u({
        subtype: A("mcp_read_resource"),
        serverName: o().describe("Server name, as mcp_status reports it (not normalized)."),
        uri: o().describe("The resource to read. Must use the ui:// scheme; any other URI is refused.")
    }).describe('Reads one MCP Apps (SEP-1865) UI resource — a `ui://` URI, typically the `_meta.ui.resourceUri` a tool declares — from a connected MCP server the CLI itself dialed, with `resources/read`, for a host that renders it. Read-only and no model turn. The reply is untrusted third-party content (HTML): render it sandboxed. SDK-type MCP servers (config.type === "sdk") are rejected — they are caller-provided, so the caller can read them directly. Errors name the cause: a non-ui:// URI, an unknown server, a server that managed policy blocks, that is disabled or that the project has not approved (the refusals mcp_reconnect gives), a server that is not connected (failed, pending or needs-auth: send mcp_reconnect; a connected server, or one still listed from the discovery cache, is read through the same connect path a tool call takes), a response over the size limit, or the server\'s own resources/read error. Refused on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker) and by the client of a cloud-hosted session. Advertised as `mcp_read_resource_v1` in system/init.capabilities.'));
const UY = p(()=>u({
        contents: T(u({
            uri: o(),
            mimeType: o().optional(),
            text: o().optional(),
            blob: o().optional().describe("Base64, for a binary item."),
            _meta: ue(o(), oe()).optional().describe("The content item's own `_meta` as the server sent it (MCP Apps puts the resource's `ui.csp` and `ui.permissions` here), minus keys under the CLI-reserved `com.anthropic/` prefix.")
        }))
    }).describe("The server's resources/read result for an mcp_read_resource request."));
const ca = p(()=>u({
        subtype: A("set_mcp_permission_mode_override"),
        serverName: o(),
        mode: ce().nullable(),
        askForTools: T(u({
            name: o().regex($nn)
        })).max(hHt).nullish().describe("@internal With mode 'default': tools of this server, named without the mcp__<server>__ prefix (a name sent with it is stored without it; the 64-character limit applies to the name as sent), that must ask even where the tool would otherwise allow itself (today only Claude in Chrome's safe permissionless tools, e.g. tabs_context_mcp). Held beside the pin: a clear, an 'auto' pin, or a pin sent without this member (or with null or an empty list) removes the list, silently. A list of the wrong shape is refused and changes nothing.")
    }).describe("@internal Pin (or clear, with mode:null) an MCP server's per-tool permission-mode override. Tighten-only over this channel: only 'default', 'auto', or null are accepted (clampControlChannelOverride); any other mode is rejected without changing state. The override substitutes for the session mode at every per-tool engine decision (effectiveModeForTool) — and only when the session mode would already auto-allow — so e.g. a server can be held at 'default' or routed through the auto-mode classifier under global bypassPermissions."));
const yy = ()=>o().regex(/^[A-Za-z0-9-]{1,64}$/);
const z1n = p(()=>u({
        subtype: A("set_chrome_browser_hints"),
        preferredDeviceId: yy().nullable().optional(),
        localDeviceIds: T(yy()).max(32),
        hostPlatform: U([
            "darwin",
            "win32",
            "linux"
        ]).optional()
    }).describe("@internal The host's view of which Claude in Chrome browser this session should use when several are connected to the account: `preferredDeviceId` is the browser its user picked last on that computer, `localDeviceIds` the relay device ids it knows to be running on that computer right now, `hostPlatform` that computer's OS (for the weaker same-OS label). Session memory only, never persisted; the built-in claude-in-chrome server reads them as its persisted pick and its on-this-computer set, so it defaults to that browser instead of asking. Hints only: nothing is selected unless it is in the live relay roster, and an empty list clears them."));
const G1n = p(()=>u({
        subtype: A("set_prompt_suggestions_paused"),
        paused: M()
    }).describe("@internal Pauses (true) or un-pauses (false) the session's prompt suggestions at runtime, for a host whose composer is not on screen: while paused, no turn end starts a suggestion, and the first turn end after paused is set back to false does. The state is one boolean in this CLI process, on top of the initialize request's promptSuggestions option and the user's own setting, neither of which it changes: a respawned or resumed session starts unpaused, so the host must send it again, and with two clients attached one client's pause applies to both. Acknowledged with an empty success; a CLI build where this is not yet enabled acknowledges and keeps generating, and an older CLI answers an unknown-subtype error."));
const da = p(()=>u({
        subtype: A("stop_task"),
        task_id: o()
    }).describe("Stops a running task."));
const ha = p(()=>u({
        subtype: A("background_tasks"),
        tool_use_id: o().optional().describe("When set, backgrounds only the task whose originating tool_use block has this id. When omitted, backgrounds all foreground tasks (Ctrl+B semantics).")
    }).describe('Backgrounds in-flight foreground tasks (Bash commands and subagents). With tool_use_id, targets the single task started by that tool_use block; without it, backgrounds all foreground tasks — the control-request equivalent of pressing Ctrl+B in the terminal. Each blocking tool call returns immediately with a "running in the background" tool_result and the turn continues; the task keeps running and emits a task_notification when it settles.'));
const VY = p(()=>u({
        backgrounded: M().optional().describe("Present only when the request named a tool_use_id: whether a matching foreground task was found and backgrounded. Empty object when all foreground tasks were backgrounded.")
    }).describe("Success payload answering background_tasks."));
const ua = p(()=>u({
        subtype: A("get_task_output"),
        task_id: o().describe("A shell or Monitor task of this session, running or ended: the task_id from task_started or background_tasks_changed.")
    }).describe("Reads the end of one background shell or Monitor task's output: at most the last 8 KiB the command wrote, the same tail the terminal's /tasks detail view reads. Read-only and no model turn; a host polls it while the task runs, and can read it once more after the task ends. The output is whatever the command printed, escape sequences included: render it as plain text. Refused for a task_id that is neither a shell or Monitor task of this session nor shaped like one (an ended task's id whose file is gone reads as empty), and on a lane that redacts what it persists (a Remote Control bridge worker, a tenant worker)."));
const jY = p(()=>u({
        output: o().describe("The end of the output, decoded as UTF-8; empty when the command has written nothing yet."),
        total_bytes: E().describe("The size of the whole output in bytes."),
        truncated: M().describe("Whether output holds only the end of a longer output (the last 8 KiB).")
    }).describe("Success payload answering get_task_output."));
const _a = p(()=>u({
        subtype: A("apply_flag_settings"),
        settings: ue(o(), oe())
    }).describe("Merges the provided settings into the flag settings layer, updating the active configuration."));
const ma = p(()=>u({
        subtype: A("get_settings")
    }).describe("Returns the effective merged settings and the raw per-source settings."));
const ga = p(()=>u({
        subtype: A("update_settings"),
        source: U([
            "localSettings",
            "userSettings"
        ]).describe("Which settings file to write: the project's local settings file, where /config's writes land, or the user's settings file, which takes effortLevel only."),
        settings: ue(o(), oe())
    }).describe("Writes settings through the CLI's own writer. For localSettings, merges the given keys into the project's local settings file (canonical store root, gitignore upkeep, hardened write) and live-applies them — the same path /config uses; allowlist: outputStyle. For userSettings, takes effortLevel only and saves it as the default for the session's current model, under modelSettings as /effort saves it ('max' is session-only and is not written; the running session's level is not set here — send apply_flag_settings for that). Unlike apply_flag_settings, which only touches the session-scoped flag layer. Each file feeds hook and permission-rule loading, so each allowed key is a security decision. String values only (key deletion is not supported); refused on remote transports and in sessions whose --setting-sources exclude the target source."));
const qY = p(()=>u({
        effective: ue(o(), oe()),
        sources: T(u({
            source: U([
                "userSettings",
                "projectSettings",
                "localSettings",
                "flagSettings",
                "policySettings"
            ]),
            settings: ue(o(), oe())
        })).describe("Ordered low-to-high priority — later entries override earlier ones."),
        applied: u({
            model: o(),
            effort: U([
                "low",
                "medium",
                "high",
                "xhigh",
                "max"
            ]).nullable(),
            advisor: o().nullable().optional().describe("Advisor model that will be attached to API requests, after enablement, allowlist, and pairing validation. Null when none will be attached; absent on workers that predate the field."),
            ultracode: M().optional().describe("Whether ultracode (standing dynamic-workflow orchestration, at any effort level) is active for the session. Set per session via the `ultracode` settings key (--settings or apply_flag_settings)."),
            ultracodeRequested: M().optional().describe("Whether ultracode is requested for the session (the `ultracode` settings key or /effort ultracode), whether or not it can take effect (see `ultracodeAvailable`). `ultracode` reports whether it is in effect."),
            ultracodeAvailable: M().optional().describe("Whether ultracode can be turned on for the session: dynamic workflows are enabled and the model supports it. Hosts should offer an Ultracode control only while this is true.")
        }).optional().describe("Runtime-resolved values after env overrides, session state, and model-specific defaults are applied. Unlike `effective` (disk merge), these reflect what will actually be sent to the API."),
        errors: T(nr()).optional().describe("Settings parse and validation errors. When non-empty, the listed files were skipped during the merge above — their settings are not reflected in `effective` or `sources`."),
        remote_control_policy_lock_reason: o().optional().describe("@internal Why org policy or managed settings lock `remoteControlAtStartup`; absent when allowed. Fails closed while the policy is unverified.")
    }).describe("Effective merged settings plus raw per-source settings in merge order."));
const fa = p(()=>u({
        subtype: A("get_hooks_listing")
    }).describe("Returns the hooks listing the CLI's read-only /hooks menu renders: settings-file, session, and plugin hooks grouped by event and matcher, with display-ready strings (control characters revealed) and the policy and safe-mode state the menu banners on. A snapshot at request time; hosts re-request when their surface opens."));
const GY = p(()=>u({
        events: T(u({
            name: o().describe("Hook event name."),
            summary: o().describe("One-line summary, as the /hooks event list shows."),
            supportsMatcher: M().describe("Whether hooks on this event can carry a matcher."),
            hookCount: E().describe("Number of listed hooks.")
        })).describe("Events that have at least one listed hook, in the /hooks menu’s lifecycle order."),
        hooks: T(u({
            event: o(),
            matcher: o().describe("Matcher with control characters revealed; '' when the entry has none."),
            source: o().describe("Raw source name (userSettings, sessionHook, pluginHook, …)."),
            sourceLabel: o().describe("User-facing source description."),
            pluginName: o().optional(),
            type: o().describe("Hook type (command, prompt, agent, http, mcp_tool, …)."),
            displayText: o().describe("List-row label: statusMessage when set, else the identity text; one line, control characters revealed."),
            commandText: o().describe("Identity text — the literal command/prompt/URL that runs, control characters revealed."),
            contentLabel: o().describe("Label for commandText (Command, Prompt, URL, …)."),
            condition: o().optional().describe("If-condition, revealed, when set."),
            timeout: E().optional().describe("Timeout in seconds."),
            statusMessage: o().optional(),
            runsOnce: M().optional(),
            runsInBackground: M().optional(),
            disabled: A(true).optional().describe("True when the session's mode or policy keeps this hook from running (the policy block and safeMode/bareMode say why); absent on rows that run."),
            editable: u({
                matcher: o(),
                config: ue(o(), oe()),
                headersRedacted: A(true).optional()
            }).optional().describe("The entry as stored (raw matcher, '' when none, and raw hook object; no display escaping) for a host's edit form and as the target it names to `claude edit-hook`. Only on rows from a settings file this session reads and may write. HTTP header values are blanked (headersRedacted); a replace that sends no headers keeps the stored ones.")
        })).describe("One row per listed hook: events in lifecycle order, matchers in the menu’s priority order."),
        eventCatalog: T(u({
            name: o(),
            summary: o(),
            supportsMatcher: M()
        })).describe("Every hook event in lifecycle order (name, the /hooks summary, whether its hooks take a matcher), for an add-hook form."),
        policy: u({
            disabledByPolicy: M().describe("Managed disableAllHooks — nothing runs at all."),
            managedOnly: M().describe("Managed allowManagedHooksOnly — non-managed hooks are blocked and managed hooks are intentionally not listed."),
            pluginOnly: M().describe("Managed strictPluginOnlyCustomization locks the hooks surface."),
            allDisabled: M().describe("Effective disableAllHooks, whatever source set it."),
            policyHookCount: E().describe("Hooks configured in managed settings (they run even under a non-managed disableAllHooks)."),
            policyUnreadable: A(true).optional().describe("Present when a managed settings source exists but could not be read: what the organization configured is unknown, so edit_hook refuses every edit (fail-closed) and a host locks its editing controls, as it does under the three locks above.")
        }),
        safeMode: u({
            managedHooksStillApply: M(),
            exitHint: o().describe("How to leave safe mode, per its activation source.")
        }).optional().describe("Present only when the session runs under --safe-mode."),
        bareMode: u({
            exitHint: o().describe("How to leave bare mode, per its activation source.")
        }).optional().describe("Present only under --bare / CLAUDE_CODE_SIMPLE with the hooks surface gated off: settings-file, flag, policy, and plugin hooks never fire there; session hooks still run."),
        errors: T(nr()).optional().describe("Settings files skipped by the merge — their hooks are neither listed nor running.")
    }).describe("The hooks listing the CLI's /hooks menu renders, with display-ready strings."));
const Ea = p(()=>u({
        subtype: A("list_permission_rules")
    }).describe("Requests the session's live permission rules and workspace directories — the same data /permissions lists in the terminal: rules from settings files plus session-only approvals, slash-command grants, and --allowedTools flag rules, each with its source."));
const BY = p(()=>u({
        prefix: o(),
        emphasis: o().optional(),
        suffix: o().optional()
    }).describe(`The CLI's plain-language reading of a rule (e.g. "Any Bash command starting with npm run"), split into parts so hosts can render the rule-derived fragment the way the terminal does (bold). prefix and suffix are fixed words; emphasis is rule content \u2014 apply display hygiene (invisible-character escaping) before rendering it.`));
const HY = p(()=>u({
        behavior: U([
            "allow",
            "deny",
            "ask"
        ]),
        source: U([
            "userSettings",
            "projectSettings",
            "localSettings",
            "flagSettings",
            "policySettings",
            "cliArg",
            "command",
            "session",
            "toolsNarrowing",
            "mcpServerPolicy",
            "hostCredential"
        ]).describe("Where the rule comes from. Mirrors PermissionRuleSource (permissionRuleLookup.ts PERMISSION_RULE_SOURCES); the parity test in test/cli/headlessControl/listPermissionRules.test.ts keeps the two aligned."),
        rule: o().describe("The stored rule string VERBATIM, exactly as the session holds it. Two stored spellings that parse identically each get their own entry. Can carry invisible or control characters by design — escape at display."),
        description: BY().optional().describe("Plain-language reading of the rule; absent where the terminal shows no subtitle either."),
        editability: U([
            "persistent",
            "session",
            "readonly"
        ]).describe("Where the rule lives: 'persistent' (userSettings/projectSettings/localSettings — saved in a settings file), 'session' (cliArg/session — in memory only, for the rest of this session), or 'readonly' (policySettings/flagSettings/command and every other source — the set the terminal's /permissions treats as read-only). Informational for hosts; this request never changes rules."),
        notInEffect: M().optional().describe("Present (true) when enterprise managed settings pin allowManagedPermissionRulesOnly and this rule, read from a non-policy settings file, is ignored by the session. Such rows are readonly.")
    }).describe("One permission rule with its provenance and where it lives."));
const KY = p(()=>u({
        path: o(),
        source: o().describe("Where the directory grant came from: a settings source (e.g. 'localSettings'), 'cliArg' (--add-dir), or 'session' (/add-dir, IDE workspace folders).")
    }).describe("One additional working directory in the permission scope."));
const FY = p(()=>u({
        rules: T(HY()),
        workspaceDirectories: T(KY()),
        originalCwd: o().describe("The session's original working directory."),
        managedOnly: M().describe("True when enterprise managed settings pin allowManagedPermissionRulesOnly: the session applies policy rules only, and rules from other settings files appear with notInEffect set."),
        errors: T(nr()).optional().describe("Settings parse and validation errors, as get_settings reports them. When non-empty, the listed files were skipped — their rules are not in the session and not listed above.")
    }).describe("The session's live permission rules state, as list_permission_rules reports it."));
const YY = p(()=>u({
        state: FY()
    }).describe("Success payload of list_permission_rules."));
const Sa = p(()=>u({
        subtype: A("elicitation"),
        mcp_server_name: o(),
        message: o(),
        mode: U([
            "form",
            "url"
        ]).optional(),
        url: o().optional(),
        elicitation_id: o().optional(),
        requested_schema: ue(o(), oe()).optional(),
        title: o().optional().describe("Permission-display title from the MCP server's _meta['anthropic/permissionDisplay']. Mirrors can_use_tool.title so SDK consumers can render elicitation-driven permission prompts with structured headers instead of parsing `message`."),
        display_name: o().optional().describe("Short tool/server label from _meta['anthropic/permissionDisplay'].displayName. Mirrors can_use_tool.display_name."),
        description: o().optional().describe("Permission-display subtitle from _meta['anthropic/permissionDisplay'].description. Mirrors can_use_tool.description.")
    }).describe("Requests the SDK consumer to handle an MCP elicitation (user input request)."));
const mbo = p(()=>u({
        action: U([
            "accept",
            "decline",
            "cancel"
        ]),
        content: ue(o(), oe()).optional()
    }).describe("Response from the SDK consumer for an elicitation request."));
const ba = p(()=>u({
        subtype: A("request_user_dialog"),
        dialog_kind: o().describe('Identifier for the dialog the host should render. Open string union — new kinds may be added without bumping the protocol. A kind is only sent in sessions where some attached client declared it in initialize.supportedDialogKinds (declare exactly the kinds you can render); on multi-client transports the request still reaches every attached client. A host that receives a kind it did not declare must not answer it (an error-subtype response is discarded and the dialog stays pending) — never with {behavior: "cancelled"}, which is a real settlement treated as the user dismissing the dialog. An unanswered dialog is cancelled by the CLI after its dialog deadline.'),
        payload: ue(o(), oe()).describe("Dialog-specific data passed to the host renderer. Shape is defined per dialog_kind; the protocol transports it opaquely."),
        tool_use_id: o().optional()
    }).describe("Requests the SDK consumer to render a tool-driven blocking dialog and return the user choice. Used by tools that previously rendered Ink JSX via setToolJSX with an onDone callback."));
const cen = p(()=>u({
        behavior: U([
            "completed",
            "cancelled"
        ]),
        result: oe().optional().describe("Dialog-specific result payload. Opaque to the protocol; the caller and dialog renderer agree on the shape per dialog_kind.")
    }).describe("Response from the SDK consumer for a request_user_dialog request."));
const Ta = p(()=>u({
        subtype: A("submit_feedback"),
        description: o(),
        surface: U([
            "cli",
            "ccd",
            "ccr",
            "ide",
            "sdk",
            "cowork"
        ]).optional().describe("Where the feedback flow was initiated. Stamped into the POST body and tengu_bug_report_* analytics so the triage pipeline can distinguish CCD/CCR/IDE/Cowork reports from terminal reports landing in the same claude_cli_feedback table. Defaults to 'sdk'."),
        draft_id: o().optional().describe("UUID of a local SendFeedback draft under ~/.claude/feedback/drafts/. When set, the handler reads the stored draft, rebuilds the description via buildDraftDescription() (so the upload matches the consent form the user reviewed; the cwd is neither uploaded nor named on the form's consent line — it never uploads as metadata, though a transcript attachment, separately consented, still carries real paths), bundles the draft's own transcript per attach_transcript, and deletes the draft file on success. The caller's description/type/title/area override the stored draft when provided (user edits on the review form)."),
        type: U([
            "bug",
            "idea",
            "missing_capability"
        ]).optional(),
        title: o().optional(),
        area: o().optional(),
        attach_transcript: M().optional().describe("Whether to bundle the draft's source-session transcript with the upload. Only meaningful alongside draft_id — the non-draft path always bundles the current session (unchanged). Defaults to true."),
        save_locally: M().optional().describe("The host told the user this report is saved on this machine and nothing is sent (feedback_mode 'bundle' when it read the mode). Honored even if the mode has since become 'post' or 'share' (a mid-session sign-in): the report is bundled, never sent; a mode of 'disabled' still refuses it. Ignored with draft_id.")
    }).describe("@internal Submits a /feedback report (description + current session transcript + sanitized error log) to api.anthropic.com/api/claude_cli_feedback using the CLI's auth and redaction. Runs the same getFeedbackUnavailableReason() policy checks as the terminal /feedback command — when feedback is disabled (org policy, env kill-switch) or cannot be sent (3P provider, no Anthropic credentials) the response carries unavailable_reason instead of an error. A request carrying save_locally gets the terminal's local save instead: the report is written to a redacted zip on this machine and the response carries bundle_path, nothing sent — except where feedback is disabled, which still refuses."));
const WY = p(()=>u({
        feedback_id: o().nullable(),
        unavailable_reason: o().optional().describe("Human-readable reason /feedback is disabled in this session (3P provider, org policy, env var). When set, no submission was attempted."),
        is_zdr_org: M().optional(),
        failure_reason: o().optional(),
        status_code: E().int().optional(),
        ccshare_url: o().optional().describe("Internal share URL for the conversation. Only set in internal builds, when the upload succeeded or was handed to the host machine to finish (the page then appears once the person confirms the upload there); absent otherwise."),
        bundle_path: o().optional().describe("In 'bundle' feedback mode (SDKFeedbackMode): the absolute path of the redacted zip the report was written to on this machine, instead of being sent; feedback_id is then the bundle id. Absent in every other mode.")
    }).describe("@internal Result of a submit_feedback request. feedback_id is set on success (a sent report, or a bundle written to bundle_path); otherwise one of unavailable_reason / failure_reason explains why."));
const Aa = p(()=>u({
        subtype: A("remote_control_work_secret"),
        session_id: o().describe("The attached claude.ai session whose worker token needs renewing.")
    }).describe("@internal Request from the CLI subprocess to the SDK host for the session's re-dispatched work secret, sent when a bridge attached with `remote_control {work_secret}` needs a fresh worker token (before expiry, or during auth recovery). The host re-queues the session on its bridge environment and answers with the secret its next work poll delivers, or null when it has none yet — the CLI asks again on its own retry cadence."));
const gbo = p(()=>u({
        work_secret: o().nullable()
    }).describe("@internal The re-dispatched base64url work secret for the requested session, or null when the host has none available yet."));
const wa = p(()=>u({
        subtype: A("oauth_token_refresh")
    }).describe("@internal Request from the CLI subprocess to the SDK host for a fresh OAuth access token after a 401 with no local refresh token."));
const hbo = p(()=>u({
        accessToken: o().nullable(),
        reason: U(_o).optional().catch(undefined).describe("Why the host returned no token (only meaningful when accessToken is null). Absent from hosts that do not say. Null, unknown or malformed values degrade to undefined at parse time (the enum carries `.catch`), so a reason can never cost a delivered token and values can be added without a version bump.")
    }).describe("@internal Fresh OAuth access token returned by the SDK host getOAuthToken callback, or null when the host has no token available."));
const ya = p(()=>u({
        subtype: A("host_auth_token_refresh")
    }).describe("@internal Request from the CLI subprocess to the SDK host for a fresh provider credential after a 401 or an AWS / Google Cloud credential failure when the host owns the credential (Cowork 3P)."));
const ybo = p(()=>u({
        authToken: o().nullable(),
        materialUnchanged: M().optional()
    }).describe("@internal Fresh provider bearer token returned by the SDK host getHostAuthToken callback, or null if the credential was refreshed out-of-band. materialUnchanged is only consulted when authToken is null (out-of-band delivery) — true tells the CLI to fast-fail instead of backing off. A local AWS / Google Cloud credential-chain failure in the CLI is capped at two retries whatever the reply."));
const V1n = p(()=>u({
        subtype: A("message_rated"),
        messageUuid: o().describe("UUID of the assistant message being rated."),
        sentiment: U([
            "positive",
            "negative"
        ]).describe("User rating: positive (thumbs up) or negative (thumbs down)."),
        surface: U([
            "tool_use",
            "assistant_text"
        ]).optional().describe("Which in-conversation surface the rating came from. If omitted, logged as tool_use."),
        cleared: M().optional().describe("True when the caller is un-rating a message (clicking the same control a second time).")
    }).describe("@internal Records a per-message thumbs up/down rating. Logs tengu_message_rated with the same shape as the in-conversation rating controls so Desktop / IDE callers can surface their own native thumbs UI."));
const $Y = p(()=>u({}).describe("@internal Empty response for message_rated."));
const lr = p(()=>U([
        "AskUserQuestion",
        "UserMessage",
        "AssistantMessage",
        "ToolUse",
        "ToolResult",
        "ToolGroup",
        "ToolProgress",
        "CommandOutput",
        "Spinner",
        "TurnDuration",
        "InfoNotice",
        "SessionMode",
        "PromptHint",
        "AbovePrompt",
        "Pane"
    ]).describe("@internal A component a plugin may draw through `ui.render`: one name per render site of the hooks engine (src/plugins/functionHooks/types/render/render-component.ts)."));
const go = p(()=>Ue([
        o(),
        qE(()=>Ny())
    ]).describe("@internal One child of a render element: a string inside Text (or Box, where the engine wraps it in a Text), or a nested element."));
const Ry = p(()=>ue(o(), Ue([
        o(),
        E(),
        M()
    ])).describe("@internal Style overrides the surface applies while the pointer is over the nearest keyed Box above the element, or over any member of the hover group `scope` names (a string of the drawing plugin's; two plugins never share a group): a Box's `borderStyle`, `borderColor`, `borderDimColor`, `backgroundColor`, `display` (\"flex\", revealing a Box drawn \"none\") and the offsets of a placed Box; a Text's or a Button label's colors and styles. Plain data the engine validated; nothing that moves a sibling."));
const fo = p(()=>u({
        plugin: o(),
        handle: E().int()
    }).describe("@internal Where the element's handler lives: the plugin whose hook drew it and the handle its environment keeps the closure under, stamped by the engine as the tree left that hook. What a ui_press, ui_input or ui_select names the element by; a redraw hands out new handles."));
var Ny = p(()=>Ue([
        u({
            type: U([
                "Box",
                "Text",
                "div",
                "span",
                "b"
            ]),
            props: ue(o(), Ue([
                o(),
                E(),
                M()
            ])).optional().describe('@internal Layout props on Box (`key` makes it a hover scope; `position` "absolute" with integer `top`/`left`/`right`/`bottom` cell offsets places it over its surroundings, out of the flow), color and style props on Text, a `style` declaration string on div/span/b; the allowlisted subset the engine validated before the tree crossed.'),
            hover: Ry().optional(),
            group: u({
                plugin: o()
            }).optional().describe("@internal Whose hover group `hover.scope` names: the plugin whose hook drew the element; present only with a `scope`."),
            children: T(qE(()=>go())).optional()
        }),
        u({
            type: A("Button"),
            props: u({
                key: o(),
                label: o(),
                hotkey: o().optional(),
                action: o().optional(),
                plain: A(true).optional(),
                dimColor: M().optional(),
                variant: U([
                    "primary",
                    "secondary"
                ]).optional(),
                role: U([
                    "dismiss"
                ]).optional(),
                autoFocus: A(true).optional()
            }).describe("@internal A button: `label` its text, `key` its address (what `ui.press` carries as `element`). `hotkey` (one digit or lowercase letter) presses it while the plugin's site holds the keyboard; `action` names an engine keybinding action whose chord presses it from the prompt; `plain` draws it without chrome (`hotkey: label`, or the label alone); `dimColor` dims the label at rest; `variant` `primary` marks the main action of several, drawn as the surface draws the one to press, while `secondary` and absent are the default look (carried as the plugin wrote it, never filled in; `plain` wins over it); `role` `dismiss` marks the Button that closes its site, a drawing hint only (the terminal draws it as without; a desktop its native close control, the label its accessible name; carried as written, never filled in); `autoFocus` starts the site's focus ring here. A press is a ui_press naming `press.plugin` and `press.handle`. `children`, when present and not empty, are drawn in the label's place, all of them one pressable: strings and Text elements only; `label` then names the control, and is what a surface that draws no children draws."),
            press: fo(),
            hover: Ry().optional(),
            children: T(qE(()=>go())).optional()
        }),
        u({
            type: A("Input"),
            props: u({
                key: o(),
                label: o().optional(),
                placeholder: o().optional(),
                value: o().optional(),
                submitLabel: o().optional(),
                autoFocus: A(true).optional()
            }).describe("@internal A one-line text field: `label` before it, `placeholder` dim while empty, `value` the text it holds when drawn, `submitLabel` what Enter does, `autoFocus` as a Button's. The surface keeps the text the person types; each change is a ui_input of kind `change`, Enter one of kind `submit`, naming `press.plugin` and `press.handle`; no children."),
            press: fo()
        }),
        u({
            type: A("Select"),
            props: u({
                key: o(),
                label: o().optional(),
                options: T(u({
                    value: o(),
                    label: o().optional()
                })),
                value: o().optional(),
                autoFocus: A(true).optional()
            }).describe("@internal A one-of-several picker: `options` in the order drawn (at least one, values unique, each drawn as its `label`, else its `value`), `value` the one selected when drawn, `label` before it, `autoFocus` as a Button's. A pick is a ui_select carrying the option's `value` and naming `press.plugin` and `press.handle`; no children."),
            press: fo()
        }),
        u({
            type: A("Link"),
            props: u({
                href: o(),
                label: o().optional()
            }).describe("@internal A hyperlink: `href` is https (or http://localhost), bounded and free of control characters as the engine validated it; the children are the text drawn (absent them the label, absent both the URL). A remote surface draws an anchor that opens outside the app."),
            children: T(qE(()=>go())).optional()
        }),
        u({
            type: A("Code"),
            props: u({
                source: o(),
                language: o().optional(),
                path: o().optional(),
                startLine: E().int().optional(),
                format: U([
                    "source",
                    "diff"
                ]).optional(),
                wrap: U([
                    "wrap",
                    "truncate-end"
                ]).optional()
            }).describe('@internal Source code the surface draws with its own highlighter: `language` a highlight.js id or alias, else inferred from `path` (never read); `startLine` numbers a line gutter; under `format: "diff"` `source` is unified-diff hunks the engine checked parse; `wrap` is `wrap` (the default) or `truncate-end`, which cuts long lines with an ellipsis. `source` is bounded and free of control characters as the engine validated it; no children.')
        }),
        u({
            type: A("Markdown"),
            props: u({
                key: o().optional(),
                text: o(),
                dimColor: M().optional(),
                pressableLinks: T(o()).optional()
            }).describe("@internal A block of markdown the surface draws as it draws an assistant reply (its own renderer, links, tables, code fences), dim when `dimColor`; `text` is bounded and free of control characters as the engine validated it; no children. A link whose URL scheme is not https, http or file is drawn as text, never clickable (the plugin must not choose the URL handler a click reaches). With `press` the plugin answers its links: a plain click on one (any, or one `pressableLinks` names) is a ui_press carrying `href`, and the surface does not open it; `key` is then present, the address `ui.press` carries as `element`."),
            press: u({
                plugin: o(),
                handle: E().int()
            }).optional()
        }),
        u({
            type: A("Client"),
            props: u({
                key: o(),
                module: o(),
                props: oe().optional(),
                width: Ue([
                    E(),
                    o()
                ]).optional(),
                height: Ue([
                    E(),
                    o()
                ]).optional(),
                flexGrow: E().optional()
            }).describe("@internal A region one of the plugin's surface modules draws locally: `module` is that module's path under the plugin's folder (`hooks/board.tsx`, what ui_client_module lists it by), `key` addresses the instance (what `ui.message` carries as `element`), `props` is plain data the engine bounded, `width`/`height`/`flexGrow` size it as a Box. `client.plugin` says whose surface module. Carried as data: a surface without a surface-module runtime draws nothing for it; no children."),
            client: u({
                plugin: o()
            })
        }),
        u({
            type: A("Svg"),
            props: u({
                source: o(),
                alt: o(),
                width: E().optional(),
                height: E().optional(),
                isInteractive: M().optional()
            }).describe("@internal A vector leaf of the desktop and mobile surfaces: `source` is SVG markup the surface draws in an isolated box (the desktop an image, or a sandboxed frame when `isInteractive`; the mobile app a sandboxed web view), `alt` what it says. Bounded by the engine (128 KiB of source, 4096 px) before it crossed; no children.")
        }),
        u({
            type: A("engine"),
            ref: E().int().describe("@internal Which drawing of the engine-owned component sits here: 0 draws the original props; any other ref names the props the ui_render response carries.")
        })
    ]).describe("@internal A plain-data tree a `ui.render` hook returned, as the hooks engine validated it: Box, Text, div, span or b with children, a Button, Input or Select leaf carrying the `press` that names its handler, a Link with its text, a Code leaf, a Markdown leaf, a Client leaf (a surface-module region, carried as data; never on mobile), an Svg leaf (desktop and mobile; never the terminal), or an engine node the surface draws itself (src/plugins/functionHooks/types/element/render-element.ts)."));
const Iy = p(()=>u({
        seq: E().int(),
        t0: E()
    }).describe("@internal Timing marks a benchmarking client attaches to a ui_render request; the response echoes them unchanged so the client can join its own marks to the CLI debug log lines keyed `instance_id#seq`."));
const My = p(()=>u({
        columns: E().int().positive(),
        rows: E().int().positive(),
        isFullscreen: M().optional().describe("@internal Whether this surface docks a pane beside the transcript, so a pane a plugin opens unasked is a sidebar and not a takeover; the hooks read it as `e.viewport.isFullscreen`. Leave it out until the surface can say (absent is unknown, not false); a surface with no dock at all says false. A change re-runs the hooked sites as a change of columns does.")
    }).describe("@internal The size of the pane the surface draws the component in, in character cells of the surface's monospace font (its width and height over the code font's advance and line height), and whether its layout docks a pane; the hooks reached see it as `e.viewport` (src/plugins/functionHooks/types/render/render-viewport)."));
const XY = p(()=>u({
        first: E().int().nonnegative(),
        last: E().int().nonnegative(),
        of: E().int().positive()
    }).refine((e)=>e.first <= e.last && e.last < e.of).describe("@internal The part of a transcript message the asking surface has in its viewport: units `first` to `last` (inclusive, `first <= last < of`) of the message's whole extent `of`, in whatever the surface lays out with (lines, pixels), counted from the message's start. The hooks reached see it as `e.props.onScreen`."));
const K = p(()=>U([
        "desktop",
        "mobile",
        "vscode"
    ]).describe("@internal A surface that draws over the wire: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code). What the client declared, a rendering fact and not a trust signal."));
const Py = p(()=>U([
        "terminal",
        "desktop",
        "mobile",
        "vscode"
    ]).describe("@internal Where the engine draws: the terminal (Ink) or a remote surface (src/plugins/functionHooks/types/render/render-surface)."));
const QY = /^[A-Za-z0-9._-]{1,64}$/;
const x = p(()=>o().regex(QY).describe("@internal The asking client's id on the session's roster of attached surfaces: 1 to 64 of letters, digits, `.`, `_`, `-`. Two phones are two ids on one surface; a client that never attaches is the engine's `<surface>:default`, which no wire id can spell."));
const q1n = p(()=>u({
        subtype: A("ui_attach"),
        surface: K(),
        client_id: x(),
        viewport: My().optional(),
        answers: T(qE(()=>den())).max(Vy_length).optional().describe("@internal The engine's requests this client answers on a plugin's behalf: `ui_copy` (its clipboard), `ui_prompt_read` / `ui_prompt_fill` / `ui_prompt_suggest` (its composer), `ui_read_selection` (what the person has selected in its page). The engine sends each only to a client that named it; a client that never names any (or names `[]`) is never asked, so `$.ui.copy` to its surface answers `no-clipboard`, the prompt calls the empty box / false and `$.ui.selection` nothing, as before. On a repeated ui_attach a given list (including `[]`) replaces the earlier one and an absent field keeps it: send `[]` to stop answering.")
    }).describe("@internal A remote surface joins the session: the engine adds the client to its roster of attached surfaces and raises `session.attach` for it (`$.session.surfaces()` then lists the surface). Idempotent per client_id. A client that never sends it is attached by its first ui_render, under `<surface>:default`; every client still attached detaches when the session ends."));
const JY = p(()=>u({
        surfaces: T(Py()).describe("@internal The surfaces the session draws on after the attach, each once: `terminal` first when bound, then the remote surfaces in attach order.")
    }).describe("@internal The roster of surfaces after a ui_attach."));
const K1n = p(()=>u({
        subtype: A("ui_detach"),
        client_id: x()
    }).describe("@internal A remote surface leaves the session: the engine drops the client from its roster and raises `session.detach` with reason `detach`. A client_id not on the roster changes nothing."));
const ZY = p(()=>u({
        detached: M().describe("@internal Whether the client_id was on the roster."),
        surfaces: T(Py()).describe("@internal The surfaces the session draws on after the detach.")
    }).describe("@internal The roster of surfaces after a ui_detach."));
const Y1n = p(()=>u({
        subtype: A("ui_render"),
        surface: K().describe("@internal The surface asking: `desktop` (Claude Code Desktop), `mobile` (the Claude mobile app) or `vscode` (Claude Code for VS Code); the hooks reached see it as `e.surface` and answer from that surface's element table."),
        client_id: x().optional().describe("@internal The asking client, as its ui_attach named it. The ask puts it on the roster when it is not there: the id given, else `<surface>:default`."),
        component: lr(),
        instance_id: o().describe("@internal The engine's requestId for this instance: the tool_use_id of a tool row or dialog, the message id of a message, the uuid of a command's output row (its twin's), 'session-mode' for the session chip. Two drawings of one component are two instances."),
        props: ue(o(), oe()).describe("@internal The component's plain-data props as the asking surface holds them; the `ui.render` site rule validates their shape per component. `output` on a ToolUse is capped at 64 KB before the chain sees it."),
        viewport: My().optional(),
        on_screen: XY().nullable().optional().describe("@internal What of this instance the asking surface's viewport shows now, for a transcript message (UserMessage, AssistantMessage, ToolUse, ToolResult, ToolGroup, CommandOutput, TurnDuration, InfoNotice): the extent, or null while the surface draws it outside its viewport. The engine hands it to the hooks as `e.props.onScreen` for this surface's ask alone (a rewrite of it is refused) and never carries one surface's report to another; leave it out when the surface does not track visibility, and ask again, coalesced to the surface's frame, when it changes, so the hooks re-run for the messages crossing the viewport's edges."),
        content_rows: E().int().nonnegative().optional().describe("@internal For a `Pane` or `AbovePrompt` ask: the rows the instance's whole tree lays out to as the surface last drew it (the window itself rides `props.scroll`), so a plugin's `$.ui.scroll` to `end` knows the last offset. Leave it out before the first layout."),
        keyed: T(qE(()=>xy())).max(Ly).optional().describe("@internal For a `Pane` or `AbovePrompt` ask: where the keyed elements of the tree last drawn sit, so a plugin's `$.ui.scroll({ to: { key } })` lands; without it that call is denied."),
        bench: Iy().optional()
    }).describe('@internal Ask the hooks engine to draw one component instance for a remote surface: runs the `ui.render` chain (every plugin hooked on it, then core) with the surface asked and answers the tree plus the props core was handed. A session with no hooks module loaded answers `{tree: {type: "engine", ref: 0}, hooked: false}` without running anything. Re-ask every mounted instance on each `ui_invalidate` system message, and an instance whose `on_screen` changed.'));
const eW = p(()=>u({
        tree: Ny(),
        props: ue(o(), oe()).describe("@internal What to draw the first engine node with: the chain's rewrite of the props, or the input's own. Props under any later engine node do not cross (the ledger holding them is process-local)."),
        rewritten: M().describe("@internal True when `props` is not the object the request carried."),
        hooked: M().describe("@internal Whether any loaded plugin hooks `ui.render` for this component; false means the surface may stop asking for it until the next ui_invalidate."),
        client_modules: ue(o(), o()).optional().describe("@internal For each plugin whose `Client` nodes the tree carries, the hash of its surface modules as ui_client_module serves them; the surface loads a plugin's modules once per hash and remounts its Clients when it changes. A plugin absent here has no surface module loaded: its Clients draw a fault line."),
        bench: Iy().optional()
    }).describe("@internal What one remote-surface evaluation of `ui.render` produced, plus whether a plugin is hooked on the component at all."));
const LOt = p(()=>u({
        subtype: A("ui_press"),
        plugin: o().describe("@internal The plugin whose hook drew the pressed element, as the tree carried it."),
        handle: E().int().describe("@internal The handle the element carried (`press.handle`), naming the onPress closure held in that plugin's environment."),
        key: o().optional().describe("@internal The element's own key as the tree carried it. When sent and not empty, a handle held under another key answers `{handled: false}` and nothing runs: the page's tree is not this process's."),
        surface: K().default("desktop").describe("@internal The surface the press came from, as the ui_render that drew the element named it; absent means `desktop`. The `ui.press` hooks reached see it as `e.surface`."),
        href: o().max(2048).optional().describe("@internal For a press on a link inside a `Markdown` element that carries a `press` (its plugin answers its links): the link's target as the tree's text wrote it, one `pressableLinks` names when that list is present. The `ui.press` hooks reached see it as `e.link.href`. Absent for a Button; a Markdown handle without it runs nothing."),
        client_id: x().optional().describe("@internal The pressing client, as its ui_attach named it; optional, and the press runs the same with or without it.")
    }).describe("@internal A press on an element a plugin drew for a remote surface: a Button, or a link inside a Markdown whose plugin answers its links (with `href`). Runs the `ui.press` chain with the element's closure at the bottom. A CLI whose engine has no press site answers `{handled: false}`."));
const tW = p(()=>u({
        handled: M().describe("@internal False when the engine has no press site, the handle named no held element, or it named one held under another key than the request sent; nothing ran, and the tree the surface holds is stale: it asks ui_render again."),
        element: o().optional().describe("@internal The element whose handler the press reached, when one did.")
    }).describe("@internal Whether a ui_press reached a handler, and which."));
const W = 256;
const ir = 16384;
const Ra = p(()=>u({
        plugin: o().max(W).describe("@internal Whose surface module the Client runs, as the node carried it (`client.plugin`)."),
        component: lr(),
        instance_id: o().max(W).describe("@internal The engine's requestId of the instance the Client was drawn in: what the ui_render that carried it named."),
        client: o().max(W).describe("@internal The Client node's own `key`."),
        module: o().max(W).describe("@internal The Client node's `module`: which of the plugin's surface modules runs there, its path under the plugin's folder.")
    }).describe("@internal Where a Client node a remote surface drew sits: what a ui_client_press, ui_message or ui_client_fault names before anything runs."));
const X1n = p(()=>u({
        subtype: A("ui_client_module"),
        plugin: o().describe("@internal The plugin whose surface modules the surface wants, as a Client node and `client_modules` named it.")
    }).describe("@internal Ask for a plugin's surface modules as a desktop `Client` frame loads them: every file the host read when the hooks module loaded (only those: the paths its `Client`s name by literal), compiled to JavaScript, its own imports rewritten to import-map keys, each module's entry and component, and the hash ui_render announced. Errors when the plugin is not loaded or loaded no surface module."));
const sW = p(()=>u({
        plugin: o(),
        hash: o().describe("@internal sha256 over the keyed files and limits, hex: what `client_modules` carries for the plugin while this text and these bounds are served."),
        modules: T(u({
            module: o().describe("@internal The module's path under the plugin's folder, POSIX-separated (`hooks/board.tsx`): what a Client node's `module` carries."),
            entry: o().describe("@internal The entry file's import-map key (`surface:///<path under the plugin>`): what the frame imports for a Client naming this module, once the runtime is in."),
            component: o().describe("@internal Which export of the entry draws: `default` when it has one, else its one PascalCase export; settled by the host at load.")
        })).describe("@internal One per surface module the plugin's Clients name, in the order the host read them."),
        runtime: o().describe("@internal The runtime module's key (`claude:surface-runtime`): exports `h` and `Fragment`, the JSX factory the plugin's files are compiled against, and `install(host, limits)`, the surface driver the terminal runs the same modules with. The frame sets `globalThis.h`/`Fragment` from it and installs before importing an entry."),
        limits: u({
            nodes: E().int(),
            depth: E().int(),
            chars: E().int(),
            values: E().int(),
            dataDepth: E().int()
        }).describe("@internal The bounds `install` takes: a tree of at most `nodes` elements `depth` deep serializing to `chars` characters, each props payload at most `values` values `dataDepth` deep; the terminal's own."),
        files: T(u({
            key: o(),
            source: o()
        })).describe("@internal Every file of every module, each once: the runtime first, then each entry and what it links: its key and its JavaScript, own imports keyed. Each module's files are bounded by the hooks-module limits (1 MiB a file, 8 MiB in all, 512 files) before they loaded.")
    }).describe("@internal A plugin's surface modules as the desktop frame links them."));
const NOt = p(()=>Ra().extend({
        subtype: A("ui_client_press"),
        element: o().max(W).describe("@internal The pressed element's own `key` inside the Client's tree; the hooks reached see `e.element`."),
        event: Wr("type", [
            u({
                type: A("press")
            }),
            u({
                type: A("input"),
                kind: U([
                    "change",
                    "submit"
                ]),
                value: o().max(ir)
            }),
            u({
                type: A("select"),
                value: o().max(ir)
            })
        ]).describe("@internal What happened: a Button pressed, an Input changed or submitted with its text, a Select picked with its value.")
    }).describe("@internal A press, input or pick on a Button, Input or Select a surface module drew inside a `Client` the desktop drew: runs the `ui.press`, `ui.input` or `ui.select` chain over every hooked plugin with `surface: \"desktop\"`. The element's closure lives in the surface's frame, so the answer says whether the chain reached it and with what argument, and the surface runs it. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`."));
const rW = p(()=>u({
        handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran."),
        reached: ue(o(), oe()).optional().describe("@internal The chain's argument as it reached the element's own handler (`plugin`, `element`, `component`, `requestId`, `surface`, and `kind`/`value` for an input or pick, as hooks above left them): the surface runs the frame's closure with it. Absent when a hook withheld the press; the closure does not run.")
    }).describe("@internal Whether a ui_client_press found its Client, and what reached the bottom of the chain."));
const $Ot = p(()=>Ra().extend({
        subtype: A("ui_message"),
        data: oe().describe("@internal What the instance posted (`surface.post(data)`): plain JSON, bounded as a Client post is (2000 values, depth 32, 100 000 characters); the hooks reached see `e.data`.")
    }).describe('@internal A post from a `Client` instance the desktop drew: runs the owning plugin\'s `ui.message` chain alone (origin `client`) with `surface: "desktop"`. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`; data past the bounds errors.'));
const nW = p(()=>u({
        handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran."),
        props: oe().optional().describe("@internal The instance's next props when a hook answered `{ props }`: the surface hands them to the frame, local state kept; absent leaves them.")
    }).describe("@internal What the owning plugin's ui.message hooks answered a Client's post."));
const oW = 200;
const FOt = p(()=>Ra().extend({
        subtype: A("ui_client_fault"),
        phase: U([
            "load",
            "render",
            "run"
        ]).describe("@internal When the Client failed: `load` is before the module ran (its frame refused, the module not fetched, a throw at mount); `render` is a throw while drawing, an undrawable tree, or a render that never answered; `run` is a listener, timer or held closure, a loop, a flood. The hooks reached see it as `e.phase`."),
        reason: o().max(oW).describe("@internal Why, in the surface's words: one line of at most 200 characters, control characters and line separators sent as spaces; empty for a failure that gave no message. Untrusted text (it may quote what the plugin's module threw): to show or log, never to act on. The hooks reached see it as `e.reason`, scrubbed again and with the plugin's name and the module's taken off its front, and never empty: one with nothing in it reads `the module failed without a message`.")
    }).describe('@internal A `Client` the desktop drew failed in its frame: runs the owning plugin\'s `ui.fault` chain alone with `surface: "desktop"`, so the plugin can draw another view. The address is the five flat fields ui_client_press and ui_message carry, and no `surface`. One request per fault line the surface draws; an instance started again that fails again is told again. One naming a Client the latest ui_render of that instance did not carry answers `{handled: false}`. A CLI that predates the request answers the error "Unsupported control request subtype: ui_client_fault".'));
const aW = p(()=>u({
        handled: M().describe("@internal False when the engine has no such Client drawn; nothing ran. True once the owning plugin's hooks have run, whether or not it has any.")
    }).describe("@internal Whether a ui_client_fault found its Client and reached the owning plugin's ui.fault hooks."));
const UOt = p(()=>u({
        subtype: A("ui_input"),
        plugin: o().max(W).describe("@internal The plugin whose hook drew the Input, as its `press.plugin` carried it."),
        handle: E().int().describe("@internal The handle the Input carried (`press.handle`), naming the onInput and onSubmit closures held in that plugin's environment."),
        kind: U([
            "change",
            "submit"
        ]).describe("@internal Which of the two: `change` on an edit of the field, `submit` on Enter. The `ui.input` hooks reached see it as `e.kind`."),
        value: o().max(ir).describe("@internal The field's whole text as the surface holds it now; the hooks reached see it as `e.value` and may rewrite it before the closure."),
        key: o().optional().describe("@internal The Input's own `key`, as the tree carried it (the engine puts no length on a key): with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Input that plugin holds under this key there, so typing across a re-render is not lost."),
        component: lr().optional().describe("@internal The render site the Input was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."),
        instance_id: o().max(W).optional().describe("@internal The instance the Input was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one field among several instances that draw the same key (one per transcript row). Without it a retired handle re-resolves only when a single instance holds the key."),
        surface: K().default("desktop").describe("@internal The surface the field is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.input` hooks reached see it as `e.surface`."),
        client_id: x().optional().describe("@internal The typing client, as its ui_attach named it; optional, and the input runs the same with or without it.")
    }).describe("@internal A change of, or Enter in, an `Input` a plugin drew for a remote surface: runs the `ui.input` chain over every hooked plugin with the element's own onInput (kind `change`) or onSubmit (kind `submit`) closure at the bottom, one at a time per plugin so typing arrives in order. A handle no Input is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one."));
const iW = p(()=>u({
        handled: M().describe("@internal False when no Input is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded); nothing ran."),
        element: o().optional().describe("@internal The `key` of the Input whose handler the input reached, when one did."),
        value: o().optional().describe("@internal The text the handler received: the value as the hooks above left it.")
    }).describe("@internal Whether a ui_input reached a handler, which, and with what text."));
const BOt = p(()=>u({
        subtype: A("ui_select"),
        plugin: o().max(W).describe("@internal The plugin whose hook drew the Select, as its `press.plugin` carried it."),
        handle: E().int().describe("@internal The handle the Select carried (`press.handle`), naming the onSelect closure held in that plugin's environment."),
        value: o().max(ir).describe("@internal The picked option's `value`, one of the Select's `options` as the tree last drew them (any other value answers `handled: false` and runs nothing); the hooks reached see it as `e.value` and may rewrite it before the closure."),
        key: o().optional().describe("@internal The Select's own `key`, as the tree carried it: with `component` and `instance_id`, a handle a redraw just retired, or one held under another key (a tree another process drew), is re-resolved to the one Select that plugin holds under this key there."),
        component: lr().optional().describe("@internal The render site the Select was drawn in, as the ui_render that drew it named it; pairs with `key` for the re-resolve."),
        instance_id: o().max(W).optional().describe("@internal The instance the Select was drawn in (the ui_render's `instance_id`): with `key` and `component`, names the one picker among several instances that draw the same key."),
        surface: K().default("desktop").describe("@internal The surface the picker is on, as the ui_render that drew it named it; absent means `desktop`. The `ui.select` hooks reached see it as `e.surface`."),
        client_id: x().optional().describe("@internal The picking client, as its ui_attach named it; optional, and the pick runs the same with or without it.")
    }).describe("@internal A pick in a `Select` a plugin drew for a remote surface: runs the `ui.select` chain over every hooked plugin with the element's own onSelect closure at the bottom, one at a time per plugin. A handle no Select is held under answers `{handled: false}` and nothing runs. No model turn unless the plugin asks for one."));
const lW = p(()=>u({
        handled: M().describe("@internal False when no Select is held under that plugin and handle (a redraw retired it and `key`/`component`/`instance_id` did not re-resolve it, or the plugin unloaded), or `value` is none of its options as drawn; nothing ran."),
        element: o().optional().describe("@internal The `key` of the Select whose handler the pick reached, when one did."),
        value: o().optional().describe("@internal What the handler received: the option's value as the hooks above left it.")
    }).describe("@internal Whether a ui_select reached a handler, which, and with what value."));
const Dy = p(()=>U([
        "Pane",
        "AbovePrompt"
    ]).describe("@internal A scrolling, focusable site a remote surface draws for the hooks engine: a pane's body (`instance_id` the pane's id) or the band above the composer (`instance_id` `above-prompt`)."));
var xy = p(()=>u({
        plugin: o().max(W),
        key: o().max(W),
        top: E().int().nonnegative(),
        bottom: E().int().nonnegative()
    }).describe("@internal Where an element a plugin drew under `key` (a keyed Box, a Button, Input or Select) sits in the site's content as the surface laid it out: its first row and the row past its last, in the rows `offset` counts. What lets that plugin's `$.ui.scroll({ to: { key } })` land."));
var Ly = 512;
const jOt = p(()=>u({
        subtype: A("ui_panes"),
        client_id: x().optional()
    }).describe("@internal Ask for the pane roster as the engine holds it now: what a surface that places panes reads on mount, before any ui_panes push (a pane opened before the stream armed pushes nothing)."));
const WOt = p(()=>u({
        subtype: A("ui_pane_show"),
        id: _e().describe("@internal The pane the person picked (a click on its tab): shown at once, the keyboard following if a pane held it. An id not open changes nothing."),
        surface: K().default("desktop").describe("@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."),
        client_id: x().optional()
    }).describe("@internal The person chose which open pane the surface shows; answers the roster's `shown_id` afterwards. A ui_panes push follows when it changed."));
const cW = p(()=>u({
        shown_id: _e().nullable()
    }).describe("@internal The pane shown after a ui_pane_show."));
const zOt = p(()=>u({
        subtype: A("ui_pane_focus"),
        id: _e().nullable().describe("@internal The pane the person gave the keyboard (a click into its body, honouring a focus request), or null when the keyboard went back to the composer (Escape, a click there, a refused focus request). Settles a standing focus request either way."),
        surface: K().default("desktop").describe("@internal The surface the panes are on; absent means `desktop`. Names the default client when `client_id` is not given."),
        client_id: x().optional()
    }).describe("@internal The keyboard moved between the composer and a pane on a remote surface; answers the roster's `focused_id` afterwards, and the pane's Pane site then holds the keyboard for `$.ui.focus`. A ui_panes push follows when it changed."));
const dW = p(()=>u({
        focused_id: _e().nullable()
    }).describe("@internal The pane holding the keyboard after a ui_pane_focus."));
const GOt = p(()=>u({
        subtype: A("ui_close"),
        id: _e().describe("@internal The pane the person closed (its close control, or Escape under `close_on_escape`)."),
        client_id: x().optional()
    }).describe("@internal The person's close of a pane on a remote surface: runs the `ui.close` chain with origin `person` (a hook may keep the pane open) and answers whether it closed. The surface removes the pane only on `closed: true`; the ui_panes push that follows drops it too."));
const hW = p(()=>u({
        closed: M().describe("@internal True when no pane has that id after the call: it closed, or none had it (no chain ran). False when a `ui.close` hook kept it open, or a close of it was already being decided (the ui_panes push says how that one ended).")
    }).describe("@internal Whether a ui_close closed the pane."));
const VOt = p(()=>u({
        subtype: A("ui_scroll"),
        component: Dy(),
        instance_id: o().max(W),
        offset: E().int().nonnegative().describe("@internal The first content row the window shows after the move, 0 at the top, in rows of the surface's monospace line height."),
        by: E().int().describe("@internal The rows the move covered, signed, negative toward the top; what the `ui.scroll` hooks see as `e.by`."),
        body_rows: E().int().nonnegative().describe("@internal The rows the window shows at once."),
        content_rows: E().int().nonnegative().describe("@internal The rows the site's whole tree lays out to; the last offset is `content_rows - body_rows`."),
        pointer: u({
            column: E().int(),
            row: E().int()
        }).optional().describe("@internal The body cell the wheel or trackpad was over, 0/0 at the body's top left; absent for scroll keys and the scrollbar."),
        keyed: T(xy()).max(Ly).optional(),
        surface: K().default("desktop").describe("@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given, so the site is that client's."),
        client_id: x().optional()
    }).describe("@internal The person scrolled a site a remote surface draws (a pane's body, the band): the engine records the layout reported, moves its own window by `by` (clamped to the layout) and raises `ui.scroll` with origin `person` over that; a hook may rewrite or deny it, and the answer carries the offset the surface should show. Send it throttled to the surface's frame; reports arriving while one is in flight for the instance are folded (`by` summed) into one that follows and answered alike, in order."));
const uW = p(()=>u({
        moved: M().describe("@internal False when the chain denied the move (a plugin's own scroll landed meanwhile and stays), or the instance is no open pane nor the band (`deny: 'no such site'`; nothing recorded)."),
        offset: E().int().describe("@internal The offset the engine holds for the window now, which the surface should show: its own window moved by `by` (or a hook's rewrite) when allowed, the offset before the move when denied, a plugin's offset when its move landed meanwhile; the reported offset only for `no such site`."),
        deny: o().optional().describe("@internal Why the move was denied, when it was."),
        follow_end: M().optional().describe("@internal Present when the site still follows its end after this report (a plugin's followed `end` move that no move took the window off: a wheel landing on the end, a denied wheel): keep the body pinned to the bottom as it grows, as after a ui_scroll push with follow_end.")
    }).describe("@internal Where a ui_scroll left the window."));
const Uy = p(()=>u({
        plugin: o().max(W),
        key: o().max(W)
    }).describe("@internal A Button, Input or Select a plugin drew, by its `press.plugin` and `props.key`."));
const qOt = p(()=>u({
        subtype: A("ui_focus"),
        component: Dy(),
        instance_id: o().max(W),
        is_held: M().describe("@internal Whether the site holds the keyboard now (DOM focus is inside its container)."),
        element: Uy().nullable().optional().describe("@internal The element that took the focus ring: one the site draws, or null for the container itself; absent reports `is_held` alone and moves nothing."),
        by: U([
            "person",
            "auto"
        ]).default("person").describe("@internal Who moved it: the person (Tab, a click), or an `autoFocus` element taking the ring as the site mounted (`auto`, raised as that plugin's move)."),
        surface: K().default("desktop").describe("@internal The surface the site is on; absent means `desktop`. Names the default client when `client_id` is not given."),
        client_id: x().optional()
    }).describe("@internal The keyboard moved in a site a remote surface draws: the engine records the hold and raises `ui.focus` for the element (origin `person`, or the element's plugin under `auto`); a hook may redirect it, which the answer then carries for the surface to follow."));
const pW = p(()=>u({
        moved: M().describe("@internal False when the chain denied the move."),
        element: Uy().nullable().describe("@internal The element holding the ring as the engine records it now: the reported one, a hook's redirect the surface should focus, or null on the container."),
        deny: o().optional().describe("@internal Why the move was denied, when it was.")
    }).describe("@internal Where a ui_focus left the ring."));
const Vy = [
    "ui_copy",
    "ui_prompt_read",
    "ui_prompt_fill",
    "ui_prompt_suggest",
    "ui_read_selection"
];
var Vy_length = Vy.length;
var den = p(()=>U(Vy).describe("@internal A request the engine may send a remote client on a plugin's behalf, which the client says it answers when it attaches."));
const Ht = 1000000;
const va = p(()=>u({
        subtype: A("ui_copy"),
        surface: K(),
        client_id: x(),
        plugin: o().describe("@internal Whose `$.ui.copy` it is, for the app to show or log."),
        text: o().max(Ht).describe("@internal What the person pastes afterwards, verbatim, as the `ui.copy` hooks left it.")
    }).describe("@internal Agent-originated: a plugin's `$.ui.copy({ text, surface })` naming a remote surface reached the bottom of the `ui.copy` chain; the app writes `text` to its clipboard and answers `{copied}`. `client_id` is the first client attached on that surface that answers `ui_copy`. Sent only to a client whose ui_attach named `ui_copy` under `answers`; unanswered within 5 s, or an unparsable answer, resolves the plugin `{isCopied: false, reason: 'no-clipboard'}`; an error-shaped reply is another client's refusal and does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."));
const _bo = p(()=>u({
        copied: M().describe("@internal Whether the app wrote the text to its clipboard.")
    }).describe("@internal The answer to ui_copy."));
const Ca = p(()=>u({
        subtype: A("ui_prompt_read"),
        surface: K(),
        client_id: x()
    }).describe("@internal Agent-originated: `prompt.read` reached its core in a headless session (a plugin's `$.prompt.read`, or the read that completes a `$.prompt.fill`); the app answers its composer's draft and cursor. Sent only to a client whose ui_attach named `ui_prompt_read`; unanswered within 5 s, or unparsable, resolves the empty box; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."));
const bbo = p(()=>u({
        text: o().describe("@internal The composer's whole draft."),
        cursor: E().int().nonnegative().describe("@internal The caret as a code-unit offset into `text` (0..text.length); the end when the app does not track one.")
    }).describe("@internal The answer to ui_prompt_read: the composer as it stands."));
const jy = p(()=>De({
        start: E().int().nonnegative().describe("@internal Where the run starts, in UTF-16 code units into this frame's `text`."),
        end: E().int().describe("@internal Where the run ends, exclusive: past `start`, at most `text.length`."),
        color: o().optional().describe("@internal The text color."),
        backgroundColor: o().optional().describe("@internal The color behind the text."),
        dimColor: M().optional().describe("@internal Drawn dim."),
        bold: M().optional().describe("@internal Drawn bold."),
        italic: M().optional().describe("@internal Drawn italic."),
        underline: M().optional().describe("@internal Underlined."),
        strikethrough: M().optional().describe("@internal Struck through.")
    }).describe("@internal One painted run over the text a ui_prompt_fill carries, normalized by the engine: clamped to the text, grapheme-aligned, never empty."));
const za = p(()=>u({
        subtype: A("ui_prompt_fill"),
        surface: K(),
        client_id: x(),
        text: o().max(Ht).describe("@internal The text to place, as the `prompt.fill` hooks left it."),
        mode: U([
            "replace",
            "append",
            "insert"
        ]).describe("@internal Where it goes: `replace` the whole draft, `append` after it, `insert` at the caret. The caret ends after the placed text."),
        decorations: T(jy()).optional().describe("@internal Runs to paint over `text`, disjoint and ascending by `start`; the app paints them as given, with no range logic of its own. Omitted when there are none, never empty.")
    }).describe("@internal Agent-originated: `prompt.fill` reached its core in a headless session (a plugin's `$.prompt.fill`); the app places the text in its composer as the person's draft and answers `{filled}` (false while a dialog holds the keys or the composer is unavailable). Sent only to a client whose ui_attach named `ui_prompt_fill`; unanswered within 5 s, or unparsable, resolves `{isFilled: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."));
const Sbo = p(()=>u({
        filled: M().describe("@internal Whether the composer now holds the text.")
    }).describe("@internal The answer to ui_prompt_fill."));
const Oa = p(()=>u({
        subtype: A("ui_prompt_suggest"),
        surface: K(),
        client_id: x(),
        text: o().max(Ht).describe("@internal The suggestion to show dim in the empty composer for Tab to take, as the `prompt.suggest` hooks left it.")
    }).describe("@internal Agent-originated: `prompt.suggest` reached its core in a headless session (a plugin's `$.prompt.suggest`, or the engine's own guess after a turn); the app shows the text as a placeholder the person accepts with Tab and answers `{shown}` (false while the composer holds text or a turn runs). Sent only to a client whose ui_attach named `ui_prompt_suggest`; unanswered within 5 s, or unparsable, resolves `{isShown: false}`; an error-shaped reply does not settle it. Over a remote session transport it is sent only while the session service states that the owner's account alone writes to the session, an answer is taken only as a client's own write, at the floor the session's policy enforces, in the owner's own session, and a client that gives no answer in 5 s hands the request to the next attached client that named it."));
const wbo = p(()=>u({
        shown: M().describe("@internal Whether the composer now shows the suggestion.")
    }).describe("@internal The answer to ui_prompt_suggest."));
const ka = p(()=>u({
        subtype: A("ui_read_selection"),
        surface: K(),
        client_id: x()
    }).describe("@internal Agent-originated: `ui.selection` reached its core in a headless session (a plugin's `$.ui.selection`); the app answers what the person has selected in its page, and keeps answering a selection its own click or key took down for as long as it sees fit (the terminal keeps one until the person's next prompt or command has run). A selection lies in one page, so every attached client whose ui_attach named `ui_read_selection` under `answers` is sent the ask at once, each under its own `client_id` and request id: the first selection to arrive that is not empty is what the plugin reads (of two windows that both hold one, the first to answer wins), an answer that arrives after that is dropped, and when every client answers nothing or stays silent the plugin reads nothing at the one bound. Sent only over the pipes of the host that spawned the process, never over the remote transport nor on a lane whose frames a service persists: the selection is the person's own text. Unanswered by all within 5 s, or unparsable, resolves the plugin `undefined`, as nothing selected does; an error-shaped reply does not settle it."));
const vbo = p(()=>u({
        text: o().optional().describe("@internal The selected text as the person sees it: what a copy would put on the clipboard. Left out, or empty, when nothing is selected."),
        instance_id: o().optional().describe("@internal The transcript row the whole selection lies in, by the `instance_id` that row was drawn under (the engine's requestId for it). Left out when the selection spans several rows or lies outside the transcript; ignored without `text`.")
    }).describe("@internal The answer to ui_read_selection: the selection, or an empty object for nothing selected."));
const mW = 32;
const gW = p(()=>u({
        key: o().min(1).max(mW),
        ctrl: A(true).optional(),
        shift: A(true).optional(),
        meta: A(true).optional()
    }).describe("@internal The one key that made an edit, in a `Client`'s `onKey` spelling: a special key's name (`backspace`, `left`, `return`) or the character typed (`space` for a space), each modifier present only when held. The `prompt.edit` hooks reached see it as `e.key`, as for the same key in the terminal."));
const KOt = p(()=>u({
        subtype: A("ui_prompt_edit"),
        text: o().max(Ht).describe("@internal The Composer's whole draft after the edit, as the surface holds it."),
        cursor: E().int().nonnegative().describe("@internal The caret after the edit, in UTF-16 code units into `text`; one past the end is clamped to it."),
        key: gW().optional().describe("@internal The one key that made the edit; absent for a paste, a drop, or text that came with no single key."),
        by: U([
            "person",
            "app"
        ]).default("person").describe("@internal Who changed the box: the person's own edit (`person`, raised as `prompt.edit`), or the app itself when it was not the person typing (`app`: a submit emptied it, a fill landed, a history recall, a draft restore), which the engine adopts as the box before the next edit without raising anything, answering the box with no runs. `app` carries no key."),
        surface: K().default("desktop").describe("@internal The surface the Composer is on; absent means `desktop`."),
        client_id: x().optional().describe("@internal The editing client, as its ui_attach named it; absent names the surface's default client.")
    }).describe("@internal An edit in a remote surface's own Composer: the engine raises `prompt.edit` (origin `composer`) over the box before it (the box this client sent last, or the rewrite answered to it when the edit follows from that), as the terminal's editor does for a key, and answers what the Composer is to show. One dispatch per client at a time; of the edits that arrive meanwhile only the newest is raised, the older ones answering `superseded`, and an edit folded that way carries no key. A chain that fails answers the request's own box."));
const fW = p(()=>u({
        text: o().describe("@internal The draft the Composer is to show: the request's own, or a hook's rewrite of it."),
        cursor: E().int().describe("@internal The caret in `text`, clamped into it."),
        decorations: T(jy()).optional().describe("@internal The runs to paint over `text`, disjoint and ascending; absent when none paint."),
        superseded: A(true).optional().describe("@internal Present when a newer edit from the same client came in first: this one was never raised, and its own box is echoed with no runs.")
    }).describe("@internal What a ui_prompt_edit's `prompt.edit` chain answered for the Composer."));
const YOt = p(()=>u({
        subtype: A("ui_prompt_autocomplete"),
        text: o().max(Ht).describe("@internal The Composer's whole draft, as the surface holds it."),
        cursor: E().int().nonnegative().describe("@internal The caret, in UTF-16 code units into `text`; one past the end is clamped to it."),
        surface: K().default("desktop").describe("@internal The surface the Composer is on; absent means `desktop`."),
        client_id: x().optional().describe("@internal The asking client, as its ui_attach named it; absent names the surface's default client.")
    }).describe("@internal A remote surface's own Composer asks what the plugins add to its autocomplete list: the engine raises `prompt.autocomplete` for the token that ends at the caret (the run of characters that are not whitespace), as the terminal's composer does while the person types, and answers the rows for the surface to draw beneath its own. With no token at the caret nothing is raised and no row is answered. One dispatch per client at a time; of the asks that arrive meanwhile only the newest is raised next, and every ask a newer one overtook answers `superseded` with no row. A chain that fails answers no row."));
const EW = p(()=>u({
        suggestions: T(u({
            text: o().describe("@internal What taking the row writes over the token, the caret after it; never empty."),
            label: o().optional().describe("@internal What the row shows; absent, the `text`."),
            description: o().optional().describe("@internal The dim line beside the label.")
        })).describe("@internal The rows the `prompt.autocomplete` hooks answered, in the order to draw them beneath the surface's own."),
        start: E().int().optional().describe("@internal Where the token begins in `text`: a taken row replaces `text` from here to the caret. Absent when no token ends at the caret."),
        superseded: A(true).optional().describe("@internal Present when a newer ask from the same client overtook this one: it carries no row.")
    }).describe("@internal What a ui_prompt_autocomplete answers the Composer."));
const fJ = p(()=>Ue([
        bo(),
        Wo(),
        Zo(),
        wa(),
        ya(),
        Sa(),
        ba(),
        Xo(),
        Qo(),
        Jo(),
        j1n(),
        Aa(),
        va(),
        Ca(),
        za(),
        Oa(),
        ka()
    ]).describe("Control requests the agent loop originates and needs a reply to — the loop→client RPC slice of SDKControlRequestInner. The remaining members are client→loop commands (set/get/mcp/auth/etc)."));
const EJ = p(()=>Ue([
        So(),
        N1n(),
        To(),
        Ao(),
        wo(),
        yo(),
        Ro(),
        vo(),
        zo(),
        Oo(),
        ko(),
        No(),
        Po(),
        Do(),
        xo(),
        Lo(),
        Uo(),
        Vo(),
        Io(),
        Mo(),
        jo(),
        $1n(),
        Co(),
        qo(),
        Go(),
        Bo(),
        Ho(),
        Ko(),
        Fo(),
        Yo(),
        ea(),
        na(),
        ta(),
        sa(),
        ra(),
        aa(),
        ia(),
        ca(),
        z1n(),
        G1n(),
        oa(),
        W1n(),
        F1n(),
        U1n(),
        V1n(),
        da(),
        ha(),
        ua(),
        _a(),
        ma(),
        fa(),
        ga(),
        Ta(),
        B1n(),
        JRe(),
        q1n(),
        K1n(),
        Y1n(),
        LOt(),
        X1n(),
        NOt(),
        $Ot(),
        FOt(),
        Ea(),
        la(),
        UOt(),
        BOt(),
        jOt(),
        WOt(),
        zOt(),
        GOt(),
        VOt(),
        qOt(),
        KOt(),
        YOt()
    ]).describe("Control requests a client sends to drive the loop — the client→loop command slice of SDKControlRequestInner. The remaining members are loop→client RPCs that block on a reply (see AgentOriginatedControlRequest)."));
const SW = p(()=>Ue([
        So(),
        bo(),
        N1n(),
        To(),
        Ao(),
        wo(),
        yo(),
        Ro(),
        vo(),
        zo(),
        Oo(),
        ko(),
        No(),
        Po(),
        Do(),
        xo(),
        Lo(),
        Uo(),
        Vo(),
        Io(),
        Mo(),
        jo(),
        $1n(),
        Co(),
        Wo(),
        Zo(),
        qo(),
        Go(),
        Bo(),
        Ho(),
        Ko(),
        Fo(),
        Yo(),
        ea(),
        na(),
        ta(),
        sa(),
        ra(),
        aa(),
        ia(),
        ca(),
        z1n(),
        G1n(),
        oa(),
        W1n(),
        F1n(),
        U1n(),
        V1n(),
        wa(),
        ya(),
        da(),
        ha(),
        ua(),
        _a(),
        ma(),
        fa(),
        ga(),
        Sa(),
        ba(),
        Ta(),
        B1n(),
        Xo(),
        Qo(),
        Jo(),
        j1n(),
        q1n(),
        K1n(),
        Y1n(),
        LOt(),
        X1n(),
        NOt(),
        $Ot(),
        FOt(),
        Aa(),
        JRe(),
        Ea(),
        la(),
        UOt(),
        BOt(),
        jOt(),
        WOt(),
        zOt(),
        GOt(),
        VOt(),
        qOt(),
        KOt(),
        YOt(),
        va(),
        Ca(),
        za(),
        Oa(),
        ka()
    ]));
function g(request, originator, response) {
    return {
        request,
        originator,
        response
    };
}
const SJ = p(()=>[
        g(So(), "client", GF()),
        g(bo(), "agent", Yw()),
        g(N1n(), "client", qF()),
        g(To(), "client", BF()),
        g(Ao(), "client", null),
        g(wo(), "client", null),
        g(yo(), "client", null),
        g(Ro(), "client", undefined),
        g(vo(), "client", HF()),
        g(zo(), "client", hY()),
        g(Oo(), "client", FF()),
        g(ko(), "client", YF()),
        g(No(), "client", WF()),
        g(Po(), "client", tY()),
        g(Do(), "client", rY()),
        g(xo(), "client", nY()),
        g(Lo(), "client", oY()),
        g(Uo(), "client", aY()),
        g(Vo(), "client", iY()),
        g(Io(), "client", XF()),
        g(Mo(), "client", QF()),
        g(jo(), "client", lY()),
        g($1n(), "client", uY()),
        g(Co(), "client", KF()),
        g(Wo(), "agent", Jw()),
        g(Zo(), "both", kY()),
        g(qo(), "client", pY()),
        g(Go(), "client", _Y()),
        g(Bo(), "client", mY()),
        g(Ho(), "client", gY()),
        g(Ko(), "client", EY()),
        g(Fo(), "client", SY()),
        g(Yo(), "client", null),
        g(ea(), "client", NY()),
        g(na(), "client", DY()),
        g(ta(), "client", IY()),
        g(sa(), "client", MY()),
        g(ra(), "client", PY()),
        g(aa(), "client", null),
        g(ia(), "client", null),
        g(ca(), "client", undefined),
        g(z1n(), "client", null),
        g(G1n(), "client", null),
        g(oa(), "client", xY()),
        g(W1n(), "client", LY()),
        g(F1n(), "client", kct()),
        g(U1n(), "client", yY()),
        g(V1n(), "client", $Y()),
        g(wa(), "agent", hbo()),
        g(ya(), "agent", ybo()),
        g(da(), "client", null),
        g(ha(), "client", VY()),
        g(ua(), "client", jY()),
        g(_a(), "client", null),
        g(ma(), "client", qY()),
        g(fa(), "client", GY()),
        g(ga(), "client", null),
        g(Sa(), "agent", mbo()),
        g(ba(), "agent", cen()),
        g(Ta(), "client", WY()),
        g(B1n(), "client", RY()),
        g(Xo(), "agent", vY()),
        g(Qo(), "agent", CY()),
        g(Jo(), "agent", zY()),
        g(j1n(), "agent", null),
        g(q1n(), "client", JY()),
        g(K1n(), "client", ZY()),
        g(Y1n(), "client", eW()),
        g(LOt(), "client", tW()),
        g(X1n(), "client", sW()),
        g(NOt(), "client", rW()),
        g($Ot(), "client", nW()),
        g(FOt(), "client", aW()),
        g(Aa(), "agent", gbo()),
        g(JRe(), "client", OY()),
        g(Ea(), "client", YY()),
        g(la(), "client", UY()),
        g(UOt(), "client", iW()),
        g(BOt(), "client", lW()),
        g(jOt(), "client", io()),
        g(WOt(), "client", cW()),
        g(zOt(), "client", dW()),
        g(GOt(), "client", hW()),
        g(VOt(), "client", uW()),
        g(qOt(), "client", pW()),
        g(KOt(), "client", fW()),
        g(YOt(), "client", EW()),
        g(va(), "agent", _bo()),
        g(Ca(), "agent", bbo()),
        g(za(), "agent", Sbo()),
        g(Oa(), "agent", wbo()),
        g(ka(), "agent", vbo())
    ]);
const cr = p(()=>u({
        type: A("control_request"),
        request_id: o().describe("Chosen by the sender, unique among its in-flight requests; the control_response (and any control_cancel_request) for this request echoes it."),
        request: SW()
    }).describe("Envelope for a control-protocol request, sent by either side on the same stream as the messages. The receiver normally answers with exactly one control_response carrying the same request_id (a few request types document when no answer is sent), and a requester ignores responses for request_ids it is not waiting on. Each request type's own documentation says which side sends it and what its success response carries."));
const qy = p(()=>T(qE(()=>cr())).optional().describe('can_use_tool requests this CLI process has issued and not yet resolved, so a client joining an already-initialized session learns about in-flight prompts. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". A prompt inherited from a previous worker of the same session can remain answerable without appearing here and without a control_cancel_request; session_state "requires_action" on the same reply signals one the CLI is holding, but not every inherited prompt is signalled.'));
const Gy = p(()=>T(qE(()=>cr())).optional().describe('request_user_dialog requests this CLI process has issued and not yet resolved (sibling of pending_permission_requests, with the same inherited-prompt caveat), so a client joining an already-initialized session can re-arm in-flight dialogs. Always present (possibly empty) on a success `initialize` response from Claude Code v2.1.268 or later; earlier versions could omit it, so treat absence as an older CLI rather than as "nothing pending". Receivers must tolerate the same request_id also arriving as a live or replayed control_request frame and render it once.'));
const bW = p(()=>u({
        subtype: A("success"),
        request_id: o().describe("The request_id of the control_request this answers."),
        response: ue(o(), oe()).optional().describe("The success payload, shaped as documented for the answered request's subtype; absent or {} for requests that are merely acknowledged."),
        pending_permission_requests: qy(),
        pending_user_dialog_requests: Gy()
    }).describe("The request was handled."));
const TW = p(()=>u({
        subtype: A("error"),
        request_id: o().describe("The request_id of the control_request this answers."),
        error: o().describe("Human-readable failure description."),
        error_code: U(Ow).optional().catch(undefined).describe("@internal Why the request failed, for the errors a host or client can act on, stamped from the state the handler branched on (never parsed from `error`). set_model: invalid_request, catalog_unknown, restricted_by_org, unavailable_for_account, not_offered (a newer Claude Code may offer it), alias_1m_disabled (CLAUDE_CODE_DISABLE_1M_CONTEXT), alias_1m_unsupported, blocked_by_hook, check_failed (a retry may pass), model_not_current. set_permission_mode: invalid_mode, bypass_restricted, bypass_disabled, bypass_not_launched, and for auto auto_mode_settings, auto_mode_circuit_breaker, auto_mode_fast_mode, auto_mode_model or auto_mode_unavailable. remote_control (a failed enable whose cause the bridge reported): remote_control_auth (sign in again), remote_control_terminal, remote_control_ended_elsewhere, remote_control_policy_disabled. get_workspace_diff: workspace_diff_pending (the diff was not ready when the reply was due; ask again shortly, since a diff that finishes in the meantime is returned to the next request that comes within a minute). interrupt (a claude-code-server tenant, by worker_epoch): stale_worker_epoch (it is for another worker life; no turn was stopped), invalid_worker_epoch (it is no whole number of 1 or more; likewise). Absent on every other error; new values are additive, so treat an unknown one as absent."),
        pending_permission_requests: qy(),
        pending_user_dialog_requests: Gy()
    }).describe("The request failed or was rejected (unknown subtype, invalid arguments, or an error while handling it)."));
const okr = p(()=>u({
        type: A("control_response"),
        response: Ue([
            bW(),
            TW()
        ])
    }).describe("Envelope for the single reply to a control_request, sent by whichever side received the request."));
const XOt = p(()=>u({
        type: A("control_cancel_request"),
        request_id: o().describe("The request_id of the control_request being withdrawn.")
    }).describe("Tells the other side that the sender no longer needs the answer to one of its own in-flight control_requests (for example a pending can_use_tool prompt after the turn was interrupted, or one that another client already answered). Either side may send it for a request it originated. The sender stops waiting at once and ignores any control_response that still arrives for that request_id; a receiver that can abort the work does so and may still reply (typically with an error), otherwise it simply completes the request. There is no reply to the cancel itself."));
const By = p(()=>u({
        type: A("keep_alive")
    }).describe("Liveness heartbeat with no payload. Either side may send it at any time (the CLI emits it periodically, for example while a long-running control request is in progress); receivers must ignore it."));
const AW = p(()=>u({
        type: A("update_environment_variables"),
        variables: ue(o(), o()),
        request_id: o().optional()
    }).describe("Updates environment variables at runtime."));
const wW = p(()=>u({
        type: A("session_notice"),
        uuid: o(),
        notice_class: o().describe('Server-chosen notice class: "peer_notice" | "helper_lifecycle" | "handoff" (open snake_case set; unknown tokens are carried verbatim).'),
        from_session_id: o().describe("Server-verified sender session id."),
        content: o(),
        isSynthetic: A(true).describe("Server-asserted synthetic stamp — stripped from inbound copies at CCR ingress and re-stamped only by the notice composer."),
        inbound_origin: A("mcp_session_notice").describe("Server-asserted ingest-path marker, same strip-and-restamp discipline as isSynthetic."),
        session_id: o().optional()
    }).describe("@internal Backend→CLI: a server-composed coordination notice for a sealed helper session, delivered to the model over the Poll event channel as a provenance-attributed <event> envelope (never a user turn, never a synthetic message). The CLI acks processed only when the Poll delivery settles into the transcript; undelivered notices redeliver."));
const yW = p(()=>u({
        type: A("queued_notification"),
        notification: u({
            notification_id: o().describe("Server-assigned stable id — the dedup key across redeliveries."),
            origin: o().describe('Server-attested source token: "github_webhook" | "trigger_fire" | "mcp_send_message" (open set; unknown values render verbatim).'),
            content: o().describe("Exactly the text that would previously have been injected as a user turn, framing included."),
            priority: U([
                "now",
                "next",
                "later"
            ]),
            queued_at: o().describe("RFC3339 timestamp of when the backend queued it.")
        }),
        uuid: o().optional(),
        session_id: o().optional()
    }).describe("@internal Backend→CLI: a trigger delivery (webhook activity, scheduled trigger, agent message) queued server-side instead of injected as a user turn. The CLI buffers it, nudges the model to call the ReadNotifications tool, and acks the event processed only when drained — an undrained event redelivers on resume."));
const bJ = p(()=>Ue([
        ho(),
        so(),
        ro(),
        no(),
        oo(),
        lo(),
        co()
    ]).describe("Observational messages the agent loop emits — fire-and-forget, no reply expected. The remaining StdoutMessage members are control-protocol traffic (requests the loop originates and needs a reply to, responses to client-originated requests, keep-alives). This sub-union is the target for QueryEvent convergence so a Transport-shaped REPL can consume events without filtering control noise."));
const Ebo = p(()=>Ue([
        ho(),
        so(),
        ro(),
        no(),
        oo(),
        lo(),
        okr(),
        cr(),
        XOt(),
        By(),
        co()
    ]).describe("Everything the CLI writes to its output stream (stdout in stream-json mode): exactly one StdoutMessage per line, as a single JSON object. Besides the SDKMessage members this includes the control protocol - control requests the CLI originates, control responses to the client's requests, cancellations and keep-alives."));
const TJ = p(()=>Ue([
        sr(),
        oy(),
        cr(),
        okr(),
        XOt(),
        By(),
        AW(),
        yW(),
        wW()
    ]).describe("Everything a client may write to the CLI's input stream (stdin in stream-json input mode): exactly one StdinMessage per line, as a single JSON object - user messages that start turns, control requests the client originates, control responses answering the CLI's requests, cancellations and keep-alives. initialize is optional and normally the first line; the first user message initializes with defaults. An initialize that arrives later (e.g. from a client joining the session) is answered with the current state: the one-time session setup (e.g. system prompt, agents, skills, supportedDialogKinds) is not re-applied, but title, sdkMcpServers and agentProgressSummaries are still processed on every initialize, and hooks sent by the process that owns this stream replace the earlier set (see hooks_applied on the response). Closing the stream tells the CLI to finish the current turn and exit."));
function RW(e) {
    return [
        ...e.replace(/[\x00-\x1f\x7f-\x9f]/g, "")
    ].slice(0, wP).join("");
}
function ci(e) {
    return RW(Rn(e.trim())).trim();
}
const Be = "Bash";
const Ct = "PowerShell";
async function KTs(e, s, r) {}
const vW = p(()=>u({
        lineage: o().min(1),
        source: oe().optional()
    }));
function een(e) {
    let s = vW().safeParse(e);
    if (!s.success) {
        return;
    }
    let { lineage, source } = s.data;
    return {
        lineage,
        source: source === "typed" || source === "relay" || source === "owner" ? source : "unattributed"
    };
}
function Yoe(e) {
    return e.type === "queued_command" && een(e.forwardedIntent) !== undefined;
}
export { _ct, pO, G6e, j_o, ROt, oSe, GZt, ew, qRe, Koe, VEr, W_o, k1n, V6e, qEr, xOt, q6e, hP, POt, VZt, qZt, K6e, P7, SF, KEr, sSe, z_o, KZt, G_o, V_o, YZt, Mb, d1, BV, q_, h_, wF, Hb, _z, T1n, q_o, XZt, K_o, sC, I7, u1, p1, bz, bct, Y_o, iC, IOt, JZt, OOt, jV, vF, EF, YEr, Th, Sct, iSe, yP, MOt, PTs, X_o, K_, mN, hFe, _P, KRe, ITs, A1n, J_o, OTs, MTs, wn, T8, Qu, rs, f1, A8, Q_o, HTs, cH, YRe, C1n, DTs, Z_o, ebo, LTs, O7, aSe, ty, NTs, K$s, m1, bR, lp, yFe, si, tbo, nbo, QZt, XRe, rbo, obo, XEr, WV, _Fe, k2s, JEr, R1n, x1n, wct, QEr, ZZt, Y6e, ZEr, een, Yoe, Mu, kF, Si, $Ts, P1n, TF, sbo, FTs, Da, bFe, Of, vct, ht, ten, nen, ren, oen, sen, ien, HOt, aen, UTs, C8, Xt, ibo, BTs, jTs, WTs, zTs, abo, I1n, X6e, O1n, len, GTs, M7, dH, Ect, VTs, M1n, qTs, ekr, tkr, nkr, H1n, DOt, lbo, J6e, D1n, rkr, cbo, L1n, dbo, ubo, N1n, $1n, pbo, fbo, F1n, kct, U1n, B1n, j1n, JRe, W1n, z1n, G1n, mbo, cen, gbo, hbo, ybo, V1n, q1n, K1n, Y1n, LOt, X1n, NOt, $Ot, FOt, UOt, BOt, jOt, WOt, zOt, GOt, VOt, qOt, den, _bo, bbo, Sbo, wbo, vbo, KOt, YOt, okr, XOt, Ebo, ci, Be, Ct, KTs };
