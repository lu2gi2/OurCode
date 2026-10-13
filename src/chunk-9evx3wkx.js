import { K, Bpe, we, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ph, t8e } from "/$bunfs/root/chunk-3fj60qgx.js";
import { DW } from "/$bunfs/root/chunk-y9c4grt0.js";
import { pro } from "/$bunfs/root/chunk-1c8pjf91.js";
import { Nye, B2 } from "/$bunfs/root/chunk-4xz4ewb9.js";
import { tr, me, hn, bt } from "/$bunfs/root/chunk-55p8dvkx.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { dirname, join } from "path";
const y = /^k[0-9a-z]{8}$/;
const u = 256;
const g = /^(?:[^\p{Cc}\p{Cf}]|[\u200c\u200d])+$/u;
const ghn = /^[A-Za-z0-9_-]{1,128}$/;
const h = p(()=>bt({
        taskId: me().regex(y),
        serverName: me().min(1).max(u).regex(g),
        toolName: me().min(1).max(u).regex(g),
        mcpTaskId: me().min(1).regex(g),
        pollIntervalMs: hn().optional(),
        spawnedAt: hn(),
        toolUseId: me().regex(pro).optional(),
        protocol: me().min(1).max(u).regex(/^[\x20-\x7e]+$/).optional(),
        ttlExpiresAt: hn().optional(),
        transportFingerprint: me().max(8192).optional(),
        workerWakeId: me().regex(ghn).optional()
    }).passthrough().superRefine((e, a)=>{
        if (e.protocol === "sep2663" && (e.mcpTaskId.length > Nye || !B2.test(e.mcpTaskId))) {
            a.addIssue({
                code: tr.custom,
                path: [
                    "mcpTaskId"
                ],
                message: "sep2663 task id exceeds the wire bound"
            });
        }
    }));
function J9n(e) {
    return h().safeParse(e);
}
function Uie() {
    return Bpe() ?? t8e() ?? Ph(we());
}
function T(e = K(), a = Uie()) {
    return join(a, e, "mcp-tasks");
}
function S(e, a = K(), n) {
    return join(T(a, n), `mcp-task-${e}.meta.json`);
}
function f(e = Uie()) {
    return DW(e);
}
function w(e, a, n = K()) {
    return $e.sidecar(e, n, [
        "mcp-tasks",
        `mcp-task-${a}.meta.json`
    ]);
}
async function hhn(e, a, n) {
    let o = j() && n !== undefined ? f() : undefined;
    let c = K();
    let s = S(e, c);
    if (n && o !== undefined) {
        if (!Ce()) {
            await mn().mkdir(dirname(s));
        }
        let r = await n.write(w(o, e, c), _(a), {
            publishDiscipline: "inPlace"
        });
        if (!r.ok) {
            t(`writeMcpTaskMetadata: ${r.error.code}`);
            throw Error("mcp task metadata write failed");
        }
        return;
    }
    if (Ce()) {
        return;
    }
    await mn().mkdir(dirname(s));
    await mn().write(s, _(a));
}
async function Bie(e, a, n, o) {
    let c = j() && a !== undefined ? f(o) : undefined;
    if (a && c !== undefined) {
        let r = await a.delete(w(c, e, n));
        if (!r.ok) {
            t(`deleteMcpTaskMetadata: ${r.error.code}`);
            throw Error("mcp task metadata delete failed");
        }
        return;
    }
    if (Ce()) {
        return;
    }
    let s = S(e, n, o);
    try {
        await mn().delete(s);
    } catch (error) {
        if (jt(error)) {
            return;
        }
        throw error;
    }
}
async function yhn(e) {
    let a = j() && e !== undefined ? f() : undefined;
    if (e && a !== undefined) {
        return I(e, a);
    }
    if (Ce()) {
        return [];
    }
    let n = T();
    let o;
    try {
        o = await mn().list(n);
    } catch (error) {
        if (jt(error)) {
            return [];
        }
        throw error;
    }
    let c = [];
    for (let s of o){
        if (!s.endsWith(".meta.json")) {
            continue;
        }
        try {
            let r = await mn().read(join(n, s));
            let i = J9n(X(r));
            if (!i.success) {
                t(`listMcpTaskMetadata: skipping ${s}: ${String(i.error)}`);
                continue;
            }
            c.push(i.data);
        } catch (error) {
            t(`listMcpTaskMetadata: skipping ${s}: ${String(error)}`);
        }
    }
    return c;
}
async function I(e, projectKey) {
    let n = {
        namespace: "sidecar",
        projectKey,
        sessionId: K(),
        relPath: [
            "mcp-tasks"
        ]
    };
    let o = [];
    let c = await Wi((cursor)=>e.listEntries(n, {
            cursor,
            skipKeyStats: true,
            skipScopeStats: true
        }), (r)=>{
        for (let i of r){
            if (i.kind !== "key" || i.key.namespace !== "sidecar") {
                continue;
            }
            if ((i.key.relPath.at(-1) ?? "").endsWith(".meta.json")) {
                o.push(i.key);
            }
        }
    });
    switch(c.status){
        case "done":
            break;
        case "error":
            t(`listMcpTaskMetadata: ${c.error.code}`);
            throw Error("mcp task metadata list failed");
        case "capped":
            t(`listMcpTaskMetadata: list exceeded ${Yf} pages`);
            throw Error("mcp task metadata list exceeded the page cap");
    }
    let s = [];
    for (let r of o){
        let i = r.relPath.at(-1) ?? "";
        let m = await e.read([
            r
        ]);
        if (!m.ok) {
            t(`listMcpTaskMetadata: skipping ${i}: ${m.error.code}`);
            continue;
        }
        let l = m.value.items[0];
        if (!l.found) {
            continue;
        }
        try {
            let d = J9n(X(Buffer.from(l.value).toString("utf8")));
            if (!d.success) {
                t(`listMcpTaskMetadata: skipping ${i}: ${String(d.error)}`);
                continue;
            }
            s.push(d.data);
        } catch (error) {
            t(`listMcpTaskMetadata: skipping ${i}: ${String(error)}`);
        }
    }
    return s;
}
export { ghn, J9n, Uie, hhn, Bie, yhn };
