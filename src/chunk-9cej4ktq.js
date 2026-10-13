import { jmo } from "/$bunfs/root/chunk-vgatmvpj.js";
import { Le } from "/$bunfs/root/chunk-cj4xndke.js";
let a = null;
let i = false;
function r() {
    if (i) {
        return a;
    }
    i = true;
    let t = "linux";
    if (t !== "darwin" && t !== "linux" && t !== "win32") {
        return null;
    }
    try {
        a = jmo();
        return a;
    } catch  {}
    let o = `x64-${t}`;
    let u = (t === "linux" ? [
        o,
        `${o}-musl`
    ] : [
        o
    ]).flatMap((n)=>[
            `./vendor/audio-capture/${n}/audio-capture.node`,
            `../audio-capture/${n}/audio-capture.node`
        ]);
    for (let n of u){
        try {
            a = Le(n);
            return a;
        } catch  {}
    }
    return null;
}
export function isNativeAudioAvailable() {
    return r() !== null;
}
export function startNativeRecording(t, o) {
    let e = r();
    if (!e) {
        return false;
    }
    return e.startRecording(t, o);
}
export function stopNativeRecording() {
    let t = r();
    if (!t) {
        return;
    }
    t.stopRecording();
}
export function isNativeRecordingActive() {
    let t = r();
    if (!t) {
        return false;
    }
    return t.isRecording();
}
export function startNativePlayback(t, o) {
    let e = r();
    if (!e) {
        return false;
    }
    return e.startPlayback(t, o);
}
export function writeNativePlaybackData(t) {
    let o = r();
    if (!o) {
        return;
    }
    o.writePlaybackData(t);
}
export function stopNativePlayback() {
    let t = r();
    if (!t) {
        return;
    }
    t.stopPlayback();
}
export function isNativePlaying() {
    let t = r();
    if (!t) {
        return false;
    }
    return t.isPlaying();
}
export function microphoneAuthorizationStatus() {
    let t = r();
    if (!t || !t.microphoneAuthorizationStatus) {
        return 0;
    }
    return t.microphoneAuthorizationStatus();
}
