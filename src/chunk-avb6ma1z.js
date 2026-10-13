import { pl } from "/$bunfs/root/chunk-223dyewd.js";
const dh = {
    CURSOR_VISIBLE: 25,
    ALT_SCREEN: 47,
    ALT_SCREEN_CLEAR: 1049,
    MOUSE_NORMAL: 1000,
    MOUSE_BUTTON: 1002,
    MOUSE_ANY: 1003,
    MOUSE_SGR: 1006,
    MOUSE_SGR_PIXELS: 1016,
    FOCUS_EVENTS: 1004,
    BRACKETED_PASTE: 2004,
    THEME_NOTIFY: 2031,
    SYNCHRONIZED_UPDATE: 2026,
    WIN32_INPUT_MODE: 9001
};
function TU(E) {
    return pl(`?${E}h`);
}
function nK(E) {
    return pl(`?${E}l`);
}
const tFt = TU(dh.SYNCHRONIZED_UPDATE);
const nJe = nK(dh.SYNCHRONIZED_UPDATE);
const SNo = TU(dh.BRACKETED_PASTE);
const qdn = nK(dh.BRACKETED_PASTE);
const Kdn = TU(dh.FOCUS_EVENTS);
const Xmt = nK(dh.FOCUS_EVENTS);
const wNo = TU(dh.THEME_NOTIFY);
const Ydn = nK(dh.THEME_NOTIFY);
const VH = TU(dh.CURSOR_VISIBLE);
const qH = nK(dh.CURSOR_VISIBLE);
const Jmt = TU(dh.ALT_SCREEN_CLEAR);
const Qmt = nK(dh.ALT_SCREEN_CLEAR);
const Xdn = nK(dh.WIN32_INPUT_MODE);
const S = TU(dh.MOUSE_NORMAL) + TU(dh.MOUSE_BUTTON) + TU(dh.MOUSE_ANY) + TU(dh.MOUSE_SGR);
const _ = TU(dh.MOUSE_NORMAL) + TU(dh.MOUSE_SGR);
const Ffe = nK(dh.MOUSE_SGR) + nK(dh.MOUSE_ANY) + nK(dh.MOUSE_BUTTON) + nK(dh.MOUSE_NORMAL);
const vNo = TU(dh.MOUSE_SGR_PIXELS);
const ENo = nK(dh.MOUSE_SGR_PIXELS) + TU(dh.MOUSE_SGR);
function Jdn(E) {
    switch(E){
        case "full":
            return S;
        case "scroll":
            return _;
        case "off":
            return "";
    }
}
export { dh, TU, nK, tFt, nJe, SNo, qdn, Kdn, Xmt, wNo, Ydn, VH, qH, Jmt, Qmt, Xdn, Ffe, vNo, ENo, Jdn };
