import { tl } from "/$bunfs/root/chunk-fv3gxsmx.js";
function izo(e) {
    return ()=>{
        let n = e();
        let t = tl();
        t.disconnectedAnswerCount++;
        t.disconnectedAnswerTexts.add(n);
        return n;
    };
}
function e1r() {
    return tl().disconnectedAnswerCount;
}
function azo(e) {
    return tl().disconnectedAnswerTexts.has(e);
}
function FBt() {
    let e = tl();
    return e.disconnectedAnswerCount > 0 || e.notConnectedSeenByPriorWorker;
}
function lzo() {
    tl().notConnectedSeenByPriorWorker = true;
}
export { izo, e1r, azo, FBt, lzo };
