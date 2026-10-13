import { FZt, nSe, kOt, _R, ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Lo } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { S_, fe, Tn } from "/$bunfs/root/chunk-gc7ea4xt.js";
const nbe = [
    "theme",
    "editorMode",
    "verbose",
    "preferredNotifChannel",
    "autoCompactEnabled",
    "autoScrollEnabled",
    "fileCheckpointingEnabled",
    "showTurnDuration",
    "showMessageTimestamps",
    "terminalProgressBarEnabled",
    "todoFeatureEnabled",
    "teammateMode",
    "remoteControlAtStartup",
    "autoUploadSessions",
    "inputNeededNotifEnabled",
    "agentPushNotifEnabled"
];
function hs(n, value) {
    let o = Lo();
    let r = o.includes("userSettings") && S_();
    for(let e = o.length - 1; e >= 0; e--){
        let source = o[e];
        if (source === "projectSettings" && r) {
            continue;
        }
        let s = fe(source)?.[n];
        if (s !== undefined) {
            return {
                value: s,
                source
            };
        }
    }
    if (nbe.includes(n)) {
        let e = n;
        let t = ce()[e];
        if (t !== undefined && t !== _R[e]) {
            let s = FZt(e) ? kOt(e, t) : nSe(e, t);
            if (s !== undefined) {
                return {
                    value: s,
                    source: "legacyGlobalConfig"
                };
            }
        }
    }
    return {
        value,
        source: "default"
    };
}
function kV(n, i, o) {
    Tn("userSettings", {
        [n]: i
    }, undefined, o);
}
export { nbe, hs, kV };
