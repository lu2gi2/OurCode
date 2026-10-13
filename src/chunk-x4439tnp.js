import { sR } from "/$bunfs/root/chunk-4r6b8efh.js";
function z9n(e) {
    if (sR()) {
        return e;
    }
}
function Fie(e) {
    return z9n(e.proactivityLevel);
}
function chn(e, t) {
    let proactivityLevel = z9n(t);
    return {
        permissionMode: e ?? (proactivityLevel === undefined ? undefined : "default"),
        proactivityLevel
    };
}
export { z9n, Fie, chn };
