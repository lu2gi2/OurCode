import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { K, we, cr, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { vr, Mt, al, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { ur, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import { Lb, Xtn, Jtn } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { ft } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { ce } from "/$bunfs/root/chunk-0ycjphb5.js";
import { kre, r4e, Mst } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { pre } from "/$bunfs/root/chunk-46dhek9m.js";
import { O5o, Pte, vnr, Fd, FXr } from "/$bunfs/root/chunk-kasbfbhj.js";
import { F7e } from "/$bunfs/root/chunk-k2ecs44c.js";
import { D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { Se } from "/$bunfs/root/chunk-cj4xndke.js";
import { statSync } from "fs";
import * as p from "path";
const S = Se(kre(), 1);
function L() {
    return {
        fileIndex: null,
        fileListRefreshPromise: null,
        cacheGeneration: 0,
        untrackedFetchPromise: null,
        cachedTrackedFiles: [],
        cachedConfigFiles: [],
        cachedTrackedDirs: [],
        ignorePatternsCache: null,
        ignorePatternsCacheKey: null,
        lastRefreshMs: 0,
        lastScanDurationMs: null,
        lastGitIndexMtime: null,
        loadedTrackedSignature: null,
        loadedMergedSignature: null,
        normalizedTrackedInputs: null,
        indexBuildComplete: Oe(),
        indexBaseDir: null,
        indexLoadCount: 0
    };
}
const nge = L();
function K2r(e) {
    e.fileIndex = null;
    e.fileListRefreshPromise = null;
    e.cacheGeneration++;
    e.untrackedFetchPromise = null;
    e.cachedTrackedFiles = [];
    e.cachedConfigFiles = [];
    e.cachedTrackedDirs = [];
    e.ignorePatternsCache = null;
    e.ignorePatternsCacheKey = null;
    e.lastRefreshMs = 0;
    e.lastScanDurationMs = null;
    e.lastGitIndexMtime = null;
    e.loadedTrackedSignature = null;
    e.loadedMergedSignature = null;
    e.normalizedTrackedInputs = null;
    e.indexBaseDir = null;
    e.indexLoadCount++;
}
function P(e, r, s, n) {
    let a = ++e.indexLoadCount;
    let o = r.loadFromFileListAsync(s);
    o.queryable.then(()=>{
        if (e.indexLoadCount === a) {
            e.indexBaseDir = n;
        }
    });
    return o.done;
}
function v(e) {
    let e_length = e.length;
    let s = Math.max(1, Math.floor(e_length / 500));
    let n = -2128831035;
    for(let a = 0; a < e_length; a += s){
        let o = e[a];
        for(let g = 0; g < o.length; g++){
            n = (n ^ o.charCodeAt(g)) * 16777619 | 0;
        }
        n = n * 16777619 | 0;
    }
    if (e_length > 0) {
        let a = e[e_length - 1];
        for(let o = 0; o < a.length; o++){
            n = (n ^ a.charCodeAt(o)) * 16777619 | 0;
        }
    }
    return `${e_length}:${(n >>> 0).toString(16)}`;
}
function w(e, r) {
    return `${e}\x00${v(r)}`;
}
function j() {
    let e = ur(se());
    if (!e) {
        return null;
    }
    try {
        return statSync(p.join(e, ".git", "index")).mtimeMs;
    } catch  {
        return null;
    }
}
async function y(e, r, s) {
    if (s === r) {
        return e;
    }
    let n = Array(e.length);
    let a = performance.now();
    for(let o = 0; o < e.length; o++){
        let g = p.join(r, e[o]);
        n[o] = p.relative(s, g);
        if ((o & 255) === 255 && performance.now() - a > Xtn) {
            await Lb();
            a = performance.now();
        }
    }
    return n;
}
async function B(e, r, s) {
    if (r.length === 0) {
        return;
    }
    if (!e.fileIndex) {
        return;
    }
    let n = await _(r);
    if (e.normalizedTrackedInputs?.cwd !== s) {
        return;
    }
    let a = [
        ...e.cachedTrackedFiles,
        ...e.cachedConfigFiles,
        ...e.cachedTrackedDirs,
        ...r,
        ...n
    ];
    let o = w(s, a);
    if (o === e.loadedMergedSignature) {
        t("[FileIndex] skipped index rebuild — merged paths unchanged");
        return;
    }
    if (await P(e, e.fileIndex, a, s)) {
        e.loadedMergedSignature = o;
        t(`[FileIndex] rebuilt index with ${e.cachedTrackedFiles.length} tracked + ${r.length} untracked files`);
    }
}
async function b(e, r, s) {
    let n = `${r}:${s}`;
    if (e.ignorePatternsCacheKey === n) {
        return e.ignorePatternsCache;
    }
    let a = ie();
    let o = [
        ".ignore",
        ".rgignore"
    ];
    let g = D([
        r,
        s
    ]);
    let m = S.default();
    let u = false;
    let f = g.flatMap((x)=>o.map((F)=>p.join(x, F)));
    let d = await Promise.all(f.map((x)=>a.readFile(x, {
            encoding: "utf8"
        }).catch(()=>null)));
    for (let [x, F] of d.entries()){
        if (F === null) {
            continue;
        }
        m.add(r4e(Mst(F), "file_suggestions_ignore"));
        u = true;
        t(`[FileIndex] loaded ignore patterns from ${f[x]}`);
    }
    let h = u ? m : null;
    e.ignorePatternsCache = h;
    e.ignorePatternsCacheKey = n;
    return h;
}
async function T(e, r) {
    let s = [];
    let n = performance.now();
    for(let a = 0; a < r.length; a++){
        let o = r[a];
        if (!S.default.isPathValid(o) || !e.ignores(o)) {
            s.push(o);
        }
        if ((a & 255) === 255 && performance.now() - n > Xtn) {
            await Lb();
            n = performance.now();
        }
    }
    return s;
}
async function A(e, abortSignal, s, n) {
    let a = Date.now();
    let e_cacheGeneration = e.cacheGeneration;
    t("[FileIndex] getFilesUsingGit called");
    let g = ur(n);
    if (!g) {
        t("[FileIndex] not a git repo, returning null");
        return null;
    }
    try {
        let m = Date.now();
        let u = await ct(Ot(), [
            "-c",
            "core.quotepath=false",
            "ls-files",
            "--recurse-submodules"
        ], {
            timeout: 5000,
            abortSignal,
            cwd: g
        });
        t(`[FileIndex] git ls-files (tracked) took ${Date.now() - m}ms`);
        if (u.code !== 0) {
            t(`[FileIndex] git ls-files failed (code=${u.code}, stderr=${u.stderr}), falling back to ripgrep`);
            return null;
        }
        let f = e.normalizedTrackedInputs;
        let d;
        let h = null;
        if (f !== null && f.repoRoot === g && f.cwd === n && f.rawStdout === u.stdout && e.cachedTrackedFiles.length > 0) {
            d = e.cachedTrackedFiles;
            t("[FileIndex] skipped path normalization — raw git paths unchanged");
        } else {
            let F = u.stdout.trim().split(`
`).filter(Boolean);
            d = await y(F, g, n);
            let I = await b(e, g, n);
            if (I) {
                let R = d.length;
                d = await T(I, d);
                t(`[FileIndex] applied ignore patterns: ${R} -> ${d.length} files`);
            }
            h = {
                repoRoot: g,
                cwd: n,
                rawStdout: u.stdout
            };
        }
        if (e_cacheGeneration !== e.cacheGeneration) {
            t("[FileIndex] discarding refresh results — cache was reset mid-refresh");
            return d;
        }
        if (h !== null) {
            e.normalizedTrackedInputs = h;
        }
        e.cachedTrackedFiles = d;
        let x = Date.now() - a;
        t(`[FileIndex] git ls-files: ${d.length} tracked files in ${x}ms`);
        i("tengu_file_suggestions_git_ls_files", {
            file_count: d.length,
            tracked_count: d.length,
            untracked_count: 0,
            duration_ms: x
        });
        X(e, g, n, s);
        return d;
    } catch (error) {
        t(`[FileIndex] git ls-files error: ${l(error)}`);
        return null;
    }
}
async function _(e) {
    let r = new Set;
    let s = performance.now();
    for(let n = 0; n < e.length; n++){
        E(e, n, n + 1, r);
        if ((n & 255) === 255 && performance.now() - s > Xtn) {
            await Lb();
            s = performance.now();
        }
    }
    return [
        ...r
    ].map((n)=>n + p.sep);
}
function E(e, r, s, n) {
    for(let a = r; a < s; a++){
        let o = p.dirname(e[a]);
        while(o !== "." && !n.has(o)){
            let g = p.dirname(o);
            if (g === o) {
                break;
            }
            n.add(o);
            o = g;
        }
    }
}
async function N(e, r) {
    return (await Promise.all(O5o.map((n)=>Pte(n, e, r)))).flatMap((n)=>n.map((a)=>a.filePath));
}
async function z(e, r, s, n) {
    t(`[FileIndex] getProjectFiles called, respectGitignore=${s}`);
    let a = await A(e, r, s, n);
    if (a !== null) {
        t(`[FileIndex] using git ls-files result (${a.length} files)`);
        return a;
    }
    t("[FileIndex] git ls-files returned null, falling back to ripgrep");
    e.normalizedTrackedInputs = null;
    let o = Date.now();
    let g = null;
    let m;
    {
        let d = [
            "--files",
            "--follow",
            "--hidden",
            "--glob",
            "!.git/",
            "--glob",
            "!.svn/",
            "--glob",
            "!.hg/",
            "--glob",
            "!.bzr/",
            "--glob",
            "!.jj/",
            "--glob",
            "!.sl/"
        ];
        if (!s) {
            d.push("--no-ignore-vcs");
        }
        m = await pre(d, n, r, {
            searchOtherAppsData: true
        });
    }
    let u = m.map((d)=>p.relative(n, d));
    let f = Date.now() - o;
    t(`[FileIndex] ripgrep: ${u.length} files in ${f}ms`);
    i("tengu_file_suggestions_ripgrep", {
        file_count: u.length,
        duration_ms: f
    });
    return u;
}
async function q(e, r) {
    let s = AbortSignal.timeout(10000);
    let n = e.fileIndex ??= new Jtn;
    try {
        let a = ft();
        let o = ce();
        let g = a.respectGitignore ?? o.respectGitignore ?? true;
        let m = se();
        let [u, f] = await Promise.all([
            z(e, s, g, m),
            N(m, r)
        ]);
        e.cachedConfigFiles = f;
        let d = [
            ...u,
            ...f
        ];
        let h = await _(d);
        e.cachedTrackedDirs = h;
        let x = [
            ...h,
            ...d
        ];
        let F = w(m, x);
        if (F !== e.loadedTrackedSignature) {
            if (await P(e, n, x, m)) {
                e.loadedTrackedSignature = F;
                e.loadedMergedSignature = null;
            }
        } else {
            t("[FileIndex] skipped index rebuild — tracked paths unchanged");
        }
    } catch (error) {
        t(`[FileIndex] getPathsForSuggestions failed: ${l(error)}`, {
            level: "error"
        });
    }
    return n;
}
function O(e, r) {
    let s = Math.min(e.length, r.length);
    let n = 0;
    while(n < s && e[n] === r[n]){
        n++;
    }
    return e.substring(0, n);
}
function Y2r(e) {
    if (e.length === 0) {
        return "";
    }
    let r = e.map((n)=>n.displayText);
    let s = r[0];
    for(let n = 1; n < r.length; n++){
        let a = r[n];
        s = O(s, a);
        if (s === "") {
            return "";
        }
    }
    return s;
}
function C(displayText, score) {
    return {
        id: `file-${displayText}`,
        displayText,
        metadata: score !== undefined ? {
            score
        } : undefined
    };
}
function k(e) {
    let r = e.slice(0, F7e);
    return r.map((s, n)=>C(s, n / Math.max(r.length, 1)));
}
const U = 5000;
const W = 1000;
function Vbn(e, r) {
    if (e.fileListRefreshPromise || Ce()) {
        return;
    }
    let s = j();
    if (e.fileIndex) {
        if (s === null && e.lastRefreshMs > 0 && e.lastScanDurationMs !== null && e.lastScanDurationMs > W) {
            return;
        }
        if (!(s !== null && s !== e.lastGitIndexMtime) && Date.now() - e.lastRefreshMs < U) {
            return;
        }
    }
    let e_cacheGeneration = e.cacheGeneration;
    let a = Date.now();
    e.fileIndex ??= new Jtn;
    e.fileListRefreshPromise = q(e, r).then((o)=>{
        if (e_cacheGeneration !== e.cacheGeneration) {
            return o;
        }
        e.fileListRefreshPromise = null;
        e.indexBuildComplete.emit();
        e.lastGitIndexMtime = s;
        let g = Date.now();
        e.lastRefreshMs = g;
        e.lastScanDurationMs = g - a;
        t(`[FileIndex] cache refresh completed in ${e.lastScanDurationMs}ms`);
        return o;
    }).catch((o)=>{
        t(`[FileIndex] Cache refresh failed: ${l(o)}`);
        c(o);
        if (e_cacheGeneration === e.cacheGeneration) {
            e.fileListRefreshPromise = null;
        }
        return e.fileIndex ??= new Jtn;
    });
}
async function H(baseDir) {
    let r = ie();
    try {
        return (await r.readdir(baseDir)).map((n)=>{
            let a = p.join(baseDir, n.name);
            let o = p.relative(baseDir, a);
            if (n.isDirectory()) {
                return o + p.sep;
            }
            return o;
        });
    } catch (error) {
        t(`[FileSuggestions] readdir failed for cwd: ${l(error)}`, {
            level: "error"
        });
        return [];
    }
}
async function pzt(e, r, s = false, n) {
    let { items } = await DDs(e, r, s, n);
    return items;
}
async function DDs(e, query, s, n, a = true) {
    if (Ce()) {
        return {
            items: [],
            baseDir: undefined
        };
    }
    if (Mt()) {
        if (!query && !s) {
            return {
                items: [],
                baseDir: undefined
            };
        }
        return {
            items: await V(query),
            baseDir: undefined
        };
    }
    let baseDir_1 = se();
    if (!query && !s) {
        return {
            items: [],
            baseDir: baseDir_1
        };
    }
    if ((a ? vnr(ft().fileSuggestion) : undefined)?.type === "command") {
        let u = {
            id: K(),
            project: {
                originalCwd: we(),
                projectRoot: cr()
            }
        };
        let f = {
            ...Fd(u, baseDir_1),
            query
        };
        let d = await FXr(u, f);
        return {
            items: k(d),
            baseDir: baseDir_1
        };
    }
    if (query === "" || query === "." || query === "./") {
        let u = await H(baseDir_1);
        Vbn(e, n);
        return {
            items: k(u),
            baseDir: baseDir_1
        };
    }
    let m = Date.now();
    try {
        let u = e.fileListRefreshPromise !== null;
        Vbn(e, n);
        let f = query;
        let d = `.${p.sep}`;
        if (query.startsWith(d)) {
            f = query.substring(2);
        }
        if (f.startsWith("~")) {
            f = et(f);
        }
        let items = e.fileIndex ? e.fileIndex.search(f, F7e).map((I)=>C(I.path, I.score)) : [];
        let baseDir = e.indexBaseDir ?? baseDir_1;
        let F = Date.now() - m;
        t(`[FileIndex] generateFileSuggestions: ${items.length} results in ${F}ms (${u ? "partial" : "full"} index)`);
        i("tengu_file_suggestions_query", {
            duration_ms: F,
            cache_hit: !u,
            result_count: items.length,
            query_length: query.length
        });
        return {
            items,
            baseDir
        };
    } catch (error) {
        c(error);
        return {
            items: [],
            baseDir: baseDir_1
        };
    }
}
async function V(query) {
    let r = vr();
    if (!r || !al()) {
        return [];
    }
    try {
        return (await r.sendControlRequest({
            subtype: "file_suggestions",
            query
        })).suggestions.map((n)=>C(n.path, n.score));
    } catch (error) {
        t(`[FileIndex] remote file_suggestions RPC failed: ${l(error)}`);
        return [];
    }
}
function qbn({ suggestion, input, partialPath, startPos, onInputChange, setCursorOffset }) {
    let g = typeof suggestion === "string" ? suggestion : suggestion.displayText;
    let m = input.substring(0, startPos) + g + input.substring(startPos + partialPath.length);
    onInputChange(m);
    let u = startPos + g.length;
    setCursorOffset(u);
    return m;
}
function X(e, r, s, n) {
    if (e.untrackedFetchPromise) {
        return;
    }
    let a = n ? [
        "-c",
        "core.quotepath=false",
        "ls-files",
        "--others",
        "--exclude-standard"
    ] : [
        "-c",
        "core.quotepath=false",
        "ls-files",
        "--others"
    ];
    let e_cacheGeneration = e.cacheGeneration;
    e.untrackedFetchPromise = ct(Ot(), a, {
        timeout: 10000,
        cwd: r
    }).then(async (g)=>{
        if (e_cacheGeneration !== e.cacheGeneration) {
            return;
        }
        if (g.code !== 0) {
            return;
        }
        let m = g.stdout.trim().split(`
`).filter(Boolean);
        let u = await y(m, r, s);
        let f = await b(e, r, s);
        if (f && u.length > 0) {
            let d = u.length;
            u = await T(f, u);
            t(`[FileIndex] applied ignore patterns to untracked: ${d} -> ${u.length} files`);
        }
        t(`[FileIndex] background untracked fetch: ${u.length} files`);
        return B(e, u, s);
    }).catch((g)=>{
        t(`[FileIndex] background untracked fetch failed: ${g}`);
    }).finally(()=>{
        e.untrackedFetchPromise = null;
    });
}
export { nge, K2r, Y2r, Vbn, pzt, DDs, qbn };
