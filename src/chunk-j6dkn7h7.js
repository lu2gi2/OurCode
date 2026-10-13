import { Vd, um, WIt, Xu, oue, zBn, a_o, mg, Fn, k } from "/$bunfs/root/chunk-0ycjphb5.js";
import { Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { W, l } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { ze } from "/$bunfs/root/chunk-xgw72tt1.js";
import { wd, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { mr, Cr } from "/$bunfs/root/chunk-6kc68p18.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { Rjn } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { Qn } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { Zl, hwo, eRs, tRs, Jn } from "/$bunfs/root/chunk-ph7a449e.js";
import { br } from "/$bunfs/root/chunk-ytkshq2j.js";
import { Ag, Py } from "/$bunfs/root/chunk-tn496ms6.js";
import { sr } from "/$bunfs/root/chunk-092xqjkn.js";
import { ru } from "/$bunfs/root/chunk-m6z3m7rx.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
const DI = "tengu_plugin_hooks_modules";
const m = ()=>mr() || Vd() || Boolean(a.ANTHROPIC_API_KEY) || Boolean(Qn()?.env?.ANTHROPIC_API_KEY) || WIt() !== null || Boolean(um()) || Xu() || Rjn() || !oue({
        envBearerFallbackFor: zBn()
    }).error;
function y(e) {
    return hwo(e) ?? [
        e
    ];
}
async function c(e, o, r) {
    let d = [];
    for (let [h, i] of y(e).entries()){
        let f = A(e, h, r);
        let n;
        try {
            i.invalidateCache?.();
            n = await (i.readAsyncStrict?.(f, {
                inaccessibleAs: "failure",
                unreadableFileAs: "failure",
                unparsableEntryAs: "failure"
            }) ?? i.readAsync(f));
        } catch (error) {
            t(`[secureStorage] strict read of ${i.name} rejected: ${l(error)}`, {
                level: "warn"
            });
            n = Zl;
        }
        if (n !== Zl && n != null && !sr(n)) {
            n = Zl;
        }
        d.push({
            name: i.name,
            value: n === Zl ? Zl : o(wd((i.osGuarded === true ? n : eRs(n ?? null)) ?? {}))
        });
    }
    return d;
}
function A(e, o, r) {
    if (hwo(e) === undefined || o > 0) {
        return r;
    }
}
async function p() {
    if (m()) {
        return false;
    }
    let [e, o] = await Promise.all([
        c(Jn(), (r)=>r.claudeAiOauth !== undefined),
        O() !== "macos" || tRs()
    ]);
    return o && e.every((r)=>r.value === false);
}
const s = ze({
    isLifted: false,
    lifting: undefined
}, (e)=>{
    e.isLifted = false;
    e.lifting = undefined;
});
function S() {
    s.lifting ??= p().then((e)=>{
        s.isLifted = e;
    }, (e)=>{
        t(`credential stores not read strictly: ${l(e)}`);
    });
    return s.lifting;
}
const PL = true;
const u3t = ze({
    isFollowed: false
}, (e)=>{
    e.isFollowed = false;
});
const u = new Set([
    "disk",
    "payload"
]);
async function Pqe() {
    let e = Fn(DI, PL);
    if (!u3t.isFollowed && mg() && e.value !== PL && u.has(e.source)) {
        return S();
    }
}
const g = ()=>!s.isLifted || m();
function Vur() {
    try {
        return a_o() || g();
    } catch (error) {
        t(`GrowthBook: credential sources not read (${W(error).name})`);
        return true;
    }
}
const E = ()=>!u3t.isFollowed && mg() && u.has(Fn(DI, PL).source) && !Vur();
function qur() {
    let e = k(DI, PL);
    let o = e !== PL;
    let r = o && E();
    if (o) {
        Pqe();
    }
    if (r) {
        return PL;
    }
    return e;
}
const D = ()=>ru();
const LI = ()=>!Ce() && !D() && qur();
const p3t = ()=>LI() && !br("hooks") && !Cr();
const Kur = ()=>p3t() && !Py() && !Ag();
export { DI, PL, u3t, Pqe, Vur, qur, LI, p3t, Kur };
