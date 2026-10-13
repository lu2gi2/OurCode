import { stat, watchFile, unwatchFile, watch } from "fs";
import { stat as stat_1, readdir, lstat, realpath, open } from "fs/promises";
import { EventEmitter } from "events";
import * as f from "path";
import { resolve, relative, join, sep } from "path";
import { Readable } from "stream";
import { type } from "os";
const p = {
    FILE_TYPE: "files",
    DIR_TYPE: "directories",
    FILE_DIR_TYPE: "files_directories",
    EVERYTHING_TYPE: "all"
};
const N = {
    root: ".",
    fileFilter: (t)=>true,
    directoryFilter: (t)=>true,
    type: p.FILE_TYPE,
    lstat: false,
    depth: 2147483648,
    alwaysStat: false,
    highWaterMark: 4096
};
Object.freeze(N);
const V = "READDIRP_RECURSIVE_ERROR";
const Et = new Set([
    "ENOENT",
    "EPERM",
    "EACCES",
    "ELOOP",
    V
]);
const U = [
    p.DIR_TYPE,
    p.EVERYTHING_TYPE,
    p.FILE_DIR_TYPE,
    p.FILE_TYPE
];
const Pt = new Set([
    p.DIR_TYPE,
    p.EVERYTHING_TYPE,
    p.FILE_DIR_TYPE
]);
const gt = new Set([
    p.EVERYTHING_TYPE,
    p.FILE_DIR_TYPE,
    p.FILE_TYPE
]);
const Rt = (t)=>Et.has(t.code);
const Dt = false;
const G = (t)=>true;
const K = (t)=>{
    if (t === undefined) {
        return G;
    }
    if (typeof t === "function") {
        return t;
    }
    if (typeof t === "string") {
        let s = t.trim();
        return (e)=>e.basename === s;
    }
    if (Array.isArray(t)) {
        let s = t.map((e)=>e.trim());
        return (e)=>s.some((i)=>e.basename === i);
    }
    return G;
};
class B extends Readable {
    constructor(t = {}){
        super({
            objectMode: true,
            autoDestroy: true,
            highWaterMark: t.highWaterMark
        });
        let s = {
            ...N,
            ...t
        };
        let { root, type } = s;
        this._fileFilter = K(s.fileFilter);
        this._directoryFilter = K(s.directoryFilter);
        let r = s.lstat ? lstat : stat_1;
        if (Dt) {
            this._stat = (a)=>r(a, {
                    bigint: true
                });
        } else {
            this._stat = r;
        }
        this._maxDepth = s.depth ?? N.depth;
        this._wantsDir = type ? Pt.has(type) : false;
        this._wantsFile = type ? gt.has(type) : false;
        this._wantsEverything = type === p.EVERYTHING_TYPE;
        this._root = resolve(root);
        this._isDirent = !s.alwaysStat;
        this._statsProp = this._isDirent ? "dirent" : "stats";
        this._rdOptions = {
            encoding: "utf8",
            withFileTypes: this._isDirent
        };
        this.parents = [
            this._exploreDir(root, 1)
        ];
        this.reading = false;
        this.parent = undefined;
    }
    async _read(t) {
        if (this.reading) {
            return;
        }
        this.reading = true;
        try {
            while(!this.destroyed && t > 0){
                let s = this.parent;
                let e = s && s.files;
                if (e && e.length > 0) {
                    let { path, depth } = s;
                    let a = e.splice(0, t).map((o)=>this._formatEntry(o, path));
                    let n = await Promise.all(a);
                    for (let o of n){
                        if (!o) {
                            continue;
                        }
                        if (this.destroyed) {
                            return;
                        }
                        let c = await this._getEntryType(o);
                        if (c === "directory" && this._directoryFilter(o)) {
                            if (depth <= this._maxDepth) {
                                this.parents.push(this._exploreDir(o.fullPath, depth + 1));
                            }
                            if (this._wantsDir) {
                                this.push(o);
                                t--;
                            }
                        } else if ((c === "file" || this._includeAsFile(o)) && this._fileFilter(o)) {
                            if (this._wantsFile) {
                                this.push(o);
                                t--;
                            }
                        }
                    }
                } else {
                    let i = this.parents.pop();
                    if (!i) {
                        this.push(null);
                        break;
                    }
                    this.parent = await i;
                    if (this.destroyed) {
                        return;
                    }
                }
            }
        } catch (error) {
            this.destroy(error);
        } finally{
            this.reading = false;
        }
    }
    async _exploreDir(t, depth) {
        let files;
        try {
            files = await readdir(t, this._rdOptions);
        } catch (error) {
            this._onError(error);
        }
        return {
            files,
            depth,
            path: t
        };
    }
    async _formatEntry(t, s) {
        let e;
        let basename = this._isDirent ? t.name : t;
        try {
            let fullPath = resolve(join(s, basename));
            e = {
                path: relative(this._root, fullPath),
                fullPath,
                basename
            };
            e[this._statsProp] = this._isDirent ? t : await this._stat(fullPath);
        } catch (error) {
            this._onError(error);
            return;
        }
        return e;
    }
    _onError(t) {
        if (Rt(t) && !this.destroyed) {
            this.emit("warn", t);
        } else {
            this.destroy(t);
        }
    }
    async _getEntryType(t) {
        if (!t && this._statsProp in t) {
            return "";
        }
        let s = t[this._statsProp];
        if (!s) {
            return "";
        }
        if (s.isFile()) {
            return "file";
        }
        if (s.isDirectory()) {
            return "directory";
        }
        if (s && s.isSymbolicLink()) {
            let e = t.fullPath;
            try {
                let i = await realpath(e);
                let r = await lstat(i);
                if (r.isFile()) {
                    return "file";
                }
                if (r.isDirectory()) {
                    let a = i.length;
                    if (e.startsWith(i) && e.substr(a, 1) === sep) {
                        let n = Error(`Circular symlink detected: "${e}" points to "${i}"`);
                        n.code = V;
                        return this._onError(n);
                    }
                    return "directory";
                }
            } catch (error) {
                this._onError(error);
                return "";
            }
        }
    }
    _includeAsFile(t) {
        let s = t && t[this._statsProp];
        return s && this._wantsEverything && !s.isDirectory();
    }
}
function q(t, s = {}) {
    let e = s.entryType || s.type;
    if (e === "both") {
        e = p.FILE_DIR_TYPE;
    }
    if (e) {
        s.type = e;
    }
    if (!t) {
        throw Error("readdirp: root argument is required. Usage: readdirp(root, options)");
    } else if (typeof t !== "string") {
        throw TypeError("readdirp: root argument must be a string. Usage: readdirp(root, options)");
    } else if (e && !U.includes(e)) {
        throw Error(`readdirp: Invalid type passed. Use one of ${U.join(", ")}`);
    }
    s.root = t;
    return new B(s);
}
const vt = "data";
const C = "end";
const tt = "close";
const F = ()=>{};
const A = "linux";
const v = A === "win32";
const Ft = A === "darwin";
const At = A === "linux";
const St = A === "freebsd";
const st = type() === "OS400";
const u = {
    ALL: "all",
    READY: "ready",
    ADD: "add",
    CHANGE: "change",
    ADD_DIR: "addDir",
    UNLINK: "unlink",
    UNLINK_DIR: "unlinkDir",
    RAW: "raw",
    ERROR: "error"
};
const y = u;
const Nt = "watch";
const Wt = {
    lstat,
    stat: stat_1
};
const P = "listeners";
const I = "errHandlers";
const g = "rawEmitters";
const Lt = [
    P,
    I,
    g
];
const kt = new Set([
    "3dm",
    "3ds",
    "3g2",
    "3gp",
    "7z",
    "a",
    "aac",
    "adp",
    "afdesign",
    "afphoto",
    "afpub",
    "ai",
    "aif",
    "aiff",
    "alz",
    "ape",
    "apk",
    "appimage",
    "ar",
    "arj",
    "asf",
    "au",
    "avi",
    "bak",
    "baml",
    "bh",
    "bin",
    "bk",
    "bmp",
    "btif",
    "bz2",
    "bzip2",
    "cab",
    "caf",
    "cgm",
    "class",
    "cmx",
    "cpio",
    "cr2",
    "cur",
    "dat",
    "dcm",
    "deb",
    "dex",
    "djvu",
    "dll",
    "dmg",
    "dng",
    "doc",
    "docm",
    "docx",
    "dot",
    "dotm",
    "dra",
    "DS_Store",
    "dsk",
    "dts",
    "dtshd",
    "dvb",
    "dwg",
    "dxf",
    "ecelp4800",
    "ecelp7470",
    "ecelp9600",
    "egg",
    "eol",
    "eot",
    "epub",
    "exe",
    "f4v",
    "fbs",
    "fh",
    "fla",
    "flac",
    "flatpak",
    "fli",
    "flv",
    "fpx",
    "fst",
    "fvt",
    "g3",
    "gh",
    "gif",
    "graffle",
    "gz",
    "gzip",
    "h261",
    "h263",
    "h264",
    "icns",
    "ico",
    "ief",
    "img",
    "ipa",
    "iso",
    "jar",
    "jpeg",
    "jpg",
    "jpgv",
    "jpm",
    "jxr",
    "key",
    "ktx",
    "lha",
    "lib",
    "lvp",
    "lz",
    "lzh",
    "lzma",
    "lzo",
    "m3u",
    "m4a",
    "m4v",
    "mar",
    "mdi",
    "mht",
    "mid",
    "midi",
    "mj2",
    "mka",
    "mkv",
    "mmr",
    "mng",
    "mobi",
    "mov",
    "movie",
    "mp3",
    "mp4",
    "mp4a",
    "mpeg",
    "mpg",
    "mpga",
    "mxu",
    "nef",
    "npx",
    "numbers",
    "nupkg",
    "o",
    "odp",
    "ods",
    "odt",
    "oga",
    "ogg",
    "ogv",
    "otf",
    "ott",
    "pages",
    "pbm",
    "pcx",
    "pdb",
    "pdf",
    "pea",
    "pgm",
    "pic",
    "png",
    "pnm",
    "pot",
    "potm",
    "potx",
    "ppa",
    "ppam",
    "ppm",
    "pps",
    "ppsm",
    "ppsx",
    "ppt",
    "pptm",
    "pptx",
    "psd",
    "pya",
    "pyc",
    "pyo",
    "pyv",
    "qt",
    "rar",
    "ras",
    "raw",
    "resources",
    "rgb",
    "rip",
    "rlc",
    "rmf",
    "rmvb",
    "rpm",
    "rtf",
    "rz",
    "s3m",
    "s7z",
    "scpt",
    "sgi",
    "shar",
    "snap",
    "sil",
    "sketch",
    "slk",
    "smv",
    "snk",
    "so",
    "stl",
    "suo",
    "sub",
    "swf",
    "tar",
    "tbz",
    "tbz2",
    "tga",
    "tgz",
    "thmx",
    "tif",
    "tiff",
    "tlz",
    "ttc",
    "ttf",
    "txz",
    "udf",
    "uvh",
    "uvi",
    "uvm",
    "uvp",
    "uvs",
    "uvu",
    "viv",
    "vob",
    "war",
    "wav",
    "wax",
    "wbmp",
    "wdp",
    "weba",
    "webm",
    "webp",
    "whl",
    "wim",
    "wm",
    "wma",
    "wmv",
    "wmx",
    "woff",
    "woff2",
    "wrm",
    "wvx",
    "xbm",
    "xif",
    "xla",
    "xlam",
    "xls",
    "xlsb",
    "xlsm",
    "xlsx",
    "xlt",
    "xltm",
    "xltx",
    "xm",
    "xmind",
    "xpi",
    "xpm",
    "xwd",
    "xz",
    "z",
    "zip",
    "zipx"
]);
const Ct = (t)=>kt.has(f.extname(t).slice(1).toLowerCase());
const k = (t, s)=>{
    if (t instanceof Set) {
        t.forEach(s);
    } else {
        s(t);
    }
};
const D = (t, s, e)=>{
    let i = t[s];
    if (!(i instanceof Set)) {
        t[s] = i = new Set([
            i
        ]);
    }
    i.add(e);
};
const Ot = (t)=>(s)=>{
        let e = t[s];
        if (e instanceof Set) {
            e.clear();
        } else {
            delete t[s];
        }
    };
