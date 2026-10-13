import { nr as host } from "/$bunfs/root/chunk-wew3321y.js";
async function lbr(s) {
    let { isNestedGitLabProject, parseGitRemote, parseGitHubRepository } = await import("/$bunfs/root/chunk-1abjsa9q.js");
    let r = parseGitRemote(s);
    if (r) {
        if (isNestedGitLabProject(r)) {
            return null;
        }
        return r;
    }
    let i = parseGitHubRepository(s);
    if (i) {
        let [o, n] = i.split("/");
        if (o && n) {
            return {
                host,
                owner: o,
                name: n
            };
        }
    }
    return null;
}
async function Sfo(s, e, t) {
    let u = {
        revisionGuessUsed: false
    };
    if (!s) {
        return {
            sources: [],
            outcomes: [],
            report: u
        };
    }
    let { getDefaultBranch } = await import("/$bunfs/root/chunk-vgnfvf7e.js");
    if (e === "HEAD") {
        e = "";
    }
    let revisionGuessUsed = false;
    let revision = e || t || undefined;
    if (!revision) {
        revision = await getDefaultBranch() || undefined;
        revisionGuessUsed = revision !== undefined;
    }
    let branches = e && t && e !== t ? [
        e
    ] : [];
    let branchDropped;
    let warnMessage;
    if (e && branches.length === 0) {
        branchDropped = t ? "is_default" : "no_evidence";
        warnMessage = t ? `${`[bridge] requested branch '${e}' is the default branch \u2014 `}omitted from outcomes.branches (the runner stays on the clone)` : `[bridge] no session-anchored default-branch evidence — ${`omitting requested branch '${e}' from outcomes.branches; the remote session will work on a generated branch instead. Run 'git remote set-head origin -a' in the repo (or supply defaultBranch via the SDK) to restore branch continuity.`}`;
    }
    let g = {
        branchDropped,
        revisionGuessUsed,
        warnMessage
    };
    let l = (host, owner, name)=>({
            report: g,
            sources: [
                {
                    type: "git_repository",
                    url: `https://${host}/${owner}/${name}`,
                    revision
                }
            ],
            outcomes: [
                {
                    type: "git_repository",
                    git_info: {
                        type: "github",
                        repo: `${owner}/${name}`,
                        branches
                    }
                }
            ]
        });
    let p = await lbr(s);
    if (p) {
        return l(p.host, p.owner, p.name);
    }
    return {
        sources: [],
        outcomes: [],
        report: u
    };
}
export { lbr, Sfo };
