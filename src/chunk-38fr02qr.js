import { x, l, v, z, jt } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { TC, Mp } from "/$bunfs/root/chunk-xgw72tt1.js";
import { ve } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { q, B, K, vd, Ee, wwe, Ce, Ewe } from "/$bunfs/root/chunk-ctt36bn8.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { TS, mf, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Mg } from "/$bunfs/root/chunk-2d9a83dh.js";
import { lr } from "/$bunfs/root/chunk-mqgsnx6k.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { J } from "/$bunfs/root/chunk-tchztk88.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Ckr, djn, L7 } from "/$bunfs/root/chunk-sk5bs87n.js";
import { fu } from "/$bunfs/root/chunk-r8t1dcyg.js";
import { Yf, Wi } from "/$bunfs/root/chunk-f6bzd9ck.js";
import { gt } from "/$bunfs/root/chunk-c7x4m87m.js";
import { posix, basename, dirname, join, resolve, sep } from "path";
import { lstat, readdir } from "fs/promises";
import * as C from "fs/promises";
const { dirname: dirname_1, isAbsolute, join: join_1, normalize, relative, sep: sep_1 } = posix;
const q9t = "/mnt/user-data/uploads";
const _4e = "/uploads";
const bco = "/uploads/cowork-folders/";
const fe = join_1(dirname_1(q9t), "outputs");
const de = "/home/claude";
const b4e = "/uploads/.home";
const hRt = "/outputs";
const WD = ".stage-tmp.";
function K9t(n) {
    if (!n) {
        return q9t;
    }
    if (!isAbsolute(n)) {
        throw Error("CLAUDE_STAGE_FILE_ROOT must be an absolute path");
    }
    return normalize(n);
}
function PQ() {
    return K9t(a.CLAUDE_STAGE_FILE_ROOT);
}
function lCe() {
    return join_1(dirname_1(PQ()), "outputs");
}
function IQ() {
    return de;
}
const ghr = [
    q9t,
    fe
];
function Sco() {
    return ghr;
}
function Y9t(n, e) {
    let i = relative(n, e);
    return !(i === ".." || i.startsWith(`..${sep_1}`) || isAbsolute(i));
}
function X9t() {
    let a_CLAUDE_CODE_ENVIRONMENT_KIND = a.CLAUDE_CODE_ENVIRONMENT_KIND;
    if (a_CLAUDE_CODE_ENVIRONMENT_KIND === "byoc" || a_CLAUDE_CODE_ENVIRONMENT_KIND === "anthropic_cloud") {
        return a_CLAUDE_CODE_ENVIRONMENT_KIND;
    }
    return null;
}
function jL(n, e) {
    return Boolean(n) && (!e || e === "anthropic_cloud");
}
async function Ufs() {
    if (!jL(a.CLAUDE_CODE_REMOTE_SESSION_ID, a.CLAUDE_CODE_ENVIRONMENT_KIND)) {
        return;
    }
    try {
        let n = [
            PQ(),
            lCe()
        ];
        await Promise.all(n.map((e)=>C.mkdir(e).catch((i)=>{
                let r = v(i);
                if (r !== "EEXIST" && r !== "ENOENT") {
                    J("warn", "user_data_roots_mkdir_failed", {
                        code: r ?? "unknown"
                    });
                }
            })));
    } catch (error) {
        t(`uploads and outputs directories not created: ${l(error)}`, {
            level: "error"
        });
    }
}
const ge = 10;
const maxObservationLagMs = 2000;
const me = 8;
class Z {
    primedListing = null;
    slugMeta = new Map;
    planFileCache = null;
    planFileBackend = null;
    planFileWatches = new Map;
    primeInFlight = null;
    waitCapMs = maxObservationLagMs;
    stopReleasingOnSwitch = null;
    lastUnwatched = new Map;
    earlyObserved = new Map;
    earlyGeneration = 0;
    lastSnapshottedWorkshopDoc = null;
    snapshotChain = Promise.resolve();
    planFileCacheKeyFor(n) {
        if (this.planFileCache === null) {
            return null;
        }
        let e = resolve(n);
        if (dirname(e) !== F()) {
            return null;
        }
        return basename(e);
    }
    notePlanFileWritten(n, e) {
        if (this.planFileCache === null) {
            this.noteEarly(n, e);
            return;
        }
        let i = this.planFileCacheKeyFor(n);
        if (i !== null) {
            let r = this.planFileWatches.get(i);
            if (r !== undefined) {
                r.generation++;
            }
            this.planFileCache.set(i, e);
            if (this.primedListing !== null && this.primedListing.dir === F()) {
                this.primedListing.listing.add(i);
            }
        }
    }
    notePlanFileForgotten(n) {
        if (this.planFileCache === null) {
            this.noteEarly(n, undefined);
            return;
        }
        let e = this.planFileCacheKeyFor(n);
        if (e !== null) {
            let i = this.planFileWatches.get(e);
            if (i !== undefined) {
                this.dropToUnknown(e, i);
                this.refreshPlanFile(e, i);
                return;
            }
            this.planFileCache.delete(e);
        }
    }
    resetPlanFileCacheToUnknown() {
        if (this.planFileCache === null) {
            return;
        }
        for (let n of [
            ...this.planFileCache.keys()
        ]){
            let e = this.planFileWatches.get(n);
            if (e !== undefined) {
                this.dropToUnknown(n, e);
                this.refreshPlanFile(n, e);
            } else {
                this.planFileCache.delete(n);
            }
        }
    }
    activatePlanFileCache(n) {
        this.planFileCache ??= new Map;
        if (j() && n !== undefined && this.planFileBackend === null) {
            this.planFileBackend = n;
            this.stopReleasingOnSwitch = vd(()=>this.releaseStaleWatches());
            for (let e of new Set(Ewe().values())){
                this.watchSlug(e, false);
            }
            this.earlyObserved.clear();
        }
    }
    noteEarly(n, e) {
        if (!j()) {
            return;
        }
        let i = resolve(n);
        if (dirname(i) !== F()) {
            return;
        }
        this.earlyGeneration++;
        if (e === undefined) {
            this.earlyObserved.delete(basename(i));
        } else {
            this.earlyObserved.set(basename(i), e);
        }
    }
    watchSlug(n, e) {
        this.releaseStaleWatches();
        for (let i of y(n)){
            this.watchPlanFile(n, i, e);
        }
        this.lastUnwatched.clear();
    }
    releaseStaleWatches() {
        if (this.planFileWatches.size === 0) {
            return;
        }
        let n = new Set(Ewe().values());
        for (let [e, i] of this.planFileWatches){
            if (!n.has(i.slug)) {
                this.stopWatch(e, i);
            }
        }
    }
    watchPlanFile(slug, e, i) {
        let planFileBackend = this.planFileBackend;
        if (planFileBackend === null || this.planFileCache === null || this.planFileWatches.has(e) || !m() || Mg(g(k(e))) !== undefined) {
            return;
        }
        let s = {
            slug,
            generation: 0,
            seededAbsent: false,
            subscription: undefined,
            refreshing: undefined,
            refreshAgain: false,
            resubscribed: false,
            stopped: false
        };
        this.planFileWatches.set(e, s);
        let o = this.earlyObserved.has(e) ? this.earlyObserved.get(e) : this.lastUnwatched.get(e);
        this.earlyObserved.delete(e);
        this.lastUnwatched.delete(e);
        if (o !== undefined) {
            this.planFileCache.set(e, o);
        } else if (i && !this.planFileCache.has(e)) {
            this.planFileCache.set(e, null);
            s.seededAbsent = true;
        }
        this.subscribePlanFile(planFileBackend, e, s);
    }
    observePlanFile(n) {
        let watch = this.planFileWatches.get(n);
        return {
            watch,
            generation: watch?.generation ?? this.earlyGeneration
        };
    }
    notePlanFileObserved(n, e, i) {
        let r = this.planFileWatches.get(n);
        if (r !== undefined) {
            if (i.watch === r && r.generation === i.generation) {
                this.installPlanFile(n, r, e);
            } else {
                this.refreshPlanFile(n, r);
            }
        } else if (this.planFileBackend === null && j() && i.watch === undefined && this.earlyGeneration === i.generation) {
            this.earlyObserved.set(n, e);
        }
    }
    watchAgentPlanFile(n, e) {
        if (this.planFileBackend === null) {
            return;
        }
        let i = this.planFileWatches.get(e);
        if (i !== undefined) {
            this.planFileWatches.delete(e);
            this.planFileWatches.set(e, i);
            return;
        }
        let r = new Set(y(n));
        let s = [
            ...this.planFileWatches
        ].filter(([o, f])=>f.slug === n && !r.has(o));
        for (let [o, f] of s.slice(0, Math.max(0, s.length - me + 1))){
            let d = this.planFileCache?.get(o);
            this.stopWatch(o, f);
            if (typeof d === "string") {
                this.planFileCache?.set(o, d);
            }
        }
        this.watchPlanFile(n, e, false);
    }
    async subscribePlanFile(n, e, i) {
        let i_generation = i.generation;
        let s;
        try {
            let o = await n.subscribe({
                target: "key",
                key: g(k(e))
            }, (f)=>this.onPlanFileEvent(e, i, i_generation, f), {
                maxObservationLagMs
            });
            if (o.ok) {
                if (i.stopped) {
                    o.value.unsubscribe();
                } else {
                    i.subscription = o.value;
                    t(`plans: watching ${e} through the storage interface (changes trail by at most ${o.value.observationLagMs} ms)`);
                }
                return;
            }
            s = gt(o.error);
        } catch (error) {
            s = String(error);
        }
        if (i.stopped) {
            return;
        }
        t(`plans: watching ${e} through the storage interface failed (${s}); serving its last read and in-process writes`);
        if (this.planFileCache?.has(e) !== true) {
            this.refreshPlanFile(e, i);
        }
    }
    onPlanFileEvent(n, e, i, r) {
        if (e.stopped) {
            return;
        }
        if (!r.ok) {
            if (r.error.code === "Unavailable") {
                queueMicrotask(()=>void this.refreshPlanFile(n, e));
                return;
            }
            e.subscription = undefined;
            if (TS()) {
                return;
            }
            t(`plans: the watch on ${n} ended: ${gt(r.error)}`);
            let o = this.planFileBackend;
            if (o !== null && !e.resubscribed) {
                e.resubscribed = true;
                this.subscribePlanFile(o, n, e);
            } else {
                this.stopWatch(n, e);
            }
            return;
        }
        let r_value = r.value;
        if (r_value.kind === "snapshot" && e.generation === i) {
            if (!("absent" in r_value)) {
                this.installPlanFile(n, e, Buffer.from(r_value.value).toString("utf-8"));
                return;
            }
            if (e.seededAbsent && e.generation === 0) {
                this.installPlanFile(n, e, null);
                return;
            }
        }
        queueMicrotask(()=>void this.refreshPlanFile(n, e));
    }
    installPlanFile(n, e, i) {
        e.generation++;
        this.planFileCache?.set(n, i);
    }
    refreshPlanFile(n, e) {
        if (e.refreshing !== undefined) {
            e.refreshAgain = true;
            return e.refreshing;
        }
        let planFileBackend = this.planFileBackend;
        if (planFileBackend === null) {
            return Promise.resolve();
        }
        let r = async ()=>{
            await Promise.resolve();
            try {
                do {
                    e.refreshAgain = false;
                    let s = e.generation;
                    let o = await this.readPlanFileForWatch(planFileBackend, n);
                    if (e.stopped) {
                        return;
                    }
                    if (o === undefined) {
                        if (e.generation === s) {
                            e.generation++;
                            this.planFileCache?.delete(n);
                        }
                        continue;
                    }
                    if (e.generation === s) {
                        this.installPlanFile(n, e, o);
                    } else {
                        e.refreshAgain = true;
                    }
                }while (e.refreshAgain && !e.stopped)
            } finally{
                e.refreshing = undefined;
            }
        };
        e.refreshing = r();
        return e.refreshing;
    }
    async readPlanFileForWatch(n, e) {
        try {
            let i = await n.read([
                g(k(e))
            ]);
            if (i.ok) {
                let r = i.value.items[0];
                if (r?.found) {
                    return Buffer.from(r.value).toString("utf-8");
                }
                return null;
            }
            t(`plans: v5 read of ${e} failed: ${i.error.code}`);
        } catch (error) {
            t(`plans: v5 read of ${e} threw: ${error}`);
        }
    }
    async settlePlanFile(n) {
        let e = this.planFileWatches.get(n);
        if (e === undefined) {
            return;
        }
        let i = e.refreshing ?? (this.planFileCache?.has(n) !== true ? this.refreshPlanFile(n, e) : undefined);
        if (i !== undefined && !await L(i, this.waitCapMs)) {
            this.giveUpWaiting(n, e);
        }
    }
    dropToUnknown(n, e) {
        if (e.stopped) {
            return;
        }
        e.generation++;
        this.planFileCache?.delete(n);
    }
    giveUpWaiting(n, e) {
        if (this.planFileCache?.has(n)) {
            this.dropToUnknown(n, e);
        }
    }
    unwatchSlug(n) {
        for (let [e, i] of this.planFileWatches){
            if (i.slug === n) {
                this.stopWatch(e, i);
            }
        }
    }
    unwatchAllPlanFiles() {
        this.lastUnwatched.clear();
        for (let [n, e] of this.planFileWatches){
            let i = this.planFileCache?.get(n);
            if (i !== undefined) {
                this.lastUnwatched.set(n, i);
            }
            this.stopWatch(n, e);
        }
    }
    stopWatch(n, e) {
        e.stopped = true;
        e.subscription?.unsubscribe();
        e.subscription = undefined;
        this.planFileWatches.delete(n);
        this.planFileCache?.delete(n);
    }
    commitPlanListing(dir, e) {
        let listing = new Set(e);
        this.primedListing = {
            dir,
            listing
        };
        let r = Ewe();
        let s = [
            ...this.slugMeta
        ].filter(([, f])=>f.validatedDir !== dir);
        let o = new Set(s.map(([f])=>f));
        for (let [f, d] of r){
            if (!o.has(f)) {
                for (let u of y(d)){
                    listing.add(u);
                }
            }
        }
        for (let [f, d] of s){
            let u = r.get(f);
            if (u === undefined) {
                this.slugMeta.delete(f);
                continue;
            }
            if (y(u).some((p)=>listing.has(p))) {
                if (d.consumed) {
                    t(`Plan slug collision for '${u}' in ${dir} detected after the plan path was already in use \u2014 keeping the slug (the pre-existing plan file may be overwritten).`, {
                        level: "warn"
                    });
                    d.validatedDir = dir;
                    continue;
                }
                r.delete(f);
                this.slugMeta.delete(f);
                if (![
                    ...r.values()
                ].includes(u)) {
                    this.unwatchSlug(u);
                }
                this.getPlanSlug(f, d.seed);
            } else {
                for (let p of y(u)){
                    listing.add(p);
                }
                d.validatedDir = dir;
            }
        }
    }
    getPlanSlug(n, seed) {
        let i = Ewe();
        let r = i.get(n);
        if (!r) {
            let s = seed ? djn(seed) : "";
            let o = true;
            for(let u = 0; u < ge; u++){
                r = s ? `${s}-${L7()}` : Ckr();
                o = y(r).some((p)=>this.primedListing?.listing.has(p) === true);
                if (!o) {
                    break;
                }
            }
            let f = !Ee() && !wwe();
            this.slugMeta.set(n, {
                validatedDir: f || this.primedListing === null ? null : this.primedListing.dir,
                consumed: false,
                seed
            });
            let d = !o && this.primedListing !== null && this.primedListing.dir === F();
            if (this.primedListing !== null) {
                for (let u of y(r)){
                    this.primedListing.listing.add(u);
                }
            }
            i.set(n, r);
            this.lastUnwatched.clear();
            this.watchSlug(r, d);
        }
        return r;
    }
    markPlanPathServed(n) {
        let e = this.slugMeta.get(n);
        if (e) {
            e.consumed = true;
        }
    }
    exemptSlugFromRevalidation(n, e) {
        this.slugMeta.delete(n);
        if (this.primedListing !== null) {
            for (let i of y(e)){
                this.primedListing.listing.add(i);
            }
        }
        this.watchSlug(e, false);
    }
    clearAllPlanSlugs() {
        Ewe().clear();
        this.slugMeta.clear();
        this.unwatchAllPlanFiles();
    }
    noteWorkshopDocSnapshotted(sessionId, doc) {
        this.lastSnapshottedWorkshopDoc = {
            sessionId,
            doc
        };
    }
    reset() {
        this.primedListing = null;
        this.slugMeta.clear();
        this.unwatchAllPlanFiles();
        this.lastUnwatched.clear();
        this.earlyObserved.clear();
        this.primeInFlight = null;
        this.waitCapMs = maxObservationLagMs;
        this.stopReleasingOnSwitch?.();
        this.stopReleasingOnSwitch = null;
        this.planFileBackend = null;
        this.planFileCache = null;
        this.lastSnapshottedWorkshopDoc = null;
        this.snapshotChain = Promise.resolve();
    }
}
const Fe = new q(()=>new Z);
function T() {
    return B().host;
}
function Sb() {
    return Fe.of(T());
}
function N_e(n, e) {
    Sb().notePlanFileWritten(n, e);
}
function Gh(n) {
    Sb().notePlanFileForgotten(n);
}
function J9t() {
    Sb().resetPlanFileCacheToUnknown();
}
async function Pe(n) {
    let e = [];
    try {
        let i = await Wi((cursor)=>n.listEntries({
                namespace: "plan"
            }, {
                cursor,
                skipKeyStats: true
            }), (r)=>{
            for (let s of r){
                if (s.kind === "key" && s.key.namespace === "plan") {
                    e.push(`${s.key.name}.md`);
                }
            }
        });
        switch(i.status){
            case "done":
                return e;
            case "error":
                t(`primePlanSlugCollisions: v5 list failed: ${i.error.code}`);
                return null;
            case "capped":
                t(`primePlanSlugCollisions: v5 list exceeded ${Yf} pages; leaving the listing unprimed`);
                return null;
        }
    } catch (error) {
        t(`primePlanSlugCollisions: v5 list threw: ${error}`);
        return null;
    }
}
async function ye(n, e) {
    let i = await Pe(n);
    if (e !== A()) {
        return;
    }
    if (i !== null) {
        Sb().activatePlanFileCache(n);
        Sb().commitPlanListing(e, i);
    }
}
async function L(n, waitCapMs) {
    let i = lr();
    let r = false;
    await Promise.race([
        n.catch(()=>{}).finally(()=>{
            r = true;
            i.abort();
        }),
        Q(waitCapMs, i.signal)
    ]);
    return r;
}
async function wco() {
    let n = Sb();
    if (n.primeInFlight !== null) {
        await L(n.primeInFlight, n.waitCapMs);
    }
}
async function cS(n) {
    let e = A();
    if (n && e === F()) {
        let i = Sb();
        let r = ye(n, e);
        i.primeInFlight = r;
        try {
            await r;
        } finally{
            if (i.primeInFlight === r) {
                i.primeInFlight = null;
            }
        }
        return;
    }
    try {
        let i = await readdir(e);
        if (e !== A()) {
            return;
        }
        Sb().commitPlanListing(e, i);
    } catch (error) {
        if (!z(error) && !jt(error)) {
            c(error);
        }
        if (e !== A()) {
            return;
        }
        if (z(error)) {
            Sb().commitPlanListing(e, []);
        }
    }
}
function A() {
    if (!Ee() && !wwe()) {
        return F();
    }
    return jc();
}
function F() {
    return join(ve(), "plans");
}
function g(n) {
    return $e.plan(n);
}
function k(n) {
    if (n.endsWith(".md")) {
        return n.slice(0, -3);
    }
    return n;
}
const S = {
    publishDiscipline: "inPlace"
};
async function H(n) {
    try {
        let e = await lstat(join(jc(), `${n}.md`));
        return {
            ...S,
            mode: e.mode & 511
        };
    } catch  {
        return S;
    }
}
function m() {
    return jc() === F();
}
function y(n) {
    return [
        `${n}.md`,
        `${n}.workshop.md`
    ];
}
function N4(n, e) {
    return Sb().getPlanSlug(n ?? K(), e);
}
function $_e(n) {
    return Ewe().get(n ?? K());
}
function hhr(n, e) {
    Ewe().set(n, e);
    Sb().exemptSlugFromRevalidation(n, e);
}
function vco() {
    Sb().clearAllPlanSlugs();
}
class V {
    #e = undefined;
    directory() {
        this.#e ??= this.#t();
        return this.#e;
    }
    #t() {
        if (Ce()) {
            return F();
        }
        let plansDirectory = ft().plansDirectory;
        if (plansDirectory) {
            let i = se();
            let r = resolve(i, plansDirectory);
            if (we(r, i)) {
                return r;
            }
            t(`plansDirectory must be within project root, with no backslash in its path off Windows: ${plansDirectory}`, {
                level: "error"
            });
        }
        return F();
    }
    reset() {
        this.#e = undefined;
    }
}
const X = new q(()=>new V);
var jc = Object.assign(function() {
    return X.of(T()).directory();
}, {
    cache: {
        clear () {
            X.of(T()).reset();
        }
    }
});
function we(n, e) {
    if (n !== e && !n.startsWith(e + sep)) {
        return false;
    }
    if (TC(n)) {
        return false;
    }
    if (mf(ie(), n) !== undefined) {
        return false;
    }
    let i = Mp(e);
    if (i === null) {
        return false;
    }
    let r = n;
    while(true){
        let s = Mp(r);
        if (s !== null) {
            return s === i || s.startsWith(i + sep);
        }
        let o = dirname(r);
        if (o === r) {
            return false;
        }
        r = o;
    }
}
async function P(n) {
    let e = jc();
    if (Ce()) {
        return e;
    }
    try {
        await mn().mkdir(e);
    } catch (error) {
        t(`Failed to create plans directory ${e}: ${error}`, {
            level: "error"
        });
    }
    return e;
}
async function S4e(n, e) {
    if (e && m()) {
        let r = `${Ckr()}-ultraplan`;
        let s = join(await P(e), `${r}.md`);
        let o = await e.write(g(r), n, S);
        if (!o.ok) {
            throw new x(`saveRejectedUltraplan: v5 write failed: ${o.error.code}`, "saveRejectedUltraplan: v5 write failed");
        }
        return s;
    }
    let i = join(await P(), `${Ckr()}-ultraplan.md`);
    await mn().write(i, n);
    return i;
}
async function Eco(n, e, i) {
    try {
        await P(i);
        let r = basename(n, ".md");
        let s = i !== undefined && m() && dirname(n) === jc() && Mg(g(r)) === undefined ? g(r) : undefined;
        if (i !== undefined && s !== undefined) {
            let o = await i.write(s, e, S);
            if (!o.ok) {
                Y(n, o.error.code);
                return;
            }
        } else {
            await mn().write(n, e);
        }
        N_e(n, e);
    } catch (error) {
        Y(n, error instanceof Error ? error.message : String(error));
    }
}
function Y(n, e) {
    Gh(n);
    t(`Failed to persist plan to ${n}: ${e}`, {
        level: "error"
    });
}
function wv(n) {
    let e = K();
    let i = N4(e);
    Sb().markPlanPathServed(e);
    if (!n) {
        return join(jc(), `${i}.md`);
    }
    return join(jc(), `${i}-agent-${n}.md`);
}
function lNe() {
    let n = N4(K());
    return join(jc(), `${n}.workshop.md`);
}
async function D(n, e, i) {
    let r = await n.read([
        g(e)
    ]);
    if (!r.ok) {
        t(`${i}: v5 read failed: ${r.error.code}`);
        return null;
    }
    let s = r.value.items[0];
    if (s.found) {
        return Buffer.from(s.value).toString("utf-8");
    }
    return null;
}
async function kco(n) {
    if (n && m()) {
        return D(n, `${N4(K())}.workshop`, "getPlanWorkshopDoc");
    }
    let e = lNe();
    try {
        return await ie().readFile(e, {
            encoding: "utf-8"
        });
    } catch (error) {
        if (z(error)) {
            return null;
        }
        if (jt(error)) {
            t(`getPlanWorkshopDoc: read failed for ${e}: ${error}`);
            return null;
        }
        c(error);
        return null;
    }
}
function E0n() {
    let planFileCache = Sb().planFileCache;
    if (planFileCache !== null && m()) {
        let e = planFileCache.get(`${N4(K())}.workshop.md`);
        if (e !== undefined) {
            return e !== null;
        }
    }
    try {
        return ie().existsSync(lNe());
    } catch  {
        return false;
    }
}
async function Tco(n) {
    if (n === undefined || !m()) {
        return E0n();
    }
    let e = `${N4(K())}.workshop`;
    await Sb().settlePlanFile(`${e}.md`);
    let i = Sb().planFileCache?.get(`${e}.md`);
    if (i !== undefined) {
        return i !== null;
    }
    return (await n.statMeta(g(e))).ok;
}
function $4(n) {
    let e = wv(n);
    let planFileCache = Sb().planFileCache;
    if (planFileCache !== null && m()) {
        if (n) {
            Sb().watchAgentPlanFile(N4(K()), basename(e));
        }
        let r = planFileCache.get(basename(e));
        if (r !== undefined) {
            return r;
        }
    }
    return te(e);
}
async function w4e(n, e) {
    if (e === undefined || !m()) {
        return $4(n);
    }
    let i = ee(n);
    await Sb().settlePlanFile(i);
    let r = Sb().planFileCache?.get(i);
    if (r !== undefined) {
        return r;
    }
    return D(e, k(i), "getPlan");
}
function ee(n) {
    let e = basename(wv(n));
    let i = Sb();
    if (n && i.planFileCache !== null) {
        i.watchAgentPlanFile(N4(K()), e);
    }
    return e;
}
async function Aco(n, e) {
    if (e === undefined || !m()) {
        return $4(n) !== null;
    }
    let i = ee(n);
    await Sb().settlePlanFile(i);
    let r = Sb().planFileCache?.get(i);
    if (r !== undefined) {
        return r !== null;
    }
    return (await e.statMeta(g(k(i)))).ok;
}
async function Cco(n) {
    let e = wv();
    if (j() && n !== undefined && m()) {
        let i = basename(e);
        let r = Sb();
        let s = r.planFileWatches.get(i);
        if (s !== undefined) {
            if (!await L(r.refreshPlanFile(i, s), r.waitCapMs)) {
                r.giveUpWaiting(i, s);
            }
            let o = r.planFileCache?.get(i);
            if (o !== undefined) {
                return o;
            }
        }
        return D(n, k(i), "readPlanFileFresh");
    }
    return te(e);
}
function te(n) {
    try {
        return ie().readFileSync(n, {
            encoding: "utf-8"
        });
    } catch (error) {
        if (z(error)) {
            return null;
        }
        if (jt(error)) {
            t(`getPlan: read failed for ${n}: ${error}`);
            return null;
        }
        c(error);
        return null;
    }
}
const ke = /^[a-z0-9][a-z0-9-]{0,119}$/;
function ne(n) {
    let e = n.messages.find((i)=>i.slug)?.slug;
    if (e === undefined) {
        return;
    }
    if (!ke.test(e)) {
        t(`getSlugFromLog: rejecting malformed transcript slug (${e.length} chars)`);
        return;
    }
    return e;
}
async function re(n, e, i) {
    if (X9t() === null) {
        return;
    }
    if (i && m()) {
        return Se(i, n, e).catch(c);
    }
    let r = join(jc(), `${e}.workshop.md`);
    try {
        await mn().read(r);
        return;
    } catch (error) {
        if (!z(error)) {
            if (jt(error)) {
                t(`recoverWorkshopDocForResume: read failed for ${r}: ${error}`);
            } else {
                c(error);
            }
            return;
        }
    }
    let s = W(n, "workshop");
    if (!s || s.content.length === 0 || s.content.length > Q9t) {
        return;
    }
    try {
        await P();
        await mn().write(r, s.content);
        t(`Workshop doc recovered from file snapshot, ${s.content.length} chars`, {
            level: "info"
        });
    } catch (error) {
        if (jt(error)) {
            t(`Workshop doc recovery write failed for ${r}: ${error}`);
            return;
        }
        c(error);
    } finally{
        Gh(r);
    }
}
async function Se(n, e, i) {
    let r = `${i}.workshop.md`;
    let s = g(`${i}.workshop`);
    let o = Sb().observePlanFile(r);
    let f = await n.read([
        s
    ]);
    if (!f.ok) {
        t(`recoverWorkshopDocForResume: v5 read failed for ${i}: ${f.error.code}`);
        return;
    }
    let d = f.value.items[0];
    Sb().notePlanFileObserved(r, d?.found ? Buffer.from(d.value).toString("utf-8") : null, o);
    if (d?.found) {
        return;
    }
    let u = W(e, "workshop");
    if (!u || u.content.length === 0 || u.content.length > Q9t) {
        return;
    }
    let p = join(jc(), r);
    let b = false;
    try {
        await P(n);
        let E = await n.write(s, u.content, S);
        if (!E.ok) {
            t(`Workshop doc recovery write failed for ${i}: ${E.error.code}`);
            return;
        }
        b = true;
        t(`Workshop doc recovered from file snapshot, ${u.content.length} chars`, {
            level: "info"
        });
    } finally{
        if (b) {
            N_e(p, u.content);
        } else {
            Gh(p);
        }
    }
}
async function yRt(n, e, i) {
    let r = ne(n);
    if (!r) {
        return false;
    }
    let s = e ?? K();
    hhr(s, r);
    if (i && m()) {
        return _e(i, n, r).catch((f)=>{
            c(f);
            return false;
        });
    }
    let o = join(jc(), `${r}.md`);
    await re(n, r).catch(c);
    try {
        await mn().read(o);
        return true;
    } catch (error) {
        if (!z(error)) {
            if (jt(error)) {
                t(`copyPlanForResume: read failed for ${o}: ${error}`);
                return false;
            }
            c(error);
            return false;
        }
        if (X9t() === null) {
            return false;
        }
        t(`Plan file missing during resume: ${o}. Attempting recovery.`);
        let d = W(n, "plan");
        let u = null;
        if (d && _(d.content)) {
            u = d.content;
            t(`Plan recovered from file snapshot, ${u.length} chars`, {
                level: "info"
            });
        } else {
            u = oe(n);
            if (u) {
                t(`Plan recovered from message history, ${u.length} chars`, {
                    level: "info"
                });
            }
        }
        if (u) {
            try {
                await P();
                await mn().write(o, u);
                return true;
            } catch (err) {
                if (jt(err)) {
                    t(`Plan recovery write failed for ${o}: ${err}`);
                    return false;
                }
                c(err);
                return false;
            } finally{
                Gh(o);
            }
        }
        t("Plan file recovery failed: no file snapshot or plan content found in message history");
        return false;
    }
}
async function be(n, e) {
    let i = `${e}.workshop.md`;
    let r = Sb();
    if (r.planFileWatches.has(i)) {
        await r.settlePlanFile(i);
        return;
    }
    if (r.planFileCache?.has(i)) {
        return;
    }
    let s = r.observePlanFile(i);
    let o = await n.read([
        g(`${e}.workshop`)
    ]);
    if (!o.ok) {
        t(`copyPlanForResume: v5 read failed for ${e}.workshop: ${o.error.code}`);
        return;
    }
    let f = o.value.items[0];
    r.notePlanFileObserved(i, f?.found ? Buffer.from(f.value).toString("utf-8") : null, s);
}
async function _e(n, e, i) {
    await re(e, i, n).catch(c);
    let r = `${i}.md`;
    let s = Sb().observePlanFile(r);
    let o = await n.read([
        g(i)
    ]);
    if (!o.ok) {
        t(`copyPlanForResume: v5 read failed for ${i}: ${o.error.code}`);
        return false;
    }
    let f = o.value.items[0];
    Sb().notePlanFileObserved(r, f?.found ? Buffer.from(f.value).toString("utf-8") : null, s);
    await be(n, i);
    if (f?.found) {
        return true;
    }
    if (X9t() === null) {
        return false;
    }
    t(`Plan file missing during resume: ${i}. Attempting recovery.`);
    let d = W(e, "plan");
    let u = null;
    if (d && _(d.content)) {
        u = d.content;
        t(`Plan recovered from file snapshot, ${u.length} chars`, {
            level: "info"
        });
    } else {
        u = oe(e);
        if (u) {
            t(`Plan recovered from message history, ${u.length} chars`, {
                level: "info"
            });
        }
    }
    if (u) {
        let p = join(jc(), r);
        let b = false;
        try {
            await P(n);
            let E = await n.write(g(i), u, S);
            if (!E.ok) {
                t(`Plan recovery write failed for ${i}: ${E.error.code}`);
                return false;
            }
            b = true;
            return true;
        } finally{
            if (b) {
                N_e(p, u);
            } else {
                Gh(p);
            }
        }
    }
    t("Plan file recovery failed: no file snapshot or plan content found in message history");
    return false;
}
async function Rco(n, e, i) {
    let r = ne(n);
    if (!r) {
        return false;
    }
    let s = jc();
    let o = join(s, `${r}.md`);
    let f = N4(e);
    let d = join(s, `${f}.md`);
    Sb().exemptSlugFromRevalidation(e, f);
    if (i && m()) {
        return Ae(i, r, f).catch((u)=>{
            c(u);
            return false;
        });
    }
    await P();
    try {
        await mn().copy(join(s, `${r}.workshop.md`), join(s, `${f}.workshop.md`));
    } catch (error) {
        if (!z(error)) {
            if (jt(error)) {
                t(`copyPlanForFork: workshop sibling copy failed: ${error}`);
            } else {
                c(error);
            }
        }
    } finally{
        Gh(join(s, `${f}.workshop.md`));
    }
    try {
        await mn().copy(o, d);
        return true;
    } catch (error) {
        if (z(error)) {
            return false;
        }
        if (jt(error)) {
            t(`copyPlanForFork: copy failed for ${o}: ${error}`);
            return false;
        }
        c(error);
        return false;
    } finally{
        Gh(d);
    }
}
async function Ae(n, e, i) {
    let r = join(jc(), `${i}.workshop.md`);
    let s;
    try {
        await P(n);
        let d = await n.read([
            g(`${e}.workshop`)
        ]);
        if (!d.ok) {
            t(`copyPlanForFork: v5 workshop sibling read failed: ${d.error.code}`);
        } else if (d.value.items[0].found) {
            let u = d.value.items[0].value;
            let p = await n.write(g(`${i}.workshop`), u, await H(`${e}.workshop`));
            if (!p.ok) {
                t(`copyPlanForFork: v5 workshop sibling copy failed: ${p.error.code}`);
            } else {
                s = Buffer.from(u).toString("utf-8");
            }
        }
    } finally{
        if (s !== undefined) {
            N_e(r, s);
        } else {
            Gh(r);
        }
    }
    let o = join(jc(), `${i}.md`);
    let f;
    try {
        let d = await n.read([
            g(e)
        ]);
        if (!d.ok) {
            t(`copyPlanForFork: v5 read failed for ${e}: ${d.error.code}`);
            return false;
        }
        if (!d.value.items[0].found) {
            return false;
        }
        let u = d.value.items[0].value;
        let p = await n.write(g(i), u, await H(e));
        if (!p.ok) {
            t(`copyPlanForFork: v5 write failed for ${i}: ${p.error.code}`);
            return false;
        }
        f = Buffer.from(u).toString("utf-8");
        return true;
    } finally{
        if (f !== undefined) {
            N_e(o, f);
        } else {
            Gh(o);
        }
    }
}
function oe(n) {
    for(let e = n.messages.length - 1; e >= 0; e--){
        let i = n.messages[e];
        if (typeof i !== "object" || i === null) {
            continue;
        }
        if (i.type === "assistant") {
            let r = i.message?.content;
            if (Array.isArray(r)) {
                for (let s of r){
                    if (typeof s === "object" && s !== null && s.type === "tool_use" && s.name === fu) {
                        let o = s.input;
                        let f = typeof o === "object" && o !== null ? o.plan : undefined;
                        if (_(f)) {
                            return f;
                        }
                    }
                }
            }
        }
        if (i.type === "user") {
            let r = i;
            if (_(r.planContent)) {
                return r.planContent;
            }
        }
        if (i.type === "attachment") {
            let r = i;
            if (r.attachment?.type === "plan_file_reference") {
                let s = r.attachment.planContent;
                if (_(s)) {
                    return s;
                }
            }
        }
    }
    return null;
}
function W(n, e) {
    let i = [
        ...n.messages,
        ...n.fileSnapshots ?? []
    ];
    for(let r = i.length - 1; r >= 0; r--){
        let s = i[r];
        if (s?.type === "system" && "subtype" in s && s.subtype === "file_snapshot" && "snapshotFiles" in s) {
            let o = s.snapshotFiles;
            if (!Array.isArray(o)) {
                continue;
            }
            let f = o.find((d)=>typeof d === "object" && d !== null && d.key === e && typeof d.path === "string" && typeof d.content === "string");
            if (f !== undefined) {
                return f;
            }
        }
    }
}
var Q9t = 2000000;
const yhr = Q9t;
function _(n) {
    return typeof n === "string" && n.length > 0 && n.length <= yhr;
}
export { q9t, _4e, bco, b4e, hRt, WD, K9t, PQ, lCe, IQ, ghr, Sco, Y9t, X9t, jL, Ufs, Sb, N_e, Gh, J9t, wco, cS, N4, $_e, hhr, vco, jc, S4e, Eco, wv, lNe, kco, E0n, Tco, $4, w4e, Aco, Cco, yRt, Rco, Q9t, yhr };
