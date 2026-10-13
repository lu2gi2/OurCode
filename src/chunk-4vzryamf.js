import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { OO, zv, Ph, Wy } from "/$bunfs/root/chunk-3fj60qgx.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Mg, wCr } from "/$bunfs/root/chunk-2d9a83dh.js";
import { _T } from "/$bunfs/root/chunk-4m0tjfqq.js";
import { dirname, join } from "path";
import { realpath } from "fs";
import { promisify } from "util";
const h = promisify(realpath.native);
function c(e) {
    if (/^[A-Za-z0-9_-]{1,128}$/.test(e)) {
        return e;
    }
    return OO(e);
}
async function d(e, t, { isRootResolved = false } = {}) {
    if (isRootResolved) {
        return On(e);
    }
    return Wy(e, _T(t));
}
async function XWo(e, t, n, i) {
    return join(Ph(await d(e, n, i)), X8n(t));
}
async function JWo(e, t, backend, i) {
    let o = await d(e, backend, i);
    let path = join(Ph(o), X8n(t));
    let projectKey = zv(o);
    let s = backend === undefined ? undefined : jBr(projectKey, t);
    return {
        path,
        projectKey,
        v5: backend === undefined || s === undefined ? undefined : {
            backend,
            key: s
        }
    };
}
function jBr(e, t) {
    let n = $e.dirSyncRecord(e, c(t));
    if (Mg(n) === undefined) {
        return n;
    }
}
function X8n(e) {
    return `${c(e)}${wCr}`;
}
export { XWo, JWo, jBr, X8n };
