import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { jn } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, v, hy, Nf } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Re } from "/$bunfs/root/chunk-3my1j42p.js";
import { V } from "/$bunfs/root/chunk-zby5bms5.js";
import { _N } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { Fds, Uds, yv, $x, ML, Bds, IM } from "/$bunfs/root/chunk-tsssve1m.js";
import { Fte } from "/$bunfs/root/chunk-kasbfbhj.js";
import { qt, Te, P, N } from "/$bunfs/root/chunk-j9ep7722.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { watch } from "fs";
N();
const g = 5000;
const T = 50;
const f = 5000;
class TYn {
    #c = undefined;
    #d = false;
    #n = null;
    #f = null;
    #i = false;
    #o = null;
    #p = false;
    #l = null;
    #t = null;
    #b = null;
    #y = Oe();
    #g = 0;
    #a = false;
    #r;
    #s;
    #e = {
        phase: "idle"
    };
    #R = 0;
    #S = 0;
    #m = 0;
    #E;
    constructor(s, i = globalThis, e = ()=>{}){
        this.#r = j() && s !== undefined ? s : undefined;
        this.#s = i;
        this.#E = e;
    }
    #w(s) {
        let i = this.#d;
        this.#d = s;
        if (s && !i) {
            this.#E();
        }
    }
    getSnapshot = ()=>{
        if (this.#d) {
            return undefined;
        }
        return this.#c;
    };
    subscribe = (s)=>{
        let i = this.#y.subscribe(s);
        this.#g++;
        if (!this.#a) {
            this.#a = true;
            this.#b = Fds(this.#h);
            this.#k();
        }
        let e = false;
        return ()=>{
            if (e) {
                return;
            }
            e = true;
            i();
            this.#g--;
            if (this.#g === 0) {
                this.#L();
            }
        };
    };
    #V() {
        this.#y.emit();
    }
    #F(s) {
        if (this.#r) {
            this.#T(this.#r, s, false);
            return;
        }
        let i = ML(s);
        if (i === this.#f && this.#n !== null) {
            return;
        }
        this.#n?.close();
        this.#n = null;
        this.#f = i;
        try {
            let e = watch(i, this.#h);
            e.on("error", (r)=>{
                t(`Task list watcher error: ${l(r)}`, {
                    level: "warn"
                });
                if (this.#n === e) {
                    this.#f = null;
                    this.#i = true;
                    if (this.#t === null) {
                        this.#t = this.#s.setTimeout(this.#h, f);
                        this.#t.unref();
                    }
                }
            });
            e.unref();
            this.#n = e;
            this.#i = false;
        } catch  {}
    }
    #T(s, listId, onRetry) {
        let r = this.#e;
        if (r.phase !== "idle" && r.listId === listId && !onRetry) {
            return;
        }
        if (r.phase === "live") {
            r.subscription.unsubscribe();
        }
        let generation = ++this.#m;
        this.#e = {
            phase: "subscribing",
            listId,
            generation,
            endedEarly: false
        };
        this.#i = true;
        this.#u();
        let h = (subscription, p)=>{
            if (generation !== this.#m) {
                subscription?.unsubscribe();
                return;
            }
            let d = this.#e;
            if (subscription && d.phase === "subscribing" && d.endedEarly) {
                subscription.unsubscribe();
                if (onRetry) {
                    this.#v(listId);
                } else {
                    this.#T(s, listId, true);
                }
                return;
            }
            if (subscription) {
                this.#e = {
                    phase: "live",
                    listId,
                    generation,
                    subscription,
                    onRetry
                };
                this.#i = false;
                this.#h();
                return;
            }
            t(`Task list subscription unavailable: ${p}`, {
                level: "warn"
            });
            if (onRetry) {
                this.#v(listId);
                return;
            }
            this.#e = {
                phase: "idle"
            };
            this.#i = true;
            this.#u();
        };
        let a;
        try {
            a = s.subscribe({
                target: "scope",
                scope: {
                    namespace: "task",
                    listId: $x(listId)
                }
            }, (o)=>this.#x(o, generation));
        } catch (error) {
            h(null, l(error));
            return;
        }
        a.then((o)=>{
            if (o.ok) {
                return h(o.value);
            }
            return h(null, gt(o.error));
        }, (o)=>h(null, l(o)));
    }
    #x(s, i) {
        let e = this.#e;
        if (e.phase === "subscribing" && e.generation === i && !s.ok) {
            e.endedEarly = true;
            return;
        }
        if (!this.#a || e.phase !== "live" || e.generation !== i) {
            return;
        }
        if (s.ok) {
            e.onRetry = false;
            this.#h();
            return;
        }
        t(`Task list subscription ended: ${gt(s.error)}`, {
            level: "warn"
        });
        if (e.onRetry || !this.#r) {
            e.subscription.unsubscribe();
            this.#v(e.listId);
            return;
        }
        this.#T(this.#r, e.listId, true);
    }
    #v(listId) {
        this.#m++;
        this.#e = {
            phase: "givenUp",
            listId
        };
        this.#i = true;
        this.#h();
    }
    #u() {
        if (!this.#a) {
            return;
        }
        if (this.#t) {
            this.#s.clearTimeout(this.#t);
        }
        this.#t = this.#s.setTimeout(this.#h, f);
        this.#t.unref();
    }
    #h = ()=>{
        if (this.#l) {
            this.#s.clearTimeout(this.#l);
        }
        this.#l = this.#s.setTimeout(()=>void this.#k(), T);
        this.#l.unref();
    };
    refetch = ()=>this.#k();
    #k = async ()=>{
        let s = ++this.#R;
        let i = yv();
        this.#F(i);
        let e;
        try {
            e = await Bds(i, this.#r);
        } catch (error) {
            t(`Task list read failed: ${l(error)}`, {
                level: "warn"
            });
            e = null;
        }
        if (this.#r && s < this.#S) {
            return;
        }
        this.#S = s;
        if (e === null) {
            if (this.#a) {
                this.#i = true;
                this.#u();
            }
            return;
        }
        if (this.#e.phase === "live") {
            this.#i = false;
        }
        let r = e.filter((a)=>!a.metadata?._internal);
        if (!this.#a) {
            return;
        }
        let n = r.some((a)=>a.status !== "completed");
        let h = !y(this.#c, r);
        if (h) {
            this.#c = r;
        }
        if (n || r.length === 0) {
            this.#w(r.length === 0);
            this.#C();
        } else if (this.#o === null && !this.#d) {
            if (this.#p) {
                t("Task list reset still in flight; not arming another hide until it settles", {
                    level: "verbose"
                });
            } else {
                this.#o = this.#s.setTimeout(this.#B.bind(this, i), g);
                this.#o.unref();
            }
        }
        if (h) {
            this.#V();
        }
        if (this.#t) {
            this.#s.clearTimeout(this.#t);
            this.#t = null;
        }
        if (n || this.#i) {
            if (this.#e.phase === "live") {
                return;
            }
            this.#u();
        }
    };
    #B(s) {
        this.#o = null;
        let i = yv();
        if (i !== s) {
            return;
        }
        this.#p = true;
        IM(i, this.#r).then(async (e)=>{
            if (e.length > 0 && e.every((n)=>n.status === "completed") && await Uds(i, this.#r)) {
                this.#c = [];
                this.#w(true);
            }
            this.#V();
        }).catch((e)=>{
            if (this.#r) {
                this.#u();
            }
            if (v(e) === "ELOCKED") {
                t("Task list lock is busy (another session or process sharing this task list, or an in-flight task write, holds it); completed tasks stay visible and the reset is retried on the next refresh");
                return;
            }
            if (Nf(e) || hy(e)) {
                t(`Task list reset failed on the tasks directory and will be retried on the next refresh: ${l(e)}`, {
                    level: "warn"
                });
                return;
            }
            c(e);
        }).finally(()=>{
            this.#p = false;
        });
    }
    #C() {
        if (this.#o) {
            this.#s.clearTimeout(this.#o);
            this.#o = null;
        }
    }
    #L() {
        this.#n?.close();
        this.#n = null;
        if (this.#e.phase === "live") {
            this.#e.subscription.unsubscribe();
        }
        this.#e = {
            phase: "idle"
        };
        this.#m++;
        this.#f = null;
        this.#b?.();
        this.#b = null;
        this.#C();
        if (this.#l) {
            this.#s.clearTimeout(this.#l);
        }
        if (this.#t) {
            this.#s.clearTimeout(this.#t);
        }
        this.#l = null;
        this.#t = null;
        this.#i = false;
        this.#a = false;
    }
}
const AYn = qt(null);
const k = ()=>{};
function u() {
    let s = Te(AYn);
    let i = V((r)=>r.teamContext);
    if (!(Fte() && !jn() && (!i || _N(i)))) {
        return null;
    }
    if (!s) {
        throw ReferenceError("useTasksV2 cannot be called outside of a TasksV2StoreContext provider (mounted by <AppStateProvider />)");
    }
    return s;
}
function mie() {
    return Re(u());
}
function m0r() {
    let s = u();
    P(()=>{
        if (!s) {
            return;
        }
        return s.subscribe(k);
    }, [
        s
    ]);
}
function aNo() {
    return Re(u(), S) ?? false;
}
function y(s, i) {
    if (s === undefined || s.length !== i.length) {
        return false;
    }
    for(let e = 0; e < i.length; e++){
        let r = s[e];
        let n = i[e];
        if (r.id !== n.id || r.status !== n.status || r.subject !== n.subject || r.activeForm !== n.activeForm || r.owner !== n.owner || r.description !== n.description || !m(r.blockedBy, n.blockedBy) || !m(r.blocks, n.blocks)) {
            return false;
        }
    }
    return true;
}
function m(s, i) {
    if (s.length !== i.length) {
        return false;
    }
    for(let e = 0; e < s.length; e++){
        if (s[e] !== i[e]) {
            return false;
        }
    }
    return true;
}
function S(s) {
    return s !== undefined && s.length > 0;
}
export { TYn, AYn, mie, m0r, aNo };
