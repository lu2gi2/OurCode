import { hi } from "/$bunfs/root/chunk-vvkk7cgc.js";
function dme(n) {
    let e = hi(n.client);
    return e != null && "transport" in e && e.transport === undefined;
}
function ume(n, e) {
    return n === e || n?.type === "connected" && e?.type === "connected" && n.client === e.client;
}
export { dme, ume };
