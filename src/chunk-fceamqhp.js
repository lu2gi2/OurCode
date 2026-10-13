import { Klt, yOt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
const f$r = {};
Mr(f$r, {
    default: ()=>f$r,
    endPluginTest: ()=>Fpn
});
async function Fpn(e) {
    yOt();
    await Promise.all([
        process.stdout,
        process.stderr
    ].map((r)=>new Promise((resolve)=>r.write("", resolve))));
    await Klt();
    process.exit(e);
}
export { Fpn, f$r };
