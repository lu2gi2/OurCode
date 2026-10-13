import { hz } from "/$bunfs/root/chunk-0ycjphb5.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { c5 } from "/$bunfs/root/chunk-tzz3htys.js";
import { E, u } from "/$bunfs/root/chunk-smx21d0k.js";
const o = 60000;
const r = 1800000;
const t = 2592000000;
const i = p(()=>u({
        recurringFrac: E().min(0).max(1),
        recurringCapMs: E().int().min(0).max(r),
        oneShotMaxMs: E().int().min(0).max(r),
        oneShotFloorMs: E().int().min(0).max(r),
        oneShotMinuteMod: E().int().min(1).max(60),
        recurringMaxAgeMs: E().int().min(0).max(t).default(c5.recurringMaxAgeMs),
        cacheLeadMs: E().int().min(0).max(60000).default(c5.cacheLeadMs)
    }).refine((n)=>n.oneShotFloorMs <= n.oneShotMaxMs));
function Gve() {
    let n = hz("tengu_kairos_cron_config", c5, o);
    let e = i().safeParse(n);
    if (e.success) {
        return e.data;
    }
    return c5;
}
export { Gve };
