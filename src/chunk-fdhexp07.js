import { Vl } from "/$bunfs/root/chunk-ctt36bn8.js";
import { df } from "/$bunfs/root/chunk-7mawjt4q.js";
import { nAo, MCr } from "/$bunfs/root/chunk-2d9a83dh.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { KTs } from "/$bunfs/root/chunk-6dwnw6av.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
async function Z_r(r) {
    let e = D([
        Vl(),
        df()
    ]).filter((t)=>t !== null);
    for (let t of e){
        try {
            let o = await nAo(r, t);
            if (o !== undefined) {
                let i = await KTs(t, o.gitRoot, r);
                if (typeof i === "string") {
                    MCr(i, o.gitRoot, o.canonicalRoot);
                }
            }
        } catch (error) {
            c(error);
        }
    }
}
export { Z_r };
