import { q, O0 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ap } from "/$bunfs/root/chunk-0ycjphb5.js";
import { j$r, W$r } from "/$bunfs/root/chunk-dt7gs57m.js";
import { cl } from "/$bunfs/root/chunk-ghmnmzfd.js";
class i {
    activePark = null;
}
const s = new q(()=>new i);
async function V9e(r, e, n, a) {
    if (!ap()) {
        return false;
    }
    let o = s.of(r);
    let t = await j$r(e, n, a);
    switch(t.kind){
        case "refused":
            return false;
        case "already":
            if (o.activePark?.needs !== e) {
                d(o, e, {
                    tempo: "idle",
                    needs: undefined,
                    detail: ""
                }, a);
            }
            return true;
        case "wrote":
            d(o, e, t.prior, a);
            return true;
    }
}
function d(r, needs, prior, storageV5) {
    r.activePark?.unsubscribe();
    let unsubscribe = O0(()=>{
        if (ap()) {
            return;
        }
        let r_activePark = r.activePark;
        if (!r_activePark || r_activePark.needs !== needs) {
            return;
        }
        r.activePark = null;
        r_activePark.unsubscribe();
        W$r(needs, r_activePark.prior, r_activePark.storageV5).catch(cl);
    });
    r.activePark = {
        needs,
        prior,
        storageV5,
        unsubscribe
    };
}
export { V9e };
