import { ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { YA, iY } from "/$bunfs/root/chunk-vy0qtdrm.js";
function i() {
    return c(iY(ce().env, "globalConfig"), cn("userSettings") ? iY(fe("userSettings")?.env, "userSettings") : {}, iY(fe("flagSettings")?.env, "flagSettings"), iY(fe("policySettings")?.env, "policySettings"));
}
function rAt() {
    return g(YA(), i());
}
function g(s, r) {
    let n = new Set(Object.keys(r).map((e)=>e.toUpperCase()));
    let t = {
        ...s
    };
    for (let e of Object.keys(t)){
        if (!(e in r) && n.has(e.toUpperCase())) {
            delete t[e];
        }
    }
    return Object.assign(t, r);
}
function c(...s) {
    let r = new Map;
    for (let t of s){
        for (let [e, value_1] of Object.entries(t)){
            r.set(e.toUpperCase(), {
                key: e,
                value: value_1
            });
        }
    }
    let n = {};
    for (let { key, value } of r.values()){
        n[key] = value;
    }
    return n;
}
export { rAt };
