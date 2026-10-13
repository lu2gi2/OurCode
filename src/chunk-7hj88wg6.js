import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { on } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { hje } from "/$bunfs/root/chunk-4nfvaqps.js";
N();
function l(o, n, r) {
    return o.isWindowActivation || c(n, r);
}
function ib() {
    let o = on();
    let [n] = y(()=>o.now());
    return le((r)=>{
        let e = o.now();
        if (!l(r, n, e)) {
            return false;
        }
        let reason = r.isWindowActivation ? b("window_activation") : b("mount_settle");
        t(`Select: dropped stray click (${r.isWindowActivation ? "window-activation click" : `${e - n}ms after mount`})`);
        i("tengu_select_stray_click_dropped", {
            reason
        });
        r.dropAsStray();
        return true;
    }, [
        o,
        n
    ]);
}
function Umt() {
    let o = on();
    let [n] = y(()=>o.now());
    return le(()=>c(n, o.now()), [
        o,
        n
    ]);
}
function c(o, n) {
    return n - o < hje;
}
export { ib, Umt };
