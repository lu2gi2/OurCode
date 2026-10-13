import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
class s {
    #t = new Set;
    #e = new Map;
    lastBellAt = 0;
    claim(t) {
        if (this.#t.has(t)) {
            return false;
        }
        this.#t.add(t);
        return true;
    }
    has(t) {
        return this.#t.has(t);
    }
    claimIfChanged(t, e) {
        if (this.#e.get(t) === e) {
            return false;
        }
        this.#e.set(t, e);
        return true;
    }
}
const R8 = new q(()=>new s);
function ea() {
    return R8.of(B().host);
}
export { R8, ea };
