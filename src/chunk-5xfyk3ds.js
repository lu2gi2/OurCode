import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
function Yot(e) {
    return function(r) {
        let t = e * 2 ** (r - 1);
        let i = Math.round(t * (0.5 + Math.random() / 2));
        return Q(i);
    };
}
export { Yot };
