import "/$bunfs/root/chunk-wkmq9ht0.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { h9 } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { et, RH } from "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import { HLe } from "/$bunfs/root/chunk-6fb685xp.js";
import { WA, z$, WS } from "/$bunfs/root/chunk-pfdtn0nk.js";
import "/$bunfs/root/chunk-4r70ar86.js";
import { l9, z1, nwe } from "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { open } from "fs/promises";
const m = 10485760;
export async function recordStagedOutputAsRead(o, s) {
    try {
        let t = et(s);
        if (HLe(t) || RH(t)) {
            return "not_recordable";
        }
        await using r = await open(t, h9());
        let timestamp = Math.floor((await r.stat()).mtimeMs);
        let e = o.get(t);
        if (e !== undefined && !(e.contentFromTranscript && e.limit === undefined && WA(e) && e.timestamp < timestamp)) {
            return "kept_existing";
        }
        let i = await nwe(r, t, m);
        if (i.content.slice(0, 4096).includes("\x00")) {
            return "not_recordable";
        }
        let content = WS(i.content);
        if (e !== undefined && !z$(e, content.trim())) {
            return "kept_existing";
        }
        let d = o.get(t);
        if (d !== undefined && d !== e) {
            return "kept_existing";
        }
        o.set(t, {
            content,
            timestamp,
            offset: undefined,
            limit: undefined,
            contentNotInModelContext: true
        });
        return "recorded";
    } catch (error) {
        let r = v(error);
        if (r === "ENOENT" || r === "EISDIR" || l9(error) || z1(error)) {
            return "not_recordable";
        }
        return "read_failed";
    }
}
