import { L } from "/$bunfs/root/chunk-6q0v3ahc.js";
const Gn = "SendMessage";
const ftn = "ccd_session_mgmt";
const bdt = 200;
const sTr = [
    "type",
    "recipient",
    "recipient_kind",
    "content",
    "request_id",
    "approve"
];
function iwo(e) {
    return "to" in e && ("message" in e || "notify_when_idle" in e);
}
function TMt(e) {
    if (!L(e) || !iwo(e) || !sTr.some((n)=>n in e)) {
        return;
    }
    let o = {
        ...e
    };
    for (let n of sTr){
        delete o[n];
    }
    return o;
}
export { Gn, ftn, bdt, sTr, iwo, TMt };
