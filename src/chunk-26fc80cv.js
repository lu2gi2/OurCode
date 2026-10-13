import { q, cs } from "/$bunfs/root/chunk-ctt36bn8.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
async function ZL() {
    try {
        let s = t();
        if (s.length > 0) {
            await Promise.race([
                Promise.allSettled(s),
                Q(200)
            ]);
            s.length = 0;
        }
        let [{ settle1PEventLoggingBeforeExit, shutdown1PEventLogging }, { shutdownDatadog }, { shutdownErrorTracking }] = await Promise.all([
            import("/$bunfs/root/chunk-rc2cqp81.js"),
            import("/$bunfs/root/chunk-m3z2ahgd.js"),
            import("/$bunfs/root/chunk-dgvgsxjh.js")
        ]);
        let a = settle1PEventLoggingBeforeExit();
        let l = [
            shutdown1PEventLogging(),
            shutdownDatadog(),
            shutdownErrorTracking()
        ];
        await Promise.race([
            Promise.all(l),
            Q(500)
        ]);
        await a;
    } catch  {}
}
class o {
    tasks = [];
}
const c = new q(()=>new o);
function t() {
    return cs(c).tasks;
}
function bfo(s) {
    t().push(s.catch(()=>{}));
}
export { ZL, bfo };