const b = (t, s, e)=>{
    let i = t[s];
    if (i instanceof Set) {
        i.delete(e);
    } else if (i === e) {
        delete t[s];
    }
};
const et = (listeners)=>{
    if (listeners instanceof Set) {
        return listeners.size === 0;
    }
    return !listeners;
};
const T = new Map;
function X(watchedPath, s, e, errHandler, r) {
    let a = (n, o)=>{
        e(watchedPath);
        r(n, o, {
            watchedPath
        });
        if (o && watchedPath !== o) {
            x(f.resolve(watchedPath, o), P, f.join(watchedPath, o));
        }
    };
    try {
        return watch(watchedPath, {
            persistent: s.persistent
        }, a);
    } catch (error) {
        errHandler(error);
        return;
    }
}
var x = (t, s, e, i, r)=>{
    let a = T.get(t);
    if (!a) {
        return;
    }
    k(a[s], (n)=>{
        n(e, i, r);
    });
};
const Ht = (t, s, e, { listener, errHandler, rawEmitter })=>{
    let o = T.get(s);
    let watcher;
    if (!e.persistent) {
        watcher = X(t, e, listener, errHandler, rawEmitter);
        if (!watcher) {
            return;
        }
        watcher.on(y.ERROR, async (h)=>{
            if (v && h.code === "EPERM") {
                try {
                    await (await open(t, "r")).close();
                    errHandler(h);
                } catch (d) {}
            } else {
                errHandler(h);
            }
        });
        return watcher.close.bind(watcher);
    }
    if (o) {
        D(o, P, listener);
        D(o, I, errHandler);
        D(o, g, rawEmitter);
    } else {
        watcher = X(t, e, x.bind(null, s, P), errHandler, x.bind(null, s, g));
        if (!watcher) {
            return;
        }
        watcher.on(y.ERROR, async (h)=>{
            let d = x.bind(null, s, I);
            if (o) {
                o.watcherUnusable = true;
            }
            if (v && h.code === "EPERM") {
                try {
                    await (await open(t, "r")).close();
                    d(h);
                } catch (l) {}
            } else {
                d(h);
            }
        });
        o = {
            listeners: listener,
            errHandlers: errHandler,
            rawEmitters: rawEmitter,
            watcher
        };
        T.set(s, o);
    }
    return ()=>{
        b(o, P, listener);
        b(o, I, errHandler);
        b(o, g, rawEmitter);
        if (et(o.listeners) && o.watcher) {
            o.watcher.close();
            T.delete(s);
            Lt.forEach(Ot(o));
            o.watcher = undefined;
            Object.freeze(o);
        }
    };
};
const L = new Map;
const Mt = (t, s, options, { listener, rawEmitter })=>{
    let n = L.get(s);
    let o = n && n.options;
    if (o && (o.persistent < options.persistent || o.interval > options.interval)) {
        unwatchFile(s);
        n = undefined;
    }
    if (n) {
        D(n, P, listener);
        D(n, g, rawEmitter);
    } else {
        n = {
            listeners: listener,
            rawEmitters: rawEmitter,
            options,
            watcher: watchFile(s, options, (curr, prev)=>{
                k(n.rawEmitters, (l)=>{
                    l(y.CHANGE, s, {
                        curr,
                        prev
                    });
                });
                let c_mtimeMs = curr.mtimeMs;
                if (curr.size !== prev.size || c_mtimeMs > prev.mtimeMs || c_mtimeMs === 0) {
                    k(n.listeners, (l)=>l(t, curr));
                }
            })
        };
        L.set(s, n);
    }
    return ()=>{
        b(n, P, listener);
        b(n, g, rawEmitter);
        if (et(n.listeners) && n.watcher) {
            L.delete(s);
            unwatchFile(s);
            n.options = n.watcher = undefined;
            Object.freeze(n);
        }
    };
};
class O {
    constructor(t){
        this.fsw = t;
        this._boundHandleError = (s)=>t._handleError(s);
    }
    _watchWithNodeFs(t, listener) {
        let options = this.fsw.options;
        let i = f.dirname(t);
        let r = f.basename(t);
        this.fsw._getWatchedDir(i).add(r);
        let n = f.resolve(t);
        let o = {
            persistent: options.persistent
        };
        if (!listener) {
            listener = F;
        }
        let c;
        if (options.usePolling) {
            let h = options.interval !== options.binaryInterval;
            o.interval = h && Ct(r) ? options.binaryInterval : options.interval;
            c = Mt(t, n, o, {
                listener,
                rawEmitter: this.fsw._emitRaw
            });
        } else {
            c = Ht(t, n, o, {
                listener,
                errHandler: this._boundHandleError,
                rawEmitter: this.fsw._emitRaw
            });
        }
        return c;
    }
    _handleFile(t, s, e) {
        if (this.fsw.closed) {
            return;
        }
        let i = f.dirname(t);
        let r = f.basename(t);
        let a = this.fsw._getWatchedDir(i);
        let n = s;
        if (a.has(r)) {
            return;
        }
        let o = async (h, d)=>{
            if (!this.fsw._throttle(Nt, t, 5)) {
                return;
            }
            if (!d || d.mtimeMs === 0) {
                try {
                    let l = await stat_1(t);
                    if (this.fsw.closed) {
                        return;
                    }
                    let { atimeMs, mtimeMs } = l;
                    if (!atimeMs || atimeMs <= mtimeMs || mtimeMs !== n.mtimeMs) {
                        this.fsw._emit(y.CHANGE, t, l);
                    }
                    if ((Ft || At || St) && n.ino !== l.ino) {
                        this.fsw._closeFile(t);
                        n = l;
                        let E = this._watchWithNodeFs(t, o);
                        if (E) {
                            this.fsw._addPathCloser(t, E);
                        }
                    } else {
                        n = l;
                    }
                } catch (l) {
                    this.fsw._remove(i, r);
                }
            } else if (a.has(r)) {
                let { atimeMs, mtimeMs } = d;
                if (!atimeMs || atimeMs <= mtimeMs || mtimeMs !== n.mtimeMs) {
                    this.fsw._emit(y.CHANGE, t, d);
                }
                n = d;
            }
        };
        let c = this._watchWithNodeFs(t, o);
        if (!(e && this.fsw.options.ignoreInitial) && this.fsw._isntIgnored(t)) {
            if (!this.fsw._throttle(y.ADD, t, 0)) {
                return;
            }
            this.fsw._emit(y.ADD, t, s);
        }
        return c;
    }
    async _handleSymlink(t, s, e, i) {
        if (this.fsw.closed) {
            return;
        }
        let t_fullPath = t.fullPath;
        let a = this.fsw._getWatchedDir(s);
        if (!this.fsw.options.followSymlinks) {
            this.fsw._incrReadyCount();
            let n;
            try {
                n = await realpath(e);
            } catch (o) {
                this.fsw._emitReady();
                return true;
            }
            if (this.fsw.closed) {
                return;
            }
            if (a.has(i)) {
                if (this.fsw._symlinkPaths.get(t_fullPath) !== n) {
                    this.fsw._symlinkPaths.set(t_fullPath, n);
                    this.fsw._emit(y.CHANGE, e, t.stats);
                }
            } else {
                a.add(i);
                this.fsw._symlinkPaths.set(t_fullPath, n);
                this.fsw._emit(y.ADD, e, t.stats);
            }
            this.fsw._emitReady();
            return true;
        }
        if (this.fsw._symlinkPaths.has(t_fullPath)) {
            return true;
        }
        this.fsw._symlinkPaths.set(t_fullPath, true);
    }
    _handleRead(t, s, e, i, r, a, n) {
        t = f.join(t, "");
        n = this.fsw._throttle("readdir", t, 1000);
        if (!n) {
            return;
        }
        let o = this.fsw._getWatchedDir(e.path);
        let c = new Set;
        let h = this.fsw._readdirp(t, {
            fileFilter: (d)=>e.filterPath(d),
            directoryFilter: (d)=>e.filterDir(d)
        });
        if (!h) {
            return;
        }
        h.on(vt, async (d)=>{
            if (this.fsw.closed) {
                h = undefined;
                return;
            }
            let d_path = d.path;
            let m = f.join(t, d_path);
            c.add(d_path);
            if (d.stats.isSymbolicLink() && await this._handleSymlink(d, t, m, d_path)) {
                return;
            }
            if (this.fsw.closed) {
                h = undefined;
                return;
            }
            if (d_path === i || !i && !o.has(d_path)) {
                this.fsw._incrReadyCount();
                m = f.join(r, f.relative(r, m));
                this._addToNodeFs(m, s, e, a + 1);
            }
        }).on(y.ERROR, this._boundHandleError);
        return new Promise((resolvePromise, rejectPromise)=>{
            if (!h) {
                return rejectPromise();
            }
            h.once(C, ()=>{
                if (this.fsw.closed) {
                    h = undefined;
                    return;
                }
                let m = n ? n.clear() : false;
                resolvePromise(undefined);
                o.getChildren().filter((w)=>w !== t && !c.has(w)).forEach((w)=>{
                    this.fsw._remove(t, w);
                });
                h = undefined;
                if (m) {
                    this._handleRead(t, false, e, i, r, a, n);
                }
            });
        });
    }
    async _handleDir(t, s, e, i, r, a, n) {
        let o = this.fsw._getWatchedDir(f.dirname(t));
        let c = o.has(f.basename(t));
        if (!(e && this.fsw.options.ignoreInitial) && !r && !c) {
            this.fsw._emit(y.ADD_DIR, t, s);
        }
        o.add(f.basename(t));
        this.fsw._getWatchedDir(t);
        let h;
        let d;
        let depth = this.fsw.options.depth;
        if ((depth == null || i <= depth) && !this.fsw._symlinkPaths.has(n)) {
            if (!r) {
                await this._handleRead(t, e, a, r, t, i, h);
                if (this.fsw.closed) {
                    return;
                }
            }
            d = this._watchWithNodeFs(t, (m, w)=>{
                if (w && w.mtimeMs === 0) {
                    return;
                }
                this._handleRead(m, false, a, r, t, i, h);
            });
        }
        return d;
    }
    async _addToNodeFs(t, s, e, i, r) {
        let _emitReady = this.fsw._emitReady;
        if (this.fsw._isIgnored(t) || this.fsw.closed) {
            _emitReady();
            return false;
        }
        let n = this.fsw._getWatchHelpers(t);
        if (e) {
            n.filterPath = (o)=>e.filterPath(o);
            n.filterDir = (o)=>e.filterDir(o);
        }
        try {
            let o = await Wt[n.statMethod](n.watchPath);
            if (this.fsw.closed) {
                return;
            }
            if (this.fsw._isIgnored(n.watchPath, o)) {
                _emitReady();
                return false;
            }
            let c = this.fsw.options.followSymlinks;
            let h;
            if (o.isDirectory()) {
                let d = f.resolve(t);
                let l = c ? await realpath(t) : t;
                if (this.fsw.closed) {
                    return;
                }
                h = await this._handleDir(n.watchPath, o, s, i, r, n, l);
                if (this.fsw.closed) {
                    return;
                }
                if (d !== l && l !== undefined) {
                    this.fsw._symlinkPaths.set(d, l);
                }
            } else if (o.isSymbolicLink()) {
                let d = c ? await realpath(t) : t;
                if (this.fsw.closed) {
                    return;
                }
                let l = f.dirname(n.watchPath);
                this.fsw._getWatchedDir(l).add(n.watchPath);
                this.fsw._emit(y.ADD, n.watchPath, o);
                h = await this._handleDir(l, o, s, i, t, n, d);
                if (this.fsw.closed) {
                    return;
                }
                if (d !== undefined) {
                    this.fsw._symlinkPaths.set(f.resolve(t), d);
                }
            } else {
                h = this._handleFile(n.watchPath, o, s);
            }
            _emitReady();
            if (h) {
                this.fsw._addPathCloser(t, h);
            }
            return false;
        } catch (error) {
            if (this.fsw._handleError(error)) {
                _emitReady();
                return t;
            }
        }
    }
}
const H = "/";
const Gt = "//";
const ht = ".";
const Kt = "..";
const Vt = "string";
const Bt = /\\/g;
const it = /\/\//;
const $t = /\..*\.(sw[px])$|~$|\.subl.*\.tmp/;
const qt = /^\.[/\\]/;
function S(t) {
    if (Array.isArray(t)) {
        return t;
    }
    return [
        t
    ];
}
const M = (t)=>typeof t === "object" && t !== null && !(t instanceof RegExp);
function Jt(t) {
    if (typeof t === "function") {
        return t;
    }
    if (typeof t === "string") {
        return (s)=>t === s;
    }
    if (t instanceof RegExp) {
        return (s)=>t.test(s);
    }
    if (typeof t === "object" && t !== null) {
        return (s)=>{
            if (t.path === s) {
                return true;
            }
            if (t.recursive) {
                let e = f.relative(t.path, s);
                if (!e) {
                    return false;
                }
                return !e.startsWith("..") && !f.isAbsolute(e);
            }
            return false;
        };
    }
    return ()=>false;
}
function Qt(t) {
    if (typeof t !== "string") {
        throw Error("string expected");
    }
    t = f.normalize(t);
    t = t.replace(/\\/g, "/");
    let s = false;
    if (t.startsWith("//")) {
        s = true;
    }
    let e = /\/\//;
    while(t.match(e)){
        t = t.replace(e, "/");
    }
    if (s) {
        t = `/${t}`;
    }
    return t;
}
function rt(t, s, e) {
    let i = Qt(s);
    for (const a of t){
        if (a(i, e)) {
            return true;
        }
    }
    return false;
}
function Xt(t, s) {
    if (t == null) {
        throw TypeError("anymatch: specify first argument");
    }
    let i = S(t).map((r)=>Jt(r));
    if (s == null) {
        return (r, a)=>rt(i, r, a);
    }
    return rt(i, s);
}
const nt = (t)=>{
    let s = S(t).flat();
    if (!s.every((e)=>typeof e === Vt)) {
        throw TypeError(`Non-string provided as watch path: ${s}`);
    }
    return s.map(ct);
};
const ot = (t)=>{
    let s = t.replace(Bt, H);
    let e = false;
    if (s.startsWith(Gt)) {
        e = true;
    }
    while(s.match(it)){
        s = s.replace(it, H);
    }
    if (e) {
        s = H + s;
    }
    return s;
};
var ct = (t)=>ot(f.normalize(ot(t)));
const at = (t = "")=>(s)=>{
        if (typeof s === "string") {
            return ct(f.isAbsolute(s) ? s : f.join(t, s));
        } else {
            return s;
        }
    };
