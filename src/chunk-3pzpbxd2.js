import { q, B, Vl, AS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { ie } from "/$bunfs/root/chunk-bd805sh6.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
class i {
    directories = [];
    announced = new Set;
    get() {
        return this.directories;
    }
    publish(o) {
        let t = D([
            ...o.additionalWorkingDirectories.values()
        ].map((e)=>e.path)).sort();
        let directories = this.directories;
        if (directories.length === t.length && directories.every((e, s)=>e === t[s])) {
            return false;
        }
        this.directories = t;
        return true;
    }
    noteAnnounced(o) {
        for (let t of o){
            this.announced.add(t);
        }
    }
    everAnnounced() {
        return [
            ...this.announced
        ];
    }
    reset() {
        this.directories = [];
        this.announced.clear();
    }
}
const d = new q(()=>new i);
function r() {
    return d.of(B().host);
}
function iX() {
    let o = r();
    let t = Vl();
    let n = AS();
    o.noteAnnounced([
        ...t === null ? [] : [
            t
        ],
        ...n === null ? [] : [
            n
        ],
        ...c(),
        ...o.get()
    ]);
    return o.get();
}
function Azo() {
    return r().everAnnounced();
}
function ygn(o) {
    return r().publish(o);
}
function c() {
    try {
        return [
            ie().cwd()
        ];
    } catch  {
        return [];
    }
}
export { iX, Azo, ygn };
