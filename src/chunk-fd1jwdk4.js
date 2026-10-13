import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { xf } from "/$bunfs/root/chunk-md7g8y4m.js";
import { Ule } from "/$bunfs/root/chunk-qwvy7ma3.js";
function h9e() {
    return xf() || Ule();
}
function FMo(e) {
    switch(e.kind){
        case "elsewhere":
            return "elsewhere";
        case "nowhere":
            if (e.hasOwnSessionRecord) {
                return "here_only";
            }
            return "nowhere";
        case "unknown":
            if (e.why === "not_looked") {
                return "not_looked";
            }
            return "unknown";
    }
}
function zin(e, o) {
    i("tengu_remote_attach_record_lookup", {
        outcome: d(e),
        entry_point: d(o)
    });
}
export { h9e, FMo, zin };
