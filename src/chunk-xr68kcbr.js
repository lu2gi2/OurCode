import { Zm } from "/$bunfs/root/chunk-066dgc2r.js";
import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { rn } from "/$bunfs/root/chunk-223dyewd.js";
import { s, n, R6 } from "/$bunfs/root/chunk-8524cxt8.js";
import { Te, en, gh, R, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { SG } from "/$bunfs/root/chunk-gcvppz5v.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
function uie(i) {
    let o = w(10);
    let { elapsedTimeSeconds, timeoutMs } = i;
    if (elapsedTimeSeconds === undefined && !timeoutMs) {
        return null;
    }
    let l;
    if (o[0] !== timeoutMs) {
        l = timeoutMs ? rn(timeoutMs, {
            hideTrailingZeros: true
        }) : undefined;
        o[0] = timeoutMs;
        o[1] = l;
    } else {
        l = o[1];
    }
    let f = l;
    if (elapsedTimeSeconds === undefined) {
        const m = `(timeout ${f})`;
        let u;
        if (o[2] !== m) {
            u = e(n, {
                dimColor: true,
                children: m
            });
            o[2] = m;
            o[3] = u;
        } else {
            u = o[3];
        }
        return u;
    }
    const m = elapsedTimeSeconds * 1000;
    let u;
    if (o[4] !== m) {
        u = rn(m);
        o[4] = m;
        o[5] = u;
    } else {
        u = o[5];
    }
    let a = u;
    if (f) {
        const c = `(${a} \xB7 timeout ${f})`;
        let d;
        if (o[6] !== c) {
            d = e(n, {
                dimColor: true,
                children: c
            });
            o[6] = c;
            o[7] = d;
        } else {
            d = o[7];
        }
        return d;
    }
    const c = `(${a})`;
    let d;
    if (o[8] !== c) {
        d = e(n, {
            dimColor: true,
            children: c
        });
        o[8] = c;
        o[9] = d;
    } else {
        d = o[9];
    }
    return d;
}
N();
function x() {
    let i = Te(SG);
    let [r, t, o, l] = R6();
    let f = l() ?? t.isVisible;
    return [
        r,
        f || i,
        o
    ];
}
function pA({ children }) {
    let r = Te(Zm);
    let [ref, o, l] = x();
    let f = R(children);
    let [, m] = gh((d)=>d + 1, 0);
    let u = !o;
    if (!u) {
        f.current = children;
    }
    let a = r?.columns;
    let c = r?.rows;
    en(()=>{
        if (u && l()) {
            m();
        }
    }, [
        a,
        c,
        u,
        l
    ]);
    return e(s, {
        ref,
        children: f.current
    });
}
function Tfe(i) {
    let [r, t] = x();
    let o = R(i);
    if (t) {
        o.current = i;
    }
    return [
        r,
        o.current
    ];
}
export { pA, Tfe, uie };
