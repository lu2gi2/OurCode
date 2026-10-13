import { K, Xe, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { SEn, fL, w8o, v8o, Z6r, REn, yI, zte, Msr, T9r, C9r, TKt, T7o, Lsr, Nsr, AKt, CAn, Ys, lQr, cQr, Ja } from "/$bunfs/root/chunk-kasbfbhj.js";
import { lO } from "/$bunfs/root/chunk-0ycjphb5.js";
import { St, t, Aq } from "/$bunfs/root/chunk-bd805sh6.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { fe } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { Zce, Py } from "/$bunfs/root/chunk-tn496ms6.js";
import { LI } from "/$bunfs/root/chunk-j6dkn7h7.js";
import { MQ, HQ } from "/$bunfs/root/chunk-4521ay78.js";
import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { A$ } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { FIn, $ne, zTt, cce, D2 } from "/$bunfs/root/chunk-7xekr000.js";
import { Qp } from "/$bunfs/root/chunk-j0a4vbkp.js";
import { LTt } from "/$bunfs/root/chunk-z56h13z4.js";
import { KBt, mQe } from "/$bunfs/root/chunk-rg1j65ka.js";
import { wj } from "/$bunfs/root/chunk-4m5tq170.js";
import { Mr } from "/$bunfs/root/chunk-cj4xndke.js";
import { mkdirSync, readdirSync, statSync } from "fs";
import { join, basename } from "path";
import { mkdir, utimes } from "fs/promises";
const R = (o)=>join(LTt(), o);
const ao = [
    {
        refusal: "diskless",
        isRefused: Ce
    },
    {
        refusal: "hooks_modules_off",
        isRefused: ()=>!LI()
    },
    {
        refusal: "all_hooks_disabled",
        isRefused: Py
    },
    {
        refusal: "sideload_disabled",
        isRefused: HQ
    },
    {
        refusal: "local_dirs_blocked",
        isRefused: ()=>!MQ()
    },
    {
        refusal: "managed_hooks_only",
        isRefused: ()=>fe("policySettings")?.allowManagedHooksOnly === true
    },
    {
        refusal: "hooks_disabled_in_settings",
        isRefused: Zce
    },
    {
        refusal: "safe_mode",
        isRefused: Cr
    },
    {
        refusal: "bare_mode",
        isRefused: ()=>br("hooks")
    },
    {
        refusal: "untrusted",
        isRefused: ()=>!lO()
    }
];
function h() {
    return ao.find((o)=>o.isRefused())?.refusal;
}
function refusal() {
    let o = h();
    if (o !== undefined) {
        f("plugin_dev_mods", o);
        t(`dev mods: mod hot-reloading is off here (${o})`);
    }
    return o;
}
const quietMs = 2000;
const mo = {
    explain: "explain",
    allow: "enable",
    not_now: "decline"
};
const lo = {
    no_one_to_ask: "no_one_to_ask",
    host_closed: "closed",
    no_selection: "unpicked",
    error: "retry"
};
function po(o) {
    switch(o.kind){
        case "chose":
            return mo[o.value];
        case "declined":
            return "decline";
        case "aborted":
            return "withdrawn";
        case "unanswered":
            return lo[o.reason];
    }
}
const H = (o)=>{
    if (o === "now") {
        return "now";
    }
    return "when this turn ends";
};
const X = "this session's folder";
function J(o) {
    let e = A$(o);
    if (e === null) {
        return `${X} (${Rs(o)})`;
    }
    return `[${X}](${e.replaceAll("(", "%28").replaceAll(")", "%29")})`;
}
const uo = (folder, e)=>`Mods in ${J(folder)} load ${H(e)} and reload when their files change. They run with your permissions.`;
const choices = [
    {
        value: "explain",
        label: "How does this work?"
    },
    {
        value: "allow",
        label: "Enable for this session"
    },
    {
        value: "not_now",
        label: "Not now"
    }
];
const go = (folder, e)=>[
        `Mods live in ${J(folder)}.`,
        "A mod is code Claude wrote; it runs with your permissions.",
        `Enable: they load ${H(e)} and reload when their files change.`,
        "Enable holds for this session, also after a restart.",
        "Not now: they stay unloaded until this session next starts.",
        "/plugin lists what loaded and turns it off."
    ].join(`
`);
const header = "Mods";
const W = "Enable hot reloading for this session?";
const ue = (folder, e)=>`${W}

${uo(folder, e)}`;
const source = "mod_hot_reload";
const ge = (folder, e)=>`${W}

${go(folder, e)}`;
const xo = 3;
async function Z(o, e) {
    let r = CAn.isRunning() ? "turn-end" : "now";
    let question = e === 0 ? ue(o.folder, r) : ge(o.folder, r);
    let i = po(await mQe({
        canUseTool: o.binding.canUseTool,
        toolUseContext: o.binding.toolContext(o.abortController),
        source,
        header,
        question,
        choices,
        personOnly: true
    }));
    if (i !== "explain") {
        return i;
    }
    g("plugin_dev_mods", {
        answer: b("explain")
    });
    if (e < xo) {
        return Z(o, e + 1);
    }
    return "decline";
}
const yo = {
    no_one_to_ask: "no_one_to_ask",
    closed: "host_closed",
    unpicked: "no_selection"
};
async function vo(folder, e) {
    let binding = yI();
    if (binding === undefined) {
        f("plugin_dev_mods", "no_session");
        return "no_one_to_ask";
    }
    let abortController = new AbortController;
    e?.addEventListener("abort", ()=>abortController.abort(), {
        once: true
    });
    try {
        let n = await Z({
            binding,
            folder,
            abortController
        }, 0);
        let i = yo[n];
        if (i === undefined) {
            g("plugin_dev_mods", {
                answer: d(n)
            });
        } else {
            f("plugin_dev_mods", i);
        }
        return n;
    } catch (error) {
        t(`dev mods: the ask failed, asked again later: ${l(error)}`, {
            level: "error"
        });
        return "retry";
    }
}
function N() {
    let o = yI();
    if (o === undefined) {
        return true;
    }
    try {
        return KBt(o.toolContext(new AbortController));
    } catch (error) {
        t(`dev mods: no context to ask in yet: ${l(error)}`, {
            level: "error"
        });
        return true;
    }
}
const wo = 3;
function Do(folder, e) {
    let r = new Set;
    let s = new Set(e.loaded);
    let n = false;
    let i = false;
    let a = false;
    let u;
    let p = 0;
    let Number_NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
    let v = false;
    let Y = 0;
    let T = false;
    let q = false;
    let w = false;
    let L;
    let Ko = e.watchRoot(folder, ()=>{
        n = true;
        ro();
    });
    let Bo = e.turn.onBegin(()=>{
        p += 1;
        if (!(u !== undefined && !u.signal.aborted && e.turn.isPersonTurn())) {
            return;
        }
        u?.abort();
        if (!T) {
            T = true;
            e.unanswered();
        }
    });
    let Vo = e.turn.onEnd(()=>void z(Yo));
    function eo() {
        L?.();
        L = undefined;
    }
    function ro() {
        if (w || i) {
            return;
        }
        eo();
        if (e.turn.isRunning()) {
            z(C);
            return;
        }
        L = e.clock.setTimeout(()=>void z(C), e.quietMs);
    }
    async function z(c) {
        try {
            await c();
        } catch (error) {
            t(`dev mods: the watch on ${folder} failed: ${l(error)}`, {
                level: "error"
            });
        }
    }
    async function Yo() {
        if (a) {
            a = false;
            for (let c of await e.listChildren(folder) ?? []){
                r.add(c);
            }
        }
        if (i) {
            await to();
            return;
        }
        if (v) {
            v = false;
            await C();
        }
    }
    async function to() {
        if (w) {
            return;
        }
        if (e.refusal()) {
            await dispose();
            e.stopped("refused");
            return;
        }
        await Promise.all([
            dispose(),
            e.enable(folder)
        ]);
        e.stopped("enabled");
    }
    async function C() {
        L = undefined;
        let c = e.turn.isRunning() && n && Number_NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY;
        let F = w || i;
        let Qo = e.turn.isRunning() && !c;
        if (F || q || Qo || Number_NEGATIVE_INFINITY === p) {
            v = !F;
            return;
        }
        q = true;
        let so = false;
        try {
            let G = c ? [] : (await e.listChildren(folder) ?? []).filter((A)=>!r.has(A));
            let qo = c || G.length > 0 && (n || G.some((A)=>!s.has(A)));
            if (w || !qo) {
                return;
            }
            if (e.turn.isRunning() && !c) {
                v = true;
                return;
            }
            if (e.refusal()) {
                await dispose();
                e.stopped("refused");
                return;
            }
            Number_NEGATIVE_INFINITY = p;
            let no = new AbortController;
            u = no;
            let io = await e.ask(folder, no.signal).finally(()=>{
                u = undefined;
            });
            if (w) {
                return;
            }
            switch(io){
                case "enable":
                    if (e.turn.isRunning() && !e.refusal()) {
                        i = true;
                        e.deferred();
                        return;
                    }
                    await to();
                    return;
                case "decline":
                    {
                        T = false;
                        Y = 0;
                        a = e.turn.isRunning();
                        let A = await e.listChildren(folder);
                        for (let zo of [
                            ...G,
                            ...A ?? []
                        ]){
                            r.add(zo);
                        }
                        return;
                    }
                case "withdrawn":
                    e.withdrawn();
                    if (!T) {
                        T = true;
                        e.unanswered();
                    }
                    v = true;
                    return;
                case "retry":
                    v = true;
                    return;
                case "closed":
                case "unpicked":
                    if (!T) {
                        T = true;
                        e.unanswered();
                    }
                    Y += 1;
                    if (Y >= wo) {
                        await dispose();
                        e.stopped("no_pick");
                        return;
                    }
                    if (io === "unpicked") {
                        Number_NEGATIVE_INFINITY = e.turn.isRunning() ? p - 1 : p;
                        v = true;
                        return;
                    }
                    Number_NEGATIVE_INFINITY = p - 1;
                    so = true;
                    break;
                case "no_one_to_ask":
                    await dispose();
                    e.stopped("no_one_to_ask");
                    return;
            }
        } finally{
            q = false;
        }
        if (so) {
            await C();
        }
    }
    async function dispose() {
        if (w) {
            return;
        }
        w = true;
        v = false;
        eo();
        u?.abort();
        Bo();
        Vo();
        await Ko.close();
    }
    ro();
    return {
        declined: ()=>[
                ...r
            ],
        isClosed: ()=>w,
        dispose
    };
}
const _o = "Mod hot-reloading is on; this session's mods load when this turn ends.";
function ko(folder, e) {
    let r = fL.get();
    if (r?.stage !== "watching" || r.folder !== folder) {
        return;
    }
    switch(e){
        case "refused":
            fL.set({
                stage: "wanted",
                folder,
                ...r.loaded !== undefined && {
                    loaded: r.loaded
                }
            });
            return;
        case "no_one_to_ask":
        case "no_pick":
            fL.set({
                stage: "off",
                folder
            });
            return;
        case "enabled":
            return;
    }
}
async function D(o) {
    let e = new Date;
    await utimes(o, e, e).catch((r)=>t(`dev mods: ${o} keeps its old time: ${l(r)}`));
}
function I() {
    if (v8o.get() !== undefined) {
        return;
    }
    v8o.set(CAn.onEnd(()=>{
        try {
            for (let o of [
                ...$ne.get() ?? [],
                ...zTt.get() ?? []
            ]){
                D(o);
            }
        } catch (error) {
            t(`dev mods: the turn-end refresh failed: ${l(error)}`, {
                level: "error"
            });
        }
    }));
}
function U(o, error, r) {
    let s = r === "enable_failed" ? "enabling" : "loading";
    D2(basename(o), Msr(basename(o), error));
    m("plugin_dev_mods", r);
    t(`dev mods: ${s} ${o} failed: ${l(error)}`, {
        level: "error"
    });
    return "failed";
}
function To(root, outcome, r) {
    return {
        root,
        before: new Map,
        after: r.after,
        present: r.present,
        outcome
    };
}
function bo(o, e) {
    let r = o === "new";
    switch(e){
        case "reloaded":
            if (r) {
                return "loaded from this session's mods folder";
            }
            return "unloaded (gone from this session's mods folder)";
        case "not-loaded":
            return "in this session's mods folder, not loaded; /plugin shows why";
        case "held":
            return "in this session's mods folder, on hold: /reload-plugins applies it";
        case "unbound":
            return "in this session's mods folder; restart to apply";
    }
}
async function So(o, e, r) {
    let present = await Nsr(o) ?? [];
    let i = e === "reloaded" ? await Ys(r.storageV5, r.credentials) : {
        enabled: [],
        disabled: []
    };
    let [a] = T7o([
        ...i.enabled,
        ...i.disabled
    ], [
        o
    ]);
    let after = a?.loaded ?? new Map;
    for (let p of T9r(To(o, e, {
        present,
        after
    }), bo)){
        cce(p.plugin, p.text);
    }
}
async function j(o, e) {
    let r = yI()?.toolContext(new AbortController);
    await So(o, e, {
        storageV5: r?.storageV5,
        credentials: r?.credentials
    }).catch((s)=>t(`dev mods: the lines for ${o} were not told: ${l(s)}`, {
            level: "error"
        }));
}
async function B(o) {
    try {
        fL.set({
            stage: "enabled",
            folder: o
        });
        zte.get()?.joinPluginDir(o);
        $ne.set(wj($ne.get() ?? [], [
            o
        ]));
        I();
        await D(o);
        await Q(0);
        let e = yI()?.toolContext(new AbortController);
        lQr(o, e?.storageV5);
        let r = await AKt();
        await j(o, r);
        g("plugin_dev_mods", {
            enabled: true
        });
        return r;
    } catch (error) {
        return U(o, error, "enable_failed");
    }
}
function Eo(o, load) {
    switch(load){
        case "reloaded":
            return `The person enabled mod hot-reloading for this session and the mods under ${o} loaded: they load and reload by themselves as their files change; the transcript names any mod that failed.`;
        case "held":
            return `The person enabled mod hot-reloading for this session, but the mods under ${o} wait for /reload-plugins (the load would rewrite the prompt cache): they are NOT loaded yet.`;
        case "unbound":
            return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (this session cannot reload its plugins; only a restart loads them).`;
        case "failed":
            return `The person enabled mod hot-reloading for this session, but the mods under ${o} did not load (the load failed; the transcript says why, and /reload-plugins tries again).`;
    }
}
function Ro(o, e) {
    switch(e.kind){
        case "enabled":
            return Eo(o, e.load);
        case "declined":
            return `The person declined mod hot-reloading: what this run wrote under ${o} is written but NOT loaded (a mod that loaded when the session started keeps running as it loaded). Do not say the change is running. It loads the next time this session starts (/reload-plugins reloads only a mod that loaded at the start); the person can ask again.`;
        case "unanswered":
            return `The person has not answered the mod hot-reloading question yet; it is asked again once a turn ends. What this run wrote under ${o} is written but NOT loaded yet. Do not say it was declined, and do not suggest --plugin-dir or a restart.`;
        case "off":
            return `Mod hot-reloading is off in this session (${e.reason}): mods under ${o} are not loaded.`;
    }
}
const _ = (o, e)=>Ja({
        agentId: Xe(),
        value: Ro(o, e),
        mode: "task-notification",
        skipAttachments: true,
        passive: true,
        priority: "next"
    });
const xBt = "nobody could be asked";
function V(folder) {
    if (Z6r.get() === folder) {
        return;
    }
    Z6r.set(folder);
    _(folder, {
        kind: "off",
        reason: xBt
    });
}
const reason = "the question got no pick three times";
const Ao = {
    hooks_modules_off: "hooks modules are switched off in this process",
    all_hooks_disabled: "the organization disables all hooks",
    sideload_disabled: "the organization forbids side-loaded plugins",
    local_dirs_blocked: "the organization blocks plugins from local folders",
    managed_hooks_only: "the organization allows only managed hooks",
    hooks_disabled_in_settings: "hooks are turned off in your settings (disableAllHooks)",
    safe_mode: "the session runs in safe mode",
    diskless: "this kind of cloud session has no disk to load mods from",
    bare_mode: "the session runs in bare mode",
    untrusted: "the workspace is not trusted"
};
function Oo(o, e) {
    switch(o){
        case "enabled":
            return;
        case "refused":
            if (e === undefined) {
                return;
            }
            return {
                kind: "off",
                reason: Ao[e]
            };
        case "no_one_to_ask":
            return {
                kind: "off",
                reason: xBt
            };
        case "no_pick":
            return {
                kind: "off",
                reason
            };
    }
}
function Lo(folder, e) {
    let r = Oo(e, h());
    if (e === "no_one_to_ask") {
        V(folder);
    } else if (r !== undefined) {
        _(folder, r);
    }
}
const Co = {
    kind: "unanswered"
};
function watchRoot(o, e) {
    let r = Sw.watch(o, {
        persistent: true,
        ignoreInitial: true,
        followSymlinks: false,
        ignorePermissionErrors: true,
        ignored: C9r(o, Aq(), ()=>false),
        usePolling: true,
        interval: TKt,
        binaryInterval: TKt
    });
    let s = ()=>e();
    r.on("add", s);
    r.on("addDir", s);
    r.on("change", s);
    r.on("unlink", s);
    r.on("unlinkDir", s);
    r.on("error", (n)=>t(`dev mods: the watch on ${o}: ${l(n)}`, {
            level: "warn"
        }));
    return {
        close: ()=>r.close()
    };
}
const Ho = "Mod hot-reloading was not answered; it will be asked again once a turn ends.";
async function k() {
    try {
        let o = fL.get();
        if (o?.stage !== "wanted") {
            return;
        }
        if (h() !== undefined) {
            return;
        }
        if (!N()) {
            f("plugin_dev_mods", "no_one_to_ask");
            fL.set({
                stage: "off",
                folder: o.folder
            });
            if (o.loaded === undefined) {
                V(o.folder);
            }
            return;
        }
        await mkdir(o.folder, {
            recursive: true
        });
        let e = fL.get();
        if (e?.stage !== "wanted") {
            return;
        }
        let { folder, loaded } = e;
        let n = {};
        let watch = Do(folder, {
            watchRoot,
            loaded: loaded ?? [],
            listChildren: Nsr,
            refusal,
            ask: async (a, u)=>{
                let p = await vo(a, u);
                if (p !== "no_one_to_ask" && p !== "retry") {
                    Z6r.set(undefined);
                }
                if (p === "decline") {
                    _(a, {
                        kind: "declined"
                    });
                }
                return p;
            },
            enable: async (a)=>_(a, {
                    kind: "enabled",
                    load: await B(a)
                }),
            deferred: ()=>cce(basename(folder), _o),
            withdrawn: ()=>cce(basename(folder), Ho),
            unanswered: ()=>_(folder, Co),
            stopped: (a)=>{
                n.release?.();
                ko(folder, a);
                Lo(folder, a);
            },
            clock: Lsr,
            turn: CAn,
            quietMs
        });
        fL.set({
            stage: "watching",
            folder,
            watch,
            ...loaded !== undefined && {
                loaded
            }
        });
        n.release = St(()=>watch.dispose());
    } catch (error) {
        t(`dev mods: the watch did not start: ${l(error)}`, {
            level: "error"
        });
    }
}
function No(o) {
    try {
        return statSync(o, {
            throwIfNoEntry: false
        })?.isFile() === true;
    } catch (error) {
        if (jt(error)) {
            return false;
        }
        throw error;
    }
}
function Io(folder) {
    try {
        return readdirSync(folder, {
            withFileTypes: true
        }).filter((e)=>(e.isDirectory() || e.isSymbolicLink()) && REn(e.name)).map((e)=>e.name).filter((e)=>No(join(folder, e, Qp))).toSorted();
    } catch (error) {
        if (jt(error)) {
            return;
        }
        throw error;
    }
}
async function $o(folder) {
    try {
        let loaded = Io(folder);
        if (loaded === undefined || loaded.length === 0) {
            let r = loaded !== undefined && N();
            fL.set(r ? {
                stage: "wanted",
                folder,
                loaded
            } : undefined);
            await k();
            return;
        }
        fL.set({
            stage: "wanted",
            folder,
            loaded
        });
        zTt.set(wj(zTt.get() ?? [], [
            folder
        ]));
        zte.get()?.joinPluginDir(folder);
        I();
        await D(folder);
        await Q(0);
        await j(folder, await AKt());
        g("plugin_dev_mods", {
            loaded_at_start: true
        });
        await k();
    } catch (error) {
        let r = fL.get();
        if ((r?.stage === "wanted" || r?.stage === "present") && r.folder === folder) {
            fL.set({
                stage: "wanted",
                folder
            });
            k();
        }
        U(folder, error, "load_failed");
    }
}
function M() {
    try {
        let o = fL.get();
        switch(o?.stage){
            case "consented":
                if (h() === undefined) {
                    B(o.folder);
                }
                return;
            case "present":
                if (h() === undefined) {
                    $o(o.folder);
                }
                return;
            case "wanted":
                k();
                return;
            case "enabled":
                D(o.folder);
                return;
            case undefined:
            case "watching":
            case "off":
                return;
        }
    } catch (error) {
        t(`dev mods: the catch-up failed: ${l(error)}`, {
            level: "error"
        });
    }
}
async function Uo() {
    let o = fL.get();
    let e = R(K());
    try {
        if (o?.stage === "watching" && o.folder !== e) {
            await o.watch.dispose();
        }
        let r = fL.get();
        let s = r !== undefined && r.folder !== e;
        let n = r === undefined || r.stage === "off" || r.stage === "watching" && r.watch.isClosed();
        if (s || n) {
            fL.set({
                stage: "wanted",
                folder: e
            });
        }
        FIn.set(M);
        if (refusal() === undefined) {
            await k();
        }
    } catch (error) {
        t(`dev mods: handing out ${e} started nothing: ${l(error)}`, {
            level: "error"
        });
    }
    return e;
}
const O = {};
Mr(O, {
    DEV_MODS_PLACEHOLDER: ()=>nr,
    default: ()=>O
});
var nr = "${CLAUDE_DEV_MODS_DIR}";
async function IBr(o, e) {
    let { DEV_MODS_PLACEHOLDER } = O;
    if (!o.includes(DEV_MODS_PLACEHOLDER)) {
        return o;
    }
    let s = e.isPreload ? R(K()) : await Uo();
    return o.replaceAll(DEV_MODS_PLACEHOLDER, s);
}
function jo() {
    let o = R(K());
    let e = fL.get();
    if (e !== undefined && e.folder === o && e.stage !== "off") {
        return;
    }
    if (e?.stage === "watching") {
        e.watch.dispose().catch((s)=>t(`dev mods: the watch did not close: ${l(s)}`));
    }
    fL.set({
        stage: "present",
        folder: o
    });
    FIn.set(M);
    M();
}
function U8n() {
    w8o.set(IBr);
    try {
        let o = cQr();
        let e = fL.get();
        if (!(o !== undefined && SEn(o, K()) && !(e?.stage === "enabled" && e.folder === o))) {
            jo();
            return;
        }
        if (e?.stage === "watching") {
            e.watch.dispose().catch((s)=>t(`dev mods: the watch did not close: ${l(s)}`));
        }
        fL.set({
            stage: "consented",
            folder: o
        });
        FIn.set(M);
        if (refusal() === undefined) {
            mkdirSync(o, {
                recursive: true
            });
            M();
        }
    } catch (error) {
        t(`dev mods: the restore failed: ${l(error)}`, {
            level: "error"
        });
    }
}
export { xBt, IBr, U8n };
