import { AS, Rq, Tsn, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { W, v, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ve as configHome } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { _, X } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { k, Gr } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { En } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { ym } from "/$bunfs/root/chunk-zwxj12s4.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { dp, _Pe, xZ, wq } from "/$bunfs/root/chunk-x47nahfr.js";
import { Hw, Fl } from "/$bunfs/root/chunk-t0b6khh6.js";
import { w5o, ySt, uL, _St, v5o, E5o, R6r, NGe, qZe, gtr, Yvn, OK, htr, ytr, Rae, xae, $Ge, bSt, QX, zj, Pae, _tr, btr, Str, k5o, SSt, Xvn, wtr, x6r, Jvn, B2t, wSt, T5o, A5o, s3, vtr, vSt, ztr, oVt, sVt, Gtr, Vtr, oet, qtr, iVt, EEn, Ktr, Ytr, Xtr, K8o, Xae, Okn, Mkn, tJo, che, Hkn, oJo, sJo, iJo, JU, Lp, WC, aYt, E2, s7r } from "/$bunfs/root/chunk-kasbfbhj.js";
import { BM, Uhr, dit, T4e, I5, yNe, B4, j4, C4e, dV as rootLabel, R4e } from "/$bunfs/root/chunk-9fvky64k.js";
import { $M, _Rt } from "/$bunfs/root/chunk-4521ay78.js";
import { rLe, Tce, UMn, yB, aLe } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { MD } from "/$bunfs/root/chunk-rhjwzamj.js";
import { x3t } from "/$bunfs/root/chunk-a5rabwn2.js";
import { sg, Gu, xso, WMn, wds, vds } from "/$bunfs/root/chunk-jfcrjtbk.js";
import { D$n, L$n } from "/$bunfs/root/chunk-6rhcrh84.js";
import { kfo } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { $Vr, Pzt, vYo } from "/$bunfs/root/chunk-jz5kr804.js";
import { rl, Bps } from "/$bunfs/root/chunk-w6rkdzfe.js";
import { K4 } from "/$bunfs/root/chunk-n2j724xe.js";
import { sRe } from "/$bunfs/root/chunk-qhgrdyz1.js";
import { _a } from "/$bunfs/root/chunk-g05qxjrj.js";
import { o, E, PP, oe, T, _t } from "/$bunfs/root/chunk-smx21d0k.js";
import { E_ } from "/$bunfs/root/chunk-yngqe5v3.js";
import { lstat, lutimes, mkdir, readdir, readFile, rename, rm, rmdir, stat, writeFile } from "fs/promises";
import { basename, join, relative, sep } from "path";
const Tn = 10;
const St = Tn * 60000;
const gt = 4;
const pt = "tengu_claudeai_skills_sync_interval_minutes";
const wt = 5;
const ht = 1440;
const Mt = "tengu_claudeai_skills_sync_shared_round";
const Rt = "tengu_claudeai_skills_sync_idle_intervals";
const bn = 4;
const Dt = 4;
const vt = 3600000;
const bt = 30000;
const Et = 60000;
const settle_ms = 180000;
const De = 45000;
function se() {
    let e = k(pt, Tn);
    if (typeof e !== "number" || Number.isNaN(e) || e <= 0) {
        return St;
    }
    return Math.min(Math.max(e, wt), ht) * 60000;
}
function Cn() {
    return k(Mt, false) === true;
}
function Fn() {
    let e = se();
    return be() > e && kfo(e) && !D$n();
}
function be() {
    let e = k(Rt, bn);
    let n = typeof e === "number" && !Number.isNaN(e) ? Math.min(Math.max(e, 1), Dt) : bn;
    let r = se();
    return Math.max(r, Math.min(r * n, vt));
}
function An() {
    return bt + Math.floor(Math.random() * Et);
}
function Ee(consecutiveFailedRounds) {
    let n = se();
    return Math.min(n * 2 ** Math.max(0, consecutiveFailedRounds - 1), n * gt);
}
function Pn(e) {
    let n = Gu();
    if (n.resyncTimer) {
        return;
    }
    n.resyncRunRound = e;
    _e(n, e, Ee(n.consecutiveFailedRounds), "resync", false);
}
function Je(e) {
    let n = Gu();
    if (!n.resyncTimer || !n.resyncRunRound) {
        return;
    }
    clearTimeout(n.resyncTimer);
    _e(n, n.resyncRunRound, e, "resync", false);
}
function Nn() {
    let e = Gu();
    if (e.stopAwaitingActivity) {
        return;
    }
    let n = [
        Rq,
        L$n
    ].map((r)=>r(()=>{
            e.stopAwaitingActivity?.();
            if (e.syncPromise) {
                e.syncPromise.catch(()=>{}).then(()=>In(e));
            } else {
                In(e);
            }
        }));
    e.stopAwaitingActivity = ()=>{
        e.stopAwaitingActivity = null;
        for (let r of n){
            r();
        }
    };
}
function On() {
    return Gu().stopAwaitingActivity !== null;
}
function Qe() {
    Gu().stopAwaitingActivity?.();
}
function In(e) {
    try {
        let n = e.resyncArmed;
        if (!e.resyncTimer || !e.resyncRunRound || !n || n.trigger === "wake_settle") {
            return;
        }
        let r = Math.round(Date.now() - n.wallMs - (performance.now() - n.monotonicMs));
        if (r > De && e.consecutiveFailedRounds === 0) {
            clearTimeout(e.resyncTimer);
            Bn(e, e.resyncRunRound, n.trigger, r, true);
            return;
        }
        let t = e.consecutiveFailedRounds > 0 ? Ee(e.consecutiveFailedRounds) : 0;
        if (n.wallMs + n.delayMs - Date.now() > t) {
            clearTimeout(e.resyncTimer);
            _e(e, e.resyncRunRound, t, "resync", true);
        }
    } catch (error) {
        c(error);
    }
}
function xn() {
    Je(Ee(Gu().consecutiveFailedRounds));
}
function _e(e, n, delayMs, t, u) {
    let h = Date.now() + delayMs;
    e.resyncArmed = {
        trigger: t,
        delayMs,
        wallMs: Date.now(),
        monotonicMs: performance.now()
    };
    e.resyncTimer = setTimeout(Lt, delayMs, e, n, h, t, u);
    e.resyncTimer.unref?.();
}
function Lt(e, n, r, t, u) {
    let e_resyncTimer = e.resyncTimer;
    let tickLateMs = Math.max(0, Date.now() - r);
    if (tickLateMs > De) {
        Bn(e, n, t, tickLateMs, false);
        return;
    }
    n({
        trigger: t,
        tickLateMs,
        ...u && {
            woken: u
        }
    }).catch(()=>{}).then(()=>{
        if (e.resyncTimer !== e_resyncTimer) {
            return;
        }
        _e(e, n, Ee(e.consecutiveFailedRounds), "resync", false);
    });
}
function Bn(e, n, r, t, u) {
    J("info", "skills_sync_resync_skipped_after_sleep", {
        late_ms: t,
        woken: u
    });
    _e(e, n, settle_ms, "wake_settle", u);
    try {
        if (!Ce()) {
            i("tengu_skills_sync_resync_skipped", {
                trigger: d(r),
                tick_late_ms: t,
                settle_ms,
                woken: u
            });
        }
    } catch (error) {
        c(error);
    }
}
const It = 60000;
function Le() {
    return dp() ?? "none";
}
async function zn({ syncedRoot, bucket, root, trigger, pinned, lastGeneration, holdsPlaceholders, idle }) {
    let shared = !pinned && Cn() && bucket === _Rt();
    let R = pinned ? undefined : Tt(trigger, shared, idle);
    if (R === undefined) {
        return {
            list: true,
            shared
        };
    }
    if (shared && idle) {
        Nn();
    }
    let S = await Ktr(root, R);
    if (!S.reuse || !await s3(syncedRoot, bucket)) {
        Qe();
        return {
            list: true,
            shared
        };
    }
    let F = await qtr(root);
    let reload = false;
    if (shared) {
        if (F === null || holdsPlaceholders || !F.listedFor.includes(Le())) {
            Qe();
            return {
                list: true,
                shared
            };
        }
        let I = idle && On();
        if (idle && !I && S.ageMs >= se()) {
            return {
                list: true,
                shared
            };
        }
        reload = F.token !== lastGeneration && trigger !== "startup";
        let D = I ? be() : se();
        if (S.ageMs < D) {
            Je(D - S.ageMs + An());
        }
    }
    J("info", "skills_sync_round_reused", {
        age_ms: S.ageMs,
        within_ms: S.withinMs
    });
    return {
        list: false,
        generation: F?.token ?? null,
        reload
    };
}
function Tt(trigger, shared, idle) {
    let t = trigger === "startup" ? Vtr() : undefined;
    if (!shared || trigger === "reload") {
        return t;
    }
    if (idle) {
        return be();
    }
    let u = trigger === "startup" && (!wq() || _Pe() && xZ()) ? Math.min(It, se()) : se();
    return Math.max(u, t ?? 0);
}
const Ct = "tengu_jaunty_alpaca";
function Hn() {
    return Gr(Ct, true) !== false;
}
const Ft = "tengu_quizzical_wirth";
function Ie() {
    return k(Ft, true) !== false;
}
const Ve = 15;
const Bt = $Vr + 60000;
function zt() {
    let a_CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
    if (a_CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS && a_CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS > 0) {
        return a_CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS;
    }
    return 5000;
}
function vUo() {
    let a_CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS = a.CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
    if (a_CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS && a_CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS > 0) {
        return a_CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS;
    }
    return 30000;
}
function tn() {
    let e = Gu();
    if (!e.firstListDeferred) {
        let resolve;
        let promise = new Promise((resolvePromise)=>{
            resolve = resolvePromise;
        });
        e.firstListDeferred = {
            promise,
            resolve
        };
    }
    return e.firstListDeferred;
}
function Ave(e, n, r) {
    Gu().firstSyncPromise ??= Zn(e, n, r);
    Pn((t)=>ln(e, n, r, t));
}
function EUo(e, n, r, t) {
    if (!a.CLAUDE_CODE_CCR_EARLY_SKILLS_SYNC || e.host.launchOptions.isInteractive() || !Okn(e) || t()) {
        return false;
    }
    uL();
    if (!Mkn(e) || !_St() || E5o()) {
        return false;
    }
    Ave(e, n, r);
    return true;
}
function kUo(e, n, r) {
    let t = tn();
    Gu().firstSyncPromise ??= Zn(e, n, r);
    return t.promise;
}
async function TUo(e, n) {
    let r = zt() - (performance.now() - n);
    let t = await Promise.race([
        e.then(()=>"listed"),
        Q(Math.max(0, r)).then(()=>"timed_out")
    ]);
    if (t === "timed_out") {
        i("tengu_skills_sync_wait_timeout", {});
    }
    return t;
}
async function tpn(e, n, r) {
    aLe.of(e).discardInflight();
    await Gu().syncPromise?.catch(()=>{});
    return ln(e, n, r, {
        trigger: "reload"
    });
}
function Zn(e, n, r) {
    let t = Gu();
    return ln(e, n, r, {
        trigger: "startup"
    }).finally(()=>{
        t.firstRoundSettled = true;
    });
}
function sn() {
    let e = Gu();
    if (!e.firstRoundSettled) {
        e.firstRoundEmitted = true;
    }
}
function vie() {
    sn();
    E2();
    JU.emit();
}
function Gn(e, n) {
    if (e === null) {
        return;
    }
    if (n !== null && e.token !== n.token) {
        vie();
        return;
    }
    Gu().bucketGeneration = e.token;
}
function V() {
    return join(configHome(), rootLabel);
}
function Jn(e) {
    return join(V(), e);
}
function Qn(e) {
    return $e.userConfigDir("skills", relative(join(configHome(), "skills"), e).split(sep));
}
async function Vn(e) {
    let n = V();
    if (await zj(n, configHome(), {
        event: "skills_sync_root_refused",
        phase: "prune",
        rootLabel
    }, {
        storageV5: e
    }).catch(()=>null) !== "real") {
        return null;
    }
    let t;
    try {
        t = await readdir(n, {
            withFileTypes: true
        });
    } catch  {
        return null;
    }
    let buckets = [];
    let strays = [];
    for (let y of t){
        if (y.isDirectory() && yNe(y.name) && await s3(n, y.name)) {
            buckets.push(y.name);
        } else if (!B4(y.name)) {
            strays.push(y.name);
        }
    }
    return {
        buckets,
        strays
    };
}
async function et(strays, n) {
    let count = 0;
    for (let t of strays){
        if (await Ae(join(V(), t), n)) {
            count++;
        }
    }
    if (count > 0) {
        J("info", "skills_sync_stray_entry_trashed", {
            count
        });
    }
    return count;
}
async function Ht(e) {
    let n = await Vn(e);
    if (n === null || n.strays.length === 0) {
        return false;
    }
    return await et(n.strays, e) > 0;
}
function Ae(dir, n) {
    return Pae({
        dir,
        trashRoot: Pe(),
        configHome: configHome(),
        failureEvent: "skills_sync_trash_move_failed",
        storageV5: n
    });
}
async function npn(e) {
    if (!R6r()) {
        return false;
    }
    let n = await zj(V(), configHome(), {
        event: "skills_sync_root_refused",
        phase: "prune",
        rootLabel
    }, {
        storageV5: e
    });
    if (n !== "real" && n !== "absent") {
        return false;
    }
    let r = null;
    let t = n === "real" ? await Vn(e) : null;
    if (t !== null) {
        r = 0;
        for (let h of t.buckets){
            let y = Jn(h);
            await rm(oet(y), {
                force: true
            }).catch(()=>{});
            let M = await Vt(y, e).catch(()=>null);
            if (M !== null) {
                r += M;
                await rmdir(y).then(()=>vSt(V(), h), ()=>{});
            }
        }
        r += await et(t.strays, e);
        await rmdir(V()).catch(()=>{});
    }
    J("info", "skills_sync_pruned_for_closed_gate", {
        moved: r ?? 0
    });
    let u = r !== null && r > 0;
    if (u) {
        WC();
        E2();
        JU.emit();
    }
    return u;
}
function Pe() {
    return join(configHome(), R4e);
}
function Ne(e) {
    return join(e, BM);
}
const removedSkillIds = new Set;
const deferredRows = [];
const Ut = p(()=>_t({
        lastUpdated: E().catch(0),
        skills: T(oe()),
        staleDirs: oe().optional(),
        pendingClaims: oe().optional()
    }));
const Kt = p(()=>_t({
        name: o(),
        skillId: o().catch(""),
        description: o().catch(""),
        source: o().catch(""),
        updatedAt: o().nullable().catch(null),
        userInvocable: PP().catch(undefined),
        disableModelInvocation: PP().catch(undefined)
    }));
function nt(root) {
    return Qn(Ne(root));
}
async function ye(e, round) {
    let r = !round.manifestRead;
    round.manifestRead = true;
    let t;
    if (e) {
        try {
            let R = await e.read([
                {
                    key: nt(round.root),
                    offset: 0,
                    length: NGe + 1
                }
            ]);
            if (!R.ok) {
                if (r) {
                    J("warn", "skills_sync_manifest_unreadable", {
                        code: "backend_read_failed"
                    });
                }
                return null;
            }
            let S = R.value.items[0];
            if (!S.found) {
                return null;
            }
            if (S.totalBytes > NGe || S.value.byteLength > NGe) {
                if (r) {
                    J("warn", "skills_sync_manifest_unreadable", {
                        code: "parse_or_size"
                    });
                }
                return null;
            }
            t = Buffer.from(S.value).toString("utf8");
        } catch (error) {
            if (r) {
                J("warn", "skills_sync_manifest_unreadable", {
                    code: v(error) ?? "backend_read_failed"
                });
            }
            return null;
        }
    } else {
        t = await Rae(Ne(round.root), r ? "skills_sync_manifest_unreadable" : null);
        if (t === null) {
            return null;
        }
    }
    let u = xae(t, bSt(), r ? "skills_sync_manifest_unreadable" : null);
    if (u === null) {
        return null;
    }
    let { skills, staleDirs, pendingClaims, ...rest } = u;
    return {
        ...rest,
        skills: OK($Ge(), skills),
        staleDirs: qZe(staleDirs),
        pendingClaims: qZe(pendingClaims)
    };
}
async function en(e, n, r, round) {
    let u = round.guard.refusedReason();
    if (u !== null) {
        throw btr(u);
    }
    await rt(r, round.root);
    let h = await ye(r, round);
    if (h === null && n.onlyOverReadable) {
        return;
    }
    let y = gtr(OK($Ge(), e.skills), h?.skills, (L)=>L.skillId, n.removedSkillIds, OK($Ge(), n.deferredRows));
    let M = _({
        ...ytr(h, [
            "lastUpdated",
            "skills",
            "staleDirs",
            "pendingClaims"
        ]),
        ...e,
        skills: y,
        staleDirs: Yvn(e.staleDirs, h?.staleDirs, n.staleDirs),
        pendingClaims: Yvn(e.pendingClaims, h?.pendingClaims, n.pendingClaims)
    }, null, 2);
    if (r) {
        let L = await r.write(nt(round.root), M, {
            mode: 438 & ~process.umask(),
            publishDiscipline: "atomic"
        });
        if (!L.ok) {
            J("error", "skills_sync_manifest_write_failed", {
                code: L.error.code
            });
            throw Error("skillsSync: manifest write failed");
        }
        return;
    }
    await En(Ne(round.root), M);
}
function rn(e) {
    return join(e, I5, String(process.pid));
}
function K(e, n) {
    return j4(n, e);
}
async function jn(e, name, r) {
    try {
        let t = K(e, name);
        if (r) {
            let y = await r.read([
                {
                    key: an(t),
                    offset: 0,
                    length: sg + 1
                }
            ]);
            let M = y.ok ? y.value.items[0] : undefined;
            if (!M?.found || M.totalBytes > sg || M.value.byteLength > sg) {
                return null;
            }
            return Buffer.from(M.value).toString("utf8");
        }
        let u = join(t, "SKILL.md");
        let h = await stat(u);
        if (!h.isFile() || h.size > sg) {
            return null;
        }
        return await readFile(u, "utf8");
    } catch  {
        return null;
    }
}
function an(e) {
    return Qn(join(e, "SKILL.md"));
}
async function Xn(e, name, r) {
    try {
        let t = K(e, name);
        if (r) {
            return (await r.statMeta(an(t))).ok;
        }
        return (await stat(join(t, "SKILL.md"))).isFile();
    } catch  {
        return false;
    }
}
async function Gt(e, n) {
    try {
        if (n) {
            let r = await n.statMeta(an(e));
            return !r.ok && r.error.code === "NotFound";
        }
        await stat(join(e, "SKILL.md"));
        return false;
    } catch (error) {
        return z(error) || v(error) === "ENOTDIR";
    }
}
function Wt(e) {
    return {
        skillId: e.id,
        name: e.directory || e.name || e.id,
        description: e.description,
        source: "session-refs",
        updatedAt: null,
        requestedVersion: e.version || undefined
    };
}
function carry(e, n) {
    return {
        ...e,
        backingPluginId: n.backingPluginId
    };
}
const Yt = {
    idOf: (e)=>e.skillId,
    invalidNameTag: "skills_sync_invalid_name",
    collisionTag: "skills_sync_name_collision"
};
function jt(e, skills, r) {
    return Xtr(skills, r, {
        ...Yt,
        dirFor: (t)=>K(e, t),
        carry,
        ...Hn() && {
            markCollisionLoser
        }
    });
}
function markCollisionLoser(e) {
    return {
        ...e,
        updatedAt: rLe
    };
}
function qt(skillName, item, baseDir) {
    let t = aYt({
        skillName,
        displayName: undefined,
        description: K4(item.description),
        hasUserSpecifiedDescription: true,
        markdownContent: "",
        allowedTools: [],
        argumentHint: undefined,
        argumentNames: [],
        whenToUse: undefined,
        version: undefined,
        model: undefined,
        disableModelInvocation: item.disableModelInvocation ?? false,
        userInvocable: item.userInvocable ?? true,
        source: "userSettings",
        baseDir,
        serverAttribution: x3t(item.skillId, item.backingPluginId),
        loadedFrom: "syncedSkills",
        hooks: undefined,
        executionContext: undefined,
        agent: undefined,
        paths: undefined,
        effort: undefined,
        shell: undefined
    });
    if (t.type === "prompt") {
        t.getPromptForCommand = async (u, h)=>{
            let y = await che(skillName);
            if (y.ok) {
                let R = (await Lp(AS(), h.storageV5)).find((S)=>S.loadedFrom === "syncedSkills" && MD(S) === MD(t) && S.name === t.name && S.type === "prompt" && S.getPromptForCommand !== t.getPromptForCommand);
                if (R && R.type === "prompt") {
                    t.source = R.source;
                    t.skillRoot = R.skillRoot;
                    t.contentLength = R.contentLength;
                    t.progressMessage = R.progressMessage;
                    t.userInvocable = R.userInvocable;
                    return R.getPromptForCommand(u, h);
                }
            }
            let M = y.ok ? "skill not found after download" : y.reason;
            return [
                {
                    type: "text",
                    text: !y.ok && y.withheld ? `${Hkn(t.name)} Proceed without it.` : `Skill ${skillName} could not be downloaded (${M}). Proceed without it.`
                }
            ];
        };
    }
    return t;
}
function $t(e, n) {
    return Str({
        root: ()=>n,
        configHome,
        rootLabel,
        event: "skills_sync_root_refused",
        storageV5: e
    });
}
const it = wtr("zip fetch failed");
const Te = Xvn("skill archive unusable or landing obstructed");
async function on(e, { round, credentials, storageV5, replacesAttributedCopy, targetHeldSkillFile, classifyOccupant, markTargetDestroyed }, L) {
    let round_root = round.root;
    let S = K(round_root, e.name);
    let F = join(rn(round_root), relative(round_root, S));
    let w = join(ym(), `claude-skill-${process.pid}-${Math.random().toString(36).slice(2)}.zip`);
    try {
        if (round.guard.refused()) {
            return SSt;
        }
        if (L !== undefined) {
            await writeFile(w, L);
        } else {
            if (!replacesAttributedCopy && targetHeldSkillFile && await classifyOccupant(basename(S)) === "inFlight") {
                J("info", "skills_sync_target_in_flight_elsewhere");
                return x6r;
            }
            if (!await vYo(e.skillId, w, e.requestedVersion, {
                isBackground: true,
                credentials
            })) {
                return it;
            }
        }
        if (!await round.guard.verify()) {
            return SSt;
        }
        await rm(F, {
            recursive: true,
            force: true
        });
        await mkdir(rn(round_root), {
            recursive: true
        });
        await ztr(w, F, {
            skipEntry: (O)=>O.split(/[\\/]/).some((j)=>B4(j))
        });
        let I = F;
        let D = await readdir(F, {
            withFileTypes: true
        });
        if (!D.some((O)=>O.name === "SKILL.md") && D.length === 1 && D[0].isDirectory()) {
            I = join(F, D[0].name);
        }
        try {
            if (!(await stat(join(I, "SKILL.md"))).isFile()) {
                J("warn", "skills_sync_extracted_zip_unusable");
                return Te;
            }
        } catch  {
            J("warn", "skills_sync_extracted_zip_unusable");
            return Te;
        }
        if (await Gtr(I)) {
            J("warn", "skills_sync_extracted_zip_unusable");
            return Te;
        }
        if (!await round.guard.verify()) {
            return SSt;
        }
        if (replacesAttributedCopy) {
            await rm(S, {
                recursive: true,
                force: true
            });
        }
        try {
            await rename(I, S);
        } catch (error) {
            let j = v(error);
            if (replacesAttributedCopy || !Jvn(j)) {
                if (replacesAttributedCopy) {
                    markTargetDestroyed();
                }
                J("warn", "skills_sync_promotion_failed", {
                    code: j ?? "unknown"
                });
                return wSt(j);
            }
            let de = await classifyOccupant(basename(S));
            if (de === "inFlight") {
                J("info", "skills_sync_target_in_flight_elsewhere");
                return x6r;
            }
            if (de === "landed") {
                await rm(S, {
                    recursive: true,
                    force: true
                });
            } else if (!await Ae(S, storageV5)) {
                return B2t;
            }
            try {
                await rename(I, S);
            } catch (err) {
                markTargetDestroyed();
                let N = v(err);
                J("warn", "skills_sync_promotion_failed", {
                    code: N ?? "unknown"
                });
                return wSt(N);
            }
        }
        return k5o;
    } finally{
        await rm(w, {
            force: true
        }).catch(()=>{});
        if (!round.guard.refused() && await zj(round_root, configHome(), {
            event: "skills_sync_root_refused",
            phase: "sweep",
            rootLabel
        }, {
            checkStagingLeaf: true,
            storageV5
        }).catch(()=>null) === "real") {
            await rm(F, {
                recursive: true,
                force: true
            }).catch(()=>{});
        }
    }
}
const Zt = 500;
async function Jt(item, n) {
    try {
        return await on(item, n, undefined);
    } catch  {
        J("warn", "skills_sync_extract_retry");
        await Q(Zt);
        return on(item, n, undefined);
    }
}
async function Qt(item, n) {
    let { fromHostMount } = n;
    if (fromHostMount !== undefined) {
        let t = await on(item, n, fromHostMount.zip).catch(()=>null);
        if (t?.ok) {
            n.markLandedFromHostMount();
        }
        if (t !== null && (t.ok || t.cause !== "extract")) {
            return t;
        }
        xso(fromHostMount.kind, {
            reason: t === null ? "landing_threw" : "zip_unusable"
        }, n.hostMountMissCounts);
    }
    return Jt(item, n);
}
async function ln(e, n, r, t) {
    let u = Gu();
    if (u.syncPromise) {
        return u.syncPromise;
    }
    u.syncPromise = ei(e, n, r, t).finally(()=>{
        u.syncPromise = null;
    });
    return u.syncPromise;
}
async function Vt(e, n) {
    let r = join(e, BM);
    let t;
    let u;
    let h;
    try {
        u = (await E_(r, NGe)).content;
        h = X(u);
    } catch  {
        return null;
    }
    let y = Ut().safeParse(h);
    if (y.success) {
        let { lastUpdated, skills, staleDirs, pendingClaims, ...rest } = y.data;
        t = {
            ...rest,
            lastUpdated,
            skills: OK(Kt(), skills),
            staleDirs: qZe(staleDirs),
            pendingClaims: qZe(pendingClaims)
        };
    } else {
        return null;
    }
    let M = [
        ...t.skills.map((row)=>({
                row,
                syntheticListName: null
            })),
        ...[
            "staleDirs",
            "pendingClaims"
        ].flatMap((syntheticListName)=>(t[syntheticListName] ?? []).map((entry)=>({
                    row: {
                        name: syntheticListName === "pendingClaims" ? dit(entry).name : entry
                    },
                    syntheticListName,
                    entry
                })))
    ];
    let L = 0;
    let R = [];
    let S = [];
    let F = [];
    for (let w of M){
        let I = w.row;
        if (w.syntheticListName === "pendingClaims" && await cn(w.entry)) {
            F.push(w.entry);
            continue;
        }
        try {
            let D = C4e(I.name, e);
            if (await oVt(D, V())) {
                J("info", "skills_sync_sibling_root_row_skipped");
                continue;
            }
            if (await oVt(D, Pe())) {
                J("info", "skills_sync_trash_root_row_skipped");
                continue;
            }
            if (await Ae(D, n)) {
                L++;
            } else if (w.syntheticListName === "staleDirs") {
                S.push(w.entry);
            } else if (w.syntheticListName === "pendingClaims") {
                F.push(w.entry);
            } else {
                R.push(w.row);
            }
        } catch (error) {
            if (error instanceof T4e) {
                if (w.syntheticListName === "staleDirs") {
                    S.push(w.entry);
                } else if (w.syntheticListName === "pendingClaims") {
                    F.push(w.entry);
                } else {
                    R.push(w.row);
                }
                continue;
            }
        }
    }
    if (R.length > 0 || S.length > 0 || F.length > 0) {
        let w = _({
            ...t,
            skills: R,
            staleDirs: S.length > 0 ? S : undefined,
            pendingClaims: F.length > 0 ? F : undefined
        }, null, 2);
        if (w !== u) {
            await En(r, w).catch(()=>{});
        }
    } else {
        await rm(r, {
            force: true
        }).catch(()=>{});
    }
    return L;
}
async function ei(e, n, credentials, t) {
    let u = Date.now();
    let h = performance.now();
    let y = false;
    let M = false;
    let account_opt_in = false;
    let idle = false;
    let S = ()=>{
        let duration_ms = Date.now() - u;
        return {
            account_opt_in,
            idle,
            woken: "woken" in t,
            trigger: d(t.trigger),
            ..."tickLateMs" in t && {
                tick_late_ms: t.tickLateMs
            },
            duration_ms,
            suspended_ms: Math.max(0, Math.round(duration_ms - (performance.now() - h)))
        };
    };
    let F = new Map;
    let w = false;
    let I = null;
    let D = Gu();
    let O = false;
    let listedDirs = null;
    let removalTriedDirs = new Set;
    let ke = false;
    try {
        account_opt_in = Tsn();
        if (ySt()) {
            account_opt_in = true;
        }
        if (!Xae(e) || !_St()) {
            J("info", "skills_sync_gate_closed");
            let { placeholders, listedOwnerships } = Gu();
            listedOwnerships.clear();
            if (placeholders.size > 0) {
                placeholders.clear();
                vie();
            }
            f("skills_sync_round", "gate_closed", S());
            return;
        }
        if (v5o()) {
            J("info", "skills_sync_policy_verdict_pending");
            f("skills_sync_round", "policy_verdict_pending", S());
            return;
        }
        let bucket = await $M(credentials);
        if (bucket === null) {
            J("info", "skills_sync_bucket_unresolved");
            f("skills_sync_round", "bucket_unresolved", S());
            return;
        }
        let round = $t(n, Jn(bucket));
        I = round;
        let C = round.root;
        idle = t.trigger === "resync" && !("woken" in t) && D.consecutiveFailedRounds === 0 && !Okn(e) && Fn();
        let ue = await zn({
            syncedRoot: V(),
            bucket,
            root: C,
            trigger: t.trigger,
            pinned: yB(e),
            lastGeneration: D.bucketGeneration,
            holdsPlaceholders: D.placeholders.size > 0,
            idle
        });
        if (!ue.list) {
            D.bucketGeneration = ue.generation;
            if (ue.reload) {
                let s = await ye(n, round);
                if (s) {
                    let l = new Set;
                    for (let b of s.skills){
                        try {
                            l.add(basename(K(C, b.name)));
                        } catch  {}
                    }
                    s7r(l);
                }
                listedDirs = new Set;
                vie();
            }
            g("skills_sync_round", {
                ...S(),
                reused: true,
                reloaded: ue.reload
            });
            return;
        }
        ke = true;
        J("info", "skills_sync_starting");
        let x;
        let Se = [];
        let ot = performance.now();
        if (yB(e)) {
            let [s, l] = await Promise.all([
                aLe.of(e).listEntries("skills", {
                    startup: t.trigger === "startup"
                }),
                a.CLAUDE_CODE_SYNC_SKILLS ? Pzt({
                    isBackground: true,
                    credentials
                }) : null
            ]);
            if (!s.success) {
                x = s;
            } else {
                Se = s.entries.map(Wt);
                if (l === null) {
                    x = {
                        success: true,
                        skills: Se
                    };
                } else if (!l.success) {
                    x = l;
                } else {
                    x = {
                        success: true,
                        skills: Ytr(Se, l.skills, (b)=>b.skillId, (b, A)=>({
                                ...carry(b, A),
                                userInvocable: A.userInvocable,
                                disableModelInvocation: A.disableModelInvocation
                            }))
                    };
                }
            }
        } else {
            x = await Pzt({
                isBackground: true,
                credentials
            });
        }
        let list_ms = Math.round(performance.now() - ot);
        O = !x.success && Tce(x);
        if (O) {
            J("warn", "skills_sync_list_refused");
            D.listedOwnerships.clear();
            x = {
                success: true,
                skills: Se
            };
        }
        if (!x.success) {
            D.consecutiveFailedRounds++;
            let s = UMn(x);
            let l = {
                ...S(),
                ...s
            };
            J("warn", "skills_sync_list_failed", l);
            i("tengu_skills_sync_list_failed", l);
            if ((x.kind === "timeout" || x.kind === "network" || x.kind === "http") && l.suspended_ms > De) {
                f("skills_sync_round", "suspended", l);
            } else {
                m("skills_sync_round", "list_failed", l);
            }
            return;
        }
        D.consecutiveFailedRounds = O ? D.consecutiveFailedRounds + 1 : 0;
        if (!await s3(V(), bucket) && await lstat(C).then((s)=>s.isDirectory(), ()=>false) && await Pae({
            dir: C,
            trashRoot: Pe(),
            configHome: configHome(),
            failureEvent: "skills_sync_trash_move_failed",
            storageV5: n
        }).catch(()=>false)) {
            J("info", "skills_sync_unmarked_bucket_quarantined");
        }
        await rt(n, C);
        await vtr(V(), bucket);
        w = true;
        let ge = await EEn(C);
        if (ue.shared && ge !== null && D.bucketGeneration !== null && ge.token !== D.bucketGeneration) {
            vie();
        }
        await Ht(n);
        let ee = await ye(n, round);
        let { toDownload, toRemove, carryover, liveDirs, carryoverOwningLiveDir } = jt(C, x.skills, ee?.skills ?? []);
        let lt = sVt(liveDirs);
        let xe = async (s)=>{
            let l;
            try {
                l = C4e(s, C);
            } catch (error) {
                if (error instanceof T4e) {
                    return false;
                }
                return true;
            }
            let b = await lt(l);
            if (b === "live") {
                return true;
            }
            if (b === "indeterminate") {
                return false;
            }
            removalTriedDirs.add(l);
            return Ae(l, n);
        };
        let Be = new Set(Array.from(liveDirs, (s)=>basename(s)));
        let ct = s7r(Be);
        if (iJo(Be) + ct > 0) {
            WC();
            sn();
            JU.emit();
        }
        listedDirs = liveDirs;
        let dt = await Promise.all(carryover.map((s)=>{
            if (carryoverOwningLiveDir.has(s.skillId)) {
                return Xn(C, s.name, n);
            }
            return null;
        }));
        let ze = new Set;
        for (let [s, l] of carryover.entries()){
            let b = dt[s];
            if (b === null) {
                continue;
            }
            if (!b) {
                let item_1 = x.skills.find((H)=>H.skillId === l.skillId);
                if (item_1) {
                    ze.add(l.skillId);
                    toDownload.push({
                        item: item_1
                    });
                }
                continue;
            }
            let A = basename(K(C, l.name));
            if (D.placeholders.delete(A)) {
                D.pendingDownloads.get(A)?.resolve({
                    ok: true
                });
                D.pendingDownloads.delete(A);
                E2();
                WC();
                M = true;
                J("info", "skills_sync_materialized_elsewhere");
            }
        }
        let ut = carryover.filter((s)=>!ze.has(s.skillId));
        let pe = new Map(carryover.filter((s)=>ze.has(s.skillId)).map((s)=>[
                s.skillId,
                s
            ]));
        let Y = new Set(ee?.staleDirs ?? []);
        let staleDirs = new Set;
        let q = new Set;
        let He = {
            pid: process.pid,
            procStart: await Fl(process.pid)
        };
        let Ue = [];
        if (ee?.pendingClaims) {
            let s = ee.pendingClaims;
            let l = new Set;
            for (let b of s){
                if (await cn(b)) {
                    l.add(dit(b).name);
                } else {
                    Ue.push(b);
                }
            }
            for (let b of Ue){
                let { name } = dit(b);
                if (l.has(name) || Be.has(name)) {
                    continue;
                }
                Y.add(name);
                q.add(b);
            }
        }
        for (let s of Y){
            if (await xe(s)) {
                Y.delete(s);
                staleDirs.add(s);
            }
        }
        if (staleDirs.size > 0 || q.size > 0) {
            M = true;
        }
        let we = htr(ee?.skills ?? [], [
            ...carryover,
            ...toDownload.flatMap(({ prev })=>prev ?? [])
        ], (s)=>s.skillId, (s, l)=>s.backingPluginId === l.backingPluginId && s.updatedAt === rLe === (l.updatedAt === rLe));
        if (toDownload.length === 0 && toRemove.length === 0) {
            if (M) {
                vie();
            }
            if ((staleDirs.size > 0 || q.size > 0 || we.attributionMoved) && ee) {
                await en({
                    lastUpdated: ee.lastUpdated,
                    skills: we.rows,
                    staleDirs: Y.size > 0 ? Array.from(Y) : undefined,
                    pendingClaims: undefined
                }, {
                    staleDirs,
                    pendingClaims: q,
                    removedSkillIds,
                    deferredRows
                }, n, round);
            }
            if (ee) {
                let b = new Date;
                await lutimes(Ne(C), b, b).catch(()=>{});
            }
            let s = M ? null : ge;
            Gn(await iVt(C, "skills", Y.size === 0 && !O && !yB(e), s, Le()), s);
            J("info", "skills_sync_no_changes", {
                duration_ms: Date.now() - u,
                list_ms,
                ...t.trigger === "startup" && {
                    first_message_gate_open_ms: Math.round(performance.now() - h)
                }
            });
            let l = {
                ...S(),
                no_changes: true
            };
            if (O) {
                f("skills_sync_round", "not_entitled", l);
            } else {
                g("skills_sync_round", l);
            }
            return;
        }
        let un = 0;
        for (let { item, prev } of toDownload){
            if (!prev) {
                let b = K(C, item.name);
                oJo(qt(basename(b), item, b));
                un++;
                F.set(item.skillId, tJo(basename(K(C, item.name))));
            }
        }
        if (un > 0) {
            WC();
            sn();
            JU.emit();
        }
        let fn = true;
        try {
            let s = [];
            for (let { item } of toDownload){
                try {
                    s.push(Uhr(basename(K(C, item.name)), He));
                } catch  {}
            }
            if (s.length > 0) {
                await en({
                    lastUpdated: ee?.lastUpdated ?? 0,
                    skills: we.rows,
                    staleDirs: Y.size > 0 ? Array.from(Y) : undefined,
                    pendingClaims: s
                }, {
                    staleDirs,
                    pendingClaims: q,
                    removedSkillIds,
                    deferredRows
                }, n, round);
            }
        } catch (error) {
            if (error instanceof QX) {
                throw error;
            }
            fn = false;
            J("warn", "skills_sync_pending_claims_write_failed");
        }
        tn().resolve();
        let first_message_gate_open_ms = Math.round(performance.now() - h);
        if (!fn) {
            m("skills_sync_round", "pending_claims_write_failed", S());
            if (M) {
                vie();
            }
            return;
        }
        let ie = [];
        let Ke = [];
        let mn = [];
        let deferredRows_1 = [];
        let deferred = 0;
        let _n = 0;
        let le = {};
        let yn = ({ item, prev })=>{
            if (prev === undefined && !pe.has(item.skillId)) {
                return wds(item);
            }
        };
        let kn = toDownload.flatMap((s)=>yn(s) ?? []);
        let Sn = new Set(kn);
        let hostMountMissCounts = new Map;
        let gn = (s)=>{
            J("warn", "skills_sync_host_mount_threw");
            c(W(s));
            return null;
        };
        let pn = Sn.size > 0 ? vds(Sn, hostMountMissCounts).catch(gn) : null;
        let Me = new Set;
        let wn = new Map;
        await Promise.all(toDownload.map(rl(Ve, async ({ item })=>{
            wn.set(item, await jn(C, item.name, n));
        })));
        await Promise.all(toDownload.map(Bps(Ve, async (s)=>{
            let kind = yn(s);
            if (kind === undefined) {
                return;
            }
            let zip = await (await pn)?.readZip(kind, s.item).catch(gn);
            if (zip) {
                return {
                    kind,
                    zip
                };
            }
        }, async ({ item, prev }, fromHostMount)=>{
            let A = wn.get(item) ?? null;
            let P = it;
            try {
                P = await Qt(item, {
                    round,
                    credentials,
                    storageV5: n,
                    classifyOccupant: (H)=>ni(H, n, round),
                    markTargetDestroyed: ()=>{
                        y = true;
                    },
                    replacesAttributedCopy: prev !== undefined && await st(C, prev.name, item.name) || pe.has(item.skillId),
                    targetHeldSkillFile: Ie() && A !== null,
                    fromHostMount,
                    markLandedFromHostMount: ()=>{
                        Me.add(item.skillId);
                    },
                    hostMountMissCounts
                });
            } catch  {
                P = Te;
                J("warn", "skills_sync_extract_failed");
            }
            if (P.ok) {
                ie.push(item);
                let H = prev !== undefined && prev.name !== item.name;
                if (H || (A === null ? prev !== undefined || pe.has(item.skillId) : A !== await jn(C, item.name, n))) {
                    Ke.push(item);
                }
                if (H) {
                    Ke.push(prev);
                }
                if (prev && prev.name !== item.name) {
                    if (!await xe(prev.name)) {
                        Y.add(prev.name);
                    }
                }
                sJo(basename(K(C, item.name)));
                E2();
                WC();
                g("skills_sync_download", {
                    landed_from_mount: Me.has(item.skillId)
                });
            } else {
                let H = T5o(P.cause);
                if (H === null) {
                    deferred++;
                    J("info", "skills_sync_landing_deferred");
                } else {
                    le[H] = (le[H] ?? 0) + 1;
                    m("skills_sync_download", H);
                }
                let ce = prev ?? pe.get(item.skillId);
                if (ce && P.cause === "deferred") {
                    deferredRows_1.push(ce);
                    if (prev && prev.name !== item.name) {
                        Y.add(prev.name);
                        _n++;
                    }
                } else if (ce) {
                    mn.push(ce);
                } else {
                    try {
                        let Z = K(C, item.name);
                        if (await lstat(Z).then(()=>false, (kt)=>z(kt))) {
                            q.add(Uhr(basename(Z), He));
                        }
                    } catch  {}
                }
            }
            F.get(item.skillId)?.(P.ok ? {
                ok: true
            } : {
                ok: false,
                reason: A5o(P.cause)
            });
        })));
        let me = [];
        await Promise.all(toRemove.map(rl(Ve, async (s)=>{
            if (!await xe(s.name)) {
                me.push(s);
            }
        })));
        let removedSkillIds_1 = new Set(toRemove.map((s)=>s.skillId));
        for (let s of me){
            removedSkillIds_1.delete(s.skillId);
        }
        let je = ie.length > 0 || y || me.length < toRemove.length || staleDirs.size > 0 || q.size > 0;
        let mt = je || _n > 0 || we.attributionMoved;
        let hn = toRemove.filter((s)=>removedSkillIds_1.has(s.skillId));
        let yt = await Promise.all(hn.map((s)=>Xn(C, s.name, n)));
        let Mn = [
            ...Ke,
            ...hn.filter((s, l)=>!yt[l])
        ].flatMap((s)=>{
            try {
                return [
                    sRe(basename(C4e(s.name, C)))
                ];
            } catch  {
                return [];
            }
        });
        K8o(Mn);
        if (Mn.length > 0) {
            WC();
        }
        if (je || M) {
            vie();
        }
        let Re = false;
        if (mt) {
            let s = [
                ...ut,
                ...ie,
                ...mn,
                ...me
            ];
            let l = new Set;
            for (let P of [
                ...s,
                ...deferredRows_1
            ]){
                try {
                    l.add(basename(K(C, P.name)));
                } catch  {}
            }
            for (let P of l){
                q.add(Uhr(P, He));
            }
            for (let P of Ue){
                if (l.has(dit(P).name)) {
                    q.add(P);
                }
            }
            let b = (P, onlyOverReadable)=>en({
                    lastUpdated: Date.now(),
                    skills: P,
                    staleDirs: Y.size > 0 ? Array.from(Y) : undefined
                }, {
                    staleDirs,
                    pendingClaims: q,
                    removedSkillIds: removedSkillIds_1,
                    deferredRows: deferredRows_1,
                    onlyOverReadable
                }, n, round);
            await b(s, false);
            let A = ie.length > 0 && Ie() ? 2 : 0;
            for(let P = 0; P < A; P++){
                await Q(D.lostRowsRecheckMs * (1 + Math.random()));
                let H = await ye(n, round);
                let ce = new Set(H?.skills.map((Z)=>Z.skillId));
                Re = !ie.every((Z)=>ce.has(Z.skillId));
                if (!Re) {
                    break;
                }
                if (H === null) {
                    continue;
                }
                J("info", "skills_sync_manifest_rows_lost");
                try {
                    await b(ie, true);
                } catch (error) {
                    if (error instanceof QX) {
                        throw error;
                    }
                    c(W(error));
                    break;
                }
            }
            if (Re) {
                J("warn", "skills_sync_manifest_rows_unconfirmed");
            }
        }
        let failed = toDownload.length - ie.length - deferred;
        let Rn = await pn;
        let qe = {
            downloaded: ie.length - Me.size,
            from_mount: Me.size,
            mount_eligible: kn.length,
            mount_read_ms: Rn?.spentMs() ?? 0,
            mount_wait_ms: Rn?.waitedMs() ?? 0,
            ...WMn(hostMountMissCounts)
        };
        J("info", "skills_sync_complete", {
            ...qe,
            removed: toRemove.length,
            duration_ms: Date.now() - u,
            list_ms,
            ...t.trigger === "startup" && {
                first_message_gate_open_ms
            }
        });
        let Dn = S();
        i("tengu_skills_sync_success", {
            ...Dn,
            ...qe,
            removed: toRemove.length,
            total: x.skills.length
        });
        let vn = je || M ? null : ge;
        Gn(await iVt(C, "skills", !O && failed === 0 && deferred === 0 && !Re && me.length === 0 && Y.size === 0 && !yB(e), vn, Le()), vn);
        let Ze = {
            ...Dn,
            ...qe,
            deferred,
            removed: toRemove.length,
            total: x.skills.length
        };
        if (failed > 0) {
            f("skills_sync_round", "download_failed", {
                ...Ze,
                failed,
                download_failed: le.download_failed ?? 0,
                extract_failed: le.extract_failed ?? 0,
                root_refused: le.root_refused ?? 0,
                local_failed: le.local_failed ?? 0
            });
        } else if (O) {
            f("skills_sync_round", "not_entitled", Ze);
        } else {
            g("skills_sync_round", Ze);
        }
    } catch (error) {
        if (M || y) {
            vie();
        }
        if (error instanceof QX && w) {
            J("warn", "skills_sync_late_root_refusal", {
                reason: error.reason,
                duration_ms: Date.now() - u
            });
            f("skills_sync_round", "root_refused", S());
            w = false;
        } else if (error instanceof QX) {
            J("warn", "skills_sync_root_refused_round", {
                reason: error.reason,
                duration_ms: Date.now() - u
            });
            f("skills_sync_round", "root_refused", S());
        } else {
            if (!O) {
                D.consecutiveFailedRounds++;
            }
            J("error", "skills_sync_unexpected_error", {
                duration_ms: Date.now() - u
            });
            let G = S();
            i("tengu_skills_sync_error", G);
            m("skills_sync_round", "unexpected_error", G);
        }
    } finally{
        if (ke) {
            xn();
        }
        for (let N of F.values()){
            N({
                ok: false,
                reason: "skills sync failed"
            });
        }
        tn().resolve();
        if (listedDirs !== null && I !== null) {
            await w5o({
                bucketRoot: I.root,
                listedDirs,
                removalTriedDirs,
                isSkillFileGone: (N)=>Gt(N, n)
            }).catch(()=>{
                J("warn", "skills_sync_hooks_removal_failed");
            });
        }
        if (I === null || I.guard.refused()) {
            w = false;
        }
        if (w && I !== null) {
            if (await zj(I.root, configHome(), {
                event: "skills_sync_root_refused",
                phase: "sweep",
                rootLabel
            }, {
                checkStagingLeaf: true,
                storageV5: n
            }).catch(()=>null) === "real") {
                await rm(rn(I.root), {
                    recursive: true,
                    force: true
                }).catch(()=>{});
            }
        }
    }
}
async function cn(e) {
    let { ownerPid, ownerProcStart } = dit(e);
    return ownerPid !== undefined && ownerPid !== process.pid && _a(ownerPid) && await Hw(ownerPid, ownerProcStart);
}
async function ni(e, n, round) {
    let t = await ye(n, round);
    if (!t) {
        return "unattributed";
    }
    for (let u of t.skills){
        if (await st(round.root, u.name, e)) {
            return "landed";
        }
    }
    for (let u of t.pendingClaims ?? []){
        if (dit(u).name === e && await cn(u)) {
            if (!Ie()) {
                return "inFlight";
            }
            let h = await lstat(join(round.root, e)).then((y)=>Math.floor(y.ctimeMs), (y)=>{
                if (z(y)) {
                    return -Infinity;
                }
                J("warn", "skills_sync_occupant_unreadable", {
                    code: v(y) ?? "unknown"
                });
                return Infinity;
            });
            if (!(Date.now() - h >= Bt)) {
                return "inFlight";
            }
            J("info", "skills_sync_live_claim_timed_out");
            return "unattributed";
        }
    }
    return "unattributed";
}
async function st(e, name, r) {
    try {
        let t = K(e, name);
        let u = K(e, r);
        return basename(t) === basename(u) || await oVt(t, u);
    } catch  {
        return false;
    }
}
function rt(e, root) {
    return _tr({
        root,
        trashRoot: Pe(),
        configHome: configHome(),
        events: {
            refused: "skills_sync_root_refused"
        },
        storageV5: e
    });
}
export { vUo, Ave, EUo, kUo, TUo, tpn, vie, npn };
