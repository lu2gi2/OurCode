import { Ea as initialize } from "/$bunfs/root/chunk-0ycjphb5.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { Aw } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { CKt, RKt, xAn } from "/$bunfs/root/chunk-kasbfbhj.js";
import { q4 } from "/$bunfs/root/chunk-tn496ms6.js";
import { PU } from "/$bunfs/root/chunk-ggpgtemh.js";
import { nst } from "/$bunfs/root/chunk-eck15hm6.js";
const g = 3000;
function dLr(e = {}) {
    let r = e.firstFlagFetchWaitMs ?? g;
    let ready = false;
    let i;
    return {
        get ready () {
            return ready;
        },
        whenReady: ()=>i ??= f(r).then(()=>{
                ready = true;
                d();
            })
    };
}
async function f(budgetMs) {
    let r = performance.now();
    try {
        q4();
    } catch (error) {
        c(W(error));
    }
    let o = false;
    let [i, a, m, l] = await Promise.all([
        n("the plugin-hook registration pass", async ()=>{
            await RKt();
        }),
        n("the remote managed-settings load", PU),
        n("the policy-limits load", Aw),
        n("the first flag fetch", async ()=>{
            let { timedOut } = await nst({
                initialize,
                budgetMs
            });
            o = !timedOut;
        })
    ]);
    t(`[remote-tools] ready to judge calls after ${Math.round(performance.now() - r)}ms: waited ${i}ms for plugin hooks, ${a}ms for remote managed settings, ${m}ms for policy limits, ${l}ms for the first flag fetch (${o ? "landed" : "not heard in time"})`);
}
async function n(e, r) {
    let o = performance.now();
    try {
        await r();
    } catch (error) {
        t(`[remote-tools] waiting for ${e} failed; serving goes on without it`, {
            level: "error"
        });
        c(W(error));
    }
    return Math.round(performance.now() - o);
}
async function d() {
    try {
        let e = await CKt(false) ?? await xAn();
        if (e !== undefined) {
            t(`[remote-tools] plugin-delivered hooks are missing from the calls this machine serves, as from its own: ${e}`, {
                level: "error"
            });
        }
    } catch (error) {
        c(W(error));
    }
}
export { dLr };
