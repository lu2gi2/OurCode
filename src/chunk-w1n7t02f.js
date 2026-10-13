import { On, Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { q, BP, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { df, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { vRr } from "/$bunfs/root/chunk-h6pppnx2.js";
import { MO } from "/$bunfs/root/chunk-svqqgdca.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { homedir } from "os";
import { dirname, extname, isAbsolute, join, normalize, posix, relative, resolve, sep, win32 } from "path";
import * as s from "path/win32";
class h {
    shellConfig = null;
    powerShellProvider = null;
    powerShellPath = null;
    resolvedPowerShellPath = undefined;
    gitBashPath = undefined;
    windowsShellLauncherUsable = null;
    warnedShortTmpDir = false;
}
const p = new q(()=>new h);
function iPe() {
    return p.of(B().host);
}
function wGn() {
    if (O() === "windows") {
        let e = a9();
        if (e) {
            process.env.SHELL = e;
            t(`Using bash path: "${e}"`);
        } else {
            t("Git Bash not found; BashTool will be unavailable");
        }
    }
}
function a9() {
    let e = iPe();
    if (e.gitBashPath === undefined) {
        e.gitBashPath = g();
    }
    return e.gitBashPath;
}
function g() {
    let { existsSync } = ie();
    if (a.CLAUDE_CODE_GIT_BASH_PATH) {
        let n = s.basename(a.CLAUDE_CODE_GIT_BASH_PATH).toLowerCase();
        let o = [
            "bash.exe",
            "sh.exe",
            "bash",
            "sh"
        ].includes(n);
        if (o && existsSync(a.CLAUDE_CODE_GIT_BASH_PATH)) {
            return a.CLAUDE_CODE_GIT_BASH_PATH;
        }
        t(`CLAUDE_CODE_GIT_BASH_PATH "${a.CLAUDE_CODE_GIT_BASH_PATH}" ${o ? "not found" : "is not a bash/sh binary"}; falling back to auto-detection`, {
            level: "warn"
        });
    }
    let r = [
        "C:\\Program Files\\Git\\bin\\bash.exe",
        "C:\\Program Files (x86)\\Git\\bin\\bash.exe"
    ];
    for (let n of r){
        if (existsSync(n)) {
            return n;
        }
    }
    let i = vRr("git");
    if (i) {
        let n = s.join(i, "..", "..", "bin", "bash.exe");
        if (existsSync(n)) {
            return n;
        }
    }
    return null;
}
function vGn(e, r) {
    if (!s.isAbsolute(r)) {
        return;
    }
    let i = s.dirname(r);
    let n = Object.keys(e).find((l)=>l.toUpperCase() === "PATH") ?? "PATH";
    let o = e[n];
    e[n] = o ? i + s.delimiter + o : i;
}
function EGn(e) {
    let r = e.trim();
    let i = "";
    let n = 0;
    while(n < r.length){
        let o = r[n];
        if (o === '"' || o === "'") {
            let l = r.indexOf(o, n + 1);
            if (l === -1) {
                i += r.slice(n + 1);
                n = r.length;
                break;
            }
            i += r.slice(n + 1, l);
            n = l + 1;
        } else if (o === "\\" && n + 1 < r.length) {
            i += r[n + 1];
            n += 2;
        } else if (/\s/.test(o)) {
            break;
        } else {
            i += o;
            n++;
        }
    }
    if (i.endsWith(".sh")) {
        return `bash ${e}`;
    }
    return e;
}
const IO = MO((e)=>{
    if (e.startsWith("\\\\")) {
        return e.replaceAll("\\", "/");
    }
    let r = e.match(/^([A-Za-z]):[/\\]/);
    if (r) {
        return `/${r[1].toLowerCase()}${e.slice(2).replaceAll("\\", "/")}`;
    }
    return e.replaceAll("\\", "/");
}, (e)=>e, 500);
const EZ = MO((e)=>{
    if (e.startsWith("//")) {
        return e.replaceAll("/", "\\");
    }
    let r = e.match(/^\/cygdrive\/([A-Za-z])(\/|$)/);
    if (r) {
        let n = r[1].toUpperCase();
        let o = e.slice(`/cygdrive/${r[1]}`.length);
        return `${n}:${(o || "\\").replaceAll("/", "\\")}`;
    }
    let i = e.match(/^\/([A-Za-z])(\/|$)/);
    if (i) {
        let n = i[1].toUpperCase();
        let o = e.slice(2);
        return `${n}:${(o || "\\").replaceAll("/", "\\")}`;
    }
    return e.replaceAll("/", "\\");
}, (e)=>e, 500);
class QSe extends Error {
    constructor(){
        super("Path contains null bytes");
        this.name = "NullBytePathError";
    }
}
function Qrn(e) {
    if (e.includes("\x00")) {
        throw new QSe;
    }
}
function et(e, r) {
    let i = r ?? df();
    if (typeof e !== "string") {
        throw TypeError(`Path must be a string, received ${typeof e}`);
    }
    if (i !== null && typeof i !== "string") {
        throw TypeError(`Base directory must be a string, received ${typeof i}`);
    }
    Qrn(e);
    if (i !== null) {
        Qrn(i);
    }
    let n = e.trim();
    if (!n) {
        if (i === null) {
            throw new BP;
        }
        return On(normalize(i));
    }
    if (n === "~") {
        return On(homedir());
    }
    if (n.startsWith("~/")) {
        return On(join(homedir(), n.slice(2)));
    }
    let o = n;
    if (O() === "windows" && n.match(/^\/[a-z]\//i)) {
        try {
            o = EZ(n);
        } catch  {
            o = n;
        }
    }
    if (isAbsolute(o)) {
        return On(normalize(o));
    }
    if (i === null) {
        throw new BP;
    }
    return On(resolve(i, o));
}
class qut extends Error {
    constructor(){
        super('Path ends in white space once its "." and ".." are resolved');
        this.name = "UnstablePathError";
    }
}
function JE(e, r) {
    let i = et(e, r);
    if (et(i, r) !== i) {
        throw new qut;
    }
    return i;
}
function hC(e, r) {
    try {
        return et(e, r);
    } catch  {
        return null;
    }
}
function sDt(e) {
    let r = relative(se(), e);
    if (r.startsWith("..")) {
        return e;
    }
    return r;
}
function yq(e) {
    let r = et(e);
    if (Za(r)) {
        return dirname(r);
    }
    try {
        if (ie().statSync(r).isDirectory()) {
            return r;
        }
    } catch  {}
    return dirname(r);
}
function CH(e) {
    return /(?:^|[\\/])\.\.(?:[\\/]|$)/.test(e);
}
function Rs(e) {
    let r = homedir();
    if (e === r) {
        return "~";
    }
    if (e.startsWith(r + sep)) {
        return `~${e.slice(r.length)}`;
    }
    return e;
}
function Vz(e) {
    let r = normalize(e);
    if (O() === "windows") {
        return r.replaceAll("\\", "/");
    }
    return r;
}
function RH(e) {
    return extname(e).toLowerCase() === ".ipynb";
}
function iRr(e, r = "linux") {
    if ((r === "win32" ? win32.isAbsolute : posix.isAbsolute)(e)) {
        return e;
    }
    if (e === "~" || e.startsWith("~/") || r === "win32" && e.startsWith("~\\")) {
        return d(homedir(), e.slice(2), r);
    }
    if (r === "win32" && /^[a-zA-Z]:/.test(e)) {
        return e;
    }
    return d(se(), e, r);
}
function d(e, r, i) {
    if (r === "") {
        return e;
    }
    if (i === "win32" ? /[\\/]$/.test(e) : e.endsWith("/")) {
        return e + r;
    }
    return e + (i === "win32" ? "\\" : "/") + r;
}
export { iPe, wGn, a9, vGn, EGn, IO, EZ, QSe, Qrn, et, qut, JE, hC, sDt, yq, CH, Rs, Vz, RH, iRr };
