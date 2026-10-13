import { Ne, vs } from "/$bunfs/root/chunk-j27d47mr.js";
import { aOo, Dd } from "/$bunfs/root/chunk-6kc68p18.js";
function i(n) {
    return {
        parse: (e)=>n(u(e))
    };
}
function t(n) {
    let e = n?.trim();
    if (e) {
        return e;
    }
}
function u(n) {
    if (n === undefined) {
        return undefined;
    }
    return String(n);
}
const o = i(t);
const f = i((n)=>n);
const l = i((n)=>Ne(n));
const s = i((n)=>{
    if (Ne(n)) {
        return true;
    }
    if (vs(n)) {
        return false;
    }
});
const a = d();
function SMs(n) {
    if (typeof n === "boolean") {
        if (n) {
            return "1";
        }
        return "0";
    }
    return String(n);
}
const H = {
    str: ()=>o,
    rawStr: ()=>f,
    bool: ()=>l,
    triBool: ()=>s,
    int: (n)=>{
        if (n) {
            return d(n);
        }
        return a;
    },
    enum: (n)=>i((e)=>{
            if (e !== undefined && n.includes(e.trim())) {
                return e.trim();
            }
        })
};
function d(n) {
    return i((e)=>{
        if (e === undefined) {
            return;
        }
        if (n?.digitsOnly && !/^[+-]?\d+$/.test(e.trim())) {
            return;
        }
        if (n?.wholeValue && !/^[+-]?\d+$/.test(e.trim()) && aOo(e.trim()) === undefined) {
            return;
        }
        let r = Dd(e);
        if (!Number.isFinite(r)) {
            return;
        }
        if (n?.min !== undefined && r < n.min) {
            return;
        }
        if (n?.max !== undefined && r > n.max) {
            return;
        }
        return r;
    });
}
export { SMs, H };
