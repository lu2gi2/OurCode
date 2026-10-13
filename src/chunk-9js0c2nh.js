import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { W } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import { yu } from "/$bunfs/root/chunk-qk3m4n8a.js";
const y = 2;
export function createDeviceHookRegistry(i) {
    let e = null;
    let l = null;
    let a = 0;
    let r = false;
    let s = null;
    let d = 0;
    let p = [];
    let m = ()=>{
        l?.clear();
        l = null;
    };
    let v = ()=>{
        m();
        if (e === null) {
            return;
        }
        let n = e;
        l = i.setTimer(()=>{
            l = null;
            if (e !== n) {
                return;
            }
            if (i.now() < n.leaseExpiresAt) {
                v();
                return;
            }
            let o = {
                ...n,
                entries: []
            };
            e = o.templates.length === 0 ? null : o;
            for (let u of [
                ...i.onLeaseExpired ? [
                    i.onLeaseExpired
                ] : [],
                ...p
            ]){
                try {
                    u(o);
                } catch (error) {
                    t(`[deviceHooks] lease-expiry listener threw: ${W(error).stack ?? String(error)}`, {
                        level: "error"
                    });
                }
            }
        }, Math.min(yu, Math.max(0, n.leaseExpiresAt - i.now())));
    };
    return {
        current: ()=>e,
        generation: ()=>d,
        recordMiss (n, o) {
            if (e === null || e.instanceId !== n || o !== d) {
                return false;
            }
            a += 1;
            if (!r && a >= y) {
                r = true;
                s = i.now();
            }
            return r;
        },
        recordHit (n) {
            if (e !== null && e.instanceId === n) {
                a = 0;
            }
        },
        isAway: (n)=>e !== null && e.instanceId === n && r,
        awaySince: (n)=>{
            if (e !== null && e.instanceId === n && r) {
                return s;
            }
            return null;
        },
        replaceOwner (n) {
            let replaced = e !== null && e.instanceId !== n.instanceId ? e.instanceId : undefined;
            let u = e !== null && replaced === undefined;
            let awaySince = u && r ? s : null;
            e = n;
            if (!u || awaySince !== null) {
                a = 0;
                r = false;
                s = null;
            }
            d += 1;
            v();
            return {
                ...replaced !== undefined && {
                    replaced
                },
                ...awaySince !== null && {
                    awaySince
                }
            };
        },
        removeOwner (n) {
            if (e === null || e.instanceId !== n) {
                return false;
            }
            e = null;
            a = 0;
            r = false;
            s = null;
            m();
            return true;
        },
        clear () {
            e = null;
            a = 0;
            r = false;
            s = null;
            m();
        },
        onLeaseExpired (n) {
            p.push(n);
        }
    };
}
export function productionRegistryTimer(i, e) {
    let l = setTimeout(i, e);
    l.unref();
    return {
        clear: ()=>clearTimeout(l)
    };
}
