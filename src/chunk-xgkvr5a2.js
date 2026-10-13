import { Va, ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { gI, _ke, xet, qU, a2, Ex } from "/$bunfs/root/chunk-kasbfbhj.js";
import { $s } from "/$bunfs/root/chunk-2d9a83dh.js";
import { realpathSync } from "fs";
const _Ee = (()=>{
    try {
        return realpathSync(process.cwd());
    } catch  {
        return process.cwd();
    }
})();
function IJn(r, e) {
    let n = gI(r);
    let t = gI(e);
    if (qU(n) || qU(t)) {
        return true;
    }
    if (n.skipped !== t.skipped) {
        return true;
    }
    return _ke(n, t);
}
function sze(r, e) {
    if (ks(r) || Va(r)) {
        return [];
    }
    let n = $s(r);
    let t = n !== null && n !== undefined ? [
        n
    ] : (()=>{
        let o = Ex(r);
        if (o.length > 0) {
            return o;
        }
        return [
            r
        ];
    })();
    if (e === undefined) {
        return t;
    }
    return t.filter((o)=>a2(o, e) !== "same");
}
function l7e(r, e) {
    if (ks(r) || Va(r)) {
        return [];
    }
    let n = $s(r);
    let t = n !== null && n !== undefined ? [
        n
    ] : Ex(r);
    if (e === undefined) {
        return t;
    }
    return t.filter((s)=>a2(s, e) !== "same");
}
function QOe(r, e, n) {
    if (e.length === 0) {
        return false;
    }
    if (!e.every((s)=>{
        let o = a2(r, s);
        if (o === "indeterminate") {
            return false;
        }
        if (o === "same") {
            return true;
        }
        return !IJn(s, r);
    })) {
        return false;
    }
    if (n?.requireCovered === true) {
        let s = gI(r);
        if (qU(s)) {
            return false;
        }
        let o = (a)=>a.some((c)=>{
                let i = gI(c);
                if (qU(i)) {
                    return false;
                }
                return xet(s, i);
            });
        return o(n.coveredWitnesses ?? e) || o(n.extraCoveredRoots ?? []);
    }
    return true;
}
export { _Ee, IJn, sze, l7e, QOe };
