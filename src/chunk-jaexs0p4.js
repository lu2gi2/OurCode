import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { hh, sos } from "/$bunfs/root/chunk-qwvy7ma3.js";
function PMr() {
    let t;
    let o = false;
    let r = ()=>{
        if (hh()) {
            o = true;
            import("/$bunfs/root/chunk-edg86y8x.js").then(({ createRemoteToolHostsRuntime })=>{
                t = createRemoteToolHostsRuntime();
            }).catch((e)=>{
                c(W(e));
                o = false;
            });
        }
    };
    let loopbackDev;
    sos({
        get remote () {
            if (!o) {
                r();
            }
            return t;
        },
        ...loopbackDev !== undefined && {
            loopbackDev
        }
    });
    if (hh()) {
        r();
    }
}
export { PMr };
