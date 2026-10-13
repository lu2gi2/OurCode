import { Vn, cr, Xc, gp } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { GP, Ke, W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q, Ge } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { Oi, ie, tMs, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { OK, Rae, xae, $Ge, bSt, KZe, Nge, nJ, lVt, DSt, pT, IXo, lhe, Kae, lJ, Yae, che, Dkn, MHe, Jae, HHe, Bet, kJ, sc, mne, wDe, eS, Ys, Nhe, y4t, Alr, gTe, E2, i7r, its, UDe, BDe } from "/$bunfs/root/chunk-kasbfbhj.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { ha, Wde, Ki, _r } from "/$bunfs/root/chunk-bmzhpr9h.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { BM, Im, j4 } from "/$bunfs/root/chunk-9fvky64k.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { Lb, Ia, bEo, G8, tHt, lut, qs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Vk } from "/$bunfs/root/chunk-6g4165br.js";
import { rLe, pQ, yB } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { sg, Gu, Pso, Eds, kds, Tds } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { roo, nKe, MD, BI, z2, ooo } from "/$bunfs/root/chunk-rhjwzamj.js";
import { st } from "/$bunfs/root/chunk-45f0zf8d.js";
import { It } from "/$bunfs/root/chunk-4r6b8efh.js";
import { yt } from "/$bunfs/root/chunk-f41czxrs.js";
import { Zg } from "/$bunfs/root/chunk-nbx3tg29.js";
import { eR } from "/$bunfs/root/chunk-12j67n2n.js";
import { k5 } from "/$bunfs/root/chunk-7q005g04.js";
import { tpn, vie } from "/$bunfs/root/chunk-ce3s0ac9.js";
import { ev } from "/$bunfs/root/chunk-n687sxb1.js";
import { Wve } from "/$bunfs/root/chunk-z9cp9ecj.js";
import { hIr } from "/$bunfs/root/chunk-spt0ytk0.js";
import { PU } from "/$bunfs/root/chunk-ggpgtemh.js";
import { N0t } from "/$bunfs/root/chunk-3hmyb6mq.js";
import { nft } from "/$bunfs/root/chunk-h0aymhrx.js";
import { Ro } from "/$bunfs/root/chunk-5aqxznmv.js";
import { sIt, pR } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { o, E, M, oe, T, u, De, Ue, Wr, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { Jk, at } from "/$bunfs/root/chunk-gxn6d1fg.js";
import { join, basename, dirname } from "path";
const tMo = "ListProjectCommands";
const Me = 8388608;
const se = 2000;
const ae = p(()=>u({
        name: o().min(1).max(1024),
        loadedFrom: U([
            "skills",
            "commands_DEPRECATED"
        ]),
        text: o().max(KZe)
    }));
const kt = p(()=>u({
        commands: T(ae()).max(se),
        cut: M(),
        refused: E().int().min(0)
    }));
function X(e) {
    return xr().skillFiles.get(e) ?? (e.skillRoot ? join(e.skillRoot, "SKILL.md") : "");
}
async function Y(e) {
    let n = X(e);
    if (n === "") {
        return null;
    }
    try {
        return await Vk(ie(), n, KZe);
    } catch  {
        return null;
    }
}
function uIr(e) {
    return Buffer.byteLength(Oi(e));
}
async function nMo(e, n, s) {
    let { storageV5 } = s.toolUseContext();
    E2();
    Pr();
    let i = [
        ...await gTe(cr(), storageV5),
        ...BDe(),
        ...UDe()
    ];
    n.throwIfAborted();
    let l = new Set;
    let commands = [];
    let S = 0;
    let cut = false;
    let refused = 0;
    for (let _ of i){
        if (_.type !== "prompt" || l.has(_.name)) {
            continue;
        }
        l.add(_.name);
        let { name, loadedFrom } = _;
        if (_.source !== "projectSettings" || loadedFrom !== "skills" && loadedFrom !== "commands_DEPRECATED" || nKe(_) || pT(_)) {
            continue;
        }
        let text = await Y(_);
        n.throwIfAborted();
        let x = ae().safeParse({
            name,
            loadedFrom,
            text
        });
        if (!x.success || !tMs(name)) {
            refused++;
            t(`ListProjectCommands: ${name} refused from the listing`, {
                level: "warn"
            });
            continue;
        }
        if (commands.length === se) {
            cut = true;
            break;
        }
        let z = uIr(x.data);
        if (S + z > Me) {
            cut = true;
            continue;
        }
        S += z;
        commands.push(x.data);
    }
    return {
        summary: `${commands.length} commands${cut ? ", cut at a limit" : ""}${refused > 0 ? `, ${refused} refused` : ""}`,
        output: {
            commands,
            cut,
            refused
        }
    };
}
const Ee = 10000;
const ooo_1 = ooo;
const le = {
    reason: "timed_out"
};
async function me(e) {
    if (!sIt(e)) {
        return {
            reason: "file_absent"
        };
    }
    let hostCatalog = Gu().hostCatalog;
    let s = hostCatalog.texts.get(e);
    if (s !== undefined) {
        return s;
    }
    let r = hostCatalog.readingForCalls.get(e);
    if (r === undefined) {
        if (Eds()) {
            return {
                reason: "earlier_work_outstanding"
            };
        }
        if (hostCatalog.readingForCalls.size >= ooo_1) {
            return {
                reason: "too_many_reads"
            };
        }
        let l = hostCatalog.lastReadForCalls.then((S)=>Ne(hostCatalog, e, S));
        hostCatalog.lastReadForCalls = l.then(({ probed })=>probed, ()=>{});
        r = {
            reading: l.then(({ outcome })=>outcome).finally(()=>{
                hostCatalog.readingForCalls.delete(e);
                if (hostCatalog.readingForCalls.size === 0) {
                    hostCatalog.lastReadForCalls = Promise.resolve(undefined);
                }
            }),
            since: performance.now()
        };
        hostCatalog.readingForCalls.set(e, r);
    }
    let i = r.since + Ee - performance.now();
    return (i > 0 ? await Ge(r.reading, i) : undefined) ?? {
        reason: "timed_out"
    };
}
async function Ne(hostCatalog, n, s) {
    let r = ()=>Gu().hostCatalog === hostCatalog;
    if (s === undefined) {
        await Lb();
    }
    let i = s ?? await Pso(async ()=>{
        if (r()) {
            return kds();
        }
        return le;
    });
    if ("reason" in i) {
        return {
            outcome: i,
            probed: undefined
        };
    }
    await Lb();
    let l = await Pso(async ()=>{
        let d = r() ? await Tds(i.root, n, i.device) : le;
        if (!("reason" in d)) {
            hostCatalog.texts.set(n, d);
        }
        return d;
    });
    return {
        outcome: l,
        probed: "reason" in l ? undefined : i
    };
}
const rMo = "ReadSkill";
const oMo = "RenderSkill";
const sMo = "RenderPinnedSkill";
const iMo = "RenderBuiltInCommand";
const pe = 110000;
const ge = 2000;
const D = 100000;
const Ie = 4000000;
const Fe = 60000;
const He = 4096;
const Se = 256;
const ye = 256;
const Ce = 32768;
const je = [
    yt,
    eR,
    Ro
];
const ce = ze({
    last: Promise.resolve()
}, (e)=>{
    e.last = Promise.resolve();
});
const he = p(()=>A(true).optional().catch(undefined));
const ve = p(()=>u({
        name: o().min(1).max(1024),
        updatedAt: o().max(64).nullable(),
        waitMs: E().int().min(0).max(pe),
        fromHostCatalog: he()
    }));
const _e = p(()=>u({
        outcome: A("missing"),
        syncing: M(),
        fromHostCatalog: A(true).optional(),
        withheld: A(true).optional()
    }));
const kn = p(()=>Wr("outcome", [
        u({
            outcome: A("found"),
            text: o().max(sg),
            fromHostCatalog: A(true).optional()
        }),
        _e()
    ]));
const H = p(()=>oe().optional());
const Be = p(()=>u({
        name: o().min(1).max(1024),
        args: o().max(D),
        readOnly: M(),
        waitMs: E().int().min(0).max(pe),
        fromHostCatalog: he(),
        expectSha256: o().regex(Jk).optional(),
        sessionRules: H()
    }));
const Xe = p(()=>u({
        name: o().min(1).max(1024),
        args: o().max(D),
        readOnly: M(),
        sessionRules: H(),
        model: o().min(1).max(256),
        session: u({
            tools: T(o().min(1).max(Se)).max(He).catch([]),
            isSkillPreload: M().optional().catch(undefined),
            modelScheduledOrigin: M().optional().catch(undefined),
            remoteSessionId: o().min(1).max(256).optional().catch(undefined),
            effort: Ue([
                U(Ia),
                E().int().min(0).max(1000)
            ]).optional().catch(undefined)
        }).optional().catch(undefined)
    }));
const j = p(()=>u({
        outcome: A("rendered"),
        blocks: T(u({
            type: A("text"),
            text: o().max(Ie)
        })).max(16),
        handedOff: T(De({
            command: o().min(1).max(Ce),
            tool: o().max(Se)
        })).max(ye).optional(),
        fromHostCatalog: A(true).optional()
    }));
const Z = p(()=>u({
        outcome: A("failed"),
        message: o().max(ge)
    }));
const xn = p(()=>Wr("outcome", [
        j(),
        _e(),
        Z()
    ]));
async function aMo(e, n, { toolUseContext }) {
    let { name, updatedAt, waitMs, fromHostCatalog } = ve().parse(e);
    let S = fromHostCatalog ? await Pe(name) : await q(name, waitMs, n, toolUseContext(), updatedAt);
    let y = S && F(S);
    if (y !== undefined) {
        return {
            summary: "no such skill",
            output: I(y, fromHostCatalog)
        };
    }
    let h = fromHostCatalog ? S?.getLoadedSkillMd?.() ?? null : S?.skillRoot === undefined ? null : await Vk(ie(), join(S.skillRoot, "SKILL.md"), sg).catch(()=>null);
    if (h === null) {
        return {
            summary: "no such skill",
            output: I(undefined, fromHostCatalog)
        };
    }
    return {
        summary: "found",
        output: {
            outcome: "found",
            text: h,
            ...fromHostCatalog && {
                fromHostCatalog
            }
        }
    };
}
async function pIr(e, n, { toolUseContext, launchPermissionContext }) {
    let { name, args, readOnly, waitMs, fromHostCatalog, expectSha256, sessionRules } = Be().parse(e);
    let C = v(toolUseContext(), readOnly, sessionRules, launchPermissionContext);
    let P = fromHostCatalog ? await Pe(name) : await q(name, waitMs, n, C);
    if (P?.source === "projectSettings") {
        E2();
        P = await q(name, waitMs, n, C);
    }
    let k = P && F(P);
    if (P === undefined || k !== undefined) {
        return {
            summary: "no such skill",
            output: I(k, fromHostCatalog)
        };
    }
    if (expectSha256 !== undefined) {
        P = await Ye(P, expectSha256);
        if (P === undefined || F(P) !== undefined) {
            return {
                summary: "changed since listed",
                output: {
                    outcome: "failed",
                    message: "this skill's file changed after the session listed it, so it was not rendered; a new session lists the current file"
                }
            };
        }
    }
    let x = await B(P, args, C, n);
    if (fromHostCatalog && x.output.outcome === "rendered") {
        return {
            ...x,
            output: {
                ...x.output,
                fromHostCatalog
            }
        };
    }
    return x;
}
function v(e, readOnly, sessionRules, launchPermissionContext) {
    if (!readOnly && sessionRules === undefined) {
        return e;
    }
    let i = readOnly ? undefined : hIr(sessionRules, launchPermissionContext);
    if (i === undefined) {
        return {
            ...e,
            options: {
                ...e.options,
                readOnlySkillLoad: true
            }
        };
    }
    let { toolPermissionContext } = i;
    return {
        ...e,
        getAppState: ()=>({
                ...ev(),
                toolPermissionContext
            }),
        ...i.offersHandOff && {
            promptShellHandOff: []
        },
        ...i.classifiesEveryCall && {
            promptShellCallerClassifiesAll: true
        }
    };
}
async function Ye(e, expectSha256) {
    let content = MD(e) ? e.getLoadedSkillMd?.() ?? null : await Y(e);
    if (content === null || at(content) !== expectSha256) {
        return;
    }
    try {
        let r = Alr({
            content,
            skillFilePath: X(e),
            skillName: e.name,
            source: e.source,
            baseDir: e.skillRoot,
            loadedFrom: e.loadedFrom ?? "skills",
            serverAttribution: e.serverAttribution
        });
        if (r.type === "prompt") {
            return r;
        }
        return undefined;
    } catch (error) {
        c(W(error));
        return;
    }
}
async function lMo(e, n, { toolUseContext, launchPermissionContext }) {
    let { name, args, readOnly, sessionRules, model, session } = Xe().parse(e);
    let _ = v(toolUseContext(), readOnly, sessionRules, launchPermissionContext);
    let effort = session?.effort;
    let P = {
        ..._,
        ...effort !== undefined && {
            permissionLayers: [
                ..._.permissionLayers ?? [],
                {
                    kind: "effort",
                    effort
                }
            ]
        },
        options: {
            ..._.options,
            mainLoopModel: model,
            ...session && {
                tools: [
                    ..._.options.tools,
                    ...N0t(false).filter((x)=>je.some((z)=>It(x, z)) && session.tools.some((z)=>It(x, z)) && !_.options.tools.some((z)=>It(z, x.name)))
                ],
                isSkillPreload: session.isSkillPreload,
                modelScheduledOrigin: session.modelScheduledOrigin
            }
        }
    };
    let k = $e(name);
    if (k === undefined || F(k) !== undefined) {
        return {
            summary: "no such command",
            output: I()
        };
    }
    return We(model, ()=>IXo(session?.remoteSessionId, ()=>B(k, args, P, n)));
}
function $e(name) {
    Wve();
    for (let n of [
        ...k5(),
        ...kJ()
    ]){
        if (n.type === "prompt" && n.name === name && roo(n)) {
            return n;
        }
    }
}
async function We(model, n) {
    let s = ce.last.then(async ()=>{
        let r = Xc();
        gp(model);
        try {
            return await n();
        } finally{
            gp(r);
        }
    });
    ce.last = s.then(()=>{}, ()=>{});
    return s;
}
async function B(e, args, s, r) {
    try {
        let i = await e.getPromptForCommand(args, s);
        let blocks = i.flatMap((S)=>{
            if (S.type === "text") {
                return [
                    {
                        type: S.type,
                        text: S.text
                    }
                ];
            }
            return [];
        });
        let d = j().safeParse({
            outcome: "rendered",
            blocks,
            ...s.promptShellHandOff?.length && {
                handedOff: s.promptShellHandOff
            }
        });
        if (blocks.length !== i.length || !d.success) {
            return {
                summary: "render refused",
                output: {
                    outcome: "failed",
                    message: s.promptShellHandOff?.length ? `the rendered skill is not plain text of a usable size, or it leaves Claude more than ${ye} inline shell commands or one longer than ${Ce} characters` : "the rendered skill is not plain text of a usable size"
                }
            };
        }
        return {
            summary: "rendered",
            output: d.data
        };
    } catch (error) {
        if (Ke(error) || r.aborted) {
            throw error;
        }
        if (!(error instanceof GP)) {
            c(W(error));
        }
        return {
            summary: "render failed",
            output: {
                outcome: "failed",
                message: error instanceof GP ? ne(error.message, ge) : "the skill could not be rendered"
            }
        };
    }
}
function I(e, fromHostCatalog) {
    return {
        outcome: "missing",
        syncing: Gu().firstSyncPromise !== null,
        ...e === "account_skill_off" && {
            withheld: true
        },
        ...fromHostCatalog && {
            fromHostCatalog
        }
    };
}
async function q(name, waitMs, s, r, i = null) {
    let l = Gu();
    let d = Q(waitMs, s, {
        unref: true
    });
    let S = (C)=>Promise.race([
            C.catch(()=>{}),
            d
        ]);
    let y = await J(name, r, i);
    let h = pR(name);
    if (y === undefined && Dkn(h)) {
        await S(che(h));
        s.throwIfAborted();
        y = await J(name, r, i);
    }
    if (y !== undefined || !l.firstSyncPromise) {
        return y;
    }
    let l_firstSyncPromise = l.firstSyncPromise;
    if (l.firstRoundSettled) {
        let C = Date.now();
        if (C - l.missingSkillResyncAt >= Fe) {
            l.missingSkillResyncAt = C;
            let P = tpn(r.session, r.storageV5, r.credentials).finally(()=>{
                if (l.missingSkillResync === P) {
                    l.missingSkillResync = null;
                }
            });
            l.missingSkillResync = P;
        }
        l_firstSyncPromise = l.missingSkillResync ?? l.syncPromise;
    }
    if (!l_firstSyncPromise) {
        return;
    }
    await S(l_firstSyncPromise);
    s.throwIfAborted();
    vie();
    return J(name, r, i);
}
async function Pe(name) {
    let n = pR(name);
    if (!sIt(n) || !i7r()) {
        return;
    }
    let hostCatalog = Gu().hostCatalog;
    let asked = {
        fromMemory: hostCatalog.texts.has(n),
        inLine: hostCatalog.readingForCalls.size,
        at: performance.now()
    };
    let served;
    let miss;
    let threw = false;
    try {
        let S = await me(n);
        if ("reason" in S) {
            miss = S;
        } else {
            let y = its(S);
            served = y.type === "prompt" && y.name === name ? y : undefined;
        }
    } catch (error) {
        threw = true;
        c(W(error));
    } finally{
        try {
            qe({
                served,
                miss,
                threw,
                asked
            });
        } catch (error) {
            c(W(error));
        }
    }
    return served;
}
const Je = new Set([
    "timed_out",
    "earlier_work_outstanding",
    "too_many_reads"
]);
function qe({ served, miss, threw, asked }) {
    let i = served !== undefined && z2(served);
    let l = {
        from: b("call"),
        named: 1,
        loaded: served === undefined ? 0 : 1,
        withheld: i ? 1 : 0,
        from_memory: asked.fromMemory,
        in_line: asked.inLine,
        waited_ms: Math.round(performance.now() - asked.at),
        ...miss !== undefined && {
            [`mount_miss_${miss.reason}`]: 1
        },
        ...threw && {
            threw
        }
    };
    if (i) {
        f("skill_host_catalog", "all_withheld", l);
    } else if (served !== undefined) {
        g("skill_host_catalog", l);
    } else {
        m("skill_host_catalog", miss !== undefined && Je.has(miss.reason) ? "not_in_time" : "none_loaded", l);
    }
}
function F(e) {
    Pr();
    let n = BI(e);
    if (pT(e)) {
        if (n) {
            return "account_skill_off";
        }
        return "other";
    }
    if (nKe(e)) {
        return "other";
    }
    if (lhe(e)) {
        return "other";
    }
}
async function J(name, n, s) {
    let r = pR(name) !== name;
    let i = await gTe(cr(), n.storageV5);
    for (let l of [
        ...i,
        ...BDe(),
        ...UDe()
    ]){
        if (l.type === "prompt" && l.name === name && (l.loadedFrom === "syncedSkills" || !r) && !MD(l)) {
            if (await Qe(l, s)) {
                return undefined;
            }
            return l;
        }
    }
}
async function Qe(e, n) {
    if (n === null || e.loadedFrom !== "syncedSkills" || e.skillRoot === undefined) {
        return false;
    }
    let s = dirname(e.skillRoot);
    let r = await Rae(join(s, BM), null);
    let i = r === null ? null : xae(r, bSt(), null);
    if (i === null) {
        return false;
    }
    let l = Im(basename(e.skillRoot));
    let d = false;
    for (let S of OK($Ge(), i.skills)){
        try {
            if (Im(basename(j4(S.name, s))) !== l) {
                continue;
            }
        } catch  {
            continue;
        }
        if (S.updatedAt === rLe) {
            d = true;
            continue;
        }
        return S.updatedAt !== null && Date.parse(S.updatedAt) < Date.parse(n);
    }
    return d;
}
const cMo = "ListPluginCommands";
const dMo = "RenderPluginCommand";
const Ze = 60000;
const Ve = p(()=>Ue([
        tHt(),
        u({
            source: A("claudeai"),
            marketplaceId: o(),
            organizationUuid: o(),
            scope: U(lut).optional()
        }),
        u({
            source: A("pluginDirectory")
        })
    ]));
const ke = p(()=>u({
        commandName: o(),
        filePath: o(),
        baseDir: o(),
        sourceName: o(),
        pluginManifest: G8(),
        pluginPath: o(),
        provenance: u({
            officiallyAttested: M().optional(),
            marketplaceSource: Ve().optional(),
            npmResolution: u({
                packageName: o(),
                tarballUrl: o()
            }).optional(),
            home: o().optional()
        }).optional(),
        isSkill: M(),
        config: u({
            isSkillMode: M(),
            serverAttribution: u({
                skillId: o().optional(),
                pluginId: o().optional()
            }).optional(),
            metadata: bEo().optional()
        })
    }));
const et = p(()=>u({
        filePath: o(),
        pluginName: o(),
        namespace: T(o()).readonly(),
        sourceName: o(),
        pluginPath: o(),
        pluginManifest: G8()
    }));
const Zn = p(()=>u({
        commands: T(u({
            source: ke(),
            text: o()
        })),
        skills: T(u({
            source: ke(),
            text: o()
        })),
        agents: T(u({
            source: et(),
            text: o()
        })),
        resynced: M().optional(),
        syncsSessionRefs: M().optional(),
        settingsRan: M().optional(),
        comparesSource: M().optional()
    }));
const vVn = p(()=>T(o().max(64000)).max(1000).nullable().optional().catch(null));
const tt = p(()=>u({
        registeredHooks: ue(o(), vVn()).optional().catch(undefined),
        resync: M().optional(),
        waitMs: E().int().positive().optional().catch(undefined)
    }));
async function uMo(e, n, s) {
    let data = tt().safeParse(e ?? {}).data;
    let resync = data?.resync === true;
    let { session, storageV5, credentials } = s.toolUseContext();
    let y = data?.registeredHooks;
    Pr();
    let deadline = Q(Math.min(nJ(), data?.waitMs ?? Infinity), n, {
        unref: true
    });
    let { resynced } = await fIr(session, credentials, {
        resync,
        deadline
    });
    n.throwIfAborted();
    sc(storageV5, credentials);
    let settingsRan = await Promise.race([
        mIr(session, storageV5, credentials),
        deadline.then(()=>false)
    ]);
    n.throwIfAborted();
    let [P, k, x] = await Promise.all([
        Jae(storageV5),
        HHe(storageV5),
        br("agents") ? [] : Bet(storageV5, credentials)
    ]);
    let z = await Ys(storageV5, credentials);
    let loaded = session.pluginsSync.settingsInstall.loaded;
    await y4t([
        ...z.enabled,
        ...loaded?.plugins.enabled ?? []
    ], storageV5).catch(c);
    let L = be(z, loaded?.plugins);
    let O = await ee([
        ...we(x, z, y),
        ...loaded === null ? [] : we(loaded.agents, loaded.plugins, y, L)
    ]);
    let te = await Nhe(storageV5);
    let K = new Set(O.map(({ source })=>source.sourceName));
    for (let { source } of te.enabled){
        K.delete(source);
    }
    let Re = await Ae([
        ...z.enabled,
        ...loaded?.plugins.enabled ?? []
    ].filter((R)=>K.has(R.source)), storageV5);
    let output = {
        commands: await ee([
            ...G(P),
            ...G(loaded?.commands ?? [], L)
        ]),
        skills: await ee([
            ...G(k),
            ...G(loaded?.skills ?? [], L)
        ]),
        agents: O.filter(({ source })=>!Tin(source, K.has(source.sourceName) ? Re : te, y?.[wDe(source.pluginPath)])),
        resynced,
        syncsSessionRefs: yB(session),
        settingsRan,
        comparesSource: true
    };
    return {
        summary: `${output.commands.length} commands, ${output.skills.length} skills, ${output.agents.length} agents`,
        output
    };
}
async function fIr(e, n, { resync, deadline }) {
    let i = await Promise.race([
        lVt(e, n).catch(()=>false),
        deadline.then(()=>{})
    ]);
    if (i !== false && !(resync && i !== undefined)) {
        return {
            resynced: false
        };
    }
    return {
        resynced: await Promise.race([
            DSt(e, n).then(()=>true, ()=>false),
            deadline.then(()=>false)
        ]) && e.pluginsSync.lastRoundListed
    };
}
function mIr(e, n, s) {
    if (br("plugins")) {
        return Promise.resolve(true);
    }
    let settingsInstall = e.pluginsSync.settingsInstall;
    settingsInstall.next ??= nt(e, n, s).then(()=>true, (i)=>{
        c(i);
        return false;
    });
    return settingsInstall.next;
}
async function nt(e, n, s) {
    let settingsInstall = e.pluginsSync.settingsInstall;
    await settingsInstall.current;
    settingsInstall.current = settingsInstall.next;
    settingsInstall.next = null;
    await Promise.allSettled([
        PU()
    ]);
    a.unset("CLAUDE_CODE_SYNC_PLUGIN_INSTALL");
    await Promise.allSettled([
        nft(undefined, n, s),
        e.pluginsSync.firstSyncPromise
    ]);
    sc(n, s);
    let i = eS(n, s);
    await i;
    sc(n, s);
    st().pluginLoadCacheOnly = i;
    let l = Promise.all([
        Jae(n),
        HHe(n),
        br("agents") ? [] : Bet(n, s),
        i
    ]);
    sc(n, s);
    let [commands, skills, agents, plugins] = await l;
    settingsInstall.loaded = {
        commands,
        skills,
        agents,
        plugins
    };
}
const ot = p(()=>u({
        name: o().min(1).max(1024),
        listedAs: U([
            "command",
            "skill"
        ]),
        args: o().max(D),
        readOnly: M(),
        sessionRules: H(),
        sourceName: o().max(1024).optional(),
        registeredHooks: vVn()
    }));
const eo = p(()=>Wr("outcome", [
        j().extend({
            sourceName: o().optional()
        }),
        Z().extend({
            sourceName: o().optional()
        }),
        u({
            outcome: A("missing")
        }),
        u({
            outcome: A("guarded")
        })
    ]));
async function pMo(e, n, s) {
    let { name, listedAs, args, readOnly, sessionRules, sourceName, registeredHooks } = ot().parse(e);
    let _ = s.toolUseContext();
    let C = await V(name, listedAs, _);
    if (C === undefined) {
        let L = Q(nJ(), n, {
            unref: true
        });
        await gIr(s, n);
        C = await V(name, listedAs, _);
        if (C === undefined) {
            let O = _.session.pluginsSync.settingsInstall;
            await Promise.race([
                O.next ?? O.current,
                L
            ]);
            n.throwIfAborted();
            C = await V(name, listedAs, _);
        }
    }
    Pr();
    let P = C === undefined ? undefined : await Kae(C.command);
    Pr();
    if (C === undefined || (sourceName ?? C.command.pluginSource?.sourceName) !== C.command.pluginSource?.sourceName || Ki(C.command.pluginSource?.sourceName ?? "") === ha && pQ()) {
        return {
            summary: "no such plugin entry",
            output: {
                outcome: "missing"
            }
        };
    }
    if (Yae(P)) {
        lJ(C.command, P);
        return {
            summary: "no such plugin entry",
            output: {
                outcome: "missing"
            }
        };
    }
    let { command, judgedBy } = C;
    if (command.hooks !== undefined || judgedBy.some((L)=>Tin(command.pluginSource, L, registeredHooks))) {
        return {
            summary: "guarded entry",
            output: {
                outcome: "guarded"
            }
        };
    }
    let { summary, output } = await B(command, args, v(_, readOnly, sessionRules, s.launchPermissionContext), n);
    return {
        summary,
        output: {
            ...output,
            sourceName: command.pluginSource?.sourceName
        }
    };
}
async function V(name, listedAs, { session, storageV5, credentials }) {
    let l = xe(await (listedAs === "skill" ? HHe : Jae)(storageV5), name);
    let loaded = session.pluginsSync.settingsInstall.loaded;
    let S = l ? await Ys(storageV5, credentials) : loaded?.plugins;
    if (S === undefined) {
        return;
    }
    Pr();
    let y = await Nhe(storageV5);
    let h = be(y, S);
    let command = l ?? xe((listedAs === "skill" ? loaded?.skills : loaded?.commands) ?? [], name, h);
    let C = command?.pluginSource?.sourceName ?? "";
    let P = y.enabled.some((k)=>k.source === C);
    if (command === undefined || !(P || h.has(C))) {
        return;
    }
    return {
        command,
        judgedBy: [
            S,
            P ? y : await Ae(S.enabled.filter((k)=>k.source === C), storageV5)
        ]
    };
}
async function Ae(e, storageV5) {
    let s = await Promise.allSettled(e.map(({ path, source, name })=>mne(path, source, true, name, true, storageV5, undefined, {
            noTelemetry: true
        })));
    return {
        enabled: s.flatMap((r)=>{
            if (r.status === "fulfilled") {
                return [
                    r.value.plugin
                ];
            }
            return [];
        }),
        errors: s.flatMap((r)=>{
            if (r.status === "fulfilled") {
                return r.value.errors;
            }
            return [];
        })
    };
}
function xe(e, name, s) {
    for (let r of e){
        if (r.type === "prompt" && r.name === name && r.pluginSource !== undefined && !Zg(r.pluginSource.sourceName) && s?.has(r.pluginSource.sourceName) !== false) {
            return r;
        }
    }
}
async function gIr(e, n) {
    let { session, storageV5, credentials } = e.toolUseContext();
    let missingEntry = session.pluginsSync.missingEntry;
    let d = Q(nJ(), n, {
        unref: true
    }).then(()=>{});
    let S = await Promise.race([
        lVt(session, credentials).catch(()=>false),
        d
    ]);
    n.throwIfAborted();
    if (S === undefined) {
        return false;
    }
    if (missingEntry.resync === null && Date.now() - missingEntry.resyncAt >= Ze) {
        missingEntry.resyncAt = Date.now();
        let h = DSt(session, credentials).catch(()=>false).finally(()=>{
            missingEntry.resync = null;
            missingEntry.swept = false;
        });
        missingEntry.resync = h;
    }
    let l_resync = missingEntry.resync;
    if (l_resync !== null) {
        await Promise.race([
            l_resync,
            d
        ]);
        n.throwIfAborted();
    }
    if (missingEntry.resync === null && !missingEntry.swept) {
        missingEntry.swept = true;
        sc(storageV5, credentials);
    }
    return l_resync !== null && missingEntry.resync !== l_resync;
}
function be({ enabled, errors }, s) {
    let r = new Set(enabled.flatMap(Wde).map(_r));
    let i = new Set;
    for (let d of errors){
        if (d.type === "plugin-cache-miss") {
            i.add(d.source);
        }
    }
    let l = new Set;
    for (let d of s?.enabled ?? []){
        if (i.has(d.source) && !r.has(_r(d.name))) {
            l.add(d.source);
        }
    }
    return l;
}
function G(e, n) {
    return e.flatMap((s)=>{
        if (s.type === "prompt" && s.pluginSource !== undefined && !Zg(s.pluginSource.sourceName) && n?.has(s.pluginSource.sourceName) !== false) {
            return [
                s.pluginSource
            ];
        }
        return [];
    });
}
function we(e, n, s, r) {
    return e.flatMap((i)=>{
        if (i.source === "plugin" && i.pluginSource !== undefined && !Zg(i.pluginSource.sourceName) && r?.has(i.pluginSource.sourceName) !== false && !Tin(i.pluginSource, n, s?.[wDe(i.pluginSource.pluginPath)])) {
            return [
                i.pluginSource
            ];
        }
        return [];
    });
}
async function ee(e) {
    let n = ie();
    return (await Promise.all(e.map(async (source)=>{
        let l = source.config?.metadata?.content ?? await Vk(n, source.filePath, MHe).catch(()=>null);
        if (l === null) {
            t(`ListPluginCommands: ${source.filePath} could not be read again`, {
                level: "warn"
            });
            return [];
        }
        return [
            {
                source,
                text: l
            }
        ];
    }))).flat();
}
function Tin(e, { enabled, errors }, r) {
    let i = enabled.find((S)=>S.source === e?.sourceName);
    if (i === undefined || i.modulePath !== undefined || r === null) {
        return true;
    }
    let l = i.hooksConfig === undefined ? i.manifest.hooks === undefined && [] : rt(i.hooksConfig);
    let d = r?.toSorted() ?? [];
    return !l || !Vn(l, d) || l.length > 0 && (Ki(i.source) !== ha || i.path !== e?.pluginPath) || errors.some((S)=>"plugin" in S && S.plugin === i.name);
}
function rt(hooksConfig) {
    let n = [];
    for (let [s, r] of Object.entries(hooksConfig)){
        for (let { matcher, hooks } of r ?? []){
            for (let d of hooks){
                if (d.type !== "command") {
                    return;
                }
                n.push(Nge([
                    s,
                    matcher ?? "",
                    qs(d, d.onFailure === "block" ? [
                        "cloud"
                    ] : [
                        "cloud",
                        "onFailure"
                    ])
                ]));
            }
        }
    }
    return n.sort();
}
export { tMo, uIr, nMo, rMo, oMo, sMo, iMo, aMo, pIr, lMo, cMo, dMo, vVn, uMo, fIr, mIr, pMo, gIr, Tin };
