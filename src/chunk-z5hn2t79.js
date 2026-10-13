import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { nm, LA, yb, o_, Ra, y4 } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { qt, Te, N } from "/$bunfs/root/chunk-j9ep7722.js";
N();
async function iYn(e) {
    let n = false;
    let s = await LA(undefined, e, ()=>{
        n = true;
    });
    if (n) {
        return null;
    }
    return s;
}
const h = 120000;
const c = 1800000;
const p = 10000;
const m = 3;
function S(state) {
    return !Qcn(state) && state.tempo === "blocked" && state.needs !== yb;
}
function Qcn(e) {
    return Ra(e) && !(o_(e.state) === "success" && y4(e));
}
class rje {
    #p;
    #g;
    #s = undefined;
    #m = Oe();
    #h = 0;
    #n = false;
    #u = true;
    #o = null;
    #e = null;
    #d = false;
    #t = 0;
    #i = null;
    #l = 0;
    #S;
    constructor(e){
        this.#p = e?.sweepMs ?? p;
        this.#g = e?.ignoredAfterMs ?? c;
        let n = e?.storageV5;
        this.#S = ()=>iYn(n);
    }
    getSnapshot = ()=>this.#s;
    subscribe = (e)=>{
        let n = this.#m.subscribe(e);
        this.#h++;
        if (!this.#n) {
            this.#n = true;
            if (this.#s === undefined) {
                this.#r();
            } else {
                this.#f();
            }
        }
        let s = false;
        return ()=>{
            if (s) {
                return;
            }
            s = true;
            n();
            this.#h--;
            if (this.#h === 0) {
                this.#N();
            }
        };
    };
    refetch = ()=>this.#r();
    async quiesce() {
        while(this.#e){
            await this.#e;
        }
    }
    setFocused(e) {
        if (e === this.#u) {
            return;
        }
        this.#u = e;
        if (!this.#n) {
            return;
        }
        if (e) {
            this.#l = 0;
            this.#r();
        } else {
            this.#a();
        }
    }
    recordOpenViaLeft() {
        this.#c();
        if (this.#t > 0 && Date.now() - this.#t <= h) {
            g("fleet_needs_input_nudge");
            this.#t = 0;
        }
        return this.#s;
    }
    #r() {
        this.#a();
        if (this.#e) {
            this.#d = true;
            return this.#e;
        }
        this.#e = this.#b().finally(()=>{
            this.#e = null;
            if (this.#d) {
                this.#d = false;
                this.#r();
            }
        });
        return this.#e;
    }
    async #b() {
        let e;
        try {
            e = await this.#S();
        } catch  {
            e = [];
        }
        if (!this.#n) {
            return;
        }
        if (e !== null) {
            this.#l = 0;
        } else if (++this.#l <= m) {
            if (this.#l === 1) {
                t("[fleet nudge] listing sessions failed for a reason that may pass; keeping the counts", {
                    level: "warn"
                });
            }
            if (this.#u) {
                this.#f();
            }
            return;
        }
        let n = e ?? [];
        let s = 0;
        let u = 0;
        let d = 0;
        let l = 0;
        let a = nm();
        for (let o of n){
            if (o.id === a) {
                continue;
            }
            if (Qcn(o.state)) {
                u++;
                if (o_(o.state.state) === "success") {
                    d++;
                }
                continue;
            }
            l++;
            if (S(o.state)) {
                s++;
            }
        }
        if (s === 0) {
            this.#c();
            this.#t = 0;
        }
        let r = this.#s;
        if (r?.needsInput !== s || r?.done !== u || r?.succeeded !== d) {
            let increased = r !== undefined && s > r.needsInput;
            this.#s = {
                needsInput: s,
                done: u,
                succeeded: d
            };
            i("tengu_fleet_nudge_state", {
                needs_input_count: s,
                done_count: u,
                succeeded_count: d,
                increased
            });
            if (increased) {
                this.#t = Date.now();
                this.#_();
            }
            this.#m.emit();
        }
        if (l > 0 && this.#u) {
            this.#f();
        }
    }
    #f() {
        this.#a();
        this.#o = setTimeout(()=>void this.#r(), this.#p);
        this.#o.unref();
    }
    #_() {
        this.#c();
        this.#i = setTimeout(()=>{
            this.#i = null;
            f("fleet_needs_input_nudge", "ignored");
            this.#t = 0;
        }, this.#g);
        this.#i.unref();
    }
    #a() {
        if (this.#o) {
            clearTimeout(this.#o);
            this.#o = null;
        }
    }
    #c() {
        if (this.#i) {
            clearTimeout(this.#i);
            this.#i = null;
        }
    }
    #N() {
        this.#a();
        this.#d = false;
        this.#n = false;
    }
}
function bBs(e, storageV5) {
    e.fleetNudgeStore ??= new rje({
        storageV5
    });
    return e.fleetNudgeStore;
}
const Zcn = qt(null);
function Emt() {
    let e = Te(Zcn);
    if (!e) {
        throw ReferenceError("useFleetNudgeStore cannot be called outside of a FleetNudgeStoreContext provider (mounted by <AppStateProvider />)");
    }
    return e;
}
export { iYn, Qcn, rje, bBs, Zcn, Emt };
