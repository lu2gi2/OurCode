import { l, v, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { J_ } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ep } from "/$bunfs/root/chunk-3yz9zdww.js";
import { rs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { BRn, Ylr, TYt, Hnt, CYt } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { lstat, opendir } from "fs/promises";
import { join, sep } from "path";
async function m$t() {
    let o = await CYt();
    if (o !== null) {
        return {
            root: o,
            nested: false,
            followsShell: false
        };
    }
    let r = await b();
    if (r === null) {
        return null;
    }
    return {
        ...r,
        nested: true
    };
}
const S = 256;
async function b() {
    try {
        if (!rs() || qe.isSandboxingEnabled()) {
            return null;
        }
        let o = Hnt();
        if (J_(o) !== null) {
            return null;
        }
        let r = se();
        let i = BRn();
        if (i.size > 1) {
            let n = Ylr(r);
            let e = n === undefined ? undefined : i.get(n);
            let p = e !== undefined && await f(e) === "directory" ? await u(e) : null;
            if (p === null) {
                return null;
            }
            return {
                root: p,
                followsShell: true
            };
        }
        let [a] = i.values();
        if (a !== undefined) {
            let n = await f(a);
            if (n === "directory") {
                let e = await u(a);
                if (e === null) {
                    return null;
                }
                return {
                    root: e,
                    followsShell: false
                };
            }
            if (n === "other") {
                return null;
            }
        }
        let s = [];
        let w = 0;
        for await (let n of (await opendir(o))){
            if (++w > S) {
                return null;
            }
            if (!n.isDirectory() || n.name.startsWith(".")) {
                continue;
            }
            let e = join(o, n.name);
            if (await f(e) !== "absent") {
                s.push(e);
            }
        }
        let d = ep(r);
        let m = s.find((n)=>{
            let e = ep(n);
            return d === e || d.startsWith(e + sep);
        }) ?? (s.length === 1 ? s[0] : undefined);
        let h = m === undefined ? null : await u(m);
        if (h === null) {
            return null;
        }
        return {
            root: h,
            followsShell: s.length > 1
        };
    } catch (error) {
        if (Nf(error)) {
            t(`workspace diff: nested repository scan failed: ${l(error)}`, {
                level: "warn"
            });
        } else {
            c(error);
        }
        return null;
    }
}
async function f(o) {
    try {
        if ((await lstat(join(o, ".git"))).isDirectory()) {
            return "directory";
        }
        return "other";
    } catch (error) {
        let i = v(error);
        if (i === "ENOENT" || i === "ENOTDIR") {
            return "absent";
        }
        throw error;
    }
}
async function u(o) {
    if (TYt(o) === null) {
        return null;
    }
    return CYt(undefined, o);
}
export { m$t };
