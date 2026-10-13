import { w } from "/$bunfs/root/chunk-4d2n28cn.js";
import { e } from "/$bunfs/root/chunk-vybw69ke.js";
import { qt, Te, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
const c = 10;
const a = {
    ring: [],
    mode: {
        type: "idle"
    }
};
function h(state, i) {
    switch(i.type){
        case "kill":
            {
                if (i.text.length === 0) {
                    if (state.mode.type === "idle") {
                        return state;
                    }
                    return {
                        ...state,
                        mode: {
                            type: "idle"
                        }
                    };
                }
                return {
                    ring: state.mode.type === "killing" && state.ring.length > 0 ? [
                        i.direction === "prepend" ? i.text + state.ring[0] : state.ring[0] + i.text,
                        ...state.ring.slice(1)
                    ] : [
                        i.text,
                        ...state.ring
                    ].slice(0, c),
                    mode: {
                        type: "killing"
                    }
                };
            }
        case "yank":
            return {
                ...state,
                mode: {
                    type: "yanked",
                    start: i.start,
                    length: i.length,
                    index: 0
                }
            };
        case "yankPop":
            {
                if (state.mode.type !== "yanked" || state.ring.length <= 1) {
                    return state;
                }
                let index = (state.mode.index + 1) % state.ring.length;
                return {
                    ...state,
                    mode: {
                        ...state.mode,
                        index
                    }
                };
            }
        case "updateYankLength":
            if (state.mode.type !== "yanked") {
                return state;
            }
            return {
                ...state,
                mode: {
                    ...state.mode,
                    length: i.length
                }
            };
        case "interrupt":
            if (state.mode.type === "idle") {
                return state;
            }
            return {
                ...state,
                mode: {
                    type: "idle"
                }
            };
    }
}
function KXe(n) {
    return n.ring[0] ?? "";
}
function $dn(n) {
    if (n.mode.type !== "yanked" || n.ring.length <= 1) {
        return null;
    }
    let i = (n.mode.index + 1) % n.ring.length;
    let { start, length } = n.mode;
    return {
        text: n.ring[i] ?? "",
        start,
        length
    };
}
function e6n() {
    let state = a;
    return {
        get state () {
            return state;
        },
        dispatch (i) {
            state = h(state, i);
        }
    };
}
const l = qt(null);
function Vmt(n) {
    let t = w(5);
    let { handle, children } = n;
    let p;
    if (t[0] !== handle) {
        p = ()=>handle ?? e6n();
        t[0] = handle;
        t[1] = p;
    } else {
        p = t[1];
    }
    let [x] = y(p);
    const d = handle ?? x;
    let u;
    if (t[2] !== children || t[3] !== d) {
        u = e(l.Provider, {
            value: d,
            children
        });
        t[2] = children;
        t[3] = d;
        t[4] = u;
    } else {
        u = t[4];
    }
    return u;
}
function gje() {
    let n = Te(l);
    if (!n) {
        throw ReferenceError("useKillRing cannot be called outside of a <KillRingProvider /> (mounted around every Ink root by src/ink.ts)");
    }
    return n;
}
export { KXe, $dn, e6n, Vmt, gje };
