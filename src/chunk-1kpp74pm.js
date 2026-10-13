import { sM } from "/$bunfs/root/chunk-g0e9c50d.js";
import { lt } from "/$bunfs/root/chunk-ctt36bn8.js";
const d = [
    "take_in"
];
class r {
    visitors = new Map;
}
const l = new lt(()=>new r);
function a(o) {
    try {
        return o.pending() === true;
    } catch  {
        return false;
    }
}
function tFo(o) {
    let e = l.peek(o)?.visitors;
    return e !== undefined && [
        ...e.values()
    ].some(a);
}
async function nFo(o, e) {
    let n = l.peek(o)?.visitors;
    if (n === undefined) {
        return;
    }
    let p = (async ()=>{
        for (let s of d){
            let i = n.get(s);
            if (i !== undefined && !sM(e) && a(i)) {
                try {
                    await i.visit(e);
                } catch  {}
            }
        }
    })();
    if (sM(e)) {
        return;
    }
    let t = ()=>{};
    let c = new Promise((resolve)=>{
        t = ()=>resolve();
    });
    e.addEventListener("abort", t, {
        once: true
    });
    try {
        await Promise.race([
            p,
            c
        ]);
    } finally{
        e.removeEventListener("abort", t);
    }
}
export { tFo, nFo };
