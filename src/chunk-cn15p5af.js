import { nt, zr } from "/$bunfs/root/chunk-8524cxt8.js";
import { Oo } from "/$bunfs/root/chunk-tvwsdq27.js";
import { R, y, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { Ma, ms } from "/$bunfs/root/chunk-wff73y2a.js";
import { Ps } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Yo } from "/$bunfs/root/chunk-yphmh99q.js";
N();
function Jwe(d, { selfOpened, onCancelled }) {
    let [decided, r] = y(false);
    let n = R(false);
    let [i, p] = y(false);
    let e = R(false);
    let h = zr(selfOpened ? Oo : null);
    let u = !selfOpened || h;
    let m = nt() ? true : false;
    let C = Ma(Oo);
    let { refusedWithin, noteRefused } = ms();
    function refuseInput() {
        if (selfOpened && (C() || refusedWithin(Oo))) {
            noteRefused();
            return true;
        }
        return false;
    }
    let exit = Yo(()=>{
        if (e.current) {
            return;
        }
        let n_current = n.current;
        n.current = true;
        let a = onCancelled(n_current);
        if (a === undefined) {
            e.current = true;
            Ps(1);
            return;
        }
        r(true);
        handBack(a);
    }, undefined, selfOpened && !i);
    function take() {
        if (n.current || !u) {
            return false;
        }
        n.current = true;
        r(true);
        return true;
    }
    function handBack(o) {
        if (e.current) {
            return;
        }
        e.current = true;
        p(true);
        d(o);
    }
    return {
        choicesDisabled: !u && !m,
        decided,
        take,
        refuseInput,
        settled: ()=>e.current,
        handBack,
        exit,
        exitHintShowing: exit.pending && !i
    };
}
export { Jwe };
