import { q, B } from "/$bunfs/root/chunk-ctt36bn8.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { aY } from "/$bunfs/root/chunk-4n16n64p.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { constants, statSync } from "fs";
import { access, stat } from "fs/promises";
import { isAbsolute, join } from "path";
const MT = "CLAUDE_CODE_PROCESS_WRAPPER";
const hYe = 12000;
const c = {
    argv: [],
    error: null,
    platformIgnored: false,
    record: ""
};
class f {
    memoRaw = undefined;
    memoState = c;
    getState() {
        let r = process.env[MT];
        if (!r) {
            return c;
        }
        let e = r === this.memoRaw ? this.memoState.error : null;
        if (r === this.memoRaw && e === null) {
            return this.memoState;
        }
        this.memoRaw = r;
        this.memoState = v(r);
        if (this.memoState.error && this.memoState.error !== e) {
            t(`${MT} is set but can't be used \u2014 self-spawns that require it will refuse to start rather than run unwrapped: ${this.memoState.error}`, {
                level: "error"
            });
        } else if (this.memoState.platformIgnored) {
            t(`${MT} is set but ignored on Windows \u2014 the launcher must exec into Claude Code, which Windows can't do; sessions run unwrapped`, {
                level: "warn"
            });
        }
        return this.memoState;
    }
}
const S = new q(()=>new f);
function C$n() {
    return S.of(B().host).getState();
}
function $p() {
    return C$n().argv;
}
function tf() {
    return C$n().error;
}
async function JD() {
    if (tf() !== null) {
        return false;
    }
    let r = $p();
    if (r.length === 0) {
        return true;
    }
    let e = mfo(r)[0];
    if (e === undefined) {
        return true;
    }
    return ffo(e);
}
async function ffo(r) {
    try {
        if (!(await stat(r)).isFile()) {
            return false;
        }
        await access(r, constants.X_OK);
        return true;
    } catch  {
        return false;
    }
}
function mfo([e]) {
    if (e !== undefined && e.startsWith("/")) {
        return [
            e
        ];
    }
    return [];
}
async function yYe() {
    let r = tf();
    if (r) {
        return r;
    }
    if (await JD()) {
        return null;
    }
    return `${MT}: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then retry`;
}
function GB() {
    return C$n().record;
}
function v(r) {
    if (O() === "windows") {
        return {
            argv: [],
            error: null,
            platformIgnored: true,
            record: ""
        };
    }
    let argv;
    try {
        argv = y(r);
    } catch (error) {
        return i(error instanceof Error ? error.message : String(error));
    }
    if (argv.length === 0) {
        return i("the value is set but contains no launcher — unset the variable to run without one, or set it to the absolute path of your launcher");
    }
    let s = argv[0];
    if (s === process.execPath || s === join(aY(), "claude")) {
        return i(`launcher \`${s}\` is Claude Code's own launch path \u2014 point ${MT} at your launcher, not at claude`);
    }
    if (!isAbsolute(s)) {
        return i("the launcher must be an absolute path, not a bare name resolved via PATH");
    }
    try {
        let n = statSync(s);
        if (!n.isFile() || (n.mode & 73) === 0) {
            return i(`launcher \`${s}\` is not an executable regular file`);
        }
    } catch  {
        return i(`launcher \`${s}\` does not exist or is not readable`);
    }
    return {
        argv,
        error: null,
        platformIgnored: false,
        record: argv.map((n)=>{
            if (/[\s"]/.test(n)) {
                return _(n);
            }
            return n;
        }).join(" ")
    };
}
function i(r) {
    return {
        argv: [],
        error: `${MT}: ${r}`,
        platformIgnored: false,
        record: ""
    };
}
var P = ";|&$()`<>";
function y(r) {
    let e = r.trim();
    if (e === "") {
        return [];
    }
    if (e.startsWith("[")) {
        let o;
        try {
            o = X(e);
        } catch  {
            throw Error("value starts with `[` but is not valid JSON");
        }
        if (!Array.isArray(o) || !o.every((a)=>typeof a === "string")) {
            throw Error("JSON form must be an array of strings");
        }
        if (o.length > 0 && o.some((a)=>a === "")) {
            if (o.every((a)=>a === "")) {
                return [];
            }
            throw Error("the JSON array contains an empty element — remove it, or fill in the value it was a placeholder for");
        }
        return o;
    }
    let s = [];
    let n = "";
    let u = false;
    let l = false;
    for(let o = 0; o < e.length; o++){
        let a = e[o];
        if (l) {
            if (a === "\\" && (e[o + 1] === '"' || e[o + 1] === "\\")) {
                n += e[++o];
            } else if (a === '"') {
                l = false;
            } else {
                n += a;
            }
            continue;
        }
        if (a === '"') {
            l = true;
            u = true;
            continue;
        }
        if (/\s/.test(a)) {
            if (u) {
                s.push(n);
                n = "";
                u = false;
            }
            continue;
        }
        if (P.includes(a)) {
            throw Error("the value contains an unquoted shell metacharacter (one of ; | & $ ( ) ` < >) — it is an argv list, not a shell command");
        }
        n += a;
        u = true;
    }
    if (l) {
        throw Error("unterminated double quote");
    }
    if (u) {
        s.push(n);
    }
    if (s.length > 0 && s.some((o)=>o === "")) {
        if (s.every((o)=>o === "")) {
            return [];
        }
        throw Error('the value contains an empty `""` token — remove it, or fill in the value it was a placeholder for');
    }
    return s;
}
export { MT, hYe, C$n, $p, tf, JD, ffo, mfo, yYe, GB };
