import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-mb842220.js";
import { Fs } from "/$bunfs/root/chunk-cg7f88dh.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-79wfew46.js";
export async function call() {
    if (await Fs("https://www.stickermule.com/claudecode")) {
        return {
            type: "text",
            value: "Opening sticker page in browser…"
        };
    } else {
        return {
            type: "text",
            value: "Failed to open browser. Visit: https://www.stickermule.com/claudecode"
        };
    }
}
