import { qpe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { tt, D_o, zZt, GEr, z6e } from "/$bunfs/root/chunk-0ycjphb5.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Dr, Ie } from "/$bunfs/root/chunk-nj0630nv.js";
import { wwt } from "/$bunfs/root/chunk-kasbfbhj.js";
function Spn(n) {
    let e = wwt() ? zZt() : undefined;
    let t = tt();
    n();
    if (e === undefined || tt() === t) {
        return;
    }
    D_o(e, {
        forContextWindow: true
    });
    return e;
}
function i(n, e, renderedClientData) {
    let o = import("/$bunfs/root/chunk-fzvjcdz9.js").then(({ refreshBootstrapData })=>refreshBootstrapData(n, e, {
            renderedClientData
        })).then(()=>{}, (r)=>c(r));
    Fgt(o);
    return o;
}
function wpn(n, e, t) {
    return i(n, e, t);
}
function oBo(n) {
    Dr().fetchesClientData = n;
}
function VNr() {
    return Dr().fetchesClientData && Ie() === "firstParty";
}
function Fgt(n) {
    let e = GEr();
    let clientDataFetches = Dr().providerCache.clientDataFetches;
    if (e !== undefined && !(clientDataFetches.get(e) instanceof Promise)) {
        let o = qpe();
        clientDataFetches.set(e, n);
        n.finally(()=>{
            if (clientDataFetches.get(e) === n) {
                if (qpe() === o) {
                    clientDataFetches.set(e, "over");
                } else {
                    clientDataFetches.delete(e);
                }
            }
        });
    }
}
function sBo(n) {
    let clientDataFetches = Dr().providerCache.clientDataFetches;
    for (let [t, o] of clientDataFetches){
        if (o === n) {
            clientDataFetches.set(t, "over");
        }
    }
}
function iBo(n, e) {
    let t = GEr();
    if (t === undefined || !VNr() || z6e()) {
        return;
    }
    let o = Dr().providerCache.clientDataFetches.get(t);
    if (o !== undefined) {
        if (o === "over") {
            return undefined;
        }
        return o;
    }
    return i(n, e, zZt());
}
export { Spn, wpn, oBo, VNr, Fgt, sBo, iBo };
