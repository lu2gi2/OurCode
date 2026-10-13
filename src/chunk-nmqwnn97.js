import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
import { CLn } from "/$bunfs/root/chunk-4r6b8efh.js";
const t = new lt(()=>({
        byToolUse: new Map
    }));
function i1r(n, e, i) {
    t.of(n).byToolUse.set(e, i);
    CLn(n, e, ()=>{
        Hmn(n, e);
    });
}
function Hmn(n, e) {
    t.peek(n)?.byToolUse.delete(e);
}
function P1s(n, e) {
    return e !== undefined && t.peek(n)?.byToolUse.has(e) === true;
}
function a1r(n, e) {
    if (e === undefined) {
        return;
    }
    let i = t.peek(n)?.byToolUse.get(e);
    Hmn(n, e);
    return i;
}
export { i1r, Hmn, P1s, a1r };
