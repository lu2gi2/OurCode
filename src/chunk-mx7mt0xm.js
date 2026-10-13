import "/$bunfs/root/chunk-wkmq9ht0.js";
import { l, z } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import { Q } from "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-24agvrd9.js";
import "/$bunfs/root/chunk-qch5xj2a.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import { An, Q_, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import { Pp, J_, Ot, VY } from "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-wew3321y.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import "/$bunfs/root/chunk-r3z1chqx.js";
import { ac, rV } from "/$bunfs/root/chunk-pedbhwf4.js";
import "/$bunfs/root/chunk-fnj5y75n.js";
import { v5 } from "/$bunfs/root/chunk-bt747bf1.js";
import "/$bunfs/root/chunk-jn6evvyh.js";
import "/$bunfs/root/chunk-z07je2n9.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import "/$bunfs/root/chunk-79wfew46.js";
import { lstat, open } from "fs/promises";
import { join, resolve } from "path";
const b = 10000;
const k = 500;
export async function withCollectTimeout(e, r = b) {
    let i = new AbortController;
    try {
        return await Promise.race([
            e,
            Q(r, i.signal).then(()=>{
                throw Error("worktree probe timed out");
            })
        ]);
    } finally{
        i.abort();
    }
}
export async function collectWorktreeState(e, r, i = b) {
    let s = J_(e);
    if (!s) {
        return null;
    }
    try {
        let n = await withCollectTimeout(O(s, r, Date.now() + i), i);
        if (n.submodules_unverified) {
            f("bridge_worktree_state", "submodules_unverifiable");
        } else {
            g("bridge_worktree_state");
        }
        return n;
    } catch (error) {
        m("bridge_worktree_state", "collect_failed");
        t(`[bridge:worktree] collectWorktreeState failed: ${l(error)}`);
        return null;
    }
}
async function O(e, branch, i) {
    let s = await VY(e);
    if (!s) {
        Pp().gitDirByCwd.delete(resolve(e));
        s = await VY(e);
    }
    if (!s) {
        throw Error("getGitDir returned null — cannot verify worktree state");
    }
    let [head_sha, o, a, mid_operation, has_submodules, has_lfs] = await Promise.all([
        S(e),
        x(e, branch),
        A(e, i),
        M(s),
        _(join(e, ".gitmodules")),
        P(e)
    ]);
    return {
        branch,
        head_sha,
        unpushed_count: o.count,
        is_dirty: a.dirty,
        upstream_exists: o.upstreamExists,
        mid_operation,
        has_submodules,
        submodules_unverified: a.submodulesUnverified,
        has_lfs,
        reported_at: new Date().toISOString()
    };
}
const maxBuffer = 4194304;
function u(cwd, r) {
    return ct(Ot(), [
        ...An,
        ...r
    ], {
        cwd,
        env: ac(cwd),
        preserveOutputOnError: false,
        maxBuffer,
        timeout: 10000
    });
}
async function S(e) {
    let { code, stdout } = await u(e, [
        "rev-parse",
        "HEAD"
    ]);
    if (code === 0) {
        return stdout.trim();
    }
    return null;
}
async function x(e, branch) {
    if (!branch) {
        return {
            count: null,
            upstreamExists: false
        };
    }
    let i = `refs/remotes/origin/${branch}`;
    let s = await u(e, [
        "rev-parse",
        "--verify",
        "--quiet",
        `${i}^{commit}`
    ]);
    if (s.code !== 0 || !s.stdout.trim()) {
        return {
            count: null,
            upstreamExists: false
        };
    }
    let { code, stdout } = await u(e, [
        "rev-list",
        "--count",
        `${i}..HEAD`
    ]);
    if (code !== 0) {
        return {
            count: null,
            upstreamExists: false
        };
    }
    let a = parseInt(stdout.trim(), 10);
    return {
        count: Number.isFinite(a) ? a : null,
        upstreamExists: true
    };
}
async function A(e, r) {
    let i = await rV(e);
    if (!i.ok) {
        throw Error("repository config could not be vetted");
    }
    let { code, stdout } = await u(e, [
        ...i.args,
        "--no-optional-locks",
        "status",
        "--porcelain",
        "-unormal",
        Q_
    ]);
    if (code !== 0) {
        throw Error("git status failed");
    }
    if (stdout.trim().length > 0) {
        return {
            dirty: true,
            submodulesUnverified: false
        };
    }
    let o = await v5(e, {
        deadlineMs: Math.max(0, r - Date.now() - k)
    });
    if (o.kind === "verified") {
        return {
            dirty: o.withTrackedChanges.length + o.withUntrackedFiles.length > 0,
            submodulesUnverified: false
        };
    }
    switch(o.reason){
        case "unreadable":
            throw Error("submodule state unreadable — cannot verify worktree is clean");
        case "nested_submodules":
        case "too_many":
        case "nested_repository":
        case "unconfigured_gitlink":
        case "gitdir_outside_modules":
        case "timeout":
            t(`[bridge:worktree] submodules could not be inspected (${o.reason}); reporting is_dirty=true, submodules_unverified=true`, {
                level: "warn"
            });
            return {
                dirty: true,
                submodulesUnverified: true
            };
    }
}
async function _(e) {
    try {
        let r = await lstat(e);
        return r.isFile() || r.isDirectory();
    } catch (error) {
        if (z(error)) {
            return false;
        }
        throw error;
    }
}
const d = [
    [
        "rebase-merge",
        "rebase"
    ],
    [
        "rebase-apply",
        "rebase"
    ],
    [
        "MERGE_HEAD",
        "merge"
    ],
    [
        "CHERRY_PICK_HEAD",
        "cherry-pick"
    ],
    [
        "REVERT_HEAD",
        "revert"
    ],
    [
        "BISECT_LOG",
        "bisect"
    ],
    [
        "sequencer",
        "cherry-pick"
    ]
];
async function M(e) {
    let i = (await Promise.all(d.map(([s])=>_(join(e, s))))).indexOf(true);
    if (i === -1) {
        return null;
    }
    return d[i][1];
}
async function P(e) {
    let r = join(e, ".gitattributes");
    try {
        if (!(await lstat(r)).isFile()) {
            return false;
        }
    } catch (error) {
        if (z(error)) {
            return false;
        }
        throw error;
    }
    let i;
    try {
        i = await open(r, "r");
        let { buffer, bytesRead } = await i.read(Buffer.alloc(65536), 0, 65536, 0);
        return buffer.toString("utf8", 0, bytesRead).includes("filter=lfs");
    } catch (error) {
        if (z(error)) {
            return false;
        }
        throw error;
    } finally{
        await i?.close();
    }
}
