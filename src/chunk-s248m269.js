import { Be, Ct } from "/$bunfs/root/chunk-6dwnw6av.js";
const r = new Set([
    Be,
    Ct
]);
function zfe(e) {
    return r.has(e);
}
function D$o(e, n) {
    if (zfe(e)) {
        return e;
    }
    return n;
}
function Rje(e) {
    if (e === Ct) {
        return "Select-Object -First, Select-Object -Last or Select-String";
    }
    return "head, tail or grep";
}
function eI(e) {
    return e.isMcp !== true && zfe(e.name);
}
export { zfe, D$o, Rje, eI };
