import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
function u() {
    let r = Oe();
    let e = new Map;
    let o = 0;
    return {
        emit (i, s) {
            if (o === 0) {
                e.set(i, s);
                return;
            }
            r.emit(i, s);
        },
        subscribe (i) {
            o++;
            let s = [
                ...e
            ];
            e.clear();
            for (let [g, l] of s){
                i(g, l);
            }
            let c = r.subscribe(i);
            let n = true;
            return ()=>{
                if (n) {
                    n = false;
                    o--;
                    c();
                }
            };
        }
    };
}
const fqn = new lt(u);
function lan(r) {
    return (e, o)=>{
        t(`[remote-tools] ${e}: ${o}`);
        fqn.of(r).emit(e, o);
    };
}
export { fqn, lan };
