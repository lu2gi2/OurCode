import { we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { Ae, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Md } from "/$bunfs/root/chunk-3yz9zdww.js";
import { VSe, ur } from "/$bunfs/root/chunk-2d9a83dh.js";
import { C5e, x5e } from "/$bunfs/root/chunk-2321ytcf.js";
import { realpath } from "fs/promises";
async function IMo(e) {
    try {
        let o = await C5e();
        if (!o) {
            t("Not in a GitHub repository, skipping path mapping update");
            return;
        }
        let r = we();
        let s = ur(r) ?? r;
        let i;
        try {
            i = On(await realpath(s));
        } catch  {
            i = s;
        }
        let n = o.toLowerCase();
        let p = ce().githubRepoPaths?.[n] ?? [];
        if (p[0] === i) {
            t(`Path ${i} already tracked for repo ${n}`);
            return;
        }
        let f = p.filter((c)=>c !== i);
        let h = [
            i,
            ...f
        ];
        await Ae((c)=>({
                ...c,
                githubRepoPaths: {
                    ...c.githubRepoPaths,
                    [n]: h
                }
            }), e);
        t(`Added ${i} to tracked paths for repo ${n}`);
    } catch (error) {
        t(`Error updating repo path mapping: ${error}`);
    }
}
function Iin(e) {
    let o = ce();
    let r = e.toLowerCase();
    return o.githubRepoPaths?.[r] ?? [];
}
async function Oin(e) {
    let o = await Promise.all(e.map(Md));
    return e.filter((r, a)=>o[a]);
}
async function IIr(e, o) {
    try {
        let r = await VSe(e);
        if (!r) {
            return false;
        }
        let a = x5e(r);
        if (!a) {
            return false;
        }
        return a.toLowerCase() === o.toLowerCase();
    } catch  {
        return false;
    }
}
function OIr(e, o, r) {
    let a = ce();
    let s = e.toLowerCase();
    let i = a.githubRepoPaths?.[s] ?? [];
    let n = i.filter((p)=>p !== o);
    if (n.length === i.length) {
        return;
    }
    let githubRepoPaths = {
        ...a.githubRepoPaths
    };
    if (n.length === 0) {
        delete githubRepoPaths[s];
    } else {
        githubRepoPaths[s] = n;
    }
    Ae((p)=>({
            ...p,
            githubRepoPaths
        }), r);
    t(`Removed ${o} from tracked paths for repo ${s}`);
}
export { IMo, Iin, Oin, IIr, OIr };
