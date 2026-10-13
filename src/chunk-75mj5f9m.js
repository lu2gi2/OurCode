import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import { js } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import { rxs } from "/$bunfs/root/chunk-qk3m4n8a.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-k7dkeqsc.js";
import "/$bunfs/root/chunk-6gk7mpsm.js";
import "/$bunfs/root/chunk-r3z1chqx.js";
import "/$bunfs/root/chunk-6bjtvbt8.js";
import "/$bunfs/root/chunk-wew3321y.js";
import "/$bunfs/root/chunk-63xa24b4.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-9dn6gg6j.js";
import "/$bunfs/root/chunk-1692wahf.js";
import { ft, ta } from "/$bunfs/root/chunk-gc7ea4xt.js";
import "/$bunfs/root/chunk-craerjpn.js";
import "/$bunfs/root/chunk-03gkt7r5.js";
import "/$bunfs/root/chunk-nj0630nv.js";
import "/$bunfs/root/chunk-n1fq1c8e.js";
import "/$bunfs/root/chunk-77t63btp.js";
import "/$bunfs/root/chunk-yp41169e.js";
import "/$bunfs/root/chunk-2dp0fzyb.js";
import { M, De } from "/$bunfs/root/chunk-smx21d0k.js";
import "/$bunfs/root/chunk-tfc1vf2h.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-m6z3m7rx.js";
import "/$bunfs/root/chunk-tybndaby.js";
import "/$bunfs/root/chunk-79wfew46.js";
const u = null;
const l = p(()=>{
    let r = {
        autoMemoryEnabled: M().optional(),
        autoDreamEnabled: M().optional()
    };
    return De(r).refine((a)=>Object.values(a).some((o)=>o !== undefined), {
        error: `it sets none of ${new Intl.ListFormat("en", {
            type: "disjunction"
        }).format(Object.keys(r))}`
    });
});
export async function runMemorySettingsEdit(r, a) {
    let o = l().safeParse(r);
    if (!o.success) {
        let t = o.error.issues[0];
        return {
            ok: false,
            error: t ? t.path.length > 0 ? `Not a memory settings edit (${t.path.map(String).join(".")}: ${t.message}).` : `Not a memory settings edit: ${t.message}.` : "Not a memory settings edit."
        };
    }
    let o_data = o.data;
    let is_first_enable = o_data.autoDreamEnabled === true && ft().autoDreamEnabled === undefined;
    let written = o_data;
    let error;
    let s = rxs(o_data.accountMemory);
    let m = await ta("userSettings", (t)=>{
        error = s === undefined ? undefined : u?.accountSettingRaiseRefusal(t, s);
        if (error !== undefined) {
            return null;
        }
        written = {
            ...o_data,
            ...o_data.autoMemoryEnabled !== undefined && o_data.accountMemory === undefined && u?.accountKeyKeptWithAutoMemory(t, o_data.autoMemoryEnabled)
        };
        return written;
    }, undefined, a);
    if (m.error) {
        return {
            ok: false,
            error: m.error.message
        };
    }
    if (error !== undefined) {
        return {
            ok: false,
            error
        };
    }
    if (typeof o_data.autoMemoryEnabled === "boolean") {
        await js("tengu_auto_memory_toggled", {
            enabled: o_data.autoMemoryEnabled
        });
    }
    if (typeof o_data.autoDreamEnabled === "boolean") {
        await js("tengu_auto_dream_toggled", {
            enabled: o_data.autoDreamEnabled,
            is_first_enable
        });
    }
    return {
        ok: true,
        written
    };
}