const Zt = (t, cwd)=>{
    if (f.isAbsolute(t)) {
        return t;
    }
    return f.join(cwd, t);
};
const ts = Object.freeze(new Set);
class lt {
    constructor(t, s){
        this.path = t;
        this._removeWatcher = s;
        this.items = new Set;
    }
    add(t) {
        let { items } = this;
        if (!items) {
            return;
        }
        if (t !== ht && t !== Kt) {
            items.add(t);
        }
    }
    async remove(t) {
        let { items } = this;
        if (!items) {
            return;
        }
        items.delete(t);
        if (items.size > 0) {
            return;
        }
        let path = this.path;
        try {
            await readdir(path);
        } catch (i) {
            if (this._removeWatcher) {
                this._removeWatcher(f.dirname(path), f.basename(path));
            }
        }
    }
    has(t) {
        let { items } = this;
        if (!items) {
            return;
        }
        return items.has(t);
    }
    getChildren() {
        let { items } = this;
        if (!items) {
            return [];
        }
        return [
            ...items.values()
        ];
    }
    dispose() {
        this.items.clear();
        this.path = "";
        this._removeWatcher = F;
        this.items = ts;
        Object.freeze(this);
    }
}
const ss = "stat";
const es = "lstat";
class dt {
    constructor(t, s, e){
        this.fsw = e;
        let i = t;
        this.path = t = t.replace(qt, "");
        this.watchPath = i;
        this.fullWatchPath = f.resolve(i);
        this.dirParts = [];
        this.dirParts.forEach((r)=>{
            if (r.length > 1) {
                r.pop();
            }
        });
        this.followSymlinks = s;
        this.statMethod = s ? ss : es;
    }
    entryPath(t) {
        return f.join(this.watchPath, f.relative(this.watchPath, t.fullPath));
    }
    filterPath(t) {
        let { stats } = t;
        if (stats && stats.isSymbolicLink()) {
            return this.filterDir(t);
        }
        let e = this.entryPath(t);
        return this.fsw._isntIgnored(e, stats) && this.fsw._hasReadPermissions(stats);
    }
    filterDir(t) {
        return this.fsw._isntIgnored(this.entryPath(t), t.stats);
    }
}
class z extends EventEmitter {
    constructor(t = {}){
        super();
        this.closed = false;
        this._closers = new Map;
        this._ignoredPaths = new Set;
        this._throttled = new Map;
        this._streams = new Set;
        this._symlinkPaths = new Map;
        this._watched = new Map;
        this._pendingWrites = new Map;
        this._pendingUnlinks = new Map;
        this._readyCount = 0;
        this._readyEmitted = false;
        let s = t.awaitWriteFinish;
        let e = {
            stabilityThreshold: 2000,
            pollInterval: 100
        };
        let i = {
            persistent: true,
            ignoreInitial: false,
            ignorePermissionErrors: false,
            interval: 100,
            binaryInterval: 300,
            followSymlinks: true,
            usePolling: false,
            atomic: true,
            ...t,
            ignored: t.ignored ? S(t.ignored) : S([]),
            awaitWriteFinish: s === true ? e : typeof s === "object" ? {
                ...e,
                ...s
            } : false
        };
        if (st) {
            i.usePolling = true;
        }
        if (i.atomic === undefined) {
            i.atomic = !i.usePolling;
        }
        let r = process.env.CHOKIDAR_USEPOLLING;
        if (r !== undefined) {
            let o = r.toLowerCase();
            if (o === "false" || o === "0") {
                i.usePolling = false;
            } else if (o === "true" || o === "1") {
                i.usePolling = true;
            } else {
                i.usePolling = !!o;
            }
        }
        let a = process.env.CHOKIDAR_INTERVAL;
        if (a) {
            i.interval = Number.parseInt(a, 10);
        }
        let n = 0;
        this._emitReady = ()=>{
            n++;
            if (n >= this._readyCount) {
                this._emitReady = F;
                this._readyEmitted = true;
                process.nextTick(()=>this.emit(u.READY));
            }
        };
        this._emitRaw = (...o)=>this.emit(u.RAW, ...o);
        this._boundRemove = this._remove.bind(this);
        this.options = i;
        this._nodeFsHandler = new O(this);
        Object.freeze(i);
    }
    _addIgnoredPath(t) {
        if (M(t)) {
            for (let s of this._ignoredPaths){
                if (M(s) && s.path === t.path && s.recursive === t.recursive) {
                    return;
                }
            }
        }
        this._ignoredPaths.add(t);
    }
    _removeIgnoredPath(t) {
        this._ignoredPaths.delete(t);
        if (typeof t === "string") {
            for (let s of this._ignoredPaths){
                if (M(s) && s.path === t) {
                    this._ignoredPaths.delete(s);
                }
            }
        }
    }
    add(t, s, e) {
        let { cwd } = this.options;
        this.closed = false;
        this._closePromise = undefined;
        let r = nt(t);
        if (cwd) {
            r = r.map((a)=>Zt(a, cwd));
        }
        r.forEach((a)=>{
            this._removeIgnoredPath(a);
        });
        this._userIgnored = undefined;
        if (!this._readyCount) {
            this._readyCount = 0;
        }
        this._readyCount += r.length;
        Promise.all(r.map(async (a)=>{
            let n = await this._nodeFsHandler._addToNodeFs(a, !e, undefined, 0, s);
            if (n) {
                this._emitReady();
            }
            return n;
        })).then((a)=>{
            if (this.closed) {
                return;
            }
            a.forEach((n)=>{
                if (n) {
                    this.add(f.dirname(n), f.basename(s || n));
                }
            });
        });
        return this;
    }
    unwatch(t) {
        if (this.closed) {
            return this;
        }
        let s = nt(t);
        let { cwd } = this.options;
        s.forEach((i)=>{
            if (!f.isAbsolute(i) && !this._closers.has(i)) {
                if (cwd) {
                    i = f.join(cwd, i);
                }
                i = f.resolve(i);
            }
            this._closePath(i);
            this._addIgnoredPath(i);
            if (this._watched.has(i)) {
                this._addIgnoredPath({
                    path: i,
                    recursive: true
                });
            }
            this._userIgnored = undefined;
        });
        return this;
    }
    close() {
        if (this._closePromise) {
            return this._closePromise;
        }
        this.closed = true;
        this.removeAllListeners();
        let t = [];
        this._closers.forEach((s)=>s.forEach((e)=>{
                let i = e();
                if (i instanceof Promise) {
                    t.push(i);
                }
            }));
        this._streams.forEach((s)=>s.destroy());
        this._userIgnored = undefined;
        this._readyCount = 0;
        this._readyEmitted = false;
        this._watched.forEach((s)=>s.dispose());
        this._closers.clear();
        this._watched.clear();
        this._streams.clear();
        this._symlinkPaths.clear();
        this._throttled.clear();
        this._closePromise = t.length ? Promise.all(t).then(()=>{}) : Promise.resolve();
        return this._closePromise;
    }
    getWatched() {
        let t = {};
        this._watched.forEach((s, e)=>{
            let r = (this.options.cwd ? f.relative(this.options.cwd, e) : e) || ht;
            t[r] = s.getChildren().sort();
        });
        return t;
    }
    emitWithAll(t, s) {
        this.emit(t, ...s);
        if (t !== u.ERROR) {
            this.emit(u.ALL, t, ...s);
        }
    }
    async _emit(t, s, e) {
        if (this.closed) {
            return;
        }
        let options = this.options;
        if (v) {
            s = f.normalize(s);
        }
        if (options.cwd) {
            s = f.relative(options.cwd, s);
        }
        let r = [
            s
        ];
        if (e != null) {
            r.push(e);
        }
        let i_awaitWriteFinish = options.awaitWriteFinish;
        let n;
        if (i_awaitWriteFinish && (n = this._pendingWrites.get(s))) {
            n.lastChange = new Date;
            return this;
        }
        if (options.atomic) {
            if (t === u.UNLINK) {
                this._pendingUnlinks.set(s, [
                    t,
                    ...r
                ]);
                setTimeout(()=>{
                    this._pendingUnlinks.forEach((o, c)=>{
                        this.emit(...o);
                        this.emit(u.ALL, ...o);
                        this._pendingUnlinks.delete(c);
                    });
                }, typeof options.atomic === "number" ? options.atomic : 100);
                return this;
            }
            if (t === u.ADD && this._pendingUnlinks.has(s)) {
                t = u.CHANGE;
                this._pendingUnlinks.delete(s);
            }
        }
        if (i_awaitWriteFinish && (t === u.ADD || t === u.CHANGE) && this._readyEmitted) {
            let o = (c, h)=>{
                if (this.closed) {
                    return;
                }
                if (c) {
                    if (this.listenerCount(u.ERROR) === 0) {
                        this._pendingWrites.delete(s);
                        return;
                    }
                    t = u.ERROR;
                    r[0] = c;
                    this.emitWithAll(t, r);
                } else if (h) {
                    if (r.length > 1) {
                        r[1] = h;
                    } else {
                        r.push(h);
                    }
                    this.emitWithAll(t, r);
                }
            };
            this._awaitWriteFinish(s, i_awaitWriteFinish.stabilityThreshold, t, o);
            return this;
        }
        if (t === u.CHANGE) {
            if (!this._throttle(u.CHANGE, s, 50)) {
                return this;
            }
        }
        if (options.alwaysStat && e === undefined && (t === u.ADD || t === u.ADD_DIR || t === u.CHANGE)) {
            let o = options.cwd ? f.join(options.cwd, s) : s;
            let c;
            try {
                c = await stat_1(o);
            } catch (h) {}
            if (!c || this.closed) {
                return;
            }
            r.push(c);
        }
        this.emitWithAll(t, r);
        return this;
    }
    _handleError(t) {
        let s = t && t.code;
        if (t && !this.closed && this.listenerCount(u.ERROR) > 0 && s !== "ENOENT" && s !== "ENOTDIR" && (!this.options.ignorePermissionErrors || s !== "EPERM" && s !== "EACCES")) {
            this.emit(u.ERROR, t);
        }
        return t || this.closed;
    }
    _throttle(t, s, e) {
        if (!this._throttled.has(t)) {
            this._throttled.set(t, new Map);
        }
        let i = this._throttled.get(t);
        if (!i) {
            throw Error("invalid throttle");
        }
        let r = i.get(s);
        if (r) {
            r.count++;
            return false;
        }
        let timeoutObject;
        let clear = ()=>{
            let c = i.get(s);
            let h = c ? c.count : 0;
            i.delete(s);
            clearTimeout(timeoutObject);
            if (c) {
                clearTimeout(c.timeoutObject);
            }
            return h;
        };
        timeoutObject = setTimeout(clear, e);
        let o = {
            timeoutObject,
            clear,
            count: 0
        };
        i.set(s, o);
        return o;
    }
    _incrReadyCount() {
        return this._readyCount++;
    }
    _awaitWriteFinish(t, s, e, i) {
        let awaitWriteFinish = this.options.awaitWriteFinish;
        if (typeof awaitWriteFinish !== "object") {
            return;
        }
        let r_pollInterval = awaitWriteFinish.pollInterval;
        let n;
        let o = t;
        if (this.options.cwd && !f.isAbsolute(t)) {
            o = f.join(this.options.cwd, t);
        }
        let lastChange = new Date;
        let _pendingWrites = this._pendingWrites;
        function d(l) {
            stat(o, (m, w)=>{
                if (m || !_pendingWrites.has(t)) {
                    if (m && m.code !== "ENOENT") {
                        i(m);
                    }
                    return;
                }
                let E = Number(new Date);
                if (l && w.size !== l.size) {
                    _pendingWrites.get(t).lastChange = E;
                }
                let R = _pendingWrites.get(t);
                if (E - R.lastChange >= s) {
                    _pendingWrites.delete(t);
                    i(undefined, w);
                } else {
                    n = setTimeout(d, r_pollInterval, w);
                }
            });
        }
        if (!_pendingWrites.has(t)) {
            _pendingWrites.set(t, {
                lastChange,
                cancelWait: ()=>{
                    _pendingWrites.delete(t);
                    clearTimeout(n);
                    return e;
                }
            });
            n = setTimeout(d, r_pollInterval);
        }
    }
    _isIgnored(t, s) {
        if (this.options.atomic && $t.test(t)) {
            return true;
        }
        if (!this._userIgnored) {
            let { cwd } = this.options;
            let r = (this.options.ignored || []).map(at(cwd));
            let n = [
                ...[
                    ...this._ignoredPaths
                ].map(at(cwd)),
                ...r
            ];
            this._userIgnored = Xt(n, undefined);
        }
        return this._userIgnored(t, s);
    }
    _isntIgnored(t, s) {
        return !this._isIgnored(t, s);
    }
    _getWatchHelpers(t) {
        return new dt(t, this.options.followSymlinks, this);
    }
    _getWatchedDir(t) {
        let s = f.resolve(t);
        if (!this._watched.has(s)) {
            this._watched.set(s, new lt(s, this._boundRemove));
        }
        return this._watched.get(s);
    }
    _hasReadPermissions(t) {
        if (this.options.ignorePermissionErrors) {
            return true;
        }
        return Boolean(Number(t.mode) & 256);
    }
    _remove(directory, item, isDirectory) {
        let i = [
            {
                directory,
                item,
                isDirectory,
                path: "",
                fullPath: "",
                expanded: false
            }
        ];
        while(i.length > 0){
            let r = i[i.length - 1];
            if (!r.expanded) {
                r.expanded = true;
                let directory_1 = f.join(r.directory, r.item);
                let m = f.resolve(directory_1);
                r.path = directory_1;
                r.fullPath = m;
                r.isDirectory = r.isDirectory ?? (this._watched.has(directory_1) || this._watched.has(m));
                if (!this._throttle("remove", directory_1, 100)) {
                    i.pop();
                    continue;
                }
                if (!r.isDirectory && this._watched.size === 1) {
                    this.add(r.directory, r.item, true);
                }
                let E = this._getWatchedDir(directory_1).getChildren();
                for(let R = E.length - 1; R >= 0; R--){
                    i.push({
                        directory: directory_1,
                        item: E[R],
                        isDirectory: undefined,
                        path: "",
                        fullPath: "",
                        expanded: false
                    });
                }
                continue;
            }
            i.pop();
            let { path, fullPath } = r;
            let o = this._getWatchedDir(r.directory);
            let c = o.has(r.item);
            o.remove(r.item);
            if (this._symlinkPaths.has(fullPath)) {
                this._symlinkPaths.delete(fullPath);
            }
            let h = path;
            if (this.options.cwd) {
                h = f.relative(this.options.cwd, path);
            }
            if (this.options.awaitWriteFinish && this._pendingWrites.has(h)) {
                if (this._pendingWrites.get(h).cancelWait() === u.ADD) {
                    continue;
                }
            }
            this._watched.delete(path);
            this._watched.delete(fullPath);
            let d = r.isDirectory ? u.UNLINK_DIR : u.UNLINK;
            if (c && !this._isIgnored(path)) {
                this._emit(d, path);
            }
            this._closePath(path);
        }
    }
    _closePath(t) {
        this._closeFile(t);
        let s = f.dirname(t);
        this._getWatchedDir(s).remove(f.basename(t));
    }
    _closeFile(t) {
        let s = this._closers.get(t);
        if (!s) {
            return;
        }
        s.forEach((e)=>e());
        this._closers.delete(t);
    }
    _addPathCloser(t, s) {
        if (!s) {
            return;
        }
        let e = this._closers.get(t);
        if (!e) {
            e = [];
            this._closers.set(t, e);
        }
        e.push(s);
    }
    _readdirp(t, s) {
        if (this.closed) {
            return;
        }
        let e = {
            type: u.ALL,
            alwaysStat: true,
            lstat: true,
            ...s,
            depth: 0
        };
        let i = q(t, e);
        this._streams.add(i);
        i.once(tt, ()=>{
            i = undefined;
        });
        i.once(C, ()=>{
            if (i) {
                this._streams.delete(i);
                i = undefined;
            }
        });
        return i;
    }
}
function watch_1(t, s = {}) {
    let e = new z(s);
    e.add(t);
    return e;
}
export const Sw = {
    watch: watch_1,
    FSWatcher: z
};
