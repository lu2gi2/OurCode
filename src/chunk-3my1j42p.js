import { vU } from "/$bunfs/root/chunk-ddvfb1p1.js";
import { Te, R, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const YYn = ()=>a;
var a = ()=>{};
const get = ()=>{};
function Re(t, select) {
    let notifier = Te(vU);
    let r = R(null);
    if (r.current === null) {
        r.current = {
            select,
            last: null,
            source: null,
            get,
            notifier,
            subscribe: YYn
        };
    }
    let r_current = r.current;
    r_current.select = select;
    if (r_current.source !== t || r_current.notifier !== notifier) {
        r_current.notifier = notifier;
        r_current.subscribe = t ? notifier?.paced(t.subscribe) ?? t.subscribe : YYn;
    }
    if (r_current.source !== t) {
        r_current.source = t;
        r_current.last = null;
        r_current.get = t ? ()=>{
            let snapshot = t.getSnapshot();
            let r_current_select = r_current.select;
            if (!r_current_select) {
                return snapshot;
            }
            let r_current_last = r_current.last;
            if (r_current_last !== null && r_current_last.snapshot === snapshot && r_current_last.select === r_current_select) {
                return r_current_last.selected;
            }
            let selected = r_current_select(snapshot);
            r_current.last = {
                snapshot,
                select: r_current_select,
                selected
            };
            return selected;
        } : get;
    }
    return Rt(r_current.subscribe, r_current.get, r_current.get);
}
export { YYn, Re };
