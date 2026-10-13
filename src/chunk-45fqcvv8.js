import { lt, we } from "/$bunfs/root/chunk-ctt36bn8.js";
import { DRe, l1, k, Es, Xi, Lm } from "/$bunfs/root/chunk-0ycjphb5.js";
import { t } from "/$bunfs/root/chunk-bd805sh6.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g } from "/$bunfs/root/chunk-04d4ftnx.js";
import { rwe, Wm, se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { ur, Ot } from "/$bunfs/root/chunk-2d9a83dh.js";
import { ct } from "/$bunfs/root/chunk-h7cbghgp.js";
const L = [
    ".claude/skills",
    ".claude/commands"
];
const _ = 3;
const y = 100;
function v(n) {
    let e = n.split("/");
    if (e[0] !== ".claude" || e.length < 3) {
        return null;
    }
    switch(e[1]){
        case "skills":
            if (e.length === 4 && e[3] === "SKILL.md") {
                return {
                    kind: "skill",
                    name: e[2]
                };
            }
            return null;
        case "commands":
            {
                let o = e.at(-1);
                if (!o.endsWith(".md")) {
                    return null;
                }
                if (/^skill\.md$/i.test(o)) {
                    if (e.length < 4) {
                        return null;
                    }
                    return {
                        kind: "command",
                        name: e.slice(2, -1).join(":")
                    };
                }
                return {
                    kind: "command",
                    name: e.slice(2).join(":").slice(0, -3)
                };
            }
        default:
            return null;
    }
}
class x {
    inFlight = undefined;
    resolved = undefined;
    get(n) {
        this.inFlight ??= this.scan(n);
        return this.inFlight;
    }
    teammateAuthorOf(n) {
        return this.resolved?.find((e)=>!e.byCurrentUser && e.name === n)?.author || null;
    }
    async scan(n) {
        if (!Es()) {
            return [];
        }
        let e = rwe(se(), we());
        let cwd = ur(e);
        if (!cwd) {
            return [];
        }
        let [{ stdout, code }, s] = await Promise.all([
            ct(Ot(), [
                "-c",
                "core.quotePath=false",
                "-c",
                "core.fsmonitor=",
                "-c",
                "core.hooksPath=/dev/null",
                "-c",
                "core.pager=",
                "-c",
                "log.showSignature=false",
                "log",
                "--since=7.days",
                "--diff-filter=A",
                "--name-only",
                "--format=COMMIT%x00%an%x00%ae",
                "--",
                ...L
            ], {
                cwd,
                timeout: 5000
            }),
            Wm(e, DRe)
        ]);
        if (code !== 0) {
            return [];
        }
        let c = s?.toLowerCase();
        let l = [];
        let A = new Set;
        let author = "";
        let h = "";
        for (let path of stdout.split(`
`)){
            if (path.startsWith("COMMIT\x00")) {
                let f = path.split("\x00");
                author = f[1] ?? "";
                h = (f[2] ?? "").toLowerCase();
                continue;
            }
            if (!path || A.has(path)) {
                continue;
            }
            A.add(path);
            let d = v(path);
            if (d) {
                let byCurrentUser = Boolean(c && h === c);
                l.push({
                    path,
                    author,
                    byCurrentUser,
                    ...d
                });
            }
        }
        this.resolved = l;
        let w = Xi();
        let E = new Set(w.seenTeamArtifactPaths ?? []);
        let hasUnseenTeamArtifacts = l.some((r)=>!r.byCurrentUser && !E.has(r.path));
        let U = new Set(w.loggedAuthoredArtifactPaths ?? []);
        let p = l.filter((r)=>r.byCurrentUser && !U.has(r.path));
        for (let r of p){
            i("tengu_skill_authored", {
                is_skill: r.kind === "skill"
            });
        }
        try {
            await Lm((r)=>{
                let d = r.hasUnseenTeamArtifacts === hasUnseenTeamArtifacts;
                if (p.length === 0 && d) {
                    return r;
                }
                let f = d ? r : {
                    ...r,
                    hasUnseenTeamArtifacts
                };
                if (p.length === 0) {
                    return f;
                }
                let j = f.loggedAuthoredArtifactPaths ?? [];
                let C = p.map((T)=>T.path);
                let B = new Set(C);
                let loggedAuthoredArtifactPaths = [
                    ...j.filter((T)=>!B.has(T)),
                    ...C
                ].slice(-y);
                return {
                    ...f,
                    loggedAuthoredArtifactPaths
                };
            }, n);
        } catch (error) {
            t(`team-artifact eligibility persist failed: ${error}`);
        }
        return l;
    }
}
const b = new lt(()=>new x);
function S(n, e) {
    return b.of(n).get(e);
}
function jyt(n, e, o) {
    if (e !== "projectSettings" || !k("tengu_tussock_oriole", false)) {
        return null;
    }
    return b.of(n).teammateAuthorOf(o);
}
function K2o(n, e) {
    if (l1()) {
        S(n, e).catch(()=>{});
    }
    if (!k("tengu_tussock_oriole", false)) {
        return false;
    }
    return Xi().hasUnseenTeamArtifacts === true;
}
async function Y2o(n, e) {
    let o = await S(n, e);
    if (o.length === 0) {
        return [];
    }
    let a = new Set(Xi().seenTeamArtifactPaths ?? []);
    return o.filter((m)=>!m.byCurrentUser && !a.has(m.path));
}
async function X2o(n, e) {
    let a = (await S(n, e)).filter((s)=>!s.byCurrentUser).map((s)=>s.path);
    let m = new Set(a);
    await Lm((s)=>{
        let c = s.seenTeamArtifactPaths ?? [];
        let seenTeamArtifactPaths = [
            ...c.filter((u)=>!m.has(u)),
            ...a
        ].slice(-y);
        if (seenTeamArtifactPaths.length === c.length && seenTeamArtifactPaths.every((u, h)=>u === c[h]) && s.hasUnseenTeamArtifacts === false) {
            return s;
        }
        return {
            ...s,
            seenTeamArtifactPaths,
            hasUnseenTeamArtifacts: false
        };
    }, e);
}
function J2o(n) {
    let e = {
        skill: 0,
        command: 0
    };
    for (let o of n){
        e[o.kind]++;
    }
    g("tips_team_artifact_show");
    i("tengu_team_artifact_tip_shown", {
        skill_count: e.skill,
        command_count: e.command,
        overflow_count: Math.max(0, n.length - _)
    });
}
function Wyt(n, e) {
    if (n !== "projectSettings") {
        return {};
    }
    return {
        via_team_tip: (Xi().seenTeamArtifactPaths ?? []).some((a)=>v(a)?.name === e)
    };
}
function Q2o(n) {
    let e = n.filter((c)=>!c.byCurrentUser);
    if (e.length === 0) {
        return "";
    }
    let o = e.slice(0, _);
    let a = o.map((c)=>`/${c.name} (${c.author || "a teammate"})`);
    let m = a.length === 1 ? a[0] : `${a.slice(0, -1).join(", ")} and ${a.at(-1)}`;
    let s = e.length - o.length;
    return `New from your team: ${m}${s > 0 ? `, plus ${s} more` : ""}`;
}
export { jyt, K2o, Y2o, X2o, J2o, Wyt, Q2o };
