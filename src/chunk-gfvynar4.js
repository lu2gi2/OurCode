import { TT } from "/$bunfs/root/chunk-2xjnwr5d.js";
const B1t = "usage limit";
const lhn = ` (after ${B1t})`;
function ejr(e, t = false) {
    let r = TT(e, t);
    if (r === undefined) {
        return;
    }
    if (/^\d/.test(r)) {
        return `resets at ${r}`;
    }
    return `resets ${r}`;
}
function n(e) {
    let t = ejr(e);
    if (t === undefined) {
        return B1t;
    }
    return `${B1t} ${t}`;
}
function gGo(e) {
    return `Paused \xB7 ${n(e)}`;
}
function tjr(e) {
    return [
        [
            "paused",
            n(e)
        ],
        [
            "paused",
            B1t
        ],
        [
            "paused"
        ]
    ];
}
export { B1t, lhn, ejr, gGo, tjr };
