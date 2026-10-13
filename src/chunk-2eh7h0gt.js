import { uPr, pPr } from "/$bunfs/root/chunk-ctt36bn8.js";
import { x, l, v, xs } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { g, m, f, Zr } from "/$bunfs/root/chunk-04d4ftnx.js";
import { _, X, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { Z8e } from "/$bunfs/root/chunk-6kc68p18.js";
import { ja } from "/$bunfs/root/chunk-hz24p3zh.js";
import { c } from "/$bunfs/root/chunk-etbngzss.js";
import { $e } from "/$bunfs/root/chunk-se8vehhp.js";
import { Y_, $l, Oc } from "/$bunfs/root/chunk-wrn3nvp5.js";
import { Yot } from "/$bunfs/root/chunk-5xfyk3ds.js";
import { ca } from "/$bunfs/root/chunk-6g4165br.js";
import { mkdir, readFile, rm, writeFile } from "fs/promises";
import { join } from "path";
class _B extends Error {
    constructor(e){
        super(e);
        this.name = "SwarmPaneError";
    }
}
const A = /\p{Cc}/u;
function Rds(e) {
    return A.test(e);
}
function $ot(e) {
    let r = A.exec(e);
    if (r) {
        let n = r[0].codePointAt(0);
        throw new _B(`Refusing to send command containing control character U+${n.toString(16).padStart(4, "0").toUpperCase()} to terminal pane`);
    }
}
function G5t(e) {
    return e === "tmux" || e === "iterm2";
}
function VMn(e) {
    return e.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase();
}
function Hso(e) {
    return e.replaceAll("@", "-");
}
function C(e) {
    return join(Z8e(), VMn(e));
}
function cLe(e) {
    return join(C(e), "config.json");
}
function I(e) {
    return $e.team(VMn(e));
}
function w(error) {
    let r = "failureClass" in error ? `/${error.failureClass}` : "";
    let n = "telemetryCode" in error && error.telemetryCode !== undefined ? ` [${error.telemetryCode}]` : "";
    return `${error.code}${r}${n}`;
}
function E(error) {
    return error.code === "Unavailable" && error.telemetryCode === "LockSuspect";
}
function D(error) {
    return error.code === "Unavailable" && error.telemetryCode === "LockContended";
}
function h(e) {
    return e.code === "Unavailable" || e.code === "NotFound" || e.code === "Failed" && (e.failureClass === "permission" || e.failureClass === "resource" || e.failureClass === "environment" || e.failureClass === "unknown" && xs(e.cause));
}
function S(e) {
    if (typeof e !== "object" || e === null || Array.isArray(e)) {
        return null;
    }
    let r = e;
    let members = Array.isArray(r.members) ? r.members.filter(L) : [];
    if (Array.isArray(r.members) && members.length === r.members.length) {
        return r;
    }
    return {
        ...r,
        members
    };
}
function L(e) {
    return typeof e === "object" && e !== null && "agentId" in e && typeof e.agentId === "string" && "name" in e && typeof e.name === "string";
}
async function F_(e, r) {
    if (r) {
        let n = await r.read([
            I(e)
        ]);
        if (!n.ok) {
            t(`[TeammateTool] Failed to read team file for ${e}: ${n.error.code}`);
            return null;
        }
        let i = n.value.items[0];
        if (!i.found) {
            return null;
        }
        try {
            return S(X(Buffer.from(i.value).toString("utf8")));
        } catch (error) {
            t(`[TeammateTool] Failed to read team file for ${e}: ${l(error)}`);
            return null;
        }
    }
    try {
        let n = await readFile(cLe(e), "utf-8");
        return S(X(n));
    } catch (error) {
        if (v(error) === "ENOENT") {
            return null;
        }
        t(`[TeammateTool] Failed to read team file for ${e}: ${l(error)}`);
        return null;
    }
}
function $fr(e, r) {
    if (xs(r)) {
        t(`[TeammateTool] Failed to write team file for ${e} (${v(r)}): ${l(r)}`, {
            level: "error"
        });
    } else if (U(r)) {
        t(`[TeammateTool] Failed to write team file for ${e}: ${l(r)}`, {
            level: "error"
        });
    } else {
        c(r);
    }
}
function U(e) {
    if (!(e instanceof Error) || e.cause === undefined || e.cause === null) {
        return false;
    }
    let e_cause = e.cause;
    if (typeof e_cause !== "object" || typeof e_cause.code !== "string") {
        return false;
    }
    return h(e_cause);
}
const z = {
    realpath: false,
    retries: {
        retries: 10,
        minTimeout: 5,
        maxTimeout: 100
    },
    onCompromised: ()=>{}
};
function B(e) {
    return new x(`Internal error: team file for "${e}" not found. The session team should have been initialized at startup.`, "Team file missing (session team not initialized)");
}
async function o_e(e, r, n, i) {
    if (i) {
        return K(e, r, n, i);
    }
    let a = cLe(e);
    let d;
    try {
        d = await ja(a, {
            lockfilePath: `${a}.lock`,
            ...z
        });
    } catch (error) {
        if (v(error) === "ENOENT") {
            throw B(e);
        }
        throw error;
    }
    try {
        let s = await F_(e);
        if (!s) {
            throw Error("Team config file unreadable (lock acquired, read failed)");
        }
        let u = r(s);
        if (u === false) {
            return;
        }
        try {
            await Ffr(e, s);
        } catch (error) {
            if (!n?.bestEffortWrite) {
                throw error;
            }
            $fr(e, error);
        }
        return u;
    } finally{
        try {
            await d();
        } catch (error) {
            t(`[TeammateTool] updateTeamFile lock release failed: ${l(error)}`);
        }
    }
}
async function Dso(e, r, n) {
    try {
        await o_e(e, (i)=>{
            let a = i.members.findIndex((d)=>d.agentId === r);
            if (a === -1) {
                return false;
            }
            i.members.splice(a, 1);
        }, undefined, n);
    } catch (error) {
        t(`[TeammateTool] removeTeamMember(${r}) failed: ${l(error)}`);
    }
}
async function K(e, r, n, i) {
    let a = I(e);
    let d = 5;
    let s = Yot(50);
    let u;
    let y = (p)=>{
        if (p === undefined) {
            return {
                skip: true,
                result: {
                    kind: "missing"
                }
            };
        }
        let T;
        try {
            T = S(X(Buffer.from(p.value).toString("utf8"))) ?? undefined;
        } catch (error) {
            return {
                skip: true,
                result: {
                    kind: "unreadable",
                    parseError: l(error)
                }
            };
        }
        if (!T) {
            return {
                skip: true,
                result: {
                    kind: "unreadable"
                }
            };
        }
        let result;
        try {
            result = r(T);
        } catch (error) {
            return {
                skip: true,
                result: {
                    kind: "threw",
                    error
                }
            };
        }
        if (result === false) {
            return {
                skip: true,
                result: {
                    kind: "declined"
                }
            };
        }
        u = result;
        return {
            write: _(T, null, 2),
            result: {
                kind: "applied",
                result
            }
        };
    };
    let o;
    for(let p = 1;; p++){
        o = await i.update(a, y);
        if (!o.ok) {
            if (E(o.error) && p < 5) {
                await s(p);
                continue;
            }
            break;
        }
        let T = o.value.result;
        if (T === undefined || T.kind === "declined") {
            return;
        }
        switch(T.kind){
            case "missing":
                throw B(e);
            case "unreadable":
                if (T.parseError !== undefined) {
                    t(`[TeammateTool] Failed to read team file for ${e}: ${T.parseError}`);
                }
                if (p < 5) {
                    await s(p);
                    continue;
                }
                throw Error("Team config file unreadable (lock acquired, read failed)");
            case "threw":
                throw T.error;
            case "applied":
                g("swarm_team_file_update");
                return T.result;
            default:
                return T;
        }
    }
    let k = D(o.error);
    if (k) {
        f("swarm_team_file_update", "lock_contended");
    }
    if (!n?.bestEffortWrite) {
        let p = new x(`Team file update failed (${w(o.error)}) for ${e}`, "Team file update failed (storage v5)");
        p.cause = o.error;
        if (!k && !h(o.error)) {
            m("swarm_team_file_update", o.error.code);
        }
        throw p;
    }
    if (!E(o.error) && h(o.error)) {
        t(`[TeammateTool] Failed to update team file for ${e} (${w(o.error)})`, {
            level: "error"
        });
    } else {
        let p = new x(`Team file update failed (${w(o.error)}) for ${e}`, "Team file update failed (storage v5)");
        p.cause = o.error;
        m("swarm_team_file_update", o.error.code);
        c(p);
    }
    return u;
}
async function Ffr(e, r, n) {
    if (n) {
        let a = await n.write(I(e), _(r, null, 2), {
            precondition: {
                type: "none"
            }
        });
        if (!a.ok) {
            let d = new x(`Team file write failed (${w(a.error)}) for ${e}`, "Team file write failed (storage v5)");
            d.cause = a.error;
            throw d;
        }
        return;
    }
    let i = C(e);
    await mkdir(i, {
        recursive: true
    });
    await writeFile(cLe(e), _(r, null, 2));
}
async function EKe(e, r, n) {
    let i = r.agentId || r.name;
    if (!i) {
        t("[TeammateTool] removeTeammateFromTeamFile called with no identifier");
        return false;
    }
    let a = false;
    try {
        let d = await o_e(e, (s)=>{
            a = false;
            let length = s.members.length;
            s.members = s.members.filter((o)=>{
                if (r.agentId && o.agentId === r.agentId) {
                    return false;
                }
                if (r.name && o.name === r.name) {
                    return false;
                }
                return true;
            });
            let y = s.members.length !== length;
            a = !y;
            return y;
        }, {
            bestEffortWrite: true
        }, n) ?? false;
        if (d) {
            t(`[TeammateTool] Removed teammate from team file: ${i}`);
        } else if (a) {
            t(`[TeammateTool] Teammate ${i} not found in team file for "${e}"`);
        }
        return d;
    } catch (error) {
        t(`[TeammateTool] Cannot remove teammate ${i} from "${e}": ${l(error)}`);
        return false;
    }
}
async function V5t(e, r, n, i) {
    let a = false;
    try {
        let d = await o_e(e, (s)=>{
            let u = s.members.findIndex((o)=>o.agentId === r);
            let y = s.members[u];
            if (!y) {
                a = false;
                return false;
            }
            if (n?.onlyIfJoinedBefore !== undefined && y.joinedAt >= n.onlyIfJoinedBefore) {
                a = true;
                return false;
            }
            a = false;
            s.members.splice(u, 1);
            return true;
        }, {
            bestEffortWrite: true
        }, i) ?? false;
        if (d) {
            t(`[TeammateTool] Removed member ${r} from team ${e}`);
        } else if (a) {
            t(`[TeammateTool] Skipped stale removal of ${r} from team ${e} (re-added after removal was initiated)`);
        }
        return d;
    } catch (error) {
        t(`[TeammateTool] removeMemberByAgentId(${r}) failed for team ${e}: ${l(error)}`);
        return false;
    }
}
async function Ufr(e, r, n, i) {
    let a = "unchanged";
    try {
        await o_e(e, (d)=>{
            let s = d.members.find((u)=>u.name === r);
            if (!s) {
                a = "absent";
                return false;
            }
            if (s.mode === n) {
                a = "unchanged";
                return false;
            }
            a = "set";
            s.mode = n;
        }, undefined, i);
        if (a === "absent") {
            t(`[TeammateTool] Cannot set member mode: member ${r} not found in team ${e}`);
        } else if (a === "set") {
            t(`[TeammateTool] Set member ${r} in team ${e} to mode: ${n}`);
        }
    } catch (error) {
        t(`[TeammateTool] Cannot set member mode: ${l(error)}`);
    }
}
async function q5t(e, r, n) {
    if (!Oc()) {
        return;
    }
    let i = r ?? $l();
    let a = Y_();
    if (i && a) {
        await Ufr(i, a, e, n);
    }
}
async function K5t(e, r, n, i) {
    let a = "unchanged";
    try {
        await o_e(e, (d)=>{
            let s = d.members.find((u)=>u.name === r);
            if (!s) {
                a = "absent";
                return false;
            }
            if (s.isActive === n) {
                a = "unchanged";
                return false;
            }
            a = "set";
            s.isActive = n;
        }, undefined, i);
        if (a === "absent") {
            t(`[TeammateTool] Cannot set member active: member ${r} not found in team ${e}`);
        } else if (a === "set") {
            t(`[TeammateTool] Set member ${r} in team ${e} to ${n ? "active" : "idle"}`);
        }
    } catch (error) {
        t(`[TeammateTool] Cannot set member active: ${l(error)}`);
    }
}
function Lso(e) {
    uPr().add(e);
}
async function fzs(e) {
    return Zr("swarm_session_cleanup", async ()=>{
        let r = uPr();
        if (r.size === 0) {
            return;
        }
        let n = Array.from(r);
        t(`cleanupSessionTeams: removing ${n.length} orphan team dir(s): ${n.join(", ")}`);
        await Promise.allSettled(n.map((i)=>V(i, e)));
        await Promise.allSettled(n.map((i)=>q(i)));
        r.clear();
    });
}
function R(e, r) {
    return `${e}:${r}`;
}
function Nso(e, r) {
    if (G5t(e) && r) {
        pPr().add(R(e, r));
    }
}
async function V(e, r) {
    let n = await F_(e, r);
    if (!n) {
        return;
    }
    let i = pPr();
    let a = n.members.filter((o)=>o.name !== ca && o.tmuxPaneId && o.backendType && G5t(o.backendType) && i.has(R(o.backendType, o.tmuxPaneId)));
    if (a.length === 0) {
        return;
    }
    let [{ ensureBackendsRegistered, getBackendByType }, { isInsideTmux }] = await Promise.all([
        import("/$bunfs/root/chunk-2dna3k7s.js"),
        import("/$bunfs/root/chunk-9yr3k4xa.js")
    ]);
    await ensureBackendsRegistered();
    let y = !await isInsideTmux();
    await Promise.allSettled(a.map(async (o)=>{
        if (!o.tmuxPaneId || !o.backendType || !G5t(o.backendType)) {
            return;
        }
        let k = await getBackendByType(o.backendType).killPane(o.tmuxPaneId, y);
        t(`cleanupSessionTeams: killPane ${o.name} (${o.backendType} ${o.tmuxPaneId}) \u2192 ${k}`);
    }));
}
async function q(e) {
    return Zr("swarm_team_cleanup", async ()=>{
        let r = C(e);
        try {
            await rm(r, {
                recursive: true,
                force: true
            });
            t(`[TeammateTool] Cleaned up team directory: ${r}`);
        } catch (error) {
            t(`[TeammateTool] Failed to clean up team directory ${r}: ${l(error)}`);
        }
    });
}
export { _B, Rds, $ot, G5t, VMn, Hso, cLe, F_, $fr, o_e, Dso, Ffr, EKe, V5t, Ufr, q5t, K5t, Lso, fzs, Nso };
