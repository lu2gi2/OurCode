import { Xe, od, cU } from "/$bunfs/root/chunk-ctt36bn8.js";
import { On, fa, zP, ks } from "/$bunfs/root/chunk-xgw72tt1.js";
import { pk, vx, Jvt, Iar } from "/$bunfs/root/chunk-kasbfbhj.js";
import { yo, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { ge } from "/$bunfs/root/chunk-sawpz2mr.js";
import { cn } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { $n, jd, R5, Kg, Wd } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { cc } from "/$bunfs/root/chunk-tn496ms6.js";
import { de } from "/$bunfs/root/chunk-qjzjr1ys.js";
import { qe } from "/$bunfs/root/chunk-46dhek9m.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { dce } from "/$bunfs/root/chunk-xg0h9r8v.js";
import { _no } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { Kze } from "/$bunfs/root/chunk-2tmab1v3.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { randomUUID } from "crypto";
import { resolve } from "path";
function h(session, o) {
    let s = od();
    if (s.some((m)=>On(resolve(m)) === o)) {
        return false;
    }
    cU([
        ...s,
        o
    ]);
    pk(session);
    vx(session, "directory_added");
    Kze();
    return true;
}
async function WSn(e, o, s) {
    let n = {
        type: "addDirectories",
        directories: [
            o
        ],
        destination: s ? "localSettings" : "session"
    };
    e.setToolPermissionContext((i)=>jd(i, n));
    h(e.session, o);
    qe.refreshConfig();
    if (e.storageV5) {
        Iar(o, e.storageV5);
    } else {
        Iar(o);
    }
    _no("--add-dir", o, e.storageV5);
    let d;
    if (s) {
        try {
            await R5(n, e.storageV5);
            d = `Added ${ge.bold(o)} as a working directory and saved to local settings`;
        } catch (error) {
            d = `Added ${ge.bold(o)} as a working directory. Failed to save to local settings: ${error instanceof Error ? error.message : "Unknown error"}`;
        }
    } else {
        d = `Added ${ge.bold(o)} as a working directory for this session`;
    }
    let u = randomUUID();
    Jvt(e.session, o, "slash_command", {
        storageV5: e.storageV5,
        credentials: e.credentials
    }).then(async ({ results, systemMessages })=>{
        for (let r of results){
            if (!r.succeeded && r.output) {
                t(`DirectoryAdded hook failed: ${r.output}`, {
                    level: "error"
                });
            }
        }
        let a = F(results, (r)=>!r.succeeded);
        let g = [
            ...await Promise.all(systemMessages.map((r, f)=>dce(r, `add-dir-${u}-${f}`, "systemMessage", {
                    storageV5: e.storageV5
                }).then((p)=>`DirectoryAdded hook: ${p}`))),
            ...a > 0 ? [
                `${a} DirectoryAdded ${I(a, "hook")} failed; output is in the debug log, not shown here`
            ] : []
        ];
        if (g.length > 0) {
            e.messageQueue.enqueuePendingNotification({
                value: g.join(`
`),
                mode: "task-notification",
                skipAttachments: true,
                agentId: Xe(),
                isMeta: true
            });
        }
    }).catch((i)=>{
        e.messageQueue.enqueuePendingNotification({
            value: `DirectoryAdded hook execution failed: ${i instanceof Error ? i.message : String(i)}`,
            mode: "task-notification",
            skipAttachments: true,
            agentId: Xe(),
            isMeta: true
        });
    });
    return d;
}
function Vzt(e, o) {
    let s = de(e);
    if (o.isExactMatch || !o.isOriginalCwd) {
        return null;
    }
    let m = ie();
    let { resolvedPath, isCanonical } = yo(m, o.absolutePath);
    let { resolvedPath: resolvedPath_1, isCanonical: isCanonical_1 } = yo(m, o.workingDir);
    let l = ge.bold($n(o.directoryPath));
    if (!isCanonical || !isCanonical_1) {
        if ([
            o.absolutePath,
            o.workingDir
        ].some((c)=>ks(c) || fa(c) || zP(c))) {
            return null;
        }
        return `${l} couldn't be resolved to a real location, so its skills, commands, and agents weren't loaded. Check that it is a directory inside the working directory and try again.`;
    }
    if (!Kg(o.absolutePath, {
        ...s,
        additionalWorkingDirectories: new Map
    }) || !Wd(resolvedPath, resolvedPath_1, {
        caseFold: false,
        skipPrivateAlias: true,
        uncShapeParity: true
    })) {
        let c = $n(resolvedPath);
        if (resolvedPath === o.absolutePath) {
            return `${l} leads outside the working directory, so its skills, commands, and agents weren't loaded. Add that location with /add-dir to grant access to it.`;
        }
        return `${l} leads outside the working directory through a link (it resolves to ${ge.bold(c)}), so its skills, commands, and agents weren't loaded. Run /add-dir ${c} to grant access to it.`;
    }
    if (resolvedPath === resolvedPath_1) {
        return null;
    }
    let a = `${l} is inside the current working directory ${ge.bold($n(o.workingDir))}`;
    let g = cn("projectSettings");
    let r = g && !br("skills", {
        explicitlyRequested: true
    }) && !cc("skills");
    let f = g && !br("agents") && !cc("agents");
    if (!r && !f) {
        return `${a}; skills, commands, and agents from additional directories are disabled in this session, so nothing was loaded.`;
    }
    let p = r && f ? "skills, commands, and agents" : r ? "skills and commands" : "agents";
    let y = h(e.session, o.absolutePath);
    if (y) {
        qe.refreshConfig();
    }
    if (y) {
        return `${a}; loading its ${p} for this session.`;
    }
    return `${a}; its ${p} are already included for this session.`;
}
export { WSn, Vzt };
