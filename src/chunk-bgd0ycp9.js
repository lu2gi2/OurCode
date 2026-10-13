import { l, v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { h9 } from "/$bunfs/root/chunk-bd805sh6.js";
import { Io, mt } from "/$bunfs/root/chunk-63xa24b4.js";
import { UIs, nwe } from "/$bunfs/root/chunk-yngqe5v3.js";
import { open, realpath, stat } from "fs/promises";
import { resolve } from "path";
const HUo = "Error: --agents takes a JSON object, or a file path only with --print (-p). Pass the agents as inline JSON, or run with -p to read them from a file.";
const s = 268435456;
function dpn(t) {
    let e = Io(t).trimStart();
    return e.startsWith("{") || mt(e, false) !== null;
}
async function DUo(t) {
    let filePath = resolve(t);
    try {
        await using r = await open(filePath, h9());
        let a = await r.stat({
            bigint: true
        });
        UIs(a, filePath);
        let realPath = await realpath(filePath).catch(()=>filePath);
        let n = await stat(realPath, {
            bigint: true
        });
        if (n.dev !== a.dev || n.ino !== a.ino) {
            return {
                ok: false,
                error: `Error: --agents file changed while it was read: ${filePath}`
            };
        }
        let { content } = await nwe(r, filePath, s);
        return {
            ok: true,
            json: content,
            filePath,
            realPath
        };
    } catch (error) {
        switch(v(error)){
            case "ENOENT":
                return {
                    ok: false,
                    error: `Error: --agents file not found: ${filePath} (a value that is not a JSON object is read as a file path)`
                };
            case "ERR_FILE_TOO_LARGE":
                return {
                    ok: false,
                    error: `Error: --agents file is larger than ${s} bytes: ${filePath}`
                };
            case "ERR_MULTIPLE_LINKS":
                return {
                    ok: false,
                    error: `Error: --agents file has more than one hard link: ${filePath} (its other names are not write-protected; pass a file with one name)`
                };
            default:
                return {
                    ok: false,
                    error: `Error reading --agents file ${filePath}: ${l(error)}`
                };
        }
    }
}
export { HUo, dpn, DUo };
