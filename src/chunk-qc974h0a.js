import { E, pa } from "/$bunfs/root/chunk-smx21d0k.js";
function MM(e = E()) {
    return pa(bLe, e);
}
function bLe(e) {
    if (typeof e === "string") {
        let n = e.trim();
        if (/^[-+]?\d+(\.\d+)?$/.test(n)) {
            let r = Number(n);
            if (Number.isFinite(r)) {
                return r;
            }
        }
    }
    return e;
}
const DKe = "modelFacingMessage";
export { MM, bLe, DKe };
