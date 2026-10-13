import { oG, kBe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { PD } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Po, g1, rr, I8, xn } from "/$bunfs/root/chunk-k3tkc302.js";
function NVo(a) {
    let e = a.trim();
    let env = Po();
    let t = g1(e);
    if (t !== null) {
        return {
            slug: t,
            url: xn({
                slug: t,
                env
            })
        };
    }
    let n = e.toLowerCase();
    if (rr.test(n)) {
        return {
            slug: n,
            url: xn({
                slug: n,
                env
            })
        };
    }
    let o = I8(e);
    if (o === null) {
        return {
            error: "Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"
        };
    }
    if (o.env !== env) {
        return {
            error: `Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${env}`
        };
    }
    return {
        slug: o.slug,
        url: xn(o)
    };
}
let s = null;
function $Vo(a) {
    s = a;
}
function FVo() {
    let a = s;
    s = null;
    return a;
}
function UVo() {
    return s;
}
function sWt(a) {
    let e = [];
    for(let r = 0; r < a.length; r++){
        let t = a[r];
        if (t === "--watch-artifact" || t === "--watch-artifact-no-autoreact") {
            r++;
            continue;
        }
        if (t.startsWith("--watch-artifact=") || t.startsWith("--watch-artifact-no-autoreact=")) {
            continue;
        }
        e.push(t);
    }
    return e;
}
function CJn(a, e) {
    a = a.toLowerCase();
    let r = [
        "--watch-artifact",
        "--watch-artifact-no-autoreact"
    ];
    let t = oG();
    let n = [];
    let o = false;
    for(let i = 0; i < t.length; i++){
        let c = t[i];
        if (r.some((u)=>c === u && t[i + 1]?.toLowerCase() === a || c.toLowerCase() === `${u}=${a}`)) {
            if (c.indexOf("=") === -1) {
                i++;
            }
            o = true;
            continue;
        }
        n.push(c);
    }
    if (o) {
        kBe(n);
        PD("--watch-artifact", [
            "--watch-artifact-no-autoreact"
        ], null, undefined, e);
    }
}
function BVo(a) {
    let e = oG();
    let r;
    for(let t = 0; t < e.length; t++){
        let n = e[t];
        if (n === "--watch-artifact" && e[t + 1] !== undefined) {
            r = e[t + 1].toLowerCase();
        } else if (n.startsWith("--watch-artifact=")) {
            r = n.slice(17).toLowerCase();
        }
    }
    if (r === undefined) {
        return false;
    }
    kBe([
        ...sWt(oG()),
        "--watch-artifact-no-autoreact",
        r
    ]);
    PD("--watch-artifact-no-autoreact", [
        "--watch-artifact"
    ], r, undefined, a);
    return true;
}
export { NVo, $Vo, FVo, UVo, sWt, CJn, BVo };
