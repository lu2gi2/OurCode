import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { fB, d5t, got } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { P, R, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function ma(e, i, t) {
    let o = Lc();
    let n = o ? d5t(e, i, o.bindings) : undefined;
    let r = n === undefined;
    let f = o ? "action_not_found" : "no_context";
    let d = R(false);
    P(()=>{
        if (r && !d.current) {
            d.current = true;
            got(e, i, t, f);
        }
    }, [
        r,
        e,
        i,
        t,
        f
    ]);
    if (n === undefined) {
        return t;
    }
    if (n === null) {
        return "";
    }
    return fB(n);
}
export { ma };
