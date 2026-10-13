import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
class n {
    endpoint = undefined;
    set(e) {
        this.endpoint = e;
    }
}
const t = new q(()=>new n);
function d() {
    return t.of(B().host);
}
function Tvn(e) {
    d().set(e);
}
function B3o() {
    return d().endpoint;
}
export { Tvn, B3o };
