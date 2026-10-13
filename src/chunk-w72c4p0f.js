import { Lc } from "/$bunfs/root/chunk-wvwcne5b.js";
import { got } from "/$bunfs/root/chunk-cmf2ckg9.js";
import { P, R, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
function us(n, e, t) {
    let r = Lc();
    let i = r?.getDisplayText(n, e);
    let o = i === undefined;
    let s = r ? "action_not_found" : "no_context";
    let u = R(false);
    P(()=>{
        if (o && !u.current) {
            u.current = true;
            got(n, e, t, s);
        }
    }, [
        o,
        n,
        e,
        t,
        s
    ]);
    if (o) {
        return t;
    }
    if (i === null) {
        return "";
    }
    return i;
}
export { us };
