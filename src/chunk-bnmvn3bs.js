import { WRo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Sa } from "/$bunfs/root/chunk-4ban11rz.js";
function DLr(e) {
    if (e) {
        Sa.terminalFocusGainedAt = Date.now();
    }
    if (!e && Sa.terminalFocus === "blurred") {
        return;
    }
    Sa.terminalFocus = e ? "focused" : "blurred";
    WRo(e);
    Sa.terminalFocusChanged.emit();
}
function UIe() {
    return Sa.terminalFocus !== "blurred";
}
function X9() {
    return Sa.terminalFocus;
}
function SFo() {
    return Sa.terminalFocusGainedAt;
}
function wve(e) {
    return Sa.terminalFocusChanged.subscribe(e);
}
export { DLr, UIe, X9, SFo, wve };
