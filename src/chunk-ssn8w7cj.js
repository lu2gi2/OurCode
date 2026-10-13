import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { j } from "/$bunfs/root/chunk-fcerdfs3.js";
import { ff, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Rnn, tko, gse, c5e, lZ, $v } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ji, Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { Cz, OTr, qwo, Kwo, FRs, _Wn, Ywo, Xwo, Jwo, yn, ry, S_, yg } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { basename, dirname, join } from "path";
const b = 3;
const x = 8;
function v() {
    let s = yn("userSettings");
    if (s !== undefined && basename(s) === $v.default) {
        return s;
    }
}
async function sfo(s, e) {
    if (!j()) {
        return;
    }
    let e_epoch = e.epoch;
    await Promise.all([
        N(s, e),
        R(s, e),
        F("managed-settings file tier", ()=>A(s, e, e_epoch))
    ]);
    await F("project/local layers", ()=>M(s, e, e.epoch));
}
async function F(s, e) {
    try {
        await e();
    } catch (error) {
        t(`settingsPrime: start-up seed of the ${s} failed: ${l(error)}; the file reads serve`, {
            level: "warn"
        });
    }
}
async function R(s, e) {
    try {
        await q(s, e);
    } catch (error) {
        t(`settingsPrime: ownership read-ahead for the local settings root failed: ${l(error)}; the probe runs as today`, {
            level: "warn"
        });
    }
}
async function N(s, e) {
    try {
        let i = v();
        if (i === undefined) {
            return;
        }
        if (e.parsedFiles.has(i)) {
            t("settingsPrime: user settings already read before start-up; seed skipped");
            return;
        }
        let n = e.epoch;
        let r = await OTr(s, i);
        if (r.kind === "absent") {
            c5e(i);
            if (e.seedParsedFile(i, "userSettings", lZ(), n)) {
                t("settingsPrime: user settings absent; seeded as none");
            }
            return;
        }
        if (r.kind !== "seeded") {
            t(`settingsPrime: start-up seed skipped (${_Wn(r)}); the file read serves`);
            return;
        }
        if (e.seedParsedFile(i, "userSettings", r.parsed, n)) {
            t(`settingsPrime: user settings seeded at start-up (${r.size} bytes)`);
        }
    } catch (error) {
        t(`settingsPrime: start-up seed failed: ${l(error)}; the file read serves`, {
            level: "warn"
        });
    }
}
class T {
    storageV5;
    store;
    inFlight = null;
    followUpQueued = false;
    disposed = false;
    state = {
        kind: "unprimed"
    };
    consecutiveThrows = 0;
    runsInState = 0;
    loggedThrowMessages = new Set;
    loggedOwnershipThrowMessages = new Set;
    loggedHostFilesThrowMessages = new Set;
    unsubscribe;
    constructor(s, e){
        this.storageV5 = s;
        this.store = e;
        this.unsubscribe = e.onInvalidate(()=>{
            if (!this.disposed) {
                this.seedAttestedTier();
                this.schedule();
            }
        });
        this.seedAttestedTier();
        this.schedule();
    }
    seedAttestedTier() {
        try {
            P(this.storageV5, this.store, this.store.epoch);
        } catch (error) {
            this.logThrowOnce(error, this.loggedHostFilesThrowMessages);
        }
    }
    schedule() {
        if (this.inFlight !== null) {
            this.followUpQueued = true;
            return;
        }
        this.inFlight = this.run().finally(()=>{
            if (this.disposed) {
                return;
            }
            this.inFlight = null;
            if (this.followUpQueued) {
                this.followUpQueued = false;
                this.schedule();
            }
        });
    }
    async run() {
        let s = I(this.storageV5, this.store).then((e)=>{
            this.loggedOwnershipThrowMessages.clear();
            return e;
        }, (e)=>{
            if (!this.disposed) {
                this.logThrowOnce(e, this.loggedOwnershipThrowMessages);
            }
        });
        try {
            let e = this.store.epoch;
            try {
                let r = v();
                if (r !== undefined) {
                    if (!await this.seedFromBackend(r, e)) {
                        return;
                    }
                }
            } catch (error) {
                if (!this.disposed) {
                    this.onThrow(error);
                }
                return;
            }
            let i = await s;
            if (this.disposed) {
                return;
            }
            E(this.store, i);
            if ((await Promise.all([
                this.seedLogged(e, M),
                this.seedLogged(e, A)
            ])).includes(false)) {
                return;
            }
            this.consecutiveThrows = 0;
            try {
                yg();
                this.loggedThrowMessages.clear();
            } catch (error) {
                if (!this.disposed) {
                    this.logThrowOnce(error);
                }
            }
        } finally{
            await s;
        }
    }
    async seedLogged(s, e) {
        try {
            return await e(this.storageV5, this.store, s);
        } catch (error) {
            if (!this.disposed) {
                this.logThrowOnce(error, this.loggedHostFilesThrowMessages);
            }
            return this.store.epoch === s && !this.disposed;
        }
    }
    async seedFromBackend(s, e) {
        let state = this.state;
        let n = await OTr(this.storageV5, s, state.kind === "seeded" ? state : undefined);
        if (this.store.epoch !== e || this.disposed) {
            return false;
        }
        if (n.kind === "seeded") {
            this.store.seedParsedFile(s, "userSettings", n.parsed, e);
            if (state.kind === "seeded" && state.contentHash === n.contentHash) {
                return true;
            }
        } else if (n.kind === "absent") {
            c5e(s);
            this.store.seedParsedFile(s, "userSettings", lZ(), e);
        }
        this.transition(n);
        return true;
    }
    transition(s) {
        let state = this.state;
        this.state = s;
        if (state.kind === s.kind && (s.kind !== "failing" || state.kind === "failing" && state.code === s.code)) {
            this.runsInState++;
            return;
        }
        if (state.kind === "failing" && s.kind === "seeded") {
            t(`settingsPrime: backend read recovered after ${this.runsInState} failing run(s)`);
        }
        this.runsInState = 1;
        switch(s.kind){
            case "seeded":
                t(`settingsPrime: user settings seeded (${s.size} bytes)`);
                return;
            case "absent":
                t("settingsPrime: user settings absent; served as none");
                return;
            case "oversize":
                t("settingsPrime: user settings not seeded (oversize); raw path serves");
                return;
            case "failing":
                t(`settingsPrime: backend read failed: ${s.code}${s.failureClass ? ` (${s.failureClass})` : ""}; raw path serves`, {
                    level: "warn"
                });
                return;
            case "unprimed":
            case "broken":
                return;
        }
    }
    onThrow(s) {
        this.consecutiveThrows++;
        this.state = {
            kind: "broken"
        };
        this.logThrowOnce(s);
        if (this.consecutiveThrows >= b) {
            t(`settingsPrime: disabled after ${b} consecutive failures; raw path serves`, {
                level: "warn"
            });
            this.dispose();
        }
    }
    logThrowOnce(s, e = this.loggedThrowMessages) {
        let i = l(s);
        if (e.has(i) || e.size >= x) {
            return;
        }
        e.add(i);
        c(s);
    }
    primes(s) {
        return this.storageV5 === s;
    }
    async whenIdle() {
        while(this.inFlight !== null || this.followUpQueued){
            await (this.inFlight ?? Promise.resolve());
        }
    }
    dispose() {
        this.disposed = true;
        this.unsubscribe();
        this.inFlight = null;
        this.followUpQueued = false;
        if (this.store.primer === this) {
            this.store.primer = undefined;
            this.store.managedFileReads.clear();
        }
    }
}
async function ifo(s, e) {
    if (!j() || s === undefined) {
        return;
    }
    if (e.primer !== undefined) {
        if (!e.primer.primes(s)) {
            t("settingsPrime: store already primed through another backend; second prime ignored");
        }
        return;
    }
    Rnn(s).catch(c);
    e.primer = new T(s, e);
    await e.primer.whenIdle();
}
async function KJt(s) {
    let e = ji();
    let e_backendReadResetTail = e.backendReadResetTail;
    let n;
    e.backendReadResetTail = new Promise((resolve)=>n = resolve);
    await e_backendReadResetTail;
    try {
        return await W(s, e);
    } finally{
        n();
    }
}
async function W(s, e) {
    await e.primer?.whenIdle();
    if (e.primer !== undefined) {
        await R(s, e);
    }
    let i = e.primer === undefined ? [] : (await Promise.all([
        ...G(s).map((n)=>qwo(e, n)),
        X(s, e)
    ])).flat().filter((n)=>n !== undefined);
    Pr(i.length > 0 ? {
        userLayer: "retain"
    } : undefined);
    if (i.length === 0) {
        return;
    }
    return ()=>{
        for (let n of i){
            n();
        }
    };
}
function G(s) {
    let e = v();
    return [
        ...e === undefined ? [] : [
            Kwo(s, e)
        ],
        ...O(s)
    ];
}
function O(s) {
    let e = [];
    for (let i of [
        "projectSettings",
        "localSettings"
    ]){
        if (i === "projectSettings" && S_()) {
            continue;
        }
        let n = yn(i);
        if (n !== undefined) {
            e.push(Ywo(s, i, n, i === "projectSettings" ? "project settings" : "local settings"));
        }
        if (i === "localSettings") {
            let r = ry();
            if (r !== undefined && r !== n) {
                e.push(Ywo(s, i, r, "legacy local settings"));
            }
        }
    }
    return e;
}
async function B(s, e) {
    let s_hostFiles = s.hostFiles;
    if (!s_hostFiles.serves("system")) {
        if (!e.systemSpaceServingLogged) {
            e.systemSpaceServingLogged = true;
            t("settingsPrime: the managed-settings file tier is not read ahead (the backend does not serve 'system'); the policy walk reads the host's files itself");
        }
        return;
    }
    let n = gse(Cz());
    let e_policyWalkCount = e.policyWalkCount;
    let a = n.map((u)=>Xwo(s, join(u, "managed-settings.json"), "managed settings", e));
    let [o, g] = await Promise.all([
        Promise.all(n.map((u)=>FRs(s_hostFiles, join(u, "managed-settings.d")))),
        Promise.all(a.map((u)=>u.read()))
    ]);
    let d = {
        listings: [],
        unlisted: [],
        layers: [
            ...a
        ],
        walksAtReadStart: e_policyWalkCount
    };
    let f = [];
    for (let [u, S] of n.entries()){
        let p = o[u];
        let dir = join(S, "managed-settings.d");
        if (p.kind === "failing") {
            t(`settingsPrime: ${dir} not listed through the backend (backend listing failed: ${p.code}${p.failureClass ? ` (${p.failureClass})` : ""}); the folder read serves`);
            d.unlisted.push(dir);
            continue;
        }
        if (p.names.length === 0) {
            t(`settingsPrime: ${dir} has no drop-ins to read ahead; the folder read confirms`);
            d.unlisted.push(dir);
            continue;
        }
        d.listings.push({
            dir,
            names: p.names
        });
        for (let D of p.names){
            f.push(Xwo(s, join(dir, D), "managed settings drop-in", e));
        }
    }
    d.layers.push(...f);
    return {
        ...d,
        reads: Promise.all(f.map((u)=>u.read())).then((u)=>[
                ...g,
                ...u
            ])
    };
}
async function M(s, e, i) {
    let n = O(s);
    if (n.length === 0) {
        return true;
    }
    let r = await Promise.all(n.map((a)=>a.read()));
    if (e.epoch !== i) {
        return false;
    }
    Q(e, n, r, i);
    return true;
}
const names = Object.freeze([]);
function P(s, e, i) {
    if (s.hostFiles.serving("system") !== "absent" || e.systemAttestationContradicted) {
        return;
    }
    if (tko() !== undefined) {
        if (!e.systemSpaceServingLogged) {
            e.systemSpaceServingLogged = true;
            t("settingsPrime: the host attests no OS policy folder ('system' absent) but this process was handed a managed-settings directory explicitly (CLAUDE_CODE_MANAGED_SETTINGS_PATH); its files are read by the policy walk itself");
        }
        return;
    }
    let n = gse(Cz()).map((r)=>({
            dropInDir: join(r, "managed-settings.d"),
            basePath: join(r, "managed-settings.json")
        }));
    if (n.some(({ basePath, dropInDir })=>e.walkReadManagedFileIn(basePath, dropInDir))) {
        e.systemAttestationContradicted = true;
        for (let { basePath, dropInDir } of n){
            e.clearFolderListing(dropInDir, i);
            e.unseedParsedFile(basePath, "policySettings", i);
        }
        c(Error("settings: a managed-settings file was read from a folder the host attested absent ('system' space); the attestation is ignored for the rest of this process and the policy walk reads the host's files itself"));
        return;
    }
    if (!e.systemSpaceServingLogged) {
        e.systemSpaceServingLogged = true;
        t("settingsPrime: the host attests this machine has no OS policy folder ('system' absent); the policy walk is served an empty managed-settings file tier without reading the host");
    }
    for (let { basePath, dropInDir } of n){
        e.seedFolderListing(dropInDir, names, i);
        if (!e.walkRead(basePath)) {
            e.seedParsedFile(basePath, "policySettings", lZ(), i);
        }
    }
    return {
        listings: n.map(({ dropInDir })=>({
                dir: dropInDir,
                names
            })),
        layers: n.map(({ basePath })=>({
                path: basePath,
                parsed: lZ()
            }))
    };
}
async function A(s, e, i) {
    if (P(s, e, i) !== undefined) {
        return e.epoch === i;
    }
    let n = await B(s, e);
    if (n === undefined) {
        C(e, i);
        return true;
    }
    let r = await n.reads;
    if (e.epoch !== i) {
        return false;
    }
    let { verdicts } = H(e, n, i);
    U(e, n, r, verdicts, i);
    return true;
}
function U(s, e, i, verdicts, r) {
    let a = [];
    let o = new Set;
    for (let [g, d] of e.layers.entries()){
        let f = i[g];
        if (f.kind !== "seeded") {
            t(`settingsPrime: ${d.label} not seeded (${_Wn(f)}); the file read serves`);
            s.managedFileReads.delete(d.path);
            s.unseedParsedFile(d.path, d.source, r);
            continue;
        }
        o.add(d.path);
        s.managedFileReads.set(d.path, {
            contentHash: f.contentHash,
            parsed: f.parsed
        });
        let u = verdicts.get(dirname(d.path));
        let S = u !== undefined && u !== "install" ? u : s.policyInstallVerdict(d.path, f.parsed, e.walksAtReadStart);
        if (S === "raced") {
            s.dropRetainedLayer(d.path);
            t(`settingsPrime: ${d.label} not installed (the walk read different content while this read was in flight); re-verified next generation`);
            continue;
        }
        if (S === "deferred") {
            t(`settingsPrime: ${d.label} changed after this generation's policy walk; it applies from the next reset, as today`);
            a.push({
                layer: d,
                parsed: f.parsed
            });
            continue;
        }
        if (s.seedParsedFile(d.path, d.source, f.parsed, r)) {
            a.push({
                layer: d,
                parsed: f.parsed
            });
        }
    }
    for (let g of [
        ...s.managedFileReads.keys()
    ]){
        if (!o.has(g)) {
            s.managedFileReads.delete(g);
            s.unseedParsedFile(g, "policySettings", r);
        }
    }
    return a;
}
function C(s, e) {
    for (let i of [
        ...s.managedFileReads.keys()
    ]){
        s.managedFileReads.delete(i);
        s.unseedParsedFile(i, "policySettings", e);
    }
    for (let i of gse(Cz())){
        s.clearFolderListing(join(i, "managed-settings.d"), e);
    }
}
function H(s, e, i) {
    for (let a of e.unlisted){
        s.clearFolderListing(a, i);
    }
    let kept = [];
    let verdicts = new Map;
    for (let a of e.listings){
        let o = s.folderInstallVerdict(a.dir, a.names, e.walksAtReadStart);
        verdicts.set(a.dir, o);
        if (o === "raced") {
            s.clearFolderListing(a.dir, i);
            t(`settingsPrime: ${a.dir} listing not installed (a read this generation went by another membership while it was in flight); the walk's membership or its own folder read serves until the next reset`);
        } else if (o === "deferred") {
            t(`settingsPrime: ${a.dir} membership changed after this generation's policy walk; it applies from the next reset, as today`);
            kept.push(a);
        } else if (s.seedFolderListing(a.dir, a.names, i)) {
            kept.push(a);
        }
    }
    return {
        kept,
        verdicts
    };
}
function Q(s, e, i, n) {
    for (let [r, a] of e.entries()){
        let o = i[r];
        let g = o.kind === "seeded" ? o.parsed : o.kind === "absent" && a.whenAbsent === "seedAbsence" ? lZ() : undefined;
        if (g !== undefined && s.walkReadDiffers(a.path, g)) {
            t(`settingsPrime: ${a.label} not installed (the file read already saw different content this generation)`);
        } else if (o.kind === "seeded") {
            s.seedParsedFile(a.path, a.source, o.parsed, n);
        } else if (g !== undefined) {
            c5e(a.path);
            s.seedParsedFile(a.path, a.source, g, n);
        } else {
            t(`settingsPrime: ${a.label} not seeded (${_Wn(o)}); the file read serves`);
        }
    }
}
async function X(s, e) {
    if (!j()) {
        return [];
    }
    let e_epoch = e.epoch;
    try {
        let n = P(s, e, e_epoch);
        if (n !== undefined) {
            return [
                ...n.listings.map(({ dir, names })=>e.retainFolderListing(dir, names)),
                ...n.layers.map(({ path, parsed })=>e.retainLayer(path, parsed))
            ];
        }
        let r = await B(s, e);
        if (r === undefined) {
            C(e, e_epoch);
            return [];
        }
        let a = await r.reads;
        if (e.epoch !== e_epoch) {
            return [];
        }
        let o = H(e, r, e_epoch);
        return [
            ...o.kept.map(({ dir, names })=>e.retainFolderListing(dir, names)),
            ...U(e, r, a, o.verdicts, e_epoch).map(({ layer, parsed })=>e.retainLayer(layer.path, parsed))
        ];
    } catch (error) {
        t(`settings: managed settings not re-seeded: ${l(error)}; the file reads serve`, {
            level: "warn"
        });
        return [];
    }
}
async function q(s, e) {
    E(e, await I(s, e));
}
async function I(s, e) {
    if (!j()) {
        return;
    }
    if (typeof process.getuid !== "function" && typeof process.geteuid !== "function") {
        return;
    }
    let root = Jwo();
    if (root === undefined || e.localStoreProbes.hasCanonicalRootOwnerUids(root)) {
        return;
    }
    let s_hostFiles = s.hostFiles;
    if (!s_hostFiles.serves("workspace")) {
        t("settingsPrime: ownership of the local settings root not read ahead (the backend does not serve the workspace); the probe runs as today");
        return;
    }
    let [r, a, o] = await Promise.allSettled([
        s_hostFiles.stat(ff.workspace(root)),
        s_hostFiles.stat(ff.workspace(join(root, ".git")), {
            follow: false
        }),
        s_hostFiles.stat(ff.workspace(join(root, ".claude")), {
            follow: false
        })
    ]);
    let g = y(r);
    let d = y(a);
    let f = y(o);
    let u = J(g, d, f);
    if ("skipped" in u) {
        t(`settingsPrime: ownership of the local settings root not read ahead (${u.skipped}); the probe runs as today`);
        return;
    }
    return {
        root,
        uids: u.uids
    };
}
function E(s, e) {
    if (e !== undefined && s.localStoreProbes.primeCanonicalRootOwnerUids(e.root, e.uids)) {
        t("settingsPrime: ownership of the local settings root read ahead through the backend");
    }
}
function y(s) {
    if (s.status === "rejected") {
        throw s.reason;
    }
    return s.value;
}
function J(s, e, i) {
    if (!s.ok) {
        return {
            skipped: `stat of the root failed: ${k(s.error)}`
        };
    }
    if (!e.ok) {
        return {
            skipped: `lstat of .git failed: ${k(e.error)}`
        };
    }
    if (!i.ok) {
        return {
            skipped: `lstat of .claude failed: ${k(i.error)}`
        };
    }
    let rootUid = w(s.value);
    if (rootUid === undefined) {
        return {
            skipped: s.value.kind === "absent" ? "the root is absent" : "no owner uid for the root"
        };
    }
    let gitEntryUid = w(e.value);
    if (gitEntryUid === undefined) {
        return {
            skipped: e.value.kind === "absent" ? "no .git entry (left to the probe's per-call throw)" : "no owner uid for .git"
        };
    }
    let claudeEntryUid = null;
    if (i.value.kind !== "absent") {
        let o = w(i.value);
        if (o === undefined) {
            return {
                skipped: "no owner uid for .claude"
            };
        }
        claudeEntryUid = o;
    }
    return {
        uids: {
            rootUid,
            gitEntryUid,
            claudeEntryUid
        }
    };
}
function w(s) {
    if (s.kind === "absent") {
        return undefined;
    }
    return s.uid;
}
function k(error) {
    if (error.code === "Failed") {
        return error.telemetryCode ?? error.failureClass;
    }
    return error.code;
}
export { sfo, ifo, KJt };
