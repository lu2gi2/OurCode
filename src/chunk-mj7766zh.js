import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x, v, Ym } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Qa, lA, fa, Va, zPe, ein, ks, sT, $H, Mp, BN } from "/$bunfs/root/chunk-xgw72tt1.js";
import { So } from "/$bunfs/root/chunk-dn762950.js";
import { Xe, vd, gp, lU, Km, Swe, i0t, Osn, m6 } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { la, Qo, oP, sP } from "/$bunfs/root/chunk-0ycjphb5.js";
import { _, X, Dh, DO, mf, Vy, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { SCr, zY, Fb } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { oa } from "/$bunfs/root/chunk-223dyewd.js";
import { qz, ss, En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { fr, $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Lb } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { $z } from "/$bunfs/root/chunk-r3z1chqx.js";
import { V5 } from "/$bunfs/root/chunk-gr4a0fky.js";
import { OFe } from "/$bunfs/root/chunk-t0b6khh6.js";
import { fc } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { Bt } from "/$bunfs/root/chunk-1ej05ybf.js";
import { vE } from "/$bunfs/root/chunk-yh6j1afs.js";
import { Ep, DW, gXt, lg } from "/$bunfs/root/chunk-y9c4grt0.js";
import { Tf, Vx } from "/$bunfs/root/chunk-4r6b8efh.js";
import { Hte, bp, jK, wp } from "/$bunfs/root/chunk-kasbfbhj.js";
import { Nk, iYe, ee } from "/$bunfs/root/chunk-499b1h1a.js";
import { ocr, Pn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { Yr } from "/$bunfs/root/chunk-ghmnmzfd.js";
import { rEe } from "/$bunfs/root/chunk-qzmyq9h2.js";
import { t$, Zie, x_ } from "/$bunfs/root/chunk-8qgm3a5n.js";
import { oze } from "/$bunfs/root/chunk-meqp16n8.js";
import { f$t, xXe } from "/$bunfs/root/chunk-dv374jbr.js";
import { Q0 } from "/$bunfs/root/chunk-bs48afk0.js";
import { sEe, Z0 } from "/$bunfs/root/chunk-w5h19esn.js";
import { i7e, JOe, aWt, a7e } from "/$bunfs/root/chunk-40bs4ws1.js";
import { c7e, HJn, lWt } from "/$bunfs/root/chunk-vjaqbp0v.js";
import { $2 } from "/$bunfs/root/chunk-1c8pjf91.js";
import { Fi } from "/$bunfs/root/chunk-z79q35bb.js";
import { tr, me, hn, Uo, nd, ir, bt, Tp, Vc, oFs } from "/$bunfs/root/chunk-55p8dvkx.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { createHash, randomBytes } from "crypto";
import { constants } from "fs";
import { copyFile, link, mkdir, readdir, readFile, realpath, rm, rmdir, stat, symlink, unlink, lstat, readlink, open } from "fs/promises";
import { basename, dirname, isAbsolute, join, relative, sep } from "path";
const CXe = 120000;
const wHs = 60000;
const ODr = 4000;
const Ce = 250;
const re = /^[\w-]+$/;
function oe(e) {
    let n = ()=>[
            ...e(),
            ...[]
        ];
    let o = (r)=>{
        let s = fa(r) ? zPe(r) : null;
        if (s === null) {
            return null;
        }
        return ein(s);
    };
    return me().transform((r, s)=>{
        let l = (message)=>{
            s.addIssue({
                code: tr.custom,
                message
            });
            return oFs;
        };
        let a;
        let u = ()=>{
            if (a === undefined) {
                let A = n();
                let allowed_1 = A.map(Mp).filter((w)=>w !== null);
                a = {
                    allowed: allowed_1,
                    anchor: [
                        ...A,
                        ...allowed_1
                    ]
                };
            }
            return a;
        };
        if ($H(r)) {
            return l(`adopt path is remote UNC: ${r}`);
        }
        let g = sT(r);
        if (lA(g) || BN(g) || g !== r && /[. ](?:[\\/]|$)/.test(g)) {
            return l(`adopt path is a Windows device-namespace spelling (\\\\?\\, \\\\.\\ or \\??\\) other than a plain \\\\?\\<drive>:\\ path: ${r}`);
        }
        r = g;
        if (!isAbsolute(r) || Qa(r)) {
            return l(`adopt path is not an absolute, dot-free spelling: ${r}`);
        }
        let k = o(r);
        let anchors = k !== null && k.startsWith("/net/") ? u().anchor.filter((A)=>o(A) === k) : [];
        if (k !== null && anchors.length === 0) {
            return l(k.startsWith("/net/") ? `adopt path is on an automount host (or map) none of the allowed roots live on: ${r}` : `adopt path is under the macOS /Network/Servers automount directory, refused regardless of the allowed roots: ${r}`);
        }
        let S = mf(Vy, r, anchors.length > 0 ? {
            anchors,
            unreadableAncestry: "unverified",
            surfaceNetworkRaw: true
        } : undefined);
        if (S === Dh) {
            return l(`adopt path runs through a directory that could not be examined or a symlink chain too long to follow: ${r}`);
        }
        if (S !== undefined) {
            return l(`adopt path traverses symlink/junction to remote UNC: ${S}`);
        }
        let y = Mp(r);
        if (y === null) {
            return l(`adopt path unresolvable: ${r}`);
        }
        let allowed = u().allowed;
        if (allowed.length === 0) {
            return l("adopt path roots unresolvable");
        }
        if (!allowed.some((A)=>{
            let m = relative(A, y);
            return m === "" || !m.startsWith("..") && !isAbsolute(m);
        })) {
            return l(`adopt path outside allowed roots: ${y}`);
        }
        return y;
    });
}
function We() {
    return [
        Vx()
    ];
}
function Te(e) {
    return bt({
        taskId: me().regex(re),
        pid: hn().int().positive(),
        procStart: me().optional(),
        startTimeTicks: hn().int().optional(),
        command: me().transform((n)=>jK(n) ?? ""),
        description: me().transform((n)=>jK(n) ?? ""),
        outputPath: oe(e),
        lastReportedTotalLines: hn().int(),
        toolUseId: nd().transform($2).optional(),
        kind: Vc([
            "bash",
            "monitor"
        ]).optional(),
        agentId: me().regex(re).optional()
    });
}
const De = p(()=>Te(We));
const ue = 100000;
const je = p(()=>bt({
        id: me(),
        cron: me(),
        prompt: me(),
        createdAt: hn(),
        recurring: Uo().optional(),
        agentId: me().optional(),
        kind: Tp("loop").optional(),
        scheduledFor: hn().optional(),
        reason: me().transform((e)=>jK(e)).optional(),
        keepalive: Tp(true).optional()
    }));
const Ue = p(()=>bt({
        taskId: me().regex(re),
        workflowRunId: me().regex(/^wf_[a-z0-9-]{6,}$/),
        scriptPath: me(),
        scriptSha256: me().regex(/^[0-9a-f]{64}$/).optional(),
        argsJson: me().optional(),
        description: me().transform((e)=>jK(e) ?? ""),
        startTime: hn().optional(),
        withholdScriptFromSdkEvents: Uo().optional(),
        transcriptDir: oe(()=>[
                Ep()
            ])
    }));
const Be = p(()=>bt({
        agentId: me().regex(re),
        agentType: me().optional(),
        description: me().transform((e)=>jK(e)).optional(),
        toolUseId: nd().transform($2).optional(),
        spawnDepth: hn().int().optional(),
        startTime: hn().optional(),
        transcriptPath: oe(()=>[
                Ep()
            ]).optional(),
        parentAgentId: me().regex(re).optional(),
        forkedSkillName: me().min(1).max(256).optional()
    }));
const Ve = p(()=>bt({
        slug: me().uuid(),
        title: me().min(1).max(256).optional(),
        writtenAtMs: hn().finite().optional(),
        unattendedReplies: hn().int().min(0).max(a7e).optional()
    }));
function Pe(e = De()) {
    return bt({
        writtenAtMs: hn(),
        origin: Vc([
            "background",
            "exit"
        ]).optional(),
        shells: ir(e),
        cron: ir(je()),
        loopWakeFires: hn().int().nonnegative().optional(),
        agents: ir(Be()).optional(),
        workflows: ir(Ue()).optional(),
        frameLive: ir(Ve()).optional(),
        prefill: bt({
            text: me(),
            boundaryUuid: me().optional()
        }).optional()
    });
}
const Le = p(()=>Pe());
function Fe(e) {
    let n = Array.isArray(e) ? e : [
        e
    ];
    return Pe(Te(()=>[
            Vx(),
            ...n
        ]));
}
const ae = 67108864;
async function Q4n(e, n) {
    let pid = await e.shellCommand?.detach?.();
    if (pid === undefined) {
        return null;
    }
    let path = e.shellCommand.taskOutput.path;
    let s = n?.rerootOutputsTo;
    if (s !== undefined) {
        let l = async (u)=>{
            t(`[adopt] dropping shell ${e.id} from the handoff (${u})`, {
                level: "error"
            });
            try {
                await e.shellCommand?.kill?.();
            } catch  {}
            return null;
        };
        let a = false;
        try {
            if (ks(path) || Va(path)) {
                throw Error("network-spelled output path");
            }
            let u = mf(Vy, path);
            if (u === Dh) {
                throw Error("output path has a symlink chain too long to vet");
            }
            if (u !== undefined) {
                throw Error("output path traverses a junction to remote UNC");
            }
            if ((await lstat(path)).isSymbolicLink()) {
                let y = await readlink(path);
                if (ks(y) || Va(y)) {
                    throw Error("network-spelled symlink target");
                }
                let T = isAbsolute(y) ? y : join(dirname(path), y);
                if (ks(T) || Va(T)) {
                    throw Error("network-spelled symlink hop");
                }
                let P = mf(Vy, T);
                if (P === Dh) {
                    throw Error("symlink target has a symlink chain too long to vet");
                }
                if (P !== undefined) {
                    throw Error("symlink target traverses a junction to remote UNC");
                }
                if ((await lstat(T)).isSymbolicLink()) {
                    throw Error("multi-hop symlink chain");
                }
            }
            let k = await realpath(path);
            let h = await lstat(k);
            a = true;
            let S = await realpath(s).catch(()=>s);
            if (!k.startsWith(S + sep)) {
                if (!(await Promise.all([
                    Tf(),
                    ...[]
                ].map((w)=>realpath(w).catch(()=>null)))).filter((w)=>w !== null).some((w)=>k.startsWith(w + sep))) {
                    return await l("its output resolves outside the task-output tree");
                }
                let P = join(s, "rerooted", `${e.id}.output`);
                let A;
                try {
                    A = await Fb(P, [
                        P
                    ], {
                        createParents: true,
                        leaf: "replace"
                    });
                } catch  {
                    return await l("reroot directory not trustworthy");
                }
                let m = A.ioPath;
                try {
                    if (!h.isFile()) {
                        return await l("gate target is not a regular file");
                    }
                    if (h.nlink !== 1) {
                        return await l("gate target has another name");
                    }
                    let w = await open(k, O() === "windows" ? "r" : constants.O_RDONLY | (constants.O_NONBLOCK ?? 0) | oa);
                    try {
                        let L = await w.stat();
                        if (!L.isFile() || L.nlink !== 1 || L.dev !== h.dev || L.ino !== h.ino) {
                            return await l("handle identity mismatch");
                        }
                        {
                            await A.recheckBeforeWrite();
                            await unlink(m).catch(()=>{});
                            if (L.size > ae) {
                                return await l("over-cap escaping output");
                            }
                            let K;
                            try {
                                await A.recheckBeforeWrite();
                                K = O() === "windows" ? await open(m, "wx") : await zY(m, constants.O_WRONLY | constants.O_CREAT | constants.O_EXCL | constants.O_NOFOLLOW, O());
                            } catch  {
                                return await l("reroot destination not creatable");
                            }
                            try {
                                let V = 0;
                                let R = Buffer.allocUnsafe(65536);
                                while(V < ae){
                                    let { bytesRead } = await w.read(R, 0, Math.min(R.length, ae - V), V);
                                    if (bytesRead === 0) {
                                        break;
                                    }
                                    let I = 0;
                                    while(I < bytesRead){
                                        let { bytesWritten } = await K.write(R, I, bytesRead - I);
                                        I += bytesWritten;
                                    }
                                    V += bytesRead;
                                }
                            } finally{
                                await K.close();
                            }
                            path = P;
                        }
                    } finally{
                        await w.close();
                    }
                } finally{
                    await A.close();
                }
            }
        } catch  {
            if (a) {
                return await l("reroot failed after the gate");
            }
        }
    }
    return {
        taskId: e.id,
        pid,
        procStart: await OFe(pid),
        startTimeTicks: await f$t(pid) ?? undefined,
        command: e.command,
        description: e.description,
        outputPath: path,
        lastReportedTotalLines: e.lastReportedTotalLines,
        toolUseId: e.toolUseId,
        kind: e.kind,
        agentId: e.agentId
    };
}
async function Z4n(e, n = {}) {
    let o = n.derivedTranscriptPath ?? lg(So(e.agentId));
    return {
        agentId: e.agentId,
        agentType: e.agentType,
        description: e.description,
        toolUseId: e.toolUseId,
        spawnDepth: e.spawnDepth,
        startTime: e.startTime,
        transcriptPath: await realpath(o).catch(()=>{}),
        parentAgentId: e.parentAgentId,
        forkedSkillName: e.forkedSkillName
    };
}
async function eYn(e, n = {}) {
    let o = n.derivedTranscriptDir ?? Q0(e.workflowRunId);
    return {
        taskId: e.id,
        workflowRunId: e.workflowRunId,
        scriptPath: e.scriptPath,
        scriptSha256: e.script ? createHash("sha256").update(e.script).digest("hex") : undefined,
        argsJson: e.args !== undefined ? _(e.args) : undefined,
        description: e.description,
        startTime: e.startTime,
        withholdScriptFromSdkEvents: e.withholdScriptFromSdkEvents,
        transcriptDir: await realpath(o).catch(()=>o)
    };
}
function Gq(e) {
    return sEe() && Zie(e) && e.frameLive !== undefined;
}
function Pfe(e) {
    let n = new Set;
    if (!sEe()) {
        return n;
    }
    for (let o of Object.values(e)){
        if (Gq(o) && o.frameLive !== undefined) {
            n.add(o.frameLive.slug);
        }
    }
    for (let o of i7e()){
        n.add(o);
    }
    for (let o of JOe()){
        n.add(o);
    }
    return n;
}
function Gcn(e) {
    let { supervisors, bootingWiredArms } = ee().live;
    let r = JOe();
    let s = [];
    let writtenAtMs = Date.now();
    for (let slug of Pfe(e)){
        let u = supervisors.get(slug);
        let g = r.has(slug) ? bootingWiredArms.get(slug) : undefined;
        if (u === undefined && g === undefined) {
            continue;
        }
        let title = g?.title ?? u?.autoReactWiring?.title;
        let h = title !== undefined && title.length >= 1 && title.length <= 256;
        s.push({
            slug,
            writtenAtMs,
            ...h && {
                title
            }
        });
    }
    return s;
}
async function Vcn(e, n) {
    let o = v6(e);
    let r = Object.values(e).filter((m)=>oYn(m, o));
    let s = Object.values(e).filter((m)=>sYn(m, o));
    let l = Object.values(e).filter((m)=>Xcn(m, o));
    let a = Km().filter((m)=>bIe(m, o));
    if (r.length === 0 && s.length === 0 && l.length === 0 && a.length === 0 && Gcn(e).length === 0) {
        return null;
    }
    let shells = (await Promise.all(r.map((m)=>Q4n(m, {
            rerootOutputsTo: Vx()
        })))).filter((m)=>m !== null);
    let g = await Promise.all(s.map((m)=>Z4n(m)));
    let k = await Promise.all(l.map((m)=>eYn(m)));
    let h = Gcn(e);
    let S = new Set(h.map((m)=>m.slug));
    let y = Object.values(e).filter((m)=>Gq(m) && m.frameLive !== undefined && S.has(m.frameLive.slug)).map((m)=>m.id);
    if (shells.length === 0 && g.length === 0 && k.length === 0 && a.length === 0 && h.length === 0) {
        return null;
    }
    let T = false;
    let P = false;
    let stopCarriedWatches = (m)=>{
        if (P) {
            return;
        }
        P = true;
        oze(S);
        aWt(S);
        let w = new Set(y);
        if (S.size > 0) {
            for (let L of Object.values(m.all())){
                if (t$(L) && L.status === "running" && L.frameLive !== undefined && S.has(L.frameLive.slug)) {
                    w.add(L.id);
                }
            }
        }
        for (let L of w){
            x_(L, m, {
                quiet: true
            });
        }
    };
    return {
        payload: {
            writtenAtMs: Date.now(),
            shells,
            cron: a.map((m)=>({
                    id: m.id,
                    cron: m.cron,
                    prompt: m.prompt,
                    createdAt: m.createdAt,
                    recurring: m.recurring,
                    agentId: m.agentId,
                    kind: m.kind,
                    scheduledFor: m.scheduledFor,
                    reason: m.reason,
                    keepalive: m.keepalive
                })),
            ...i0t() > 0 && {
                loopWakeFires: i0t()
            },
            agents: g,
            workflows: k,
            ...h.length > 0 && {
                frameLive: h
            }
        },
        checkpointAgents: async (m)=>{
            for (let w of l){
                w.abortController?.abort(fc("background"));
                rEe(w.id, m);
            }
            if (g.length === 0) {
                return;
            }
            for (let w of shells){
                if (w.agentId !== undefined) {
                    m.remove(w.taskId);
                }
            }
            for (let w of s){
                w.abortController.abort(fc("background"));
            }
            await Lb();
            await wp().catch((w)=>{
                f("task_local_agent", "adopt_checkpoint_flush_failed");
                t(`[adopt] checkpoint flush: ${w}`, {
                    level: "warn"
                });
            });
        },
        stopCarriedWatches,
        disown: (m)=>{
            stopCarriedWatches(m);
            for (let w of shells){
                m.remove(w.taskId);
            }
            for (let w of g){
                m.remove(w.agentId);
            }
            for (let w of k){
                m.remove(w.taskId);
            }
            if (a.length > 0) {
                m6(a.map((w)=>w.id));
            }
        },
        abandon: ()=>{
            if (T) {
                return;
            }
            T = true;
            for (let m of r){
                try {
                    m.shellCommand?.kill();
                } catch (error) {
                    t(`[adopt] abandon ${m.id}: ${error}`, {
                        level: "warn"
                    });
                }
            }
            for (let m of s){
                let w = `Background agent "${Bt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; the agent was not resumed.`;
                q(m.agentId, w, n);
            }
            if (s.length > 0) {
                f("task_local_agent", "adopt_spawn_failed");
            }
            for (let m of l){
                let w = `Background workflow "${Bt(m.description)}" was checkpointed for the background fork but the fork failed to spawn; it was not resumed. To resume manually: Workflow({scriptPath: '${Bt(m.scriptPath ?? "")}', resumeFromRunId: '${Bt(m.workflowRunId ?? "")}'}).`;
                q(m.id, w, n);
            }
            if (l.length > 0) {
                f("task_local_workflow", "adopt_spawn_failed");
            }
            if (P) {
                for (let m of y){
                    q(m, "The background session didn't start, so automatic replies to Artifact comments stopped. Publish the Artifact again to turn them back on.", n);
                }
                if (h.length > 0) {
                    f("artifact_live_subscribe", "adopt_spawn_failed");
                }
            }
        }
    };
}
function tYn(e) {
    let n = new Map;
    for (let o of e){
        for (let r of o.entries){
            let s = {
                ...r,
                writtenAtMs: r.writtenAtMs ?? o.fallbackBasis
            };
            let l = n.get(r.slug);
            let unattendedReplies = Math.min((l?.unattendedReplies ?? 0) + (r.unattendedReplies ?? 0), a7e);
            let u = l === undefined || s.writtenAtMs > (l.writtenAtMs ?? 0) ? s : l;
            n.set(r.slug, unattendedReplies > 0 ? {
                ...u,
                unattendedReplies
            } : u);
        }
    }
    if (n.size > Nk) {
        f("artifact_live_subscribe", "merged_consent_capped");
    }
    return [
        ...n.values()
    ].sort((o, r)=>(r.writtenAtMs ?? 0) - (o.writtenAtMs ?? 0)).slice(0, iYe);
}
function ze(data, n) {
    let o = (r, s, l)=>[
            ...r,
            ...s
        ].filter((a, u, g)=>g.findIndex((k)=>l(k) === l(a)) === u);
    return {
        writtenAtMs: n.writtenAtMs,
        origin: n.origin ?? data.origin,
        shells: o(data.shells, n.shells, (r)=>r.pid),
        cron: o(data.cron, n.cron, (r)=>r.id),
        ...(n.loopWakeFires ?? data.loopWakeFires) !== undefined && {
            loopWakeFires: n.loopWakeFires ?? data.loopWakeFires
        },
        agents: o(data.agents ?? [], n.agents ?? [], (r)=>r.agentId),
        workflows: o(data.workflows ?? [], n.workflows ?? [], (r)=>r.taskId),
        ...((data.frameLive?.length ?? 0) > 0 || (n.frameLive?.length ?? 0) > 0) && {
            frameLive: tYn([
                {
                    entries: data.frameLive ?? [],
                    fallbackBasis: data.writtenAtMs
                },
                {
                    entries: n.frameLive ?? [],
                    fallbackBasis: n.writtenAtMs
                }
            ])
        },
        prefill: n.prefill ?? data.prefill
    };
}
async function He(e, n) {
    let o = await e.read([
        $e.job(n, [
            "adopt.json"
        ])
    ]);
    if (!o.ok) {
        t(`[adopt] v5 merge read refused: ${gt(o.error)}`);
        return null;
    }
    let r = o.value.items[0];
    if (!r.found) {
        return null;
    }
    return Buffer.from(r.value).toString("utf8");
}
async function RXe(e, n, o = {}, r) {
    let s = join(e, "adopt.json");
    let l = basename(e);
    let a = j() && r !== undefined && fr(l) && e === Yr(l) ? r : undefined;
    let u = n;
    try {
        let g = a ? await He(a, l) : await readFile(s, "utf-8");
        if (g !== null && g.length <= 1000000) {
            let h = (o.mergeShellOutputRoot !== undefined ? Fe(o.mergeShellOutputRoot) : Le()).safeParse(X(g));
            if (h.success) {
                if (h.data.shells.length + (h.data.cron?.length ?? 0) + (h.data.agents?.length ?? 0) + (h.data.workflows?.length ?? 0) + (h.data.frameLive?.length ?? 0) <= 256) {
                    u = ze(h.data, n);
                }
            }
        }
    } catch  {}
    if (a) {
        let g = await a.write($e.job(l, [
            "adopt.json"
        ]), _(u), {
            publishDiscipline: "atomic",
            mode: 438 & ~process.umask(),
            parent: o.parent ?? "mustExist"
        });
        if (!g.ok) {
            throw Object.assign(new x(`adopt.json v5 write failed: ${gt(g.error)}`, "adopt.json v5 write failed"), "telemetryCode" in g.error && g.error.telemetryCode !== undefined ? {
                code: g.error.telemetryCode
            } : {});
        }
        return;
    }
    await En(s, _(u));
}
async function MDr(e, n = {}) {
    if (!e) {
        return null;
    }
    let o = join(e, "adopt.json");
    let r = `${o}.${process.pid}`;
    let s = Date.now() + (n.waitMs ?? 0);
    let l = false;
    while(true){
        try {
            l = await ss(o, r);
            break;
        } catch (error) {
            let k = v(error);
            if (k === "ENOENT") {
                if (Date.now() < s) {
                    await Q(Ce);
                    continue;
                }
                i("tengu_adopt_claim", {
                    result: b("enoent")
                });
                return null;
            }
            t(`[adopt] rename failed: ${error}`, {
                level: "warn"
            });
            i("tengu_adopt_claim", {
                result: k !== undefined && qz.has(k) ? b("ebusy_gave_up") : Ym(error)
            });
            return null;
        }
    }
    let a = Date.now();
    let result = l ? b("ebusy_retry") : b("ok");
    try {
        let g = await readFile(r, "utf-8");
        let h = (n.extraShellOutputRoot !== undefined ? Fe(n.extraShellOutputRoot) : Le()).safeParse(JSON.parse(g));
        if (!h.success) {
            t(`[adopt] schema rejected: ${h.error.message}`, {
                level: "warn"
            });
            i("tengu_adopt_claim", {
                result: b("schema_rejected")
            });
            return null;
        }
        let S = a - h.data.writtenAtMs;
        if (h.data.origin !== "exit" && S > CXe) {
            t(`[adopt] stale (age ${S}ms)`, {
                level: "warn"
            });
            let y = h.data.frameLive ?? [];
            if (y.length === 0) {
                i("tengu_adopt_claim", {
                    result: b("stale")
                });
                return null;
            }
            i("tengu_adopt_claim", {
                result: b("stale"),
                frame_live_stale: b("true")
            });
            f("artifact_live_subscribe", "carried_consent_stale_dropped");
            return {
                writtenAtMs: h.data.writtenAtMs,
                ...h.data.origin !== undefined && {
                    origin: h.data.origin
                },
                shells: [],
                cron: [],
                frameLive: y.map((T)=>({
                        ...T,
                        writtenAtMs: T.writtenAtMs ?? h.data.writtenAtMs,
                        stale: true
                    }))
            };
        }
        if ((h.data.frameLive?.length ?? 0) > 0) {
            let y = h.data.frameLive.map((P)=>{
                let writtenAtMs = P.writtenAtMs ?? h.data.writtenAtMs;
                let m = a - writtenAtMs;
                if (m >= -wHs && m <= CXe) {
                    return {
                        ...P,
                        writtenAtMs
                    };
                }
                return {
                    ...P,
                    writtenAtMs,
                    stale: true
                };
            });
            let T = F(y, (P)=>"stale" in P);
            if (T > 0) {
                t(`[adopt] ${T}/${y.length} frameLive entries marked stale`, {
                    level: "warn"
                });
            }
            i("tengu_adopt_claim", {
                result,
                ...T > 0 && {
                    frame_live_stale: b("true")
                }
            });
            return Object.assign(h.data, {
                frameLive: y
            });
        }
        i("tengu_adopt_claim", {
            result
        });
        return h.data;
    } catch (error) {
        t(`[adopt] read/parse failed: ${error}`, {
            level: "warn"
        });
        i("tengu_adopt_claim", {
            result: b("parse_failed")
        });
        return null;
    } finally{
        await unlink(r).catch(()=>{});
    }
}
function HDr(e, n, o, r) {
    let s = Hte();
    if (n.length === 0 && o.length === 0) {
        s.unresumedAdopt.delete(e);
        return;
    }
    s.unresumedAdopt.set(e, {
        agents: n,
        workflows: o,
        owner: r
    });
}
function DDr(e, n) {
    if (Hte().unresumedAdopt.get(e)?.owner !== n) {
        return {
            agents: [],
            workflows: []
        };
    }
    return nYn(e);
}
function nYn(e) {
    let n = Hte();
    let o = n.unresumedAdopt.get(e);
    n.unresumedAdopt.delete(e);
    return {
        agents: o?.agents ?? [],
        workflows: o?.workflows ?? []
    };
}
function LDr(e, n, o) {
    let r = Hte();
    if (n.length === 0) {
        r.unresumedFrameLive.delete(e);
        return;
    }
    r.unresumedFrameLive.set(e, {
        entries: n.map(({ stale, ...rest })=>rest),
        owner: o
    });
}
function NDr(e, n) {
    if (Hte().unresumedFrameLive.get(e)?.owner !== n) {
        return [];
    }
    return qcn(e);
}
function qcn(e) {
    let n = Hte();
    let o = n.unresumedFrameLive.get(e);
    n.unresumedFrameLive.delete(e);
    return o?.entries ?? [];
}
function $Dr(e, n, o) {
    let r = Hte();
    let s = r.unresumedFrameLive.get(e);
    if (n.length === 0 || s !== undefined && s.owner !== o) {
        return;
    }
    r.unresumedFrameLive.set(e, {
        entries: [
            ...n
        ],
        owner: o
    });
}
function FDr(e, n, o) {
    let r = Hte();
    let s = r.unresumedFrameLive.get(e);
    if (s === undefined || s.owner !== o) {
        return;
    }
    let entries = s.entries.filter((a)=>a.slug !== n);
    if (entries.length > 0) {
        r.unresumedFrameLive.set(e, {
            entries,
            owner: o
        });
    } else {
        r.unresumedFrameLive.delete(e);
    }
}
function UDr(e, n) {
    if (n.length > 0) {
        Hte().exitRetryFrameLive.set(e, [
            ...n
        ]);
    }
}
function BDr(e) {
    if (e === undefined) {
        return [];
    }
    let n = Hte();
    let o = n.exitRetryFrameLive.get(e) ?? [];
    n.exitRetryFrameLive.delete(e);
    return o;
}
const Ke = new Set([
    "EXDEV",
    "EPERM",
    "ENOTSUP",
    "EOPNOTSUPP",
    "ENOSYS",
    "EMLINK"
]);
const Ge = 1048576;
const Re = ".adopt-relink.";
function Ye(e) {
    return `${e}${Re}${process.pid}.${Date.now()}.${randomBytes(4).toString("hex")}`;
}
async function Je(e, n, identity_1, r) {
    let s;
    try {
        await r(e, n);
        s = "UNVERIFIED";
    } catch (error) {
        let u = v(error);
        if (u === undefined || !Ke.has(u)) {
            throw error;
        }
        s = u;
    }
    if (s === "UNVERIFIED") {
        let a = await lstat(n);
        if (a.isFile() && a.dev === identity_1.dev && a.ino === identity_1.ino) {
            return {
                method: "hardlink",
                identity: identity_1
            };
        }
        await unlink(n);
    }
    let identity = await Qe(e, n, identity_1);
    return {
        method: "copy",
        fallbackCode: s,
        identity
    };
}
async function Qe(e, n, identity) {
    let r = await open(e, constants.O_RDONLY | oa);
    try {
        let s = await r.stat();
        if (!s.isFile() || s.dev !== identity.dev || s.ino !== identity.ino) {
            throw Object.assign(Error("adopted file copy source is not the validated inode"), {
                code: "ADOPT_IDENTITY_MISMATCH"
            });
        }
        let l = await open(n, "wx", SCr);
        let a = false;
        try {
            let u = Buffer.allocUnsafe(Ge);
            while(true){
                let { bytesRead } = await r.read(u, 0, u.length, null);
                if (bytesRead === 0) {
                    break;
                }
                let S = 0;
                while(S < bytesRead){
                    let { bytesWritten } = await l.write(u, S, bytesRead - S);
                    if (bytesWritten === 0) {
                        throw Object.assign(Error("adopted file copy made no progress"), {
                            code: "ADOPT_COPY_STALLED"
                        });
                    }
                    S += bytesWritten;
                }
            }
            let { dev, ino } = await l.stat();
            await l.utimes(s.atime, s.mtime).catch((h)=>{
                t(`[adopt] copied file keeps fresh timestamps (${v(h) ?? "error"})`, {
                    level: "warn"
                });
            });
            await l.close();
            a = true;
            return {
                dev,
                ino
            };
        } finally{
            if (!a) {
                await l.close().catch(()=>{});
                await unlink(n).catch(()=>{});
            }
        }
    } finally{
        await r.close().catch(()=>{});
    }
}
async function Ze(e, n, o) {
    let r;
    try {
        r = await lstat(n);
    } catch (error) {
        if (v(error) !== "ENOENT") {
            throw error;
        }
    }
    if (r !== undefined && !r.isSymbolicLink()) {
        if (!r.isFile()) {
            throw Object.assign(Error("adopted agent name is held by a non-file entry"), {
                code: "ADOPT_NAME_NOT_FILE"
            });
        }
        if (o) {
            return "kept";
        }
    }
    try {
        await ss(e, n);
    } catch (error) {
        if (r === undefined || v(error) !== "EEXIST") {
            throw error;
        }
        await unlink(n);
        await ss(e, n);
    }
    if (r === undefined) {
        return "created";
    }
    return "replaced";
}
async function de(e, n, o, r, s) {
    if (s) {
        let h = await lstat(e).catch(()=>{});
        if (h !== undefined && !h.isSymbolicLink() && h.isFile()) {
            return {
                method: "kept",
                created: null
            };
        }
    }
    let l = Ye(e);
    let a = await Je(n, l, o, r);
    let u = "kept";
    try {
        u = await Ze(l, e, s);
    } finally{
        await unlink(l).catch(()=>{});
    }
    let { identity, ...rest } = a;
    if (u === "kept") {
        return {
            method: "kept",
            created: null
        };
    }
    return {
        ...rest,
        created: u === "created" ? identity : null
    };
}
async function jDr(e, { storageV5, linkFn = link } = {}) {
    if (storageV5 === undefined) {
        return qe(e);
    }
    try {
        let r = await et(e, linkFn);
        if (r.method !== undefined) {
            i("tengu_adopt_link", {
                kind: b("agent"),
                method: d(r.method),
                fallback_code: Ym({
                    code: r.fallbackCode
                })
            });
        }
        return r;
    } catch (error) {
        i("tengu_adopt_link", {
            kind: b("agent"),
            method: d("fail"),
            error_code: Ym(error)
        });
        throw error;
    }
}
async function qe(e) {
    if (!e.transcriptPath) {
        return {};
    }
    let n = lg(So(e.agentId));
    let o = (a)=>a.replace(/\.jsonl$/, ".meta.json");
    await stat(o(e.transcriptPath));
    let r = null;
    let s;
    let l = c7e(e.transcriptPath);
    if (e.forkedSkillName !== undefined) {
        let a = await lWt(l);
        if (a.status !== "valid") {
            throw new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${a.status})`, "adopted forked-skill scoping record unusable");
        }
        if (a.scoping.skillName !== e.forkedSkillName) {
            throw new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch");
        }
        r = {
            parent: l,
            fork: c7e(n)
        };
    } else {
        let a = await lWt(l);
        switch(a.status){
            case "absent":
                break;
            case "valid":
                r = {
                    parent: l,
                    fork: c7e(n)
                };
                s = a.scoping.skillName;
                break;
            case "malformed":
            case "absent-but-marked":
            case "diskless":
                throw new x(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${a.status})`, "adopted forked-skill scoping record unusable");
        }
    }
    if (n === e.transcriptPath) {
        return {
            forkedSkillNameFromSidecar: s
        };
    }
    if (await realpath(n).catch(()=>{}) === e.transcriptPath) {
        return {
            forkedSkillNameFromSidecar: s
        };
    }
    await mkdir(dirname(n), {
        recursive: true
    });
    if (r) {
        await unlink(r.fork.provenanceMarker).catch(()=>{});
        await HJn(r.fork.provenanceMarker, e.forkedSkillName ?? s);
        await unlink(r.fork.scoping).catch(()=>{});
        await copyFile(r.parent.scoping, r.fork.scoping);
    }
    for (let [a, u] of [
        [
            n,
            e.transcriptPath
        ],
        [
            o(n),
            o(e.transcriptPath)
        ]
    ]){
        await unlink(a).catch(()=>{});
        await symlink(u, a);
    }
    return {
        forkedSkillNameFromSidecar: s
    };
}
function J(e, code) {
    return Object.assign(e, {
        code
    });
}
async function et(e, linkFn) {
    if (!e.transcriptPath) {
        return {};
    }
    let o = lg(So(e.agentId));
    let r = (A)=>A.replace(/\.jsonl$/, ".meta.json");
    if (basename(e.transcriptPath) !== basename(o)) {
        throw J(new x(`adopted agent ${e.agentId} carrier names a transcript that is not agent-${e.agentId}.jsonl`, "adopted agent transcript path has the wrong leaf name"), "ADOPT_WRONG_LEAF");
    }
    let [s, l] = await Promise.all([
        lstat(e.transcriptPath),
        lstat(r(e.transcriptPath))
    ]);
    if (!s.isFile() || !l.isFile()) {
        throw J(new x(`adopted agent ${e.agentId} parent transcript or .meta.json is not a regular file`, "adopted agent parent file is not a regular file"), "ADOPT_PARENT_NOT_REGULAR");
    }
    let a = null;
    let u;
    let g = c7e(e.transcriptPath);
    if (e.forkedSkillName !== undefined) {
        let A = await lWt(g);
        if (A.status !== "valid") {
            throw J(new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record is unusable (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
        }
        if (A.scoping.skillName !== e.forkedSkillName) {
            throw J(new x(`adopted agent ${e.agentId} declares forked-skill ${e.forkedSkillName} but its scoping record names a different skill`, "adopted forked-skill scoping identity mismatch"), "ADOPT_SCOPING_MISMATCH");
        }
        a = {
            parent: g,
            fork: c7e(o)
        };
    } else {
        let A = await lWt(g);
        switch(A.status){
            case "absent":
                break;
            case "valid":
                a = {
                    parent: g,
                    fork: c7e(o)
                };
                u = A.scoping.skillName;
                break;
            case "malformed":
            case "absent-but-marked":
            case "diskless":
                throw J(new x(`adopted agent ${e.agentId} has an unusable forked-skill scoping record (${A.status})`, "adopted forked-skill scoping record unusable"), "ADOPT_SCOPING_UNUSABLE");
        }
    }
    if (o === e.transcriptPath) {
        return {
            forkedSkillNameFromSidecar: u,
            method: "noop"
        };
    }
    let k = await realpath(dirname(o)).catch(()=>{});
    if (k !== undefined && join(k, basename(o)) === e.transcriptPath) {
        return {
            forkedSkillNameFromSidecar: u,
            method: "noop"
        };
    }
    await mkdir(dirname(o), {
        recursive: true
    });
    if (a) {
        await unlink(a.fork.provenanceMarker).catch(()=>{});
        await HJn(a.fork.provenanceMarker, e.forkedSkillName ?? u);
        await unlink(a.fork.scoping).catch(()=>{});
        await copyFile(a.parent.scoping, a.fork.scoping);
    }
    let h = await lstat(o).catch(()=>{});
    let S = h !== undefined && (h.isFile() || h.isSymbolicLink() && await realpath(o).catch(()=>{}) === e.transcriptPath);
    let y = await de(r(o), r(e.transcriptPath), l, linkFn, S);
    let T;
    try {
        T = await de(o, e.transcriptPath, s, linkFn, true);
    } catch (error) {
        if (y.created !== null) {
            let m = y.created;
            await lstat(r(o)).then(async (w)=>{
                if (w.dev === m.dev && w.ino === m.ino) {
                    await unlink(r(o));
                }
            }).catch(()=>{});
        }
        throw error;
    }
    let P = T.fallbackCode ?? y.fallbackCode;
    if (P !== undefined) {
        let A = [
            ...T.method === "copy" ? [
                "transcript"
            ] : [],
            ...y.method === "copy" ? [
                "meta"
            ] : []
        ].join("+");
        t(`[adopt] agent ${e.agentId}: hard link impossible (${P}) \u2014 materialised a copy of ${A}`, {
            level: "warn"
        });
        f("task_local_agent", "adopt_link_fallback_copy");
    }
    return {
        forkedSkillNameFromSidecar: u,
        method: T.method,
        fallbackCode: P
    };
}
const tt = /^agent-[\w-]+\.(?:jsonl|meta\.json)$/;
const nt = new RegExp(`^agent-[\\w-]+\\.(?:jsonl|meta\\.json)${Re.replace(/[.]/g, "\\.")}\\d+\\.(\\d+)\\.[0-9a-f]{8}\$`);
const rt = 900000;
const ot = 64;
function Ie(e, n) {
    let o = relative(e, n);
    if (o === "" || o.startsWith("..") || isAbsolute(o)) {
        return null;
    }
    let r = o.split(sep);
    if (r.length < 3 || r[2] !== "subagents") {
        return null;
    }
    return {
        session: join(r[0], r[1]),
        depth: r.length
    };
}
async function WDr({ storageV5, linkFn = link } = {}) {
    if (storageV5 === undefined) {
        return;
    }
    try {
        await it(gXt(), linkFn);
    } catch (error) {
        if (v(error) !== undefined) {
            t(`[adopt] relink sweep abandoned: ${error}`, {
                level: "warn"
            });
            return;
        }
        c(error);
    }
}
async function it(e, linkFn) {
    let o;
    try {
        o = await readdir(e, {
            withFileTypes: true
        });
    } catch  {
        return;
    }
    let r = Date.now();
    let s = [];
    for (let R of o){
        let N = nt.exec(R.name);
        if (N) {
            if (Math.abs(r - Number(N[1])) > rt) {
                await unlink(join(e, R.name)).catch(()=>{});
            }
            continue;
        }
        if (R.isSymbolicLink() && tt.test(R.name)) {
            s.push(R.name);
        }
    }
    if (s.length === 0) {
        return;
    }
    let l = (R)=>R.replace(/\.(?:jsonl|meta\.json)$/, "");
    let a = new Map;
    for (let R of s){
        let N = a.get(l(R)) ?? {};
        if (R.endsWith(".jsonl")) {
            N.transcript = R;
        } else {
            N.meta = R;
        }
        a.set(l(R), N);
    }
    let u = [
        ...a.entries()
    ];
    let g = u.length > 1 ? randomBytes(4).readUInt32BE() % u.length : 0;
    let k = [
        ...u.slice(g),
        ...u.slice(0, g)
    ];
    let [h, S] = await Promise.all([
        realpath(Ep()).catch(()=>null),
        realpath(e).catch(()=>null)
    ]);
    if (h === null || S === null) {
        return;
    }
    let y = Ie(h, S);
    if (DW(dirname(dirname(e))) === undefined || y === null || y.depth !== 3) {
        t(`[adopt] relink sweep: ${s.length} symlinked name(s) left as is (session dir outside the transcript store)`, {
            level: "warn"
        });
        return;
    }
    let y_session = y.session;
    let linked = 0;
    let copied = 0;
    let m = 0;
    let w = 0;
    let L = [];
    let K = (R)=>{
        if (R === "copy") {
            copied++;
        } else {
            linked++;
        }
    };
    let V = new Set;
    for (let [R, [N, I]] of k.entries()){
        let H = [
            I.transcript,
            I.meta
        ].filter((D)=>D !== undefined);
        if (w + H.length > ot) {
            m = k.slice(R).reduce((acc, [, E])=>acc + Number(!!E.transcript) + Number(!!E.meta), 0);
            L.push(`${m} more (per-pass cap)`);
            break;
        }
        w += H.length;
        try {
            let D = `${N}.jsonl`;
            let E = I.transcript !== undefined ? await ge(e, D, h, y_session) : await lt(e, D);
            if (typeof E === "string") {
                for (let G of H){
                    L.push(`${G} (${G === I.meta && I.transcript !== undefined ? "transcript not convertible" : E})`);
                }
                continue;
            }
            let ie;
            if (I.meta !== undefined) {
                let G = E !== null && E.gate.size === 0 ? "meta beside an empty transcript" : await ge(e, I.meta, h, y_session, {
                    besideDir: E === null ? undefined : dirname(E.real)
                });
                if (typeof G === "string") {
                    for (let ce of H){
                        L.push(`${ce} (${ce === I.meta ? G : "meta not convertible"})`);
                    }
                    continue;
                }
                ie = G;
            }
            if (E !== null) {
                K(await he(E, linkFn));
                V.add(D);
            }
            if (ie !== undefined && I.meta !== undefined) {
                K(await he(ie, linkFn));
                V.add(I.meta);
            }
        } catch (error) {
            if (v(error) === undefined) {
                c(error);
            }
            for (let E of H){
                if (!V.has(E)) {
                    L.push(`${E} (${v(error) ?? "error"})`);
                }
            }
        }
    }
    if (copied > 0) {
        f("task_local_agent", "adopt_link_fallback_copy");
    }
    t(`[adopt] relink sweep: ${linked} hard-linked, ${copied} copied, ${L.length - (m > 0 ? 1 : 0) + m} left as is${L.length > 0 ? ` (${L.slice(0, 5).join(", ")})` : ""}`, {
        level: L.length > 0 || copied > 0 ? "warn" : "debug"
    });
    i("tengu_adopt_relink", {
        linked,
        copied,
        left: L.length - (m > 0 ? 1 : 0) + m
    });
}
const Z = 65536;
const at = p(()=>bt({
        agentType: me()
    }));
const st = p(()=>bt({
        agentId: me()
    }));
async function Ee(e, n, o) {
    let r = await open(e, constants.O_RDONLY | oa);
    try {
        let s = await r.stat();
        if (s.dev !== n.dev || s.ino !== n.ino) {
            return "target changed during the check";
        }
        if (o.endsWith(".meta.json")) {
            if (s.size > Z) {
                return "meta too large";
            }
            let g = pe((await fe(r)).toString("utf-8"));
            if (at().safeParse(g).success) {
                return undefined;
            }
            return "not an agent meta";
        }
        if (s.size === 0) {
            return;
        }
        let l = o.slice(6, -6);
        let a = await fe(r);
        let u = a.toString("utf-8");
        if (a.length >= Z && a.indexOf(10) === -1) {
            if (dt(u, l)) {
                return undefined;
            }
            return "no record naming this agent in the first 64 KiB";
        }
        for (let g of u.split(`
`)){
            let k = pe(g);
            if (k === null) {
                continue;
            }
            let h = st().safeParse(k);
            if (h.success && h.data.agentId === l) {
                return;
            }
        }
        return "no record naming this agent in the first 64 KiB";
    } finally{
        await r.close().catch(()=>{});
    }
}
function pe(e) {
    try {
        return X(e);
    } catch  {
        return null;
    }
}
async function fe(e) {
    let n = Buffer.allocUnsafe(Z);
    let o = 0;
    while(o < Z){
        let { bytesRead } = await e.read(n, o, Z - o, o);
        if (bytesRead === 0) {
            break;
        }
        o += bytesRead;
    }
    return n.subarray(0, o);
}
function dt(e, n) {
    if (e[0] !== "{") {
        return false;
    }
    let o = `"agentId":"${n}"`;
    let r = 0;
    let s = false;
    let l = false;
    for(let a = 0; a < e.length; a++){
        let u = e[a];
        if (s) {
            if (l) {
                l = false;
            } else if (u === "\\") {
                l = true;
            } else if (u === '"') {
                s = false;
            }
            continue;
        }
        if (u === "{" || u === "[") {
            r++;
        } else if (u === "}" || u === "]") {
            r--;
            if (r === 0) {
                return false;
            }
        } else if (u === '"') {
            if (r === 1 && e.startsWith(o, a) && (e[a - 1] === "{" || e[a - 1] === ",")) {
                return true;
            }
            s = true;
        }
    }
    return false;
}
async function ge(e, n, o, r, { besideDir } = {}) {
    let linkPath = join(e, n);
    let a = await readlink(linkPath);
    if (!isAbsolute(a) || basename(a) !== n || DO(a)) {
        return "unexpected target spelling";
    }
    let gate;
    try {
        gate = await lstat(a);
    } catch (error) {
        return `target ${v(error) ?? "unreadable"}`;
    }
    if (!gate.isFile()) {
        if (gate.isSymbolicLink()) {
            return "chained link";
        }
        return "non-regular target";
    }
    let real = await realpath(a);
    let k = Ie(o, real);
    if (k === null || k.depth < 4 || basename(real) !== n) {
        return "outside the transcript store";
    }
    if (k.session === r) {
        return "this session's own file";
    }
    if (besideDir !== undefined && dirname(real) !== besideDir) {
        return "not beside its transcript";
    }
    let h = await lstat(real);
    if (!h.isFile() || h.dev !== gate.dev || h.ino !== gate.ino) {
        return "target changed during the check";
    }
    let S = await Ee(real, gate, n);
    if (S !== undefined) {
        return S;
    }
    return {
        linkPath,
        real,
        gate
    };
}
async function lt(e, n) {
    let o = join(e, n);
    let r;
    try {
        r = await lstat(o);
    } catch  {
        return "meta without its transcript";
    }
    if (!r.isFile() || r.size === 0) {
        return "meta without its transcript";
    }
    let s = await Ee(o, r, n);
    if (s === undefined) {
        return null;
    }
    return `transcript ${s}`;
}
async function he(e, linkFn) {
    return (await de(e.linkPath, e.real, e.gate, linkFn, true)).method;
}
function zDr(e) {
    return xXe(e.pid, e.startTimeTicks, e.procStart);
}
async function GDr(e) {
    let n = Q0(e.workflowRunId);
    if (n === e.transcriptDir) {
        return;
    }
    if (await realpath(n).catch(()=>{}) === e.transcriptDir) {
        return;
    }
    await stat(join(e.transcriptDir, "journal.jsonl"));
    await mkdir(dirname(n), {
        recursive: true
    });
    try {
        await unlink(n);
    } catch (error) {
        if (v(error) !== "ENOENT") {
            try {
                await rmdir(n);
            } catch (err) {
                if (v(err) === "ENOTEMPTY") {
                    await rm(n, {
                        recursive: true,
                        force: true
                    });
                }
            }
        }
    }
    await symlink(e.transcriptDir, n, undefined);
}
function Kcn(e, n, o) {
    let r = e.scriptPath !== undefined ? ` To resume manually: Workflow({scriptPath: '${Bt(e.scriptPath)}', resumeFromRunId: '${Bt(e.workflowRunId)}'}).` : "";
    let s = `Background workflow "${Bt(e.description)}" was checkpointed for the background fork but could not be resumed (${Bt(n)}).${r}`;
    q(e.taskId, s, o);
}
function q(taskId, summary, o, agentId = Xe()) {
    o.enqueuePendingNotification({
        value: Fi({
            taskId: Bt(taskId),
            status: "failed",
            summary
        }),
        agentId,
        mode: "task-notification",
        skipAttachments: true,
        priority: "next",
        taskId
    });
    la(taskId, "failed", {
        summary
    });
}
function VDr(e) {
    let n = oe(()=>[
            Ep()
        ]).safeParse(e);
    if (!n.success) {
        throw new x(n.error.issues[0]?.message ?? "scriptPath rejected", "adopt scriptPath rejected");
    }
    return n.data;
}
function rYn(e) {
    return e.mcp.clientsInitialized === true && !e.mcp.clients.some((n)=>n.type === "pending");
}
function qDr(e) {
    let n = e.parentAgentId !== undefined;
    let o = e.forkedSkillName !== undefined;
    return {
        emit: n || o,
        excludeFromReconcile: !n && o
    };
}
function Ycn(e, n, o, r) {
    let s = e.parentAgentId !== undefined && Pn(o.get(e.parentAgentId)) ? So(e.parentAgentId) : Xe();
    let l = `Background agent "${Bt(e.description ?? e.agentId)}" was checkpointed for the background fork but could not be resumed (${Bt(n)}).`;
    q(e.agentId, l, r, s);
}
function KDr(e, n) {
    let lastFiredAt = Date.now();
    let r = new Set(Km().map((l)=>l.id));
    let s = 0;
    for (let l of e){
        if (l.prompt.length > ue) {
            f("task_local_agent", "adopt_cron_prompt_too_long");
            t(`[adopt] cron ${$z(l.id, 64)} skipped: prompt is ${l.prompt.length} characters, over the ${ue} limit`, {
                level: "warn"
            });
            continue;
        }
        if (!r.has(l.id)) {
            Swe({
                ...l,
                ...l.recurring && {
                    lastFiredAt
                }
            });
            r.add(l.id);
            s++;
        }
    }
    if (s > 0) {
        if (vE()) {
            lU(true);
        }
    }
    for(let l = 0; l < (n ?? 0); l++){
        Osn();
    }
}
function v6(e) {
    let n = new Map;
    if (!sEe()) {
        return n;
    }
    let o = (a)=>{
        if (Pn(a)) {
            return a.parentAgentId;
        }
        if ("agentId" in a) {
            return a.agentId;
        }
    };
    let r = new Map;
    for (let a of Object.values(e)){
        if (a.status !== "running" && a.status !== "pending" || Pn(a) && a.forkWorker) {
            continue;
        }
        let u = o(a);
        if (u !== undefined) {
            let g = r.get(u) ?? [];
            g.push(a);
            r.set(u, g);
        }
    }
    let s = (a)=>{
        if (Pn(a)) {
            return a.agentType !== "main-session" && a.status === "running" && a.isBackgrounded && a.abortController !== undefined;
        }
        if (bp(a)) {
            return a.kind !== "monitor" && a.status === "running" && a.isBackgrounded && a.shellCommand !== null && a.shellCommand.detach !== undefined;
        }
        if (ocr(a)) {
            return a.status === "running" && a.v2Run === undefined && a.scriptPath !== undefined && a.workflowRunId !== undefined && a.abortController !== undefined;
        }
        return false;
    };
    let l = (a, u)=>{
        u.push(a.id);
        let g = s(a);
        for (let k of r.get(a.id) ?? []){
            g = l(k, u) && g;
        }
        return g;
    };
    for (let a of Object.values(e)){
        if (!(Pn(a) ? a.parentAgentId === undefined : bp(a) ? a.agentId === undefined : ocr(a))) {
            continue;
        }
        let g = [];
        let k = l(a, g);
        for (let h of g){
            n.set(h, k);
        }
    }
    return n;
}
function oYn(e, n) {
    return bp(e) && (n.get(e.id) ?? false);
}
function bIe(e, n) {
    return sEe() && (e.agentId === undefined || (n.get(e.agentId) ?? false));
}
function sYn(e, n) {
    return Pn(e) && (n.get(e.id) ?? false);
}
function Xcn(e, n) {
    return ocr(e) && (n.get(e.id) ?? false);
}
function tje(e, n) {
    return n.get(e.id) ?? false;
}
function Smt(e, n = v6(e)) {
    let o = Pfe(e);
    return F(Object.values(e), (r)=>tje(r, n)) + F(Km(), (r)=>bIe(r, n)) + o.size;
}
function wmt(e, n = v6(e)) {
    return Z0(e).count - Smt(e, n);
}
function nje(e, n = v6(e)) {
    let running = 0;
    let finished = 0;
    let rerun = 0;
    for (let l of Object.values(e)){
        if (!Xcn(l, n)) {
            continue;
        }
        let a = Infinity;
        for (let u of l.workflowProgress){
            if (u.type === "workflow_agent" && u.state === "error") {
                a = Math.min(a, u.index);
            }
        }
        for (let u of l.workflowProgress){
            if (u.type !== "workflow_agent") {
                continue;
            }
            if (u.state === "done") {
                if (u.index > a) {
                    rerun++;
                } else {
                    finished++;
                }
            } else if (u.state === "progress" || u.state === "start" && !(u.queuedAt !== undefined && u.startedAt === undefined)) {
                running++;
            }
        }
    }
    return {
        running,
        finished,
        rerun
    };
}
function YDr(e, n = v6(e)) {
    return wmt(e, n) > 0 || Pfe(e).size > 0 || nje(e, n).running > 0;
}
function vmt(e, n) {
    let o = 0;
    for (let r of Pfe(e)){
        if (!n.has(r)) {
            o++;
        }
    }
    return o;
}
function XDr(e) {
    return e.shells.length > 0 || (e.agents?.length ?? 0) > 0 || (e.workflows?.length ?? 0) > 0 || e.cron.length > 0;
}
function Jcn(e) {
    return {
        adopted_shells: e?.shells.length ?? 0,
        adopted_agents: e?.agents?.length ?? 0,
        adopted_workflows: e?.workflows?.length ?? 0,
        adopted_cron: e?.cron.length ?? 0,
        adopted_frame_live: e?.frameLive?.length ?? 0
    };
}
function p$t(e) {
    return vd((n, o, r)=>{
        if (!r) {
            return;
        }
        ct(r, e);
        i("tengu_refusal_fallback_latch_reset", {
            source: d(o),
            restored_to_explicit_override: r.restoredToExplicitOverride,
            model_scope: d(V5(r.fallbackModel))
        });
    });
}
function XLo(e) {
    return vd((n, o, r)=>{
        if (r) {
            e();
        }
    });
}
function ct(e, n) {
    let o;
    let r;
    n((s)=>{
        let l = e.overrideValue ?? e.forSessionValue ?? e.appStateModel;
        let fastMode = Qo() ? oP(l, s.fastMode) : !!s.fastMode;
        o = s.fastMode;
        r = fastMode;
        if (s.mainLoopModel === e.appStateModel && s.mainLoopModelForSession === e.forSessionValue && fastMode === !!s.fastMode) {
            return s;
        }
        return {
            ...s,
            mainLoopModel: e.appStateModel,
            mainLoopModelForSession: e.forSessionValue,
            fastMode
        };
    });
    if (r !== undefined) {
        sP(o, r);
    }
    gp(e.overrideValue);
}
export { CXe, wHs, ODr, Q4n, Z4n, eYn, Gq, Pfe, Gcn, Vcn, tYn, RXe, MDr, HDr, DDr, nYn, LDr, NDr, qcn, $Dr, FDr, UDr, BDr, jDr, WDr, zDr, GDr, Kcn, VDr, rYn, qDr, Ycn, KDr, v6, oYn, bIe, sYn, Xcn, tje, Smt, wmt, nje, YDr, vmt, XDr, Jcn, p$t, XLo };
