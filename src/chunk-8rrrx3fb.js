import { Rw, _S } from "/$bunfs/root/chunk-0ycjphb5.js";
import { uT } from "/$bunfs/root/chunk-kasbfbhj.js";
function o(e) {
    let t = Rw(e);
    if (t === Rw("")) {
        return "(unnamed agent)";
    }
    return t;
}
function r(e, t, i) {
    return `${o(e)} agent: ${_S(t, i)}`;
}
function s(e, t, i) {
    return {
        type: "notification",
        notification: {
            key: `agent-model-restricted-${o(e)}-${Rw(t)}`,
            text: r(e, t, i),
            priority: "medium",
            color: "warning",
            timeoutMs: 10000
        }
    };
}
function r_n(e, t) {
    return (i, n)=>{
        t?.(s(e, i, n));
    };
}
function SEe(e, t) {
    return (i, n)=>{
        t?.(uT(r(e, i, n), "warning"));
    };
}
export { r_n, SEe };
