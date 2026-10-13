import { hUe } from "/$bunfs/root/chunk-qk3m4n8a.js";
class o {
    converted = new WeakMap;
    lookup(e) {
        return this.converted.get(e);
    }
    remember(e, t) {
        this.converted.set(e, t);
    }
    reset() {
        this.converted = new WeakMap;
    }
}
const n = new o;
function kM(e) {
    let t = n.lookup(e);
    if (t) {
        return t;
    }
    let r = hUe(e, {
        unrepresentable: "throw"
    });
    n.remember(e, r);
    return r;
}
const Tqe = "attached:";
const Aqe = "created:";
function Cqe(e) {
    return e.startsWith("created:");
}
const hW = "opened:";
function ice(e) {
    return e.startsWith("attached:") || e.startsWith("created:") || e.startsWith(hW);
}
function TM(e) {
    return Object.entries(e).filter(([t])=>!t.startsWith(hW));
}
function xIn(e) {
    return {
        url: e.url,
        title: e.title,
        favicon: e.favicon,
        kind: "frame",
        updated_at: new Date(e.updatedAt).toISOString()
    };
}
export { kM, Tqe, Aqe, Cqe, hW, ice, TM, xIn };
