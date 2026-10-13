import "/$bunfs/root/chunk-wkmq9ht0.js";
import "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import { Za } from "/$bunfs/root/chunk-xgw72tt1.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import { _ } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import { MYt, HJ } from "/$bunfs/root/chunk-q2qa7zyr.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-wew3321y.js";
import "/$bunfs/root/chunk-jn6evvyh.js";
import { o, T, De } from "/$bunfs/root/chunk-smx21d0k.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { isAbsolute, normalize } from "path";
const c = ()=>o().min(1).max(4096).refine((t)=>!t.includes("\x00") && isAbsolute(t) && !Za(t), "must be an absolute local path, not a network or automount path (such as \\\\server\\share, //server/share or /net/host), with no NUL character");
const g = p(()=>De({
        repoRoot: c(),
        worktreePaths: T(c()).min(1).max(4)
    }));
export async function runWorktreeRegistrationDrops(t) {
    let e = g().safeParse(t);
    if (!e.success) {
        let r = e.error.issues[0];
        return {
            ok: false,
            error: r ? `Not a worktree registration request (${r.path.map(String).join(".") || "request"}: ${r.message}).` : "Not a worktree registration request."
        };
    }
    let { worktreePaths } = e.data;
    let repoSpelled = normalize(e.data.repoRoot);
    let a = await MYt(repoSpelled);
    if (a === null) {
        let reason = `the repository at ${repoSpelled} could not be vetted`;
        return {
            ok: true,
            outcomes: worktreePaths.map(()=>({
                    outcome: "kept",
                    reason
                }))
        };
    }
    let outcomes = [];
    for (let worktreePath of worktreePaths){
        let i = await HJ(a, {
            worktreePath,
            repoSpelled
        }, {
            locked: "keep"
        });
        outcomes.push(i.outcome === "kept" ? {
            outcome: "kept",
            reason: i.reason
        } : {
            outcome: i.outcome
        });
    }
    return {
        ok: true,
        outcomes
    };
}
export function registrationDropsLine(outcomes) {
    return _({
        ok: true,
        outcomes
    });
}
