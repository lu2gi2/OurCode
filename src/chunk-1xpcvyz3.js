import { Sw } from "/$bunfs/root/chunk-rjfz3g63.js";
import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { we, cr, Ip, Kr, od } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { b } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { ot, W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { ff, St, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { ur, $s } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { dJ, JU, WC, hD, eJr, VEt, gTe, E2, lts, kRn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { xB } from "/$bunfs/root/chunk-9fvky64k.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import * as k from "path";
const se = 1000;
const le = 500;
const ce = 300;
const ue = 2000;
const X = 30000;
const de = 60000;
const U = "<skill-watcher-idle-wake>";
const Z = 10000;
const fe = 2000;
const usePolling = true;
async function he(o) {
    let s = await gTe(cr(), o);
    let n = we();
    let w = n !== cr() ? await gTe(n, o) : [];
    let m = new Map;
    for (let g of [
        ...s,
        ...w
    ]){
        m.set(g.name, g.type === "prompt" ? g.contentHash ?? "" : "");
    }
    return m;
}
function me(o) {
    let stabilityThreshold = o?.stabilityThreshold ?? se;
    let pollInterval = o?.pollInterval ?? le;
    let w = o?.reloadDebounce ?? ce;
    let m = o?.chokidarInterval ?? ue;
    let g;
    let _ = o?.getFingerprint ?? (()=>he(g));
    let E = o?.now ?? Date.now;
    let A = o?.lastInteractionTime ?? Ip;
    let p = Oe();
    let T = JU.subscribe(()=>p.emit());
    let e = null;
    let u = null;
    let P = null;
    let B = false;
    let v = [];
    let L = 0;
    let G = new Set;
    let y = null;
    let H = false;
    let S = false;
    let F = null;
    let R = null;
    let N;
    async function initialize(r, a) {
        if (H || S) {
            return;
        }
        H = true;
        N = r;
        g = a;
        if (!F) {
            F = lts(()=>{
                WC();
                p.emit();
            });
        }
        let f = ++L;
        let d = await V(a);
        if (S || f !== L) {
            return;
        }
        v = d;
        if (v.length === 0) {
            return;
        }
        y = await _().catch(()=>null);
        if (S || f !== L) {
            return;
        }
        t(`Watching for changes in skill/command directories: ${v.join(", ")}...`);
        e = z(m);
        let C = e;
        await new Promise((resolve)=>C.once("ready", ()=>resolve()));
        if (usePolling) {
            P = setInterval(_checkIdleTransitionForTest, Z);
            P.unref?.();
        }
        R = St(dispose);
    }
    function z(r) {
        let a = Sw.watch(v, {
            persistent: true,
            ignoreInitial: true,
            depth: 2,
            awaitWriteFinish: {
                stabilityThreshold,
                pollInterval
            },
            ignored: (f, d)=>{
                if (d && !d.isFile() && !d.isDirectory() && !d.isSymbolicLink()) {
                    return true;
                }
                if (f.split(/[/\\]/).some((C)=>C === ".git")) {
                    return true;
                }
                if (d?.isFile()) {
                    return !f.endsWith(".md");
                }
                return false;
            },
            ignorePermissionErrors: true,
            usePolling,
            interval: r,
            binaryInterval: r,
            atomic: true
        });
        a.on("add", Y);
        a.on("change", Y);
        a.on("unlink", Y);
        a.on("error", (f)=>t(`[skills] watcher error: ${l(f)}`, {
                level: "warn"
            }));
        return a;
    }
    function _checkIdleTransitionForTest() {
        if (S || !e) {
            return;
        }
        let r = E() - A() > de;
        if (r === B) {
            return;
        }
        B = r;
        let a = r ? X : m;
        t(`[skills] ${r ? "idle" : "active"} \u2014 switching poll interval to ${a}ms`);
        e.close();
        e = z(a);
        if (!r) {
            q(U);
        }
    }
    async function rehome() {
        if (!H || S) {
            return;
        }
        let r = await V(g);
        if (S) {
            return;
        }
        let a = D([
            ...v,
            ...r
        ]);
        if (a.length === v.length) {
            return;
        }
        let f = ++L;
        v = a;
        t(`[skills] session moved \u2014 watching skill/command directories: ${v.join(", ")}`);
        if (e) {
            e.close();
        }
        e = z(B ? X : m);
        let d = e;
        let C = new Promise((resolve)=>d.once("ready", ()=>resolve()));
        await Promise.race([
            C,
            Q(fe, undefined, {
                unref: true
            })
        ]);
        if (S || f !== L) {
            return;
        }
        if (usePolling && P === null) {
            P = setInterval(_checkIdleTransitionForTest, Z);
            P.unref?.();
        }
        R ??= St(dispose);
    }
    function dispose() {
        S = true;
        if (R) {
            R();
            R = null;
        }
        if (F) {
            F();
            F = null;
        }
        if (P) {
            clearInterval(P);
            P = null;
        }
        let r = Promise.resolve();
        if (e) {
            r = e.close();
            e = null;
        }
        if (u) {
            clearTimeout(u);
            u = null;
        }
        G.clear();
        T();
        p.clear();
        return r;
    }
    function Y(r) {
        t(`Detected skill change: ${r}`);
        i("tengu_skill_file_changed", {
            source: b("chokidar")
        });
        q(r);
    }
    function q(r) {
        G.add(r);
        if (u) {
            clearTimeout(u);
        }
        u = setTimeout(async ()=>{
            u = null;
            let a = [
                ...G
            ];
            G.clear();
            let f = a.length === 1 && a[0] === U;
            if (!f) {
                let h = a.find((I)=>I !== U) ?? a[0];
                if (await re(h)) {
                    t(`ConfigChange hook blocked skill reload (${a.length} paths)`);
                    return;
                }
            }
            E2();
            let d = await _().catch(()=>null);
            if (d === null) {
                hD();
                dJ();
                J();
                return;
            }
            let C = y !== null && d.size === y.size && [
                ...y
            ].every(([h, I])=>d.get(h) === I);
            if (C && f) {
                dJ();
                return;
            }
            hD();
            dJ();
            await kRn().catch((h)=>t(`[skills] re-reading the moved directory's skills failed: ${l(h)}`, {
                    level: "warn"
                }));
            if (C) {
                t(`[skills] ${a.length} fs event(s) but skill list unchanged \u2014 skipping re-announce`);
            } else {
                if (y !== null) {
                    let h = [
                        ...y
                    ].filter(([I, ae])=>d.get(I) !== ae).map(([I])=>I);
                    if (h.length > 0) {
                        eJr(h);
                    }
                }
                y = d;
            }
            J();
        }, w);
    }
    function re(r) {
        if (!N) {
            c(Error("skillChangeDetector: ConfigChange hook gate not wired"));
            return Promise.resolve(true);
        }
        return N("skills", r);
    }
    function J() {
        try {
            p.emit();
        } catch (error) {
            for (let a of error instanceof AggregateError ? error.errors : [
                error
            ]){
                c(ot(W(a), "skillChangeDetector: subscriber threw during reload"));
            }
        }
    }
    function rebridgeSkillsChanged() {
        if (S) {
            return;
        }
        T();
        T = JU.subscribe(()=>p.emit());
    }
    return {
        initialize,
        dispose,
        rehome,
        [Symbol.asyncDispose]: dispose,
        subscribe: p.subscribe,
        rebridgeSkillsChanged,
        _checkIdleTransitionForTest
    };
}
const gte = me();
async function V(o) {
    let s = ie();
    let n = [];
    let w = VEt("userSettings", "skills");
    if (w) {
        try {
            await s.stat(w);
            n.push(w);
        } catch  {}
    }
    if (w) {
        let e = k.join(w, xB);
        try {
            await s.stat(e);
            n.push(e);
        } catch  {}
    }
    let m = VEt("userSettings", "commands");
    if (m) {
        try {
            await s.stat(m);
            n.push(m);
        } catch  {}
    }
    let g = VEt("projectSettings", "skills");
    if (g) {
        try {
            let e = k.resolve(g);
            if (j() && o !== undefined) {
                if (await M(o, e)) {
                    n.push(e);
                }
            } else {
                await s.stat(e);
                n.push(e);
            }
        } catch  {}
    }
    let _ = ur(we());
    let E = $s(we());
    if (Kr() === null && _ && E && _ !== E) {
        let e = k.join(_, ".claude", "skills");
        let u = k.join(E, ".claude", "skills");
        if (!n.includes(e) && !await ee(s, o, e) && await ee(s, o, u)) {
            n.push(u);
        }
    }
    let A = VEt("projectSettings", "commands");
    if (A) {
        try {
            let e = k.resolve(A);
            if (j() && o !== undefined) {
                if (await M(o, e)) {
                    n.push(e);
                }
            } else {
                await s.stat(e);
                n.push(e);
            }
        } catch  {}
    }
    let p = VEt("userSettings", "agents");
    if (p) {
        try {
            await s.stat(p);
            n.push(p);
        } catch  {}
    }
    let T = VEt("projectSettings", "agents");
    if (T) {
        try {
            let e = k.resolve(T);
            if (j() && o !== undefined) {
                if (await M(o, e)) {
                    n.push(e);
                }
            } else {
                await s.stat(e);
                n.push(e);
            }
        } catch  {}
    }
    for (let e of od()){
        let u = k.join(e, ".claude", "skills");
        try {
            if (j() && o !== undefined) {
                if (await M(o, k.resolve(u))) {
                    n.push(u);
                }
            } else {
                await s.stat(u);
                n.push(u);
            }
        } catch  {}
    }
    return n;
}
async function M(o, s) {
    let n = await o.hostFiles.stat(ff.workspace(s));
    return n.ok && n.value.kind !== "absent";
}
async function ee(o, s, n) {
    try {
        if (j() && s !== undefined) {
            return await M(s, n);
        }
        await o.stat(n);
        return true;
    } catch  {
        return false;
    }
}
export { gte };
