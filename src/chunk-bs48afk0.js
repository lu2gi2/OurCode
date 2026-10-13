import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Ep, LW } from "/$bunfs/root/chunk-y9c4grt0.js";
import { mkdir, readdir, readFile, writeFile } from "fs/promises";
import { basename, dirname, join } from "path";
function P(r) {
    return join(m(), `${r}.json`);
}
function m() {
    let r = LW();
    return join(r, K(), "workflows");
}
function Q0(r) {
    let a = LW();
    return join(a, K(), "subagents", "workflows", r);
}
function j9n() {
    let r = LW();
    if (dirname(r) === Ep()) {
        return basename(r);
    }
}
function W(r, a, n) {
    return $e.sidecar(r, a, [
        "workflows",
        `${n}.json`
    ]);
}
async function hGo(r, a, n) {
    try {
        let i = {
            runId: r,
            timestamp: new Date().toISOString(),
            ...a
        };
        let l = P(r);
        let s = j() && n ? j9n() : undefined;
        let o = K();
        await mkdir(dirname(l), {
            recursive: true,
            mode: 448
        });
        if (j() && n && s !== undefined && fr(`${r}.json`)) {
            let e = await n.write(W(s, o, r), _(i), {
                publishDiscipline: "inPlace",
                mode: 384
            });
            if (!e.ok) {
                t(`Failed to write workflow snapshot ${r}: ${e.error.code}`);
            }
            return;
        }
        await writeFile(l, _(i), {
            encoding: "utf8",
            mode: 384
        });
    } catch (error) {
        t(`Failed to write workflow snapshot ${r}: ${error instanceof Error ? error.message : error}`);
    }
}
function d(r, a) {
    let n = r.runId ?? a;
    return {
        runId: n,
        taskId: r.taskId ?? n,
        timestamp: r.timestamp ?? new Date(0).toISOString(),
        script: r.script ?? "",
        scriptPath: r.scriptPath,
        args: r.args,
        result: r.result,
        agentCount: r.agentCount ?? 0,
        logs: r.logs ?? [],
        durationMs: r.durationMs ?? 0,
        error: r.error,
        summary: typeof r.summary === "string" ? r.summary : undefined,
        workflowName: typeof r.workflowName === "string" ? r.workflowName : undefined,
        title: r.title,
        status: r.status ?? (r.error ? "failed" : "completed"),
        startTime: r.startTime ?? (Date.parse(r.timestamp ?? "") || 0),
        phases: r.phases,
        defaultModel: r.defaultModel,
        workflowProgress: r.workflowProgress ?? [],
        totalTokens: r.totalTokens ?? 0,
        totalToolCalls: r.totalToolCalls ?? 0
    };
}
async function njr(r) {
    let a = r ? j9n() : undefined;
    if (r && a !== undefined) {
        return T(r, a);
    }
    let n = m();
    let i;
    try {
        i = await readdir(n);
    } catch  {
        return [];
    }
    let l = (await Promise.all(i.filter((s)=>s.endsWith(".json")).map(async (s)=>{
        try {
            let o = await readFile(join(n, s), "utf8");
            let e = X(o);
            return d(e, s.replace(/\.json$/, ""));
        } catch (error) {
            t(`Failed to parse workflow snapshot ${s}: ${error instanceof Error ? error.message : error}`);
            return null;
        }
    }))).filter((s)=>s !== null);
    l.sort((s, o)=>o.startTime - s.startTime);
    return l;
}
async function T(r, projectKey) {
    let n = {
        namespace: "sidecar",
        projectKey,
        sessionId: K(),
        relPath: [
            "workflows"
        ]
    };
    let i = [];
    let cursor;
    do {
        let o = await r.listEntries(n, cursor === undefined ? undefined : {
            cursor
        });
        if (!o.ok) {
            t(`Failed to list workflow snapshots: ${o.error.code}`);
            return [];
        }
        for (let e of o.value.items){
            if (e.kind !== "key" || e.key.namespace !== "sidecar") {
                continue;
            }
            if ((e.key.relPath.at(-1) ?? "").endsWith(".json")) {
                i.push(e.key);
            }
        }
        cursor = o.value.cursor;
    }while (cursor !== undefined)
    let s = (await Promise.all(i.map(async (o)=>{
        let e = o.relPath.at(-1) ?? "";
        try {
            let f = await r.read([
                o
            ]);
            if (!f.ok) {
                t(`Failed to parse workflow snapshot ${e}: ${f.error.code}`);
                return null;
            }
            let c = f.value.items[0];
            if (!c?.found) {
                t(`Failed to parse workflow snapshot ${e}: deleted between list and read`);
                return null;
            }
            let w = X(Buffer.from(c.value).toString("utf8"));
            return d(w, e.replace(/\.json$/, ""));
        } catch (error) {
            t(`Failed to parse workflow snapshot ${e}: ${error instanceof Error ? error.message : error}`);
            return null;
        }
    }))).filter((o)=>o !== null);
    s.sort((o, e)=>e.startTime - o.startTime);
    return s;
}
export { Q0, j9n, hGo, njr };
