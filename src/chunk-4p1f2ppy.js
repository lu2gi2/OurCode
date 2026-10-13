import { un } from "/$bunfs/root/chunk-bd805sh6.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { cOe, dw } from "/$bunfs/root/chunk-46as0mn8.js";
import { Kqe } from "/$bunfs/root/chunk-yq147k4z.js";
const o = "\x1B]8;;";
const p = "\x07";
function cw(e, r, t) {
    let s = r === undefined ? undefined : un(r);
    let n = s === undefined || vBr(e, s);
    if (!(n && (t?.assumeSupport ?? false) && process.stdout.isTTY === true && (cOe() ?? true) || (t?.supportsHyperlinks ?? dw()))) {
        let i = t?.shownUrlStart ?? "";
        if (r !== undefined && !n) {
            return `${r}${i} (${e})`;
        }
        return `${i}${e}`;
    }
    let u = ((t?.themeName ? Kqe(t.themeName) : false) ? ge.blue : ge.blueBright)(r ?? e);
    return `${o}${e}${p}${u}${o}${p}`;
}
function vBr(e, r) {
    return r === e || e === `http://${r}` || e === `https://${r}`;
}
export { cw, vBr };
