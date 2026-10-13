import { jb } from "/$bunfs/root/chunk-dn762950.js";
import { Ne } from "/$bunfs/root/chunk-j27d47mr.js";
import { k_, Gon, Von, SPo } from "/$bunfs/root/chunk-ctt36bn8.js";
import { gl } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { X, Gm, KCo, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I } from "/$bunfs/root/chunk-qch5xj2a.js";
import { rUe, UF, nnn, jWn, qdt } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { kqe } from "/$bunfs/root/chunk-j8rm3ydc.js";
import { sZt, dz, hOt, UZt, R_o, fFe } from "/$bunfs/root/chunk-0ycjphb5.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { Wy } from "/$bunfs/root/chunk-3fj60qgx.js";
import { ny } from "/$bunfs/root/chunk-xb9cceab.js";
import { Pr } from "/$bunfs/root/chunk-9dn6gg6j.js";
import { IH } from "/$bunfs/root/chunk-03gkt7r5.js";
import { ES, gpe } from "/$bunfs/root/chunk-55x53sfe.js";
import { Cjn } from "/$bunfs/root/chunk-qbpgcqdd.js";
import { fH } from "/$bunfs/root/chunk-74djrymf.js";
import { sY, KNe, Qxt, A$n, Cat, cfo, ufo } from "/$bunfs/root/chunk-vy0qtdrm.js";
import { wr, T$n } from "/$bunfs/root/chunk-2atph4yw.js";
import { LBo } from "/$bunfs/root/chunk-pqn2jwd4.js";
import { F, D } from "/$bunfs/root/chunk-tb7m3r21.js";
import { createServer } from "net";
function gin(e, r, s) {
    return new Promise((resolve, reject)=>{
        let E = (o)=>{
            m.close();
            reject(o);
        };
        let m = createServer((o)=>{
            let l = "";
            o.setEncoding("utf8");
            o.on("data", (f)=>{
                l += f;
                if (s && l.length > 8388608) {
                    o.destroy();
                    return;
                }
                let n = l.indexOf(`
`);
                if (n < 0) {
                    return;
                }
                if (s) {
                    let p;
                    try {
                        p = X(l.slice(0, n));
                    } catch  {
                        p = undefined;
                    }
                    if (!p || !fH(p.auth, s)) {
                        o.destroy();
                        return;
                    }
                    m.close();
                    resolve(p);
                    return;
                }
                m.close();
                try {
                    resolve(X(l.slice(0, n)));
                } catch (error) {
                    reject(error);
                }
            });
            o.on("error", s ? ()=>o.destroy() : E);
        });
        m.on("error", E);
        if (r) {
            m.once("listening", ()=>{
                try {
                    r();
                } catch (error) {
                    E(error);
                }
            });
        }
        m.listen(e);
    });
}
async function hin(e, r, s) {
    let _ = performance.now();
    let c = await Wy(e.cwd, undefined);
    Gm(c);
    let E = {
        originalCwd: c,
        projectRoot: c,
        cwd: c
    };
    if (e.sessionId) {
        k_(jb(e.sessionId), "spare_claim", null, E);
    } else {
        Gon(E);
    }
    Pr();
    fFe();
    UZt();
    Von();
    T$n();
    IH({
        warm_spare_claimed: 1
    });
    if (Ne(e.env.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST)) {
        for (let n of Object.keys(process.env)){
            if (nnn(n) || n === "ANTHROPIC_CUSTOM_HEADERS" || jWn(n) || qdt(n)) {
                delete process.env[n];
            }
        }
    }
    if (KNe(e.env)) {
        cfo();
    }
    delete process.env.ANTHROPIC_AUTH_TOKEN;
    delete process.env.ANTHROPIC_API_KEY;
    delete process.env.CLAUDE_CODE_OAUTH_TOKEN;
    a.unset("CLAUDE_CODE_CONFIG_WATCH_EVENTS");
    let { kept, dropped } = A$n(e.env);
    Object.assign(process.env, kept);
    process.argv = [
        process.argv[0],
        process.argv[1],
        ...e.argv
    ];
    Pr();
    KCo();
    if (dropped.length > 0) {
        g(dropped);
    }
    s?.();
    R_o();
    ny.reset();
    let l = performance.now();
    await LBo(e.argv);
    wr("spare_claim_token_file_wait_ms", performance.now() - l, l);
    SPo();
    sZt();
    Cjn();
    sY();
    hOt({
        preservePendingExposures: true,
        preserveLoggedExposures: true
    });
    dz();
    ufo(Object.keys(e.env));
    gpe();
    ES();
    let { main } = await r;
    wr("spare_claim_apply_ms", performance.now() - _, _);
    await main();
}
const v = 8;
function g(dropped) {
    dropped.slice(0, v).forEach(({ name, problem })=>{
        t(`[bg-spare] environment variable ${Cat(name)} was not applied to this background session: ${Qxt[problem]}. Programs it starts will not see it.`, {
            level: "warn"
        });
    });
    if (dropped.length > v) {
        let r = dropped.length - v;
        t(`[bg-spare] \u2026and ${r} more environment ${I(r, "variable was", "variables were")} not applied.`, {
            level: "warn"
        });
    }
    i("tengu_bg_claim_env_dropped", {
        dropped: dropped.length,
        nul_in_value: F(dropped, (r)=>r.problem === "nul-in-value"),
        invalid_name: F(dropped, (r)=>r.problem === "invalid-name"),
        non_string_value: F(dropped, (r)=>r.problem === "non-string-value"),
        name_classes: gl(D(dropped.map((r)=>C(r.name))))
    });
}
function C(name) {
    if (name === "PATH") {
        return "path";
    }
    if (name.startsWith("CLAUDE_BG_") || name === "CLAUDE_JOB_DIR" || name === "CLAUDE_CODE_SESSION_KIND" || name === "CLAUDE_CODE_SESSION_NAME") {
        return "bg_worker";
    }
    if (UF.includes(name)) {
        return "credential";
    }
    if (rUe.includes(name)) {
        return "gateway";
    }
    if (kqe.has(name)) {
        return "provider";
    }
    if (Object.keys(a).includes(name)) {
        return "declared";
    }
    return "other";
}
export { gin, hin };
