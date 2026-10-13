import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
class s {
    #t = new Map;
    #n = 0;
    notePost(t) {
        this.#t.set(t, (this.#t.get(t) ?? 0) + 1);
        this.#n++;
    }
    forgetPost(t) {
        let n = this.#t.get(t) ?? 0;
        if (n <= 1) {
            this.#t.delete(t);
        } else {
            this.#t.set(t, n - 1);
        }
        this.#n = Math.max(0, this.#n - 1);
    }
    atBound(t, n) {
        return this.postsSinceHumanTurn(t) >= n.maxSelfHops || this.#n >= n.maxChainLength;
    }
    noteHumanTurn() {
        this.#t.clear();
        this.#n = 0;
    }
    postsSinceHumanTurn(t) {
        return this.#t.get(t) ?? 0;
    }
    totalPostsSinceHumanTurn() {
        return this.#n;
    }
}
const o = new lt(()=>new s);
