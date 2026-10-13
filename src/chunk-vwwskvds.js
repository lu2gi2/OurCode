import { rn } from "/$bunfs/root/chunk-223dyewd.js";
import { on } from "/$bunfs/root/chunk-8524cxt8.js";
import { le, Rt, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { nn } from "/$bunfs/root/chunk-z47a2vff.js";
N();
function U0(r, o, t = 1000, n = 0, a) {
    let e = on();
    let u = ()=>rn(Math.max(0, (a ?? Date.now()) - r - n));
    let l = le((f)=>{
        if (!o) {
            return ()=>{};
        }
        let i;
        let s = ()=>{
            try {
                f();
            } finally{
                i = e.setTimeout(s, t);
            }
        };
        i = e.setTimeout(s, t);
        return ()=>i();
    }, [
        o,
        t,
        e
    ]);
    return Rt(l, u, u);
}
function dj({ onClose, onBack, onKill, onEnter }) {
    nn({
        "confirm:yes": onEnter ?? onClose
    }, {
        context: "Confirmation"
    });
    return function(e) {
        if (e.key === " ") {
            e.preventDefault();
            onClose();
        } else if (e.key === "left" && onBack) {
            e.preventDefault();
            onBack();
        } else if (e.key === "x" && !e.ctrl && !e.meta && onKill) {
            e.preventDefault();
            onKill();
        }
    };
}
export { U0, dj };
