import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { os } from "/$bunfs/root/chunk-3yz9zdww.js";
import { jc } from "/$bunfs/root/chunk-38fr02qr.js";
import { ICt } from "/$bunfs/root/chunk-k5fhce8z.js";
import { sep } from "path";
function _nt(t) {
    if (Ce()) {
        return null;
    }
    let e = `${ICt()}${sep}`;
    let n = ".output";
    if (t.startsWith(e) && t.endsWith(n)) {
        let r = t.slice(e.length, -n.length);
        if (r.length > 0 && r.length <= 20 && /^[a-zA-Z0-9_-]+$/.test(r)) {
            return r;
        }
    }
    return null;
}
function vts(t) {
    if (t?.file_path?.startsWith(jc())) {
        return "Reading Plan";
    }
    if (t?.file_path && _nt(t.file_path)) {
        return "Read agent output";
    }
    return "Read";
}
function p7r(t) {
    if (!t?.file_path) {
        return null;
    }
    let e = _nt(t.file_path);
    if (e) {
        return e;
    }
    return os(t.file_path);
}
export { _nt, vts, p7r };
