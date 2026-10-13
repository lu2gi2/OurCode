import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { qhr, Khr, Yhr } from "/$bunfs/root/chunk-4r6b8efh.js";
import { $un, oNr } from "/$bunfs/root/chunk-zpyprq4v.js";
import { fJe } from "/$bunfs/root/chunk-x1hgc1tw.js";
import { statfs } from "fs/promises";
import { availableParallelism, totalmem } from "os";
const alsoLookFor = [
    "gcloud",
    "aws",
    "az",
    "gh",
    "brew",
    "apt",
    "sqlite3",
    "ffmpeg",
    "rg",
    "jq"
];
const s = 2000;
const l = 2n ** 30n;
function S6n() {
    try {
        return fJe() && $un("basic") !== "off";
    } catch (error) {
        c(W(error));
        return false;
    }
}
async function TBs(t) {
    try {
        if (!S6n()) {
            return;
        }
        let [e, r] = await Promise.all([
            oNr({
                includeMcpServers: false,
                signal: AbortSignal.timeout(s),
                alsoLookFor,
                maxTools: qhr
            }),
            Ge(statfs(t, {
                bigint: true
            }), s).catch(()=>{})
        ]);
        if (e === undefined) {
            m("remote_tools_host_inventory", "unsupported_platform");
            return;
        }
        let n = r === undefined ? -1n : r.bavail * r.bsize;
        if (!e.complete) {
            f("remote_tools_host_inventory", "deadline");
        } else if (n < 0n) {
            f("remote_tools_host_inventory", "disk_unread");
        } else {
            g("remote_tools_host_inventory");
        }
        let i = {
            ...!e.complete && {
                incomplete: true
            },
            cpus: availableParallelism(),
            memory_gb: Math.round(totalmem() / Number(l)),
            ...n >= 0n && {
                disk_free_gb: Math.min(Number(n / l), Khr)
            }
        };
        let tools = e.profile.tools;
        while(tools.length > 0 && _({
            tools,
            ...i
        }).length > Yhr){
            tools = tools.slice(0, -1);
        }
        return {
            tools,
            ...i
        };
    } catch (error) {
        c(W(error));
        m("remote_tools_host_inventory", "error");
        return;
    }
}
export { S6n, TBs };
