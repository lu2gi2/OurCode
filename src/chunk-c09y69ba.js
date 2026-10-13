import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-bd805sh6.js";
import { Yy } from "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-sawpz2mr.js";
import { nF, xo } from "/$bunfs/root/chunk-tsfvfcsw.js";
import "/$bunfs/root/chunk-52bcnmbr.js";
import "/$bunfs/root/chunk-x47nahfr.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import { Ft } from "/$bunfs/root/chunk-04d4ftnx.js";
import { vhn } from "/$bunfs/root/chunk-n2p0n845.js";
import { MT, $p, tf, JD } from "/$bunfs/root/chunk-9xenmz7v.js";
import { uu } from "/$bunfs/root/chunk-5w1ksvdy.js";
import { f0 } from "/$bunfs/root/chunk-gc7ea4xt.js";
import { bhn } from "/$bunfs/root/chunk-wkqzrg3y.js";
import { Ryt, Uhn } from "/$bunfs/root/chunk-mqqkgppx.js";
import { ZWt, ezt, O_t, tzt, vbn, Ebn, m4o, g4o } from "/$bunfs/root/chunk-z1cn7pjm.js";
import "/$bunfs/root/chunk-4n16n64p.js";
import "/$bunfs/root/chunk-yp41169e.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { spawn, spawnSync } from "child_process";
import { closeSync } from "fs";
import { constants } from "os";
import { isatty } from "tty";
function E() {
    for(let r = 0; r < 32; r++){
        if (r === 1 || r === 2) {
            continue;
        }
        try {
            if (isatty(r)) {
                closeSync(r);
            }
        } catch  {}
    }
}
export async function execRelaunch({ proactivity } = {}) {
    await new Promise((resolve)=>setImmediate(resolve));
    if (!await JD()) {
        await Ft("agent_launcher", "relaunch_launcher_not_runnable");
        process.stderr.write(`
${tf() ?? `${MT}: launcher \`${$p()[0]}\` was deleted or is not executable \u2014 restore it (or fix the setting), then start claude again`}
`);
        return xo(1);
    }
    let { cmd, prefixArgs } = uu();
    let s = process.argv.slice(2);
    let env = {
        ...process.env
    };
    delete env[Ryt];
    Object.assign(env, Uhn());
    delete env[ZWt];
    delete env[O_t];
    delete env[tzt];
    delete env[ezt];
    if (proactivity) {
        Object.assign(env, Ebn(proactivity));
        if (g4o(s)) {
            Object.assign(env, vbn(proactivity), m4o(proactivity));
        }
    }
    vhn();
    if (O() === "windows") {
        for (let t of [
            "SIGINT",
            "SIGTERM",
            "SIGHUP",
            "SIGBREAK"
        ]){
            process.removeAllListeners(t);
            process.on(t, ()=>{});
        }
        await Promise.all([
            Ut(f0(), 2000, "write queue drain timeout (relaunch)").catch(()=>{}),
            nF()
        ]);
        bhn();
        let e = spawnSync(cmd, [
            ...prefixArgs,
            ...s
        ], {
            stdio: "inherit",
            env
        });
        if (e.error) {
            process.stderr.write(`Failed to relaunch Claude Code: ${e.error.message}
`);
            Yy("relaunch_child_error");
        }
        process.exit(e.status ?? 1);
    }
    let i = spawn(cmd, [
        ...prefixArgs,
        ...s
    ], {
        stdio: "inherit",
        env
    });
    E();
    let c = [
        "SIGINT",
        "SIGTERM",
        "SIGHUP"
    ];
    for (let e of c){
        process.on(e, ()=>{
            try {
                i.kill(e);
            } catch  {}
        });
    }
    return new Promise(()=>{
        i.on("close", (e, t)=>{
            let l = t ? 128 + (constants.signals[t] ?? 0) : 0;
            process.exit(e ?? l);
        });
        i.on("error", (e)=>{
            process.stderr.write(`Failed to relaunch Claude Code: ${e.message}
`);
            Yy("relaunch_child_error");
            process.exit(1);
        });
    });
}
