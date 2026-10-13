import { q, B, K, Bpe, we, Vl } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { fr } from "/$bunfs/root/chunk-se8vehhp.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { zv, t8e } from "/$bunfs/root/chunk-3fj60qgx.js";
import { Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { readdir } from "fs/promises";
import { basename, dirname, join } from "path";
function Ep() {
    return join(ve(), "projects");
}
function DW(t) {
    if (dirname(t) === Ep()) {
        return basename(t);
    }
}
class c {
    projectDirCache = new Map;
    agentTranscriptSubdirs = new Map;
    cacheProjectDir(t, e) {
        this.projectDirCache.set(t, e);
    }
    clearProjectDirCache() {
        this.projectDirCache.clear();
    }
    setAgentTranscriptSubdir(t, e) {
        this.agentTranscriptSubdirs.set(t, e);
    }
    clearAgentTranscriptSubdir(t) {
        this.agentTranscriptSubdirs.delete(t);
    }
}
const g = new q(()=>new c);
function d_(t) {
    let e = g.of(B().host);
    let n = e.projectDirCache.get(t);
    if (n !== undefined) {
        return n;
    }
    let r = join(Ep(), zv(t));
    e.cacheProjectDir(t, r);
    return r;
}
function NRt() {
    let t = Vl();
    if (t !== null) {
        return d_(t);
    }
    return t8e() ?? d_(we());
}
function LW() {
    return Bpe() ?? NRt();
}
function Vu() {
    return join(LW(), `${K()}.jsonl`);
}
function tdo(t, e) {
    g.of(B().host).setAgentTranscriptSubdir(t, e);
}
function zhr(t) {
    g.of(B().host).clearAgentTranscriptSubdir(t);
}
function gXt() {
    return join(LW(), K(), "subagents");
}
function lg(t) {
    let e = g.of(B().host).agentTranscriptSubdirs.get(t);
    let n = e ? join(gXt(), e) : gXt();
    return join(n, `agent-${t}.jsonl`);
}
async function x4e(t) {
    let e = DW(LW());
    if (j() && t !== undefined && e !== undefined) {
        return f(t, e, K());
    }
    let n;
    try {
        n = await readdir(gXt(), {
            withFileTypes: true
        });
    } catch  {
        return [];
    }
    return n.filter((r)=>r.isFile() && r.name.startsWith("agent-") && r.name.endsWith(".jsonl")).map((r)=>r.name.slice(6, -6));
}
async function f(t, projectKey, sessionId) {
    let r = [];
    try {
        if ((await Wi((cursor)=>t.listEntries({
                namespace: "transcript",
                projectKey,
                sessionId
            }, {
                skipKeyStats: true,
                skipScopeStats: true,
                ...cursor !== undefined && {
                    cursor
                }
            }), (a)=>{
            for (let s of a){
                if (s.kind === "key" && s.key.namespace === "transcript" && s.key.agentId !== undefined && s.key.agentRelPath === undefined && fr(s.key.agentId)) {
                    r.push(s.key.agentId);
                }
            }
        })).status === "done") {
            return r;
        }
        return [];
    } catch  {
        return [];
    }
}
function ndo(t, e) {
    let n = {};
    for (let r of Object.values(t)){
        let o = e[r.id]?.messages;
        if (r.type === "in_process_teammate" && r.identity?.agentId && o && o.length > 0) {
            n[r.identity.agentId] = o;
        }
    }
    return n;
}
export { Ep, DW, d_, NRt, LW, Vu, tdo, zhr, gXt, lg, x4e, ndo };
