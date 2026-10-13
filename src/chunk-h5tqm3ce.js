import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
const n = new lt(()=>({
        current: undefined
    }));
function K_t(e) {
    return n.peek(e)?.current;
}
function wK(e, o) {
    n.of(e).current = o;
}
export { K_t, wK };
