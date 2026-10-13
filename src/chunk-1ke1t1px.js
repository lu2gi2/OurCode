import { QVt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { isDeepStrictEqual } from "util";
function w7e(a, i) {
    i((r)=>{
        let o = r;
        if ("cacheBreakerPhrase" in a) {
            let e = a.cacheBreakerPhrase;
            let cacheBreakerPhrase = e == null ? undefined : String(e);
            if (o.cacheBreakerPhrase !== cacheBreakerPhrase) {
                o = {
                    ...o,
                    cacheBreakerPhrase
                };
            }
        }
        if ("autoCompactWindow" in a) {
            let e = a.autoCompactWindow;
            let autoCompactWindow = e == null ? QVt() : Number(e);
            if (!isDeepStrictEqual(o.autoCompactWindow, autoCompactWindow)) {
                o = {
                    ...o,
                    autoCompactWindow
                };
            }
        }
        if ("briefTranscript" in a) {
            let briefTranscript = Boolean(a.briefTranscript);
            if (o.briefTranscript !== briefTranscript) {
                o = {
                    ...o,
                    briefTranscript
                };
            }
        }
        if ("isBriefOnly" in a) {
            let isBriefOnly = Boolean(a.isBriefOnly);
            if (o.isBriefOnly !== isBriefOnly) {
                o = {
                    ...o,
                    isBriefOnly
                };
            }
        }
        if ("slackTagConnected" in a) {
            let slackTagConnected = Boolean(a.slackTagConnected);
            if (o.slackTagConnected !== slackTagConnected) {
                o = {
                    ...o,
                    slackTagConnected
                };
            }
        }
        if ("fastMode" in a) {
            let fastMode = Boolean(a.fastMode);
            if (o.fastMode !== fastMode) {
                o = {
                    ...o,
                    fastMode
                };
            }
        }
        if ("model" in a) {
            let e = a.model;
            let n = e == null ? null : String(e);
            if (o.mainLoopModelForSession !== n) {
                o = {
                    ...o,
                    mainLoopModelForSession: n
                };
            }
            if (o.mainLoopModel !== n) {
                o = {
                    ...o,
                    mainLoopModel: n
                };
            }
        }
        return o;
    });
}
export { w7e };
