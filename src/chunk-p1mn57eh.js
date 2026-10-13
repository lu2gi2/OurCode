import "/$bunfs/root/chunk-j27d47mr.js";
import "/$bunfs/root/chunk-wkmq9ht0.js";
import { v } from "/$bunfs/root/chunk-m1rt7wpr.js";
import "/$bunfs/root/chunk-jtpfgrzr.js";
import "/$bunfs/root/chunk-xgw72tt1.js";
import "/$bunfs/root/chunk-6kc68p18.js";
import "/$bunfs/root/chunk-s7bhz6qz.js";
import { xpe, a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import "/$bunfs/root/chunk-dn762950.js";
import "/$bunfs/root/chunk-ctt36bn8.js";
import "/$bunfs/root/chunk-fcerdfs3.js";
import "/$bunfs/root/chunk-x0qpydt2.js";
import { _, X, R0 } from "/$bunfs/root/chunk-bd805sh6.js";
import { Npe } from "/$bunfs/root/chunk-24agvrd9.js";
import { ne, Qe, rU, tp } from "/$bunfs/root/chunk-qch5xj2a.js";
import { Tt } from "/$bunfs/root/chunk-etbngzss.js";
import "/$bunfs/root/chunk-p9frg3mj.js";
import "/$bunfs/root/chunk-sawpz2mr.js";
import { XJt } from "/$bunfs/root/chunk-tsfvfcsw.js";
import { dd } from "/$bunfs/root/chunk-9fa34ggx.js";
import { fpe, Wa } from "/$bunfs/root/chunk-pw6z2cbs.js";
import { se } from "/$bunfs/root/chunk-7mawjt4q.js";
import "/$bunfs/root/chunk-z0brrd3r.js";
import { But, Cs, ct } from "/$bunfs/root/chunk-h7cbghgp.js";
import "/$bunfs/root/chunk-h6pppnx2.js";
import "/$bunfs/root/chunk-kgp7t7yx.js";
import "/$bunfs/root/chunk-04d4ftnx.js";
import { nr, s8e, _C, ho, TZ } from "/$bunfs/root/chunk-wew3321y.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { mq, AO, A5e } from "/$bunfs/root/chunk-xbsy70c7.js";
import { mC } from "/$bunfs/root/chunk-2321ytcf.js";
import "/$bunfs/root/chunk-2d9a83dh.js";
import "/$bunfs/root/chunk-c56kpkt7.js";
import "/$bunfs/root/chunk-tchztk88.js";
import "/$bunfs/root/chunk-223dyewd.js";
import "/$bunfs/root/chunk-w1n7t02f.js";
import "/$bunfs/root/chunk-3fj60qgx.js";
import "/$bunfs/root/chunk-n1z3wrvm.js";
import "/$bunfs/root/chunk-zwxj12s4.js";
import "/$bunfs/root/chunk-3yz9zdww.js";
import "/$bunfs/root/chunk-se8vehhp.js";
import { p$e, CV } from "/$bunfs/root/chunk-dv47h7z3.js";
import { bN } from "/$bunfs/root/chunk-z6hja7je.js";
import "/$bunfs/root/chunk-yp41169e.js";
import { o, oe, T, u, Ue } from "/$bunfs/root/chunk-smx21d0k.js";
import "/$bunfs/root/chunk-tfc1vf2h.js";
import "/$bunfs/root/chunk-6cee9jwv.js";
import "/$bunfs/root/chunk-yngqe5v3.js";
import "/$bunfs/root/chunk-nnawdxg4.js";
import "/$bunfs/root/chunk-svqqgdca.js";
import { O } from "/$bunfs/root/chunk-79wfew46.js";
import { X509Certificate } from "crypto";
import { open } from "fs/promises";
const st = 200;
function E(e) {
    let t = ne(e, st);
    return tp(t) + (t.length < e.length ? "…" : "");
}
const me = 255;
const rt = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+(?:[a-z]{1,63}|xn--[a-z0-9-]{1,59})$/;
const ot = [
    nr,
    "githubusercontent.com",
    "ghcr.io",
    "github.dev",
    "githubpreview.dev",
    "github.io",
    "github.app",
    "githubapp.com",
    "githubassets.com",
    "githubcopilot.com"
];
const fe = "api";
function Q(e) {
    let t = e.toLowerCase();
    if (t.length <= me && s8e.test(t)) {
        return t;
    }
    return "that host";
}
function q(e) {
    let t = _C(e);
    let s = Q(t);
    let r = {
        refusal: `${s} is not a host this gh sends a request to: name a GitHub Enterprise host by its DNS name alone (no scheme, port, path or IP address).`
    };
    if (t.length > me || !rt.test(t) || t.endsWith(".localhost")) {
        return r;
    }
    let n = {
        refusal: `${s} is not a GitHub Enterprise host; ${nr} itself is named as ${nr}.`
    };
    if (t === p$e.slice(1) || ot.some((d)=>t === d || t.endsWith(`.${d}`)) || fpe(t)) {
        return n;
    }
    let i;
    let h;
    if (t.endsWith(p$e)) {
        let d = t.slice(0, -p$e.length).split(".");
        let [l, y, ...g] = d;
        let b = y === undefined ? l : y;
        if (g.length > 0 || y !== undefined && l !== fe) {
            return n;
        }
        let f = b + p$e;
        h = `${fe}.${f}`;
        i = {
            host: f,
            apiBase: `https://${h}`
        };
    } else {
        h = t;
        i = {
            host: t,
            apiBase: TZ(t)
        };
    }
    if (URL.parse(i.apiBase)?.hostname === h) {
        return i;
    }
    return r;
}
const c = "repos/{owner}/{repo}";
const ge = `gh api ${c}/issues/<number>/comments -f body='<text>'`;
const we = `gh api ${c}/issues/<number>/labels -f 'labels[]=<label>'  # add a label`;
const ye = "which are served from another host that this gh does not follow a redirect to";
const J = [
    "Nothing to sign in to and no token to read: requests go through this session's GitHub proxy, which adds the credential.",
    "gh api user  # the account behind it, where the credential has one"
];
const K = "where this session's GitHub proxy refuses search/";
const G = `gh api '${c}/pulls?head={owner}:{branch}&state=all'  # <number> of the current branch's pull request (a fork's: its owner in place of {owner} before the colon)`;
const be = "git clone https://github.com/<owner>/<repo>.git";
const it = new Map([
    [
        "pr create",
        [
            `gh api ${c}/pulls -f title='<title>' -f head='<branch>' -f base='<base branch>' -f body='<text>'  # a draft: add -F draft=true`
        ]
    ],
    [
        "pr view",
        [
            `gh api ${c}/pulls/<number>`,
            `gh api ${c}/pulls/<number>/ccr/review_threads  # its review threads`,
            `gh api ${c}/issues/<number>/comments  # its conversation comments`,
            G
        ]
    ],
    [
        "pr list",
        [
            `gh api '${c}/pulls?state=open&per_page=100'`
        ]
    ],
    [
        "pr merge",
        [
            `gh api -X PUT ${c}/pulls/<number>/merge -f merge_method=squash`,
            `gh api -X PUT ${c}/pulls/<number>/ccr/auto_merge -f merge_method=squash  # --auto; -X DELETE cancels it`,
            G
        ]
    ],
    [
        "pr comment",
        [
            ge,
            G
        ]
    ],
    [
        "pr checks",
        [
            `gh api ${c}/commits/<sha>/check-runs`,
            `gh api ${c}/pulls/<number>  # <sha> of a pull request: its head.sha`,
            G
        ]
    ],
    [
        "pr ready",
        [
            `gh api -X POST ${c}/pulls/<number>/ccr/ready_for_review`,
            `gh api -X POST ${c}/pulls/<number>/ccr/convert_to_draft  # --undo`,
            G
        ]
    ],
    [
        "pr review",
        [
            `gh api ${c}/pulls/<number>/reviews -f event=COMMENT -f body='<text>'  # or event=REQUEST_CHANGES`,
            G
        ]
    ],
    [
        "pr diff",
        [
            `gh api ${c}/pulls/<number> -H 'Accept: application/vnd.github.diff'`,
            `gh api ${c}/pulls/<number>/files  # one patch per file`,
            G
        ]
    ],
    [
        "pr close",
        [
            `gh api -X PATCH ${c}/pulls/<number> -f state=closed`
        ]
    ],
    [
        "pr edit",
        [
            `gh api -X PATCH ${c}/pulls/<number> -f title='<title>' -f body='<text>'`,
            we,
            G
        ]
    ],
    [
        "pr checkout",
        [
            "No `gh api` form: use git.",
            "git fetch origin refs/pull/<number>/head && git checkout FETCH_HEAD"
        ]
    ],
    [
        "issue create",
        [
            `gh api ${c}/issues -f title='<title>' -f body='<text>'`
        ]
    ],
    [
        "issue view",
        [
            `gh api ${c}/issues/<number>`,
            `gh api ${c}/issues/<number>/comments  # its comments`
        ]
    ],
    [
        "issue list",
        [
            `gh api '${c}/issues?state=open&per_page=100'  # pull requests are in the list too: each has a pull_request key`
        ]
    ],
    [
        "issue comment",
        [
            ge
        ]
    ],
    [
        "issue close",
        [
            `gh api -X PATCH ${c}/issues/<number> -f state=closed`
        ]
    ],
    [
        "issue edit",
        [
            `gh api -X PATCH ${c}/issues/<number> -f title='<title>' -f body='<text>'`,
            we
        ]
    ],
    [
        "run list",
        [
            `gh api '${c}/actions/runs?per_page=20'  # filters: branch=, event=, status=, head_sha=`
        ]
    ],
    [
        "run view",
        [
            `gh api ${c}/actions/runs/<run-id>`,
            `gh api ${c}/actions/runs/<run-id>/jobs  # its jobs and their steps`,
            `gh api ${c}/actions/jobs/<job-id>/logs  # --log: one job's log, where this session's GitHub proxy follows GitHub's redirect for it`
        ]
    ],
    [
        "run rerun",
        [
            `gh api -X POST ${c}/actions/runs/<run-id>/rerun-failed-jobs  # --failed`,
            `gh api -X POST ${c}/actions/runs/<run-id>/rerun  # every job`
        ]
    ],
    [
        "run watch",
        [
            "No `gh api` form: it polls. Poll the run yourself and read its status and conclusion:",
            `gh api ${c}/actions/runs/<run-id>`
        ]
    ],
    [
        "run cancel",
        [
            `gh api -X POST ${c}/actions/runs/<run-id>/cancel`
        ]
    ],
    [
        "run download",
        [
            `No \`gh api\` form for downloading artifacts, ${ye}. Listing them:`,
            `gh api ${c}/actions/runs/<run-id>/artifacts`
        ]
    ],
    [
        "workflow list",
        [
            `gh api ${c}/actions/workflows`
        ]
    ],
    [
        "workflow view",
        [
            `gh api ${c}/actions/workflows/<workflow>  # <workflow>: its file name (ci.yml) or its id`,
            `gh api ${c}/actions/workflows/<workflow>/runs  # its runs`
        ]
    ],
    [
        "workflow run",
        [
            `gh api -X POST ${c}/actions/workflows/<workflow>/dispatches -f ref=<branch>  # <workflow>: its file name (ci.yml) or its id; inputs: -f 'inputs[<name>]=<value>'`
        ]
    ],
    [
        "release list",
        [
            `gh api ${c}/releases`
        ]
    ],
    [
        "release view",
        [
            `gh api ${c}/releases/tags/<tag>`,
            `gh api ${c}/releases/latest  # the latest release`
        ]
    ],
    [
        "release create",
        [
            `gh api ${c}/releases -f tag_name=<tag> -f name='<title>' -f body='<text>'  # this session's GitHub proxy may refuse release writes`,
            "No `gh api` form for uploading its files, which go to another host."
        ]
    ],
    [
        "release download",
        [
            `No \`gh api\` form for downloading a release's files, ${ye}. Listing them (assets):`,
            `gh api ${c}/releases/tags/<tag>`
        ]
    ],
    [
        "release upload",
        [
            "No `gh api` form: a release's files are uploaded to another host, which this gh does not reach."
        ]
    ],
    [
        "repo view",
        [
            `gh api ${c}`
        ]
    ],
    [
        "repo clone",
        [
            "No `gh api` form: use git.",
            be
        ]
    ],
    [
        "label list",
        [
            `gh api ${c}/labels`
        ]
    ],
    [
        "search issues",
        [
            "gh api -X GET search/issues -f q='<terms> is:issue'",
            `gh api '${c}/issues?state=all&labels=<label>'  # ${K}: filter a list`
        ]
    ],
    [
        "search prs",
        [
            "gh api -X GET search/issues -f q='<terms> is:pr'",
            `gh api '${c}/pulls?state=all&per_page=100'  # ${K}: filter a list`
        ]
    ],
    [
        "search code",
        [
            "gh api -X GET search/code -f q='<terms> repo:<owner>/<repo>'",
            `Search a clone of the repository instead ${K}.`
        ]
    ],
    [
        "search repos",
        [
            "gh api -X GET search/repositories -f q='<terms>'"
        ]
    ],
    [
        "auth status",
        J
    ],
    [
        "auth login",
        J
    ],
    [
        "auth token",
        J
    ]
]);
const at = new Map([
    [
        "new",
        "create"
    ],
    [
        "ls",
        "list"
    ]
]);
const ht = /^(-R|--repo)(=|$)|^-R[^-]/;
const dt = /^https?:\/\/[^/]+\/[^/]+\/[^/]+/;
const ut = /^[^-/][^/]*(\/[^/]+){1,2}$/;
function Ee(e, t) {
    let [s, r] = e;
    if (s === undefined || r === undefined) {
        return;
    }
    let n = `${s} ${at.get(r) ?? r}`;
    let i = it.get(n);
    if (i === undefined) {
        return;
    }
    let h = t === CV ? "the repository's GitHub Enterprise host" : t.join(" or ");
    let d = h !== "" ? i.map((g)=>{
        if (g === be) {
            return `git clone https://<host>/<owner>/<repo>.git  # <host>: github.com or ${h}`;
        }
        return g;
    }) : i;
    let l = e.slice(2);
    let y = d.some((g)=>g.includes("{owner}")) && (e.some((g)=>ht.test(g)) || l.some((g, b)=>!(l[b - 1] ?? "").startsWith("-") && (dt.test(g) || s === "repo" && ut.test(g))));
    return `Instead of \`gh ${n}\`:
${d.map((g)=>`  ${g}`).join(`
`)}` + (y ? `
  The command named a repository: write that repository in place of {owner}/{repo}.` + (h !== "" ? " If it is on another host, add --hostname <host>." : "") : "");
}
const $e = "GitHub GraphQL is not available through this session's GitHub proxy; use the REST API (gh api repos/{owner}/{repo}/...). For review threads, auto-merge and draft or ready, the proxy serves repos/{owner}/{repo}/pulls/<number>/ccr/review_threads, .../ccr/comments/<comment-id>/resolve, .../ccr/auto_merge, .../ccr/ready_for_review and .../ccr/convert_to_draft.";
const Re = "Claude Code's built-in GitHub client, not the GitHub CLI";
const Te = "no GitHub CLI was found on this machine when this session started";
function M(e) {
    let t = e === CV;
    let s = t || e.length > 0;
    return `Usage: gh api <endpoint> [flags]

This gh is ${Re}:
${Te}.
${t ? `It makes GitHub REST API requests to ${nr}, or to the GitHub Enterprise
host of this checkout's remote (or --hostname <host>), through this session's
GitHub proxy, which supplies the credential for the hosts and repositories this
session is connected to, and has no other gh command.` : `It makes GitHub REST API requests to ${[
        nr,
        ...e
    ].join(", ")} through this session's GitHub
proxy, already authenticated, and has no other gh command.`}
A GitHub CLI installed during the session takes this one's place once it is on
PATH. On a self-hosted runner that one has only the GitHub credentials the
runner's operator provides and does not go through this session's GitHub proxy.

Flags:${s ? `
      --hostname <host>     GitHub host of the request${t ? "" : ", as GH_HOST"} (default ${nr}, or the
                            host of the repository that fills {owner}, {repo} in the endpoint)` : ""}
  -X, --method <method>     HTTP method (default GET, or POST with parameters or --input)
  -f, --raw-field key=value String parameter
  -F, --field key=value     Typed parameter: true, false, null and integers become JSON
                            values, {owner} {repo} {branch} are filled in, @file reads a
                            file, @- reads standard input
  -H, --header 'Name: v'    Request header
      --input <file>        File to send as the request body (- for standard input)
  -i, --include             Print the response status line and headers
      --paginate            Follow the response's rel="next" links (GET only)
  -q, --jq <expression>     Filter the response with jq (needs jq on PATH; without it, pipe the
                            output to a JSON tool that is installed)
      --silent              Do not print the response body

{owner}, {repo} and {branch} (or :owner, :repo, :branch) in the endpoint and in
-F values are filled in from GH_REPO, else from the ${s && !t ? "remotes on those hosts" : `${nr} remotes`} of the
current repository: upstream, github, origin, then the others by name.${t ? `
A repository with no ${nr} remote is read for its other remotes the same
way, and the remote chosen names the host the request goes to.
GH_HOST and a host in GH_REPO pick no host other than ${nr} here: name one
with --hostname. A request to another host says so in one line on standard error.` : ""}

Example: gh api repos/{owner}/{repo}/pulls -f title='Fix' -f head='my-branch' -f base='main'
`;
}
const pt = ` The host came from GH_HOST: \`--hostname ${nr}\` names github.com for one command.`;
function Z(e) {
    return `${e} names a host other than ${nr}, and an environment variable is not used to pick a host in this session: ` + (e === "GH_HOST" ? `pass --hostname <host> on the command instead. For ${nr}, pass --hostname ${nr} or unset GH_HOST.` : "set GH_REPO=OWNER/REPO and pass --hostname <host> on the command instead.");
}
function I(e, t, s = false) {
    return `${Q(e)} is not served here: this gh reaches ${[
        nr,
        ...t
    ].join(" and ")} only, through this session's GitHub proxy. Which GitHub Enterprise Server hosts it reaches is fixed when the session starts, and nothing run in the session adds one` + (s ? `.${pt}` : ".");
}
const lt = {
    "-X": "--method",
    "-f": "--raw-field",
    "-F": "--field",
    "-H": "--header",
    "-q": "--jq",
    "-t": "--template",
    "-p": "--preview",
    "--method": "--method",
    "--raw-field": "--raw-field",
    "--field": "--field",
    "--header": "--header",
    "--jq": "--jq",
    "--input": "--input",
    "--hostname": "--hostname",
    "--template": "--template",
    "--preview": "--preview",
    "--cache": "--cache"
};
const ft = {
    "-i": "--include",
    "-h": "--help",
    "--include": "--include",
    "--paginate": "--paginate",
    "--silent": "--silent",
    "--help": "--help",
    "--slurp": "--slurp",
    "--verbose": "--verbose"
};
const mt = new Set([
    "--template",
    "--preview",
    "--slurp",
    "--verbose"
]);
function Se(ghArgs, ghHost, s, VERSION) {
    if (ghArgs[0] !== "api") {
        return {
            kind: "refuse",
            message: `this gh is ${Re} (Claude Code ${VERSION}): \`gh api <REST endpoint>\` works here, already authenticated through this session's GitHub proxy, and there is no other gh command (${Te}).
` + (Ee(ghArgs, s) ?? "Example: gh api repos/{owner}/{repo}/pulls/123")
        };
    }
    let options = {
        endpoint: "",
        host: undefined,
        method: undefined,
        rawFields: [],
        typedFields: [],
        headers: [],
        inputFile: undefined,
        jq: undefined,
        include: false,
        paginate: false,
        silent: false
    };
    let i = [];
    let h = ghHost;
    let d = true;
    let l = [];
    for(let b = 1; b < ghArgs.length; b++){
        let ghArg = ghArgs[b];
        if (ghArg === "--") {
            i.push(...ghArgs.slice(b + 1));
            break;
        }
        if (!ghArg.startsWith("-") || ghArg === "-") {
            i.push(ghArg);
            continue;
        }
        let x = ghArg.startsWith("--");
        let k = x ? [
            Qe(ghArg, "=")
        ] : Array.from(ghArg.slice(1), (H)=>`-${H}`);
        for (let [H, A] of k.entries()){
            let j = ft[A];
            let N = lt[A];
            if (j !== undefined) {
                if (!x || !/=(?:false|0)$/i.test(ghArg)) {
                    l.push([
                        j,
                        ""
                    ]);
                }
                continue;
            }
            if (N === undefined) {
                return {
                    kind: "refuse",
                    message: `unknown ${x ? "flag" : "shorthand flag"}: ${E(A)}

${M(s)}`
                };
            }
            let U = (x ? ghArg.includes("=") ? ghArg.slice(A.length + 1) : undefined : ghArg.slice(H + 2).replace(/^=/, "") || undefined) ?? ghArgs[++b];
            if (U === undefined) {
                return {
                    kind: "refuse",
                    message: `flag needs an argument: ${A}`
                };
            }
            l.push([
                N,
                U
            ]);
            break;
        }
    }
    for (let [b, f] of l){
        if (mt.has(b)) {
            return {
                kind: "refuse",
                message: `${b} is not supported by this built-in gh.

${M(s)}`
            };
        }
        switch(b){
            case "--help":
                return {
                    kind: "help"
                };
            case "--method":
                options.method = f;
                break;
            case "--raw-field":
                options.rawFields.push(f);
                break;
            case "--field":
                options.typedFields.push(f);
                break;
            case "--header":
                options.headers.push(f);
                break;
            case "--jq":
                options.jq = f;
                break;
            case "--input":
                options.inputFile = f;
                break;
            case "--hostname":
                h = f;
                d = false;
                break;
            case "--include":
                options.include = true;
                break;
            case "--paginate":
                options.paginate = true;
                break;
            case "--silent":
                options.silent = true;
                break;
        }
    }
    if (h !== undefined) {
        let b = _C(h);
        if (ho(h)) {
            options.host = nr;
        } else if (s === CV && d) {
            if (h !== "" && !i[0]?.includes("://")) {
                return {
                    kind: "refuse",
                    message: Z("GH_HOST")
                };
            }
        } else if (s === CV) {
            let f = q(h);
            if ("refusal" in f) {
                return {
                    kind: "refuse",
                    message: f.refusal
                };
            }
            options.host = f.host;
        } else if (s.includes(b)) {
            options.host = b;
        } else {
            return {
                kind: "refuse",
                message: I(h, s, d)
            };
        }
    }
    let [y, ...g] = i;
    if (y === undefined || g.length > 0) {
        return {
            kind: "refuse",
            message: `accepts 1 arg(s), received ${i.length}

${M(s)}`
        };
    }
    if (y === "") {
        return {
            kind: "refuse",
            message: "the endpoint is empty; give a REST path such as repos/{owner}/{repo}/pulls"
        };
    }
    if (options.paginate && options.inputFile !== undefined) {
        return {
            kind: "refuse",
            message: "the `--paginate` option is not supported with `--input`"
        };
    }
    if (options.paginate && options.method !== undefined && options.method.toUpperCase() !== "GET") {
        return {
            kind: "refuse",
            message: "the `--paginate` option is not supported for non-GET requests"
        };
    }
    if (options.silent && options.jq !== undefined) {
        return {
            kind: "refuse",
            message: "only one of `--silent` or `--jq` may be used, since `--silent` prints no response body"
        };
    }
    options.endpoint = y;
    return {
        kind: "api",
        options
    };
}
class P extends Error {
}
async function Ae(rawFields, typedFields, s) {
    let r = new Map;
    for (let n of rawFields){
        let { keys, key, value } = He(n);
        _e(r, keys, key, value);
    }
    for (let n of typedFields){
        let { keys, key, value } = He(n);
        _e(r, keys, key, value === undefined ? value : await s(value));
    }
    return r;
}
function te(e) {
    return Object.fromEntries([
        ...e
    ].map(([t, s])=>[
            t,
            xe(s)
        ]));
}
function Oe(e) {
    let t = [];
    for (let [s, r] of e){
        ee(t, s, r);
    }
    return t;
}
function xe(e) {
    if (e instanceof Map) {
        return te(e);
    }
    if (Array.isArray(e)) {
        return e.map(xe);
    }
    return e;
}
function ee(e, t, s) {
    if (s instanceof Map) {
        for (let [r, n] of s){
            ee(e, `${t}[${r}]`, n);
        }
    } else if (Array.isArray(s)) {
        for (let r of s){
            ee(e, `${t}[]`, r);
        }
    } else {
        e.push([
            t,
            s === null ? "" : String(s)
        ]);
    }
}
function He(e) {
    let keys = [];
    let s = 0;
    let r = 0;
    for(let n = 0; n < e.length && r === 0; n++){
        let i = e[n];
        if (i === "[") {
            if (s === 0) {
                keys.push(e.slice(0, n));
            }
            s = n + 1;
        } else if (i === "]") {
            keys.push(e.slice(s, n));
        } else if (i === "=") {
            if (s === 0) {
                keys.push(e.slice(0, n));
            }
            r = n + 1;
        }
    }
    if (keys.length === 0 || keys[0] === "") {
        throw new P(`invalid key: "${E(e)}"`);
    }
    if (r === 0) {
        if (keys.at(-1) !== "") {
            throw new P(`field "${E(e)}" requires a value separated by an '=' sign`);
        }
        return {
            keys,
            key: e,
            value: undefined
        };
    }
    return {
        keys,
        key: e.slice(0, r - 1),
        value: e.slice(r)
    };
}
function _e(e, keys, key, r) {
    let n = e;
    let i = false;
    let h = "";
    for (let l of keys){
        if (l === "") {
            i = true;
            continue;
        }
        if (h !== "") {
            n = gt(n, h, i ? l : undefined);
            i = false;
        }
        h = l;
    }
    let d = n.get(h);
    if (!i) {
        if (d !== undefined || r === undefined) {
            throw new P(d !== undefined ? `unexpected override existing field under "${E(h)}"` : `field "${E(key)}" requires a value separated by an '=' sign`);
        }
        n.set(h, r);
        return;
    }
    if (d !== undefined && !Array.isArray(d)) {
        throw new P(`expected array type under "${E(h)}"`);
    }
    n.set(h, r === undefined ? d ?? [] : [
        ...d ?? [],
        r
    ]);
}
function gt(e, t, s) {
    let r = e.get(t);
    let n = new Map;
    if (s === undefined) {
        if (r instanceof Map) {
            return r;
        }
        if (r !== undefined) {
            throw new P(`expected map type under "${E(t)}"`);
        }
        e.set(t, n);
        return n;
    }
    if (r !== undefined && !Array.isArray(r)) {
        throw new P(`expected array type under "${E(t)}"`);
    }
    let i = r?.at(-1);
    if (i instanceof Map && !i.has(s)) {
        return i;
    }
    e.set(t, [
        ...r ?? [],
        n
    ]);
    return n;
}
const wt = 10000;
const re = /\{(owner|repo|branch)\}|:(owner|repo|branch)\b/g;
const Pe = [
    "upstream",
    "github",
    "origin"
];
const yt = "^remote\\..+\\.(url|gh-resolved)$";
const Ge = /^[^/]+\/[^/]+$/;
class S extends Error {
}
function ke(e) {
    return e.search(re) !== -1;
}
class ie {
    cwd;
    ghRepo;
    ghRepoHost;
    ghesHosts;
    host;
    repository;
    branch;
    pathFrom;
    constructor(e, t, s, r){
        this.cwd = e;
        this.ghRepo = t ?? "";
        this.ghRepoHost = s ?? nr;
        this.ghesHosts = r;
        this.host = s;
    }
    pathFilledFromHost() {
        return this.pathFrom?.repository.host;
    }
    pathFilledFromRemote() {
        return this.pathFrom?.remote;
    }
    async fill(e, t) {
        let s = new Map;
        for (let [, r, n] of e.matchAll(re)){
            let i = r ?? n ?? "";
            if (s.has(i)) {
                continue;
            }
            if (i === "branch") {
                let h = await (this.branch ??= this.findBranch());
                s.set(i, t ? h.split("/").map(encodeURIComponent).join("/") : h);
            } else {
                let h = await (this.repository ??= this.findRepository());
                let { owner, name } = h.repository;
                let y = i === "owner" ? owner : name;
                if (t && y.includes("/")) {
                    throw new S(`{${i}} would be more than one path segment here (this checkout's repository is a nested project path, not OWNER/REPO): spell the endpoint out`);
                }
                s.set(i, y);
                if (t) {
                    this.pathFrom = h;
                }
            }
        }
        return e.replace(re, (r, n, i)=>s.get(n ?? i ?? "") ?? r);
    }
    async findRepository() {
        if (this.ghesHosts === CV) {
            return this.findOnAnyHost();
        }
        return this.findOnServedHost(this.ghesHosts);
    }
    async remoteListing() {
        let e = [
            "config",
            "-z",
            "--get-regexp",
            yt
        ];
        return await this.git(e) ?? "";
    }
    ghRepoRepository() {
        return mC(`https://${Ge.test(this.ghRepo) ? `${this.ghRepoHost}/` : ""}${this.ghRepo}`);
    }
    async findOnServedHost(e) {
        let t;
        let s = [
            nr,
            ...e
        ];
        let r = this.host === undefined ? s : [
            this.host
        ];
        if (this.ghRepo === "") {
            let n = await this.remoteListing();
            t = z(n, (h)=>L(h, r));
            let i = Fe(n).find(({ repository })=>!L(repository, s));
            if (!t && i && !bt(n, s)) {
                throw new S(`{owner}/{repo} would be this checkout's repository, whose remote is on another host: ${I(i.repository.host, e)}`);
            }
        } else {
            let n = this.ghRepoRepository();
            if (n && !L(n, s)) {
                throw new S(I(n.host, e));
            }
            let i = n && L(n, r);
            t = i ? {
                repository: i
            } : undefined;
        }
        if (!t) {
            let n = r.some((i)=>i !== nr);
            throw new S(`could not tell which ${r.join(" or ")} repository {owner}/{repo} is: set GH_REPO=${n ? "[HOST/]" : ""}OWNER/REPO or spell the repository out in the endpoint${r.length > 1 ? " and name its host with --hostname" : ""}`);
        }
        return t;
    }
    async findOnAnyHost() {
        let host = this.host;
        let t;
        if (this.ghRepo === "") {
            let s = await this.remoteListing();
            t = z(s, (n)=>L(n, [
                    host ?? nr
                ]));
            let r = t || host !== undefined ? undefined : z(s, (n)=>n);
            if (r) {
                let n = q(r.repository.host);
                if ("refusal" in n) {
                    throw new S(`{owner}/{repo} would be the repository of ${ae(r.remote)}: ${n.refusal}`);
                }
                t = {
                    remote: r.remote,
                    repository: {
                        ...r.repository,
                        host: n.host
                    }
                };
            }
        } else {
            let s = this.ghRepoRepository();
            if (s && !Ge.test(this.ghRepo) && !ho(s.host)) {
                throw new S(Z("GH_REPO"));
            }
            let r = s && L(s, [
                host ?? nr
            ]);
            t = r ? {
                repository: r
            } : undefined;
        }
        if (!t) {
            throw new S(`could not tell which ${host === undefined ? "" : `${host} `}repository {owner}/{repo} is: set GH_REPO=OWNER/REPO or spell the repository out in the endpoint${host === undefined ? " and name its host with --hostname" : ""}`);
        }
        return t;
    }
    async findBranch() {
        let e = await this.git([
            "symbolic-ref",
            "--quiet",
            "--short",
            "HEAD"
        ]);
        if (e === undefined) {
            throw new S("could not tell the current branch for {branch}: spell the branch out");
        }
        return e;
    }
    async git(e) {
        let t = await ct("git", [
            ...But,
            ...e
        ], {
            cwd: this.cwd,
            env: Cs(),
            timeout: wt,
            preserveOutputOnError: false
        });
        if (t.code === 0 && t.stdout.trim() !== "") {
            return t.stdout.trim();
        }
    }
}
function L(e, t) {
    let s = ho(e.host) ? nr : _C(e.host);
    if (t.includes(s)) {
        return {
            ...e,
            host: s
        };
    }
}
function bt(e, t) {
    return z(e, (s)=>L(s, t))?.repository;
}
function z(e, t) {
    let s = [];
    for (let { name, marked, repository } of Fe(e)){
        let d = t(repository);
        if (!d) {
            continue;
        }
        let l = Pe.indexOf(name);
        s.push({
            name,
            rank: marked ? -1 : l === -1 ? Pe.length : l,
            repository: d
        });
    }
    s.sort((n, i)=>n.rank - i.rank || (n.name < i.name ? -1 : n.name > i.name ? 1 : 0));
    let [r] = s;
    return r && {
        repository: r.repository,
        remote: r.name
    };
}
function ae(e) {
    if (e !== undefined && /^[A-Za-z0-9._-]{1,64}$/.test(e)) {
        return `this checkout's remote ${e}`;
    }
    return "one of this checkout's remotes";
}
function Fe(e) {
    let t = new Map;
    for (let s of e.split("\x00")){
        let [r = "", n] = s.split(`
`, 2);
        let i = /^remote\.(.+)\.(url|gh-resolved)$/.exec(r);
        if (n === undefined || i === null) {
            continue;
        }
        let [, h = "", d] = i;
        let l = t.get(h) ?? {
            marked: false
        };
        if (d === "url") {
            l.url ??= n;
        } else if (n === "base") {
            l.marked = true;
        }
        t.set(h, l);
    }
    return [
        ...t
    ].flatMap(([name, { url, marked }])=>{
        let i = url === undefined ? null : mC(url);
        if (i) {
            return [
                {
                    name,
                    marked,
                    repository: i
                }
            ];
        }
        return [];
    });
}
const ve = 4;
const Et = new Set([
    "api",
    "v3",
    "uploads"
]);
function Ce(pathname, t) {
    let s = pathname;
    for(let n = 0;; n++){
        let i = s.replace(/%([0-9a-f]{2})/gi, (h, d)=>String.fromCharCode(Number.parseInt(d, 16)));
        if (i === s) {
            break;
        }
        if (n === ve) {
            return `the path is percent-encoded more than ${ve} times over; spell it plainly`;
        }
        s = i;
    }
    let r = 0;
    for (let n of s.toLowerCase().replaceAll("\\", "/").split("/")){
        let i = Qe(n, ";");
        if (i === "..") {
            if (t) {
                return "the path holds a `..` segment (percent-encoded, or with `;` parameters); spell it plainly";
            }
            r = 0;
        } else if (r === 0 && /^graphql(?![a-z0-9_-])/.test(i)) {
            return $e;
        } else if (i !== "" && i !== "." && !Et.has(i)) {
            r++;
        }
    }
    if (/[\0-\x1f\x7f]/.test(s)) {
        return "the path contains an encoded control character";
    }
}
const maxBodyLength = 26214400;
const maxContentLength = 104857600;
const Rt = 8388608;
const St = 1048576;
const Le = 300000;
const Ne = 5;
const Ht = 141;
const _t = 255;
const At = new Set([
    301,
    302,
    303,
    307,
    308
]);
const Ot = "2022-11-28";
const xt = 120;
const Pt = /\/(?:repos\/[^/]+\/[^/]+|repositories\/\d+)\/actions\//;
const Be = `This session's GitHub proxy may have no GitHub Enterprise connection for that host, or it may not be a GitHub Enterprise host; nothing run in the session adds a connection. For ${nr}, add --hostname ${nr}.`;
const ze = "the endpoint is not a valid URL path";
const Gt = 91;
const kt = 93;
const Ft = new Set([
    32,
    9,
    10,
    13
]);
const qe = new Set([
    "accept",
    "accept-language",
    "content-type",
    "if-match",
    "if-modified-since",
    "if-none-match",
    "time-zone",
    "x-github-api-version",
    "x-github-next-global-id"
]);
const vt = p(()=>u({
        message: o().optional().catch(undefined),
        errors: Ue([
            o(),
            T(oe())
        ]).optional().catch(undefined)
    }));
const Ct = p(()=>u({
        message: o()
    }));
class m extends Error {
}
class de extends Error {
}
async function Lt(ghArgs, t) {
    let s = t.ghesHosts === CV ? t.ghesHosts : t.ghesHosts.filter((n)=>!n.endsWith(p$e) && URL.parse(TZ(n))?.hostname === n);
    let r = Se(ghArgs, t.ghHost, s, {
        ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
        PACKAGE_URL: "@anthropic-ai/claude-code",
        README_URL: "https://code.claude.com/docs/en/overview",
        VERSION: "2.1.296",
        FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
        BUILD_TIME: "2026-10-09T01:31:52Z",
        GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
        HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
        DD_SOURCEMAP_GROUP: "default"
    }.VERSION);
    try {
        switch(r.kind){
            case "help":
                await t.write("stdout", M(s));
                return 0;
            case "refuse":
                await t.write("stderr", `gh: ${r.message}
`);
                return 1;
            case "api":
                return await qt(r.options, t, s);
        }
    } catch (error) {
        if (error instanceof de) {
            return Ht;
        }
        await t.write("stderr", `gh: ${tt(error, t.proxyUrl)}
`);
        return 1;
    }
}
export async function ghStandinMain({ port, caBundlePath, ghesHosts, ghArgs }) {
    let write = Nt;
    Npe(process.stdout);
    Npe(process.stderr);
    let i = 1;
    let ca;
    try {
        await using d = await open(caBundlePath, "r");
        ca = (await R0(d, Rt)).toString("utf8");
    } catch (error) {
        await write("stderr", `gh: ${We(v(error) ?? "unreadable")}
`);
    }
    if (ca !== undefined) {
        i = await Lt(ghArgs, {
            proxyUrl: `http://127.0.0.1:${port}`,
            ca,
            cwd: se(),
            path: a.PATH ?? "",
            ghHost: a.GH_HOST,
            ghRepo: a.GH_REPO,
            ghesHosts,
            get stdin () {
                return process.stdin;
            },
            write
        });
    }
    XJt(i);
}
async function Nt(e, t) {
    if (!await Ut(process[e], t) && e === "stdout") {
        throw new de;
    }
}
function Ut(e, t) {
    if (e.destroyed || e.writableEnded) {
        return Promise.resolve(false);
    }
    let { promise, resolve } = Promise.withResolvers();
    let n = ()=>resolve(false);
    e.once("error", n);
    e.once("close", n);
    e.write(t, (i)=>resolve(!i));
    return promise.finally(()=>{
        e.off("error", n);
        e.off("close", n);
    });
}
function We(e) {
    return `could not read this session's GitHub proxy CA bundle (${e}).`;
}
function Bt(e, t) {
    return [
        ...t === "windows" ? [
            "--binary"
        ] : [],
        "-r",
        "-c",
        ` ${e}`
    ];
}
async function qt(options, t, s) {
    if (Tt()) {
        throw new m("the built-in gh api is off in this session: nonessential network traffic is disabled (CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC)");
    }
    let r = t.apiOrigin ?? TZ(nr);
    let n = Ie(options.endpoint, r, s);
    let i = new ie(t.cwd, t.ghRepo, n?.host ?? options.host, s);
    let h = await Ae(options.rawFields, options.typedFields, async (w)=>{
        if (w.startsWith("@")) {
            return (await De(w.slice(1), t)).toString("utf8");
        }
        if (/^[+-]?\d+$/.test(w) && Number.isSafeInteger(Number(w))) {
            return Number(w);
        }
        switch(w){
            case "true":
                return true;
            case "false":
                return false;
            case "null":
                return null;
            default:
                return i.fill(w, false);
        }
    });
    let d = options.inputFile !== undefined;
    let method = (options.method ?? (h.size > 0 || d ? "POST" : "GET")).toUpperCase();
    if (options.paginate && method !== "GET") {
        throw new m("the `--paginate` option is not supported for non-GET requests; with fields the method is POST unless `-X GET` sends them as query parameters");
    }
    let y = await i.fill(options.endpoint, true);
    let g = Ie(y, r, s);
    if (g?.host !== n?.host || g?.apiBase !== n?.apiBase) {
        throw new m("filling in {owner}, {repo} or {branch} would change the host of the endpoint: spell the endpoint out");
    }
    let b = g?.host ?? options.host ?? i.pathFilledFromHost();
    let { host, apiBase } = g ?? Ve(b ?? nr, r, s);
    let k;
    if (host !== nr && s === CV) {
        let w = g !== undefined ? "the host in the endpoint URL" : options.host !== undefined ? "the host --hostname names" : `the host of ${ae(i.pathFilledFromRemote())}`;
        k = `${host}, not ${nr}: ${w}.`;
    }
    let url = Me(y, apiBase);
    let body;
    if (method === "GET" || d) {
        for (let [w, B] of Oe(h)){
            url.searchParams.append(w, B);
        }
        if (options.inputFile !== undefined) {
            body = await De(options.inputFile, t);
        }
    } else if (h.size > 0) {
        body = Buffer.from(_(te(h)), "utf8");
    }
    if (options.paginate && !url.searchParams.has("per_page")) {
        url.searchParams.set("per_page", "100");
    }
    let headers = Xt(options.headers, body !== undefined);
    let N = options.jq === undefined ? undefined : xpe("jq", t.path);
    if (N === null) {
        throw new m("--jq needs jq, which is not installed on this machine (not found on PATH): run the command without --jq and pipe the output to a JSON tool that is installed.");
    }
    try {
        new X509Certificate(t.ca);
    } catch  {
        throw new m(We("no certificate in it"));
    }
    let W = {
        ca: t.ca,
        rejectUnauthorized: true
    };
    let httpsAgent = new A5e(t.proxyUrl, W);
    httpsAgent.options = {
        ...httpsAgent.options,
        ...W
    };
    let nt = {
        httpsAgent,
        proxy: false,
        responseType: "arraybuffer",
        validateStatus: ()=>true,
        maxRedirects: 0,
        maxContentLength,
        maxBodyLength,
        timeout: Le
    };
    let ue = k !== undefined;
    let ce = {
        answered: false
    };
    let V = false;
    let pe = false;
    while(true){
        let w;
        try {
            w = await Mt({
                method,
                url,
                body,
                headers
            }, nt, apiBase, ce);
        } catch (error) {
            let C = ue && he(k, ce.answered, Ye(AO(error)?.connectStatus));
            if (!C) {
                throw error;
            }
            await t.write("stderr", `gh: ${tt(error, t.proxyUrl)}
${C}`);
            return 1;
        }
        let B = w.status > 299;
        let Y = k;
        k = undefined;
        if (Y !== undefined && !B) {
            await t.write("stderr", he(Y, true, false));
        }
        let le = options.paginate ? /<([^>]+)>;\s*rel="next"/.exec(String(w.headers.link ?? ""))?.[1] : undefined;
        if (options.include) {
            await t.write("stdout", zt(w));
        }
        let input = w.data;
        if (input.length > 0 && !options.silent) {
            if (N !== undefined && options.jq !== undefined && !B) {
                let R = await ct(N, Bt(options.jq, O()), {
                    cwd: t.cwd,
                    input,
                    timeout: Le,
                    stripFinalNewline: false,
                    preserveOutputOnError: true
                });
                await t.write("stdout", R.stdout);
                if (R.code !== 0) {
                    await t.write("stderr", rU(R.stderr));
                    return 1;
                }
            } else if (options.paginate && !options.include && !B && /[/+]json(;|$)/.test(String(w.headers["content-type"] ?? "")) && input[0] === Gt && input.at(-1) === kt) {
                let R = input.subarray(1, -1);
                if (!V) {
                    await t.write("stdout", "[");
                    V = true;
                }
                if (R.some((C)=>!Ft.has(C))) {
                    if (pe) {
                        await t.write("stdout", ",");
                    }
                    await t.write("stdout", R);
                    pe = true;
                }
            } else {
                await t.write("stdout", input);
            }
        }
        if (B) {
            await t.write("stderr", `gh: ${rU(Wt(w.status, input))}
`);
            let R = [
                401,
                403,
                404
            ].includes(w.status);
            let C = ue && he(Y, true, R || w.headers["x-proxy-error"] !== undefined);
            if (C) {
                await t.write("stderr", C);
            } else if (s !== CV && b === undefined && s.length > 0 && R) {
                await t.write("stderr", `this request went to ${nr}; for a repository on ${s.join(" or ")}, add --hostname <host> or write the endpoint as repos/{owner}/{repo}/...
`);
            }
            return 1;
        }
        if (le === undefined) {
            if (V) {
                await t.write("stdout", "]");
            }
            return 0;
        }
        url = It(Me(le, apiBase), url, apiBase);
    }
}
function he(e, t, s) {
    if (e === undefined) {
        if (s) {
            return `${Be}
`;
        }
        return "";
    }
    return `this request ${t ? "went to" : "was for"} ${e}${s ? ` ${Be}` : ""}
`;
}
function It(e, url, apiBase) {
    let r = new URL(apiBase).pathname.replace(/\/$/, "");
    let n = /^\/repositories\/\d+(\/.*?)?\/?$/.exec(e.pathname.slice(r.length));
    let i = /^\/repos\/[^/]+\/[^/]+(\/.*?)?\/?$/.exec(url.pathname.slice(r.length));
    if (n === null || i === null || n[1] !== i[1]) {
        return e;
    }
    let h = new URL(url);
    h.search = e.search;
    return h;
}
async function Mt(e, t, apiBase, r) {
    let n = e;
    for(let i = 0;; i++){
        let h = await Dt(n, t);
        r.answered = true;
        let d = h.headers.location;
        if (!At.has(h.status) || typeof d !== "string" || d === "") {
            return h;
        }
        if (i === Ne) {
            throw new m(`stopped after ${Ne} redirects`);
        }
        let url = jt(d, n.url, apiBase);
        n = h.status === 307 || h.status === 308 ? {
            ...n,
            url
        } : {
            method: n.method === "HEAD" ? "HEAD" : "GET",
            url,
            body: undefined,
            headers: {
                ...n.headers,
                "content-type": false
            }
        };
    }
}
function Dt({ method, url, body, headers }, n) {
    let i = {
        ...n,
        headers
    };
    switch(method){
        case "GET":
            return Wa.get(url.href, {
                ...i,
                data: body
            });
        case "HEAD":
            return Wa.head(url.href, i);
        case "POST":
            return Wa.post(url.href, body ?? Buffer.alloc(0), i);
        case "PUT":
            return Wa.put(url.href, body ?? Buffer.alloc(0), i);
        case "PATCH":
            return Wa.patch(url.href, body ?? Buffer.alloc(0), i);
        case "DELETE":
            return Wa.delete(url.href, {
                ...i,
                data: body
            });
        default:
            throw new m("unsupported method; use GET, HEAD, POST, PUT, PATCH or DELETE");
    }
}
function Ve(e, apiBase, s) {
    if (e === nr) {
        return {
            host: e,
            apiBase
        };
    }
    if (s !== CV) {
        return {
            host: e,
            apiBase: TZ(e)
        };
    }
    let r = q(e);
    if ("refusal" in r) {
        throw new m(r.refusal);
    }
    return r;
}
function Ie(e, t, s) {
    let r = e.indexOf("://");
    if (r === -1) {
        return;
    }
    Je(e);
    let n = e.slice(r + 3).search(/[/?#]/);
    let i = n === -1 ? e : e.slice(0, r + 3 + n);
    if (!/[/?#]/.test(e.slice(0, r)) && ke(i)) {
        throw new m("{owner}, {repo} and {branch} are filled in only in the path and query of an endpoint: this one is a URL with a placeholder before its path");
    }
    let h = URL.parse(e);
    if (!h) {
        throw new m(ze);
    }
    let d = s !== CV && s.includes(h.hostname);
    let l = h.protocol === "https:" && h.hostname !== new URL(t).hostname && !ho(h.hostname);
    if (l && !d && s !== CV) {
        throw new m(I(h.hostname, s));
    }
    let y = Ve(d || l ? h.hostname : nr, t, s);
    if (!Ze(h, new URL(y.apiBase))) {
        throw new m(Ke(y.apiBase));
    }
    return y;
}
function Ye(e) {
    return e !== undefined && e >= 400 && e < 500 && e !== 408 && e !== 429;
}
function Me(e, apiBase) {
    Je(e);
    let s;
    try {
        if (e.includes("://")) {
            s = new URL(e);
        } else {
            let r = new URL(apiBase).pathname.replace(/^\/|\/$/g, "");
            let n = e.replace(/^\//, "");
            let i = r !== "" && `${n.toLowerCase()}/`.startsWith(`${r.toLowerCase()}/`);
            s = new URL(i ? n.slice(r.length).replace(/^\//, "") : n, `${apiBase}/`);
        }
    } catch  {
        throw new m(ze);
    }
    return et(s, apiBase, Ke(apiBase));
}
function Je(e) {
    if (/[\p{Cc}\\]|(?! )\s/u.test(e)) {
        throw new m("the endpoint contains a tab, a line break, a control character or a backslash");
    }
}
function Ke(apiBase) {
    return `this gh sends requests to ${apiBase.replace("https://", "")} only; give a REST path such as repos/{owner}/{repo}/pulls`;
}
function jt(e, url, apiBase) {
    let r;
    try {
        r = new URL(e, url);
    } catch  {
        throw new m("refusing a redirect whose Location is not a URL");
    }
    let n = r.host === "" || r.host.length > _t ? "another host" : `${r.protocol}//${r.host}`;
    let i = r.username === "" && r.password === "" ? "" : " with a username or password in its URL";
    let h = new URL(apiBase);
    return et(r, apiBase, `refusing a redirect to ${n}${i}: this gh sends requests to ${apiBase} only, and running the command again or with other flags will not change that.` + (r.hostname !== "" && r.hostname !== h.hostname ? " GitHub serves logs, archives, artifacts and release files from other hosts, which this built-in gh does not contact." : "") + (Pt.test(url.pathname) ? " For a failed CI job read repos/{owner}/{repo}/actions/runs/<run-id>/jobs (its steps) and repos/{owner}/{repo}/check-runs/<check-run-id>/annotations." : ""));
}
function Ze(e, t) {
    return e.protocol === t.protocol && e.host === t.host && e.username === "" && e.password === "";
}
function et(e, t, s) {
    let r = new URL(t);
    if (!Ze(e, r)) {
        throw new m(s);
    }
    let n = Ce(e.pathname, r.pathname !== "/");
    if (n !== undefined) {
        throw new m(n);
    }
    if (r.pathname !== "/" && !e.pathname.startsWith(`${r.pathname}/`)) {
        throw new m(s);
    }
    e.hash = "";
    return e;
}
function Xt(headers, t) {
    let s = {
        accept: "*/*",
        "x-github-api-version": Ot,
        "content-type": t && "application/json; charset=utf-8"
    };
    for (let r of headers){
        let n = r.indexOf(":");
        if (n === -1) {
            throw new m(`header "${E(r)}" requires a value separated by ':'`);
        }
        let i = r.slice(0, n).trim().toLowerCase();
        let h = r.slice(n + 1).trim();
        if (!qe.has(i)) {
            throw new m(`the ${/^[a-z0-9-]+$/.test(i) ? `${i} ` : ""}header cannot be set through this session's GitHub proxy; headers that can: ${[
                ...qe
            ].join(", ")}`);
        }
        if (/[^\P{Cc}\t]/u.test(h)) {
            throw new m(`the ${i} header value contains a control character`);
        }
        s[i] = h;
    }
    return {
        ...s,
        authorization: `token ${bN}`,
        "user-agent": `claude-code-gh-standin/${({
            ISSUES_EXPLAINER: "report the issue at https://github.com/anthropics/claude-code/issues",
            PACKAGE_URL: "@anthropic-ai/claude-code",
            README_URL: "https://code.claude.com/docs/en/overview",
            VERSION: "2.1.296",
            FEEDBACK_CHANNEL: "https://github.com/anthropics/claude-code/issues",
            BUILD_TIME: "2026-10-09T01:31:52Z",
            GIT_SHA: "fdb6c17a97b6e0e3cf15e3566663fca58e7c43a9",
            HOOKS_WORKER_URL: "/$bunfs/root/src/plugins/functionHooks/hooks-worker/hooks-worker.js",
            DD_SOURCEMAP_GROUP: "default"
        }).VERSION}`
    };
}
async function De(e, t) {
    let s = new m(`${e === "-" ? "standard input" : E(e)} is larger than ${maxBodyLength / 1048576} MB, the most this gh sends`);
    if (e === "-") {
        let n = [];
        let i = 0;
        for await (let h of t.stdin){
            let d = Buffer.from(h);
            i += d.length;
            if (i > maxBodyLength) {
                throw s;
            }
            n.push(d);
        }
        return Buffer.concat(n);
    }
    let r;
    try {
        await using n = await open(e, "r");
        r = await R0(n, maxBodyLength + 1);
    } catch (error) {
        throw new m(`could not read ${E(e)} (${v(error) ?? "unreadable"})`);
    }
    if (r.length > maxBodyLength) {
        throw s;
    }
    return r;
}
function zt(e) {
    let t = [
        `HTTP/1.1 ${e.status} ${e.statusText}`.trimEnd()
    ];
    for (let [s, r] of Object.entries(e.headers).sort(([n], [i])=>{
        if (n < i) {
            return -1;
        }
        if (n > i) {
            return 1;
        }
        return 0;
    })){
        let n = s.replace(/(^|-)([a-z])/g, (i, h, d)=>`${h}${d.toUpperCase()}`);
        for (let i of Array.isArray(r) ? r : [
            r
        ]){
            t.push(`${n}: ${String(i)}`);
        }
    }
    return `${t.join(`\r
`)}\r
\r
`;
}
function Wt(status, input) {
    let s;
    try {
        s = input.length <= St ? X(input.toString("utf8")) : undefined;
    } catch  {
        s = undefined;
    }
    let r = vt().safeParse(s);
    if (!r.success) {
        return `HTTP ${status}`;
    }
    let { message, errors } = r.data;
    if (typeof errors === "string" && errors !== "") {
        if (message) {
            return `${errors} (${message})`;
        }
        return errors;
    }
    if (message) {
        return `${message} (HTTP ${status})`;
    }
    let h = [];
    for (let d of Array.isArray(errors) ? errors : []){
        let l = Ct().safeParse(d);
        if (typeof d === "string") {
            h.push(d);
        } else if (l.success) {
            h.push(l.data.message);
        }
    }
    if (h.length > 0) {
        return h.join(`
`);
    }
    return `HTTP ${status}`;
}
function tt(error, proxyUrl) {
    if (error instanceof m || error instanceof P || error instanceof S) {
        return error.message;
    }
    let s = AO(error);
    if (s !== undefined) {
        let n = s.connectStatus;
        let i = mq(n);
        if (Ye(n)) {
            return `this session's GitHub proxy refused the connection (${i}); do not retry unchanged`;
        }
        let h = String(s.headers["retry-after"] ?? "");
        let d = /^\d{1,3}$/.test(h) ? Number(h) : 0;
        let l = d > 1 && d <= xt ? `${d} seconds` : "a few seconds";
        return `this session's GitHub proxy could not open the connection (${i}); nothing was sent. This can be temporary: wait ${l} and run the command once more. If it fails again, stop and read GET ${proxyUrl}/__agentproxy/status for the proxy's state.`;
    }
    if (dd(error) && error.message.includes("maxContentLength")) {
        return `the response is larger than ${maxContentLength / 1048576} MB, the most this gh reads; ask for less (per_page, a narrower endpoint)`;
    }
    if (dd(error) && error.message.includes("maxBodyLength")) {
        return "the request body is too large";
    }
    let r = dd(error) ? error.code : v(error);
    return `could not reach GitHub through this session's GitHub proxy${r === undefined ? "" : ` (${r})`}`;
}
