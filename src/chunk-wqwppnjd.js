import { xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Hpe, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { s7, i7, xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { Kb, bGo } from "/$bunfs/root/chunk-f1pkxrfr.js";
import { dS } from "/$bunfs/root/chunk-9fvky64k.js";
import { st, R0n } from "/$bunfs/root/chunk-45f0zf8d.js";
import { ZX, Ys } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Vk } from "/$bunfs/root/chunk-6g4165br.js";
import { Sv, jce } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { W1t } from "/$bunfs/root/chunk-asddjczd.js";
import { dUn } from "/$bunfs/root/chunk-xv9n7kza.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { join } from "path";
const yGo = "CLAUDE_REMOTE_WORKFLOW_SCRIPT";
const ljr = "CLAUDE_REMOTE_WORKFLOW_ARGS";
const _Go = "CLAUDE_WORKFLOW_NAME_ONLY";
function LQe() {
    return a.CLAUDE_WORKFLOW_NAME_ONLY;
}
async function _(o, name, source, manifest, p) {
    let w = ie();
    let e;
    try {
        e = await w.readdir(o);
    } catch  {
        return [];
    }
    return (await Promise.all(e.map(async (s)=>{
        if (!(s.isFile() || s.isSymbolicLink())) {
            return null;
        }
        if (!s.name.endsWith(".js")) {
            return null;
        }
        return v(join(o, s.name), name, source, manifest, p);
    }))).filter((s)=>s !== null);
}
async function v(o, l, plugin, pluginManifest, p) {
    let w = ie();
    if (Hpe(w, o, p)) {
        return null;
    }
    try {
        let e = await Vk(w, o, Sv);
        if (e === null) {
            t(`Plugin workflow ${o}: not a regular file or exceeds ${Sv} bytes \u2014 skipping`, {
                level: "warn"
            });
            return null;
        }
        let i = jce(e);
        let s = Kb(i, {
            validateBody: false
        });
        if ("error" in s) {
            t(`Plugin workflow ${o} has invalid meta: ${s.error} \u2014 skipping`, {
                level: "warn"
            });
            return null;
        }
        let name = `${l}:${s.meta.name}`;
        return {
            source: "plugin",
            plugin,
            pluginManifest,
            name,
            description: s.meta.description,
            whenToUse: s.meta.whenToUse,
            phases: s.meta.phases,
            script: i,
            filePath: o
        };
    } catch (error) {
        t(`Failed to load workflow from ${o}: ${error}`, {
            level: "error"
        });
        return null;
    }
}
function P(o) {
    let l = st();
    l.workflows ??= (async ()=>{
        let { enabled, errors } = await Ys(o);
        let p = [];
        if (errors.length > 0) {
            t(`Plugin loading errors: ${errors.map((e)=>dS(e)).join(", ")}`);
        }
        let w = null;
        for (let e of enabled){
            let i = new Set;
            let s = p.length;
            if (e.workflowsPath) {
                try {
                    let u = await _(e.workflowsPath, e.name, e.source, e.manifest, i);
                    p.push(...u);
                    if (u.length > 0) {
                        t(`Loaded ${u.length} workflows from plugin ${e.name} default directory`);
                    }
                } catch (error) {
                    w = "plugin_load_workflows_dir_failed";
                    t(`Failed to load workflows from plugin ${e.name} default directory: ${error}`, {
                        level: "error"
                    });
                }
            }
            if (e.workflowsPaths) {
                for (let u of e.workflowsPaths){
                    try {
                        let c = await ie().stat(u);
                        if (c.isDirectory()) {
                            let k = await _(u, e.name, e.source, e.manifest, i);
                            p.push(...k);
                            if (k.length > 0) {
                                t(`Loaded ${k.length} workflows from plugin ${e.name} custom path: ${u}`);
                            }
                        } else if (c.isFile() && u.endsWith(".js")) {
                            let k = await v(u, e.name, e.source, e.manifest, i);
                            if (k) {
                                p.push(k);
                                t(`Loaded workflow from plugin ${e.name} custom file: ${u}`);
                            }
                        }
                    } catch (error) {
                        w = "plugin_load_workflows_path_failed";
                        t(`Failed to load workflows from plugin ${e.name} custom path ${u}: ${error}`, {
                            level: "error"
                        });
                    }
                }
            }
            if (e.serverPluginId !== undefined) {
                for (let u of p.slice(s)){
                    u.serverPluginId = e.serverPluginId;
                }
            }
        }
        t(`Total plugin workflows loaded: ${p.length}`);
        if (w) {
            m("plugin_load_workflows", w);
        } else {
            g("plugin_load_workflows");
        }
        return p;
    })();
    return l.workflows;
}
function W(o, l) {
    if (!l || bGo(o.script)) {
        return true;
    }
    t(`Workflow ${o.filePath ?? o.name} (${o.source}) would override ${o.name} but does not parse \u2014 keeping the ${l.source} copy`, {
        level: "warn"
    });
    return false;
}
function S(o) {
    let l = new Map;
    for (let r of o){
        if (!W(r, l.get(r.name))) {
            continue;
        }
        l.set(r.name, r);
    }
    return [
        ...l.values()
    ];
}
function uyt() {
    return join(ve(), "workflows");
}
async function T(o, l) {
    try {
        return await ZX("workflows", o);
    } catch (error) {
        if (xs(error)) {
            t(`loadWorkflowsDir: project-dir walk failed: ${error.code}`, {
                level: "error"
            });
            l.walkFailed = true;
            return [];
        }
        throw error;
    }
}
async function D(o, source, r, n) {
    if (n !== undefined && source === "userSettings") {
        return L(n, o, r);
    }
    let p = ie();
    let w;
    try {
        w = await p.readdir(o);
    } catch  {
        return [];
    }
    return (await Promise.all(w.map(async (i)=>{
        if (!(i.isFile() || i.isSymbolicLink())) {
            return null;
        }
        if (!i.name.endsWith(".js")) {
            if (/\.(mjs|cjs|ts)$/.test(i.name)) {
                r.nearMissExt++;
            }
            return null;
        }
        let s = join(o, i.name);
        let u;
        try {
            u = await p.readFileBytes(s, Sv + 1);
        } catch  {
            r.skippedUnreadable++;
            return null;
        }
        if (u.byteLength > Sv) {
            t(`Workflow ${s} exceeds ${Sv} bytes \u2014 skipping`, {
                level: "warn"
            });
            r.skippedOversize++;
            return null;
        }
        let d = jce(u.toString("utf-8"));
        let c = Kb(d, {
            validateBody: false
        });
        if ("error" in c) {
            t(`Workflow ${s} has invalid meta: ${c.error} \u2014 skipping`, {
                level: "warn"
            });
            r.skippedInvalidMeta++;
            return null;
        }
        return {
            source,
            name: c.meta.name,
            description: c.meta.description,
            whenToUse: c.meta.whenToUse,
            phases: c.meta.phases,
            script: d,
            filePath: s
        };
    }))).filter((i)=>i !== null);
}
async function L(o, l, r) {
    let n = [];
    switch((await Wi((cursor)=>o.listEntries({
            namespace: "userConfigDir",
            dir: "workflows"
        }, cursor === undefined ? undefined : {
            cursor
        }), (e)=>{
        for (let i of e){
            if (i.kind !== "key" || i.key.namespace !== "userConfigDir") {
                continue;
            }
            let s = i.key.relPath.at(-1);
            if (s === undefined || i.key.relPath.length !== 1) {
                continue;
            }
            if (!s.endsWith(".js")) {
                if (/\.(mjs|cjs|ts)$/.test(s)) {
                    r.nearMissExt++;
                }
                continue;
            }
            n.push({
                key: i.key,
                name: s
            });
        }
    })).status){
        case "done":
            break;
        case "error":
            return [];
        case "capped":
            t(`User workflows listing of ${l} truncated at ${Yf} pages \u2014 loading the ${n.length} workflow files seen`, {
                level: "warn"
            });
            r.userListingTruncated = true;
            break;
    }
    return (await Promise.all(n.map(async ({ key, name })=>{
        let s = await o.read([
            {
                key,
                offset: 0,
                length: Sv + 1
            }
        ]);
        if (!s.ok) {
            t(`Workflow ${join(l, name)} could not be read through the storage backend (${s.error.code}) \u2014 skipping`, {
                level: "warn"
            });
            r.skippedUnreadable++;
            return null;
        }
        let u = s.value.items[0];
        if (u === undefined || !u.found) {
            r.skippedUnreadable++;
            return null;
        }
        let d = join(l, name);
        if (u.value.byteLength > Sv) {
            t(`Workflow ${d} exceeds ${Sv} bytes \u2014 skipping`, {
                level: "warn"
            });
            r.skippedOversize++;
            return null;
        }
        let c = jce(Buffer.from(u.value).toString("utf-8"));
        let k = Kb(c, {
            validateBody: false
        });
        if ("error" in k) {
            t(`Workflow ${d} has invalid meta: ${k.error} \u2014 skipping`, {
                level: "warn"
            });
            r.skippedInvalidMeta++;
            return null;
        }
        return {
            source: "userSettings",
            name: k.meta.name,
            description: k.meta.description,
            whenToUse: k.meta.whenToUse,
            phases: k.meta.phases,
            script: c,
            filePath: d
        };
    }))).filter((e)=>e !== null);
}
async function b(o, l) {
    let r = uyt();
    let n = {
        skippedInvalidMeta: 0,
        skippedOversize: 0,
        skippedUnreadable: 0,
        nearMissExt: 0,
        walkFailed: false,
        userListingTruncated: false
    };
    let p = await T(o, n);
    let [w, ...e] = await Promise.all([
        cn("userSettings") ? D(r, "userSettings", n, l) : Promise.resolve([]),
        ...cn("projectSettings") ? p.map((d)=>D(d, "projectSettings", n)) : []
    ]);
    let i = new Map;
    for (let d of w){
        if (!W(d, i.get(d.name))) {
            continue;
        }
        i.set(d.name, d);
    }
    for(let d = e.length - 1; d >= 0; d--){
        for (let c of e[d]){
            if (!W(c, i.get(c.name))) {
                continue;
            }
            i.set(c.name, c);
        }
    }
    let s = n.walkFailed && cn("projectSettings");
    let u = n.skippedInvalidMeta + n.skippedOversize + n.skippedUnreadable;
    if (s || n.userListingTruncated || u > 0 || n.nearMissExt > 0) {
        f("workflow_discover", s ? "project_dir_walk_failed" : n.userListingTruncated ? "user_listing_truncated" : n.skippedInvalidMeta > 0 ? "invalid_meta" : n.skippedOversize > 0 ? "oversize" : n.skippedUnreadable > 0 ? "unreadable" : "near_miss_extension", {
            found: i.size,
            skipped_invalid_meta: n.skippedInvalidMeta,
            skipped_oversize: n.skippedOversize,
            skipped_unreadable: n.skippedUnreadable,
            near_miss_ext: n.nearMissExt,
            ...n.userListingTruncated && {
                user_listing_truncated: true
            }
        });
    } else {
        g("workflow_discover", {
            found: i.size
        });
    }
    return [
        ...i.values()
    ].sort((d, c)=>d.name.localeCompare(c.name));
}
function TOe(o, l) {
    return s7(xr().allWorkflows, `${dUn()}:${LQe()}:${i7(o)}`, ()=>M(o, l));
}
async function M(o, l) {
    if (br("workflows") || LQe()) {
        return [
            ...W1t()
        ];
    }
    let [r, n] = await Promise.all([
        b(o, l),
        P(l)
    ]);
    let p = S(n);
    let w = W1t();
    let e = new Map(w.map((y)=>[
            y.name,
            y
        ]));
    let i = O(p, e);
    for (let y of i){
        e.set(y.name, y);
    }
    let s = O(r, e);
    let u = new Set(s.map((y)=>y.name));
    let d = i.filter((y)=>!u.has(y.name));
    let c = new Set([
        ...u,
        ...d.map((y)=>y.name)
    ]);
    return [
        ...w.filter((y)=>!c.has(y.name)),
        ...d,
        ...s
    ];
}
function O(o, l) {
    return o.filter((r)=>W(r, l.get(r.name)));
}
async function j1t(o, l, r) {
    return (await TOe(l, r)).find((p)=>p.name === o);
}
function K9n() {
    xr().allWorkflows.clear();
    R0n();
}
export { yGo, ljr, _Go, LQe, uyt, TOe, j1t, K9n };
