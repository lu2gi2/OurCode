import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { cH, C1n } from "/$bunfs/root/chunk-6dwnw6av.js";
class n {
    active = undefined;
    transportPersists = undefined;
    hostedWorker = false;
    setActive(r) {
        this.active = r;
        this.transportPersists = r?.persistsOutboundFrames;
        this.hostedWorker = r?.isHostedWorker === true;
    }
    remoteBridgeLive = null;
    bridgeMayBeLive() {
        return this.remoteBridgeLive === null || this.remoteBridgeLive();
    }
    markLocalTransport() {
        this.transportPersists = false;
    }
}
const oS = new lt(()=>new n);
function Jp(r) {
    return C1n({
        hostedWorker: xpr(r),
        transportPersists: oS.of(r).transportPersists
    });
}
function las(r) {
    return cH() && oS.of(r).transportPersists === true;
}
function xpr(r) {
    return r.host.launchOptions.diskless() || oS.of(r).hostedWorker;
}
function lo(r) {
    return Jp(r) || oS.of(r).bridgeMayBeLive();
}
function Iro(r, e) {
    if (Jp(r)) {
        return Oro(e);
    }
    return e;
}
function Oro(r) {
    return r.map((e)=>({
            name: e.name,
            status: e.status
        }));
}
function Mro(r, e) {
    if (Jp(r)) {
        return [];
    }
    return e;
}
function Ppr(r, e, s, i = "last") {
    try {
        if (!Jp(r)) {
            if (i === "first") {
                return [
                    e,
                    ...s
                ];
            }
            return [
                ...s,
                e
            ];
        }
        for (let o of s){
            t(`error_during_execution detail: ${o}`, {
                level: "error"
            });
        }
        return [
            e
        ];
    } catch (error) {
        c(W(error));
        return [
            e
        ];
    }
}
function sQ(r, e, s) {
    if (Jp(r)) {
        return s;
    }
    return e;
}
export { oS, Jp, las, xpr, lo, Iro, Oro, Mro, Ppr, sQ };
