import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { Mw } from "/$bunfs/root/chunk-9nfq6p43.js";
import { readFile } from "fs/promises";
class n {
    firedSites = new Set;
    fire(e) {
        if (this.firedSites.has(e)) {
            return;
        }
        this.firedSites.add(e);
        i("tengu_dead_probe_adopt_ticks_token", {
            site: d(e)
        });
    }
    reset() {
        this.firedSites.clear();
    }
}
const l = new q(()=>new n);
function f() {
    return l.of(B().host);
}
function JDr(e) {
    f().fire(e);
}
async function f$t(e) {
    try {
        let t = await readFile(`/proc/${e}/stat`, "utf-8");
        let r = t.lastIndexOf(")");
        let s = t.slice(r + 2).split(" ");
        let o = Number(s[19]);
        if (Number.isFinite(o)) {
            return o;
        }
        return null;
    } catch  {
        return null;
    }
}
async function xXe(e, t, r) {
    if (r !== undefined) {
        if (await Fl(e, {
            skipCache: true
        }) !== r) {
            return;
        }
    } else if (t !== undefined) {
        JDr("kill_gate");
        if (await f$t(e) !== t) {
            return;
        }
    } else {
        return;
    }
    await Mw(e, "SIGTERM").catch(()=>{});
}
export { JDr, f$t, xXe };
