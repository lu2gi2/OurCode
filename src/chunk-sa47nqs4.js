import { yV } from "/$bunfs/root/chunk-ghreee2m.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
const r = yV("computerUseMcpState", undefined);
class hJe {
    #e;
    constructor(e){
        this.#e = e;
    }
    static over(e) {
        return new hJe(r(e.getState, e.setState));
    }
    get() {
        return this.#e.get();
    }
    update(e) {
        this.#e.set(e);
    }
}
class t {
    owner = undefined;
    acquire(e) {
        if (this.owner) {
            return ()=>{};
        }
        this.owner = e;
        return ()=>{
            if (this.owner === e) {
                this.owner = undefined;
            }
        };
    }
}
const cgt = new lt(()=>new t);
function yFo(e) {
    return cgt.of(e).owner;
}
export { hJe, cgt, yFo };
