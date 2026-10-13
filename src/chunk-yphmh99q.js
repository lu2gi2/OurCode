import { yA } from "/$bunfs/root/chunk-8524cxt8.js";
import { nn, Jq } from "/$bunfs/root/chunk-z47a2vff.js";
import { us } from "/$bunfs/root/chunk-w72c4p0f.js";
import { le, Z, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { rk } from "/$bunfs/root/chunk-2kj77ctk.js";
N();
function Yo(i, r, isActive = true) {
    let { handleInterrupt, handleExit, exitState } = c(r, i);
    let a = Z(()=>({
            "app:interrupt": handleInterrupt,
            "app:exit": handleExit
        }), [
        handleInterrupt,
        handleExit
    ]);
    nn(a, {
        context: "Global",
        isActive
    });
    return exitState;
}
function Lmt(i, r, e = true) {
    let { handleInterrupt, handleExit, exitState } = c(r, i);
    return {
        entries: Z(()=>{
            if (e) {
                return [
                    {
                        action: "app:interrupt",
                        run: handleInterrupt
                    },
                    {
                        action: "app:exit",
                        run: handleExit
                    }
                ];
            }
            return [];
        }, [
            e,
            handleInterrupt,
            handleExit
        ]),
        exitState
    };
}
function c(i, r) {
    let { exit } = yA();
    let [exitState, t] = y({
        pending: false,
        keyName: null
    });
    let o = Z(()=>r ?? exit, [
        r,
        exit
    ]);
    let a = rk();
    let l = us("app:interrupt", "Global", "Ctrl-C");
    let p = us("app:exit", "Global", "Ctrl-D");
    let d = a && l ? l : "Ctrl-C";
    let m = a && p ? p : "Ctrl-D";
    let u = Jq((s)=>t({
            pending: s,
            keyName: d
        }), o);
    let x = Jq((s)=>t({
            pending: s,
            keyName: m
        }), o);
    let handleInterrupt = le(()=>{
        if (i?.()) {
            return;
        }
        u();
    }, [
        u,
        i
    ]);
    let handleExit = le(()=>{
        x();
    }, [
        x
    ]);
    return {
        handleInterrupt,
        handleExit,
        exitState
    };
}
export { Yo, Lmt };
