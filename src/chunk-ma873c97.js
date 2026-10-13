import { lt, B, CS } from "/$bunfs/root/chunk-ctt36bn8.js";
import { s8, Vde } from "/$bunfs/root/chunk-0ycjphb5.js";
import { L1 } from "/$bunfs/root/chunk-98pm569t.js";
class r {
    #e;
    get() {
        return this.#e;
    }
    replace(e) {
        this.#e = e;
    }
}
const u = new lt(()=>new r);
function Ghr() {
    return u.peek(B())?.get();
}
function tLn() {
    return (s8() && !Vde() ? undefined : Ghr()) ?? (CS() ? "UTC" : undefined);
}
function rdo() {
    let e = new Date;
    let timeZone = Ghr();
    if (timeZone !== undefined) {
        let t = new Map(L1("en-US", {
            timeZone,
            year: "numeric",
            month: "2-digit",
            day: "2-digit"
        }).formatToParts(e).map((o)=>[
                o.type,
                o.value
            ]));
        return `${t.get("year")}-${t.get("month")}-${t.get("day")}`;
    }
    let i = e.getFullYear();
    let a = String(e.getMonth() + 1).padStart(2, "0");
    let d = String(e.getDate()).padStart(2, "0");
    return `${i}-${a}-${d}`;
}
class s {
    #e;
    get() {
        this.#e ??= rdo();
        return this.#e;
    }
    clear() {
        this.#e = undefined;
    }
    get captured() {
        return this.#e !== undefined;
    }
}
const hXt = new lt(()=>new s);
function odo(e) {
    return hXt.of(e).get();
}
function pms() {
    return odo(B());
}
function fms() {
    return new Date().toLocaleString("en-US", {
        month: "long",
        year: "numeric"
    });
}
export { Ghr, tLn, rdo, hXt, odo, pms, fms };
