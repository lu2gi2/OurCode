import { nU } from "/$bunfs/root/chunk-bd805sh6.js";
import { _q, nr as github, i8e, ho } from "/$bunfs/root/chunk-wew3321y.js";
import { qY } from "/$bunfs/root/chunk-zwxj12s4.js";
function Kxe(r) {
    return r.replace(/:\d+$/, "");
}
const gitlab = "gitlab.com";
const bitbucket = "bitbucket.org";
const IPs = {
    github,
    gitlab,
    bitbucket
};
const n = {
    "ssh.github.com": "github",
    "altssh.gitlab.com": "gitlab",
    "altssh.bitbucket.org": "bitbucket"
};
function IP(r) {
    r = Kxe(r);
    if (ho(r)) {
        return "github";
    }
    let t = i8e(r);
    let i = n[t];
    if (i) {
        return i;
    }
    if (t === gitlab) {
        return "gitlab";
    }
    if (t === bitbucket) {
        return "bitbucket";
    }
    return "other";
}
function Mut(r) {
    let t = r.trim();
    if (_q(t) || nU(t) || qY(t)) {
        return null;
    }
    if (t.includes("://")) {
        try {
            return new URL(t).hostname || null;
        } catch  {
            return null;
        }
    }
    return /^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1] ?? null;
}
function yrn(r) {
    let t = /^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);
    if (t && !nU(r)) {
        return {
            user: t[1],
            host: t[2],
            path: t[3]
        };
    }
    return null;
}
export { Kxe, IPs, IP, Mut, yrn };
