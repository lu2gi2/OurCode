import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { nU, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Qe, dy } from "/$bunfs/root/chunk-qch5xj2a.js";
import { An, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Pp, Ot, $Ue } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ho } from "/$bunfs/root/chunk-wew3321y.js";
import { qY } from "/$bunfs/root/chunk-zwxj12s4.js";
import { IP, Mut } from "/$bunfs/root/chunk-tfc1vf2h.js";
const Q8 = String.raw`(?!\.{1,2}(?:/|$))[A-Za-z0-9_.][\w.-]*`;
const Vzn = String.raw`[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)*`;
const wTo = `(?:${Q8}/)+${Q8}/-/merge_requests`;
const vTo = String.raw`[a-z0-9-]+-review\.googlesource\.com`;
const qzn = new RegExp(String.raw`^https://${vTo}/c/(?:${Q8}/)*${Q8}/\+/\d{1,9}$`);
const PPs = new RegExp(`^https?://${Vzn}(?::\\d{1,5})?/${wTo}/\\d+$`);
const DUe = 2048;
function _se(e) {
    return /\/-\/merge_requests\/\d/.test(e);
}
let ETo;
function HHt({ file, args, cwd, env }, l) {
    return ct(file, args, {
        ...l,
        encoding: l.encoding ?? ETo,
        cwd,
        env,
        extendEnv: false
    });
}
const b = 21;
function RN(e) {
    return e.owner.includes("/");
}
function mrn() {
    Pp().repositoryByCwd.clear();
    Pp().remoteHostByCwd.clear();
}
async function C5e() {
    let e = await OR();
    if (!e) {
        return null;
    }
    if (!ho(e.host)) {
        return null;
    }
    return `${e.owner}/${e.name}`;
}
class y {
    guards = null;
    setGuards(e) {
        this.guards = e;
    }
    blocked() {
        if (!this.guards) {
            return true;
        }
        try {
            return !this.guards.trustProbe();
        } catch  {
            return true;
        }
    }
}
const C = new q(()=>new y);
function Out() {
    return C.of(B().host);
}
function grn(e) {
    Out().setGuards(e);
}
async function _Cr(e, o) {
    if (Out().blocked()) {
        return null;
    }
    let r = o ?? Ot();
    let n = (...m)=>{
        let f = [
            ...An,
            ...m
        ];
        let p = {
            preserveOutputOnError: false
        };
        if (typeof r === "string") {
            return ct(r, f, {
                ...p,
                cwd: e
            });
        }
        return HHt(r(f), p);
    };
    let l = await n("remote", "get-url", "origin");
    if (l.code === 0 && l.stdout.trim()) {
        return {
            name: "origin",
            url: l.stdout.trim()
        };
    }
    let i = await n("remote");
    let u = i.code === 0 ? Qe(i.stdout.trim(), `
`).trim() : undefined;
    if (!u) {
        return null;
    }
    let a = await n("remote", "get-url", u);
    let s = a.code === 0 ? a.stdout.trim() : "";
    if (!s) {
        return null;
    }
    return {
        name: dy(u),
        url: s
    };
}
async function R5e(e) {
    return (await _Cr(e))?.url ?? null;
}
async function kTo(e) {
    return (await G(e)).url;
}
async function G(e) {
    if (Out().blocked()) {
        return {
            url: null,
            answered: false
        };
    }
    let { stdout, code, exitCode } = await ct(Ot(), [
        ...An,
        "remote",
        "get-url",
        "--push",
        "origin"
    ], {
        cwd: e,
        preserveOutputOnError: false
    });
    let l = code === 0 ? stdout.trim() || null : null;
    return {
        url: l,
        answered: l !== null || exitCode === 2
    };
}
async function OR(e, o) {
    let r = e ?? se();
    let repositoryByCwd = Pp().repositoryByCwd;
    if (!o?.skipCache && repositoryByCwd.has(r)) {
        let i = repositoryByCwd.get(r) ?? null;
        if (!i || !RN(i)) {
            return i;
        }
    }
    let l = ()=>{
        let i = repositoryByCwd.get(r);
        if (i && RN(i)) {
            repositoryByCwd.delete(r);
        }
    };
    try {
        let i = await R5e(r);
        t(`Git remote URL: ${$Ue(i)}`);
        if (!i) {
            t("No git remote URL found");
            Pp().remoteHostByCwd.delete(r);
            l();
            return null;
        }
        let u = null;
        let s = ((p)=>{
            let d = mC(p);
            if (d && RN(d)) {
                u ??= d;
                return null;
            }
            return d;
        })(i);
        let m = false;
        if (!s) {
            let { stdout, code, exitCode } = await ct(Ot(), [
                ...An,
                "config",
                "--get",
                "remote.origin.url"
            ], {
                cwd: r,
                preserveOutputOnError: false
            });
            let g = code === 0 ? stdout.trim() : null;
            let E = g !== null || exitCode === 1;
            if (g && g !== i) {
                s = mC(g);
                if (s && RN(s)) {
                    u ??= s;
                    s = null;
                }
            }
            if (!s) {
                let R = await G(r);
                let h = R.url;
                if (h && h !== i && h !== g) {
                    s = mC(h);
                    if (s && RN(s)) {
                        u ??= s;
                        s = null;
                    }
                }
                m = E && R.answered;
            }
        }
        s ??= u;
        t(`Parsed repository: ${s ? `${s.host}/${s.owner}/${s.name}` : null} from URL: ${$Ue(i)}`);
        let f = s?.host ?? Mut(i);
        if (f) {
            Pp().remoteHostByCwd.set(r, f);
        } else {
            Pp().remoteHostByCwd.delete(r);
        }
        if (s) {
            repositoryByCwd.set(r, s);
        } else if (m) {
            repositoryByCwd.delete(r);
        }
        return s;
    } catch (error) {
        t(`Error detecting repository: ${error}`);
        l();
        return null;
    }
}
function TTo() {
    let e = Pp().repositoryByCwd.get(se());
    if (!e || !ho(e.host)) {
        return null;
    }
    return `${e.owner}/${e.name}`;
}
function bCr() {
    return Pp().repositoryByCwd.get(se())?.host ?? null;
}
function ATo(e) {
    if (_se(e) || /^!\d+$/.test(e)) {
        return true;
    }
    if (/^https?:\/\//i.test(e)) {
        return false;
    }
    let o = bCr();
    return o !== null && IP(o) === "gitlab";
}
function CTo(e) {
    let r = /\/-\/merge_requests\/(\d+)/.exec(e)?.[1] ?? e.replace(/^!(\d+)$/, "$1");
    if (/^[A-Za-z0-9][A-Za-z0-9._\/-]*$/.test(r)) {
        return r;
    }
    return "";
}
const _ = new RegExp(`^(https?://${Vzn}(?::\\d{1,5})?/(?:${Q8}/)+${Q8})/-/merge_requests/\\d`);
function RTo(e) {
    return _.exec(e)?.[1] ?? null;
}
function DHt() {
    return Pp().remoteHostByCwd.get(se()) ?? null;
}
function hrn() {
    let e = se();
    let repositoryByCwd = Pp().repositoryByCwd;
    if (!repositoryByCwd.has(e)) {
        return;
    }
    let r = repositoryByCwd.get(e);
    return !!r && ho(r.host);
}
function mC(e) {
    let o = e.trim();
    if (nU(o) || qY(o)) {
        return null;
    }
    let r = o.match(/^git@([^:/@]+):([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
    if (r?.[1] && r[2] && r[3]) {
        if (!w(r[1])) {
            return null;
        }
        if (!c(r[2]) || !c(r[3])) {
            return null;
        }
        return {
            host: r[1],
            owner: r[2],
            name: r[3]
        };
    }
    let n = o.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/([^/]+)\/([^/]+?)(?:\.git)?\/?$/);
    if (n?.[1] && n[2] && n[3] && n[4]) {
        let l = n[1];
        let i = n[2];
        let u = Qe(i, ":");
        if (!w(u)) {
            return null;
        }
        let host = l === "https" || l === "http" ? i : u;
        if (!c(n[3]) || !c(n[4])) {
            return null;
        }
        return {
            host,
            owner: n[3],
            name: n[4]
        };
    }
    return P(o);
}
function P(e) {
    let o;
    let r;
    let n;
    let l = e.match(/^git@([^:/@]+):(.+?)(?:\.git)?\/?$/);
    if (l?.[1] && l[2]) {
        r = l[1];
        n = l[2];
    } else {
        let a = e.match(/^(https?|ssh|git):\/\/(?:[^@/?#]*@)?([^/:?#@]+(?::\d+)?)\/(.+?)(?:\.git)?\/?$/);
        if (!a?.[1] || !a[2] || !a[3]) {
            return null;
        }
        o = a[1];
        r = a[2];
        n = a[3];
    }
    let i = Qe(r, ":");
    if (!w(i) || IP(i) !== "gitlab") {
        return null;
    }
    let u = n.split("/");
    if (u.length < 3 || u.length > b + 1 || !u.every(c)) {
        return null;
    }
    return {
        host: o === "https" || o === "http" ? r : i,
        owner: u.slice(0, -1).join("/"),
        name: u.at(-1)
    };
}
function LHt(e) {
    let o = e.trim().replace(/\/+$/, "").replace(/^[a-z][a-z0-9+.-]*:\/\/[^/]*/i, "").match(/(?:[:/]|^)([^/:]+)\/([^/:]+?)(?:\.git)?$/);
    if (!o?.[1] || !o[2]) {
        return null;
    }
    if (!c(o[1]) || !c(o[2])) {
        return null;
    }
    return {
        owner: o[1],
        name: o[2]
    };
}
function x5e(e) {
    let o = e.trim();
    let r = mC(o);
    if (r) {
        if (!ho(r.host)) {
            return null;
        }
        return `${r.owner}/${r.name}`;
    }
    if (!o.includes("://") && !o.includes("@") && o.includes("/")) {
        let n = o.split("/");
        if (n.length === 2 && n[0] && n[1]) {
            let l = n[1].replace(/\.git$/, "");
            if (!c(n[0]) || !c(l)) {
                return null;
            }
            return `${n[0]}/${l}`;
        }
    }
    t(`Could not parse repository from: ${o}`);
    return null;
}
const T = /^[A-Za-z0-9._-]+$/;
function c(e) {
    return T.test(e) && !e.startsWith("-") && e !== "." && e !== "..";
}
function w(e) {
    if (!/^[A-Za-z0-9.-]+$/.test(e) || e.startsWith("-") || !e.includes(".")) {
        return false;
    }
    let o = e.split(".").pop();
    if (!o) {
        return false;
    }
    return /^[a-zA-Z]+$/.test(o);
}
export { Q8, Vzn, wTo, vTo, qzn, PPs, DUe, _se, ETo, HHt, RN, mrn, C5e, Out, grn, _Cr, R5e, kTo, OR, TTo, bCr, ATo, CTo, RTo, DHt, hrn, mC, LHt, x5e };
