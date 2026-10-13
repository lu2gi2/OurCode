const l = String.fromCharCode(0);
const p = /^\.[0-9a-f]{16}\.aside$/;
function Grn(e) {
    if (e.charCodeAt(0) !== 46) {
        return false;
    }
    return o9(e).some((n)=>p.test(n));
}
const g = /(^\.[0-9a-f]{16}\.tmp~?$)|(\.tmp[.~][0-9a-f]{8}$)|(\.purge\.[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\.tmp$)/;
function AIs(e) {
    return o9(e).some((n)=>g.test(n));
}
function u(e) {
    return typeof e === "string" && /^[. ]+$/.test(e);
}
function fr(e) {
    return !(typeof e !== "string" || e.length === 0 || u(e) || e.includes("/") || e.includes("\\") || e.includes(l) || Grn(e));
}
function PO(e) {
    return e.length > 0 && e.every(fr);
}
function Vrn(e) {
    return o9(e).some((n)=>n.endsWith(".jsonl"));
}
const qrn = "team";
function o9(e) {
    let n = s.get(e);
    if (n !== undefined) {
        return n;
    }
    let a = Object.freeze(m(e));
    if (s.size >= d) {
        s.clear();
    }
    s.set(e, a);
    return a;
}
function m(e) {
    let n = e.toLowerCase();
    let a = n.indexOf(":");
    if (a === -1) {
        return [
            i(n)
        ];
    }
    return [
        i(n),
        i(n.slice(0, a))
    ];
}
var s = new Map;
var d = 32768;
function i(e) {
    let e_length = e.length;
    while(e_length > 0){
        let a = e.charCodeAt(e_length - 1);
        if (a !== 46 && a !== 32) {
            break;
        }
        e_length -= 1;
    }
    if (e_length === e.length) {
        return e;
    }
    return e.slice(0, e_length);
}
function r(e, n, a) {
    if (a === undefined) {
        return e;
    }
    return {
        ...e,
        [n]: a
    };
}
function transcript(e, n, a, t) {
    let o = r({
        namespace: "transcript",
        projectKey: e,
        sessionId: n
    }, "agentId", a);
    return r(o, "agentRelPath", t);
}
function log(e, channel, a) {
    let c = r({
        namespace: "log",
        sessionId: e,
        channel
    }, "agentId", a?.agentId);
    return r(c, "runId", a?.runId);
}
const $e = {
    transcript,
    journal: (e, n, agentRelPath)=>({
            namespace: "transcript",
            projectKey: e,
            sessionId: n,
            agentRelPath,
            journal: true
        }),
    sessionJournal: (e, n, sessionJournal)=>({
            namespace: "transcript",
            projectKey: e,
            sessionId: n,
            sessionJournal
        }),
    history: ()=>({
            namespace: "history"
        }),
    log,
    globalConfig: ()=>({
            namespace: "globalConfig"
        }),
    globalConfigCopy: (kind, n)=>({
            namespace: "globalConfig",
            kind,
            stamp: n
        }),
    userSettings: ()=>({
            namespace: "settings",
            layer: "user"
        }),
    projectSettings: (e)=>({
            namespace: "settings",
            layer: "project",
            projectKey: e
        }),
    localSettings: (consentRootKey)=>({
            namespace: "settings",
            layer: "local",
            consentRootKey
        }),
    task: (e, taskId)=>({
            namespace: "task",
            listId: e,
            taskId
        }),
    taskListMeta: (e)=>({
            namespace: "task",
            listId: e,
            meta: true
        }),
    taskListHighWaterMark: (e)=>({
            namespace: "task",
            listId: e,
            highWaterMark: true
        }),
    memory: (e, n)=>({
            namespace: "memory",
            projectKey: e,
            relPath: n
        }),
    pluginRegistry: (e)=>({
            namespace: "pluginRegistry",
            file: e
        }),
    marketplaceCache: (e, form)=>({
            namespace: "marketplaceCache",
            marketplace: e,
            form
        }),
    marketplaceTree: (e, n)=>({
            namespace: "marketplaceCache",
            marketplace: e,
            relPath: n
        }),
    pluginCache: (e, plugin, version, t)=>({
            namespace: "pluginCache",
            marketplace: e,
            plugin,
            version,
            relPath: t
        }),
    cache: (store, n)=>({
            namespace: "cache",
            store,
            id: n
        }),
    paste: (e)=>({
            namespace: "paste",
            id: e
        }),
    state: (e)=>({
            namespace: "state",
            id: e
        }),
    pluginAssetCache: (digest)=>({
            namespace: "pluginAssetCache",
            digest
        }),
    plan: (name)=>({
            namespace: "plan",
            name
        }),
    daemon: (e)=>({
            namespace: "daemon",
            relPath: e
        }),
    feedbackDraft: (draftId)=>({
            namespace: "feedbackDraft",
            draftId
        }),
    agentMemory: (agentType, n)=>({
            namespace: "agentMemory",
            layer: "user",
            agentType,
            relPath: n
        }),
    identity: ()=>({
            namespace: "identity"
        }),
    team: (e)=>({
            namespace: "team",
            team: e
        }),
    sidecar: (e, n, a)=>({
            namespace: "sidecar",
            projectKey: e,
            sessionId: n,
            relPath: a
        }),
    mailbox: (e, teammate)=>({
            namespace: "mailbox",
            team: e,
            teammate
        }),
    scratch: (e, n)=>({
            namespace: "scratch",
            sessionId: e,
            relPath: n
        }),
    userConfigDir: (dir, n)=>({
            namespace: "userConfigDir",
            dir,
            relPath: n
        }),
    fileHistory: (e, backupFileName)=>({
            namespace: "fileHistory",
            sessionId: e,
            backupFileName
        }),
    job: (e, n)=>({
            namespace: "job",
            jobId: e,
            relPath: n
        }),
    jobTimeline: (e)=>({
            namespace: "jobTimeline",
            jobId: e
        }),
    recording: (e, n, a)=>({
            namespace: "recording",
            projectKey: e,
            sessionId: n,
            stamp: a
        }),
    sessionLog: (e, n, logName)=>({
            namespace: "sessionLog",
            projectKey: e,
            year: n.year,
            month: n.month,
            day: n.day,
            logName
        }),
    jobPins: ()=>({
            namespace: "jobsRoot",
            file: "pins"
        }),
    jobDraft: (draftKey)=>({
            namespace: "jobsRoot",
            draftKey
        }),
    session: (e)=>({
            namespace: "session",
            file: e
        }),
    bridgePointer: (e)=>({
            namespace: "bridgePointer",
            projectKey: e
        }),
    sessionAliases: (e)=>({
            namespace: "sessionAliases",
            projectKey: e
        }),
    dirSyncRecord: (e, n)=>({
            namespace: "dirSyncRecord",
            projectKey: e,
            sessionId: n
        })
};
function CIs(e, n) {
    return {
        namespace: "transcript",
        projectKey: e,
        sessionId: n,
        agentRelPath: []
    };
}
function yGn(e) {
    return JSON.stringify(K(e));
}
function RIs(e, n) {
    return yGn(e) === yGn(n);
}
function K(e) {
    switch(e.namespace){
        case "transcript":
            if (e.journal === true) {
                return [
                    e.namespace,
                    e.projectKey,
                    e.sessionId,
                    null,
                    e.agentRelPath,
                    "journal"
                ];
            }
            if (e.sessionJournal !== undefined) {
                return [
                    e.namespace,
                    e.projectKey,
                    e.sessionId,
                    null,
                    null,
                    e.sessionJournal
                ];
            }
            return [
                e.namespace,
                e.projectKey,
                e.sessionId,
                e.agentId ?? null,
                e.agentRelPath ?? null
            ];
        case "history":
        case "identity":
            return [
                e.namespace
            ];
        case "globalConfig":
            if ("kind" in e) {
                return [
                    e.namespace,
                    e.kind,
                    e.stamp
                ];
            }
            return [
                e.namespace
            ];
        case "settings":
            if (e.layer === "user") {
                return [
                    e.namespace,
                    e.layer
                ];
            }
            if (e.layer === "project") {
                return [
                    e.namespace,
                    e.layer,
                    e.projectKey
                ];
            }
            return [
                e.namespace,
                e.layer,
                e.consentRootKey
            ];
        case "task":
            if ("meta" in e) {
                return [
                    e.namespace,
                    e.listId,
                    e.meta
                ];
            }
            if ("highWaterMark" in e) {
                return [
                    e.namespace,
                    e.listId,
                    [
                        "highWaterMark"
                    ]
                ];
            }
            return [
                e.namespace,
                e.listId,
                e.taskId
            ];
        case "memory":
            return [
                e.namespace,
                e.projectKey,
                e.relPath
            ];
        case "pluginRegistry":
            return [
                e.namespace,
                e.file
            ];
        case "marketplaceCache":
            if ("relPath" in e) {
                return [
                    e.namespace,
                    e.marketplace,
                    e.relPath
                ];
            }
            return [
                e.namespace,
                e.marketplace,
                e.form
            ];
        case "pluginCache":
            return [
                e.namespace,
                e.marketplace,
                e.plugin,
                e.version,
                e.relPath
            ];
        case "cache":
            return [
                e.namespace,
                e.store,
                e.id
            ];
        case "paste":
            return [
                e.namespace,
                e.id
            ];
        case "pluginAssetCache":
            return [
                e.namespace,
                e.digest
            ];
        case "state":
            return [
                e.namespace,
                e.id
            ];
        case "plan":
            return [
                e.namespace,
                e.name
            ];
        case "feedbackDraft":
            return [
                e.namespace,
                e.draftId
            ];
        case "agentMemory":
            return [
                e.namespace,
                e.layer,
                e.layer === "user" ? null : e.projectKey,
                e.agentType,
                e.relPath
            ];
        case "team":
            return [
                e.namespace,
                e.team
            ];
        case "sidecar":
            return [
                e.namespace,
                e.projectKey,
                e.sessionId,
                e.relPath
            ];
        case "scratch":
            return [
                e.namespace,
                e.sessionId,
                e.relPath
            ];
        case "userConfigDir":
            return [
                e.namespace,
                e.dir,
                e.relPath
            ];
        case "fileHistory":
            return [
                e.namespace,
                e.sessionId,
                e.backupFileName
            ];
        case "job":
            return [
                e.namespace,
                e.jobId,
                e.relPath
            ];
        case "daemon":
            return [
                e.namespace,
                e.relPath
            ];
        case "jobsRoot":
            if ("file" in e) {
                return [
                    e.namespace,
                    e.file
                ];
            }
            return [
                e.namespace,
                "draft",
                e.draftKey
            ];
        case "session":
            return [
                e.namespace,
                e.file
            ];
        case "bridgePointer":
        case "sessionAliases":
            return [
                e.namespace,
                e.projectKey
            ];
        case "dirSyncRecord":
            return [
                e.namespace,
                e.projectKey,
                e.sessionId
            ];
        case "mailbox":
            return [
                e.namespace,
                e.team,
                e.teammate
            ];
        case "log":
            return [
                e.namespace,
                e.sessionId,
                e.channel,
                e.agentId ?? null,
                e.runId ?? null
            ];
        case "jobTimeline":
            return [
                e.namespace,
                e.jobId
            ];
        case "recording":
            return [
                e.namespace,
                e.projectKey,
                e.sessionId,
                e.stamp
            ];
        case "sessionLog":
            return [
                e.namespace,
                e.projectKey,
                e.year,
                e.month,
                e.day,
                e.logName
            ];
    }
}
function xIs() {
    return {
        namespace: "bridgeSpawn"
    };
}
function PIs(e, n) {
    if (n === undefined || n.length === 0) {
        return {
            namespace: "marketplaceCache",
            marketplace: e
        };
    }
    return {
        namespace: "marketplaceCache",
        marketplace: e,
        relPath: n
    };
}
export { Grn, AIs, fr, PO, Vrn, qrn, o9, $e, CIs, yGn, RIs, xIs, PIs };
