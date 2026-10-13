import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { po, On, Mp } from "/$bunfs/root/chunk-xgw72tt1.js";
import { homedir } from "os";
import { basename, dirname, join, resolve } from "path";
const f = /^[a-z]{2,}(?:-[a-z0-9]+){0,4}$/i;
function l(e) {
    return !!e && f.test(e);
}
function O9(e) {
    if (l(e)) {
        return e;
    }
}
const N = /^[+-]?(\d+(\.\d*)?|\.\d+)[eE][+-]?\d+$/;
const E = /^[+-]?\d{1,3}([_,\u00A0\u202F ])\d{3}(?:\1\d{3})*$/;
const c = /[_,\u00A0\u202F ]/g;
function aOo(e) {
    if (e.length <= 32) {
        if (N.test(e)) {
            let n = Number(e);
            if (Number.isInteger(n)) {
                return n;
            }
            return NaN;
        }
        if (E.test(e)) {
            return parseInt(e.replace(c, ""), 10);
        }
    }
}
function Dd(e) {
    let n = String(e).trim();
    return aOo(n) ?? parseInt(n, 10);
}
function sj(e) {
    let n = Number(e);
    if (!Number.isNaN(n)) {
        return n;
    }
    let r = String(e).trim();
    if (r.length <= 32 && E.test(r)) {
        return parseInt(r.replace(c, ""), 10);
    }
    return NaN;
}
const d = [
    [
        "claude-3-5-sonnet",
        "VERTEX_REGION_CLAUDE_3_5_SONNET"
    ],
    [
        "claude-3-7-sonnet",
        "VERTEX_REGION_CLAUDE_3_7_SONNET"
    ],
    [
        "claude-sonnet-4-5",
        "VERTEX_REGION_CLAUDE_4_5_SONNET"
    ],
    [
        "claude-sonnet-4-6",
        "VERTEX_REGION_CLAUDE_4_6_SONNET"
    ],
    [
        "claude-sonnet-5-5",
        "VERTEX_REGION_CLAUDE_5_5_SONNET"
    ],
    [
        "claude-3-5-haiku",
        "VERTEX_REGION_CLAUDE_3_5_HAIKU"
    ],
    [
        "claude-fable-5-1",
        "VERTEX_REGION_CLAUDE_FABLE_5_1"
    ],
    [
        "claude-haiku-4-5",
        "VERTEX_REGION_CLAUDE_HAIKU_4_5"
    ],
    [
        "claude-haiku-5-5",
        "VERTEX_REGION_CLAUDE_HAIKU_5_5"
    ],
    [
        "claude-opus-4-1",
        "VERTEX_REGION_CLAUDE_4_1_OPUS"
    ],
    [
        "claude-opus-4-5",
        "VERTEX_REGION_CLAUDE_4_5_OPUS"
    ],
    [
        "claude-opus-4-6",
        "VERTEX_REGION_CLAUDE_4_6_OPUS"
    ],
    [
        "claude-opus-4-7",
        "VERTEX_REGION_CLAUDE_4_7_OPUS"
    ],
    [
        "claude-opus-4-8",
        "VERTEX_REGION_CLAUDE_4_8_OPUS"
    ],
    [
        "claude-opus-5-5",
        "VERTEX_REGION_CLAUDE_5_5_OPUS"
    ],
    [
        "claude-sonnet-4",
        "VERTEX_REGION_CLAUDE_4_0_SONNET"
    ],
    [
        "claude-sonnet-5",
        "VERTEX_REGION_CLAUDE_5_SONNET"
    ],
    [
        "claude-fable-5",
        "VERTEX_REGION_CLAUDE_FABLE_5"
    ],
    [
        "claude-opus-4",
        "VERTEX_REGION_CLAUDE_4_0_OPUS"
    ],
    [
        "claude-opus-5",
        "VERTEX_REGION_CLAUDE_5_OPUS"
    ]
];
function o() {
    return process.env.CLAUDE_CONFIG_DIR;
}
function K2n(e) {
    let n = e === "CLAUDE_CONFIG_DIR" ? o() : process.env[e];
    if (n === undefined) {
        return;
    }
    let r = String(n).trim();
    if (r) {
        return r;
    }
}
function PPr(e) {
    return Ne(process.env[e]);
}
const ve = po(()=>(o() ?? join(homedir(), ".claude")).normalize("NFC"), o);
function qZ(e) {
    return resolve(ve()) === resolve(e);
}
function Z8e() {
    return join(ve(), "teams");
}
function p() {
    return process.env.CLAUDE_CODE_PROJECT_DIR_NAME;
}
const D = /^[A-Za-z0-9_-]{1,64}$/;
const A = /^(?:con|prn|aux|nul|com[0-9]|lpt[0-9])$/i;
function lOo(e) {
    if (!e || !D.test(e) || A.test(e)) {
        return;
    }
    return e;
}
function C() {
    return `${o() ?? ""}\x00${p() ?? ""}`;
}
const Xsn = po(()=>{
    if (o()) {
        return lOo(p());
    }
}, C);
function KZ(e) {
    let n = ve();
    if (resolve(e) === resolve(n)) {
        return true;
    }
    return _(e) === _(n);
}
function _(e) {
    let n = resolve(e);
    let r = dirname(n);
    let s = Mp(r) ?? r;
    return On(join(s, basename(n)));
}
function f0t(e) {
    let NODE_OPTIONS = process.env.NODE_OPTIONS;
    if (!NODE_OPTIONS) {
        return false;
    }
    return NODE_OPTIONS.split(/\s+/).includes(e);
}
function IPr(e, n) {
    if (e === undefined) {
        return n;
    }
    let r = Dd(e);
    if (Number.isNaN(r)) {
        return n;
    }
    return r;
}
function wMs(e) {
    if (e !== undefined) {
        return e;
    }
    let n = process.env.CLAUDE_CODE_MAX_TURNS?.trim();
    if (!n) {
        return;
    }
    let r = sj(n);
    if (!Number.isInteger(r) || r <= 0) {
        throw Error(`CLAUDE_CODE_MAX_TURNS must be a positive integer; got "${n}"`);
    }
    return r;
}
function vMs(e) {
    let n = Number(e);
    if (isNaN(n) || n <= 0) {
        return undefined;
    }
    return n;
}
function i(e) {
    let n = process.argv.indexOf("--");
    return (n === -1 ? process.argv : process.argv.slice(0, n)).includes(e);
}
function mr() {
    return Ne(process.env.CLAUDE_CODE_SIMPLE) || i("--bare");
}
function Cr() {
    return Ne(process.env.CLAUDE_CODE_SAFE_MODE) || i("--safe-mode");
}
function YZ() {
    return Ne(process.env.CLAUDE_CODE_RESTRICTED);
}
function Ng() {
    if (i("--safe-mode")) {
        return "restart without --safe-mode";
    }
    return "unset CLAUDE_CODE_SAFE_MODE";
}
function jpt() {
    if (i("--bare")) {
        return "restart without --bare";
    }
    return "unset CLAUDE_CODE_SIMPLE";
}
function Jsn() {
    return Ne(process.env.CLAUDE_CODE_SUPERVISED);
}
function EMs(e) {
    let n = {};
    if (e) {
        for (let r of e){
            let [s, ...a] = r.split("=");
            if (!s || a.length === 0) {
                throw Error(`Invalid environment variable format: ${r}, environment variables should be added as: -e KEY1=value1 -e KEY2=value2`);
            }
            n[s] = a.join("=");
        }
    }
    return n;
}
function m0t() {
    return O9(process.env.CLOUD_ML_REGION?.trim()) || "us-east5";
}
function Wpt(e) {
    switch(e){
        case "global":
            return "https://aiplatform.googleapis.com";
        case "us":
        case "eu":
            return `https://aiplatform.${e}.rep.googleapis.com`;
        default:
            return `https://${e}-aiplatform.googleapis.com`;
    }
}
function Y2n() {
    return Ne(process.env.CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR);
}
function xS() {
    return false;
}
function LH() {
    return false;
}
function kMs() {
    return {
        namespace: undefined,
        cluster: undefined
    };
}
function Jpe(e) {
    if (e) {
        let n = d.find(([r])=>e.startsWith(r));
        if (n) {
            return O9(process.env[n[1]]?.trim()) || m0t();
        }
    }
    return m0t();
}
export { O9, aOo, Dd, sj, K2n, PPr, ve, qZ, Z8e, lOo, Xsn, KZ, f0t, IPr, wMs, vMs, mr, Cr, YZ, Ng, jpt, Jsn, EMs, m0t, Wpt, Y2n, xS, LH, kMs, Jpe };
