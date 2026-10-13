import { K } from "/$bunfs/root/chunk-ctt36bn8.js";
import { b, d, pe, gl } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { T_ } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { Ut } from "/$bunfs/root/chunk-jtpfgrzr.js";
import { On } from "/$bunfs/root/chunk-xgw72tt1.js";
import { EIt, PBn, Xbe, Gt } from "/$bunfs/root/chunk-0ycjphb5.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { X, ie, t } from "/$bunfs/root/chunk-bd805sh6.js";
import { I, ne } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import { Ot, Od, HR } from "/$bunfs/root/chunk-2d9a83dh.js";
import { i } from "/$bunfs/root/chunk-kgp7t7yx.js";
import { g, m, f } from "/$bunfs/root/chunk-04d4ftnx.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import { An, Q_, Cs, Wut, GUe, it } from "/$bunfs/root/chunk-h7cbghgp.js";
import { ho, Rse } from "/$bunfs/root/chunk-wew3321y.js";
import { pt } from "/$bunfs/root/chunk-223dyewd.js";
import { v0 } from "/$bunfs/root/chunk-3yz9zdww.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { ou } from "/$bunfs/root/chunk-x47nahfr.js";
import { iZ } from "/$bunfs/root/chunk-qk3m4n8a.js";
import { Eat, XD } from "/$bunfs/root/chunk-gr4a0fky.js";
import { RN, OR } from "/$bunfs/root/chunk-2321ytcf.js";
import { nf } from "/$bunfs/root/chunk-0c6rtmqc.js";
import { e9t } from "/$bunfs/root/chunk-2ya7enrh.js";
import { Aw } from "/$bunfs/root/chunk-k8dhpbv8.js";
import { yce } from "/$bunfs/root/chunk-92psz72c.js";
import { BA } from "/$bunfs/root/chunk-msy0phy0.js";
import { kke, Bkn, aqt, xke, ghe, FHe, hhe, aQo, fD } from "/$bunfs/root/chunk-kasbfbhj.js";
import { RNn } from "/$bunfs/root/chunk-z07je2n9.js";
import { Cye, Rye, nss, J3, rss, Srt, _ur, Oto, oss, sss, RD, iss, wrt, lIn, $i } from "/$bunfs/root/chunk-qwvy7ma3.js";
import { zRn, okt, qRn } from "/$bunfs/root/chunk-2r3ctt5w.js";
import { UGo } from "/$bunfs/root/chunk-h397mkaf.js";
import { Rhn, xhn, Phn } from "/$bunfs/root/chunk-yv2en609.js";
import { me, bt, Vc } from "/$bunfs/root/chunk-55p8dvkx.js";
import { F } from "/$bunfs/root/chunk-tb7m3r21.js";
import { homedir } from "os";
import { resolve } from "path";
const ue = p(()=>bt({
        action: Vc([
            "proceed",
            "confirm",
            "blocked"
        ]),
        billing_note: me().nullable().optional(),
        github_login: me().nullable().optional(),
        confirm: bt({
            title: me().optional(),
            body: me()
        }).nullable().optional(),
        blocked: bt({
            message: me(),
            action_url: me().nullable(),
            reason: me().optional()
        }).nullable().optional()
    }));
