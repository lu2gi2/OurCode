import { O } from "/$bunfs/root/chunk-79wfew46.js";
import * as fs from "fs/promises";
import * as path from "path";
function Hzt(e = {}) {
    return {
        fs,
        path,
        platform: ()=>O(),
        ...e
    };
}
async function Dzt(e, r) {
    if (r.isRootNameExchangeable === true) {
        return e.path.join(await e.fs.realpath(e.path.dirname(r.realRoot)), e.path.basename(r.realRoot));
    }
    return e.fs.realpath(r.realRoot);
}
export { Hzt, Dzt };
