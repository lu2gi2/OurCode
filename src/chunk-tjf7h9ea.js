import { q } from "/$bunfs/root/chunk-ctt36bn8.js";
class o {
    restored = false;
    markRestored() {
        this.restored = true;
    }
}
const r = new q(()=>new o);
function vJe(t) {
    r.of(t).markRestored();
}
function rK(t) {
    return r.of(t).restored;
}
export { vJe, rK };