function le(o, reason) {
    return {
        action: "blocked",
        blocked: {
            message: o,
            action_url: null,
            reason
        }
    };
}
async function de(credentials) {
    let a_CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE = a.CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE;
    if (a_CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE) {
        let c = ue().safeParse(X(a_CLAUDE_CODE_ULTRAREVIEW_PREFLIGHT_FIXTURE));
        if (c.success) {
            return c.data;
        }
        return null;
    }
    try {
        let c = await Gt.get("/v1/ultrareview/preflight", {
            auth: "teleport-org",
            timeout: 5000,
            credentials,
            headers: {
                [EIt]: K()
            }
        });
        if (!c.ok) {
            switch(c.reason){
                case "essential-traffic-only":
                    return le("Ultrareview runs in a cloud session and is unavailable when essential-traffic-only mode is active.", "zdr");
                case "data-residency":
                    return le("Ultrareview runs in a cloud session and is unavailable on third-party providers.", "data_residency");
                case "no-auth":
                    return le("Ultrareview requires a Claude.ai account. Run /login to authenticate.", "no_oauth_token");
            }
        }
        let r = ue().safeParse(c.data);
        if (!r.success) {
            t(`fetchUltrareviewPreflight schema mismatch: ${r.error.message}`);
            f("api_ultrareview_preflight", "schema_mismatch");
            return null;
        }
        g("api_ultrareview_preflight");
        return r.data;
    } catch (error) {
        t(`fetchUltrareviewPreflight failed: ${error}`);
        f("api_ultrareview_preflight", "request_failed");
        return null;
    }
}
const we = 3000;
function ve(o, e) {
    if (!o || !Eat(o) || !fe(o.currency)) {
        return null;
    }
    if (o.is_enabled !== true) {
        return 0;
    }
    if (e === null || !fe(e.currency)) {
        return null;
    }
    let { monthly_limit, used_credits } = o;
    let s;
    if (monthly_limit === null) {
        s = Infinity;
    } else if (typeof monthly_limit === "number" && typeof used_credits === "number") {
        s = monthly_limit - used_credits;
    } else {
        return null;
    }
    let l = Math.min(s, e.auto_reload_settings?.enabled === true ? Infinity : e.amount);
    if (Number.isFinite(l)) {
        return Math.max(0, l);
    }
    return null;
}
function fe(currency) {
    return typeof currency === "string" && currency.toUpperCase() === "USD";
}
async function he(credentials) {
    try {
        let e = nss();
        if (e === null || PBn() || Xbe()) {
            return null;
        }
        let [c, r] = await Ut(Promise.all([
            XD(credentials),
            kke(credentials)
        ]), we, "ultrareview: usage credits read timed out");
        let s = ve(c?.extra_usage, r);
        if (s === null || s >= e * 100) {
            return null;
        }
        let l = s < 100 ? "Less than $1" : `About ${$i(Math.floor(s / 100) * 100, "USD", "whole")}`;
        let h = $i(e * 100, "USD", "whole");
        return `${l} of usage credits left. A review usually uses about ${h} and stops if credits run out.`;
    } catch  {
        t("ultrareview: could not read usage credits left, so no low-credits line");
        return null;
    }
}
const _e = "4b825dc642cb6eb9a060e54bf8d69288fbee4904";
const oXn = `
Note: --post was ignored \u2014 posting applies only to GitHub.com pull request reviews.`;
const sXn = `
Note: --post was ignored \u2014 posting findings to the PR is currently turned off.`;
function tjt(o) {
    let e = (h)=>String.raw`--fix|--comment|--post|--no-post|--max-findings(?:\s*=\s*(?!--)\S*|\s*=\S*|\s+${h})?`;
    let c = new RegExp(`^(${e(String.raw`(?!--)\S+`)})(?:\\s+|$)`);
    let r = new RegExp(`(?:^|\\s+)(${e(String.raw`(?:\d+|[Aa][Ll][Ll]|[Dd][Ee][Ff][Aa][Uu][Ll][Tt])`)})$`);
    let s = new Set;
    let scopeArgs = o.trim();
    while(true){
        let h = scopeArgs.match(c);
        if (!h) {
            break;
        }
        s.add(h[1]);
        scopeArgs = scopeArgs.slice(h[0].length);
    }
    while(true){
        let h = scopeArgs.match(r);
        if (!h) {
            break;
        }
        s.add(h[1]);
        scopeArgs = scopeArgs.slice(0, scopeArgs.length - h[0].length);
    }
    return {
        scopeArgs,
        applyFixes: s.has("--fix"),
        postReview: s.has("--no-post") ? false : s.has("--post") ? true : undefined
    };
}
async function iXn(o, e = "/code-review ultra", c) {
    if (!await aqt()) {
        i("tengu_review_remote_precondition_failed", {
            reason: b("not_git_repo"),
            cwd_is_home: O()
        });
        return {
            ok: false,
            reason: "not_git_repo",
            error: be(e, c?.confirmsBeforeLaunch !== true)
        };
    }
    let r = o.trim();
    let s = lIn(r);
    let prNumber = s?.num.toString() ?? r.match(/^(?:#|PR[\s#]*)(\d+)$/i)?.[1] ?? r;
    if (/^\d+$/.test(prNumber)) {
        let n = (B)=>{
            if (B === "succeeded" && c?.suppressSucceededRecoveryEvent) {
                return;
            }
            if (prNumber !== r) {
                i("tengu_review_remote_precondition_recovery", {
                    reason: b("base_ref_not_found"),
                    method: b("pr_arg_normalization"),
                    outcome: d(B)
                });
            }
        };
        let _ = await OR();
        let u = _ && RN(_) ? null : _;
        let S = Rse(s?.host, u?.host) || !!s && !!u && ho(s.host) && ho(u.host);
        if (s && (!S || s.owner.toLowerCase() !== u?.owner.toLowerCase() || s.repo.toLowerCase() !== u?.name.toLowerCase())) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("pr_url_wrong_repo"),
                has_remote: !!u,
                cwd_is_home: O()
            });
            n("failed");
            let B = `${s.owner}/${s.repo} on ${s.host}`;
            let G = u ? `you're in ${u.owner}/${u.name} on ${u.host}` : "this directory has no GitHub remote";
            return {
                ok: false,
                reason: "pr_url_wrong_repo",
                error: `That link is for ${B}, but ${G}. cd into a checkout of that repo and run ${e} ${s.num} from there.`
            };
        }
        if (!u) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("no_github_remote"),
                cwd_is_home: O()
            });
            n("failed");
            return {
                ok: false,
                reason: "no_github_remote",
                error: `${e} <PR#> needs a GitHub remote so it knows which repository the PR is in. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL". Or run ${e} with no argument to review your current branch instead.`
            };
        }
        if (RNn(u)) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("monorepo_blocked"),
                cwd_is_home: O()
            });
            n("failed");
            return {
                ok: false,
                reason: "monorepo_blocked",
                error: `${e} doesn't support pull requests in this repository. Run /code-review ${prNumber}${e.startsWith("/") ? "" : " in Claude Code"} for a local review instead.`
            };
        }
        let diffFiles;
        let diffLines;
        let [{ stdout: stdout_2, code: code_2 }, C] = await Promise.all([
            it("gh", [
                "pr",
                "view",
                prNumber,
                "--repo",
                `${u.host}/${u.owner}/${u.name}`,
                "--json",
                "additions,deletions,changedFiles"
            ], {
                timeout: 5000,
                preserveOutputOnError: false
            }),
            ho(u.host) && oss() && !Tt() ? Phn(u.owner, u.name, c?.accessProbeBudgetMs) : null
        ]);
        if (C && !c?.suppressOfferedRecoveryEvent) {
            i("tengu_review_remote_github_access_probe", {
                verdict: d(C.verdict),
                http_status: C.httpStatus ?? undefined
            });
        }
        if (C?.verdict === "github_not_connected" || C?.verdict === "github_repo_not_found") {
            i("tengu_review_remote_precondition_failed", {
                reason: d(C.verdict),
                cwd_is_home: O()
            });
            n("failed");
            let webSetupHint = yce() ? `run /web-setup${e.startsWith("/") ? "" : " in Claude Code"} to reuse your GitHub CLI login` : "";
            let rerun = `then re-run ${e} ${prNumber}`;
            return {
                ok: false,
                reason: C.verdict,
                error: C.verdict === "github_not_connected" ? Rhn({
                    subject: `Ultrareview clones ${u.owner}/${u.name} in the cloud`,
                    webSetupHint,
                    rerun
                }) : xhn({
                    owner: u.owner,
                    name: u.name,
                    webSetupHint,
                    rerun,
                    leadWithWebSetup: code_2 === 0
                })
            };
        }
        if (code_2 === 0 && stdout_2.trim()) {
            try {
                let B = X(stdout_2);
                let { maxFiles, maxLines } = _ur();
                let ee = B.additions + B.deletions;
                if (Number.isFinite(B.changedFiles) && Number.isFinite(ee)) {
                    diffFiles = B.changedFiles;
                    diffLines = ee;
                }
                if (B.changedFiles > maxFiles || ee > maxLines) {
                    i("tengu_review_remote_precondition_failed", {
                        reason: b("pr_diff_too_large"),
                        files: B.changedFiles,
                        lines: ee,
                        max_files: maxFiles,
                        max_lines: maxLines,
                        cwd_is_home: O()
                    });
                    n("failed");
                    return {
                        ok: false,
                        reason: "pr_diff_too_large",
                        error: `PR #${prNumber} is too large for ultrareview (${B.changedFiles} files, ${ee.toLocaleString()} lines). Split it into smaller PRs, or run \`${e}\` on a narrower local diff.`
                    };
                }
            } catch  {}
        }
        n("succeeded");
        return {
            ok: true,
            scope: {
                mode: "pr",
                prNumber,
                repo: `${u.owner}/${u.name}`,
                host: u.host,
                hadArg: true,
                diffFiles,
                diffLines
            }
        };
    }
    let h = await aQo();
    if (h.tooLarge) {
        i("tengu_review_remote_precondition_failed", {
            reason: b("repo_too_large_to_bundle"),
            pack_bytes: h.sizeBytes ?? undefined,
            pack_objects: h.inPackCount ?? undefined,
            cwd_is_home: O()
        });
        return {
            ok: false,
            reason: "repo_too_large_to_bundle",
            error: `Repo is too large to bundle. Push a PR and use \`${e} <PR#>\` instead.`
        };
    }
    let k = async (n)=>(await it(Ot(), [
            ...An,
            "rev-parse",
            "--verify",
            "--quiet",
            "--end-of-options",
            n
        ], {
            preserveOutputOnError: false
        })).code === 0;
    let w = /\s/.test(r);
    let N = w && (await k(`origin/${r}`) || await k(r));
    let M = w && !N ? r.match(/https:\/\/\S*\/pull\/\d+\b/) : null;
    let T = w && !N && !M ? r.match(/(?<![\w/#-])(?:#|PR)[-\s#]*(\d+)\b/i) ?? r.match(/(?<![\w/#-])pull[\s-]+request[-\s#]*(\d+)\b/i) ?? r.match(/\/pull\/(\d+)\b/i) ?? r.match(/^(\d+)\b/) : null;
    if (M || T) {
        let n = M ? M[0] : `#${T[1]}`;
        let _ = M ? M[0] : T[1];
        i("tengu_review_remote_precondition_recovery", {
            reason: b("base_ref_not_found"),
            method: b("embedded_pr_hint"),
            outcome: b("offered")
        });
        i("tengu_review_remote_precondition_failed", {
            reason: b("base_ref_not_found"),
            looks_like_url: /^https?:/i.test(r),
            looks_like_sha: false,
            starts_with_hash: r.startsWith("#"),
            has_slash: r.includes("/"),
            has_whitespace: true,
            has_pr_ref: true,
            has_remote: await ce(),
            cwd_is_home: O()
        });
        return {
            ok: false,
            reason: "base_ref_not_found",
            error: `Your request mentions what looks like a PR reference (${n}). To review that PR, run \`${e} ${_}\`. To review your current branch instead, rerun without the PR-style reference.`
        };
    }
    let U = w && !N && !r.startsWith("-");
    let instructions = U ? r : undefined;
    let v = U ? "" : r;
    let Y = false;
    if (v) {
        if (!await k(`origin/${v}`) && !await k(v)) {
            let n = await Ee(v);
            if (n === "recovered" && await k(`origin/${v}`)) {
                Y = true;
            } else {
                if (n !== "not_found") {
                    i("tengu_review_remote_precondition_recovery", {
                        reason: b("base_ref_not_found"),
                        method: b("fetch_retry"),
                        outcome: b("failed")
                    });
                }
                if (n === "fetch_failed") {
                    i("tengu_review_remote_precondition_failed", {
                        reason: b("base_ref_not_found"),
                        looks_like_url: /^https?:/i.test(v),
                        looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
                        starts_with_hash: v.startsWith("#"),
                        has_slash: v.includes("/"),
                        has_whitespace: /\s/.test(v),
                        has_remote: await ce(),
                        cwd_is_home: O()
                    });
                    return {
                        ok: false,
                        reason: "base_ref_not_found",
                        error: `"${v}" exists on origin but couldn't be fetched. Run \`git fetch origin ${v}\` and try ${e} again.`
                    };
                }
                let _ = await Se(v);
                if (_) {
                    i("tengu_review_remote_precondition_recovery", {
                        reason: b("base_ref_not_found"),
                        method: b("branch_suggestion"),
                        outcome: b("offered")
                    });
                }
                i("tengu_review_remote_precondition_failed", {
                    reason: b("base_ref_not_found"),
                    looks_like_url: /^https?:/i.test(v),
                    looks_like_sha: /^[0-9a-f]{7,40}$/i.test(v),
                    starts_with_hash: v.startsWith("#"),
                    has_slash: v.includes("/"),
                    has_whitespace: /\s/.test(v),
                    has_remote: await ce(),
                    cwd_is_home: O()
                });
                let u = _ ? ` Did you mean \`${_}\`?` : "";
                return {
                    ok: false,
                    reason: "base_ref_not_found",
                    error: `"${v}" is not a branch or commit in this repo.${u} ${e} takes a PR number, a base branch or commit, or no argument (reviews your current branch). Try ${e} by itself.`
                };
            }
        }
    }
    let j = (n)=>{
        if (Y) {
            i("tengu_review_remote_precondition_recovery", {
                reason: b("base_ref_not_found"),
                method: b("fetch_retry"),
                outcome: d(n)
            });
        }
        if (U) {
            if (n === "succeeded" && c?.suppressSucceededRecoveryEvent) {
                return;
            }
            i("tengu_review_remote_precondition_recovery", {
                reason: b("base_ref_not_found"),
                method: b("prose_instructions"),
                outcome: d(n)
            });
        }
    };
    let baseBranch = v || await HR() || "main";
    let Z = await Od() || "HEAD";
    let J = async (n)=>it(Ot(), [
            ...An,
            "merge-base",
            n,
            "HEAD"
        ], {
            preserveOutputOnError: false,
            env: Cs()
        });
    let W = `origin/${baseBranch}`;
    let { stdout, code } = await J(W);
    if (code !== 0) {
        W = baseBranch;
        ({ stdout, code } = await J(W));
    }
    let z = stdout.trim();
    let V = (n)=>it(Ot(), [
            ...An,
            ...n
        ], {
            preserveOutputOnError: false,
            env: Cs()
        });
    let error = `Your checkout has no branches (detached HEAD only), which cloud review can't bundle. Create one first \u2014 \`git checkout -b <name>\` \u2014 then rerun ${e}.`;
    let ae = async ()=>v.length > 0 || (await V([
            "rev-parse",
            "--verify",
            "--quiet",
            `origin/${baseBranch}`
        ])).code === 0 || (await V([
            "rev-parse",
            "--verify",
            "--quiet",
            baseBranch
        ])).code === 0;
    let E = async (n, headBranch = Z)=>{
        let u = n || await ae();
        let { stdout, code } = await it(Ot(), [
            ...An,
            "diff",
            "--no-ext-diff",
            "--no-textconv",
            Q_,
            "--shortstat",
            _e
        ], {
            preserveOutputOnError: false,
            env: Cs({
                LC_ALL: "C"
            })
        });
        if (code === 0) {
            if (n && !stdout.trim()) {
                return null;
            }
            if (!stdout.trim()) {
                i("tengu_review_remote_precondition_failed", {
                    reason: b("empty_diff"),
                    cwd_is_home: O()
                });
                j("failed");
                return {
                    ok: false,
                    reason: "empty_diff",
                    error: u ? `It doesn't look like you have any new commits or changes to review against your ${baseBranch} branch. Stage or commit them first?` : "It doesn't look like you have any changes to review. Stage or commit them first?"
                };
            }
            let y = qRn(stdout);
            let H = y ? y.linesAdded + y.linesRemoved : 0;
            let { maxFiles, maxLines } = _ur();
            if (y && (y.filesCount > maxFiles || H > maxLines)) {
                i("tengu_review_remote_precondition_failed", {
                    reason: b("local_diff_too_large"),
                    files: y.filesCount,
                    lines: H,
                    max_files: maxFiles,
                    max_lines: maxLines,
                    after_fallback: true,
                    cwd_is_home: O(),
                    first_commit: n || undefined
                });
                j("failed");
                let B = n ? `Your first commit is the base from here on: make your changes and rerun ${e} to review only those.` : u ? `Review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.` : `This repo has no ${baseBranch} branch \u2014 if another branch is your base, pass it explicitly (\`${e} <branch>\`). Otherwise review a smaller subset by committing it on a branch off an empty base, or push a PR and use \`${e} <PR#>\`.`;
                return {
                    ok: false,
                    reason: "local_diff_too_large",
                    error: `This looks like a first review of the entire repository (${stdout.trim()}), which exceeds ultrareview's limit. ${B}`
                };
            }
            if (!c?.suppressOfferedRecoveryEvent) {
                i("tengu_review_remote_precondition_recovery", {
                    reason: b("no_merge_base"),
                    method: b("empty_tree_bundle"),
                    outcome: b("offered"),
                    files: y?.filesCount,
                    lines: y ? H : undefined,
                    is_shallow: false,
                    first_commit: n || undefined
                });
            }
            j("succeeded");
            return {
                ok: true,
                scope: {
                    mode: "branch",
                    headBranch,
                    baseBranch,
                    mergeBaseSha: _e,
                    diffStat: stdout.trim(),
                    hadArg: v.length > 0,
                    diffFiles: y?.filesCount,
                    diffLines: y ? H : undefined,
                    noMergeBase: n ? "first_commit" : u ? "unrelated_history" : "base_ref_missing",
                    instructions
                }
            };
        }
        return null;
    };
    if (code !== 0 || !z) {
        let head_resolves = (await V([
            "rev-parse",
            "--verify",
            "--quiet",
            "HEAD"
        ])).code === 0;
        let _ = (await V([
            "rev-parse",
            "--is-shallow-repository"
        ])).stdout.trim();
        let is_shallow = _ === "true";
        let S = _ === "false";
        let A = head_resolves && S && Oto();
        let y = A ? await V([
            "for-each-ref",
            "--count=1",
            "refs/"
        ]) : null;
        let H = y !== null && y.stdout.trim() !== "";
        let D = y !== null && y.code === 0 && y.stdout.trim() === "";
        let C = false;
        if (A && H) {
            if (c?.confirmsBeforeLaunch === true || c?.personRanTheCommand === true) {
                let G = await E(false);
                if (G) {
                    return G;
                }
            } else {
                C = true;
            }
        }
        i("tengu_review_remote_precondition_failed", {
            reason: b("no_merge_base"),
            cwd_is_home: O(),
            is_shallow,
            head_resolves,
            arg_was_explicit: v.length > 0,
            has_refs: H ? true : D ? false : undefined,
            whole_repository_held_back: C || undefined
        });
        j("failed");
        if (C) {
            return {
                ok: false,
                reason: "no_merge_base",
                error: `${await ae() ? `${baseBranch} shares no history with your checkout` : `This repository has no ${baseBranch} branch to compare with`}, so a review here would cover every file. To review it whole, a person can run /ultrareview in an interactive Claude Code session, which asks before it spends anything.`
            };
        }
        if (!head_resolves) {
            return {
                ok: false,
                reason: "no_merge_base",
                error: !c?.confirmsBeforeLaunch ? `Your current branch has no commits yet, so there is nothing to review. Commit a starting point first. ${e} then reviews the changes you make on top of that commit.` : `Your current branch has no commits yet, so there is nothing to review. Commit your work first, then rerun ${e}.`
            };
        }
        if (is_shallow) {
            i("tengu_review_remote_precondition_recovery", {
                reason: b("no_merge_base"),
                method: b("deepen_hint"),
                outcome: b("offered"),
                is_shallow: true
            });
            return {
                ok: false,
                reason: "no_merge_base",
                error: v ? `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --deepen=100 origin ${baseBranch}\` (or \`git fetch --unshallow origin\`) and rerun ${e}.` : `Your clone is shallow and doesn't contain the point where your branch forked from ${baseBranch}. Run \`git fetch --unshallow origin\` and rerun ${e}. If your base branch isn't ${baseBranch}, pass it explicitly (\`${e} <branch>\`).`
            };
        }
        if (D) {
            return {
                ok: false,
                reason: "no_refs",
                error
            };
        }
        let B = Y ? S ? `${baseBranch} was fetched from origin but shares no history with HEAD. If another branch is your real base, pass it explicitly (\`${e} <branch>\`).` : `${baseBranch} was fetched from origin but shares no history with HEAD. Try \`git fetch --unshallow origin\` (or deepen the clone) and rerun.` : v ? `Make sure ${baseBranch} exists locally or on origin (try \`git fetch origin ${baseBranch}\`).` : `Pass the base branch explicitly (e.g. \`${e} develop\`) or make sure you're in a git repo with a ${baseBranch} branch.`;
        return {
            ok: false,
            reason: "no_merge_base",
            error: `Could not find merge-base with ${baseBranch}. ${B}`
        };
    }
    if (v.length > 0) {
        let n = await V([
            "for-each-ref",
            "--count=1",
            "refs/"
        ]);
        if (n.code === 0 && n.stdout.trim() === "") {
            i("tengu_review_remote_precondition_failed", {
                reason: b("no_refs"),
                cwd_is_home: O(),
                arg_was_explicit: true
            });
            j("failed");
            return {
                ok: false,
                reason: "no_refs",
                error
            };
        }
    }
    let { stdout: stdout_1, code: code_1 } = await zRn(ie().cwd(), [
        ...An,
        "diff",
        "--no-ext-diff",
        "--no-textconv",
        Q_,
        "--shortstat",
        z
    ], {
        LC_ALL: "C"
    }, {
        preserveOutputOnError: false
    });
    if (code_1 === 0 && !stdout_1.trim()) {
        let n = await Re(z, baseBranch);
        let _ = n.headBranch;
        let u = n.headAtMergeBase === true && n.headIsRoot === true && n.untrackedCount === 0 && Oto() && (await V([
            "rev-parse",
            "--is-shallow-repository"
        ])).stdout.trim() === "false" && (await V([
            "rev-parse",
            "--verify",
            "--quiet",
            "--end-of-options",
            `${W}^{commit}`
        ])).stdout.trim() === z;
        let S = u && c?.confirmsBeforeLaunch !== true;
        if (u && !S) {
            let q = await E(true, _);
            if (q) {
                return q;
            }
        }
        i("tengu_review_remote_precondition_failed", {
            reason: b("empty_diff"),
            used_origin_ref: W !== baseBranch,
            had_explicit_base: v.length > 0,
            cwd_is_home: O(),
            on_base_branch: n.onBaseBranch,
            head_at_merge_base: n.headAtMergeBase,
            first_commit_held_back: S || undefined,
            has_untracked: n.untrackedCount === undefined ? undefined : n.untrackedCount > 0
        });
        j("failed");
        let A = v ? `try a different base, e.g. \`${e} <branch>\`` : `pass one explicitly, e.g. \`${e} <branch>\``;
        let y = `${W} (merge-base ${z.slice(0, 7)})`;
        let H = "no staged or unstaged edits to tracked files";
        let D;
        let C;
        if (n.headAtMergeBase && _ && n.onBaseBranch) {
            let q = `If your work is on another branch, switch to it, or if the base should be something else, ${A}.`;
            if (W === _) {
                D = `you're on ${_}, which is also the base of this review, and it has ${H}`;
                C = `Everything already committed on ${_} counts as the base here, so only edits you haven't committed yet would be reviewed. ${q}`;
            } else {
                D = `you're on ${_}, which is also the base of this review, and it has no commits beyond ${y} and ${H}`;
                C = q;
            }
        } else if (n.headAtMergeBase && _ === "HEAD") {
            D = `the commit you have checked out is already part of ${y}, and there are ${H}`;
            C = `If your work is on a branch, switch to it. If you meant a different base, ${A}.`;
        } else if (n.headAtMergeBase && _) {
            D = `${_} has no commits beyond ${y} and ${H}`;
            C = `If your work is on another branch, switch to it. If this branch was already merged or you meant a different base, ${A}.`;
        } else {
            D = `the diff against ${y} is empty`;
            C = `If you have local edits, stage or commit them first. If your branch was already merged or you meant a different base, ${A}.`;
        }
        let B = "";
        if (n.headAtMergeBase && n.parentSha) {
            let q = n.parentSha.slice(0, 12);
            let ee = /^\d+$/.test(q) ? n.parentSha : q;
            i("tengu_review_remote_precondition_recovery", {
                reason: b("empty_diff"),
                method: b("last_commit_hint"),
                outcome: b("offered")
            });
            B = ` To review your latest commit anyway, run \`${e} ${ee}\`. That id is the commit before it, and any earlier commit id or tag works the same way.`;
        }
        let G = S ? " To review this first commit whole, run /ultrareview in an interactive Claude Code session, which asks before it spends anything." : "";
        return {
            ok: false,
            reason: "empty_diff",
            error: `No changes to review: ${D}.${$e(n.untrackedCount, e)} ${C}${B}${G}`
        };
    }
    let L = qRn(stdout_1);
    if (L) {
        let { maxFiles, maxLines } = _ur();
        let u = L.linesAdded + L.linesRemoved;
        if (L.filesCount > maxFiles || u > maxLines) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("local_diff_too_large"),
                files: L.filesCount,
                lines: u,
                max_files: maxFiles,
                max_lines: maxLines,
                cwd_is_home: O()
            });
            j("failed");
            let { stdout: stdout_2, code: code_2 } = await zRn(ie().cwd(), [
                ...An,
                "-c",
                "core.quotepath=false",
                "diff",
                "--no-ext-diff",
                "--no-textconv",
                Q_,
                "--numstat",
                z
            ], {}, {
                preserveOutputOnError: false,
                timeout: 10000,
                maxBuffer: 10485760
            });
            let y = code_2 === 0 ? ke(stdout_2) : "";
            return {
                ok: false,
                reason: "local_diff_too_large",
                error: `Diff is too large for ultrareview: ${L.filesCount.toLocaleString()} ${I(L.filesCount, "file")}, ${u.toLocaleString()} ${I(u, "line")} changed (limits: ${maxFiles.toLocaleString()} ${I(maxFiles, "file")}, ${maxLines.toLocaleString()} ${I(maxLines, "line")}).${y} Pass a closer base branch (\`${e} <branch>\`) to narrow the scope, or split the change.`
            };
        }
    }
    j("succeeded");
    return {
        ok: true,
        scope: {
            mode: "branch",
            headBranch: Z,
            baseBranch,
            mergeBaseSha: z,
            diffStat: stdout_1.trim(),
            hadArg: v.length > 0,
            diffFiles: L?.filesCount,
            diffLines: L ? L.linesAdded + L.linesRemoved : undefined,
            instructions
        }
    };
}
async function Re(o, baseBranch) {
    let [c, r, s] = await Promise.all([
        it(Ot(), [
            ...An,
            "rev-list",
            "--parents",
            "--max-count=1",
            "HEAD",
            "--"
        ], {
            preserveOutputOnError: false,
            env: Cs()
        }),
        it(Ot(), [
            ...An,
            "symbolic-ref",
            "--quiet",
            "HEAD"
        ], {
            preserveOutputOnError: false,
            env: Cs()
        }),
        it(Ot(), [
            ...An,
            "ls-files",
            "--others",
            "--exclude-standard",
            "--directory",
            "--no-empty-directory",
            "-z",
            "--",
            ":/"
        ], {
            preserveOutputOnError: false,
            timeout: 5000,
            maxBuffer: 1048576,
            env: Cs({
                GIT_LITERAL_PATHSPECS: ""
            })
        })
    ]);
    let [l, h, ...k] = c.code === 0 ? c.stdout.trim().split(/\s+/) : [];
    let w = r.exitCode === 0 ? r.stdout.trim().replace(/^refs\/heads\//, "") || undefined : r.exitCode === 1 ? "HEAD" : undefined;
    return {
        headBranch: w,
        onBaseBranch: w === undefined ? undefined : w !== "HEAD" && (w === baseBranch || `origin/${w}` === baseBranch),
        headAtMergeBase: l ? l === o : undefined,
        parentSha: k.length ? undefined : h || undefined,
        headIsRoot: l ? !h : undefined,
        untrackedCount: s.code === 0 ? F(s.stdout.split("\x00"), Boolean) : undefined
    };
}
function $e(untrackedCount, e) {
    if (!untrackedCount) {
        return "";
    }
    return ` Git also sees ${untrackedCount.toLocaleString()} untracked ${I(untrackedCount, "file or folder", "files or folders")} here. New files aren't part of a review until git tracks them: run \`git add\` on the ones you want reviewed, then rerun ${e}.`;
}
function ke(stdout, e = 3) {
    let { perFileStats } = okt(stdout, Number.POSITIVE_INFINITY);
    let r = [
        ...perFileStats.entries()
    ].map(([path, h])=>({
            path,
            lines: h.added + h.removed
        })).filter((l)=>l.lines > 0);
    if (r.length === 0) {
        return "";
    }
    return ` Largest files: ${r.sort((l, h)=>h.lines - l.lines).slice(0, e).map((l)=>`${l.path} (${l.lines.toLocaleString()} ${I(l.lines, "line")})`).join(", ")}.`;
}
function njt(o, e = 80) {
    return pt(o.replace(/\s+/g, " ").trim(), e);
}
async function Ee(o) {
    if (o.startsWith("-") || o.includes(":") || /\s/.test(o)) {
        return "not_found";
    }
    let env = {
        ...Wut(),
        GIT_SSH_COMMAND: `${a.GIT_SSH_COMMAND || "ssh"} -o BatchMode=yes -o StrictHostKeyChecking=yes`,
        GIT_ALLOW_PROTOCOL: "https:http:ssh"
    };
    let c = await it(Ot(), [
        ...An,
        ...GUe,
        "-c",
        "credential.helper=",
        "-c",
        "core.askPass=",
        "ls-remote",
        "--heads",
        "--exit-code",
        "--end-of-options",
        "origin",
        o
    ], {
        timeout: 4000,
        preserveOutputOnError: false,
        env
    });
    if (c.code !== 0) {
        if (c.code === 2) {
            return "not_found";
        }
        return "probe_failed";
    }
    if (!c.stdout.split(`
`).some((l)=>l.split("\t")[1]?.trim() === `refs/heads/${o}`)) {
        return "not_found";
    }
    if ((await it(Ot(), [
        ...An,
        ...GUe,
        "-c",
        "credential.helper=",
        "-c",
        "core.askPass=",
        "fetch",
        "--no-tags",
        "--end-of-options",
        "origin",
        `refs/heads/${o}:refs/remotes/origin/${o}`
    ], {
        timeout: 15000,
        preserveOutputOnError: false,
        env
    })).code === 0) {
        return "recovered";
    }
    return "fetch_failed";
}
async function Se(o) {
    let { stdout, code } = await it(Ot(), [
        ...An,
        "for-each-ref",
        "--format=%(refname:short)",
        "--count=2000",
        "refs/heads",
        "refs/remotes/origin"
    ], {
        preserveOutputOnError: false,
        env: Cs()
    });
    if (code !== 0) {
        return null;
    }
    let r = new Map;
    for (let k of stdout.split(`
`)){
        let w = k.trim();
        if (!w || w === "origin" || w === "origin/HEAD") {
            continue;
        }
        let N = w.startsWith("origin/") ? w.slice(7) : w;
        if (w.startsWith("origin/") || !r.has(N)) {
            r.set(N, w);
        }
    }
    let s = o === "main" ? "master" : o === "master" ? "main" : null;
    if (s !== null) {
        let k = r.get(s);
        if (k) {
            return k;
        }
    }
    let l = null;
    let h = 3;
    for (let [k, w] of r){
        if (Math.abs(k.length - o.length) >= h) {
            continue;
        }
        let N = iZ(o, k, h - 1);
        if (N > 0 && N < h) {
            h = N;
            l = w;
        }
    }
    return l;
}
const Ce = "Couldn't check whether this review can run, so it stopped before uploading your code. Try again shortly; if this keeps happening, open a pull request for this branch and review the pull request instead.";
async function aXn({ overageConfirmed, credentials, skipLowCreditsNote = false, bundleFollows }) {
    let s = await de(credentials);
    if (!s) {
        if (bundleFollows && sss()) {
            return {
                kind: "blocked",
                reason: "preflight_unavailable",
                message: Ce,
                actionUrl: null
            };
        }
        return {
            kind: "proceed",
            billingNote: "",
            preflightUnavailable: true
        };
    }
    let billingNote = s.billing_note ?? "";
    let githubLogin = s.github_login ?? null;
    switch(s.action){
        case "proceed":
            return {
                kind: "proceed",
                billingNote,
                githubLogin
            };
        case "blocked":
            return {
                kind: "blocked",
                reason: s.blocked?.reason ?? "server",
                message: s.blocked?.message ?? "Ultrareview is unavailable for your organization.",
                actionUrl: s.blocked?.action_url ?? null
            };
        case "confirm":
            {
                if (overageConfirmed) {
                    return {
                        kind: "proceed",
                        billingNote,
                        githubLogin
                    };
                }
                let lowCreditsNote = skipLowCreditsNote ? null : await he(credentials);
                return {
                    kind: "needs-confirm",
                    body: `This review bills as usage credits (${Rye()}).${lowCreditsNote ? `
${lowCreditsNote}` : ""}`,
                    lowCreditsNote,
                    billingNote,
                    githubLogin
                };
            }
    }
}
const Be = 3;
async function lXn(o, context, c, r) {
    let s = r?.invocation ?? "/code-review ultra";
    let l = (text)=>({
            launched: false,
            blocks: [
                {
                    type: "text",
                    text
                }
            ]
        });
    let h = await xke({
        allowBundle: true,
        storageV5: context.storageV5,
        credentials: context.credentials
    });
    if (!h.eligible) {
        let E = h.errors;
        if (E.length > 0) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("remote_agent_ineligible"),
                precondition_errors: gl(E.map((x)=>x.type)),
                cwd_is_home: O()
            });
            let P = E.map((x)=>{
                if (x.type === "not_in_git_repo") {
                    return be(s);
                }
                if (x.type === "no_git_remote") {
                    return `${s} needs a GitHub remote so it can clone this repository into the cloud. If this project is not on GitHub yet, run "gh repo create --source=. --push" to create one; if a GitHub repo already exists, run "git remote add origin REPO_URL && git push -u origin HEAD".`;
                }
                return ghe(x);
            }).join(`
`);
            if (o.mode === "branch" && o.noMergeBase) {
                i("tengu_review_remote_precondition_recovery", {
                    reason: b("no_merge_base"),
                    method: b("empty_tree_bundle"),
                    outcome: b("failed")
                });
            }
            m("ultrareview_launch", "remote_agent_ineligible");
            return l(`Ultrareview cannot launch:
${P}`);
        }
    }
    let environmentId = "env_011111111111111111111113";
    let w = Cye();
    let N = (E, P, x)=>{
        if (typeof E !== "number" || !Number.isFinite(E)) {
            return P;
        }
        let L = Math.floor(E);
        if (L <= 0) {
            return P;
        }
        if (L > x) {
            return P;
        }
        return L;
    };
    let BUGHUNTER_MODEL = rss();
    let T = {
        BUGHUNTER_DRY_RUN: "1",
        AUTOPATCH_ENABLE_ASIMOV: "1",
        ...w?.code_quality !== false && {
            BUGHUNTER_CODE_QUALITY: "1"
        },
        BUGHUNTER_FLEET_SIZE: String(N(w?.fleet_size, 5, 20)),
        BUGHUNTER_MAX_DURATION: String(N(w?.max_duration_minutes, 10, 25)),
        BUGHUNTER_AGENT_TIMEOUT: String(N(w?.agent_timeout_seconds, 600, 1800)),
        BUGHUNTER_TOTAL_WALLCLOCK: String(N(w?.total_wallclock_minutes, 22, 27)),
        BUGHUNTER_RESULT_RELAY_MAX_SEC: String((Srt() - Be) * 60),
        ...BUGHUNTER_MODEL && {
            BUGHUNTER_MODEL
        },
        ...process.env.BUGHUNTER_DEV_BUNDLE_B64 && {
            BUGHUNTER_DEV_BUNDLE_B64: process.env.BUGHUNTER_DEV_BUNDLE_B64
        }
    };
    let session;
    let command;
    let v;
    let Y = "";
    let j = [];
    let R;
    let reason;
    let status_code;
    let server_type;
    let server_reason;
    if (o.mode === "pr") {
        let E = await OR();
        let P = E && RN(E) ? null : E;
        if (!P) {
            i("tengu_review_remote_precondition_failed", {
                reason: b("no_github_remote_post_confirm"),
                cwd_is_home: O()
            });
            m("ultrareview_launch", "no_github_remote");
            return null;
        }
        let x = `ultrareview: ${P.owner}/${P.name}#${o.prNumber}`;
        session = await fD({
            initialMessage: null,
            source: "ultrareview",
            description: x,
            title: x,
            signal: context.abortController.signal,
            storageV5: context.storageV5,
            credentials: context.credentials,
            branchName: `refs/pull/${o.prNumber}/head`,
            environmentId,
            tags: [
                "ultrareview"
            ],
            environmentVariables: {
                BUGHUNTER_PR_NUMBER: o.prNumber,
                BUGHUNTER_REPOSITORY: `${P.owner}/${P.name}`,
                ...T
            },
            onCreateFail: (L, n, _)=>{
                R = L;
                reason = d(n);
                status_code = _?.status;
                server_type = pe(_?.serverType);
                server_reason = pe(_?.serverReason);
            }
        });
        command = `/ultrareview ${o.prNumber}`;
        v = `${P.owner}/${P.name}#${o.prNumber}`;
    } else {
        let { headBranch, baseBranch, mergeBaseSha, diffStat, noMergeBase } = o;
        Y = diffStat;
        let _;
        let bundle_fail_kind;
        session = await fD({
            initialMessage: null,
            source: "ultrareview",
            description: `ultrareview: ${headBranch}`,
            signal: context.abortController.signal,
            storageV5: context.storageV5,
            credentials: context.credentials,
            useBundle: true,
            bundleBaseRef: mergeBaseSha,
            bundleForceScope: noMergeBase ? "squashed" : undefined,
            environmentId,
            tags: [
                "ultrareview"
            ],
            environmentVariables: {
                BUGHUNTER_BASE_BRANCH: mergeBaseSha,
                ...T
            },
            onBundleFail: (S, A)=>{
                _ = S;
                bundle_fail_kind = d(A);
            },
            onBundleNotice: (S)=>{
                j.push(S);
            },
            onCreateFail: (S, A, y)=>{
                R = S;
                reason = d(A);
                status_code = y?.status;
                server_type = pe(y?.serverType);
                server_reason = pe(y?.serverReason);
            }
        });
        if (!session) {
            i("tengu_review_remote_teleport_failed", {
                mode: b("branch"),
                reason,
                bundle_fail_kind,
                status_code,
                server_type,
                server_reason
            });
            let S = context.abortController.signal.aborted;
            if (noMergeBase && !S) {
                i("tengu_review_remote_precondition_recovery", {
                    reason: b("no_merge_base"),
                    method: b("empty_tree_bundle"),
                    outcome: b("failed")
                });
            }
            if (!S) {
                m("ultrareview_launch", "teleport_failed");
            }
            return l(_ ?? (R ? `Ultrareview could not start the cloud session: ${R}` : `Repo is too large. Push a PR and use \`${s} <PR#>\` instead.`));
        }
        command = "/ultrareview";
        v = noMergeBase === "unrelated_history" ? `${headBranch} (all files \u2014 no common history with ${baseBranch})` : noMergeBase === "base_ref_missing" ? `${headBranch} (all files)` : noMergeBase === "first_commit" ? `${headBranch} (every file in the first commit)` : headBranch === baseBranch ? headBranch : `${headBranch} \u2192 ${baseBranch}`;
    }
    if (!session) {
        i("tengu_review_remote_teleport_failed", {
            mode: b("pr"),
            reason,
            status_code,
            server_type,
            server_reason
        });
        if (!context.abortController.signal.aborted) {
            m("ultrareview_launch", "teleport_failed");
        }
        if (R) {
            return l(`Ultrareview could not start the cloud session: ${R}`);
        }
        return null;
    }
    let taskId;
    if (!r?.skipTaskRegistration) {
        taskId = FHe({
            remoteTaskType: "ultrareview",
            session,
            command,
            context,
            isRemoteReview: true,
            applyFixesOnComplete: r?.applyFixesOnComplete,
            reviewInstructions: o.mode === "branch" ? o.instructions : undefined,
            postReviewTo: r?.postReviewToPR && o.mode === "pr" && !r?.signal?.aborted ? {
                repo: o.repo,
                prNumber: o.prNumber
            } : undefined
        }).taskId;
    }
    i("tengu_review_remote_launched", {
        mode: d(o.mode),
        had_arg: o.hadArg,
        post_armed: r?.postReviewToPR === true && o.mode === "pr" && !r?.signal?.aborted,
        had_instructions: o.mode === "branch" && !!o.instructions,
        diff_files: o.diffFiles,
        diff_lines: o.diffLines
    });
    if (o.mode === "branch" && o.noMergeBase) {
        i("tengu_review_remote_precondition_recovery", {
            reason: b("no_merge_base"),
            method: b("empty_tree_bundle"),
            outcome: b("succeeded")
        });
        if (o.noMergeBase === "first_commit") {
            g("ultrareview_launch");
        } else {
            f("ultrareview_launch", "no_merge_base_empty_tree_fallback");
        }
    } else {
        g("ultrareview_launch");
    }
    UGo(context.storageV5);
    let sessionUrl = hhe(session.id);
    let V = c.trim() ? `${c.trim()}
` : "";
    let oe = Y ? `
Scope: ${Y}` : "";
    let ae = o.mode === "branch" && o.instructions ? r?.skipTaskRegistration ? `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above.` : `
Your text was read as a note, not a base branch \u2014 the standard review runs on the diff above, and the findings will be related to your note when they arrive.` : "";
    return {
        launched: true,
        sessionId: session.id,
        sessionUrl,
        taskId,
        title: session.title,
        blocks: [
            {
                type: "text",
                text: `${V}Ultrareview launched for ${v} (${J3()}, runs in the cloud).${r?.findingsArriveInSession ? " The findings arrive here when it finishes." : ""}${r?.postReviewToPR && o.mode === "pr" ? `
When it finishes, the findings will be posted to the PR as a comment from your GitHub account. (Keep this session open: the consent lives only here, so if it ends before the review finishes, nothing will be posted \u2014 even on resume.)` : ""}${oe}${ae}${j.map((E)=>`
${E}`).join("")}`
            }
        ]
    };
}
function rjt(o, e) {
    return `The output above is already visible to the user. Briefly acknowledge it without repeating the target or billing note. Findings will arrive via task-notification.${o ? " The user passed --fix: when the findings arrive, apply them to the local working tree." : ""}${e ? ` The user's argument was interpreted as a review note, not a base branch: "${ne(e, Bkn)}". The cloud review runs its standard pass over the branch diff and does not see the note; when the findings arrive, prioritize and relate them to the user's request.` : ""}`;
}
const Te = /^[a-z][a-z0-9_]{0,63}$/;
async function jWe(o, e) {
    if (!RD()) {
        let gate_blocker = iss();
        let entitlement_blocker = gate_blocker === "entitlement" ? e9t() : null;
        i("tengu_review_remote_gate_blocked", {
            reason: pe(gate_blocker) ?? b("unknown"),
            entitlement_blocker: pe(entitlement_blocker)
        });
        return {
            status: "error",
            message: "Ultrareview is currently unavailable.",
            ...gate_blocker !== null && {
                gate_blocker
            },
            ...entitlement_blocker !== null && {
                entitlement_blocker
            }
        };
    }
    await Aw();
    let c = nf("allow_remote_sessions", "Cloud sessions", "are");
    if (c) {
        BA("allow_remote_sessions", "slash_command");
        return {
            status: "error",
            message: c
        };
    }
    let r = await iXn(o, e.invocation, {
        suppressSucceededRecoveryEvent: !e.confirm,
        suppressOfferedRecoveryEvent: e.confirm && !e.singlePass,
        confirmsBeforeLaunch: e.confirmsBeforeLaunch === true,
        personRanTheCommand: e.personRanTheCommand === true
    });
    if (!r.ok) {
        return {
            status: "error",
            message: r.error,
            reason: r.reason
        };
    }
    let s = await aXn({
        overageConfirmed: e.overageConfirmed,
        credentials: e.context.credentials,
        skipLowCreditsNote: e.confirm && !e.singlePass,
        bundleFollows: r.scope.mode === "branch"
    });
    if (s.kind === "blocked") {
        i("tengu_review_overage_blocked", {
            reason: T_(s.reason)
        });
        return {
            status: "blocked",
            message: s.message,
            actionUrl: s.actionUrl,
            ...Te.test(s.reason) && {
                reason: s.reason
            }
        };
    }
    let l = ()=>{
        let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}.` : r.scope.noMergeBase ? "Reviewing all files on the current branch." : `Reviewing current branch against ${r.scope.baseBranch}.`;
        let U = r.scope.mode === "branch" && r.scope.instructions ? ` Note for findings (not a base branch): "${njt(r.scope.instructions)}"` : "";
        return `
${T}${U}`;
    };
    if (s.kind === "proceed" && s.preflightUnavailable && e.withholdOverageConsent && !e.overageConfirmed) {
        return {
            status: "needs-confirm",
            body: `Couldn't verify your review quota right now, so this review may bill as usage credits (${Rye()}).${l()}`,
            billingNote: ""
        };
    }
    if (s.kind === "needs-confirm") {
        if (e.withholdOverageConsent) {
            return {
                status: "needs-confirm",
                body: `${s.body}${l()}`,
                billingNote: s.billingNote
            };
        }
        i("tengu_review_overage_dialog_shown", {});
        if (!e.confirm) {
            return {
                status: "needs-confirm",
                body: `${s.body}${l()}`,
                billingNote: s.billingNote
            };
        }
        e.markOverageConfirmed();
    }
    if (e.confirm && r.scope.mode === "branch" && r.scope.noMergeBase) {
        i("tengu_review_remote_precondition_recovery", {
            reason: b("no_merge_base"),
            method: b("empty_tree_bundle"),
            outcome: b("accepted")
        });
    }
    if (!e.confirm) {
        let T = r.scope.mode === "pr" ? `Reviewing PR ${r.scope.repo}#${r.scope.prNumber}` : r.scope.noMergeBase === "unrelated_history" ? `Reviewing all files (no common history with ${r.scope.baseBranch})
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "base_ref_missing" ? `Reviewing all files (no ${r.scope.baseBranch} branch to compare against)
Scope: ${r.scope.diffStat}` : r.scope.noMergeBase === "first_commit" ? `Reviewing every file in the first commit (there is nothing earlier to compare with)
Scope: ${r.scope.diffStat}` : `Reviewing current branch against ${r.scope.baseBranch}
Scope: ${r.scope.diffStat}`;
        let U = r.scope.mode === "branch" && r.scope.instructions ? `
Note for findings (not a base branch): "${njt(r.scope.instructions)}"` : "";
        return {
            status: "needs-confirm",
            body: `${T}${U}
${J3()} \xB7 Est. cost ${Rye()} USD`,
            billingNote: s.billingNote
        };
    }
    let h = e.postReview === true && !wrt();
    let postReviewToPR = e.postReview === true && !h && r.scope.mode === "pr" && ho(r.scope.host);
    let w = await lXn(r.scope, e.context, s.billingNote, {
        skipTaskRegistration: e.skipTaskRegistration,
        invocation: e.invocation,
        applyFixesOnComplete: e.applyFixes,
        postReviewToPR
    });
    if (!w?.launched) {
        return {
            status: "error",
            message: w?.blocks.map((T)=>{
                if (T.type === "text") {
                    return T.text;
                }
                return "";
            }).join("").trim() || "Failed to launch cloud review session."
        };
    }
    let N = e.postReview === true && !postReviewToPR;
    let M = w.blocks.map((T)=>{
        if (T.type === "text") {
            return T.text;
        }
        return "";
    }).join("").trim();
    return {
        status: "launched",
        sessionId: w.sessionId,
        sessionUrl: w.sessionUrl,
        taskId: w.taskId,
        title: w.title,
        message: h ? `${M}${sXn}` : N ? `${M}${oXn}` : M,
        billingNote: s.billingNote,
        postReviewTo: postReviewToPR && r.scope.mode === "pr" ? {
            repo: r.scope.repo,
            prNumber: r.scope.prNumber
        } : undefined,
        postIgnored: N || undefined,
        lowCreditsNote: e.singlePass && s.kind === "needs-confirm" && s.lowCreditsNote || undefined
    };
}
async function ce() {
    let o = await OR();
    return !!o && !RN(o);
}
function be(o, e = false) {
    let c = e ? `run "git init" and commit a starting point. ${o} then reviews the changes you make on top of that commit.` : `run "git init" and commit your work. ${o} then reviews that first commit whole if it is small enough, and after that the changes you make on top of it.`;
    let r = ou() ? "Open a folder that is a git repository with at least one commit, then try again." : `If your project already uses git, cd into its folder and rerun ${o}. If it doesn't yet, ${c}`;
    return `${o} reviews the changes a git branch makes on top of an earlier commit, but ${se()} is not inside a git repository. ${r}`;
}
function O() {
    try {
        let o = homedir();
        if (!o) {
            return false;
        }
        return v0(On(resolve(se())), On(resolve(o)));
    } catch  {
        return false;
    }
}
export { oXn, sXn, tjt, iXn, njt, aXn, lXn, rjt, jWe };
