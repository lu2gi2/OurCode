import { readFileSync } from "fs";
import { readFile } from "fs/promises";
import { isAbsolute, join } from "path";
const g = [
    40,
    181,
    47,
    253
];
function s(r) {
    return r.length >= 4 && g.every((t, e)=>r[e] === t);
}
function o(r, t) {
    if (isAbsolute(r)) {
        return r;
    }
    return join(t, r);
}
async function ost(r, t) {
    let e = await readFile(o(r, t));
    return (s(e) ? await Bun.zstdDecompress(e) : e).toString("utf8");
}
function Je(r, t) {
    return Oio(r, t).toString("utf8");
}
function Oio(r, t) {
    let path = o(r, t);
    try {
        let n = readFileSync(path);
        if (s(n)) {
            return Bun.zstdDecompressSync(n);
        }
        return n;
    } catch (cause) {
        throw Object.assign(Error("embedded asset is missing or corrupt", {
            cause
        }), {
            path
        });
    }
}
export { ost, Je, Oio };
