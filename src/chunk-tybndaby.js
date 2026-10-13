import { b, kn } from "/$bunfs/root/chunk-wkmq9ht0.js";
function ye(n) {
    if (n == null) {
        return;
    }
    if (/^[A-Za-z0-9_-]{1,128}$/.test(n)) {
        return kn(n);
    }
    return b("nonconforming");
}
function yDt(n) {
    return kn(n.map((r)=>ye(r)).join(","));
}
export { ye, yDt };
