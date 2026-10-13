import { Qk } from "/$bunfs/root/chunk-dze6yaxw.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
const n = Se(Qk());
const e = typeof Buffer !== "undefined" && Buffer.from ? (r)=>Buffer.from(r, "utf8") : n.fromUtf8;
function DPt(r) {
    if (r instanceof Uint8Array) {
        return r;
    }
    if (typeof r === "string") {
        return e(r);
    }
    if (ArrayBuffer.isView(r)) {
        return new Uint8Array(r.buffer, r.byteOffset, r.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(r);
}
function HQt(r) {
    if (typeof r === "string") {
        return r.length === 0;
    }
    return r.byteLength === 0;
}
function Tmo(r) {
    return new Uint8Array([
        (r & 4278190080) >> 24,
        (r & 16711680) >> 16,
        (r & 65280) >> 8,
        r & 255
    ]);
}
function Amo(r) {
    if (!Uint32Array.from) {
        const t = new Uint32Array(r.length);
        let f = 0;
        while(f < r.length){
            t[f] = r[f];
            f += 1;
        }
        return t;
    }
    return Uint32Array.from(r);
}
export { DPt, HQt, Tmo, Amo };
