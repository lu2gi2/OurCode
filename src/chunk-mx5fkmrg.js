import { sl, dC } from "/$bunfs/root/chunk-pp3y3t61.js";
import { up } from "/$bunfs/root/chunk-x47nahfr.js";
import { qn } from "/$bunfs/root/chunk-nj0630nv.js";
import { UEe } from "/$bunfs/root/chunk-p0252qjr.js";
import { THn } from "/$bunfs/root/chunk-5m0r2zve.js";
class r {
    reader = undefined;
    register(e) {
        this.reader = e;
    }
    read() {
        return this.reader?.() ?? false;
    }
}
const o = new r;
function hqr(e) {
    o.register(e);
}
function Yze() {
    let e = dC("allow_plugin_skill_search");
    if (e === "org_denied" || e === "latched" || e === "unregistered" || e !== null && sl("hipaa")) {
        return false;
    }
    if (UEe()) {
        return true;
    }
    return up() && qn() && o.read();
}
function tWs(e) {
    if (!THn.includes(e)) {
        return true;
    }
    return Yze();
}
export { hqr, Yze, tWs };
