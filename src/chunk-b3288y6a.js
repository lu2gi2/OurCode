import { Yc } from "/$bunfs/root/chunk-qch5xj2a.js";
const Yyn = 64;
function Xyn(r, i) {
    let content = r;
    for(let op = 0; op < i.length; op++){
        let { find, replace } = i[op];
        if (!Yc(find) || !Yc(replace)) {
            return {
                ok: false,
                reason: "malformed",
                op
            };
        }
        let n = find === "" ? -1 : content.indexOf(find);
        if (n === -1) {
            return {
                ok: false,
                reason: "not_found",
                op
            };
        }
        if (content.indexOf(find, n + 1) !== -1) {
            return {
                ok: false,
                reason: "ambiguous",
                op
            };
        }
        content = content.slice(0, n) + replace + content.slice(n + find.length);
    }
    if (content === r) {
        return {
            ok: false,
            reason: "noop"
        };
    }
    return {
        ok: true,
        content
    };
}
export { Yyn, Xyn };
