import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, y, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gs } from "/$bunfs/root/chunk-ghreee2m.js";
N();
function h() {
    let store = gs(v);
    let levelSmoother = new l;
    store.subscribe(()=>{
        if (store.getState().voiceState !== "recording") {
            levelSmoother.reset();
        }
    });
    return {
        store,
        levelSmoother
    };
}
var v = {
    voiceState: "idle",
    voiceError: null,
    voiceInterimTranscript: "",
    voiceAudioLevels: [],
    voiceWarmingUp: false,
    awaitingVoiceSubmitDoubleTap: false
};
class l {
    #e = 0;
    next(o, t) {
        this.#e = this.#e * t + o * (1 - t);
        return this.#e;
    }
    reset() {
        this.#e = 0;
    }
}
const i = qt(null);
function WYn(o) {
    let s = w(3);
    let { children } = o;
    let [n] = y(h);
    let c;
    if (s[0] !== children || s[1] !== n) {
        c = e(i.Provider, {
            value: n,
            children
        });
        s[0] = children;
        s[1] = n;
        s[2] = c;
    } else {
        c = s[2];
    }
    return c;
}
function r() {
    let o = Te(i);
    if (!o) {
        throw Error("useVoiceState must be used within a VoiceProvider");
    }
    return o;
}
function mje() {
    return r().store;
}
function C0r() {
    return r().levelSmoother;
}
function vy(o) {
    let n = w(3);
    let t = mje();
    let s;
    if (n[0] !== o || n[1] !== t) {
        s = ()=>o(t.getState());
        n[0] = o;
        n[1] = t;
        n[2] = s;
    } else {
        s = n[2];
    }
    let c = s;
    return Rt(t.subscribe, c, c);
}
function xdn() {
    return mje().setState;
}
function kIe() {
    return mje().getState;
}
export { WYn, mje, C0r, vy, xdn, kIe };
