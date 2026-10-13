import { q, B, K, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { l, D0 } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { sh, _, $o, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Zre } from "/$bunfs/root/chunk-gr4a0fky.js";
import { Xs } from "/$bunfs/root/chunk-4jkyvhbj.js";
import { wst } from "/$bunfs/root/chunk-bcy16nn4.js";
import { OB } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { promises } from "fs";
import { dirname, join } from "path";
function X6(e) {
    let n = D0(e);
    if (n === undefined) {
        return l(e);
    }
    return `${l(e)} (${n})`;
}
function Fze(e) {
    return (n)=>{
        t(`${e}: agent metadata sidecar unreadable, treating as absent: ${X6(n)}`);
        return null;
    };
}
const h = new Set([
    "model",
    "system",
    "tools",
    "max_tokens",
    "thinking",
    "output_config",
    "context_management",
    "metadata"
]);
const R = new Set([
    ...h,
    "thread"
]);
const k = / cc_(?:prev_req|prompt_id|turn_origin|prompt_index|turn_index|workload)=[^;"\\]*;/g;
const A = /,\\"tk\\":\\"[0-9a-fA-F-]{36}\\"/g;
const w = 5;
class y {
    recording = true;
}
const H = new q(()=>new y);
function P() {
    return H.of(B().host).recording;
}
function X4o(e) {
    let { stateByAgent, retiredInitHashes } = Xs().dumpPrompts;
    let i = stateByAgent.get(e)?.writtenInitDataHash;
    stateByAgent.delete(e);
    if (i !== undefined) {
        retiredInitHashes.set(e, i);
    }
}
function J4o() {
    Xs().dumpPrompts.stateByAgent.clear();
    Xs().dumpPrompts.retiredInitHashes.clear();
}
function E(e) {}
function x(e) {
    return join(ve(), "dump-prompts", `${e ?? K()}.jsonl`);
}
function F(e, n, r, i) {
    Xs().dumpPrompts.appendQueue.run(e, async ()=>{
        if (r) {
            if ((await r.storageV5.append(r.key, [
                {
                    data: n + `
`
                }
            ])).ok) {
                i();
            }
            return;
        }
        if (Ce()) {
            return;
        }
        await promises.mkdir(dirname(e), {
            recursive: true
        });
        await promises.appendFile(e, n + `
`);
        i();
    }).catch(()=>{});
}
function v(e, n, r, i, u) {
    try {
        return;
    } catch  {} finally{
        r.dumpInFlight = false;
    }
}
function Q4o(e, storageV5) {
    if (!P()) {
        return Zre;
    }
    let r = x(e);
    let i = j() && storageV5 !== undefined ? {
        storageV5,
        key: $e.log(e, "apiDump")
    } : undefined;
    return async (u, d)=>{
        let { stateByAgent, retiredInitHashes } = Xs().dumpPrompts;
        let writtenInitDataHash = retiredInitHashes.get(e);
        let s = stateByAgent.get(e) ?? {
            initialized: writtenInitDataHash !== undefined,
            lastInitDataHash: writtenInitDataHash ?? "",
            writtenInitDataHash,
            dumpInFlight: false
        };
        stateByAgent.set(e, s);
        if (d?.method === "POST" && d.body && !s.dumpInFlight) {
            s.dumpInFlight = true;
            let g = new Date().toISOString();
            setImmediate(v, d.body, g, s, r, i);
        }
        return Zre(u, d);
    };
}
function I(e) {
    let n = e.get("thread");
    if (n === undefined) {
        return false;
    }
    let r = $o(n);
    if (typeof r !== "object" || r === null || !("type" in r) || r.type !== "continue") {
        return false;
    }
    if (!e.has("tools")) {
        return true;
    }
    let i = $o(e.get("system") ?? "null");
    return Array.isArray(i) && i.length > 0 && i.every((u)=>OB(u));
}
export { X6, Fze, X4o, J4o, Q4o };
