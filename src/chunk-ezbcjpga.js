import { fR } from "/$bunfs/root/chunk-2emxbewd.js";
const im = Symbol("untrustedArray.unreadable");
const tY = "<unreadable list>";
function OE(e) {
    let n;
    try {
        if (!Array.isArray(e)) {
            return;
        }
        n = e.length;
    } catch  {
        return im;
    }
    if (typeof n !== "number" || !Number.isSafeInteger(n) || n < 0 || n > fR) {
        return im;
    }
    let u = [];
    for(let r = 0; r < n; r++){
        let t;
        try {
            t = e[r];
        } catch  {
            t = undefined;
        }
        u.push(t);
    }
    return u;
}
function tbe(e) {
    let n = OE(e);
    if (n === im) {
        return undefined;
    }
    return n;
}
export { im, tY, OE, tbe };
