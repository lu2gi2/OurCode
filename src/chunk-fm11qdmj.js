import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { yV } from "/$bunfs/root/chunk-ghreee2m.js";
const d = {};
const eGo = yV("whiteboardTelemetry", d);
function tGo(i, r, e, is_first_publish) {
    g("whiteboard_publish", {
        seeded: is_first_publish && e.elCount > 0,
        el_count: e.elCount,
        is_first_publish
    });
    let t;
    i.set((o)=>{
        t = o[r];
        if (t === undefined) {
            return {
                ...o,
                [r]: e.pingCount
            };
        }
        if (e.pingCount > t) {
            return {
                ...o,
                [r]: e.pingCount
            };
        }
        return o;
    });
    if (t !== undefined && e.pingCount > t) {
        g("whiteboard_turn", {
            ping_count: e.pingCount,
            el_count: e.elCount
        });
    }
}
export { eGo, tGo };
