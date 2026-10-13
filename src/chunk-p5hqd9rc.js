import { zt, Fes } from "/$bunfs/root/chunk-kasbfbhj.js";
const u4n = {
    create: "Cloud session active",
    attach: "Attached to cloud session"
};
const p4n = " · code here or at ";
function a(e, t) {
    return `${u4n[e]}${p4n}${t}`;
}
function _cn(e, t, o) {
    let s = a(e, t);
    if (o) {
        return Fes(e, t, s);
    }
    return zt(s, "info");
}
export { u4n, p4n, _cn };
