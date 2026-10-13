import { jb, Jt } from "/$bunfs/root/chunk-dn762950.js";
import { lt, K, k_, we, jR, Xc, sU, gp, qDt, KDt, Ce, zse, F2n } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b, d, pe } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { v, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze, Bn, my, gy, Qa, Va, Wb, _m, ks, pG } from "/$bunfs/root/chunk-xgw72tt1.js";
import { u7, zwr, Xr, tvr, Eh, dN, G$e, m_, We, Dt, jp, _7, ey, cd, TOt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { YOs, DO, kPe, mf, Vy, Gm, Rn, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Fb, yZ, HCr } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { Ph } from "/$bunfs/root/chunk-3fj60qgx.js";
import { LR, ss } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { xp, g0 } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Fm } from "/$bunfs/root/chunk-52bcnmbr.js";
import { JRs, qd } from "/$bunfs/root/chunk-nj0630nv.js";
import { Si } from "/$bunfs/root/chunk-6dwnw6av.js";
import { sl } from "/$bunfs/root/chunk-pp3y3t61.js";
import { Ep, DW } from "/$bunfs/root/chunk-y9c4grt0.js";
import { Z9 } from "/$bunfs/root/chunk-br4dwjb6.js";
import { i3, nEn, yke, sXo, rg, a2, Ex, UVt, BK, dhe, Ake, Qae, CA, l2e, Jkn, Qkn, sp, ivt, $ke, dAn, vm, Na, kle, M3, Fhe, Uhe, kDe, sW, iW, wD, Ghe, zt } from "/$bunfs/root/chunk-kasbfbhj.js";
import { _Ee, IJn, sze, l7e, QOe } from "/$bunfs/root/chunk-xgkvr5a2.js";
import { Sc } from "/$bunfs/root/chunk-18a8x2hz.js";
import { Vx, sR, $W } from "/$bunfs/root/chunk-4r6b8efh.js";
import { cc, mV } from "/$bunfs/root/chunk-tn496ms6.js";
import { gCe } from "/$bunfs/root/chunk-e0hrcpx7.js";
import { lde } from "/$bunfs/root/chunk-tf8026s8.js";
import { Bce } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { cS, jc } from "/$bunfs/root/chunk-38fr02qr.js";
import { FLe } from "/$bunfs/root/chunk-k5fhce8z.js";
import { xr } from "/$bunfs/root/chunk-c5mcach4.js";
import { $ye } from "/$bunfs/root/chunk-gzx737w6.js";
import { ire } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { Nx } from "/$bunfs/root/chunk-tsssve1m.js";
import { ADn, xst } from "/$bunfs/root/chunk-cwfjj64b.js";
import { Lx } from "/$bunfs/root/chunk-5ne6jp11.js";
import { qze } from "/$bunfs/root/chunk-dppr3smv.js";
import { vJe } from "/$bunfs/root/chunk-tjf7h9ea.js";
import { IUo, Xfe } from "/$bunfs/root/chunk-9mqn6drc.js";
import { Fgt } from "/$bunfs/root/chunk-kggzh6a8.js";
import { y_n, m7e } from "/$bunfs/root/chunk-x9r1n22t.js";
import { Yme } from "/$bunfs/root/chunk-hd6djnda.js";
import { qVr, KVr } from "/$bunfs/root/chunk-p7g4jxq3.js";
import { Ht, Dn } from "/$bunfs/root/chunk-77t63btp.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { appendFile, readdir, rename, rmdir, open, unlink } from "fs/promises";
import { basename, dirname, join, relative, resolve, win32 } from "path";
import { realpathSync, statSync } from "fs";
class Y {
    filePath = null;
    key = undefined;
    timestamp = 0;
    recorder = null;
    failed = false;
    setFile(e, r, o) {
        this.filePath = e;
        this.key = o;
        this.timestamp = r;
    }
    setFilePath(e, r) {
        this.filePath = e;
        this.key = r;
    }
    setRecorder(e) {
        this.recorder = e;
    }
    markFailed() {
        this.failed = true;
    }
}
function ce(projectKey, sessionId, timestamp) {
    return {
        namespace: "recording",
        projectKey,
        sessionId,
        stamp: String(timestamp)
    };
}
const fe = new lt(()=>new Y);
async function rpn(e, r) {
    let o = fe.of(e);
    let o_filePath = o.filePath;
    if (!o_filePath || o.timestamp === 0) {
        return;
    }
    let s = Ph(we());
    let o_key = o.key;
    let l = DW(s);
    if (j() && r !== undefined && o_key !== undefined && l !== undefined) {
        if (o.failed) {
            return;
        }
        let y = K();
        let S = join(s, y, `${o.timestamp}.cast`);
        if (o_filePath === S) {
            return;
        }
        let T = ce(l, y, o.timestamp);
        let k = relative(s, o_filePath);
        let R = relative(s, S);
        let P = async ()=>{
            if (o.failed) {
                return;
            }
            try {
                await ge(r, o_key, T);
                o.setFilePath(S, T);
                t(`[asciicast] Renamed recording: ${k} \u2192 ${R}`);
            } catch  {
                t(`[asciicast] Failed to rename recording from ${k} to ${R}`);
            }
        };
        await (o.recorder?.park(P) ?? P());
        return;
    }
    let m = join(s, `${K()}-${o.timestamp}.cast`);
    if (o_filePath === m) {
        return;
    }
    await o.recorder?.flush();
    let p = basename(o_filePath);
    let h = basename(m);
    try {
        await rename(o_filePath, m);
        o.setFilePath(m);
        t(`[asciicast] Renamed recording: ${p} \u2192 ${h}`);
    } catch  {
        t(`[asciicast] Failed to rename recording from ${p} to ${h}`);
    }
}
async function ge(e, r, o) {
    YOs(await e.move(r, o));
    await rmdir(join(Ep(), r.projectKey, r.sessionId)).catch(()=>{});
}
const Se = 200;
const ke = 64;
function O() {
    if (Ce() || Na()) {
        return null;
    }
    try {
        return join(Vx(), K(), qVr);
    } catch (error) {
        t(`Image store unavailable: ${error}`, {
            level: "warn"
        });
        return null;
    }
}
function AUo() {
    return O() !== null;
}
async function h3n() {
    let e = O();
    if (e === null) {
        return 0;
    }
    let r;
    try {
        r = await readdir(e);
    } catch (error) {
        if (!jt(error)) {
            t(`Could not list stored images: ${error}`, {
                level: "warn"
            });
        }
        return 0;
    }
    let o = 0;
    for (let n of r){
        let s = Number(KVr.exec(n)?.[1]);
        if (Number.isSafeInteger(s) && s > o) {
            o = s;
        }
    }
    return o;
}
function J(e) {
    if (!Number.isSafeInteger(e.id) || e.id < 0 || typeof e.content !== "string" || e.content === "") {
        return null;
    }
    let r = O();
    if (r === null) {
        return null;
    }
    let o = xst(e.content.slice(0, ke));
    return join(r, `${e.id}.${ADn[o]}`);
}
function Cve(e, r) {
    if (e.type !== "image") {
        return null;
    }
    let o = J(e);
    if (o !== null) {
        r((n)=>N(n, e.id, o));
    }
    return o;
}
async function Rve(e, r) {
    let o = await Q(e);
    if (o) {
        r((n)=>N(n, e.id, o));
    }
    return o;
}
async function CUo(e, r) {
    let o = new Map;
    for (let [n, s] of Object.entries(e)){
        if (s.type === "image") {
            let u = await Q(s);
            if (u) {
                o.set(Number(n), u);
            }
        }
    }
    if (o.size > 0) {
        r((n)=>{
            let s = n;
            for (let [u, l] of o){
                s = N(s, u, l);
            }
            return s;
        });
    }
    return o;
}
async function Q(e) {
    if (e.type !== "image") {
        return null;
    }
    try {
        let r = J(e);
        if (r === null) {
            return null;
        }
        let o = await Fb(r, [
            r
        ], {
            createParents: true,
            leaf: "replace"
        });
        let n = LR(o.ioPath);
        let s = false;
        try {
            let u = await open(n, "wx", 384);
            s = true;
            try {
                await u.writeFile(e.content, {
                    encoding: "base64"
                });
                await u.datasync();
            } finally{
                await u.close();
            }
            await o.recheckBeforeWrite();
            try {
                await ss(n, o.ioPath);
            } catch (error) {
                if (v(error) !== "EEXIST") {
                    throw error;
                }
                await o.recheckBeforeWrite();
                await unlink(o.ioPath).catch(()=>{});
                await o.recheckBeforeWrite();
                await ss(n, o.ioPath);
            }
            s = false;
        } finally{
            if (s) {
                try {
                    await o.recheckBeforeWrite();
                    await unlink(n);
                } catch  {}
            }
            await o.close();
        }
        t(`Stored image ${e.id} to ${r}`);
        return r;
    } catch (error) {
        t(`Failed to store image: ${error}`);
        return null;
    }
}
function N(e, r, o) {
    if (e.get(r) === o) {
        return e;
    }
    let n = new Map(e);
    if (!n.has(r)) {
        while(n.size >= Se){
            let s = n.keys().next().value;
            if (s === undefined) {
                break;
            }
            n.delete(s);
        }
    }
    n.set(r, o);
    return n;
}
function Fje(e) {
    if (!e || !y_n(e.hooks)) {
        F2n(undefined);
        return;
    }
    let r = !cc("hooks") || mV(e.source);
    let o = dhe(e);
    if (r && o) {
        F2n(Bce(e) ? Z(e.hooks, "personal") : m7e(e.source) ? Z(e.hooks, "checkout") : e.hooks);
        return;
    }
    if (r && !o) {
        Ake(e, "mainThread");
    }
    F2n(undefined);
}
function Z(hooks, r) {
    let o = {};
    for (let n of xp){
        let s = hooks[n];
        if (s !== undefined) {
            o[n] = s.map((u)=>{
                if (r === "personal") {
                    return {
                        ...u,
                        personal: true
                    };
                }
                return {
                    ...u,
                    checkout: true
                };
            });
        }
    }
    return o;
}
const ee = ze({
    recorded: null
}, (e)=>{
    e.recorded = null;
});
function y3n({ sourceSessionId, transcriptPath }) {
    let sessionId = Jt(sourceSessionId);
    ee.recorded = sessionId === null ? null : {
        liveSessionId: K(),
        source: {
            sessionId,
            transcriptPath: transcriptPath ?? vm(sessionId)
        }
    };
}
function RNr() {
    let { recorded } = ee;
    if (recorded !== null && recorded.liveSessionId === K()) {
        return recorded.source;
    }
    return null;
}
function be(messages) {
    for(let r = messages.length - 1; r >= 0; r--){
        let o = messages[r];
        if (o?.type !== "assistant") {
            continue;
        }
        let n = o.message.content.find((l)=>l.type === "tool_use" && l.name === Lx);
        if (!n || n.type !== "tool_use") {
            continue;
        }
        let s = n.input;
        if (s === null || typeof s !== "object") {
            return [];
        }
        let u = l2e().safeParse(s.todos);
        if (u.success) {
            return u.data;
        }
        return [];
    }
    return [];
}
function xNr(e) {
    if (typeof e.resume !== "string" || e.forkSession || e.hasSessionIdFlag) {
        return false;
    }
    let r = Jt(e.resume);
    if (!r) {
        return false;
    }
    k_(jb(r), "resume");
    return true;
}
function Rgt(e, r, o, n) {
    try {
        $ke(e.messages ?? []);
    } catch (error) {
        c(error);
    }
    h3n().then(dAn).catch(c);
    if (e.fileHistorySnapshots && e.fileHistorySnapshots.length > 0) {
        UVt(e.fileHistorySnapshots, (fileHistory)=>{
            r((u)=>({
                    ...u,
                    fileHistory
                }));
        });
    }
    import.meta.require("/$bunfs/root/chunk-chcv3v90.js").restoreGoalFromTranscript(e.messages, r, o);
    if (!Nx() && e.messages && e.messages.length > 0) {
        let s = be(e.messages);
        if (s.length > 0) {
            let u = K();
            r((l)=>({
                    ...l,
                    todos: {
                        ...l.todos,
                        [u]: s
                    }
                }));
        }
    }
}
function Ae(e) {}
function xgt(e, r) {
    if (!e && !r) {
        return;
    }
    return {
        name: e ?? "",
        color: r === "default" ? undefined : r
    };
}
function Yfe(e, r, o, n) {
    if (r) {
        return {
            agentDefinition: r,
            agentType: undefined
        };
    }
    if (!e) {
        zse(undefined);
        Fje(undefined);
        return {
            agentDefinition: undefined,
            agentType: undefined
        };
    }
    let s = n?.sessionAgentDefinitions ? BK(n.sessionAgentDefinitions.activeAgents, e) : undefined;
    let u = s ?? BK(o.activeAgents, e);
    if (s) {
        t(`Resume: agent "${e}" restored from the session home set (${n?.sessionCwd ?? "unknown"})`);
    }
    if (!u) {
        t(`Resumed session had agent "${e}" but it is no longer available. Using default behavior.`);
        if (e !== qze.agentType) {
            f("session_resume", "agent_resolve_miss");
            if (n?.onResolveMiss) {
                let l = we();
                let m = n.sessionAgentDefinitions && n.sessionCwd && n.sessionCwd !== l ? `${n.sessionCwd} or ${l}` : l;
                n.onResolveMiss(Rn(`${`This session was running agent '${e}', which is no longer available (no agent by that name in ${m}). `}Continuing with the default tools and system prompt — the agent's tool restrictions no longer apply. To restore it, re-create the agent, or resume with an explicit --agent <name>.`));
            }
        }
        zse(undefined);
        Fje(undefined);
        return {
            agentDefinition: undefined,
            agentType: undefined
        };
    }
    zse(u.agentType);
    Fje(u);
    if (!Xc() && u.model && u.model !== "inherit") {
        let l = Dt(u.model);
        if (m_(l) || Xr(l)) {
            gp(l);
        } else {
            t(`Agent model "${u.model}" is not in the availableModels allowlist; keeping the session model`, {
                level: "warn"
            });
        }
    }
    return {
        agentDefinition: u,
        agentType: u.agentType
    };
}
async function BIe(e, r) {
    if (!e || e === we()) {
        return;
    }
    let o = resolve(e);
    if (Bn(e) || Bn(o) || gy(e) || gy(o) || gy(win32.normalize(e)) || _m(e) || _m(o) || Qa(e)) {
        t(`Resume: refusing cross-host session home shape "${e}"`);
        return;
    }
    if (await kPe(e)) {
        t(`Resume: refusing session home with unverifiable ancestry "${e}"`);
        return;
    }
    if (!TOt(e)) {
        t(`Resume: not loading agents from session home "${e}" \u2014 workspace trust not persisted for it`);
        return;
    }
    try {
        return await CA(e, r);
    } catch  {
        return;
    }
}
function PNr(e) {
    if (!e.resumedAgentSetting || e.mainThreadAgentType) {
        return {
            attempt: false,
            loud: false
        };
    }
    if (e.hasStreamingInput) {
        return {
            attempt: !e.explicitAgentFlag,
            loud: false
        };
    }
    return {
        attempt: true,
        loud: true
    };
}
async function Te(e, r) {
    if (r || !e) {
        return;
    }
    let o = Fm(e);
    if (o === undefined) {
        return;
    }
    if (o === "plan" || o === "bypassPermissions") {
        return;
    }
    if (o === "default") {
        let { isAutoModeFromFallback, setProvisionalStartupMode } = await import("/$bunfs/root/chunk-zvcbvm0m.js");
        setProvisionalStartupMode(undefined);
        if (isAutoModeFromFallback()) {
            return "default";
        }
        return;
    }
    if (o === "auto") {
        let { isAutoStartWithheldForHipaaTaint } = await import("/$bunfs/root/chunk-zvcbvm0m.js");
        if (isAutoStartWithheldForHipaaTaint() || sl("hipaa")) {
            return;
        }
        let { isAutoModeGateEnabled } = await import("/$bunfs/root/chunk-hz9d3hfm.js");
        if (!isAutoModeGateEnabled()) {
            return;
        }
    }
    return o;
}
async function Pgt({ storedPermissionMode, messages, forkSession, permissionModeSuppliedOnInvocation, lane }) {
    let u;
    try {
        ({ planModeOnInteractiveResume: u } = await import("/$bunfs/root/chunk-pv4dxsrx.js"));
    } catch (error) {
        c(error);
    }
    return (l)=>{
        if (u === undefined) {
            return;
        }
        try {
            let m = l.startupModeDecidedByProactivityLevel !== undefined && sR();
            return u(l, {
                storedPermissionMode,
                messages,
                forkSession,
                startupModePinned: permissionModeSuppliedOnInvocation || m,
                lane
            });
        } catch (error) {
            c(error);
            return;
        }
    };
}
const Me = {
    unknown_family: "not a model this version of Claude Code recognizes",
    not_allowed: "not allowed by this account's model settings",
    retired: "retired"
};
function wJe() {
    return Boolean(Xc() !== undefined || a.ANTHROPIC_MODEL || a.ANTHROPIC_DEFAULT_FABLE_MODEL || a.ANTHROPIC_DEFAULT_OPUS_MODEL || a.ANTHROPIC_DEFAULT_SONNET_MODEL || a.ANTHROPIC_DEFAULT_HAIKU_MODEL || G$e() || !qd());
}
async function jIe(e, r, o, { scheduleTelemetry = (l)=>l(), storageV5, credentials } = {}) {
    if (wJe()) {
        return;
    }
    let l = L(e, r);
    let m = l.kind === "declined" && l.reason === "not_allowed" ? await Yme(l.model, storageV5, credentials) : undefined;
    if (m !== undefined && wJe()) {
        return;
    }
    let p = m === "overturned" ? L(e, r) : l;
    if (p.kind === "none") {
        return;
    }
    if (p.kind === "mode_dependent_setting") {
        scheduleTelemetry(()=>i("tengu_resume_model_restore", {
                outcome: d("skipped_mode_dependent_setting"),
                is_eap: false
            }));
        return;
    }
    if (p.kind === "declined") {
        scheduleTelemetry(()=>i("tengu_resume_model_restore", {
                outcome: d("declined"),
                decline_reason: pe(p.reason),
                entitlement_reprobe: pe(m),
                is_eap: gCe(p.model)
            }));
    }
    if (p.kind === "declined") {
        let h = r && Dn(r) || "the default model";
        o?.(`Session model ${p.model} could not be restored (${Me[p.reason]}) \u2014 using ${h} instead.`);
        return;
    }
    return p.model;
}
function INr(e, r) {
    let o = L(e, r);
    if (o.kind === "ok") {
        return o.model;
    }
}
function _e(e, r) {
    if (e === "opusplan") {
        return r.includes("opus") || r.includes("sonnet");
    }
    if (e === "haiku") {
        return r.includes("haiku") || r.includes("sonnet");
    }
    return false;
}
function L(e, r) {
    let o = new Set(JRs.map((u)=>We(u)));
    let n = r ? Dt(r) : undefined;
    let s = n ? Dn(n) : undefined;
    for(let u = e.length - 1; u >= 0; u--){
        let l = e[u];
        if (l?.type !== "assistant" || l.isMeta || typeof l.message?.model !== "string" || l.message.model === Si) {
            continue;
        }
        let model = l.message.model;
        let p = Eh();
        let h = typeof p === "string" ? Ht(p) : p;
        if (dN(h) && !gCe(model) && _e(h, We(model))) {
            return {
                kind: "mode_dependent_setting"
            };
        }
        let y = zwr(model);
        let reason = !(o.has(We(model)) || gCe(model) || y !== undefined && tvr(y) || Dn(model) === s) ? "unknown_family" : !m_(model) && !Xr(model) ? "not_allowed" : u7(model) ? "retired" : undefined;
        if (reason) {
            return {
                kind: "declined",
                model,
                reason
            };
        }
        let k = (r && jp(r) || n !== undefined && jp(n)) && (Dn(model) === s || r && We(Dt(Dn(r))) === We(model));
        let R = nEn(e)?.modelId;
        let P = R !== undefined && jp(R) && We(Dn(R)) === We(model);
        if ((k || P) && _7(model)) {
            return {
                kind: "ok",
                model: `${model}[1m]`
            };
        }
        return {
            kind: "ok",
            model
        };
    }
    return {
        kind: "none"
    };
}
function ae(e) {
    for(let r = e.length - 1; r >= 0; r--){
        let o = e[r];
        if (o?.type === "system" && o.subtype === "model_refusal_fallback") {
            return o;
        }
    }
}
function Ie(e, fallbackModel) {
    let o = ae(e);
    if (!o) {
        return false;
    }
    let n = Dn(o.fallbackModel);
    let s = Dn(fallbackModel);
    return n === s || We(n) === We(s);
}
function Igt(e) {
    for(let r = e.length - 1; r >= 0; r--){
        let o = e[r];
        if (o?.type === "system" && o.subtype === "model_refusal_fallback") {
            o.neutralizedByFork = true;
        }
    }
}
function Ee(e) {
    let r = ae(e);
    if (r?.neutralizedByFork === true) {
        return {
            fallbackModel: r.fallbackModel
        };
    }
}
function I(e, fallbackModel) {
    i("tengu_resume_model_restore", {
        outcome: d(e),
        is_eap: gCe(fallbackModel)
    });
}
function te(e, r) {
    Fgt(import("/$bunfs/root/chunk-fzvjcdz9.js").then((o)=>o.fetchBootstrapData(e, r)));
}
function WIe(e, fallbackModel, o, n, s) {
    if (!Ie(e, fallbackModel)) {
        gp(fallbackModel);
        te(n, s);
        I("restored", fallbackModel);
        return fallbackModel;
    }
    if (o) {
        i("tengu_refusal_fallback_resume_latch", {
            action: d("fork_skip_restore")
        });
        I("skipped_fork_fallback", fallbackModel);
        return;
    }
    let u = Ee(e);
    if (u && Dn(u.fallbackModel) === Dn(fallbackModel)) {
        i("tengu_refusal_fallback_resume_latch", {
            action: d("fork_neutralized_skip")
        });
        I("skipped_fork_neutralized", fallbackModel);
        return;
    }
    gp(fallbackModel);
    te(n, s);
    KDt({
        fallbackModel,
        previousOverride: undefined,
        previousAppStateModel: sU() ?? null,
        previousModelForSession: null
    });
    I("restored", fallbackModel);
    i("tengu_refusal_fallback_resume_latch", {
        action: d("model_latch_only")
    });
    return fallbackModel;
}
function zIe(e, r) {
    if (r) {
        return;
    }
    let o = e.flatMap((n)=>{
        if (n?.type === "system" && n.subtype === "model_refusal_fallback" && (n.apiRefusalCategory === "cyber" || n.sawCyberRefusal === true) && n.neutralizedByFork !== true) {
            return [
                n
            ];
        }
        return [];
    });
    if (o.length > 0) {
        qDt(o.find((n)=>n.apiRefusalCategory === "cyber" && n.requestId != null)?.requestId ?? undefined);
        i("tengu_refusal_fallback_resume_latch", {
            action: d("header_rearmed")
        });
    }
}
async function De(e, currentCwd, cliAgents, agentDefinitions, storageV5) {
    if (!e) {
        return agentDefinitions;
    }
    return xve(currentCwd, cliAgents, storageV5);
}
async function xve(e, r, o) {
    xr().agentDefinitions.clear();
    let n = await CA(e, o);
    return Qae(n, [
        ...n.allAgents,
        ...r
    ]);
}
function oe(e) {
    try {
        return realpathSync(e);
    } catch  {
        return e;
    }
}
function re(e) {
    try {
        if (statSync(e).isDirectory()) {
            return "present";
        }
        return "gone";
    } catch (error) {
        let o = v(error);
        if (o === "ENOENT" || o === "ENOTDIR") {
            return "gone";
        }
        return "inaccessible";
    }
}
const x = "The worktree binding could not be cleared because transcript saving is off";
function opn(e, r) {
    if (e.reason === "pin-is-own-launch-tree") {
        return `Error: ${rg(e.message)} The worktree binding is kept.
`;
    }
    if (!e.poisoned) {
        return `Error: could not verify worktree ${rg(e.worktreePath)} for this resume, so the resume was aborted rather than continuing without isolation. This is usually transient \u2014 the worktree binding is kept; re-run the command to retry.
`;
    }
    let o = r?.bindingCleared === undefined ? "" : r.bindingCleared ? " The worktree binding has been cleared; re-running will continue in the current directory without worktree isolation." : ` ${x} for this run, so the same command will be refused again until that is resolved; to continue without the worktree, re-run with --fork-session or start a new conversation.`;
    return `Error: cannot resume into worktree ${rg(e.worktreePath)}: ${rg(e.message)} This session was not started.${o}
`;
}
function ONr(e, r) {
    let o = r.bindingCleared ? "The worktree binding has been cleared." : `${x} for this run; a later resume will re-check it.`;
    return `Notice: the worktree ${rg(e.worktreePath)} for this session no longer exists; continuing in the current directory without worktree isolation. ${o}
`;
}
function Ogt(e) {
    let r = `${x}; a later --resume will re-check it.`;
    if (e.reason === "worktree-gone") {
        return `Your worktree ${rg(e.worktreePath)} no longer exists, so this session is working in the current directory without worktree isolation. ${Na() ? r : "The worktree binding has been cleared."}`;
    }
    if (e.reason === "pin-is-own-launch-tree") {
        return `Could not re-enter your worktree ${rg(e.worktreePath)}: ${rg(e.message)} The worktree binding is kept.`;
    }
    if (e.poisoned) {
        let o = Na() ? `You are working in the current directory without worktree isolation. ${r}` : "This session's worktree binding has been cleared; you are working in the current directory without worktree isolation.";
        return `Did not re-enter your worktree ${rg(e.worktreePath)}: ${rg(e.message)} ${o}`;
    }
    return `Could not verify your worktree ${rg(e.worktreePath)} this time, so this session is working in the current directory without worktree isolation. The worktree binding is kept and a later --resume will retry it. If this keeps happening, the worktree's git metadata may need repair.`;
}
const Fe = "Memory is still paused from";
function _3n() {}
const Oe = "Auto-memory is still off for this session";
function b3n() {}
function Mgt(e) {
    for (let [r, o] of [
        [
            _3n(),
            Fe
        ],
        [
            b3n(),
            Oe
        ]
    ]){
        if (r === undefined) {
            continue;
        }
        let n = e.findLastIndex((s)=>s.type === "system" && s.subtype === "informational" && typeof s.content === "string" && s.content.includes(o));
        if (n !== -1 && !e.slice(n + 1).some((s)=>s.type === "user" || s.type === "assistant")) {
            continue;
        }
        e.push(zt(r, "notice"));
    }
}
function B(e) {
    if (ks(e) || gy(e) || gy(win32.normalize(e))) {
        t("[sessionRestore] transcript path is a network/NT-namespace path — not chdir-ing", {
            level: "warn"
        });
        return true;
    }
    return false;
}
function GIe(e, r, o, n) {
    let s = Ne(r, o, n);
    e.record(s);
    return s;
}
function Ne(e, r, o) {
    let n = cd();
    if (n && o?.preserveBinding !== true) {
        wD(n);
        return null;
    }
    if (!e) {
        if (e === null) {
            i("tengu_worktree_resume_root_rejected", {
                reason: b("worktree-exited-resume"),
                poisoned: b("false")
            });
            t("[worktree] resuming a session whose worktree record was cleared (exited or scrubbed): running without isolation");
            return null;
        }
        if (!r || se() === r) {
            return null;
        }
        if (B(r)) {
            return null;
        }
        if (DO(r)) {
            t("[worktree] resume: the recorded project path has a network spelling; staying put");
            return null;
        }
        try {
            Gm(r);
        } catch  {
            return null;
        }
        sp(r);
        if (QOe(r, sze(_Ee))) {
            jR(se());
        }
        yke();
        i3("resume");
        jc.cache.clear?.();
        cS(o?.storageV5);
        yZ();
        HCr();
        Sc()?.refreshGitBranch?.();
        return null;
    }
    let s = o?.preserveBinding === true;
    if (B(e.worktreePath) || my(e.worktreePath) || Va(e.worktreePath) || Wb(e.worktreePath) || mf(Vy, e.worktreePath, {
        surfaceNetworkRaw: true,
        unreadableAncestry: "unverified"
    }) !== undefined) {
        if (!s) {
            wD(null);
        }
        i("tengu_worktree_resume_root_rejected", {
            reason: b("network-spelled-pin"),
            poisoned: b("true")
        });
        return {
            worktreePath: e.worktreePath,
            reason: "invalid-linked-worktree",
            message: "its recorded path has a network spelling, which can never be a local isolation worktree.",
            poisoned: true
        };
    }
    let u = re(e.worktreePath);
    if (u === "gone") {
        if (!s) {
            wD(null);
        }
        i("tengu_worktree_resume_root_rejected", {
            reason: b("worktree-gone"),
            poisoned: b("true")
        });
        return {
            worktreePath: e.worktreePath,
            reason: "worktree-gone",
            message: "the worktree directory no longer exists",
            poisoned: true
        };
    }
    if (u === "inaccessible") {
        t(`[worktree] could not examine ${e.worktreePath} on resume; keeping the binding`, {
            level: "error"
        });
        i("tengu_worktree_resume_root_rejected", {
            reason: b("unverifiable"),
            poisoned: b("false")
        });
        return {
            worktreePath: e.worktreePath,
            reason: "unverifiable",
            message: "the worktree directory could not be examined right now",
            poisoned: false
        };
    }
    let liveLaunchAnchor = o?.liveLaunchDir ?? _Ee;
    let m = IJn(se(), e.worktreePath);
    let p = sXo(e.worktreePath, Ex(e.originalCwd), D([
        oe(liveLaunchAnchor),
        ...Ex(liveLaunchAnchor),
        oe(_Ee),
        ...Ex(_Ee)
    ]), {
        declineSelfOwningPinUnderLiveRoot: true
    });
    if (!p.ok) {
        let poisoned = p.reason !== "unverifiable" && p.reason !== "pin-is-own-launch-tree";
        t(`[worktree] declining to resume into ${e.worktreePath} (${p.reason}): ${p.message}`, {
            level: "error"
        });
        i("tengu_worktree_resume_root_rejected", {
            reason: d(p.reason),
            poisoned: b(poisoned ? "true" : "false")
        });
        if (poisoned) {
            if (!s) {
                wD(null);
            }
            if (m) {
                let y = dirname(e.worktreePath);
                let S = re(y) === "present" ? y : e.originalCwd;
                if (IJn(S, e.worktreePath)) {
                    return {
                        worktreePath: e.worktreePath,
                        reason: p.reason,
                        message: p.message,
                        poisoned
                    };
                }
                try {
                    Gm(S);
                    sp(S);
                    let T = (M)=>a2(M, e.worktreePath) === "same";
                    let k = pG(e.worktreePath);
                    let R = k !== null ? [
                        k
                    ] : [];
                    let P = [
                        ...Ex(liveLaunchAnchor),
                        ...R
                    ].filter((M)=>!T(M));
                    if (QOe(S, P, {
                        requireCovered: true
                    })) {
                        jR(S);
                    }
                    yke();
                    i3("resume");
                    HCr();
                    jc.cache.clear?.();
                    cS(o?.storageV5);
                    yZ();
                    Sc()?.refreshGitBranch?.();
                } catch  {}
            }
        }
        return {
            worktreePath: e.worktreePath,
            reason: p.reason,
            message: p.message,
            poisoned
        };
    }
    try {
        Gm(e.worktreePath);
    } catch (error) {
        let y = v(error);
        if (y === "ENOENT" || y === "ENOTDIR") {
            if (!s) {
                wD(null);
            }
            i("tengu_worktree_resume_root_rejected", {
                reason: b("worktree-gone"),
                poisoned: b("true")
            });
            return {
                worktreePath: e.worktreePath,
                reason: "worktree-gone",
                message: "the worktree directory no longer exists",
                poisoned: true
            };
        }
        i("tengu_worktree_resume_root_rejected", {
            reason: b("unverifiable"),
            poisoned: b("false")
        });
        return {
            worktreePath: e.worktreePath,
            reason: "unverifiable",
            message: "the worktree directory could not be entered right now",
            poisoned: false
        };
    }
    sp(e.worktreePath);
    jR(se());
    ivt({
        ...e,
        liveLaunchAnchor,
        originalChangeset: undefined
    });
    yke();
    i3("resume");
    jc.cache.clear?.();
    cS(o?.storageV5);
    yZ();
    Sc()?.refreshGitBranch?.();
    return null;
}
function MNr(e, r) {
    let o = cd();
    if (!o) {
        return;
    }
    ivt(null);
    yke();
    i3("resume");
    if (o.worktreePath === e) {
        jc.cache.clear?.();
        cS(r);
        return;
    }
    if (B(o.originalCwd)) {
        return;
    }
    if (DO(o.originalCwd)) {
        t("[worktree] exit: the recorded original cwd has a network spelling; staying put");
        return;
    }
    try {
        Gm(o.originalCwd);
    } catch  {
        return;
    }
    sp(o.originalCwd);
    let o_liveLaunchAnchor = o.liveLaunchAnchor;
    if (o_liveLaunchAnchor === undefined || QOe(o.originalCwd, sze(o_liveLaunchAnchor, o.worktreePath), {
        requireCovered: true,
        coveredWitnesses: l7e(o_liveLaunchAnchor, o.worktreePath),
        extraCoveredRoots: (()=>{
            let s = pG(o.worktreePath);
            if (s !== null) {
                return [
                    s
                ];
            }
            return [];
        })()
    })) {
        jR(se());
    }
    jc.cache.clear?.();
    cS(r);
    yZ();
    Sc()?.refreshGitBranch?.();
}
async function spn(e, r, o) {
    vJe(o.session.host);
    let n = o.modeApi?.matchSessionMode(e.mode);
    if (n) {
        e.messages.push(zt(n, "warning"));
    }
    let s = IUo({
        ...e,
        source: r.resumeSource ?? "file"
    }, (g)=>e.messages.push(zt(g, "warning")));
    let { adoptedSessionId, effectiveFork } = FLe(r.sessionIdOverride ?? e.sessionId, r.forkSession);
    if (adoptedSessionId) {
        k_(adoptedSessionId, "resume", r.transcriptPath ? dirname(r.transcriptPath) : null);
        await rpn(o.session, o.storageV5);
        await M3();
    }
    if (effectiveFork) {
        await kDe(e, {
            stripWorktreeSession: true,
            stripRelocatedCwd: true,
            storageV5: o.storageV5
        });
        if (e.contentReplacements?.length) {
            await kle(e.contentReplacements, undefined, o.storageV5);
        }
    } else {
        sW(e, {
            storageV5: o.storageV5
        });
    }
    Xfe(s.declined === true);
    Mgt(e.messages);
    Ghe(e);
    if (!effectiveFork) {
        let g = GIe(Z9.of(o.session.host), e.worktreeSession, undefined, {
            storageV5: o.storageV5
        });
        if (g) {
            e.messages.push(zt(Ogt(g), "warning"));
        }
        if (j() && o.storageV5 !== undefined) {
            await Uhe(o.storageV5);
        } else {
            Fhe();
        }
    }
    let sessionAgentDefinitions = await BIe(e.projectPath, o.storageV5);
    let { agentDefinition, agentType } = Yfe(e.agentSetting, o.mainThreadAgentDefinition, o.agentDefinitions, {
        sessionAgentDefinitions,
        sessionCwd: e.projectPath,
        onResolveMiss: (g)=>e.messages.push(zt(g, "warning"))
    });
    let e_permissionMode = e.permissionMode;
    let S = false;
    if (!o.permissionModeCliSet && Fm(e_permissionMode) === "auto" && o.initialState.proactivityLevel === "ask" && !$W()) {
        e_permissionMode = lde("ask", {
            isAutoModeAvailable: false,
            isBypassPermissionsModeAvailable: false
        }, undefined);
        S = true;
        t(`[sessionRestore] stored mode 'auto' read as '${e_permissionMode}': proactivity 'ask' with levels off in this process`);
    }
    let T = o.initialState.toolPermissionContext.startupModeDecidedByProactivityLevel !== undefined && sR();
    let mode = await Te(e_permissionMode, o.permissionModeCliSet || T);
    if (S) {
        let g = mode ?? o.initialState.toolPermissionContext.mode;
        if (g !== "auto") {
            e.messages.push(zt(`Resumed in ${g0(g).toLowerCase()} mode instead of auto: this session is set to ask before each file edit, and auto mode alone would not. Press shift+tab to switch modes.`, "warning"));
        }
    }
    let attentionBudget = null;
    if (effectiveFork) {
        Igt(e.messages);
    }
    let P = await jIe(e.messages, o.initialState.mainLoopModel, (g)=>e.messages.push(zt(g, "warning")), {
        storageV5: o.storageV5,
        credentials: o.credentials
    });
    let mainLoopModel = P ? WIe(e.messages, P, effectiveFork, o.storageV5, o.credentials) : undefined;
    zIe(e.messages, effectiveFork);
    Hgt(e.messages, {
        fork: effectiveFork,
        startup: true
    });
    let toolPermissionContext;
    if (mode) {
        let { transitionPermissionMode } = await import("/$bunfs/root/chunk-hz9d3hfm.js");
        let E = o.initialState.toolPermissionContext;
        try {
            toolPermissionContext = {
                ...transitionPermissionMode(E.mode, mode, E),
                mode
            };
            if (!E.proactivityBaseline?.fromRelaunchHandoff) {
                toolPermissionContext = {
                    ...toolPermissionContext,
                    proactivityBaseline: {
                        mode,
                        fromRelaunchHandoff: false
                    }
                };
            }
        } catch (error) {
            t(`[sessionRestore] transitionPermissionMode rejected restored mode '${mode}': ${error}`);
        }
    }
    toolPermissionContext = (await Pgt({
        storedPermissionMode: e_permissionMode,
        messages: e.messages,
        forkSession: effectiveFork,
        permissionModeSuppliedOnInvocation: o.permissionModeSuppliedOnInvocation,
        lane: "interactive"
    }))(toolPermissionContext ?? o.initialState.toolPermissionContext) ?? toolPermissionContext;
    iW(o.modeApi?.isCoordinatorMode() ? "coordinator" : "normal");
    let attribution = r.includeAttribution ? Ae(e) : undefined;
    let W = xgt(e.agentName, e.agentColor);
    let standaloneAgentContext = o.initialState.standaloneAgentContext ? {
        ...W,
        ...o.initialState.standaloneAgentContext
    } : W;
    $ye(standaloneAgentContext?.name, o.storageV5, {
        autoOnly: !e.customTitle && !o.initialState.standaloneAgentContext?.name
    });
    let agentDefinitions = await De(!!n, o.currentCwd, o.cliAgents, o.agentDefinitions, o.storageV5);
    let initialMessage = o.initialState.initialMessage;
    if (a.CLAUDE_CODE_RESUME_INTERRUPTED_TURN && e.turnInterruptionState?.kind === "interrupted_prompt" && ey(e.turnInterruptionState.message.origin)) {
        t("[sessionRestore] Auto-resuming interrupted turn for bg crash-respawn");
        Jkn("repl_restore", e.turnInterruptionState.message, {
            tail: e.turnInterruptionState.tail
        });
        Qkn(e.messages, e.turnInterruptionState.message);
        initialMessage = {
            message: e.turnInterruptionState.message
        };
    }
    let o_initialState = o.initialState;
    y3n({
        sourceSessionId: r.sessionIdOverride ?? e.sessionId,
        transcriptPath: r.transcriptPath
    });
    let sessionHooks = ire();
    import.meta.require("/$bunfs/root/chunk-chcv3v90.js").restoreGoalFromTranscript(e.messages, (g)=>{
        o_initialState = g(o_initialState);
    }, sessionHooks);
    return {
        messages: e.messages.filter((g)=>!(g.type === "system" && (g.subtype === "bridge_status" || g.subtype === "cloud_session_status"))),
        sessionStartHooks: e.sessionStartHooks,
        fileHistorySnapshots: e.fileHistorySnapshots,
        contentReplacements: e.contentReplacements,
        agentName: e.agentName,
        agentColor: e.agentColor === "default" ? undefined : e.agentColor,
        restoredAgentDef: agentDefinition,
        initialState: {
            ...o_initialState,
            initialMessage,
            ...!effectiveFork && e.bridgeSessionId && !(o_initialState.replBridgeEnabled && !o_initialState.replBridgeOutboundOnly) && {
                replBridgeEnabled: true,
                replBridgeOutboundOnly: false
            },
            ...e.endedByModel ? {
                endedByModel: true
            } : {},
            ...agentType && {
                agent: agentType
            },
            ...attentionBudget && {
                attentionBudget
            },
            ...mainLoopModel && {
                mainLoopModel
            },
            ...attribution && {
                attribution
            },
            ...standaloneAgentContext && {
                standaloneAgentContext
            },
            ...toolPermissionContext && {
                toolPermissionContext
            },
            agentDefinitions
        },
        sessionHooks
    };
}
function Hgt(e, r) {}
export { Fje, rpn, AUo, h3n, Cve, Rve, CUo, y3n, RNr, xNr, Rgt, xgt, Yfe, BIe, PNr, Pgt, wJe, jIe, INr, Igt, WIe, zIe, xve, opn, ONr, Ogt, _3n, b3n, Mgt, GIe, MNr, spn, Hgt };
