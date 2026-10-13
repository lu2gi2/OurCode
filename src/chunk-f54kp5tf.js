import { ef, tF } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Xd, Gae, OHe, p3, f3 } from "/$bunfs/root/chunk-kasbfbhj.js";
function s(o, t) {
    let enabled = ef();
    let e = Xd(o);
    let effectiveWindow = p3(e, t);
    let threshold = f3(e, t);
    let enforced = !(tF() && !Gae(e, t));
    return {
        enabled,
        effectiveWindow,
        threshold,
        enforced,
        source: OHe(e, t)
    };
}
function MHo(o) {
    let t;
    return {
        notify (c, e) {
            let n = s(c, e);
            if (t !== undefined && UOr(t, n)) {
                return;
            }
            t = n;
            o(n);
        },
        reset () {
            t = undefined;
        }
    };
}
function UOr(o, t) {
    return o.enabled === t.enabled && o.effectiveWindow === t.effectiveWindow && o.threshold === t.threshold && o.enforced === t.enforced && o.source === t.source;
}
export { MHo, UOr };
