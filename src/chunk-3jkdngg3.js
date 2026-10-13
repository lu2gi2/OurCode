import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Xv } from "/$bunfs/root/chunk-xgw72tt1.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { yC, ss } from "/$bunfs/root/chunk-n1z3wrvm.js";
import { et } from "/$bunfs/root/chunk-w1n7t02f.js";
import { Vt } from "/$bunfs/root/chunk-k3tkc302.js";
import { Cf } from "/$bunfs/root/chunk-y9ay3abt.js";
import { im, OE } from "/$bunfs/root/chunk-ezbcjpga.js";
import { hae, JG } from "/$bunfs/root/chunk-sqysdndt.js";
import { to, AE, Pk, OW } from "/$bunfs/root/chunk-pbtb1p2a.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { unlink } from "fs/promises";
import { join, normalize, sep } from "path";
function m(key) {
    let t = key.split("/");
    let r = O();
    if (r === "windows" && t.some((e)=>/[<>"|*]/.test(e) || Xv(e) || /[. ]$/.test(e))) {
        return `path ${Cf(key)} cannot be a file name on Windows (reserved device name, trailing dot or space, or one of < > " | *)`;
    }
    if ((r === "windows" || r === "wsl") && t.some((e)=>/~\d/.test(e))) {
        return `path ${Cf(key)} carries a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named entry`;
    }
}
function D6(n) {
    let t = n;
    let r = (i)=>{
        let o = t[i];
        if (typeof o === "string") {
            return o;
        }
    };
    let e = OE(t.paths);
    let paths = e === undefined ? undefined : e === im ? [] : e.filter((i)=>typeof i === "string");
    return {
        path: r("path"),
        paths,
        outDir: r("out_dir")
    };
}
function Oie(n, { outDirJudged = false } = {}) {
    let { path, outDir } = D6(n);
    if (path === undefined) {
        return {
            reason: "read_file requires `path` — a published path from a list_files result"
        };
    }
    let s = JG(path);
    if ("errMsg" in s) {
        return {
            reason: s.errMsg
        };
    }
    let i = s.key.split("/");
    let reason = m(s.key);
    if (reason !== undefined) {
        return {
            reason
        };
    }
    let d = O();
    let a = d === "windows" || d === "wsl";
    let base;
    let f = false;
    try {
        if (outDir === undefined || outDir === "") {
            let { url } = n;
            let c = typeof url === "string" ? Vt(url) : null;
            let p = c !== null ? nX(c.slug) : null;
            f = p !== null;
            base = p ?? se();
        } else {
            base = et(outDir);
        }
    } catch  {
        return {
            reason: "out_dir cannot be resolved to a local directory"
        };
    }
    if (!outDirJudged && d === "windows" && base.split(sep).some((u)=>u !== "" && /[. ]$/.test(u))) {
        return {
            reason: `${outDir === undefined || outDir === "" ? "the default save directory" : `out_dir ${Cf(outDir)}`} has a name ending in a dot or space, which Windows would save under a different name`
        };
    }
    if (!outDirJudged && a && outDir !== undefined && outDir.split(/[\\/]/).some((u)=>/~\d/.test(u))) {
        return {
            reason: `out_dir ${Cf(outDir)} names a directory by a NAME~1 short-name alias, which a Windows filesystem resolves to a differently named directory`
        };
    }
    return {
        dest: join(base, ...i),
        base,
        ...f && {
            defaultDir: true
        }
    };
}
const h = new WeakMap;
function mWe(n, t = {}) {
    let r = n;
    let { paths, url, out_dir } = r;
    let o = typeof paths === "object" && paths !== null ? paths : undefined;
    let d = [
        typeof url === "string" ? url : "",
        typeof out_dir === "string" ? out_dir : "",
        t.outDirJudged === true ? "judged" : "",
        se(),
        (AE() ? Pk() : null) ?? ""
    ].join("\x00");
    let a = o === undefined ? undefined : h.get(o);
    if (a !== undefined && a.key === d) {
        return a.value;
    }
    let l = b(n, t);
    if (o !== undefined) {
        h.set(o, {
            key: d,
            value: l
        });
    }
    return l;
}
function b(n, t) {
    let { paths } = D6(n);
    if (paths === undefined || paths.length === 0) {
        return {
            reason: "read_file requires `path`, or `paths` naming at least one published path"
        };
    }
    if (paths.length > hae) {
        return {
            reason: `\`paths\` names ${paths.length} paths; at most ${hae} can be read in one call`
        };
    }
    let e = {
        ...n
    };
    delete e.paths;
    let s;
    let files = [];
    let o = new Map;
    for (let d of paths){
        let a = Oie({
            ...e,
            path: d
        }, t);
        if ("reason" in a) {
            return a;
        }
        let l = JG(d);
        let f = "key" in l ? l.key : d;
        let u = to(normalize(a.dest).normalize("NFC").toUpperCase().toLowerCase());
        let c = o.get(u);
        if (c !== undefined) {
            return {
                reason: c === f ? `\`paths\` names ${Cf(d)} more than once` : `\`paths\` names ${Cf(c)} and ${Cf(d)}, which could save to the same file on a case-insensitive volume; read one of them on its own`
            };
        }
        o.set(u, f);
        s ??= {
            base: a.base,
            ...a.defaultDir && {
                defaultDir: a.defaultDir
            }
        };
        files.push({
            path: f,
            dest: a.dest
        });
    }
    return {
        ...s,
        files
    };
}
const $Br = "artifact-files";
function nX(n) {
    let t = AE() ? Pk() : null;
    if (t === null) {
        return null;
    }
    return join(t, $Br, n);
}
function Uee(n) {
    return n.length > 0 && n.every((t)=>t.length > 0 && t.every((r)=>OW(r)));
}
function gWe(n) {
    let t = AE() ? Pk() : null;
    return t !== null && to(normalize(n)).startsWith(to(t) + sep);
}
class rX extends Error {
    partial;
    renameError;
    removedEarlier;
    constructor(n, t, r){
        super("the staged file could not be moved into place");
        this.partial = n;
        this.renameError = t;
        this.removedEarlier = r;
        this.name = "PartialKeptError";
    }
}
async function hWe(n, t, r) {
    let e = true;
    try {
        await ss(n, t, r);
        return;
    } catch (error) {
        let i = v(error);
        if (i === undefined || !yC.has(i)) {
            throw error;
        }
        await unlink(t).catch((o)=>{
            if (v(o) !== "ENOENT") {
                throw error;
            }
            e = false;
        });
    }
    try {
        await ss(n, t, r);
    } catch (error) {
        throw new rX(n, error, e);
    }
}
export { D6, Oie, mWe, $Br, nX, Uee, gWe, rX, hWe };
