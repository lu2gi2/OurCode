import { fwe } from "/$bunfs/root/chunk-ctt36bn8.js";
const msgV = 1;
function r() {
    return fwe();
}
const s = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
function vst(t) {
    return typeof t === "string" && s.test(t);
}
function P4() {
    return {
        msgV,
        msg_id: r()
    };
}
export { vst, P4 };
