import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
class Bve {
    #e = false;
    #t = Oe();
    get settled() {
        return this.#e;
    }
    settle() {
        if (this.#e) {
            return;
        }
        this.#e = true;
        try {
            this.#t.emit();
        } catch (error) {
            t(`CountedAsk: a listener threw while the request settled: ${String(error)}`, {
                level: "error"
            });
        }
        this.#t.clear();
    }
    settleWhen(e) {
        e.then(()=>this.settle(), ()=>this.settle());
    }
    onSettle(e) {
        return this.#t.subscribe(e);
    }
}
class XUr {
    #e = new Map;
    #t = 0;
    #i = Oe();
    subscribe = (e)=>this.#i.subscribe(e);
    join(e) {
        if (e.settled || this.#e.has(e)) {
            return;
        }
        this.#e.set(e, e.onSettle(()=>this.#s(e)));
        this.#i.emit();
    }
    positionLabel(e) {
        if (!this.#e.has(e)) {
            return null;
        }
        let i = this.#t + this.#e.size;
        if (i < 2) {
            return null;
        }
        return `${this.#t + 1} of ${i}`;
    }
    #s(e) {
        let i = this.#e.get(e);
        if (i === undefined) {
            return;
        }
        i();
        this.#e.delete(e);
        this.#t = this.#e.size === 0 ? 0 : this.#t + 1;
        this.#i.emit();
    }
}
export { Bve, XUr };
