import { C } from "/$bunfs/root/chunk-cj4xndke.js";
export const $Pt = C(function(c) {
    const i = {};
    const r = {};
    for(let e = 0; e < 256; e++){
        let t = e.toString(16).toLowerCase();
        if (t.length === 1) {
            t = `0${t}`;
        }
        i[e] = t;
        r[t] = e;
    }
    function s(e) {
        if (e.length % 2 !== 0) {
            throw Error("Hex encoded strings must have an even number length");
        }
        let t = new Uint8Array(e.length / 2);
        for(let n = 0; n < e.length; n += 2){
            let o = e.slice(n, n + 2).toLowerCase();
            if (o in r) {
                t[n / 2] = r[o];
            } else {
                throw Error(`Cannot decode unrecognized sequence ${o} as hexadecimal`);
            }
        }
        return t;
    }
    function l(e) {
        let t = "";
        for(let n = 0; n < e.byteLength; n++){
            t += i[e[n]];
        }
        return t;
    }
    c.fromHex = s;
    c.toHex = l;
});
