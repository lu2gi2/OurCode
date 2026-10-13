import { fr } from "/$bunfs/root/chunk-se8vehhp.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { Yr } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Vm, gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { mkdir } from "fs/promises";
import { join } from "path";
async function gBo(jobId, r) {
    if (j() && r !== undefined && fr(jobId)) {
        await n(r, {
            namespace: "job",
            jobId
        });
        return;
    }
    await mkdir(Yr(jobId), {
        recursive: true
    });
}
async function VIe(e, r) {
    if (j() && r !== undefined && fr(e)) {
        await n(r, c(e));
        return;
    }
    await mkdir(join(Yr(e), "tmp"), {
        recursive: true
    });
}
function c(jobId) {
    return {
        namespace: "job",
        jobId,
        relPath: [
            "tmp"
        ]
    };
}
async function n(e, r) {
    let o = await e.ensureScope(r);
    if (!o.ok) {
        let code = Vm(o.error);
        throw Object.assign(new x(`job folder not made (${gt(o.error)})`, "job folder not made"), code !== undefined ? {
            code
        } : {});
    }
}
export { gBo, VIe };
