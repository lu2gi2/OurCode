import { Ea, Fn, k, g_, M6e, RY } from "/$bunfs/root/chunk-0ycjphb5.js";
async function n() {
    try {
        return await g_("tengu_violin_strad");
    } catch  {
        return false;
    }
}
function t() {
    try {
        return k("tengu_violin_strad", false);
    } catch  {
        return false;
    }
}
async function dR() {
    try {
        return await g_("tengu_violin_wood");
    } catch  {
        return false;
    }
}
function xf() {
    try {
        return k("tengu_violin_wood", false);
    } catch  {
        return false;
    }
}
const a = "tengu_violin_maple";
async function APt() {
    try {
        return await dR() || await M6e(a);
    } catch  {
        return false;
    }
}
function Pf() {
    try {
        return xf() || k(a, false);
    } catch  {
        return false;
    }
}
async function oN() {
    return await dR() && await n();
}
function sF() {
    return xf() && t();
}
function Ide(e) {
    if (e) {
        return null;
    }
    return "flag_off";
}
function qB(e) {
    return Ide(e) === null;
}
function IQt() {
    try {
        let { value, source } = Fn("tengu_violin_wood", false);
        return value === false && RY(source);
    } catch  {
        return false;
    }
}
function OQt() {
    return xf() && INs("tengu_violin_wood");
}
async function Emo() {
    let e = performance.now();
    await Ea().catch(()=>null);
    return Math.round(performance.now() - e);
}
function INs(e) {
    try {
        return RY(Fn(e, false).source);
    } catch  {
        return false;
    }
}
async function ONs() {
    try {
        return await g_("tengu_violin_amati");
    } catch  {
        return false;
    }
}
function cSr() {
    try {
        return k("tengu_violin_amati", false);
    } catch  {
        return false;
    }
}
function MQt() {
    return xf() && cSr();
}
async function CPt() {
    let [e, o] = await Promise.all([
        dR(),
        ONs()
    ]);
    return e && o;
}
export { dR, xf, APt, Pf, oN, sF, Ide, qB, IQt, OQt, Emo, INs, ONs, cSr, MQt, CPt };
