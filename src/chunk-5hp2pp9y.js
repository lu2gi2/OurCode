import { q, cs } from "/$bunfs/root/chunk-ctt36bn8.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { mn } from "/$bunfs/root/chunk-223dyewd.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { uOs } from "/$bunfs/root/chunk-x47nahfr.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Rs } from "/$bunfs/root/chunk-w1n7t02f.js";
import { LF, fe, Ap, cse } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { EGr } from "/$bunfs/root/chunk-qxzdspe6.js";
import { Tde } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { o, u, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
import { homedir, hostname } from "os";
import { dirname, join } from "path";
function _K(e) {
    return e.trim().toLowerCase().replace(/(\.(local|lan|home|localdomain))+$/, "");
}
const G_n = 1;
const V_n = "unattended-serving:v1:auto-arm-classifier";
const D = "unattended-serving-consent.json";
const P = p(()=>u({
        version: A(G_n),
        choice: U([
            "accepted",
            "declined"
        ]),
        terms: o(),
        decidedAt: o(),
        hostname: o()
    }));
function g() {
    return join(homedir(), ".claude", "state", D);
}
function p_t(e = hostname()) {
    return Tde(_K(e));
}
function _Qn() {
    return `change it in /config, or delete ${Rs(g())} to be asked again`;
}
function S() {
    return {
        readText: async ()=>{
            try {
                return await mn().read(g());
            } catch (error) {
                if (z(error)) {
                    return;
                }
                throw error;
            }
        },
        writeText: async (e)=>{
            let n = g();
            await mn().mkdir(dirname(n), 448);
            await mn().atomicWrite(n, e, 384);
        },
        now: ()=>new Date,
        hostname
    };
}
async function oMe(e) {
    let n = e === undefined ? i() : undefined;
    let readAt = Date.now();
    let a = n?.writes;
    let { choice, unreadable, staleYes } = await E(e ?? S());
    let hostAllows = n !== undefined && LF() && await EGr(uOs()) && await wQn({
        start: true
    });
    if (n !== undefined && a === n.writes && (n.view === undefined || !d(n) || readAt >= n.view.readAt)) {
        n.view = {
            choice,
            readAt,
            unreadable,
            staleYes: staleYes === true,
            hostAllows
        };
        if (d(n)) {
            n.staleUnresolved = false;
        }
    }
    return choice;
}
async function E(e) {
    let n;
    try {
        n = await e.readText();
    } catch (error) {
        t(`unattended-serving consent: store unreadable (${l(error)})`, {
            level: "warn"
        });
        return {
            choice: "unset",
            unreadable: true
        };
    }
    if (n === undefined) {
        return {
            choice: "unset",
            unreadable: false
        };
    }
    try {
        let r = P().safeParse(X(n));
        if (!r.success) {
            return {
                choice: "unset",
                unreadable: true
            };
        }
        let a = r.data.choice === "declined" || _K(r.data.hostname) === _K(e.hostname()) && r.data.terms === V_n;
        return {
            choice: a ? r.data.choice : "unset",
            unreadable: false,
            staleYes: !a && r.data.choice === "accepted"
        };
    } catch  {
        return {
            choice: "unset",
            unreadable: true
        };
    }
}
async function sMe(choice, n) {
    if (choice === "accepted" && WG()) {
        t("unattended-serving consent: a Yes while settings turn unattended serving off is not stored", {
            level: "warn"
        });
        return false;
    }
    let r = n === undefined ? i() : undefined;
    let a = n ?? S();
    try {
        await a.writeText(_({
            version: G_n,
            choice,
            terms: V_n,
            decidedAt: a.now().toISOString(),
            hostname: _K(a.hostname())
        }, null, 2) + `
`);
        if (r !== undefined) {
            r.writes += 1;
            r.view = {
                choice,
                readAt: Date.now(),
                unreadable: false,
                staleYes: false,
                hostAllows: r.view?.hostAllows === true
            };
            r.staleUnresolved = false;
        }
        return true;
    } catch (error) {
        t(`unattended-serving consent: answer not saved (${l(error)})`, {
            level: "warn"
        });
        return false;
    }
}
const N = 3000;
const M = new q(()=>({
        view: undefined,
        refresh: undefined,
        refreshStartedAt: undefined,
        abandoned: undefined,
        staleUnresolved: false,
        writes: 0
    }));
function i() {
    return cs(M);
}
function z6() {
    let e = i();
    if (!d(e)) {
        b(e);
    }
    return e.view?.choice ?? "unset";
}
function d(e, n = Date.now()) {
    if (e.view === undefined) {
        return false;
    }
    let r = n - e.view.readAt;
    return r >= 0 && r <= N;
}
function wGr(e = Date.now()) {
    return d(i(), e);
}
const h = 1500;
async function HWt(e) {
    let n = i();
    if (d(n)) {
        return;
    }
    let r = b(n);
    let a;
    let s;
    let f = e?.aborted === true ? Promise.resolve("gave_up") : new Promise((resolve)=>{
        a = setTimeout((v)=>v("gave_up"), h, resolve);
        s = ()=>resolve("gave_up");
        e?.addEventListener("abort", s, {
            once: true
        });
    });
    await Promise.race([
        r,
        f
    ]);
    clearTimeout(a);
    if (s !== undefined) {
        e?.removeEventListener("abort", s);
    }
    if (!d(n)) {
        n.staleUnresolved = true;
        w(n, r);
    }
}
function w(e, n) {
    if (e.refresh !== n || e.abandoned !== undefined) {
        return false;
    }
    e.refresh = undefined;
    e.refreshStartedAt = undefined;
    e.abandoned = n;
    n.finally(()=>{
        if (e.abandoned === n) {
            e.abandoned = undefined;
        }
    });
    return true;
}
function b(e) {
    if (e.refresh !== undefined) {
        if (e.refreshStartedAt !== undefined && performance.now() - e.refreshStartedAt <= h || !w(e, e.refresh)) {
            return e.refresh;
        }
    }
    e.refreshStartedAt = performance.now();
    let n = oMe().catch(()=>{}).finally(()=>{
        if (e.refresh === n) {
            e.refresh = undefined;
            e.refreshStartedAt = undefined;
        }
    });
    e.refresh = n;
    return n;
}
function R() {
    return z6() === "accepted";
}
function WG() {
    return bQn() !== undefined;
}
function bQn() {
    let e = (n)=>n?.remoteTools?.allowUnattendedServing === false;
    if (Ap().some(e) || cse().some(e) || e(fe("policySettings"))) {
        return "managed";
    }
    if (e(fe("userSettings"))) {
        return "user";
    }
}
function DWt() {
    z6();
}
function SQn() {
    let { view } = i();
    return view?.unreadable === true || view?.staleYes === true;
}
function vGr() {
    return i().view?.unreadable === true;
}
async function wQn({ start }) {
    try {
        let { classifyDeviceSandboxPosture, ensureDeviceSandboxPosture, readDeviceSandboxSnapshot } = await import("/$bunfs/root/chunk-dvy0zh5j.js");
        if (start) {
            return (await ensureDeviceSandboxPosture()).confined;
        }
        return classifyDeviceSandboxPosture(readDeviceSandboxSnapshot(), {
            requireStarted: false
        }).confined;
    } catch  {
        return false;
    }
}
function I() {
    return i().view?.hostAllows === true;
}
function C(e, n) {
    return n && e.view !== undefined && e.view.choice === "unset" && !e.view.unreadable;
}
function hze() {
    try {
        let e = i();
        return !WG() && !e.staleUnresolved && C(e, e.view?.hostAllows === true);
    } catch  {
        return false;
    }
}
function f_t(e) {
    try {
        let n = R();
        let r = i();
        return WG() || r.staleUnresolved || !n && !C(r, e ?? I());
    } catch (error) {
        t(`unattended-serving consent: read failed, call treated as unconsented (${l(error)})`, {
            level: "warn"
        });
        return true;
    }
}
export { _K, G_n, V_n, p_t, _Qn, oMe, sMe, z6, wGr, HWt, WG, bQn, DWt, SQn, vGr, wQn, hze, f_t };
